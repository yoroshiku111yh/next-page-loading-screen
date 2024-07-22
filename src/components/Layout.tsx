import Link from "next/link";
import Inner from "./Inner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className=" shadow-sm shadow-white bg-white text-black container flex flex-row flex-wrap gap-5 items-center justify-start text-base font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact us</Link>
      </header>
      <Inner>{children}</Inner>
    </>
  );
}
