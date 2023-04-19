import React, { useState } from "react";

function PantryForm({ onAddItem }) {
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(item.trim()) {
            onAddItem(item);
            setItem('');
        }
        else {
            setItem('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter an item"
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />
            <button type="submit">Add Item</button>
        </form>
    );
}

export default PantryForm;