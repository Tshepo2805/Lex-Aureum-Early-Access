import { useState } from "react";
import { motion } from "framer-motion";
import heroBgSrc from "@assets/068b1229-4d7a-4ad2-bb05-65ca7d624ff3_1781881405097.png";

const GOLD = "#c9a84c";
const HERO_BG = "#1a1a18";
const IVORY_BG = "#f5f0e8";
const IVORY_TEXT = "#f0ece2";
const IVORY_MUTED = "rgba(240,236,226,0.60)";
const CHARCOAL = "#2a2520";
const MUTED = "#7a6e64";
const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'Inter', system-ui, sans-serif";

const CATEGORIES = ["Music", "Visual Art", "Photography", "Film", "Writing"];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export default function App() {
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);

  const handleNotify = () => {
    if (email.trim()) {
      setNotified(true);
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, minHeight: "100vh", fontFamily: SANS }}>

      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
      <section
        className="la-hero"
        data-testid="hero-section"
        style={{
          position: "relative",
          minHeight: "65vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          background: HERO_BG,
        }}
      >
        {/* Blurred photo layer — sits behind everything, inset by -20px on
            all sides so the blur feather never shows at the edges */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: -20,
            backgroundImage: `url(${heroBgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(0.8px)",
          }}
        />

        {/* Left-to-right gradient — darkens the left half so headline text
            reads clearly; right side lets the blurred photo breathe */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `linear-gradient(
              to right,
              rgba(26,26,24,0.92) 0%,
              rgba(26,26,24,0.78) 38%,
              rgba(26,26,24,0.45) 62%,
              rgba(26,26,24,0.18) 100%
            )`,
          }}
        />
        {/* Top-edge darkening */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `linear-gradient(
              to bottom,
              rgba(26,26,24,0.55) 0%,
              rgba(26,26,24,0.15) 30%,
              transparent 55%
            )`,
          }}
        />
        {/* Bottom-edge fade — hides any cream section bleed from the screenshot */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "28%",
            pointerEvents: "none",
            background: `linear-gradient(to top, ${HERO_BG} 0%, transparent 100%)`,
          }}
        />
        {/* Warm gold radial glow at top-right */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse at 78% 18%, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 38%, transparent 60%)",
          }}
        />

        {/* ── Logo ── */}
        <motion.div
          className="la-hero-logo-area"
          {...fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "relative",
            padding: "2.25rem 3rem",
          }}
        >
          <img
            src="/logo-transparent.png"
            alt="Lex Aureum"
            style={{
              height: 88,
              width: "auto",
              display: "block",
              filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.5))",
            }}
          />
        </motion.div>

        {/* ── Headline + subtext — positioned on left where overlay is solid dark ── */}
        <motion.div
          className="la-hero-inner"
          {...fadeUp}
          transition={{ duration: 0.9, delay: 0.22, ease: "easeOut" }}
          style={{
            position: "relative",
            padding: "0 3rem 3.5rem",
            maxWidth: 600,
          }}
        >
          {/* Thin gold rule */}
          <div
            style={{
              width: 42,
              height: 1,
              background: `linear-gradient(90deg, rgba(201,168,76,0.65), transparent)`,
              marginBottom: "1.5rem",
            }}
          />

          <h1
            data-testid="hero-headline"
            style={{
              fontFamily: SERIF,
              color: IVORY_TEXT,
              fontSize: "clamp(2rem, 4.6vw, 3.75rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              margin: "0 0 1.35rem 0",
            }}
          >
            Your work deserves more than exposure.{" "}
            It deserves protection.
          </h1>

          <p
            data-testid="hero-subtext"
            style={{
              fontFamily: SANS,
              color: IVORY_MUTED,
              fontSize: "0.93rem",
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: 400,
              margin: 0,
            }}
          >
            Lex Aureum is building a trusted home for artists to safeguard the
            work they create.
          </p>
        </motion.div>
      </section>

      {/* ─── CREAM SECTION ────────────────────────────────────────── */}
      <motion.section
        className="la-cream-section"
        data-testid="cream-section"
        {...fadeUp}
        transition={{ duration: 0.85, delay: 0.45, ease: "easeOut" }}
        style={{
          background: IVORY_BG,
          padding: "2.75rem 3rem 3.25rem",
        }}
      >
        <div
          className="la-cream-grid"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: "2.5rem 4.5rem",
            alignItems: "start",
          }}
        >
          {/* ── Left: categories + Coming Soon ── */}
          <div>
            {/* Category line — plain text with gold bullet separators */}
            <div
              data-testid="categories"
              style={{
                fontFamily: SANS,
                fontSize: "0.76rem",
                letterSpacing: "0.04em",
                color: CHARCOAL,
                fontWeight: 400,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: "1.85rem",
              }}
            >
              {CATEGORIES.map((cat, i) => (
                <span
                  key={cat}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      style={{
                        color: GOLD,
                        margin: "0 0.5rem",
                        fontSize: "0.6rem",
                        lineHeight: 1,
                      }}
                    >
                      •
                    </span>
                  )}
                  {cat}
                </span>
              ))}
            </div>

            {/* Coming Soon heading */}
            <h2
              data-testid="coming-soon-heading"
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: GOLD,
                lineHeight: 1.1,
                margin: "0 0 0.55rem 0",
                letterSpacing: "0.01em",
              }}
            >
              Coming Soon
            </h2>

            {/* Gold underline rule */}
            <div
              style={{
                width: 54,
                height: "1.5px",
                background: `linear-gradient(90deg, ${GOLD}, rgba(201,168,76,0.08))`,
                marginBottom: "1.1rem",
              }}
            />

            <p
              data-testid="tagline"
              style={{
                fontFamily: SANS,
                fontSize: "0.84rem",
                color: MUTED,
                fontWeight: 300,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Created with purpose. Protected with care.
            </p>
          </div>

          {/* ── Right: email signup form ── */}
          <div style={{ paddingTop: "0.15rem" }}>
            <label
              htmlFor="email-input"
              style={{
                display: "block",
                fontFamily: SERIF,
                fontSize: "1.05rem",
                fontWeight: 400,
                color: CHARCOAL,
                marginBottom: "0.9rem",
                letterSpacing: "0.01em",
              }}
            >
              Join the early-access list
            </label>

            {notified ? (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  fontFamily: SANS,
                  fontSize: "0.85rem",
                  color: CHARCOAL,
                  fontWeight: 300,
                  lineHeight: 1.7,
                  margin: 0,
                  paddingTop: "0.5rem",
                  borderLeft: `2px solid ${GOLD}`,
                  paddingLeft: "0.875rem",
                }}
              >
                Thank you — we'll be in touch when we launch.
              </motion.p>
            ) : (
              <div
                style={{
                  display: "flex",
                  boxShadow: "0 2px 14px rgba(42,37,32,0.07)",
                }}
              >
                <input
                  id="email-input"
                  type="email"
                  placeholder="Enter your email"
                  data-testid="input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleNotify()}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    fontFamily: SANS,
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: CHARCOAL,
                    background: "#fdfaf4",
                    border: "1px solid rgba(42,37,32,0.18)",
                    borderRight: "none",
                    borderRadius: "2px 0 0 2px",
                    padding: "0.8rem 1rem",
                    outline: "none",
                  }}
                />
                <button
                  data-testid="button-notify"
                  onClick={handleNotify}
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: GOLD,
                    border: "none",
                    borderRadius: "0 2px 2px 0",
                    padding: "0.8rem 1.5rem",
                    cursor: "pointer",
                    flexShrink: 0,
                    transition: "background 0.18s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#b8973d")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = GOLD)
                  }
                >
                  Notify me
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* ─── FOOTER ───────────────────────────────────────────────── */}
      <footer
        style={{
          background: HERO_BG,
          padding: "1.25rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTop: `1px solid rgba(201,168,76,0.12)`,
        }}
      >
        <span
          style={{
            fontFamily: SERIF,
            fontSize: "0.62rem",
            color: "rgba(240,236,226,0.3)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          Lex Aureum &mdash; All rights reserved
        </span>
      </footer>
    </div>
  );
}
