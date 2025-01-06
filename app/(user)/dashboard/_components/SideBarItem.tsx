import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface SideBarItemProps {
    label: string,
    link: string,
    Icon: LucideIcon,
    pathname?: string;
}

const SideBarItem = ({ label, link, Icon, pathname }: SideBarItemProps) => {
    return (
        <Link href={link} >
            <div className={`flex items-center gap-2 p-3
             text-gray-600 hover:bg-gray-100
             hover:text-black cursor-pointer rounded-lg 
             ${pathname === link ? 'bg-gray-100 text-black' : ''}`  
            }>
                <Icon size={24} />
                <p>{label}</p>
            </div>
        </Link>
    )
}

export default SideBarItem