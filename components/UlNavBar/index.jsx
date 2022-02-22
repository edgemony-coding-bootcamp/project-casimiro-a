import { useSession,signOut } from "next-auth/react"
import Link from "next/link"

export default function UlNavBar({ mobile = false }){

    const session = useSession();

    return(
    <ul>
        <li>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
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
        {
          mobile && session.data &&
            <li>
              <Link href={'/cart'}>
                <a>Carrello</a>
              </Link>
            </li>
        }
        <li>
          {session.data != null ? (
            <a onClick={signOut} style={{ cursor: "pointer" }}>
            Signout
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
