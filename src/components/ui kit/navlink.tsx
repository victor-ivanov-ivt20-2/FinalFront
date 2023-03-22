import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
interface NavLinkProps {
  children: ReactNode;
  href: string;
}
const NavLink: FC<NavLinkProps> = ({ children, href }) => {
  const router = useRouter();
  const style = {
    color: router.pathname === href ? "#3B82F6" : "#64748B",
  };
  useEffect(() => {
    console.log(router.pathname);
  }, []);
  return (
    <Link href={href}>
      <span style={style}>{children}</span>
    </Link>
  );
};
export default NavLink;
