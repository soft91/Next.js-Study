import React, { useMemo, useCallback} from "react";
import styled from "styled-components";
import palette from "../styles/palette";
import { TodoType } from "../types/todo";

const Container = styled.div`
  width: 100%;
  .todo-list-header {
		padding: 12px;
		border-bottom: 1px solid ${palette.gray};
  }
  .todo-list-last-todo {
		font-size: 14px;
		span {
			margin-left: 8px;
		}
  }
	.todo-list-header-colors {
		display: flex;
		.todo-list-header-color-num {
			display: flex;
			margin-right: 8px;
			p {
				font-size: 14px;
				line-height: 16px;
				margin: 0;
				margin-left: 6px;
			}
			.todo-list-header-round-color {
				width: 16px;
				height: 16px;
				border-radius: 50%;
			}
		}
	}
	.bg-blue {
		background-color: ${palette.blue};
	}
	.bg-green {
		background-color: ${palette.green};
	}
	.bg-navy {
		background-color: ${palette.navy};
	}
	.bg-orange {
		background-color: ${palette.orange};
	}
	.bg-red {
		background-color: ${palette.red};
	}
	.bg-yellow {
		background-color: ${palette.yellow};
	}
`;

interface IProps {
  todos: TodoType[];
}

const getTodoColorNums = useCallback(() => {
	let red = 0;
	let orange = 0;
	let yellow = 0;
	let green  = 0;
	let blue = 0;
	let navy = 0;
	todos.forEach((todo) => {
		switch (todo.color) {
			case "red":
				red += 1;
				break;
			case "orange":
				orange += 1;
				break;
			case "yellow":
				yellow += 1;
				break;
			case "green":
				green += 1;
				break;
			case "blue":
				blue += 1;
				break;
			case "navy":
				navy += 1;
				break;
			default:
				break;
		}
	})

	return {
		red,
		orange,
		yellow,
		green,
		blue,
		navy
	};
}, [todos]);

const todoColorNums = useMemo(getTodoColorNums, [todos]);

type ObjectIndexType = {
  [key: string]: number | undefined;
};

const todoColorNums2 = useMemo(() => {
  const colors: ObjectIndexType = {};
  todos.forEach((todo) => {
    const value = colors[todo.color];
    if(!value) {
      colors[`${todo.color}`] = 1;
    } else {
      colors[`${todo.color}`] = value + 1;
    }
  });
  return colors;
}, [todos]);

const TodoList: React.FC<IProps> = ({ todos }) => {
	return (
		<Container>
			<div className="todo-list-header">
				<p className="todo-list-last-todo">
					남은 TODO<span>{todos.length}개</span>
				</p>
				<div className="todo-list-header-colors">
					{Object.keys(todoColorNums).map((color, index) => (
						<div className="todo-list-header-color-num" key={index}>
							<div className={`todo-list-header-round-color bg-${color}`} />
							<p>{todoColorNums[color]}개</p>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default TodoList;