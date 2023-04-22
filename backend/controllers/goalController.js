const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModels');
//@description   Get goals
//@route         GET api/goals
//@access        private
const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

//@description   Set goals
//@route         POST api/goals
//@access        private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text');
  }
  const goal = await Goal.create({ text: req.body.text });

  // console.log('chevere');
  res.status(200).json(goal);
});

//@description   Update goals
//@route         PUT api/goals:ID
//@access        private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goal.findOneAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

//@description   Delete goals
//@route         DELETE api/goals:ID
//@access        private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  await goal.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoal, setGoal, updateGoal, deleteGoal }; //@@ Achtung: keep this line always at the button
