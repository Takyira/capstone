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

//get a single record by ID
router.get("/:id", (request, response) => {
  Habit.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Habit.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        action: body.action
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
