import { LayoutDashboardIcon, ShieldPlusIcon, TelescopeIcon } from "lucide-react";

export const NavMenuItems = [
    {
        href: 'courses',
        label: 'Courses',
        value: 'courses',
    },
    {
        href: 'docs',
        label: 'Docs',
        value: 'docs',
    },
    {
        href: 'about',
        label: 'About',
        value: 'about',
    },
];

export const CategoryItems = [
    {
        label: 'IT',
        value: 'it',
        href: '/it',
    },
    {
        label: 'Finance',
        value: 'finance',
        href: 'finance',
    },
    {
        label: 'Accounting',
        value: 'accounting',
        href: 'accounting',
    },
]

export const SocialAccounts = [
    {
        href: 'https://facebook.com',
        label: 'Facebook',
    },
    {
        href: 'https://instagram.com',
        label: 'Instagram',
    },
    {
        href: 'https://tiktok.com',
        label: 'Tiktok',
    },
    {
        href: 'https://youtube.com',
        label: 'Youtube',
    },
]

export const SideBarDashBoardItems = [
    {
        label: 'DashBoard',
        value: 'dashboard',
        link: '/dashboard',
        icon: LayoutDashboardIcon,
    },
    {
        label: 'Explore',
        value: 'explore',
        link: '/dashboard/explore',
        icon: TelescopeIcon,
    },
    {
        label: 'Upgrade',
        value: 'upgrade',
        link: '/dashboard/upgrade',
        icon: ShieldPlusIcon,
    },
]