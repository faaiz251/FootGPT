import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (res?.ok) router.push("/dashboard");
    else alert("Invalid credentials");
  }

  return (
    <div className="text-black min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 p-6 rounded-xl shadow-lg bg-white">
        <h1 className="text-2xl font-semibold text-center">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <Button className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="underline text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
