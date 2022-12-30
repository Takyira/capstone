const { Router } = require("express");
const Habit = require("../models/Habits");
const router = Router();

router.post("/", (request, response) => {
  //mongoose assumes there is an open connection
  const newHabit = new Habit(request.body);
  newHabit.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Habit.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
