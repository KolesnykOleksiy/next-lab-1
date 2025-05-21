'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import NavBarItem from "@/app/(components)/NavBarItem";
import cls from "./nav-bar.module.scss";

// @ts-ignore
export default function Layout({ children }) {

    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState<'articles' | 'settings'| 'security' | null>(null);
    useEffect(() => {
        if (pathname === '/articles') {
            setActiveItem('articles');
        } else if (pathname === '/profile/settings') {
            setActiveItem('settings');
        } else if(pathname === '/profile/security') {
            setActiveItem('security');
        }else {
            setActiveItem(null);
        }
    }, [pathname]);
    return (
        <div>
            <div className={cls.navBar}>
                <div className={cls.navBarItem}>
                    <Link href={'/articles'}>
                        <NavBarItem label="Articles" isActive={activeItem === 'articles'} />
                    </Link>

                    <Link href={'/profile/settings'}>
                        <NavBarItem label="Settings" isActive={activeItem === 'settings'} />
                    </Link>
                    <Link href={'/profile/security'}>
                        <NavBarItem label="Security" isActive={activeItem === 'security'} />
                    </Link>
                    {/*<h2>Current pathname : {pathname}</h2>*/}
                </div>


            </div>
            <main>
                {children}
            </main>
        </div>
    )
}