"use client"

import { useState } from "react";

const SearchFilter = () => {

    const [text, setText] = useState("")

    const handleChange = (e: any) => {
        const value = e.target.value
        console.log(value)
    }

    return (
        <div className='py-8'>
            <div>
                <select name="test" id="1" className='border border-primary w-80 h-12'>
                    <option value="all">All</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="Unknown">Unknown</option>
                </select>
                <input type="text" className="w-40 h-10 border" onChange={handleChange} />
                <button className="border p-5 btn">Here</button>
            </div>
        </div>
    )
}

export default SearchFilter