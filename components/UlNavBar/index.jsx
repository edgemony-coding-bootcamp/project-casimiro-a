import { useSession,signOut } from "next-auth/react"
import Link from "next/link"

export default function UlNavBar(){

    const session = useSession();

    return(
    <ul>
        <li>
          <Link href={"/citta"}>
            <a>Città</a>
          </Link>
        </li>
        <li>
          <Link href={"/esperienze"}>
            <a>Esperienze</a>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </li>
        <li>
          {session ? (
            <a onClick={signOut} style={{ cursor: "pointer" }}>
              Sing Out
            </a>
          ) : (
            <Link href={"/auth/signin"}>
              <a>Login</a>
            </Link>
          )}
        </li>
    </ul>
    )
}