import { House, Plus } from '@phosphor-icons/react';

export const menuItems = [
    {
        label: 'Home',
        icon: <House />,
        href: '/user/dashboard/home',
    },

    {
        label: 'Novo Evento',
        icon: <Plus />,
        href: '/user/dashboard/new-event',
    }
];