import React, { useState, useEffect } from 'react';
import './PantryPage.css';
import api from "../services/api.jsx"


const PantryPage = () => {
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/pantryItems");
      setPantryItems(response.data);
    }
    fetchData();
  }, []);

  const handleAddPantryItem = async (e) => {
    e.preventDefault();
    const newItem = e.target.pantryItem.value.trim();
    if (newItem && !pantryItems.includes(newItem)) {
      try {
        const response = await api.post("/pantryItems", { name: newItem });
        setPantryItems([...pantryItems, response.data]);
        e.target.pantryItem.value = '';
      } catch (error) {
        // Handle error or show error message
      }
    }
  };

  const handleRemovePantryItem = async (item) => {
    try {
      await api.delete(`/pantryItems/${item._id}`);
      setPantryItems(pantryItems.filter((pantryItem) => pantryItem._id !== item._id));
    } catch (error) {
      // Handle error or show error message
    }
  };

  return (
    <div className="pantry-container">
      <h1>My Pantry</h1>
      <form onSubmit={handleAddPantryItem}>
        <input
          type="text"
          name="pantryItem"
          placeholder="Add a pantry item"
          autoComplete="off"
        />
        <button type="submit">Add</button>
      </form>
      <ul className="pantry-items">
        {pantryItems.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => handleRemovePantryItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PantryPage;
