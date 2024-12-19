import AuthNavBar from "@/features/authentication/AuthNavBar";
import Home from "@/features/home/presentation/home_screen";
import { auth } from "@/lib/auth";
import Landing from "../features/landing/presentation/landing_screen";

export default async function HomeOrLanding() {
  const session = await auth();
  if (session) {
    return <Home />;
  }
  return (
    <>
      <AuthNavBar />
      <Landing />;
    </>
  );
}
