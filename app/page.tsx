
import ProtectedImage from "./ProtectedImage";
import EarthOrbit from "./EarthOrbit";
import LhcShape from "./LhcShape";
import EarthMoonStatic from "./EarthMoonStatic";
import EarthMoonTrajectory from "./EarthMoonTrajectory";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-10 px-0 bg-black text-white w-full overflow-x-hidden relative">
      {/* Background bottom glow */}
      <div aria-hidden className="bottom-glow" />
      <div className="px-6 w-full flex flex-col items-start relative z-10">
        <h1 className="font-bold tracking-tight text-left text-3xl sm:text-5xl leading-tight max-w-5xl">
          Data Visualisation : <span className="font-light opacity-90">Comparative Visualizations</span>
        </h1>
      </div>
      {/* Large Hadron Collider Shape (multi-ring outline) */}
      <div className="mt-12 w-full flex justify-center px-6 defer-section relative z-10">
        <LhcShape className="w-full max-w-2xl sm:max-w-3xl" particleSpeedSeconds={2} strokeWidth={2} />
      </div>

      {/* Use relative path (no leading slash) so it works when the site is served from a sub-path (e.g. GitHub Pages /repo-name/) */}
      <ProtectedImage
        src="Frame 4.svg"
        alt="Comparative visualization illustration"
        width={1920}
        height={840}
      />

      {/* Orbit grid */}
      <section className="mt-16 w-full max-w-6xl px-6 defer-section relative z-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {/* Faster orbit with trail (was 0.4s) - now slightly faster & custom blue glowing smaller particle */}
          <EarthOrbit
            label="Particle"
            imgSize={200}
            animateDot
            revolveSeconds={0.3}
            dotSizePx={6}
            dotColor="#3b82f6" /* Tailwind blue-500 */
            dotGlow
            glowStrength={2.2}
            timingText="0.13 sec"
          />
          <EarthOrbit
            label="Fastest Rocket"
            imgSize={200}
            animateDot
            revolveSeconds={900}
            dotSizePx={5}
            dotColor="#94a3b8" /* slate-400 */
            dotGlow
            glowStrength={0.6}
            timingText="1h 03s"
          />
          <EarthOrbit
            label="Fastest Jet Plane"
            imgSize={200}
            animateDot
            revolveSeconds={7200} /* slowed, but display original label */
            dotSizePx={5}
            dotColor="#64748b" /* slate-500 */
            dotGlow
            glowStrength={0.5}
            timingText="11.3 hours"
          />
          <EarthOrbit
            label="Fastest Train"
            imgSize={200}
            animateDot
            revolveSeconds={28800} /* slowed (8 hours per revolution) while keeping displayed text */
            dotSizePx={5}
            dotColor="#475569" /* slate-600 */
            dotGlow
            glowStrength={0.45}
            timingText="2.77 days"
          />
        </div>
      </section>

      {/* Follow-up heading */}
      <div className="mt-20 w-full max-w-6xl px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">If?</h2>
        <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-white/90 font-semibold tracking-tight">
          What if humans could move like particles?
        </p>
        {/* Earth & Moon trajectory demo */}
        <div className="mt-16 w-full flex justify-center">
          <EarthMoonTrajectory />
        </div>
      </div>
    </main>
  );
}
