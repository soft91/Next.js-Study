import React, { useState } from 'react';
import Link from 'next/link';

const App = () => {
  const [username, setUsername] = useState("");
  return(
    <div>
      {/* <label>
        username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <p>{username} 깃 허브 검색하기</p>
      <Link href={`/users/${username}`}>
        <a>검색하기</a>
      </Link> */}
      검색창에 GitHub ID를 입력해주세요.
    </div>
  )
};

export default App;