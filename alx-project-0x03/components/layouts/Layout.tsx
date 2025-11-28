// Remove problematic import
// import { LayoutProps } from '@/interface';

interface LayoutProps {
  children: React.ReactNode;
}

// Use simple components without complex imports
const Header = () => (
  <header className="bg-white shadow-sm border-b">
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold text-blue-600">Splash App</h1>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; 2024 Splash App. All rights reserved.</p>
    </div>
  </footer>
);

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;