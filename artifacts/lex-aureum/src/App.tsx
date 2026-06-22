import { useState } from "react";
import { motion } from "framer-motion";
import heroBgSrc from "@assets/068b1229-4d7a-4ad2-bb05-65ca7d624ff3_1781881405097.png";

// ─── TOKENS ──────────────────────────────────────────────────────────────────
const GOLD = "#c9a84c";
const HERO_BG = "#1a1a18";
const IVORY_BG = "#f5f0e8";
const IVORY_BG2 = "#ede8dc";
const IVORY_TEXT = "#f0ece2";
const IVORY_MUTED = "rgba(240,236,226,0.58)";
const CHARCOAL = "#2a2520";
const MUTED = "#7a6e64";
const BORDER = "rgba(201,168,76,0.22)";
const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'Inter', system-ui, sans-serif";

const CATEGORIES = ["Music", "Visual Art", "Photography", "Film", "Writing"];

const vin = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.72, ease: "easeOut" },
} as const;

// ─── ICONS ───────────────────────────────────────────────────────────────────
const SP = {
  fill: "none",
  stroke: GOLD,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PenIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);
const LockIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);
const DocIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const FolderIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
  </svg>
);
const ClockIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const EyeIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const LinkIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </svg>
);
const NoteIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const ExportIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const LayersIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const PersonIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const ShieldIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const PrintIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <path d="M6 9V2h12v7" />
    <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);
