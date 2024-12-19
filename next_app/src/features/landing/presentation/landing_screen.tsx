import Link from "next/link";

export default function Landing() {
  return (
    <div className="mt-24">
      <h1 className="mt-8 text-center text-3xl">Digital Vidya</h1>
      <p className="text-center text-lg">
        The next generation online learning platform
      </p>
      <div className="h-2"></div>
      <div className="flex justify-center space-x-2">
        <Link href="/signup">
          <button className="rounded-lg border border-black p-1 shadow-md hover:opacity-70">
            Get Started
          </button>
        </Link>
        <Link href="/signin">
          <button className="p-1 underline hover:opacity-70">
            Have an account?
          </button>
        </Link>
      </div>
    </div>
  );
}
