import Link from "next/link";
import { styles } from "@/lib/styles";
import SignatureName from "@/components/home/SignatureName";
import { socialProfiles } from "@/lib/data";

export default function HomeAboutSection() {
  return (
    <section className={styles.homeAboutSection}>
      <div className={styles.homeAboutInner}>
        <div className={styles.homeAboutGrid}>
          <div>
            <p className={styles.homeAboutEyebrow}>About Abraham</p>
            <SignatureName className="mt-4" />
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#6B7280]">
              Product Builder • Growth Strategist • Author • Speaker
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialProfiles
                .filter((profile) =>
                  ["GitHub", "LinkedIn", "WordPress"].includes(profile.label)
                )
                .map((profile) => {
                  const tone =
                    profile.label === "GitHub"
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : profile.label === "LinkedIn"
                      ? "bg-[#0A66C2] text-white hover:bg-[#0B5CAD]"
                      : "bg-[#21759B] text-white hover:bg-[#1B6486]";
                  const icon =
                    profile.label === "GitHub" ? (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M12 2c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03.8-.22 1.66-.33 2.51-.33.85 0 1.71.11 2.51.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.57.69.47C19.13 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10Z" />
                      </svg>
                    ) : profile.label === "LinkedIn" ? (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5ZM.2 23.5h4.6V7.9H.2v15.6ZM8.2 7.9h4.4v2.1h.06c.62-1.18 2.12-2.42 4.36-2.42 4.66 0 5.52 3.06 5.52 7.04v8.88h-4.6v-7.86c0-1.88-.04-4.3-2.62-4.3-2.62 0-3.02 2.04-3.02 4.14v8.02H8.2V7.9Z" />
                      </svg>
                    ) : (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M12 2.1c-5.48 0-9.9 4.32-9.9 9.65 0 5.32 4.42 9.65 9.9 9.65 5.48 0 9.9-4.33 9.9-9.65 0-5.33-4.42-9.65-9.9-9.65Zm0 17.76c-4.49 0-8.12-3.54-8.12-8.11 0-4.58 3.63-8.11 8.12-8.11 4.49 0 8.12 3.53 8.12 8.11 0 4.57-3.63 8.11-8.12 8.11Zm-1.64-2.88h1.2c.2 0 .32-.12.32-.3v-6.08c0-.18-.12-.3-.32-.3h-1.2c-.2 0-.32.12-.32.3v6.08c0 .18.12.3.32.3Zm.6-7.8c.72 0 1.2-.47 1.2-1.08 0-.62-.48-1.1-1.2-1.1s-1.2.48-1.2 1.1c0 .61.48 1.08 1.2 1.08Zm2.78 7.8h1.16c.2 0 .32-.12.32-.3v-3.2c0-1.02.3-1.68 1.2-1.68.58 0 .88.4 1.02.78.06.14.06.34.06.54v3.56c0 .18.12.3.32.3h1.2c.2 0 .32-.12.32-.3v-3.76c0-2.02-1.08-2.96-2.52-2.96-1.14 0-1.64.64-1.94 1.08v-.74c0-.18-.12-.3-.32-.3h-1.16c-.2 0-.32.12-.32.3v6.08c0 .18.12.3.32.3Z" />
                      </svg>
                    );
                  return (
                    <a
                      key={profile.label}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold transition ${tone}`}
                    >
                      {icon}
                    </a>
                  );
                })}
            </div>
          </div>
          <div>
            <div className={styles.homeAboutStack}>
              <p className={styles.homeAboutText}>
                I’m a product builder and software developer with over 15 years
                of experience designing digital systems across fintech,
                e-commerce, education, safety tech, and hospitality.
              </p>
              <p className={styles.homeAboutText}>
                My journey began deep in engineering and gradually evolved into
                product leadership — allowing me to build solutions that are
                both technically sound and human-centered.
              </p>
              <p className={styles.homeAboutText}>
                Today, I work at the intersection of technology, product
                thinking, and growth — helping ideas become usable products and
                products gain momentum.
              </p>
            </div>
            <p className={styles.homeAboutMicro}>
              I don’t offer isolated services. I design systems that help ideas
              survive, grow, and scale.
            </p>
            <ul className={styles.homeAboutBeliefs}>
              <li>Clarity before complexity</li>
              <li>Systems over shortcuts</li>
              <li>Build for people, then scale</li>
            </ul>
            <div className={styles.homeAboutCta}>
              <Link href="/about" className={styles.homeAboutButton}>
                Read my story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
