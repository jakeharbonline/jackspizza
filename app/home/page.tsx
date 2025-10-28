'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      setIsLoading(false);
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-jacks-green border-t-transparent mx-auto"></div>
          <p className="text-deep-black">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header/Navigation */}
      <header className="border-b-4 border-black bg-white shadow-[0px_4px_0px_0px_#2EAE7D]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          {/* Logo */}
          <a href="/home" className="flex items-center gap-4">
            <img
              src="/jackspizza.jpeg"
              alt="Jack's Pizza Logo"
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-4 md:gap-6">
            <a
              href="/menu"
              className="font-semibold uppercase text-deep-black hover:text-jacks-green transition-colors"
            >
              Menu
            </a>
            <a
              href="#instagram"
              className="font-semibold uppercase text-deep-black hover:text-jacks-green transition-colors"
            >
              Instagram
            </a>
            <a
              href="/book"
              className="rounded-full border-2 border-black bg-jacks-green px-4 py-2 text-sm font-bold uppercase text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Book
            </a>
            <button
              onClick={handleLogout}
              className="rounded-full border-2 border-black bg-retro-red px-4 py-2 text-sm font-bold uppercase text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-block">
              <span className="inline-block rotate-[-2deg] rounded-full border-2 border-black bg-retro-yellow px-4 py-1 text-sm font-bold uppercase">
                Coming to Brighton
              </span>
            </div>
            <h2 className="mb-4 text-6xl font-bold uppercase leading-tight text-deep-black md:text-8xl">
              Detroit Style
              <br />
              <span className="text-jacks-green">Pizza</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-deep-black/80 md:text-xl">
              Born in mum&apos;s kitchen. Perfected over time. Now bringing authentic Detroit-style pizza
              to Brighton&apos;s North Laine with 48-hour slow-fermented dough.
            </p>
          </div>

          {/* Hero Image */}
          <div className="overflow-hidden rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_#2EAE7D]">
            <img
              src="/jackspizzacol.jpeg"
              alt="Detroit-style pizzas with caramelized cheese edges at Jack's Pizza"
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        {/* Feature Cards with Images */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          {/* Card 1 - Hot Honey Pepperoni */}
          <div className="transform overflow-hidden rounded-lg border-3 border-black bg-white shadow-[6px_6px_0px_0px_#2EAE7D] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#2EAE7D]">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/hot-honey-peperoni-with.jpg"
                alt="Hot honey pepperoni pizza with burrata at Jack's Pizza"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-2xl font-bold uppercase text-deep-black">
                Detroit Style
              </h3>
              <p className="text-deep-black/80">
                Thick, airy crust. Caramelized cheese edges. Sauce on top. The way pizza should be.
              </p>
            </div>
          </div>

          {/* Card 2 - Bacon Pizza */}
          <div className="transform overflow-hidden rounded-lg border-3 border-black bg-white shadow-[6px_6px_0px_0px_#2EAE7D] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#2EAE7D]">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/468503446_17885841417155677_3531722948642645978_n.jpg"
                alt="Bacon pizza with burrata and honey drizzle at Jack's Pizza"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-2xl font-bold uppercase text-deep-black">
                48-Hour Dough
              </h3>
              <p className="text-deep-black/80">
                Slow fermentation for maximum flavor, texture, and digestibility. Worth the wait.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16 rounded-lg border-4 border-black bg-white p-8 shadow-[6px_6px_0px_0px_#2EAE7D] md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 inline-block">
                <span className="inline-block rotate-[-2deg] rounded-full border-2 border-black bg-retro-yellow px-4 py-1 text-sm font-bold uppercase">
                  Our Story
                </span>
              </div>
              <h3 className="mb-4 text-4xl font-bold uppercase text-deep-black md:text-5xl">
                From Kitchen to Restaurant
              </h3>
              <p className="mb-4 text-lg text-deep-black/80">
                Jack stumbled upon Detroit-style pizza and fell in love. What started as experiments in mum&apos;s kitchen turned into a passion for perfecting the craft.
              </p>
              <p className="text-lg text-deep-black/80">
                After perfecting his method and 48-hour fermentation process, Jack&apos;s Pizza was born. Now we&apos;re bringing authentic Detroit-style pizza to Brighton&apos;s North Laine.
              </p>
            </div>
            <div className="order-first md:order-last">
              <div className="overflow-hidden rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src="/jackspizzacol.jpeg"
                  alt="Variety of Jack's Detroit-style pizzas"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section id="instagram" className="mb-16">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-block">
              <span className="inline-block rotate-[-2deg] rounded-full border-2 border-black bg-retro-yellow px-4 py-1 text-sm font-bold uppercase">
                Follow Us
              </span>
            </div>
            <h3 className="mb-4 text-4xl font-bold uppercase text-deep-black md:text-5xl">
              @JacksPizza
            </h3>
            <p className="text-lg text-deep-black/80">
              Follow us on Instagram for the latest pizza drops, menu updates, and behind-the-scenes
            </p>
          </div>

          {/* Instagram Grid */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {/* Post 1 */}
            <div className="group relative overflow-hidden rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/jackspizzacol.jpeg"
                alt="Jack's Pizza Instagram post"
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>
            </div>

            {/* Post 2 */}
            <div className="group relative overflow-hidden rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/hot-honey-peperoni-with.jpg"
                alt="Jack's Pizza Instagram post"
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>
            </div>

            {/* Post 3 */}
            <div className="group relative overflow-hidden rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/468503446_17885841417155677_3531722948642645978_n.jpg"
                alt="Jack's Pizza Instagram post"
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>
            </div>

            {/* Post 4 */}
            <div className="group relative overflow-hidden rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/hot-honey-peperoni-with.jpg"
                alt="Jack's Pizza Instagram post"
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>
            </div>

            {/* Post 5 */}
            <div className="group relative overflow-hidden rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/jackspizzacol.jpeg"
                alt="Jack's Pizza Instagram post"
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>
            </div>

            {/* Post 6 */}
            <div className="group relative overflow-hidden rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/468503446_17885841417155677_3531722948642645978_n.jpg"
                alt="Jack's Pizza Instagram post"
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>
            </div>
          </div>

          {/* Follow CTA */}
          <div className="text-center">
            <a
              href="https://instagram.com/jackspizza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-black bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 px-8 py-4 font-bold uppercase text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              Follow on Instagram
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-lg border-4 border-black bg-jacks-green p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-12">
          <h3 className="mb-4 text-4xl font-bold uppercase text-white md:text-5xl">
            Opening Soon
          </h3>
          <p className="mb-6 text-xl text-white/90">
            Stay tuned for our grand opening in Brighton&apos;s North Laine
          </p>
          <button className="rounded-full border-2 border-black bg-white px-8 py-4 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" style={{ color: '#2EAE7D' }}>
            Get Notified
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <p className="text-sm font-semibold uppercase text-deep-black">
            &copy; 2024 Jack&apos;s Pizza. Detroit Style. Brighton Vibes.
          </p>
        </div>
      </footer>
    </div>
  );
}
