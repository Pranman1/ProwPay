# ProwPay

A modern payment solution platform built with FastAPI and React.

## Project Structure

```plaintext
ProwPay/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── models/         # Pydantic models and schemas
│   │   ├── routers/        # API routes and endpoints
│   │   ├── services/       # Business logic and services
│   │   ├── config.py      # Configuration management
│   │   ├── database.py    # Database connection and utilities
│   │   └── main.py        # FastAPI application setup
│   ├── requirements.txt    # Python dependencies
│   └── run.py             # Application entry point
│
├── frontend/               # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── config/        # Frontend configuration
│   │   ├── pages/         # Page components
│   │   ├── services/      # API and external services
│   │   ├── styles/        # CSS and styling
│   │   ├── App.js         # Main React component
│   │   └── index.js       # React entry point
│   └── package.json       # Node.js dependencies
```

## Tech Stack

### Backend
- **FastAPI (0.104.1)**: Modern, fast web framework for building APIs with Python
- **Uvicorn (0.24.0)**: ASGI server for running the FastAPI application
- **MongoDB**: NoSQL database for flexible data storage
- **Motor (3.7.1)**: Async MongoDB driver for Python
- **Python-dotenv**: Environment variable management
- **Pydantic**: Data validation using Python type annotations

### Frontend
- **React 18**: UI library for building user interfaces
- **React Router**: Client-side routing
- **Chakra UI**: Component library for building accessible React applications
- **Axios**: HTTP client for API requests
- **Environment Configuration**: Using .env files for different environments

## Setup and Installation

### Backend Setup
1. Create and activate virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Unix
   # or
   venv\\Scripts\\activate  # Windows
   ```

2. Install dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. Create .env file:
   ```env
   MONGODB_URL=mongodb://localhost:27017
   MONGODB_DB_NAME=prowpay_db
   PORT=8000
   ENV=development
   ```

4. Run the server:
   ```bash
   python run.py
   ```

### Frontend Setup
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Create .env file:
   ```env
   REACT_APP_API_URL=http://localhost:8000
   REACT_APP_ENV=development
   ```

3. Start development server:
   ```bash
   npm start
   ```

## Development Guidelines

### Code Organization
- **Backend**:
  - Use appropriate routers for different features
  - Keep business logic in services
  - Use Pydantic models for data validation
  - Implement proper error handling
  - Follow FastAPI best practices

- **Frontend**:
  - Component-based architecture
  - Reusable components in components/
  - Page components in pages/
  - API services in services/
  - Global styles in styles/

### API Structure
- RESTful endpoints
- Proper error responses
- Input validation using Pydantic
- Consistent response format
- CORS configuration for frontend access

### Database
- MongoDB for flexible document storage
- Async operations using Motor
- Proper connection management
- Error handling for database operations

## Available Endpoints

### Backend API
- `GET /`: Welcome message
- `GET /health`: Health check endpoint
- More endpoints to be added as development progresses

### Frontend Routes
- `/`: Home page
- More routes to be added as development progresses

## Contributing
1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## Future Enhancements
- Authentication system
- Payment processing
- User management
- Transaction history
- Analytics dashboard

## License
[Add License Information]

---
*This documentation will be updated as the project evolves.*