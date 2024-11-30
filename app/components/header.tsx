"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        href:"/",
        name:"home",
    },
    {
        href:"/post",
        name:"post",
    },
    {
        href:"/contact",
        name:"contact",
    },
]

export default function Headers() {
    
    const navLink = usePathname()
    
    return (
        <header className="bg-green-700 p-3 flex items-center justify-around">
            <div className="bg-green-100 text-green-800 w-max rounded-lg font-bold p-3 uppercase">next react ts</div>
            <nav className="">
                <ul className="flex justify-around gap-x-3">
                    {
                        navLinks.map(nav => <li key={nav.name}>
                            <Link 
                                href={nav.href} 
                                className={nav.href == navLink ? "btn-foncer" : "btn-clair"}
                            >{nav.name}</Link> 
                        </li>)
                    }
                   
                   
                </ul>
            </nav>
        </header>
    )
}