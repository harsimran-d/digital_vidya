import Link from "next/link";

export default function AuthNavBar() {
  return (
    <div className="bg-black p-3 font-extrabold text-white underline">
      <Link href="/">Home</Link>
    </div>
  );
}
