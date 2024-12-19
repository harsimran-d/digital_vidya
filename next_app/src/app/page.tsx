import AuthNavBar from "@/features/authentication/AuthNavBar";
import Landing from "../features/landing/presentation/landing_screen";

export default function HomeOrLanding() {
  return (
    <>
      <AuthNavBar />
      <Landing />;
    </>
  );
}
