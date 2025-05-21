'use client'


import Link from "next/link";
import {usePathname} from "next/navigation";
import NavBarItem from "@/app/(components)/NavBarItem";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';// @ts-ignore
export default function Layout({ children }) {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState<'favorite' | 'create' | null>(null);
    useEffect(() => {
        if (pathname === '/articles/favorite') {
            setActiveItem('favorite');
        } else if (pathname === '/articles/create') {
            setActiveItem('create');
        } else {
            setActiveItem(null);
        }
    }, [pathname]);

    return (
        <div className={'flex flex-col text-xs'}>
            <div className={'h-10 bg-amber-700 text-amber-950 flex gap-10 justify-center'}>
                <Link href={'/articles/favorite'} replace={true}>
                    <NavBarItem label="Favorite" isActive={activeItem === 'favorite'} />
                </Link>
                <Link href={'/articles/create'}
                      replace={true}>
                    <NavBarItem label="Create" isActive={activeItem === 'create'} />
                </Link>
                <Typography variant="h6" color="white">
                    Current pathname: {pathname}
                </Typography>
            </div>

            <div>
                {children}
            </div>
        </div>
    )
}