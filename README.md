# 🔒 Secrets Web Application

A secure, full-stack web application designed to demonstrate robust authentication and security measures. Built with Node.js, Express, and EJS, featuring industry-standard security practices for user authentication and session management.

## 🌟 Features

### 🔐 Comprehensive Security
- **Secure Password Hashing**: Uses bcrypt with salt rounds for maximum security
- **JWT Authentication**: Stateless authentication with automatic token expiration
- **HttpOnly Cookies**: Prevent XSS attacks with secure cookie implementation
- **Input Validation**: Comprehensive email and password format validation
- **Session Management**: Secure session handling with automatic cleanup

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with beautiful gradients
- **Interactive Forms**: Real-time validation and user feedback
- **Password Visibility Toggle**: Enhanced user experience
- **Loading States**: Professional loading animations
- **Auto-hiding Alerts**: Clean notification system

### 🚀 Technical Excellence
- **RESTful Architecture**: Clean, organized route structure
- **Error Handling**: Comprehensive 404 and error pages
- **Security Headers**: Production-ready security configurations
- **Code Organization**: Modular, maintainable codebase

## 🛠️ Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT implementation
- **cookie-parser** - Cookie handling middleware

### Frontend
- **EJS** - Templating engine
- **HTML5** - Modern markup
- **CSS3** - Advanced styling with gradients and animations
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Professional icons

## 📋 Requirements Met

### ✅ User Registration
- [x] Secure sign-up process with name, email, and password
- [x] Email format validation using regex
- [x] Password strength requirements (lowercase, uppercase, number, min 6 chars)
- [x] Secure password hashing with bcrypt (12 salt rounds)
- [x] Redirect to login page after successful registration
- [x] Show/hide password functionality

### ✅ Login Mechanisms  
- [x] Secure login with email and password validation
- [x] Email and password format checking
- [x] Redirect to protected dashboard after login
- [x] User authentication middleware

### ✅ Session Management
- [x] Secure HttpOnly cookies preventing XSS attacks
- [x] JWT-based stateless authentication
- [x] Token expiration (24 hours)
- [x] Automatic session cleanup

### ✅ Logout Mechanisms
- [x] Secure logout with cookie clearing
- [x] Redirect to login page after logout
- [x] Session invalidation

### ✅ Impressive UI
- [x] Modern gradient backgrounds
- [x] Responsive design for all devices  
- [x] Interactive animations and hover effects
- [x] Professional typography and spacing
- [x] User-friendly error messages
- [x] Loading states and notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd secrets-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set environment variables** (Optional)
   Create a `.env` file in the root directory:
   ```env
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   NODE_ENV=development
   PORT=3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
secrets-web-app/
├── index.js                 # Main server file
├── package.json            # Dependencies and scripts
├── README.md              # Project documentation
├── views/                 # EJS templates
│   ├── register.ejs       # Registration page
│   ├── login.ejs         # Login page
│   ├── dashboard.ejs     # Protected dashboard
│   └── 404.ejs          # Error page
├── public/               # Static assets
│   ├── css/
│   │   └── styles.css   # Main stylesheet
│   └── js/
│       └── script.js    # Client-side JavaScript
└── .gitignore           # Git ignore rules
```

## 🔒 Security Features

### Password Security
- **Bcrypt Hashing**: Passwords are hashed with 12 salt rounds
- **Strength Requirements**: Enforced complexity rules
- **No Plain Text Storage**: Passwords never stored in plain text

### Authentication
- **JWT Tokens**: Signed tokens with 24-hour expiration
- **HttpOnly Cookies**: Prevent client-side script access
- **Secure Flags**: Production-ready cookie configuration

### Input Validation
- **Email Validation**: Regex-based email format checking
- **Password Validation**: Real-time strength indicators
- **XSS Prevention**: Input sanitization and escaping

### Session Management
- **Automatic Expiration**: Sessions expire after 24 hours
- **Secure Storage**: Sessions stored in secure cookies
- **Clean Logout**: Complete session invalidation

## 🌐 Deployment

### Deploy to Render

1. **Create a Render account** at [render.com](https://render.com)

2. **Connect your GitHub repository**
   - Push your code to GitHub
   - Connect your GitHub account to Render

3. **Create a new Web Service**
   - Select your repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables if needed

4. **Configure environment**
   ```
   NODE_ENV=production
   JWT_SECRET=your-production-jwt-secret
   ```

5. **Deploy and access your live application**

### 🔗 Live Demo
**Deploy Link**: [Your Render deployment URL will go here]

## 🧪 Testing the Application

### Registration Flow
1. Visit the homepage (redirects to registration)
2. Enter name, email, and password
3. Verify password requirements are met
4. Submit form and verify redirect to login

### Login Flow  
1. Enter registered email and password
2. Verify successful authentication
3. Check dashboard access with user information
4. Test logout functionality

### Security Testing
1. Try accessing `/dashboard` without authentication
2. Test invalid email formats
3. Test weak passwords
4. Verify cookie security in browser dev tools

## 🎯 Best Practices Implemented

### Security
- Password hashing with bcrypt
- JWT token-based authentication  
- HttpOnly secure cookies
- Input validation and sanitization
- Error handling without information leakage

### Code Quality
- Modular route organization
- Comprehensive error handling
- Clean separation of concerns
- Consistent coding standards
- Proper HTTP status codes

### User Experience
- Responsive design
- Real-time form validation
- Loading states and feedback
- Accessible form controls
- Professional error messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

For any questions, issues, or deployment help:
- Create an issue in this repository
- Contact your mentor through the chat support
- Use the 1:1 mentorship option

## 🎉 Acknowledgments

- Built as part of the MERN Stack course Module 19
- Inspired by modern security best practices
- Thanks to all contributors and mentors

---

**⚡ Made with passion for security and great user experience!**