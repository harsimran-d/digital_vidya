import { auth, signOut } from "@/lib/auth";
export default async function Home() {
  const session = await auth();
  return (
    <div>
      Hello {session?.user?.email}{" "}
      <button
        onClick={async () => {
          "use server";
          await signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
