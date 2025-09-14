
import Image from "next/image";

export default function Home() {
  return (
  <main className="min-h-screen flex flex-col items-center pt-10 px-0 bg-black text-white w-full overflow-x-hidden">
      <div className="px-6 w-full flex flex-col items-center">
        <h1 className="font-bold tracking-tight text-center text-3xl sm:text-5xl leading-tight max-w-5xl">
          Data Visualisation : Comparative Visualizations
        </h1>
      </div>
      <div className="mt-10 w-full">
        <Image
          src="/Frame 4.svg"
          alt="Comparative visualization illustration"
          width={1920}
          height={840}
          className="w-full h-auto select-none"
          priority
        />
      </div>
    </main>
  );
}
