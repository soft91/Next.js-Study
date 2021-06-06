import Link from "next/link";

const Header = () => {
  return(
    <div>
      <Link href="/Page1">
        <a>Page1 이동</a>
      </Link>
      <Link href="/Page2">
        <a>Page2 이동</a>
      </Link>
      <Link href="/Page3">
        <a>Page3 이동</a>
      </Link>
    </div>
  )
}

export default Header;