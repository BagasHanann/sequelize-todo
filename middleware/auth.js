// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
	const token = req.header('Authorization');

	if (!token) {
		return res.status(401).json({ error: 'Access denied. Token is missing.' });
	}

	jwt.verify(token.split(' ')[1], 'your_secret_key', (err, user) => {
		if (err) {
			return res.status(403).json({ error: 'Invalid token.' });
		}

		req.user = user;
		next();
	});
};

module.exports = { authenticateToken };
