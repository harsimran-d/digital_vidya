import Link from "next/link";

export default function AuthNavBar() {
  return (
    <div className="flex justify-between bg-black p-3 text-white">
      <Link href="/" className="font-bold">
        Home
      </Link>
      <div className="flex">
        <Link href="/signup">SignUp</Link>
        <div className="w-2"></div>
        <Link href="/signin">SignIn</Link>
      </div>
    </div>
  );
}
