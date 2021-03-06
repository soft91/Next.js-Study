import fetch from "isomorphic-unfetch";

const index = ({ data }) => {
  const test = data && data.title;
  return <div>{test}</div>
}

export const getServerSideProps = async() => {
  try{ 
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if(res.status === 200) {
      const data = await res.json();
      return { props: { data } };
    }
  } catch (e) {
    console.log(e);
  }
}

// getStaticProps Example
// export const getStaticProps = async () => {
//   return {props: { number: Math.random() }, revalidate: 3}
// }

export default index;