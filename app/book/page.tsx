'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BookTablePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

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
              href="/home"
              className="font-semibold uppercase text-deep-black hover:text-jacks-green transition-colors"
            >
              Home
            </a>
            <a
              href="/menu"
              className="font-semibold uppercase text-deep-black hover:text-jacks-green transition-colors"
            >
              Menu
            </a>
            <a
              href="/book"
              className="rounded-full border-2 border-black bg-jacks-green px-4 py-2 text-sm font-bold uppercase text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
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
      <main className="mx-auto max-w-4xl px-6 py-12 md:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <span className="inline-block rotate-[-2deg] rounded-full border-2 border-black bg-retro-yellow px-4 py-1 text-sm font-bold uppercase">
              Reserve Your Spot
            </span>
          </div>
          <h2 className="mb-4 text-5xl font-bold uppercase text-deep-black md:text-7xl">
            Book a <span className="text-jacks-green">Table</span>
          </h2>
          <p className="text-lg text-deep-black/80">
            Coming soon to Brighton&apos;s North Laine. Reserve your table for when we open!
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 rounded-lg border-4 border-black bg-jacks-green p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="text-4xl">✓</div>
              <div>
                <h3 className="mb-1 text-xl font-bold uppercase text-white">
                  Booking Request Received!
                </h3>
                <p className="text-white/90">
                  We&apos;ll be in touch soon to confirm your reservation. Thanks for your interest!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Booking Form */}
        <div className="rounded-lg border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_#2EAE7D] md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold uppercase text-deep-black"
              >
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
                placeholder="Jack Smith"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold uppercase text-deep-black"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold uppercase text-deep-black"
                >
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
                  placeholder="07XXX XXXXXX"
                />
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-semibold uppercase text-deep-black"
                >
                  Date *
                </label>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="mb-2 block text-sm font-semibold uppercase text-deep-black"
                >
                  Time *
                </label>
                <select
                  id="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
                >
                  <option value="">Select a time</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                  <option value="22:00">10:00 PM</option>
                </select>
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label
                htmlFor="guests"
                className="mb-2 block text-sm font-semibold uppercase text-deep-black"
              >
                Number of Guests *
              </label>
              <select
                id="guests"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                required
                className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
                <option value="8+">8+ Guests (Large Party)</option>
              </select>
            </div>

            {/* Special Requests */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold uppercase text-deep-black"
              >
                Special Requests (Optional)
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
                placeholder="Any dietary requirements, seating preferences, or special occasions?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full border-2 border-black bg-jacks-green px-8 py-4 font-bold uppercase text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Reserve Table'}
            </button>
          </form>

          {/* Demo Note */}
          <div className="mt-6 rounded-lg bg-retro-yellow/20 border-2 border-retro-yellow p-4">
            <p className="text-xs font-semibold text-deep-black">
              <strong>Demo Mode:</strong> This is a demonstration booking form. No actual reservation
              will be made. When we launch, bookings will be processed through our reservation system.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border-3 border-black bg-white p-6 shadow-[4px_4px_0px_0px_#2EAE7D]">
            <h3 className="mb-2 text-xl font-bold uppercase text-deep-black">Opening Hours</h3>
            <p className="text-deep-black/80">
              <strong>Coming Soon!</strong>
              <br />
              We&apos;ll announce our opening hours when we launch in Brighton&apos;s North Laine.
            </p>
          </div>

          <div className="rounded-lg border-3 border-black bg-white p-6 shadow-[4px_4px_0px_0px_#2EAE7D]">
            <h3 className="mb-2 text-xl font-bold uppercase text-deep-black">Location</h3>
            <p className="text-deep-black/80">
              <strong>North Laine, Brighton</strong>
              <br />
              Exact address to be announced. Stay tuned!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-8 mt-12">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <p className="text-sm font-semibold uppercase text-deep-black">
            &copy; 2024 Jack's Pizza. Detroit Style. Brighton Vibes.
          </p>
        </div>
      </footer>
    </div>
  );
}
