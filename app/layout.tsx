import { Poppins } from 'next/font/google';

import './globals.css';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Jack's Pizza - Coming Soon",
  description: 'Something special is cooking',
  // Uncomment when search console verification is needed:
  // verification: {
  //   google: Config.searchConsole.verification,
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 ${poppins.className}`}>{children}</body>
    </html>
  );
}
