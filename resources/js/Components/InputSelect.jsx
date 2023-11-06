
'use client';

import { Select } from 'flowbite-react';

let InputSelect = ({ options, handleInput, name, id, handleChange }) => {
    return (
        <div className="max-w-screen-md">
            <Select id={id} name={name} value={handleInput.member_ship_type} onChange={handleChange}>
                {options.map((item) => (
                    <option value={item.member_ship_type} key={item.member_ship_type}>{item.label}</option>
                ))}
            </Select>
        </div>
    );
}

export default InputSelect;
