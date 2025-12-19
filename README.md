<<<<<<< HEAD
﻿# Weather-App-Syntecxhub
=======
﻿# Weather-App-Syntecxhub
 live demo : https://weather-app-syntecxhub-36j6.vercel.app/
 A full-stack weather application built with React (frontend) and Express.js (backend) that provides real-time weather information, 5-day forecasts, and search history tracking.

## 🌟 Features

### Core Functionality
- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **5-Day Weather Forecast**: View detailed weather predictions for the next 5 days
- **Search History**: Track and revisit previously searched cities
- **Responsive Design**: Optimized for desktop and mobile devices
- **Error Handling**: Graceful error messages for invalid cities or API failures

### Technical Features
- **Full-Stack Architecture**: React frontend with Express.js backend
- **Database Integration**: MySQL database for storing search history
- **API Integration**: OpenWeatherMap API for weather data
- **Modern UI**: Clean, intuitive interface with loading states

## 🛠️ Tech Stack

### Frontend
- **React 19.2.3**: Modern React with hooks and functional components
- **React Testing Library**: Comprehensive testing utilities
- **CSS**: Custom styling for responsive design

### Backend
- **Node.js & Express.js**: Server-side JavaScript runtime and web framework
- **MySQL2**: Database driver for MySQL database
- **Axios**: HTTP client for API requests
- **CORS**: Cross-origin resource sharing support
- **Dotenv**: Environment variable management

### External APIs
- **OpenWeatherMap API**: Weather and forecast data provider

## 📁 Project Structure

```
weatherapp/
├── backend/                 # Express.js server
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   ├── .env               # Environment variables (not committed)
│   └── node_modules/      # Backend dependencies
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.js
│   │   │   ├── SearchBar.js
│   │   │   ├── WeatherCard.js
│   │   │   ├── WeatherDetails.js
│   │   │   ├── HistoryList.js
│   │   │   ├── Loader.js
│   │   │   ├── Forecast.js
│   │   │   └── ErrorMessage.js
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Application styles
│   │   └── index.js       # React entry point
│   ├── package.json       # Frontend dependencies
│   └── node_modules/      # Frontend dependencies
├── README.md              # Project documentation
└── .gitignore            # Git ignore rules
```

## 🚀 Getting Started
- Node.js (v14 or higher)
- MySQL database

### Prerequisites
- Node.js (v14 or higher)
- MySQL database
- OpenWeatherMap API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JaveriaisPink14/Weather-App-Syntecxhub.git
   cd weatherapp
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables**
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=weather_app
   OPENWEATHER_API_KEY=your_openweathermap_api_key
   ```

5. **Set up MySQL database**
   - Create a database named `weather_app`
   - The application will automatically create the required tables

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on http://localhost:5000

2. **Start the frontend**
   ```bash
   cd frontend
   npm start
   ```
   The React app will run on http://localhost:3000

## 📡 API Endpoints

### Weather Endpoints
- `GET /api/weather?city={city_name}` - Get current weather for a city
- `GET /api/forecast?city={city_name}` - Get 5-day forecast for a city

### History Endpoints
- `GET /api/history` - Get search history (last 10 searches)
- `POST /api/history` - Add a city to search history

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm test
```

### Backend Testing
```bash
cd backend
npm test
```

## 🎨 Components Overview

### Frontend Components
- **App.js**: Main application component managing state and routing
- **Navbar.js**: Application header with branding
- **SearchBar.js**: City search input with autocomplete suggestions
- **WeatherCard.js**: Current weather display card
- **WeatherDetails.js**: Detailed weather information
- **Forecast.js**: 5-day weather forecast display
- **HistoryList.js**: Search history sidebar
- **Loader.js**: Loading spinner component
- **ErrorMessage.js**: Error display component

### Backend Architecture
- **server.js**: Express server with middleware setup
- **Database Connection**: MySQL connection with automatic table creation
- **API Routes**: RESTful endpoints for weather data and history
- **Error Handling**: Comprehensive error responses

## 🔧 Configuration

### Environment Variables
- `PORT`: Server port (default: 5000)
- `DB_HOST`: MySQL host
- `DB_USER`: MySQL username
- `DB_PASSWORD`: MySQL password
- `DB_NAME`: MySQL database name
- `OPENWEATHER_API_KEY`: OpenWeatherMap API key

