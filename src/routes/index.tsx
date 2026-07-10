import { createFileRoute,Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SENTINEL_OS // HOME" },
      { name: "description", content: "OPERATOR_01 — Senior Penetration Tester. 7+ years specialized in offensive security, web app pentests, cloud audits, and red team operations." },
      { property: "og:title", content: "SENTINEL_OS // HOME" },
      { property: "og:description", content: "Encrypted operator profile and live system status terminal." },
    ],
  }),
  component: HomePage,
});

const OPERATOR_CHIPS = [
  { label: "RED TEAM", color: "text-primary-fixed border-primary-fixed/50" },
  // { label: "", color: "text-secondary-fixed border-secondary-fixed/50" },
  { label: "INDIA", color: "text-tertiary-fixed-dim border-tertiary-fixed-dim/50" },
  { label: "HTB", color: "text-primary-fixed border-primary-fixed/50" },
  { label: "SECURITY_ENTHUSIAST", color: "text-secondary-fixed border-secondary-fixed/50" },
];
const SKILLS = [
  { cat: "WEB", items: ["Burp Suite", "SQLMap", "FFUF", "Nuclei", "Gobuster"] },
  { cat: "NETWORK", items: ["Nmap", "Wireshark", "Metasploit", "Netcat"] },
  { cat: "SCRIPTING", items: ["Python", "Bash", "C"] },
  { cat: "HARDWARE", items: ["Arduino", "Raspberry Pi", "UPnP/DLNA"] },
  { cat: "OTHER", items: ["Linux", "Git", "Docker", "HackTheBox"] },
];

function HomePage() {
  const [printed, setPrinted] = useState<string[]>([]);

  return (
    <SiteLayout>

      {/* ── HERO ── */}
      <section className="mb-20" id="home">
        {/* Bold header block */}
        <div className="mb-10 border-l-4 border-primary-fixed pl-6">
          {/* Name */}
          <h1
            className="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase tracking-tighter glitch-text mb-1"
            data-glitch="SENTINEL_OS"
          >
            SENTINEL_OS
            <span className="inline-block w-3 h-7 bg-primary-fixed align-middle ml-3 animate-pulse" />
          </h1>

          {/* Identity chips */}
          <div className="flex flex-wrap gap-2 mt-3 mb-4">
            {OPERATOR_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className={`font-code-sm text-[10px] border px-2.5 py-0.5 uppercase tracking-widest ${chip.color} bg-black/40`}
              >
                {chip.label}
              </span>
            ))}
          </div>

          <p className="text-outline font-body-md max-w-2xl">
            CS student &amp; offensive security enthusiast — breaking things legally. CTFs, red team tooling, and IoT research.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              to="/projects"
              className="relative border border-primary-fixed text-primary-fixed px-5 py-2 font-code-sm text-xs uppercase tracking-widest hover:bg-primary-fixed/10 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:text-white transition-all active:scale-95 group overflow-hidden"
            >
              <span className="relative z-10">[ VIEW_PROJECTS ]</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHOAMI Section */}
      <section className="mb-20 scroll-mt-24" id="system">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary-fixed glitch-text uppercase">
            WHO AM I
          </h1>
          <div className="h-px flex-1 bg-outline-variant/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="terminal-glow bg-surface-container-lowest p-6 relative">
            <div className="absolute top-0 right-0 p-2 text-[10px] text-outline-variant font-code-sm">
              ID: 0xDEADBEEF
            </div>
            <p className="text-primary-fixed font-headline-md mb-4">&gt; PROFILE_DATA</p>
            <p className="text-on-surface mb-6 leading-relaxed">
              Specialized Penetration Tester with 7+ years of experience in Offensive Security.
              Focused on web application security, cloud infrastructure auditing, and red teaming
              operations. Known for identifying critical vulnerabilities in high-security
              environments.
            </p>
            <div className="grid grid-cols-2 gap-4 font-code-sm">
              <div className="border-l-2 border-primary-fixed pl-4">
                <span className="text-outline block uppercase text-[10px]">Current Role</span>
                <span className="text-primary-fixed">Senior Security Researcher</span>
              </div>
              <div className="border-l-2 border-secondary-fixed pl-4">
                <span className="text-outline block uppercase text-[10px]">Clearance</span>
                <span className="text-secondary-fixed">LEVEL_05</span>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="border border-primary-fixed text-primary-fixed px-4 py-2 font-code-sm text-[10px] uppercase tracking-widest hover:shadow-[0_0_15px_#39FF14] hover:bg-primary-fixed/10 transition-all active:scale-95 animate-flicker glitch-text">
                [ EXECUTE: GET_CV.PDF ]
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group min-h-[320px]">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 absolute inset-0"
              alt="Cybersecurity workstation lit by green and blue monitor glow"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgIMUGLs5q4eEworArjde7lhMLU0UDna46hdpTqXIRbMi7ax_L-OTbhTMSf1F1WYyIgycwrubNgnnQJ7BUBwNOpL0CGXSSnEXKgYJbfF3rvaN3OnKh94goyvbXZJKhp29hq3lvK5xehUdXL782IckP8LD48BLjd0EjqH7fP2i3Zhn1YWUssg6IlPj9FfMbbqp9YwPkTo2GhX5FKQbu_ARcTBYJQV9cR9EcwcY62rALeV9pZbxR871IOzedHDb3snb0-556b08UGOZ7"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <p className="font-code-sm text-primary-fixed">
                EST_LATENCY: 14ms // LOCATION: [ENCRYPTED]
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── SKILLS / ARSENAL ── */}
      <section className="mb-20 scroll-mt-24" id="arsenal">
        <div className="mb-8 border-l-4 border-secondary-fixed pl-6">
          <div className="flex items-center gap-4 mb-1">
            <span className="text-secondary-fixed font-code-sm">TOOLS_LOADED: {SKILLS.reduce((a, s) => a + s.items.length, 0)}</span>
            <div className="h-px flex-1 bg-outline-variant" />
          </div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase tracking-tighter">
            ARSENAL
          </h2>
        </div>

        {/* Terminal-style skill dump */}
        <div className="border border-outline-variant bg-black p-6 font-code-sm text-primary-fixed mb-6">
          <p className="mb-3 text-outline-variant">root@parrot:~$ cat arsenal.conf</p>
          <div className="space-y-4">
            {SKILLS.map((group) => (
              <div key={group.cat} className="flex flex-wrap gap-x-6 gap-y-1">
                <span className="text-secondary-fixed w-24 shrink-0 uppercase">[{group.cat}]</span>
                <span className="text-primary-fixed">{group.items.join("  //  ")}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-1">
            <span className="text-outline-variant">root@parrot:~$</span>
            <span className="inline-block w-2 h-4 bg-primary-fixed align-middle animate-pulse ml-1" />
          </div>
        </div>

        {/* Tag cloud */}
        <div className="flex flex-wrap gap-2">
          {SKILLS.flatMap((g) =>
            g.items.map((item) => (
              <span
                key={item}
                className="font-code-sm text-xs border border-outline-variant/60 bg-surface-container-lowest text-outline-variant px-3 py-1 hover:border-primary-fixed hover:text-primary-fixed transition-all cursor-default"
              >
                {item}
              </span>
            ))
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
