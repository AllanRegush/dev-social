"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status == "loading") {
    return <>Loading...</>;
  }

  if (status == "authenticated") {
    return <>Authenticated...</>;
  }
  return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>;
}
