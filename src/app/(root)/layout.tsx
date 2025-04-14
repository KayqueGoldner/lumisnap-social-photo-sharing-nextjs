import { SignInFormDialog } from "@/modules/auth/ui/components/sign-in-form-dialog";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative size-full">
      <SignInFormDialog />
      {children}
    </main>
  );
};

export default RootLayout;
