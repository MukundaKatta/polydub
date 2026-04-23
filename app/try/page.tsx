"use client";

import { useState } from "react";
import Link from "next/link";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "pt", name: "Portuguese", flag: "🇧🇷" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
];

type Stage = "form" | "rendering" | "done";

export default function TryPage() {
  const [description, setDescription] = useState("");
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [stage, setStage] = useState<Stage>("form");

  const lang = LANGUAGES.find((l) => l.code === selectedLang);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!description.trim() || !selectedLang) return;
    setStage("rendering");
    setTimeout(() => setStage("done"), 3000);
  }

  function handleReset() {
    setDescription("");
    setSelectedLang(null);
    setStage("form");
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
          PolyDub
        </Link>
        <a
          href="/#waitlist"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Get early access
        </a>
      </nav>

      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Dub preview
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">
            Describe your video, pick a language.
          </h1>
        </div>

        {stage === "form" && (
          <form onSubmit={handleSubmit} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Video description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. A 5-minute cooking tutorial showing how to make ramen from scratch..."
                rows={4}
                required
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/10 resize-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Target language
              </label>
              <div className="grid grid-cols-5 gap-2">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setSelectedLang(l.code)}
                    className={
                      selectedLang === l.code
                        ? "flex flex-col items-center gap-1 rounded-2xl border-2 border-emerald-500 bg-emerald-50 p-3 text-emerald-900 transition"
                        : "flex flex-col items-center gap-1 rounded-2xl border border-neutral-200 bg-white p-3 text-neutral-700 transition hover:border-emerald-300 hover:bg-emerald-50"
                    }
                  >
                    <span className="text-2xl">{l.flag}</span>
                    <span className="text-xs font-medium">{l.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!description.trim() || !selectedLang}
              className="w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Generate dub preview →
            </button>
          </form>
        )}

        {stage === "rendering" && lang && (
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm text-center">
            <div className="text-6xl mb-4">{lang.flag}</div>
            <p className="text-xl font-bold text-neutral-900">{lang.name}</p>
            <p className="mt-2 text-sm text-neutral-500">rendering…</p>
            <div className="mt-6 h-2 w-48 mx-auto rounded-full bg-neutral-100 overflow-hidden relative">
              <div
                className="absolute inset-y-0 left-0 bg-emerald-500 rounded-full"
                style={{
                  animation: "progbar 3s ease-in-out forwards",
                  width: "0%",
                }}
              />
            </div>
          </div>
        )}

        {stage === "done" && lang && (
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">{lang.flag}</div>
              <p className="text-xl font-bold text-neutral-900">{lang.name} dub ready</p>
              <p className="mt-1 text-sm text-emerald-600 font-medium">Preview rendered</p>
            </div>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-emerald-200 via-emerald-100 to-teal-100 flex flex-col items-center justify-center gap-3">
              <div className="text-5xl">🎬</div>
              <p className="text-sm font-medium text-emerald-800">
                {lang.flag} {lang.name} · lip-sync complete
              </p>
            </div>
            <p className="mt-4 text-center text-xs text-neutral-400">
              This is a v0 mock. Real rendering coming soon.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={handleReset}
                className="rounded-full bg-neutral-900 px-7 py-3.5 font-medium text-white transition hover:bg-neutral-700"
              >
                Try another language
              </button>
              <a
                href="/#waitlist"
                className="rounded-full border border-neutral-300 px-7 py-3.5 font-medium text-neutral-900 transition hover:border-neutral-900 text-center"
              >
                Get early access
              </a>
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-neutral-400">
          This is a v0 preview.{" "}
          <Link href="/#waitlist" className="underline hover:text-neutral-600">
            Join the waitlist
          </Link>{" "}
          for the full dubbing experience.
        </p>
      </div>

      <style>{`
        @keyframes progbar {
          from { width: 0%; }
          to { width: 90%; }
        }
      `}</style>
    </div>
  );
}
