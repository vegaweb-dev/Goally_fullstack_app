const asyncHandler = require('express-async-handler')
//@description   Get goals
//@route         GET api/goals
//@access        private
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goal' });
})

//@description   Set goals
//@route         POST api/goals
//@access        private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.Text) {
    res.status(400)
    throw new Error('Please add a text');

  }

  // console.log('chevere');
  res.status(200).json({ message: 'set goal' });
})

//@description   Update goals
//@route         PUT api/goals:ID
//@access        private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//@description   Delete goals
//@route         DELETE api/goals:ID
//@access        private
const deleteGoal =asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoal, setGoal, updateGoal, deleteGoal }; //@@ Achtung: keep this line always at the button