### Database Schema
```sql
CREATE TABLE search_history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  city VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🌐 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure MySQL database is configured
3. Deploy the backend to services like Heroku, Railway, or Vercel

### Frontend Deployment
1. Build the production version:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the `build` folder to services like Netlify, Vercel, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

##  Acknowledgments

- OpenWeatherMap for providing weather data API
- React community for excellent documentation and tools
- Express.js for the robust backend framework



**Made with ❤️ by Syntecxhub**


>>>>>>> 5e5c2f32bf97f08dd1ebc338e6b446021f4e095a

A full-stack weather application built with React (frontend) and Express.js (backend) that provides real-time weather information, 5-day forecasts, and search history tracking.

## 🌟 Features

### Core Functionality
- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **5-Day Weather Forecast**: View detailed weather predictions for the next 5 days
- **Search History**: Track and revisit previously searched cities
- **Responsive Design**: Optimized for desktop and mobile devices
- **Error Handling**: Graceful error messages for invalid cities or API failures

### Technical Features
- **Full-Stack Architecture**: React frontend with Express.js backend
- **Database Integration**: MySQL database for storing search history
- **API Integration**: OpenWeatherMap API for weather data
- **Modern UI**: Clean, intuitive interface with loading states

## 🛠️ Tech Stack

### Frontend
- **React 19.2.3**: Modern React with hooks and functional components
- **React Testing Library**: Comprehensive testing utilities
- **CSS**: Custom styling for responsive design

### Backend
- **Node.js & Express.js**: Server-side JavaScript runtime and web framework
- **MySQL2**: Database driver for MySQL database
- **Axios**: HTTP client for API requests
- **CORS**: Cross-origin resource sharing support
- **Dotenv**: Environment variable management

### External APIs
- **OpenWeatherMap API**: Weather and forecast data provider

## 📁 Project Structure

```
weatherapp/
├── backend/                 # Express.js server
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   ├── .env               # Environment variables (not committed)
│   └── node_modules/      # Backend dependencies
├── client/                 # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.js
│   │   │   ├── SearchBar.js
│   │   │   ├── WeatherCard.js
│   │   │   ├── WeatherDetails.js
│   │   │   ├── HistoryList.js
│   │   │   ├── Loader.js
│   │   │   ├── Forecast.js
│   │   │   └── ErrorMessage.js
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Application styles
│   │   └── index.js       # React entry point
│   ├── package.json       # Frontend dependencies
│   └── node_modules/      # Frontend dependencies
├── README.md              # Project documentation
└── .gitignore            # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL database
- OpenWeatherMap API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JaveriaisPink14/Weather-App-Syntecxhub.git
   cd weatherapp
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

3. **Set up the frontend**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure environment variables**
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=weather_app
   OPENWEATHER_API_KEY=your_openweathermap_api_key
   ```

5. **Set up MySQL database**
   - Create a database named `weather_app`
   - The application will automatically create the required tables

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on http://localhost:5000

2. **Start the frontend**
   ```bash
   cd client
   npm start
   ```
   The React app will run on http://localhost:3000

## 📡 API Endpoints

### Weather Endpoints
- `GET /api/weather?city={city_name}` - Get current weather for a city
- `GET /api/forecast?city={city_name}` - Get 5-day forecast for a city

### History Endpoints
- `GET /api/history` - Get search history (last 10 searches)
- `POST /api/history` - Add a city to search history

## 🧪 Testing

### Frontend Testing
```bash
cd client
npm test
```

### Backend Testing
```bash
cd backend
npm test
```

## 🎨 Components Overview

### Frontend Components
- **App.js**: Main application component managing state and routing
- **Navbar.js**: Application header with branding
- **SearchBar.js**: City search input with autocomplete suggestions
- **WeatherCard.js**: Current weather display card
- **WeatherDetails.js**: Detailed weather information
- **Forecast.js**: 5-day weather forecast display
- **HistoryList.js**: Search history sidebar
- **Loader.js**: Loading spinner component
- **ErrorMessage.js**: Error display component

### Backend Architecture
- **server.js**: Express server with middleware setup
- **Database Connection**: MySQL connection with automatic table creation
- **API Routes**: RESTful endpoints for weather data and history
- **Error Handling**: Comprehensive error responses

## 🔧 Configuration

### Environment Variables
- `PORT`: Server port (default: 5000)
- `DB_HOST`: MySQL host
- `DB_USER`: MySQL username
- `DB_PASSWORD`: MySQL password
- `DB_NAME`: MySQL database name
- `OPENWEATHER_API_KEY`: OpenWeatherMap API key

### Database Schema
```sql
CREATE TABLE search_history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  city VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🌐 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure MySQL database is configured
3. Deploy the backend to services like Heroku, Railway, or Vercel

### Frontend Deployment
1. Build the production version:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the `build` folder to services like Netlify, Vercel, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenWeatherMap for providing weather data API
- React community for excellent documentation and tools
- Express.js for the robust backend framework

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact the maintainers.

---

**Made with ❤️ by Syntecxhub**
**Made with ❤️ by Syntecxhub**



