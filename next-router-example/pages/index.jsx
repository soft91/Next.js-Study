import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div>      
      <Link href="/dynamic">
        <a>Move to Dynamic</a>
      </Link>
      <button type="button" onClick={() => router.push("/dynamic")}>
        Go to Example Page
      </button>
    </div>
  )
}