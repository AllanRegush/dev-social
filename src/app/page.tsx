import Link from "next/link";
import AuthCheck from "~/components/AuthCheck";
import { SignInButton, SignOutButton } from "~/components/buttons";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>
        <li>
          <SignInButton />
        </li>

        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </div>
    </main>
  );
}
