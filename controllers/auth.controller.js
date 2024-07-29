const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res, next) => {
  // ambil data dari req.body ok
  const { fullname, email, password } = req.body;

  // cek inputan tidak boleh kosong ok
  if (!fullname || !email || !password) {
    return res.status(400).json({
        message: "Data cannot be empty" 
    });
  }

  // cek apakah email sudah terdaftar ok
  const exist = await Users.findOne({ 
    where: { 
        email 
    } 
});
  // ok
  if (exist) {
    return res.status(400).json({ message: "Email already registered, please change email" });
  }

  // enkripsi password ok
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = await Users.create({
    fullname,
    email,
    password: hashedPassword,
  })

  return res.status(201).json({ message: "Registration success, please login" });
};
const login = async (req, res, next) => {
  // ambil data dari req.body ok
  const { email, password } = req.body;

  // cek inputan tidak boleh kosong ok
  if (!email || !password) {
    return res.status(400).json({
        message: "Data cannot be empty" 
    });
  }

  // cek apakah email terdaftar 
  const user = await Users.findOne({ 
    where: { 
        email 
    } 
});
  // ok
  if (!user) {
    return res.status(400).json({ message: "Email or password is wrong" });
  }

  // cek dan compare password ok
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Email or password is wrong" });
  }

  // generate token ok
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60*5 });

  return res.status(200).json({ message: "Login success", token });
};

module.exports = {
  login,
  register,
};
