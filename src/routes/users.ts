// node modules
import * as express from 'express';
import { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
// local modules
import User from '../models/User';

const router = express.Router();

// @route   POST api/v1/users
// @desc    Register a user
// @access  Public

router.post(
  '/',
  [
    check('name', 'Name is required!')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ msg: 'User already exist' });
      }

      const salt = await bcrypt.genSalt(10);
      user = new User({
        name,
        email,
        password: await bcrypt.hash(password, salt)
      });

      await user.save();

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
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  }
);

export default router;
