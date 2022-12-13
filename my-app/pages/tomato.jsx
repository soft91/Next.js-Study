import Link from "next/link";
import { useRef } from "react";

const Tomato = () => {
  const h2Ref = useRef();

  const handleCopyClipBoard = async () => {
    const text = h2Ref.current.innerText;
    if (typeof window !== "undefined")
      await navigator.clipboard.writeText(text);
    alert("복사 성공!");
  };

  return (
    <div>
      <h2 ref={h2Ref}>Link to 'main' Page</h2>
      <button onClick={handleCopyClipBoard}>클립보드</button>
      <Link href="/">
        <a>Move to '/'</a>
      </Link>
    </div>
  );
};

export default Tomato;
