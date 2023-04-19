// controllers/pantryItems.js
const PantryItem = require('../models/PantryItem.jsx');
const User = require('../models/User.jsx');


exports.getPantryItems = async (req, res) => {
  try {
    const pantryItems = await PantryItem.find({ userId: req.user.id });
    res.status(200).json(pantryItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pantry items' });
  }
};

exports.addPantryItem = async (req, res) => {
  try {
    const { name } = req.body;
    // console.log("req.user:", req.user);
    const existingItem = await PantryItem.findOne({ name: name, userId: req.user.id });
    if (existingItem) {
      res.status(400).json({ message: "Item already present", existingItem });
    } else {
      const pantryItem = new PantryItem({ userId: req.user.id, name });
      await pantryItem.save();
      await User.findByIdAndUpdate(
        req.user.id,
        { $push: { pantryItems: pantryItem._id } },
        { new: true, useFindAndModify: false }
      );
      res.status(201).json(pantryItem);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error adding pantry item', error });
  }
};


exports.deletePantryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const pantryItem = await PantryItem.findOneAndDelete({ _id: id, userId: req.user.id });
    if (!pantryItem) {
      res.status(404).json({ message: 'Pantry item not found' });
    } else {
      await User.findByIdAndUpdate(
        req.user.id,
        { $pull: { pantryItems: pantryItem._id } }
      );
      res.status(200).json({ message: 'Pantry item deleted' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting pantry item' });
  }
};
