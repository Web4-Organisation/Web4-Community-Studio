import { Shapes } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2 group/logo">
      <Shapes className="h-7 w-7 text-primary transition-transform group-hover/logo:rotate-12" />
      <span className="text-xl font-semibold font-headline tracking-tight group-data-[collapsible=icon]:hidden">Community Canvas</span>
    </Link>
  );
}
