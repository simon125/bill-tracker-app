// node modules
import * as express from 'express';
import { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
// local modules
import Bill from '../models/Bill';
import auth from '../middleware/auth';

const router = express.Router();

// @route  GET api/v1/bills
// @desc   Get all users bills
// @access Private

router.get('/', [auth], async (req: Request, res: Response) => {
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

router.get('/:id', [auth], async (req: Request, res: Response) => {
  try {
    const bill = await Bill.findById(req.params.id);
    res.status(200).json(bill);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/v1/bills
// @desc   Add bill
// @access Private

const validateBill = [
  check('expenseName', 'Expense name is required')
    .not()
    .isEmpty(),
  check('totalPrice', 'Total price is required')
    .not()
    .isEmpty(),
  check('transactionDate', 'Transaction date is required')
    .not()
    .isEmpty()
];

router.post(
  '/',
  [auth, ...validateBill],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // TODO: add more validation for optional
    const { expenseName, totalPrice, transactionDate } = req.body;

    try {
      const newBill = new Bill({
        expenseName,
        totalPrice,
        transactionDate,
        user: req.user.id
      });
      const bill = await newBill.save();
      res.status(200).json(bill);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
);

// @route  PUT api/v1/bills/:id
// @desc   Update bill
// @access Private

interface BillFields {
  expenseName?: string;
  totalPrice?: number;
  transactionDate?: string;
}

router.put('/:id', [auth], async (req: Request, res: Response) => {
  const { expenseName, totalPrice, transactionDate } = req.body;
  const billFields: BillFields = {};
  if (expenseName) {
    billFields.expenseName = expenseName;
  }
  if (totalPrice) {
    billFields.totalPrice = totalPrice;
  }
  if (transactionDate) {
    billFields.transactionDate = transactionDate;
  }

  try {
    let bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(401).json({ msg: 'Bill not found' });
    }

    if (bill.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    bill = await Bill.findByIdAndUpdate(
      req.params.id,
      { $set: billFields },
      { new: true }
    );
    res.status(200).json(bill);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// @route  DELETE api/v1/bills/:id
// @desc   Delete bill
// @access Private

router.delete('/:id', [auth], async (req: Request, res: Response) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(404).json({ msg: 'Contact not found' });
    }
    if (bill.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Bill.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: 'Bill removed' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

export default router;
