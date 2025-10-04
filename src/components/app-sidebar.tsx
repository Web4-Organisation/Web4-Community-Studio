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
} from '@/components/ui/sidebar';
import Logo from '@/components/logo';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/board', label: 'Brainstorm Board', icon: LayoutGrid },
  { href: '/dashboard/planner', label: 'Community Planner', icon: Book },
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
      <SidebarHeader className="h-14 justify-start p-2">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  as="a"
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
