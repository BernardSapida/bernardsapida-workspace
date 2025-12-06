import RBACRoute from "~/app/_components/ProtectedRoute";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RBACRoute>{children}</RBACRoute>;
}
