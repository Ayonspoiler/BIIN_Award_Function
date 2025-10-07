import Judge from "../models/Judge.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingJudge = await Judge.findOne({ email });
    if (existingJudge)
      return res.status(400).json({ message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const judge = await Judge.create({ name, email, password: hashed });
    res
      .status(201)
      .json({ id: judge._id, name: judge.name, email: judge.email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const judge = await Judge.findOne({ email });
    if (!judge) return res.status(404).json({ message: "Judge not found" });

    const match = await bcrypt.compare(password, judge.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: judge._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({
      token,
      judge: { id: judge._id, name: judge.name, email: judge.email },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
