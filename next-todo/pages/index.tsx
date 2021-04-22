import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  {id: 1, text: "마트 가서 장보기", color: "red", checked: false},
  {id: 2, text: "슈퍼 가서 아이스크림사기", color: "blue", checked: false}
]
 
const index: NextPage = () => {
  return <TodoList todos={todos}/>
};

export default index;