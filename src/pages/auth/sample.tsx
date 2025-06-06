import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Sample() {
  return (
    <div
      className="min-h-screen bg-[url('https://images.ctfassets.net/mrbo2ykgx5lt/24908/b4ee67676ec7de49340be65693afda9b/frontiers-in-psychology-soccer-coaches-assessing-developing-player-football.jpg')] bg-cover bg-center bg-no-repeat"
      style={{ backgroundAttachment: "fixed", backgroundColor: "rgba(255,255,255,0.8)", backgroundBlendMode: "lighten" }}
    >
      <Navbar />

      <div className={`${geistSans.className} ${geistMono.className}`}>
        <main className="flex flex-col items-center justify-center min-h-[87vh] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight text-green-800">
            Train Smarter with Your{" "}
            <span className="text-green-600">AI Football Coach</span>
          </h1>

          <p className="text-lg mt-4 max-w-xl text-gray-700">
            Personalized training plans, feedback, and progress tracking — powered by AI.
            Improve your skills every day with intelligent coaching support.
          </p>

          <div className="mt-6 space-x-4">
            <Link href="/auth/signup">
              <Button variant="outline" size="lg">Get Started</Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline" size="lg">Already a member?</Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
