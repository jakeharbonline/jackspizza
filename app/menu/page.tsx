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

const DEMO_MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Hot Honey Pepperoni',
    description: 'Spicy pepperoni, hot honey drizzle, burrata, fresh basil. Our signature pie.',
    price: 16,
    image: '/hot-honey-peperoni-with.jpg',
    category: 'Detroit Style Pizzas',
  },
  {
    id: '2',
    name: 'The Bacon Bomb',
    description: 'Crispy bacon, burrata, caramelized onions, honey drizzle, arugula.',
    price: 17,
    image: '/468503446_17885841417155677_3531722948642645978_n.jpg',
    category: 'Detroit Style Pizzas',
  },
  {
    id: '3',
    name: 'Classic Margherita',
    description: 'San Marzano tomato sauce, fresh mozzarella, basil, olive oil.',
    price: 14,
    image: '/jackspizzacol.jpeg',
    category: 'Detroit Style Pizzas',
  },
  {
    id: '4',
    name: 'The Veggie',
    description: 'Roasted peppers, mushrooms, olives, red onion, cherry tomatoes, mozzarella.',
    price: 15,
    image: '/jackspizzacol.jpeg',
    category: 'Detroit Style Pizzas',
  },
];

export default function MenuPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(DEMO_MENU_ITEMS);

  useEffect(() => {
    // Check authentication
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);

      // Load saved menu items from localStorage if available
      const savedItems = localStorage.getItem('menuItems');
      if (savedItems) {
        setMenuItems(JSON.parse(savedItems));
      }

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
          <p className="text-deep-black">Loading menu...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  // Group items by category
  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    const category = acc[item.category];
    if (category) {
      category.push(item);
    }
    return acc;
  }, {} as Record<string, MenuItem[]>);

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
      <main className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        {/* Page Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <div className="mb-4 inline-block">
              <span className="inline-block rotate-[-2deg] rounded-full border-2 border-black bg-retro-yellow px-4 py-1 text-sm font-bold uppercase">
                Our Menu
              </span>
            </div>
            <h2 className="text-5xl font-bold uppercase text-deep-black md:text-7xl">
              Detroit Style <span className="text-jacks-green">Pizzas</span>
            </h2>
            <p className="mt-4 text-lg text-deep-black/80">
              48-hour fermented dough. Caramelized cheese edges. Pure perfection.
            </p>
          </div>

          {/* Add Menu Item Button */}
          <div>
            <a
              href="/menu/add"
              className="inline-block rounded-full border-2 border-black bg-jacks-green px-6 py-3 font-bold uppercase text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              + Add Item
            </a>
          </div>
        </div>

        {/* Menu Grid */}
        {Object.entries(groupedItems).map(([category, items]) => (
          <section key={category} className="mb-16">
            <h3 className="mb-8 text-3xl font-bold uppercase text-deep-black">{category}</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="transform overflow-hidden rounded-lg border-3 border-black bg-white shadow-[6px_6px_0px_0px_#2EAE7D] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#2EAE7D]"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-2 flex items-start justify-between">
                      <h4 className="text-xl font-bold uppercase text-deep-black">{item.name}</h4>
                      <span className="ml-2 text-xl font-bold text-jacks-green">
                        £{item.price}
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-deep-black/80">{item.description}</p>

                    {/* Order Button */}
                    <button className="w-full rounded-full border-2 border-black bg-retro-orange px-6 py-3 font-bold uppercase text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                      Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Empty State */}
        {menuItems.length === 0 && (
          <div className="rounded-lg border-4 border-black bg-white p-12 text-center shadow-[6px_6px_0px_0px_#2EAE7D]">
            <div className="mb-4 text-6xl">🍕</div>
            <h3 className="mb-2 text-2xl font-bold uppercase text-deep-black">No Menu Items Yet</h3>
            <p className="mb-6 text-deep-black/80">
              Start building your menu by adding your first item.
            </p>
            <a
              href="/menu/add"
              className="inline-block rounded-full border-2 border-black bg-jacks-green px-6 py-3 font-bold uppercase text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-out hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              + Add First Item
            </a>
          </div>
        )}
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
