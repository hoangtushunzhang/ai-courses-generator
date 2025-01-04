import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavbarMenu from './NavbarMenu'
import AuthUserButton from './AuthUserButton'

const Header = () => {
    return (
        <div className='flex justify-between items-center shadow-sm py-5 px-10'>
            <div>
                <Link href={"/"}>
                    <Image
                        src="/Logo.png"
                        alt="AI Courses Generator"
                        width={100} height={100}>
                    </Image>
                </Link>
            </div>
            <div></div>
            <div className='flex items-center'>
                <div className='mr-5'>
                    <NavbarMenu />
                </div>
                <div>
                    <AuthUserButton />
                </div>
            </div>
        </div>
    )
}

export default Header