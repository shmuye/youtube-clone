# YouTube Clone

A modern YouTube clone built with React and Material-UI that replicates the core functionality of YouTube including video browsing, searching, and playback.

![YouTube Clone](https://i.ibb.co/yKKzbHp/youtube-5968852.png)

## 🚀 Features

- **Video Feed**: Browse trending and categorized videos
- **Search Functionality**: Search for videos across YouTube
- **Video Player**: Watch videos with full controls using React Player
- **Channel Pages**: View channel details and their videos
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Theme**: Modern dark UI design
- **Category Filtering**: Filter videos by categories (Music, Gaming, Education, etc.)
- **Video Statistics**: View counts, likes, and other video metrics

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Video Player**: React Player
- **Styling**: CSS3 with Material-UI theming
- **API**: YouTube Data API v3 (via RapidAPI)

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 14 or higher)
- npm or yarn package manager
- RapidAPI account for YouTube API access

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd youtube-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your RapidAPI key:
   ```env
   VITE_YOUTUBE_CLONE_APP_RAPID_API_KEY=your_rapidapi_key_here
   ```

   To get your API key:
   - Sign up at [RapidAPI](https://rapidapi.com/)
   - Subscribe to the [YouTube v3 API](https://rapidapi.com/ytdlfree/api/youtube-v31/)
   - Copy your API key from the dashboard

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 🏗️ Project Structure

```
src/
├── assets/
│   └── constants.js          # App constants and categories
├── components/
│   ├── ChannelCard.jsx       # Channel display component
│   ├── ChannelDetail.jsx     # Channel detail page
│   ├── Feed.jsx              # Main feed component
│   ├── Loader.jsx            # Loading spinner
│   ├── Navbar.jsx            # Navigation bar
│   ├── SearchBar.jsx         # Search functionality
│   ├── SearchFeed.jsx        # Search results page
│   ├── Sidebar.jsx           # Category sidebar
│   ├── VideoCard.jsx         # Video thumbnail component
│   ├── VideoDetail.jsx       # Video player page
│   ├── Videos.jsx            # Video grid component
│   └── index.js              # Component exports
├── service/
│   └── api.js                # API service functions
├── App.jsx                   # Main app component
├── main.jsx                  # App entry point
└── index.css                 # Global styles
```

## 🎯 Usage

### Navigation
- **Home**: Browse the main video feed
- **Categories**: Click sidebar categories to filter videos
- **Search**: Use the search bar to find specific videos
- **Video Player**: Click any video to watch it
- **Channels**: Click channel names to view channel details

### Features Overview
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Video Categories**: Filter by Music, Gaming, Education, Sports, etc.
- **Real-time Search**: Search functionality with instant results
- **Video Statistics**: View counts, likes, and engagement metrics
- **Channel Information**: Subscriber counts and channel details

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The application is configured for easy deployment on platforms like Vercel, Netlify, or any static hosting service.

For Vercel deployment:
1. Connect your GitHub repository to Vercel
2. Add your environment variables in Vercel dashboard
3. Deploy automatically on push to main branch


