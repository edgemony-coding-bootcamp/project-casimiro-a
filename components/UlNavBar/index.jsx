import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar";
import { toggleSideMenu } from "../../store/actions";

export default function UlNavBar({ mobile = false }) {
  const session = useSession();
  const dispatch = useDispatch();
  function hide(){
    mobile && dispatch(toggleSideMenu)
  }
  return (
    <ul>
      {mobile && (
        <li >
          <SearchBar />
        </li>
      )}
      <li onClick={hide}>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
      </li>
      <li onClick={hide}>
        <Link href={"/citta"}>
          <a>Città</a>
        </Link>
      </li>
      <li onClick={hide}>
        <Link href={"/esperienze"}>
          <a>Esperienze</a>
        </Link>
      </li>
      <li onClick={hide}>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
      </li>
      {mobile && session.data && (
        <li onClick={hide}>
          <Link href={"/cart"}>
            <a>Carrello</a>
          </Link>
        </li>
      )}
      <li onClick={hide}>
        {session.data != null ? (
          <a onClick={signOut} style={{ cursor: "pointer" }}>
            Logout
          </a>
        ) : (
          <Link href={"/auth/signin"}>
            <a>Login</a>
          </Link>
        )}
      </li>
    </ul>
  );
}
