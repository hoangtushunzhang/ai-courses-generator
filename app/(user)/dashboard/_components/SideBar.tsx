'use client'
import { SideBarDashBoardItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SideBarItem from './SideBarItem'
import { usePathname } from 'next/navigation'

const SideBar = () => {
    const pathname = usePathname();
    return (
        <div className='fixed h-full md:w-64 shadow-md p-5'>
            <div className='flex flex-row items-center w-full'>
                <Link href={'/'} className='flex items-center justify-between'>
                    <Image src={"/Logo.png"}
                        alt="AI Courses Generator"
                        width={60}
                        height={60} />
                    <p className='text-myPrimary font-semibold ml-3 text-4xl'>
                        AI
                    </p>
                </Link>
            </div>
            <hr />
            <div className='my-5'>
                {SideBarDashBoardItems.map((item, index) => (
                    <SideBarItem key={index}
                        label={item.label}
                        link={item.link}
                        Icon={item.icon}
                        pathname={pathname}
                    />
                ))}
            </div>
        </div>
    )
}

export default SideBar