import css from "styled-jsx/css";

const style = css`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .first-div {
    width: 200px;
    height: 200px;
    background-color: red;
  }
  .second-div {
    width: 200px;
    height: 200px;
    background-color: green;
  }
  .third-div {
    width: 200px;
    height: 200px;
    background-color: blue;
  }
`

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="first-div">first</div>
        <div className="second-div">second</div>
        <div className="third-div">third</div>
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export default Home;
