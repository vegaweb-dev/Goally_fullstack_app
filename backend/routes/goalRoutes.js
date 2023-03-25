const { Router } = require('express');
const router = Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

router.route('/').get(getGoal).post(setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router; //@@ Achtung: keep this line always at the button
