import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Page1 = (props) => {
  const router = useRouter();

  return(
    <Layout>
      <Link href="/Page1/Page1-1">
        <a className={router.pathname === "/Page1/Page1-1" ? "active" : ""}>Page1-1 이동</a>
      </Link>
      &nbsp;|&nbsp;
      <Link href="/Page1/Page1-2">
        <a className={router.pathname === "/Page1/Page1-2" ? "active" : ""}>Page1-2 이동</a>
      </Link>
      &nbsp;|&nbsp;
      <Link href="/Page1/Page1-3">
        <a className={router.pathname === "/Page1/Page1-3" ? "active" : ""}>Page1-3 이동</a>
      </Link>
      <style jsx>{`
        .active {
          color: blue;
        }
      `}</style>
      {props.children}
    </Layout>
  )
}

export default Page1;