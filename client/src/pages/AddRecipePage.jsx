import { useState } from "react";
import "./AddRecipePage.css";
import api from "../services/api";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [mainIngredients, setMainIngredients] = useState("");
  const [sideIngredients, setSideIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMainIngredientsChange = (e) => {
    setMainIngredients(e.target.value);
  };

  const handleSideIngredientsChange = (e) => {
    setSideIngredients(e.target.value);
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Save the recipe data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("mainIngredients", JSON.stringify(mainIngredients.split(",")));
    formData.append("sideIngredients", JSON.stringify(sideIngredients.split(",")));
    formData.append("instructions", instructions);
    if (image) {
      formData.append("image", image);
    }

    try {
      await api.post("/recipes", formData);
      // Show success message or redirect to the recipes page
    } catch (error) {
      // Handle error or show error message
    }
    console.log({
      title,
      mainIngredients: mainIngredients.split(","),
      sideIngredients: sideIngredients.split(","),
      instructions,
      image,
    });
  };

  return (
    <div className="add-recipe-container">
      <h1>Add a Recipe</h1>
      <form onSubmit={handleSubmit} className="add-recipe-form">
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="mainIngredients">Main Ingredients:</label>
          <input
            type="text"
            id="mainIngredients"
            name="mainIngredients"
            value={mainIngredients}
            onChange={handleMainIngredientsChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="sideIngredients">Side Ingredients:</label>
          <input
            type="text"
            id="sideIngredients"
            name="sideIngredients"
            value={sideIngredients}
            onChange={handleSideIngredientsChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={instructions}
            onChange={handleInstructionsChange}
          ></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="image">Image:</label>
          <input 
            type="file" 
            id="image" 
            name="image" 
            onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRecipe;
