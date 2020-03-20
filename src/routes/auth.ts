// node modules
import * as express from 'express';
import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import { check, validationResult } from 'express-validator';
// local modules
import auth from '../middleware/auth';
import User from '../models/User';

const router: Router = express.Router();

// @route   GET api/v1/auth
// @desc    Get logged in user
// @access  Private

router.get('/', [auth], async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public

router.post(
  '/',
  [
    check('email', 'please include valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid password' });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '1h' },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.status(200).json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error!');
    }
  }
);

export default router;
