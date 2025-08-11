const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Static files middleware with explicit paths
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// In-memory user storage (replace with database in production)
let users = [];

// Helper functions
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    // At least 6 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
};

const generateToken = (userId) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '24h' });
};

const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.redirect('/login');
    }
    
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.clearCookie('token');
            return res.redirect('/login');
        }
        req.userId = decoded.userId;
        next();
    });
};

// Routes
app.get('/', (req, res) => {
    res.redirect('/register');
});

app.get('/register', (req, res) => {
    res.render('register', { error: null, success: null });
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    
    // Validation
    if (!name || !email || !password) {
        return res.render('register', { 
            error: 'All fields are required', 
            success: null 
        });
    }
    
    if (!validateEmail(email)) {
        return res.render('register', { 
            error: 'Please enter a valid email address', 
            success: null 
        });
    }
    
    if (!validatePassword(password)) {
        return res.render('register', { 
            error: 'Password must be at least 6 characters with uppercase, lowercase, and number', 
            success: null 
        });
    }
    
    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.render('register', { 
            error: 'User with this email already exists', 
            success: null 
        });
    }
    
    try {
        // Hash password
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        // Create new user
        const newUser = {
            id: users.length + 1,
            name,
            email,
            password: hashedPassword,
            createdAt: new Date()
        };
        
        users.push(newUser);
        
        res.render('register', { 
            error: null, 
            success: 'Registration successful! Please login.' 
        });
        
    } catch (error) {
        res.render('register', { 
            error: 'Registration failed. Please try again.', 
            success: null 
        });
    }
});

app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    // Validation
    if (!email || !password) {
        return res.render('login', { error: 'All fields are required' });
    }
    
    if (!validateEmail(email)) {
        return res.render('login', { error: 'Please enter a valid email address' });
    }
    
    try {
        // Find user
        const user = users.find(u => u.email === email);
        if (!user) {
            return res.render('login', { error: 'Invalid email or password' });
        }
        
        // Check password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.render('login', { error: 'Invalid email or password' });
        }
        
        // Generate JWT token
        const token = generateToken(user.id);
        
        // Set secure cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        
        res.redirect('/dashboard');
        
    } catch (error) {
        res.render('login', { error: 'Login failed. Please try again.' });
    }
});

app.get('/dashboard', authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.userId);
    if (!user) {
        res.clearCookie('token');
        return res.redirect('/login');
    }
    
    res.render('dashboard', { user });
});

app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('404');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
        console.log(`📱 Access the application at: http://localhost:${PORT}`);
    });
}

// Export for Vercel
module.exports = app;