import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gold-500">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-white">Page Not Found</h2>
        <p className="text-charcoal-400 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/">
          <Button variant="primary">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}

