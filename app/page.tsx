
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

      {/* LHC Reference Data Table */}
      <section className="mt-10 w-full max-w-6xl px-6 relative z-10">
        <div className="overflow-x-auto rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
          <table className="min-w-full text-left text-sm text-white/90">
            <caption className="sr-only">Key reference data used for the visualizations (LHC and physics constants)</caption>
            <thead className="text-white/70 uppercase text-xs tracking-wider">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4">Value</th>
                <th className="py-3 px-4">Source / Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="py-3 px-4">Speed of light, c</td>
                <td className="py-3 px-4">299,792,458 m/s</td>
                <td className="py-3 px-4">Defined constant</td>
              </tr>
              <tr>
                <td className="py-3 px-4">LHC circumference</td>
                <td className="py-3 px-4">26.7 km</td>
                <td className="py-3 px-4">CERN</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Beam energy (Run 3)</td>
                <td className="py-3 px-4">6.8 TeV per beam</td>
                <td className="py-3 px-4">CERN (13.6 TeV c.o.m.)</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Beam speed</td>
                <td className="py-3 px-4">≈ 0.999999991 c</td>
                <td className="py-3 px-4">Protons near light speed</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Dipole magnet field</td>
                <td className="py-3 px-4">8.33 T</td>
                <td className="py-3 px-4">Nominal</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Operating temperature</td>
                <td className="py-3 px-4">1.9 K</td>
                <td className="py-3 px-4">Superfluid helium</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Vacuum pressure</td>
                <td className="py-3 px-4">~10⁻¹³ atm</td>
                <td className="py-3 px-4">Ultra‑high vacuum</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Bunches per beam</td>
                <td className="py-3 px-4">Up to ~2808</td>
                <td className="py-3 px-4">Run‑dependent</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Protons per bunch</td>
                <td className="py-3 px-4">~1.1 × 10¹¹</td>
                <td className="py-3 px-4">Typical</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Collision rate</td>
                <td className="py-3 px-4">Up to 40 MHz crossing</td>
                <td className="py-3 px-4">HL‑LHC target higher luminosity</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[11px] text-white/50">Figures are indicative; consult CERN references for run‑specific values.</p>
      </section>

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
