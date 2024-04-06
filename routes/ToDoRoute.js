//export the route first

const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo, markToDoAsCompleted, getCompletedTasks } = require("../controllers/ToDoController");

const router = Router();

router.get('/', getToDo);
router.post('/save', saveToDo);
router.post('/update', updateToDo);
router.post('/delete', deleteToDo);
router.post('/markAsCompleted', markToDoAsCompleted);
router.get('/completed', getCompletedTasks);

module.exports = router;

