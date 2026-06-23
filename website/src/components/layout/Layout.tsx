import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function Layout() {
  useScrollToTop();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
