// pages/dashboard.tsx
import { Session } from "next-auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function Dash() {
const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    getSession().then((sess) => {
      if (!sess) {
        window.location.href = "/auth/login";
      } else {
        setSession(sess);
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-white mb-2">
       Welcome, {session?.user?.name || "Player"}! ⚽
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Ready to start your training today?
        </p>

        <Link href="/coach/coach">
          <Button size="lg" className="text-white bg-green-600 hover:bg-green-700">
            Start Training with AI Coach
          </Button>
        </Link>
      </main>
    </>
  );
}
