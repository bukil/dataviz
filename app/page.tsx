
import ProtectedImage from "./ProtectedImage";
import EarthOrbit from "./EarthOrbit";
import LhcShape from "./LhcShape";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-10 px-0 bg-black text-white w-full overflow-x-hidden">
      <div className="px-6 w-full flex flex-col items-start">
        <h1 className="font-bold tracking-tight text-left text-3xl sm:text-5xl leading-tight max-w-5xl">
          Data Visualisation : <span className="font-light opacity-90">Comparative Visualizations</span>
        </h1>
      </div>
      {/* Large Hadron Collider Shape (multi-ring outline) */}
      <div className="mt-12 w-full flex justify-center px-6 defer-section">
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
      <section className="mt-16 w-full max-w-6xl px-6 defer-section">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {/* Faster orbit with trail (0.4s per revolution) */}
          <EarthOrbit label="Particle" imgSize={200} animateDot revolveSeconds={0.4} timingText="0.13 sec" />
          <EarthOrbit label="Fastest Rocket" imgSize={200} animateDot revolveSeconds={900} timingText="1h 03s" />
          <EarthOrbit label="Fastest Jet Plane" imgSize={200} animateDot revolveSeconds={1500} timingText="11.3 hours" />
          <EarthOrbit label="Fastest Train" imgSize={200} animateDot revolveSeconds={3600} timingText="2.77 days" />
        </div>
      </section>
    </main>
  );
}
