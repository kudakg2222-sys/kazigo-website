"use client";

import { useState } from "react";

const features = [
{
number: "01",
icon: "Search",
title: "Find local services",
description:
"Discover service providers and find the help you need, all in one place.",
},
{
number: "02",
icon: "Services",
title: "Book with confidence",
description:
"Arrange services and keep track of your bookings from your phone.",
},
{
number: "03",
icon: "Connect",
title: "Stay connected",
description:
"Use messaging to communicate with service providers about your needs.",
},
];

export default function Home() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <main className="min-h-screen overflow-hidden bg-[#080b09] text-white"> <header className="relative z-20 border-b border-white/10 bg-[#070908]">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
    <a href="/" className="text-lg font-black tracking-tight sm:text-xl">
      KaziGo
    </a>

    <nav className="hidden items-center gap-7 text-sm md:flex">
      <a href="/projects" className="transition hover:text-[#b9f36a]">
        KACE Developers
      </a>
      <a href="#download" className="transition hover:text-[#b9f36a]">
        Download
      </a>
      <a
        href="https://github.com/kudakg2222-sys/kazigo-website/releases/download/v1.0.1/KaziGo-Android-v1.0.1.apk.apk"
        className="rounded-full bg-[#b9f36a] px-5 py-3 font-bold text-[#101510] transition hover:bg-white"
      >
        Get KaziGo
      </a>
    </nav>

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded-lg border border-white/15 px-3 py-2 text-sm md:hidden"
      aria-label="Toggle navigation"
      aria-expanded={menuOpen}
    >
      {menuOpen ? "Close" : "Menu"}
    </button>
  </div>

  {menuOpen && (
    <nav className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 text-sm md:hidden">
      <a href="/projects" onClick={() => setMenuOpen(false)}>
        KACE Developers
      </a>
      <a href="#download" onClick={() => setMenuOpen(false)}>
        Download for Android
      </a>
    </nav>
  )}
