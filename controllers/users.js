const bcrypt = require('bcrypt');
const User = require('../models/user');
const { createUserToken } = require('../config/auth');

module.exports = {
	signup,
	login,
};

async function signup(req, res, next) {
	try {
		// Adds new user to database
		const firstName = req.body.firstName;
		const lastName = req.body.lastName;
		const email = req.body.email;
		const password = await bcrypt.hash(req.body.password, 10);
		const user = await User.create({
			firstName,
			lastName,
			email,
			password,
		});
		res.status(201).json(user);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
}

async function login(req, res) {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) throw new Error();
		const match = await bcrypt.compare(req.body.password, user.password);
		if (match) {
			const token = createUserToken(req, user);
			res.json({ user, token });
		} else {
			throw new Error();
		}
	} catch (err) {
		res.status(400).json(err);
	}
}
