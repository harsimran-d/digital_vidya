import AuthNavBar from "@/features/authentication/AuthNavBar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AuthNavBar />
      {children}
    </>
  );
}
