import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { getTodosAPI } from "../lib/api/todos"; 
import { TodoType } from "../types/todo";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

interface IProps {
  todos: TodoType[];
}

const app: NextPage<IProps> = () => {
  return <TodoList todos={[]}/>
};

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  try {
    const { data } = await getTodosAPI();
    store.dispatch(todoActions.setTodo(data));
    return { props: {} };
  } catch (e) {
    return { props: {} };
  }
});

export default app;