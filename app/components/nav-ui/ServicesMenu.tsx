'use client';

import { useState } from "react";

export default function ServicesMenu() {
    const [servicesMenu, setServicesMenu] = useState(false);

    return(
        <>
            <li><p tabIndex={0} className="nav-links select-none" onClick={() => setServicesMenu(!servicesMenu)}>Services</p>
            <div className={`h-82 w-122 bg-white absolute top-full left-180 p-8 border border-t-0 border-black text-black z-100 ${servicesMenu ? "block" : "hidden"}`}>
                <div>
                    <h3 className="text-[1.2rem]">SEO Packages</h3>
                    <div className="header-submenu-list"><p>Monthly SEO</p></div>
                    <div className="header-submenu-list"><p>Audit Report</p></div>
                </div>
            </div>
            </li>
        </>
    )
}