import styled from "styled-components";

const Container = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	border: 1px solid black;
	.div1 {
		width: 200px;
		height: 200px;
		background-color: red;
	}
	.div2 {
		width: 200px;
		height: 200px;
		background-color: green;
	}
	.div3 {
		width: 200px;
		height: 200px;
		background-color: blue
	}
`

const Wrapper = () => {
	return (
		<Container>
			<div className="div1">DIV 1</div>
			<div className="div2">DIV 2</div>
			<div className="div3">DIV 3</div>
		</Container>
	)
}

export default Wrapper;