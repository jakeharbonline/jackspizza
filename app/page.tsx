export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-white px-4">
      {/* Login Button - Top Right */}
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
        <a
          href="/login"
          className="inline-block rounded-full border-2 border-black bg-jacks-green px-6 py-3 font-bold uppercase text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          Login
        </a>
      </div>

      <div className="mb-8 w-full max-w-4xl">
        <img
          src="/jackspizzaanimation.gif"
          alt="Jack's Pizza animation"
          className="w-full rounded-lg"
        />
      </div>
      <h1
        className="animate-fade-in text-5xl font-bold tracking-wider md:text-7xl"
        style={{ color: '#2EAE7D' }}
      >
        COMING SOON
      </h1>
    </main>
  );
}
