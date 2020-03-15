import express from 'express';
import Bill from '../models/Bill';
import auth from '../middleware/auth';

const router = express.Router();

// @route  GET api/v1/bills
// @desc   Get all users bills
// @access Private

router.get('/', [auth], async (req, res) => {
  try {
    const bills = await Bill.find({ user: req.user.id });
    res.status(200).json(bills);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/v1/bills/:id
// @desc   Get users bill by id
// @access Private

router.get('/:id', async (req, res) => {
  try {
    res.status(200).json({ msg: 'Jupi you did it!', id: req.params.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/v1/bills
// @desc   Add bill
// @access Private

router.post('/', async (req, res) => {
  try {
    res.status(200).json({ youWillSaveIt: req.body });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// @route  PUT api/v1/bills/:id
// @desc   Update bill
// @access Private

router.put('/:id', async (req, res) => {
  try {
    res.status(200).json({ updatedthings: req.body, id: req.params.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// @route  DELETE api/v1/bills/:id
// @desc   Delete bill
// @access Private

router.delete('/:id', async (req, res) => {
  try {
    res.status(200).json({ idToDelete: req.params.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

export default router;
