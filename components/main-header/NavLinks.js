"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path === href ? `${styles.active} ${styles.link}` : `${styles.link}`
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
