"use client";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  "use client";
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const user = async () => {
    try {
      const api = await fetch('http://localhost:5000/"post_crud', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          pass: pass,
        }),
      });
      const data = await api.json();
      if (!api.ok) {
        console.log(data.mes);
      }
    } catch (err: any) {
      console.log(err.mes);
    }

    const [showPassword, setShowPassword] = useState(false);
    const [agree, setAgree] = useState(false);
    const router = useRouter();
    return (
      <>
        <Head>
          <title>Create your account — post_app</title>
          <meta
            name="description"
            content="Join post_app — a modern platform to share and explore posts."
          />
        </Head>

        <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,hsl(199_89%_48%_/_0.2),hsl(220_13%_6%)_60%)]" />
          <div className="absolute top-1/2 right-0 -z-10 h-[500px] w-[500px] rounded-full blur-3xl bg-blue-500/10" />
          <div className="absolute bottom-0 left-1/3 -z-10 h-[400px] w-[400px] rounded-full blur-3xl bg-cyan-500/10" />

          {/* HEADER */}
          <header className="flex items-center justify-between px-6 py-5 border-b border-white/5 backdrop-blur-md bg-background/30">
            <div className="flex items-center gap-2">
              {/* Zap icon */}
              <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-current stroke-2"
                >
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
              </div>

              <span className="font-semibold">post_app</span>
            </div>

            <div className="text-sm  text-white/60">
              Already have an account?{" "}
              <a
                className="text-primary ml-1 hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                href="#"
              >
                Sign in
              </a>
            </div>
          </header>

          <main className="grid lg:grid-cols-2 min-h-[calc(100vh-72px)]">
            {/* LEFT */}
            <section className="hidden lg:flex flex-col justify-between p-16 border-r border-white/5">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight">
                  Join thousands building on{" "}
                  <span className="text-primary">post_app</span>
                </h1>

                <p className="text-white/60 max-w-md">
                  Create an account to start sharing posts with a modern
                  community.
                </p>
              </div>
            </section>

            {/* RIGHT */}
            <section className="flex items-center justify-center p-8">
              <div className="w-full max-w-md">
                <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <h2 className="text-3xl font-bold mb-6">
                    Create your account
                  </h2>

                  <form className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="text-xs text-white/70">Full name</label>
                      <div className="relative">
                        {/* User icon */}
                        <svg
                          className="absolute left-3 top-3 h-4 w-4 text-white/40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>

                        <input className="w-full h-11 pl-10 rounded-xl bg-white/5 border border-white/10" />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="text-xs text-white/70">Password</label>

                      <div className="relative">
                        {/* Lock icon */}
                        <svg
                          className="absolute left-3 top-3 h-4 w-4 text-white/40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>

                        <input
                          type={showPassword ? "text" : "password"}
                          className="w-full h-11 pl-10 pr-10 rounded-xl bg-white/5 border border-white/10"
                        />

                        {/* 👇 زرار العين الصح */}
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-white/40 hover:text-white transition"
                        >
                          {showPassword ? (
                            /* Eye-off */
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-10-8-10-8a18.45 18.45 0 0 1 5.06-6.94" />
                              <path d="M1 1l22 22" />
                            </svg>
                          ) : (
                            /* Eye */
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Checkbox */}
                    <label className="flex items-center gap-2 text-xs text-white/60">
                      <input
                        type="checkbox"
                        onChange={(e) => setAgree(e.target.checked)}
                      />
                      I agree to terms
                    </label>

                    {/* Submit */}
                    <button
                      type="button"
                      disabled={!agree}
                      onClick={() => router.push("/home_post")}
                      className="w-full h-12 bg-primary rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      Create account
                      {/* Arrow */}
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </main>
        </div>
      </>
    );
  };
}
