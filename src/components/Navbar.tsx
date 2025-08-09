"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"



export function Navbar(){

    const pathname = usePathname();

    const navItem = [
        { name : "Home", path: "/" },
        { name : "Blog", path: "/blog" },
        { name : "Projects", path: "/project" },
        { name : "Contact", path: "/contact" },
    ]

    return (<nav className="max-w-md px-6 flex rounded-3xl p-4   items-center shadow-md absolute   right-48">
        <ul className="flex justfity-between items-center gap-6">
            {navItem.map((item) => (
                <li key={item.name}>
                    <Link
                        href={item.path}
                        className={`hover:text-blue-500 ${
                            pathname === item.path ? 'text=blue-600 font-semiblond' : ''
                        }`} 
                    >
                        {item.name}
                    </Link>
                </li>    
            ))}
        </ul>
        </nav>
)
}