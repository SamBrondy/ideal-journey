import Image from "next/image";

export default function Home() {
  return (
    <div className="night">
      <div className="absolute top-1/2 left-1/2 h-1 w-1 animate-shooting rounded-full bg-white shadow-[0_0_6px_#699bff]"></div>
      <div className="absolute top-1/4 left-1/4 h-1 w-1 animate-shooting rounded-full bg-white shadow-[0_0_6px_#699bff]" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 left-1/2 h-1 w-1 animate-shooting rounded-full bg-white shadow-[0_0_6px_#699bff]" style={{animationDelay: '2s'}}></div>
      <main className="flex min-h-screen flex-col items-center justify-center text-center font-sans">
        <h1 className="font-lora text-7xl font-bold text-white">
          Ideal Journey
        </h1>
        <p className="mt-4 text-2xl text-gray-300">
          Your celestial odyssey begins now.
        </p>
        <div className="mt-8 animate-float">
          <Image
            src="/globe.svg"
            alt="Globe"
            width={300}
            height={300}
            priority
            className="drop-shadow-[0_0_2rem_#699bff]"
          />
        </div>
        <a
          href="#"
          className="mt-12 rounded-full border border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-black"
        >
          Begin Your Journey
        </a>
      </main>
    </div>
  );
}
