import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";

const TodoItem = ({ todo, fetchDetailOfCurrentTodo }) => {
  //    console.log(todo);

  return (
    <>
      <Card
        sx={{
          maxWidth: 450,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography variant="h5" color={"text.secondary"}>
            {todo?.todo}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
          onClick={()=> fetchDetailOfCurrentTodo(todo?.id)}
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              opacity: "0.75",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
                opacity: "1",
              },
            }}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default TodoItem;
