'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function AddMenuItemPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '/jackspizzacol.jpeg',
    category: 'Detroit Style Pizzas',
  });
  const [isSaving, setIsSaving] = useState(false);

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
    setIsSaving(true);

    // Create new menu item
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: Number.parseFloat(formData.price),
      image: formData.image,
      category: formData.category,
    };

    // Get existing items from localStorage
    const existingItems = localStorage.getItem('menuItems');
    const items: MenuItem[] = existingItems ? JSON.parse(existingItems) : [];

    // Add new item
    items.push(newItem);

    // Save back to localStorage
    localStorage.setItem('menuItems', JSON.stringify(items));

    // Redirect back to menu
    setTimeout(() => {
      router.push('/menu');
    }, 500);
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
              className="font-semibold uppercase text-jacks-green"
            >
              Menu
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
      <main className="mx-auto max-w-3xl px-6 py-12 md:px-8">
        {/* Back Button */}
        <a
          href="/menu"
          className="mb-8 inline-block font-semibold uppercase text-deep-black hover:text-jacks-green transition-colors"
        >
          ← Back to Menu
        </a>

        {/* Page Header */}
        <div className="mb-8">
          <div className="mb-4 inline-block">
            <span className="inline-block rotate-[-2deg] rounded-full border-2 border-black bg-retro-yellow px-4 py-1 text-sm font-bold uppercase">
              Admin
            </span>
          </div>
          <h2 className="text-4xl font-bold uppercase text-deep-black md:text-5xl">
            Add Menu Item
          </h2>
          <p className="mt-4 text-lg text-deep-black/80">
            Create a new pizza to add to the menu.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-lg border-4 border-black bg-white p-8 shadow-[6px_6px_0px_0px_#2EAE7D]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Pizza Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold uppercase text-deep-black"
              >
                Pizza Name *
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
                placeholder="e.g., Hot Honey Pepperoni"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold uppercase text-deep-black"
              >
                Description *
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={4}
                className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
                placeholder="Describe the toppings and what makes this pizza special..."
              />
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-semibold uppercase text-deep-black"
              >
                Price (£) *
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
                className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
                placeholder="14.00"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-semibold uppercase text-deep-black"
              >
                Category *
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className="w-full rounded-lg border-2 border-deep-black px-4 py-3 text-base transition-all focus:border-jacks-green focus:outline-none focus:ring-2 focus:ring-jacks-green focus:ring-offset-2"
              >
                <option value="Detroit Style Pizzas">Detroit Style Pizzas</option>
                <option value="Sides">Sides</option>
                <option value="Drinks">Drinks</option>
                <option value="Desserts">Desserts</option>
              </select>
            </div>

            {/* Image Selection */}
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase text-deep-black">
                Pizza Image *
              </label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  '/jackspizzacol.jpeg',
                  '/hot-honey-peperoni-with.jpg',
                  '/468503446_17885841417155677_3531722948642645978_n.jpg',
                ].map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setFormData({ ...formData, image })}
                    className={`overflow-hidden rounded-lg border-3 transition-all ${
                      formData.image === image
                        ? 'border-jacks-green shadow-[4px_4px_0px_0px_#2EAE7D]'
                        : 'border-deep-black hover:border-jacks-green'
                    }`}
                  >
                    <img
                      src={image}
                      alt="Pizza option"
                      className="aspect-square w-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-deep-black/60">
                Click an image to select it for your pizza
              </p>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSaving}
                className="flex-1 rounded-full border-2 border-black bg-jacks-green px-8 py-4 font-bold uppercase text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? 'Saving...' : 'Add to Menu'}
              </button>
              <a
                href="/menu"
                className="flex-1 text-center rounded-full border-2 border-black bg-cream px-8 py-4 font-bold uppercase text-deep-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                Cancel
              </a>
            </div>
          </form>

          {/* Demo Note */}
          <div className="mt-6 rounded-lg bg-retro-yellow/20 border-2 border-retro-yellow p-4">
            <p className="text-xs font-semibold text-deep-black">
              <strong>Demo Mode:</strong> Items are saved in your browser's localStorage. They'll
              persist during this session but won't be saved to a real database.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <p className="text-sm font-semibold uppercase text-deep-black">
            &copy; 2024 Jack's Pizza. Detroit Style. Brighton Vibes.
          </p>
        </div>
      </footer>
    </div>
  );
}
