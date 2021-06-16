import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return(
    <div>
      <Link href="/Page1">
        <a className={router.pathname === "/Page1" ? "active" : ""}>Page1 이동</a>
      </Link>
      <Link href="/Page2">
        <a className={router.pathname === "/Page2" ? "active" : ""}>Page2 이동</a>
      </Link>
      <Link href="/Page3">
        <a className={router.pathname === "/Page3" ? "active" : ""}>Page3 이동</a>
      </Link>
      <style jsx>{`
        .active {
          color: blue;
        }
      `}</style>
    </div>
  )
}

export default Header;