import React from "react";
import cookies from "next-cookies";
import { NextPageContext } from "next";

const Cookies = () => {
  const setCookies = () => {
    return document.cookie = 'token=auth'
  }

  return (
    <>
      <button onClick={setCookies}>Cookies</button>
    </>
  )
};

Cookies.getInitialProps = (ctx: NextPageContext) => {
  const { token } = cookies(ctx);

  if (token === 'auth') {
    if (ctx.req && ctx.res) {
      ctx.res.writeHead(302, { Location: '/login' })
      ctx.res.end()
    }
  }

  return { token }
}

export default Cookies;