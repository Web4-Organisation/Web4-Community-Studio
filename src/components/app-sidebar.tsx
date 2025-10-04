'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Book,
  Bot,
  ClipboardList,
  LayoutDashboard,
  LayoutGrid,
  LineChart,
  Target,
} from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Separator } from './ui/separator';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/board', label: 'Brainstorm Board', icon: LayoutGrid },
  { href: '/dashboard/planner', label: 'Planner', icon: Book },
  { href: '/dashboard/templates', label: 'Content Templates', icon: Bot },
  { href: '/dashboard/goals', label: 'Goals', icon: Target },
  { href: '/dashboard/analyzer', label: 'Analyzer', icon: LineChart },
  { href: '/dashboard/tasks', label: 'Tasks', icon: ClipboardList },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      className="border-r"
      collapsible="icon"
      variant="sidebar"
    >
      <SidebarHeader className="justify-center">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref legacyBehavior>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <a>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <Button variant="outline" className="w-full" onClick={() => console.log('Upgrade plan clicked')}>
          Upgrade Plan
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