const ScaleIco = () => (
  <svg {...SP} width={22} height={22} viewBox="0 0 24 24">
    <line x1="12" y1="3" x2="12" y2="21" />
    <path d="M3 7l9-4 9 4" />
    <path d="M3 7l6 6a3 3 0 01-6 0z" />
    <path d="M21 7l-6 6a3 3 0 006 0z" />
  </svg>
);
const CheckIco = () => (
  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth={2} strokeLinecap="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// ─── DATA ────────────────────────────────────────────────────────────────────
const MANIFESTO_CARDS = [
  { icon: <PenIco />, title: "Create with confidence", body: "Focus on your craft knowing your ideas and originals have a private place to live and a record that proves you created first." },
  { icon: <LockIco />, title: "Share with control", body: "Send your work to the right people using secure, trackable links with clean, professional presentation." },
  { icon: <DocIco />, title: "Keep proof close", body: "When it matters, you'll have the records, history, and evidence you need — all in one place." },
];

const STEPS = [
  { num: "01", title: "Upload your work", body: "Store songs, images, scripts, videos, concepts, drafts, or project files in a private creative vault." },
  { num: "02", title: "Create a proof record", body: "Generate a timestamped record showing what existed, when it existed, and who submitted it." },
  { num: "03", title: "Share safely", body: "Send controlled preview links to clients, collaborators, labels, agencies, or buyers." },
  { num: "04", title: "Export your evidence", body: "When needed, prepare a clean proof pack containing records, files, dates, notes, and activity history." },
];

const FEATURES = [
  { icon: <FolderIco />, title: "Creative Work Vault", body: "Store and organize your original work in a private, secure vault." },
  { icon: <ClockIco />, title: "Timestamped Proof Records", body: "Cryptographically timestamped records that prove what existed and when." },
  { icon: <EyeIco />, title: "Watermarked Previews", body: "Share protected previews with embedded watermarks you control." },
  { icon: <LinkIco />, title: "Private Client Links", body: "Send controlled, trackable links to clients, collaborators, or decision makers." },
  { icon: <NoteIco />, title: "Agreement & License Notes", body: "Attach terms, notes, and agreements to each work or collaboration." },
  { icon: <ExportIco />, title: "Evidence Pack Export", body: "Export clean, organized proof packs for publishers, labels, or legal use." },
  { icon: <LayersIco />, title: "Version History", body: "Track changes and maintain a clear history of your creative evolution." },
  { icon: <PersonIco />, title: "Creator Profile", body: "Build your creator profile and professional portfolio, on your terms." },
];

const CREATOR_TABS = [
  {
    label: "Music",
    desc: "From early ideas to finished masters — protect every part of your process.",
    items: [
      { title: "Demos", body: "Lock your ideas the moment they're real." },
      { title: "Lyrics", body: "Protect words before they're out in the world." },
      { title: "Beats", body: "Secure your production and sounds." },
      { title: "Stems", body: "Keep your stems and mixes in your control." },
      { title: "Cover Art", body: "Protect the visuals that complete your story." },
    ],
  },
  {
    label: "Visual Art",
    desc: "From first sketch to final delivery — protect your process at every stage.",
    items: [
      { title: "Sketches", body: "Protect early concepts before they're developed." },
      { title: "Commissions", body: "Keep records of briefs, approvals, and delivery." },
      { title: "Digital Pieces", body: "Establish creation dates for every file." },
      { title: "Concepts", body: "Prove what you pitched before it was built." },
      { title: "References", body: "Track the source material behind your work." },
    ],
  },
  {
    label: "Photography",
    desc: "From proofs to private galleries — keep control of what you share and when.",
    items: [
      { title: "Galleries", body: "Control access to full image sets." },
      { title: "Proofs", body: "Send watermarked proofs with view tracking." },
      { title: "Client Previews", body: "Know when your work has been viewed." },
      { title: "RAW Files", body: "Establish timestamps for original captures." },
      { title: "Licensing", body: "Record who licensed what and when." },
    ],
  },
  {
    label: "Film",
    desc: "Every script, treatment, pitch, and cut has a version worth protecting.",
    items: [
      { title: "Scripts", body: "Timestamp every draft as it evolves." },
      { title: "Treatments", body: "Protect your pitch before you present it." },
      { title: "Pitch Decks", body: "Record what you shared and with whom." },
      { title: "Footage", body: "Establish authorship on original captures." },
      { title: "Cuts", body: "Track and protect every version of your edit." },
    ],
  },
  {
    label: "Writing",
    desc: "Ideas move fast. Protect your words before the world catches up.",
    items: [
      { title: "Manuscripts", body: "Timestamp chapters as they're written." },
      { title: "Poems", body: "Protect short-form work from early drafts." },
      { title: "Articles", body: "Record when your ideas were documented." },
      { title: "Concepts", body: "Protect pitches and treatments before submission." },
      { title: "Correspondence", body: "Keep records of important communications." },
    ],
  },
];

const TRUST_PILLARS = [
  { icon: <LockIco />, title: "Private by default", body: "Your files, records, and activity are private unless you choose to share them." },
  { icon: <PrintIco />, title: "Built for proof, not noise", body: "We focus on clear, verifiable records that support your ownership." },
  { icon: <ShieldIco />, title: "Designed before disputes happen", body: "Protect your creative work early, so you're not playing defense later." },
  { icon: <ScaleIco />, title: "Legal support without replacing a lawyer", body: "We provide tools and documents that strengthen your position, not legal advice." },
];

const FAQ_ITEMS = [
  { q: "What is Lex Aureum?", a: "Lex Aureum is a creative protection platform built for artists, musicians, writers, filmmakers, and photographers. It helps you record, protect, and share your work with intention — creating a private, verifiable trail of your creative process." },
  { q: "Is this copyright registration?", a: "No. Lex Aureum is not a copyright registry or a law firm. It helps you build an organized record of your creative process — when work existed, who made it, and when it was shared. This record can support your position, but is not a legal filing." },
  { q: "Who is it for?", a: "Lex Aureum is built for independent creators — musicians, visual artists, photographers, filmmakers, and writers — especially those who regularly share work before formal agreements are in place." },
  { q: "Can I share work with clients?", a: "Yes. One of Lex Aureum's core features is controlled sharing — sending preview links with watermarks, tracking when work is viewed, and keeping a clear log of who received what and when." },
  { q: "What happens during beta?", a: "Beta members get early access to the vault, proof records, and shared links. You'll help shape the product through feedback. Selected creators will be contacted individually as spots become available." },
  { q: "Will my files be private?", a: "Yes. Your files, records, and activity are private by default. Nothing is shared unless you choose to share it." },
];

// ─── SHARED ───────────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.9rem" }}>
      <div style={{ width: 28, height: 1, background: GOLD, flexShrink: 0 }} />
      <span style={{ fontFamily: SANS, fontSize: "0.64rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: GOLD }}>
        {children}
      </span>
    </div>
  );
}

function SectionLabelCentered({ children }: { children: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.7rem", marginBottom: "0.9rem" }}>
      <div style={{ width: 28, height: 1, background: GOLD }} />
      <span style={{ fontFamily: SANS, fontSize: "0.64rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: GOLD }}>
        {children}
      </span>
      <div style={{ width: 28, height: 1, background: GOLD }} />
    </div>
  );
}

function GoldRule({ width = 48 }: { width?: number }) {
  return <div style={{ width, height: "1.5px", background: `linear-gradient(90deg, ${GOLD}, rgba(201,168,76,0.08))`, margin: "0.6rem 0 1.1rem" }} />;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);
  const [notifyLoading, setNotifyLoading] = useState(false);
  const [notifyError, setNotifyError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [app, setApp] = useState({ name: "", email: "", creatorType: "", whatToProtect: "", workingWith: "" });
  const [appSent, setAppSent] = useState(false);
  const [appLoading, setAppLoading] = useState(false);
  const [appError, setAppError] = useState<string | null>(null);

  const handleNotify = async () => {
    const trimmed = email.trim();
    if (!trimmed) return;
    setNotifyError(null);
    setNotifyLoading(true);
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: trimmed }) });
      if (res.ok) { setNotified(true); }
      else { const d = await res.json().catch(() => ({})); setNotifyError(d.error ?? "Something went wrong."); }
    } catch { setNotifyError("Could not connect. Please try again."); }
    finally { setNotifyLoading(false); }
  };

  const handleApplication = async () => {
    if (!app.name.trim() || !app.email.trim()) { setAppError("Please provide your name and email."); return; }
    setAppError(null);
    setAppLoading(true);
    try {
      const res = await fetch("/api/applications", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(app) });
      if (res.ok) { setAppSent(true); }
      else { const d = await res.json().catch(() => ({})); setAppError(d.error ?? "Something went wrong."); }
    } catch { setAppError("Could not connect. Please try again."); }
    finally { setAppLoading(false); }
  };

  const activeCTab = CREATOR_TABS[activeTab];

  const fieldStyle: React.CSSProperties = {
    display: "block", width: "100%", fontFamily: SANS, fontSize: "0.875rem", fontWeight: 300,
    color: IVORY_TEXT, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,168,76,0.22)",
    borderRadius: 2, padding: "0.75rem 1rem", outline: "none", boxSizing: "border-box",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontFamily: SANS, fontSize: "0.7rem", fontWeight: 400,
    letterSpacing: "0.08em", color: "rgba(240,236,226,0.45)", marginBottom: "0.4rem", textTransform: "uppercase",
  };

  return (
    <div style={{ margin: 0, padding: 0, minHeight: "100vh", fontFamily: SANS }}>

      {/* ══ 1. HERO ══════════════════════════════════════════════════════════════ */}
      <section className="la-hero" data-testid="hero-section" style={{ position: "relative", minHeight: "65vh", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", background: HERO_BG }}>
        <div aria-hidden style={{ position: "absolute", inset: -20, backgroundImage: `url(${heroBgSrc})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", filter: "blur(0.8px)" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to right, rgba(26,26,24,0.92) 0%, rgba(26,26,24,0.78) 38%, rgba(26,26,24,0.45) 62%, rgba(26,26,24,0.18) 100%)" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to bottom, rgba(26,26,24,0.55) 0%, rgba(26,26,24,0.15) 30%, transparent 55%)" }} />
        <div aria-hidden style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "28%", pointerEvents: "none", background: `linear-gradient(to top, ${HERO_BG} 0%, transparent 100%)` }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 78% 18%, rgba(201,168,76,0.07) 0%, transparent 60%)" }} />

        <motion.div className="la-hero-logo-area" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ position: "relative", padding: "2.25rem 3rem" }}>
          <img src="/logo-transparent.png" alt="Lex Aureum" style={{ height: 88, width: "auto", display: "block", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.5))" }} />
        </motion.div>

        <motion.div className="la-hero-inner" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} style={{ position: "relative", padding: "0 3rem 3.5rem", maxWidth: 600 }}>
          <div style={{ width: 42, height: 1, background: "linear-gradient(90deg, rgba(201,168,76,0.65), transparent)", marginBottom: "1.5rem" }} />
          <h1 data-testid="hero-headline" style={{ fontFamily: SERIF, color: IVORY_TEXT, fontSize: "clamp(2rem, 4.6vw, 3.75rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.01em", margin: "0 0 1.35rem 0" }}>
            Your work deserves more than exposure.{" "}It deserves protection.
          </h1>
          <p data-testid="hero-subtext" style={{ fontFamily: SANS, color: IVORY_MUTED, fontSize: "0.93rem", fontWeight: 300, lineHeight: 1.8, maxWidth: 400, margin: 0 }}>
            Lex Aureum is building a trusted home for artists to safeguard the work they create.
          </p>
        </motion.div>
      </section>

      {/* ══ 2. COMING SOON + EMAIL ════════════════════════════════════════════════ */}
      <section className="la-cream-section" data-testid="cream-section" style={{ background: IVORY_BG, padding: "2.75rem 3rem 3.25rem" }}>
        <div className="la-cream-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)", gap: "2.5rem 4.5rem", alignItems: "start" }}>
          <div>
            <div data-testid="categories" style={{ fontFamily: SANS, fontSize: "0.76rem", letterSpacing: "0.04em", color: CHARCOAL, fontWeight: 400, display: "flex", flexWrap: "wrap", alignItems: "center", marginBottom: "1.85rem" }}>
              {CATEGORIES.map((cat, i) => (
                <span key={cat} style={{ display: "flex", alignItems: "center" }}>
                  {i > 0 && <span aria-hidden style={{ color: GOLD, margin: "0 0.5rem", fontSize: "0.6rem" }}>•</span>}
                  {cat}
                </span>
              ))}
            </div>
            <h2 data-testid="coming-soon-heading" style={{ fontFamily: SERIF, fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", fontWeight: 600, color: GOLD, lineHeight: 1.1, margin: "0 0 0.55rem 0" }}>
              Coming Soon
            </h2>
            <GoldRule />
            <p data-testid="tagline" style={{ fontFamily: SANS, fontSize: "0.84rem", color: MUTED, fontWeight: 300, lineHeight: 1.75, margin: 0 }}>
              Created with purpose. Protected with care.
            </p>
          </div>
          <div style={{ paddingTop: "0.15rem" }}>
            <label htmlFor="email-input" style={{ display: "block", fontFamily: SERIF, fontSize: "1.05rem", fontWeight: 400, color: CHARCOAL, marginBottom: "0.9rem" }}>
              Join the early-access list
            </label>
            {notified ? (
              <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} style={{ fontFamily: SANS, fontSize: "0.85rem", color: CHARCOAL, fontWeight: 300, lineHeight: 1.7, margin: 0, paddingLeft: "0.875rem", borderLeft: `2px solid ${GOLD}` }}>
                Thank you — we'll be in touch when we launch.
              </motion.p>
            ) : (
              <>
                <div style={{ display: "flex", boxShadow: "0 2px 14px rgba(42,37,32,0.07)" }}>
                  <input id="email-input" type="email" placeholder="Enter your email" data-testid="input-email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && handleNotify()} style={{ flex: 1, minWidth: 0, fontFamily: SANS, fontSize: "0.875rem", fontWeight: 300, color: CHARCOAL, background: "#fdfaf4", border: "1px solid rgba(42,37,32,0.18)", borderRight: "none", borderRadius: "2px 0 0 2px", padding: "0.8rem 1rem", outline: "none" }} />
                  <button data-testid="button-notify" onClick={handleNotify} disabled={notifyLoading} style={{ fontFamily: SANS, fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#fff", background: notifyLoading ? "#b8973d" : GOLD, border: "none", borderRadius: "0 2px 2px 0", padding: "0.8rem 1.5rem", cursor: notifyLoading ? "default" : "pointer", flexShrink: 0, opacity: notifyLoading ? 0.75 : 1 }} onMouseEnter={e => { if (!notifyLoading) e.currentTarget.style.background = "#b8973d"; }} onMouseLeave={e => { if (!notifyLoading) e.currentTarget.style.background = GOLD; }}>
                    {notifyLoading ? "…" : "Notify me"}
                  </button>
                </div>
                {notifyError && <p style={{ fontFamily: SANS, fontSize: "0.78rem", color: "#b04040", marginTop: "0.5rem", fontWeight: 300 }}>{notifyError}</p>}
              </>
            )}
          </div>
        </div>
      </section>

      {/* ══ 3. MANIFESTO ═════════════════════════════════════════════════════════ */}
      <section className="la-section" style={{ background: IVORY_BG, borderTop: "1px solid rgba(42,37,32,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div className="la-manifesto-grid" {...vin} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem 5rem", marginBottom: "3.5rem", alignItems: "start" }}>
            <div>
              <SectionLabel>Our Manifesto</SectionLabel>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 600, color: CHARCOAL, lineHeight: 1.05, margin: 0 }}>
                Exposure is<br />not ownership.
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: SANS, fontSize: "0.91rem", color: MUTED, fontWeight: 300, lineHeight: 1.9, margin: "2.5rem 0 0 0" }}>
                Artists are asked to share before they are protected. Songs get previewed. Concepts get pitched. Photographs get sent. Scripts get circulated. Lex Aureum is being built so creators can record, protect, and share their work with intention.
              </p>
            </div>
          </motion.div>
          <div className="la-manifesto-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {MANIFESTO_CARDS.map((c, i) => (
              <motion.div key={c.title} {...vin} transition={{ duration: 0.7, delay: i * 0.1 }} style={{ background: "#fdfaf4", border: `1px solid ${BORDER}`, borderRadius: 2, padding: "1.75rem 1.5rem" }}>
                <div style={{ marginBottom: "0.9rem" }}>{c.icon}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.15rem", fontWeight: 600, color: CHARCOAL, margin: "0 0 0.5rem 0" }}>{c.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.83rem", color: MUTED, fontWeight: 300, lineHeight: 1.75, margin: 0 }}>{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. HOW IT WORKS ══════════════════════════════════════════════════════ */}
      <section className="la-section" style={{ background: HERO_BG }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div {...vin} style={{ marginBottom: "3rem" }}>
            <SectionLabel>How It Works</SectionLabel>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 600, color: IVORY_TEXT, lineHeight: 1.08, margin: 0, maxWidth: 500 }}>
              Protect the work before it leaves your hands.
            </h2>
          </motion.div>
          <div className="la-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {STEPS.map((s, i) => (
              <motion.div key={s.num} {...vin} transition={{ duration: 0.7, delay: i * 0.1 }} style={{ borderTop: `1px solid rgba(201,168,76,0.2)`, borderRight: i < 3 ? `1px solid rgba(201,168,76,0.2)` : "none", padding: "2rem 1.75rem" }}>
                <div style={{ fontFamily: SERIF, fontSize: "2.6rem", color: "rgba(201,168,76,0.22)", fontWeight: 300, lineHeight: 1, marginBottom: "1.1rem" }}>{s.num}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.1rem", fontWeight: 600, color: IVORY_TEXT, margin: "0 0 0.6rem 0" }}>{s.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.82rem", color: IVORY_MUTED, fontWeight: 300, lineHeight: 1.75, margin: 0 }}>{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. BETA FEATURES ═════════════════════════════════════════════════════ */}
      <section className="la-section" style={{ background: IVORY_BG }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div className="la-manifesto-grid" {...vin} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "end", marginBottom: "3rem" }}>
            <div>
              <SectionLabel>Beta Features</SectionLabel>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)", fontWeight: 600, color: CHARCOAL, lineHeight: 1.08, margin: 0 }}>
                Built for the moments<br />before exposure.
              </h2>
            </div>
          </motion.div>
          <div className="la-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: BORDER }}>
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} {...vin} transition={{ duration: 0.7, delay: (i % 4) * 0.07 }} style={{ background: IVORY_BG, padding: "1.75rem 1.5rem" }}>
                <div style={{ marginBottom: "0.85rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.05rem", fontWeight: 600, color: CHARCOAL, margin: "0 0 0.4rem 0" }}>{f.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.81rem", color: MUTED, fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. BUILT FOR CREATORS ════════════════════════════════════════════════ */}
      <section className="la-section" style={{ background: HERO_BG }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="la-creators-layout" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "4rem", alignItems: "start" }}>
            <motion.div {...vin}>
              <SectionLabel>Built For Creators</SectionLabel>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem, 3vw, 2.4rem)", fontWeight: 600, color: IVORY_TEXT, lineHeight: 1.12, margin: 0 }}>
                Every discipline has something worth protecting.
              </h2>
            </motion.div>
            <div>
              <div style={{ display: "flex", borderBottom: "1px solid rgba(201,168,76,0.18)" }}>
                {CREATOR_TABS.map((t, i) => (
                  <button key={t.label} onClick={() => setActiveTab(i)} style={{ fontFamily: SANS, fontSize: "0.82rem", fontWeight: activeTab === i ? 500 : 300, color: activeTab === i ? GOLD : "rgba(240,236,226,0.4)", background: "none", border: "none", borderBottom: activeTab === i ? `2px solid ${GOLD}` : "2px solid transparent", padding: "0.7rem 1.15rem", cursor: "pointer", transition: "color 0.18s", marginBottom: "-1px", letterSpacing: "0.02em" }}>
                    {t.label}
                  </button>
                ))}
              </div>
              <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ border: "1px solid rgba(201,168,76,0.14)", borderTop: "none", background: "rgba(255,255,255,0.03)", padding: "1.75rem" }}>
                <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", alignItems: "flex-start" }}>
                  <div style={{ width: 110, height: 80, flexShrink: 0, borderRadius: 2, overflow: "hidden", background: "rgba(201,168,76,0.07)" }}>
                    {activeTab === 0 && <img src={heroBgSrc} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.65)" }} />}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: SERIF, fontSize: "1.3rem", fontWeight: 600, color: GOLD, margin: "0 0 0.3rem 0" }}>{activeCTab.label}</h3>
                    <p style={{ fontFamily: SANS, fontSize: "0.84rem", color: IVORY_MUTED, fontWeight: 300, lineHeight: 1.75, margin: 0 }}>{activeCTab.desc}</p>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1px", background: "rgba(201,168,76,0.1)" }}>
                  {activeCTab.items.map(item => (
                    <div key={item.title} style={{ background: HERO_BG, padding: "1rem 0.9rem" }}>
                      <div style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 500, color: GOLD, marginBottom: "0.3rem", letterSpacing: "0.03em" }}>{item.title}</div>
                      <div style={{ fontFamily: SANS, fontSize: "0.76rem", color: "rgba(240,236,226,0.4)", fontWeight: 300, lineHeight: 1.55 }}>{item.body}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 7. TRUST ═════════════════════════════════════════════════════════════ */}
      <section className="la-section" style={{ background: IVORY_BG2 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div {...vin} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <SectionLabelCentered>Trust Principles</SectionLabelCentered>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 600, color: CHARCOAL, margin: "0 0 1rem 0", lineHeight: 1.05 }}>
              Your work remains yours.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "0.91rem", color: MUTED, fontWeight: 300, lineHeight: 1.85, maxWidth: 580, margin: "0 auto" }}>
              Lex Aureum exists to protect your originality and your future. We keep your work private, record the truth of when it existed, and give you the tools to share with confidence.
            </p>
          </motion.div>

          <div className="la-trust-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(42,37,32,0.09)", marginBottom: "2.75rem" }}>
            {TRUST_PILLARS.map((p, i) => (
              <motion.div key={p.title} {...vin} transition={{ duration: 0.7, delay: i * 0.09 }} style={{ background: IVORY_BG2, padding: "2rem 1.5rem", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.1rem" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", border: `1px solid rgba(201,168,76,0.32)`, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(201,168,76,0.06)" }}>
                    {p.icon}
                  </div>
                </div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.05rem", fontWeight: 600, color: CHARCOAL, margin: "0 0 0.5rem 0" }}>{p.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.81rem", color: MUTED, fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...vin} style={{ textAlign: "center", paddingTop: "1.5rem", borderTop: "1px solid rgba(42,37,32,0.09)" }}>
            <p style={{ fontFamily: SANS, fontSize: "0.79rem", color: MUTED, fontWeight: 300, lineHeight: 1.8, margin: "0 auto", maxWidth: 500 }}>
              Lex Aureum helps creators organize proof of authorship and sharing history.<br />
              It is not a law firm and does not replace legal advice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ 8. EARLY ACCESS APPLICATION ══════════════════════════════════════════ */}
      <section style={{ background: HERO_BG, position: "relative", overflow: "hidden", padding: "4.5rem 3rem" }} className="la-section-nopad">
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `url(${heroBgSrc})`, backgroundSize: "cover", backgroundPosition: "center left", backgroundRepeat: "no-repeat", filter: "blur(1px)", opacity: 0.14 }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${HERO_BG} 35%, rgba(26,26,24,0.88) 100%)` }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div className="la-earlyaccess-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4.5rem", alignItems: "start" }}>
            <motion.div {...vin}>
              <SectionLabel>Early Access</SectionLabel>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: IVORY_TEXT, lineHeight: 1.08, margin: "0 0 1.25rem 0" }}>
                Join the founding<br />creator circle.
              </h2>
              <p style={{ fontFamily: SANS, fontSize: "0.9rem", color: IVORY_MUTED, fontWeight: 300, lineHeight: 1.85, margin: "0 0 2rem 0" }}>
                We are opening the private beta to selected artists, writers, photographers, filmmakers, and creative teams.
              </p>
              <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", border: `1px solid rgba(201,168,76,0.4)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <CheckIco />
                </div>
                <p style={{ fontFamily: SANS, fontSize: "0.84rem", color: "rgba(240,236,226,0.55)", fontWeight: 300, lineHeight: 1.75, margin: 0 }}>
                  Be among the first to shape the future of creative protection.
                </p>
              </div>
            </motion.div>

            <motion.div {...vin} transition={{ duration: 0.75, delay: 0.15 }}>
              {appSent ? (
                <div style={{ background: "rgba(255,255,255,0.05)", border: `1px solid rgba(201,168,76,0.28)`, borderRadius: 2, padding: "2.75rem", textAlign: "center" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", border: `1px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth={1.5} strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.45rem", color: GOLD, fontWeight: 600, margin: "0 0 0.75rem 0" }}>Request received.</h3>
                  <p style={{ fontFamily: SANS, fontSize: "0.85rem", color: IVORY_MUTED, fontWeight: 300, lineHeight: 1.75, margin: 0 }}>
                    Your request has been received. We'll contact selected creators as the private beta opens.
                  </p>
                </div>
              ) : (
                <div style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(201,168,76,0.22)`, borderRadius: 2, padding: "1.85rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.9rem", marginBottom: "0.9rem" }}>
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input type="text" placeholder="Your full name" value={app.name} onChange={e => setApp(a => ({ ...a, name: e.target.value }))} style={fieldStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input type="email" placeholder="you@example.com" value={app.email} onChange={e => setApp(a => ({ ...a, email: e.target.value }))} style={fieldStyle} />
                    </div>
                  </div>
                  <div style={{ marginBottom: "0.9rem" }}>
                    <label style={labelStyle}>Creator type</label>
                    <select value={app.creatorType} onChange={e => setApp(a => ({ ...a, creatorType: e.target.value }))} style={{ ...fieldStyle, cursor: "pointer" }}>
                      <option value="">Select your primary type</option>
                      <option>Musician</option>
                      <option>Visual Artist</option>
                      <option>Photographer</option>
                      <option>Filmmaker</option>
                      <option>Writer</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: "0.9rem" }}>
                    <label style={labelStyle}>What do you want to protect?</label>
                    <input type="text" placeholder="e.g. Music, photos, scripts, artwork, concepts, etc." value={app.whatToProtect} onChange={e => setApp(a => ({ ...a, whatToProtect: e.target.value }))} style={fieldStyle} />
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={labelStyle}>Working with clients, collaborators, or public releases?</label>
                    <select value={app.workingWith} onChange={e => setApp(a => ({ ...a, workingWith: e.target.value }))} style={{ ...fieldStyle, cursor: "pointer" }}>
                      <option value="">Select an option</option>
                      <option>Yes, actively</option>
                      <option>Occasionally</option>
                      <option>Not yet</option>
                    </select>
                  </div>
                  {appError && <p style={{ fontFamily: SANS, fontSize: "0.78rem", color: "#c97474", marginBottom: "1rem", fontWeight: 300 }}>{appError}</p>}
                  <button onClick={handleApplication} disabled={appLoading} style={{ width: "100%", fontFamily: SANS, fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: HERO_BG, background: GOLD, border: "none", borderRadius: 2, padding: "0.95rem 1.5rem", cursor: appLoading ? "default" : "pointer", opacity: appLoading ? 0.75 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }} onMouseEnter={e => { if (!appLoading) e.currentTarget.style.background = "#b8973d"; }} onMouseLeave={e => { if (!appLoading) e.currentTarget.style.background = GOLD; }}>
                    {appLoading ? "Submitting…" : <><span>Request Early Access</span><span>→</span></>}
                  </button>
                  <p style={{ fontFamily: SANS, fontSize: "0.72rem", color: "rgba(240,236,226,0.28)", textAlign: "center", marginTop: "0.85rem", fontWeight: 300, lineHeight: 1.6 }}>
                    Selected creators will be contacted as the private beta opens.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 9. FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="la-section" style={{ background: IVORY_BG }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="la-faq-layout" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "4rem" }}>
            <motion.div {...vin}>
              <SectionLabel>FAQ</SectionLabel>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: CHARCOAL, lineHeight: 1.1, margin: "0 0 0.6rem 0" }}>
                Common<br />questions.
              </h2>
              <p style={{ fontFamily: SANS, fontSize: "0.82rem", color: MUTED, fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
                Quick answers to the things creators ask us most.
              </p>
            </motion.div>
            <div className="la-faq-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 2.5rem" }}>
              {[FAQ_ITEMS.slice(0, 3), FAQ_ITEMS.slice(3)].map((col, ci) => (
                <div key={ci}>
                  {col.map((item, ri) => {
                    const idx = ci * 3 + ri;
                    const open = openFaq === idx;
                    return (
                      <motion.div key={item.q} {...vin} transition={{ duration: 0.6, delay: ri * 0.06 }} style={{ borderBottom: "1px solid rgba(42,37,32,0.11)" }}>
                        <button onClick={() => setOpenFaq(open ? null : idx)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", padding: "1.1rem 0", cursor: "pointer", textAlign: "left" }}>
                          <span style={{ fontFamily: SANS, fontSize: "0.88rem", fontWeight: 400, color: CHARCOAL, lineHeight: 1.4, paddingRight: "1rem" }}>{item.q}</span>
                          <span style={{ color: GOLD, fontSize: "1.3rem", lineHeight: 1, flexShrink: 0, display: "inline-block", transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s ease" }}>+</span>
                        </button>
                        {open && (
                          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} style={{ fontFamily: SANS, fontSize: "0.83rem", color: MUTED, fontWeight: 300, lineHeight: 1.8, margin: "0 0 1.1rem 0" }}>
                            {item.a}
                          </motion.p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10. FOOTER ═══════════════════════════════════════════════════════════ */}
      <footer style={{ background: HERO_BG, borderTop: `1px solid rgba(201,168,76,0.1)` }}>
        <div className="la-footer-inner" style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 3rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img src="/logo-transparent.png" alt="Lex Aureum" style={{ height: 52, width: "auto", filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.4))" }} />
            <div>
              <div style={{ fontFamily: SERIF, fontSize: "0.6rem", color: "rgba(240,236,226,0.3)", letterSpacing: "0.22em", textTransform: "uppercase" }}>Created with purpose.</div>
              <div style={{ fontFamily: SERIF, fontSize: "0.6rem", color: "rgba(240,236,226,0.3)", letterSpacing: "0.22em", textTransform: "uppercase" }}>Protected with care.</div>
            </div>
          </div>

          <nav style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            {["Early Access", "Privacy", "Terms", "Contact"].map((link, i) => (
              <span key={link} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <span style={{ color: "rgba(201,168,76,0.18)", margin: "0 0.6rem" }}>|</span>}
                <a href="#" style={{ fontFamily: SANS, fontSize: "0.75rem", color: "rgba(240,236,226,0.38)", textDecoration: "none", fontWeight: 300, letterSpacing: "0.03em" }} onMouseEnter={e => e.currentTarget.style.color = GOLD} onMouseLeave={e => e.currentTarget.style.color = "rgba(240,236,226,0.38)"}>
                  {link}
                </a>
              </span>
            ))}
          </nav>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.65rem" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              {[
                <svg key="ig" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
                <svg key="x" width={15} height={15} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                <svg key="mail" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
              ].map((icon, i) => (
                <a key={i} href="#" style={{ color: "rgba(240,236,226,0.32)", display: "flex" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = GOLD} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(240,236,226,0.32)"}>
                  {icon}
                </a>
              ))}
            </div>
            <span style={{ fontFamily: SANS, fontSize: "0.67rem", color: "rgba(240,236,226,0.18)", fontWeight: 300 }}>© 2026 Lex Aureum. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
