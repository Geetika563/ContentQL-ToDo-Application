// ToDoController.js

const ToDoModel = require('../models/ToDoModel');

const getToDo = async (req, res) => {
  try {
    const allToDo = await ToDoModel.find();
    res.json(allToDo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveToDo = async (req, res) => {
  const { text } = req.body;

  try {
    const newToDo = new ToDoModel({ text });
    await newToDo.save();
    res.status(201).json(newToDo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  try {
    const updatedToDo = await ToDoModel.findByIdAndUpdate(_id, { text }, { new: true });
    res.json(updatedToDo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteToDo = async (req, res) => {
  const { _id } = req.body;

  try {
    await ToDoModel.findByIdAndDelete(_id);
    res.json({ message: 'ToDo deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//new==

const markToDoAsCompleted = async (_id) => {
    try {
      const response = await axios.post(`${baseUrl}/markAsCompleted`, { _id });
      console.log(response.data);
      
      setToDo(prevTodos =>
        prevTodos.map(todo => (todo._id === _id ? { ...todo, completed: true } : todo))
      );
    } catch (error) {
      console.error('Error marking task as completed:', error);
    }
  };
  



const getCompletedTasks = async (req, res) => {
  try {
    const completedTasks = await ToDoModel.find({ completed: true });
    res.json(completedTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
  markToDoAsCompleted,
  getCompletedTasks,
};

  

