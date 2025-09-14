
import Image from "next/image";

export default function Home() {
  return (
  <main className="min-h-screen flex flex-col items-center pt-10 px-6 bg-black text-white">
      <h1 className="font-bold tracking-tight text-center text-3xl sm:text-5xl leading-tight max-w-5xl">
        Data Visualisation : Comparative Visualizations
      </h1>
      <div className="mt-10 w-full max-w-5xl flex justify-center">
        <div className="w-full">
          <Image
            src="/Frame 4.svg"
            alt="Comparative visualization illustration"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </main>
  );
}
