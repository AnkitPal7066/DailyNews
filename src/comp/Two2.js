import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Two2() {
    const [coun, setCoun] = useState([]);
    const [city, setCity] = useState([]);
    const [sCoun, setSCoun] = useState(null);
    const [sCity, SetSCity] = useState(null);
    const [pCity, setPCity] = useState("");
    useEffect(() => {
        const fData = async () => {
            try {
                const resp = await axios.get("https://countriesnow.space/api/v0.1/countries");
                setCoun(resp.data.data);
            } catch (error) {
                console.error("not", error);
            }
        };
        fData();
    }, []);
    console.log(coun);


    const cities = (e) => {
        const index = e.target.selectedIndex;
        SetSCity(index);
        setCity(coun[index - 1].cities);
        setSCoun(coun[index - 1].country);
        // console.log(sCoun);
    }

    const selCity = (e) => {
        const id = e.target.selectedIndex;
        setPCity(city[id - 1]);
    }

    useEffect(() => {
        console.log(sCoun);
    }, [sCoun]);

    useEffect(() => {
        console.log(pCity);
    }, [pCity])

    return (
        <div className="text-white mt-6 flex flex-col gap-6">
            <h1 className="text-4xl bg-red-800 py-2 pb-5 text-center font-semibold underline text-slate-300">Find your country</h1>
            <div className="flex justify-center gap-6">
                <select className="bg-gray-800 w-40 py-1 rounded-md pl-3" onChange={cities}>
                    <option selected disabled>Select Country</option>
                    {
                        coun.map((ele, idx) => (
                            <option key={idx}>{ele.country}</option>
                        ))
                    }
                </select>
                <select className="bg-gray-800 w-40 py-1 rounded-md pl-3" onChange={selCity}>
                    <option selected disabled>Select City</option>
                    {
                        city.map((ele, id) => (
                            <option key={id}>{ele}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex justify-center">
                {
                    sCoun !== null && pCity !== "" &&(
                        <div className="flex justify-center text-lg bg-gray-800 py-1 w-fit px-40 rounded-full">
                            Your country is {sCoun} and your city is {pCity}
                        </div>
                    )
                }
            </div>
            <hr className="border border-white w-lvw"/>
            <br />
        </div>
    )
}
// "https://countriesnow.space/api/v0.1/countries"
