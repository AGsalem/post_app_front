"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./com/page";

export default function Home() {
  const { dark, setDark } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <main
      className={
        dark
          ? "min-h-screen bg-black text-white flex flex-col transition-colors"
          : "min-h-screen bg-white text-black flex flex-col transition-colors"
      }
    >

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50">
        <div
          className={
            dark
              ? "backdrop-blur-md bg-black/40 border-b border-white/10"
              : "backdrop-blur-md bg-white/70 border-b border-black/10"
          }
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

            <Link href="/" className="font-bold tracking-widest">
              POST_APP
            </Link>

            <nav className="hidden md:flex gap-8 text-sm opacity-70">
              <Link href="#features">Features</Link>
              <Link href="#about">About</Link>
              <Link href="#contact">Contact</Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">

              <button
                onClick={() => setDark(!dark)}
                className={
                  dark
                    ? "text-sm px-3 py-1 rounded-full border border-white/20 hover:bg-white/10"
                    : "text-sm px-3 py-1 rounded-full border border-black/20 hover:bg-black/10"
                }
              >
                {dark ? "☀ Light" : "🌙 Dark"}
              </button>

              <Link href="/dashboard" className="opacity-70 hover:opacity-100 text-sm">
                Sign In
              </Link>

              <Link
                href="/create"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-sm text-white"
              >
                Get Started
              </Link>

            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>

          </div>

          {open && (
            <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm opacity-70">
              <Link href="#features">Features</Link>
              <Link href="#about">About</Link>
              <Link href="#contact">Contact</Link>

              <button
                onClick={() => setDark(!dark)}
                className="mt-2 border px-3 py-1 rounded-full w-fit"
              >
                Toggle Theme
              </button>
            </div>
          )}

        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 text-center px-6 flex-1">

        <h1 className="text-5xl font-bold">
          Welcome to{" "}
          <span className="text-blue-400">post_app</span>
        </h1>

        <p className="opacity-60 mt-4 max-w-xl mx-auto">
          A modern platform to share posts, ideas, and creativity with a clean and fast experience.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/create"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white"
          >
            Get Started
          </Link>

          <Link
            href="#features"
            className={
              dark
                ? "border border-white/20 px-6 py-3 rounded-full hover:bg-white/10"
                : "border border-black/20 px-6 py-3 rounded-full hover:bg-black/10"
            }
          >
            Learn More
          </Link>
        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6 border-t border-white/10">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold">Why post_app?</h2>
          <p className="opacity-60 mt-2">Simple. Fast. Modern.</p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              { title: "Clean UI", desc: "Minimal modern design." },
              { title: "Fast", desc: "Built with Next.js performance." },
              { title: "Sharing", desc: "Post ideas instantly." }
            ].map((f, i) => (
              <div
                key={i}
                className={
                  dark
                    ? "p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10"
                    : "p-6 border border-black/10 rounded-xl bg-black/5 hover:bg-black/10"
                }
              >
                <h3 className="font-semibold">{f.title}</h3>
                <p className="opacity-60 text-sm mt-2">{f.desc}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer
        className={
          dark
            ? "border-t border-white/10 py-10 px-6 bg-black"
            : "border-t border-black/10 py-10 px-6 bg-white"
        }
      >

        <div className="max-w-6xl mx-auto flex items-center justify-between">

          <h2 className="text-sm font-bold tracking-widest">
            POST_APP
          </h2>

          <div className="flex items-center gap-6 text-sm">

            <a href="#" className="flex items-center gap-2 hover:text-blue-400">
              GitHub
            </a>

            <a href="#" className="flex items-center gap-2 hover:text-blue-400">
              LinkedIn
            </a>

          </div>

        </div>

        <p className="text-center text-xs opacity-40 mt-6">
          © 2026 POST_APP — Inspired by Salem development
        </p>

      </footer>

    </main>
  );
}