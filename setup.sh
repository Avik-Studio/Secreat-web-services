#!/bin/bash

# Secrets Web App Setup Script
echo "🔒 Setting up Secrets Web Application..."

# Create project directory structure
echo "📁 Creating directory structure..."
mkdir -p views
mkdir -p public/css
mkdir -p public/js

# Create .env file from example
if [ ! -f .env ]; then
    echo "⚙️  Creating environment file..."
    cp .env.example .env
    echo "✅ Please update the .env file with your configuration"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create views directory if it doesn't exist
if [ ! -d "views" ]; then
    mkdir views
fi

# Create public directories if they don't exist
if [ ! -d "public/css" ]; then
    mkdir -p public/css
fi

if [ ! -d "public/js" ]; then
    mkdir -p public/js
fi

echo ""
echo "🎉 Setup complete! Your Secrets Web App is ready to use."
echo ""
echo "🚀 To start the development server:"
echo "   npm run dev"
echo ""
echo "🌐 To start the production server:"
echo "   npm start"
echo ""
echo "📖 Don't forget to:"
echo "   1. Update the JWT_SECRET in your .env file"
echo "   2. Review the README.md for deployment instructions"
echo "   3. Test the application before deploying"
echo ""
echo "🔗 For deployment on Render, visit: https://render.com"
echo ""
echo "Happy coding! 🎯"