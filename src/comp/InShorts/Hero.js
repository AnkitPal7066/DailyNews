import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hero(props) {
    const [coun, setCoun] = useState([]);
    const [desh, setDesh] = useState("");

    useEffect(() => {
        const fData = async () => {
            try {
                const url = `https://newsapi.org/v2/top-headlines?country=${props.yes || "us"}&apiKey=57778f48e0cd409996aa87fceb2de284&category=${props.categ || ""}`;
                const resp = await axios.get(url);
                setCoun(resp.data.articles);
                console.log(props.yes);
                console.log(props.categ);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fData();
    }, [props.yes, props.categ]);

    console.log(coun);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            coun.map((ele, idx) => (
                                <div key={idx} className="p-4 md:w-1/3">
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ele.urlToImage} alt="blog" />


                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{ele.author}</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{ele.title}</h1>
                                            <p className="leading-relaxed mb-3">{ele.content}</p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer hover:text-indigo-700" href={ele.url}>Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" data-darkreader-inline-stroke="" >
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }

                    </div>
                </div>
            </section>
        </div>
    )
}
// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vHTS5YaqjA3D0rtAVBEkSsnVBX6AgGyx
// https://newsapi.org/v2/top-headlines?country=us&apiKey=57778f48e0cd409996aa87fceb2de284

// https://api.newsdata.io/v1/news?api_key=your_api_key&country=us
