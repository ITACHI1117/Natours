const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} = require('../controllers/tourController');

//   mounting the router
const router = express.Router();
// middleware
// router.param('id', checkID);

// check body middle ware function
// on post im checking body using a middleware
router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
