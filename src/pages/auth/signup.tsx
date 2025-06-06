import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) router.push("/auth/login");
    else alert("User already exists or signup failed");
  }

  return (
    <div className="text-black min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 p-6 rounded-xl shadow-lg bg-white">
        <h1 className="text-2xl font-semibold text-center">Create Account</h1>

        <form onSubmit={handleSignup} className="space-y-4">
          <Input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
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
            {loading ? "Creating..." : "Sign Up"}
          </Button>
        </form>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="underline text-blue-600">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
