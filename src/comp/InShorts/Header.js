import React, { useState } from 'react'
import Hero from './Hero';

export default function Header() {
    const [yes, setYes] = useState("");
    const [categ, setCateg] = useState("");
    const g20 = [
        { "name": "Argentina", "code": "ar" },
        { "name": "Australia", "code": "au" },
        { "name": "Brazil", "code": "br" },
        { "name": "Canada", "code": "ca" },
        { "name": "China", "code": "cn" },
        { "name": "France", "code": "fr" },
        { "name": "Germany", "code": "de" },
        { "name": "India", "code": "in" },
        { "name": "Indonesia", "code": "id" },
        { "name": "Italy", "code": "it" },
        { "name": "Japan", "code": "jp" },
        { "name": "Mexico", "code": "mx" },
        { "name": "Russia", "code": "ru" },
        { "name": "Saudi Arabia", "code": "sa" },
        { "name": "South Africa", "code": "za" },
        { "name": "South Korea", "code": "kr" },
        { "name": "Turkey", "code": "tr" },
        { "name": "United Kingdom", "code": "gb" },
        { "name": "United States", "code": "us" },
        { "name": "European Union", "code": "eu" }
    ]
    const g10 = [
        "politics",
        "business",
        "technology",
        "entertainment",
        "sports",
        "health",
        "science",
        "environment",
        "local"
    ];

    const country = (idx) => {
        setYes(g20[idx].code);
    }
    const cate = (e) => {
        setCateg(e);
    }
    console.log(yes);
    console.log(categ);

    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="flex flex-wrap py-6 lg:justify-start  justify-around">
                    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">DailyNews</span>
                    </a>
                    <div className="flex flex-wrap gap-5">
                        <select className="shadow-lg rounded-sm border px-2 py-1 md:py-2 lg:py-1 w-full md:w-auto" onChange={(e) => country(e.target.value)}>
                            <option disabled selected hidden>Select Country</option>
                            {
                                g20.map((ele, idx) => (
                                    <option key={idx} value={idx} className="hover:underline hover:cursor-pointer hover:text-gray-900">{ele.name}</option>
                                ))
                            }
                        </select>
                        <select className="shadow-lg rounded-sm border px-2 py-1 md:py-2 lg:py-1 w-full md:w-auto" onChange={(e) => cate(e.target.value)}>
                            <option disabled selected hidden>Categories</option>
                            {
                                g10.map((ele, no) => (
                                    <option key={no} value={ele} className="hover:underline hover:cursor-pointer hover:text-gray-900">{ele}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

            </header>
            <Hero yes={yes} categ={categ} />
        </div>
    )
}
