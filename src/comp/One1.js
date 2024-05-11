import React, { useState } from 'react'

export default function One1() {

    const [add, setAdd] = useState("");
    const [arr, setArr] = useState([]);
    const [index, setindex] = useState(null);

    const hInput = (e) => {
        setAdd(e.target.value);
    }

    const hAdd = () => {
        if (index !== null) {
            const newArr = [...arr];
            newArr[index] = add;
            setArr(newArr);
            setindex(null);
            setAdd("");
        } else{
            setArr([...arr, add]);
            setAdd("");
        }         
    }

    const hDel = (idx) => {
        const newArr = [...arr];
        newArr.splice(idx, 1);
        setArr(newArr);
    }

    const hEdit = (idx) => {
        setindex(idx);
        setAdd(arr[idx]);
    }
    return (
        <div className="flex items-center flex-col bg-black">
            <div className="flex mb-5 text-4xl bg-red-700 w-full justify-center py-2 text-slate-300 font-semibold">ToDo List</div>
            <div className="bg-gray-800 shadow-md border border-gray-400 p-2 px-5 rounded-md">
                <div className="flex justify-around w-96 mt-5 bg-gray-800">
                    <input onChange={hInput} value={add} placeholder='Enter your text here...' className="border-b-2 px-3 py-1 w-72 rounded-md border-black bg-gray-700 mr-2" type="text" />
                    <button onClick={hAdd} className="shadow-lg bg-gray-900 text-white px-5 text-lg rounded-md ml-2">{index === null ? "Add" : "Done"}</button>
                </div>
                <div className="mt-5">
                    {
                        arr.map((ele, idx) => (
                            <div key={idx} className="flex justify-between w-96 mb-3">
                                <div className="bg-gray-700 text-white w-48 rounded-md px-3 pt-1">{ele}</div>
                                <div className="flex justify-between w-36">
                                    <button onClick={() => hEdit(idx)} className="bg-blue-600 text-white py-1 px-4 rounded-md">Edit</button>
                                    <button onClick={() => hDel(idx)} className="bg-green-600 text-white px-3 rounded-md">Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <br />
            <hr className="border border-white w-lvw"/>
        </div>
    )
}
