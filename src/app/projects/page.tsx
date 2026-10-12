import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "ZOT Marketplace",
    type: "Digital commerce",
    description:
      "A marketplace project focused on connecting buyers and sellers through a modern digital shopping experience.",
    status: "IN DEVELOPMENT",
    tone: "from-cyan-400/20 to-blue-600/5",
  },
  {
    number: "02",
    name: "MSA 26",
    type: "Trading simulator",
    description:
      "A trading training and demo environment featuring simulated markets, charts, practice modes and learning tools.",
    status: "PROJECT IN PROGRESS",
    tone: "from-amber-400/20 to-orange-600/5",
  },
  {
    number: "03",
    name: "KaziGo",
    type: "Local services",
    description:
      "Discover local service providers, explore services and connect with people who can help get jobs done.",
    status: "ANDROID DOWNLOAD AVAILABLE",
    tone: "from-lime-400/20 to-green-600/5",
    download: true,
  },
  {
    number: "04",
    name: "Fantasy 26",
    type: "Fantasy football",
    description:
      "A football-focused fantasy project built around the excitement of teams, players and competition.",
    status: "PROJECT IN PROGRESS",
    tone: "from-violet-400/20 to-purple-600/5",
  },
  {
    number: "05",
    name: "THE LAST RIDE",
    type: "3D adventure game",
    description:
      "Step into a cinematic 3D adventure filled with exploration, mysterious locations, challenging missions and unexpected discoveries. Every journey has a story. What will yours reveal?",
    status: "COMING SOON",
    tone: "from-indigo-500/30 via-violet-700/15 to-sky-500/10",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070908] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="text-lg font-black tracking-tight sm:text-xl">
            KACE <span className="text-[#b9f36a]">DEVELOPERS</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-[#b9f36a] hover:text-[#b9f36a]"
          >
            Back to KaziGo
          </Link>
        </div>
      </header>

      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(185,243,106,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-bold tracking-[0.35em] text-[#b9f36a] sm:text-sm">
            INNOVATION • TECHNOLOGY • GAMING
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
            We build what
            <span className="block text-[#b9f36a]">comes next.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Welcome to the KACE Developers project hub. Explore our apps,
            trading simulators, marketplace ideas, games and the ambitious
            technology we are working to bring to life.
          </p>
          <a
            href="#our-projects"
            className="mt-9 inline-flex rounded-full bg-[#b9f36a] px-7 py-4 font-bold text-[#101510] transition hover:bg-white"
          >
            Explore our projects <span className="ml-3">↓</span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#b9f36a]/30 bg-gradient-to-br from-[#172016] via-[#0c110d] to-[#080a09] p-7 sm:p-11">
            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#b9f36a]/20" />
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-[#b9f36a]/20" />

            <div className="relative">
              <span className="inline-flex rounded-full border border-[#b9f36a]/40 bg-[#b9f36a]/10 px-4 py-2 text-xs font-bold tracking-widest text-[#b9f36a]">
                OUR NEXT BIG AMBITION
              </span>
              <p className="mt-10 text-sm font-bold tracking-[0.3em] text-white/50">
                KACE OPERATING SYSTEM
              </p>
              <h2 className="mt-3 text-5xl font-black tracking-tight sm:text-7xl">
                KACE <span className="text-[#b9f36a]">OS</span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/70">
                An ambitious operating-system project exploring a fresh
                computing experience under the KACE Developers brand.
                Our long-term vision is to build an alternative that can
                challenge established desktop platforms, including Windows.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-3xl font-black text-[#b9f36a]">5 months</p>
                  <p className="mt-2 text-sm text-white/55">
                    In development, as reported by our team
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xl font-black">Demo trials</p>
                  <p className="mt-2 text-sm text-white/55">
                    Coming soon — announcement to follow
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-[#b9f36a]/20 bg-[#b9f36a]/5 p-5">
                <p className="font-bold text-[#b9f36a]">The mission</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  We are working toward our vision step by step. KACE OS is
                  still in development; it is not being presented as a
                  finished replacement for Windows. More details will be
                  shared as the project progresses.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#101311] p-7 sm:p-10">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-white/40">
                THE BIGGER PICTURE
              </p>
              <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                More than one app.
                <span className="block text-white/40">A growing ecosystem.</span>
              </h3>
              <p className="mt-5 leading-7 text-white/60">
                From useful everyday apps to games and ambitious computing
                projects, KACE Developers is building a portfolio of ideas.
                Each project has its own purpose, journey and release timeline.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {["APPLICATIONS", "MARKETPLACES", "TRADING TOOLS", "GAMES"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 px-4 py-5 text-xs font-bold tracking-wider text-white/65"
                  >
                    <span className="mb-3 block text-xl text-[#b9f36a]">✳</span>
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="our-projects" className="border-t border-white/10 bg-[#0b0e0c]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-[#b9f36a]">
                THE PROJECT LINEUP
              </p>
              <h2 className="mt-4 text-4xl font-black sm:text-6xl">
                Built by KACE.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-white/50">
              Project availability varies. Unreleased projects do not have
              public download links yet.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101311] transition duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <div
                  className={`relative flex h-44 items-end overflow-hidden bg-gradient-to-br ${project.tone} p-6`}
                >
                  <div className="absolute right-5 top-3 text-7xl font-black text-white/[0.07]">
                    {project.number}
                  </div>
                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                      {project.type}
                    </p>
                    <h3 className="mt-2 text-3xl font-black">{project.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="min-h-20 leading-7 text-white/60">
                    {project.description}
                  </p>
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <p className="text-xs font-bold tracking-wider text-[#b9f36a]">
                      {project.status}
                    </p>

                    {project.download ? (
                      <a
                        href="https://github.com/kudakg2222-sys/kazigo-website/releases/download/v1.0.1/KaziGo-Android-v1.0.1.apk.apk"
                        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#b9f36a] px-5 py-3 font-bold text-[#101510] transition hover:bg-white"
                      >
                        Download KaziGo for Android ↗
                      </a>
                    ) : (
                      <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/45">
                        Download link will be available soon on the official
                        KACE Developers website.
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}

            <article className="flex min-h-[25rem] flex-col justify-between rounded-[1.75rem] border border-dashed border-[#b9f36a]/30 bg-[#b9f36a]/[0.035] p-7">
              <div>
                <p className="text-xs font-bold tracking-[0.3em] text-[#b9f36a]">
                  THE JOURNEY CONTINUES
                </p>
                <h3 className="mt-5 text-4xl font-black leading-tight">
                  And we are
                  <span className="block text-[#b9f36a]">not stopping.</span>
                </h3>
                <p className="mt-5 leading-7 text-white/60">
                  New apps, games and technology projects are part of the
                  roadmap. Follow the official website for future announcements
                  and release information.
                </p>
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-bold">More projects incoming</p>
                <p className="mt-2 text-sm text-white/45">
                  New announcements will appear here as they are ready.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 KACE Developers. Built with ambition.</p>
          <Link
            href="/"
            className="font-semibold transition hover:text-[#b9f36a]"
          >
            Return to KaziGo homepage →
          </Link>
        </div>
      </footer>
    </main>
  );
}