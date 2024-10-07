import { RiDeleteBin2Fill } from "react-icons/ri";

function TodoItem({todoName, todoDate, onDeleteClick}) {

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger kg-btn" onClick={() => onDeleteClick(todoName)}><RiDeleteBin2Fill /></button>
        </div>
      </div>
    </div>
  )
  
};

export default TodoItem;