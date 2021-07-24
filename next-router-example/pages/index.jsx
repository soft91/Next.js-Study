import { useRouter } from "next/router";
import { useEffect } from "react";
import css from "styled-jsx/css";

const style = css`
  .Container {
    display: flex;
    width: 700px;
    height: 500px;
    flex-direction: column;
  }
`;

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    console.log(`History Stack: ${window.history.length}`)
  }, [])
  
  return (
    <>
      <div className="Container">
        안녕? 나는 로그인 화면이야~
        로그인이 완료되면 나는 더 이상 볼 수 없어 ㅠㅠ
        <button 
          type="button" 
          onClick={() => router.replace("/Complete")}
        >
          로그인하기
        </button>
      </div>
      <style jsx>{style}</style>
    </>
  )
}