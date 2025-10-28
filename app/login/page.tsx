'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Replace with actual authentication logic
    // For demo purposes, any email/password will work
    setTimeout(() => {
      // Store a simple auth token for demo
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/home');
    }, 500);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-cream px-4">
      {/* Back to Coming Soon */}
      <a
        href="/"
        className="absolute left-4 top-4 text-sm font-semibold uppercase text-deep-black underline hover:text-jacks-green md:left-8 md:top-8"
      >
        ← Back
      </a>

      <div className="w-full max-w-md">
        {/* Logo/Title */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-5xl font-bold uppercase tracking-wider text-jacks-green md:text-6xl">
            Jack's Pizza
          </h1>
          <p className="text-lg text-deep-black">Detroit Style. Retro Vibes.</p>
        </div>

        {/* Login Card */}
        <div className="rounded-lg border-3 border-black bg-white p-8 shadow-[6px_6px_0px_0px_#2EAE7D]">
          <h2 className="mb-6 text-2xl font-bold uppercase text-deep-black">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold uppercase text-deep-black"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold uppercase text-deep-black"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full border-2 border-black bg-jacks-green px-8 py-4 font-bold uppercase text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Demo Note */}
          <div className="mt-6 rounded-lg bg-retro-yellow/20 border-2 border-retro-yellow p-4">
            <p className="text-xs font-semibold text-deep-black">
              <strong>Demo Mode:</strong> Enter any email and password to access the site.
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-center text-sm text-deep-black/70">
          Don&apos;t have an account?{' '}
          <a href="#" className="font-semibold text-jacks-green underline hover:text-jacks-green/80">
            Contact us
          </a>
        </p>
      </div>
    </main>
  );
}
