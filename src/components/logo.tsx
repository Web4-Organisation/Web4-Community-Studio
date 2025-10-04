import { Users } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2 group/logo">
      <div className="p-1.5 bg-sidebar-primary text-sidebar-primary-foreground rounded-lg">
        <Users className="h-5 w-5 transition-transform group-hover/logo:rotate-12" />
      </div>
      <span className="text-xl font-semibold font-headline tracking-tight text-sidebar-foreground group-data-[collapsible=icon]:hidden">Community<span className="text-primary">Manager</span></span>
    </Link>
  );
}
