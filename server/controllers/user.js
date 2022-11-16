import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const createUser = async (req, res) => {
  const { firstname, surname, username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) res.status(400).json({ message: "User already exists" });

    const usernameCheck = await User.findOne({ email });
    if (usernameCheck) res.status(400).json({ message: "User already exists" });

    const passwordCheck = await User.findOne({ password });
    if (passwordCheck) res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      name: `${firstname} ${surname}`,
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ name: result.name, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

export const logUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) res.status(404).json({ message: "User does not exist" });

    const isPasswordCorrect = bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect)
      res.status(404).json({ message: "User does not exist" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ name: existingUser.name, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