</header>

  <section className="relative">
    <div className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-[#b9f36a]/10 blur-3xl" />
    <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:py-32">
      <div className="relative z-10">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b9f36a]/25 bg-[#b9f36a]/5 px-4 py-2 text-xs font-semibold tracking-wide text-[#b9f36a]">
          <span className="h-2 w-2 rounded-full bg-[#b9f36a]" />
          YOUR LOCAL SERVICES, SIMPLIFIED
        </div>

        <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          Find help.
          <br />
          Book services.
          <br />
          <span className="text-[#b9f36a]">Get things done.</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
          Discover local service providers, arrange bookings and stay
          connected. KaziGo brings services and people together in one
          convenient place.
        </p>

        <div className="mt-9 flex flex-wrap gap-4" id="download">
          <a
            href="https://github.com/kudakg2222-sys/kazigo-website/releases/download/v1.0.1/KaziGo-Android-v1.0.1.apk.apk"
            className="inline-flex items-center gap-3 rounded-full bg-[#b9f36a] px-7 py-4 font-bold text-[#101510] transition hover:scale-[1.02] hover:bg-white"
          >
            <span className="text-xl">Download</span>
            Download for Android
          </a>
          <a
            href="#features"
            className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:border-[#b9f36a]/60"
          >
            Explore features <span className="ml-2">&gt;</span>
          </a>
        </div>

        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/50">
          <span>+ Easy to access</span>
          <span>+ Designed for mobile</span>
          <span>+ Built for local services</span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute inset-8 rounded-full bg-[#b9f36a]/10 blur-3xl" />
        <div className="relative rounded-[2.5rem] border border-white/10 bg-[#111612] p-4 shadow-2xl shadow-black/40 sm:p-6">
          <div className="rounded-[2rem] border border-white/10 bg-[#080b09] p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/50">WELCOME TO</p>
                <p className="mt-1 text-2xl font-black">
                  Kazi<span className="text-[#b9f36a]">Go</span>
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b9f36a] text-2xl font-black text-[#101510]">
                K
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#b9f36a] p-6 text-[#101510]">
              <p className="text-sm font-semibold opacity-70">
                WHAT DO YOU NEED?
              </p>
              <h2 className="mt-2 text-3xl font-black leading-tight">
                Find the right
                <br />
                person for the job.
              </h2>
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm font-medium">
                  Search services...
                </span>
                <span className="text-xl">Search</span>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between">
              <h3 className="font-bold">Explore services</h3>
              <span className="text-xs text-[#b9f36a]">DISCOVER</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["Home", "Home services"],
                ["Beauty", "Beauty & care"],
                ["Repair", "Repairs"],
                ["+", "More services"],
              ].map(([icon, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="text-2xl text-[#b9f36a]">{icon}</span>
                  <p className="mt-3 text-sm font-semibold">{label}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-center text-xs text-white/35">
              A marketplace that brings people together.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#161d17] px-5 py-4 shadow-xl sm:-left-8">
          <p className="text-sm font-bold">Your next service</p>
          <p className="mt-1 text-xs text-[#b9f36a]">
            Starts with KaziGo &gt;
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="features" className="border-t border-white/10 bg-[#0c100d]">
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-bold tracking-[0.2em] text-[#b9f36a]">
          WHAT YOU CAN DO
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Everything starts with a connection.
        </h2>
        <p className="mt-5 leading-7 text-white/55">
          KaziGo is designed to make discovering services and connecting
          with providers more convenient.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.number}
            className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-[#b9f36a]/40"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b9f36a]/10 text-3xl text-[#b9f36a]">
                {feature.icon}
              </span>
              <span className="text-sm text-white/30">
                {feature.number}
              </span>
            </div>
            <h3 className="mt-8 text-xl font-bold">{feature.title}</h3>
            <p className="mt-3 leading-7 text-white/55">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
    <div className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#151d14] to-[#0b0e0b] p-7 sm:p-12 lg:grid-cols-2 lg:p-16">
      <div>
        <p className="text-sm font-bold tracking-[0.2em] text-[#b9f36a]">
          ABOUT KAZIGO
        </p>
        <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          Making it easier to find the help you need.
        </h2>
      </div>
      <div>
        <p className="leading-8 text-white/60">
          KaziGo is a local services marketplace built to help customers
          discover providers and make connections. Our goal is to make
          finding and arranging everyday services simpler.
        </p>
        <a
          href="#download"
          className="mt-7 inline-flex items-center gap-2 font-bold text-[#b9f36a] hover:text-white"
        >
          Get started with KaziGo <span>{" > "}</span>
        </a>
      </div>
    </div>
  </section>

  <section id="android-download" className="px-5 pb-20 sm:px-8 sm:pb-28">
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#b9f36a] px-7 py-12 text-center text-[#101510] sm:px-14 sm:py-16">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#101510] text-3xl font-black text-[#b9f36a]">
        K
      </div>
      <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
        Ready to try KaziGo?
      </h2>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-[#101510]/70">
        Get ready to discover local services from your Android phone. Download
        the official KaziGo Android app below and start exploring.
      </p>
      <a
        href="https://github.com/kudakg2222-sys/kazigo-website/releases/download/v1.0.1/KaziGo-Android-v1.0.1.apk.apk"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#101510] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#101510]"
      >
        <span>Download</span> Download KaziGo for Android
      </a>
      <p className="mt-5 text-sm text-[#101510]/60">
        KaziGo Android v1.0.1 · Official APK
      </p>
    </div>
  </section>

  <footer className="border-t border-white/10">
    <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between">
      <a href="#" className="text-lg font-black text-white">
        Kazi<span className="text-[#b9f36a]">Go</span>
      </a>
      <p>Connecting people with local services.</p>
      <p>(c) 2026 KaziGo. All rights reserved.</p>
<p className="text-[#b9f36a]">Developed by KACE DEVELOPERS TEAM</p>
    </div>
  </footer>
</main>

);
}













