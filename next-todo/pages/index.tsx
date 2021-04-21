import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  {id: 1, text: "마트 가서 장보기", color: "red", checked: false}
]
 
const index: NextPage = () => {
  return <TodoList todos={todos}/>
};

export default index;