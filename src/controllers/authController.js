const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByUsername } = require('../models/userModel');

const register = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await createUser(username, email, hashedPassword);
        res.status(201).json({ success: true, message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating user', error });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await findUserByUsername(username);
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ success: true, message: 'User logged in successfully', token });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error logging in', error });
    }
};

module.exports = {
    register,
    login
};