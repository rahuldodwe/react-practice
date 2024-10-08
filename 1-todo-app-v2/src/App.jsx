import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import TodoItem from "./components/todo-item/TodoItem";
import TodoDetails from "./components/todo-details/TodoDetails";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMSG, setErrorMSG] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchTodoList() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();
      setLoading(false);

      // console.log(result);

      if (result?.todos && result?.todos?.length > 0) {
        setLoading(false);
        setTodoList(result?.todos);
      }
    } catch (e) {
      console.log(e);
      setErrorMSG("Some error");
    }
  }

  async function fetchDetailOfCurrentTodo(getCurrentTodoId) {
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const details = await apiResponse.json();
      // console.log(details);
      if(details){
        setTodoDetails(details);
        setOpenDialog(true);
      }
      else{
        setOpenDialog(false);
      }


    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <div className={styles.mainwrapper}>
      <h1 className={styles.headerTitle}>Simple Todo App using Material UI</h1>
      {loading ? <h3>Loadin Data, Please Wait !</h3> : null}
      <div className={styles.todoListWrapper}>
        {todoList && todoList.length > 0
          ? todoList.map((todoItem) => (
              <TodoItem
                key={todoItem?.id}
                fetchDetailOfCurrentTodo={fetchDetailOfCurrentTodo}
                todo={todoItem}
              />
            ))
          : null}
      </div>
      <TodoDetails setOpenDialog={setOpenDialog} openDialog={openDialog} todoDetails={todoDetails} setTodoDetails={setTodoDetails} />
    </div>
  );
}

export default App;
