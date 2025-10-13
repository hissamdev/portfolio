'use client';

import React from "react";
import { useState } from "react";

export default function ServicesMenu() {
    const [servicesMenu, setServicesMenu] = useState(false);

    return(
        <>
            <li><p className="nav-links" onClick={() => setServicesMenu(!servicesMenu)}>Services</p>
            <div className={`h-82 w-122 bg-gray-50 absolute top-full left-108 p-8 border border-black text-black ${servicesMenu ? "block" : "hidden"}`}>
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