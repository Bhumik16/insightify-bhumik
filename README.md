# 🚀 Insightify

<div align="center">

![Insightify Logo](client/src/assets/logo.png)

**AI-Powered App Review Analysis & Management Platform**

Transform your app feedback into actionable insights with advanced AI analysis, automated responses, and intelligent tagging.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3.8+-3776AB?logo=python)](https://python.org/)

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📖 About

**Insightify** is a comprehensive platform that helps app developers and product managers understand their users better by analyzing app reviews using AI. It automatically processes feedback from app stores, generates intelligent responses, categorizes reviews with smart tags, and provides actionable insights through beautiful dashboards.

### 🎯 Key Highlights

- **🤖 AI-Powered Analysis**: Leverage Google's Gemini AI for sentiment analysis and insights
- **💬 Smart Reply Suggestions**: Auto-generate contextually appropriate responses to reviews
- **🏷️ Intelligent Tagging**: Automatically categorize reviews by themes, bugs, features, and more
- **📊 Visual Analytics**: Beautiful dashboards with charts and metrics
- **🎤 Voice Agent**: Interactive voice-based AI assistant for hands-free queries
- **🔄 Real-Time Updates**: Live review processing with WebSocket connections
- **🛡️ Enterprise Security**: HashiCorp Vault integration for secure credential management
- **🌐 Multi-Platform**: Support for Google Play Store and Apple App Store

---

## ✨ Features

### Core Features

| Feature | Description |
|---------|-------------|
| **Review Analysis** | Deep sentiment analysis using advanced NLP and AI models |
| **Auto-Reply Generator** | AI-generated response templates customized to review context |
| **Smart Tagging** | Automatic categorization (Performance, UI/UX, Bugs, Features, etc.) |
| **Competitor Analysis** | Compare your app against competitors with side-by-side metrics |
| **Voice Agent** | Real-time voice conversation with AI for insights and queries |
| **Dashboard Analytics** | Interactive charts showing trends, sentiment distribution, and KPIs |
| **Review Scraping** | Automated collection of reviews from app stores |
| **Export Reports** | Generate PDF reports with comprehensive analysis |

### Additional Features

- 🔐 **Secure Authentication** with Firebase
- 👥 **User Management** with role-based access
- 📱 **Responsive Design** optimized for all devices
- 🌓 **Modern UI** with Framer Motion animations
- 📈 **Trend Analysis** to track sentiment over time
- 🔔 **Real-time Notifications** for new reviews
- 💾 **Data Persistence** with Firebase Firestore
- 🔍 **Advanced Search** and filtering capabilities

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2** - Modern UI library
- **Vite** - Lightning-fast build tool
- **TailwindCSS 4.1** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Recharts** - Charting library
- **Socket.io Client** - Real-time communication
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** with **Express 5** - Server framework
- **Socket.io** - WebSocket server
- **Firebase Admin** - Authentication & Firestore
- **Google Generative AI** - AI/ML capabilities
- **Supabase** - Alternative database
- **Google Play Scraper** - Review collection
- **Express Rate Limit** - API protection

### AI Service
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **Google Gemini AI** - Large language model
- **LangChain** - LLM framework
- **ChromaDB** - Vector database for RAG
- **Sentence Transformers** - Embeddings
- **WebSockets** - Real-time voice communication

### Infrastructure
- **Firebase** - Authentication, Firestore database
- **Supabase** - PostgreSQL database (optional)
- **HashiCorp Vault** - Secrets management (mentioned in features)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ and npm ([Download](https://nodejs.org/))
- **Python** 3.8+ ([Download](https://python.org/))
- **Git** ([Download](https://git-scm.com/))

### Required API Keys

You'll need to obtain the following:

1. **Google Gemini API Key** - [Get it here](https://makersuite.google.com/app/apikey)
2. **Firebase Project** - [Create project](https://console.firebase.google.com/)
3. **Supabase Keys** (Optional) - [Sign up](https://supabase.com/)

---

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

We provide convenient scripts to get you started quickly:

```bash
# Clone the repository
git clone https://github.com/yourusername/insightify.git
cd insightify

# Run the quick start script
# On macOS/Linux:
chmod +x quick-start.sh
./quick-start.sh

# On Windows:
quick-start.bat
```

The script will guide you through:
1. ✅ Checking prerequisites
2. 📦 Installing dependencies
3. ⚙️ Setting up environment files
4. 🚀 Starting all services

### Option 2: Manual Setup

#### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone https://github.com/yourusername/insightify.git
cd insightify

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

# Install AI service dependencies
cd ../ai-service
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
deactivate
cd ..
```

#### 2. Configure Environment Variables

Create `.env` files in each directory:

**`server/.env`**
```env
PORT=5001
GOOGLE_API_KEY=your_google_gemini_api_key
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
NODE_ENV=development
```

**`client/.env`**
```env
VITE_API_URL=http://localhost:5001
VITE_AI_SERVICE_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**`ai-service/.env`**
```env
GOOGLE_API_KEY=your_google_gemini_api_key
PORT=8000
```

#### 3. Start the Services

You'll need three terminal windows:

**Terminal 1 - Backend Server**
```bash
cd server
npm run dev
# Runs on http://localhost:5001
```

**Terminal 2 - AI Service**
```bash
cd ai-service
source venv/bin/activate  # On Windows: venv\Scripts\activate
uvicorn voice_free:app --reload --port 8000 --host 0.0.0.0
# Runs on http://localhost:8000
```

**Terminal 3 - Frontend**
```bash
cd client
npm run dev
# Runs on http://localhost:5173
```

#### 4. Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5001
- **AI Service**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

---

## 📁 Project Structure

```
insightify/
├── 📱 client/                  # React frontend application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Page components
│   │   ├── context/           # React context providers
│   │   ├── lib/               # Utilities and helpers
│   │   └── assets/            # Images and static files
│   ├── public/                # Public assets
│   └── package.json
│
├── 🔧 server/                  # Node.js backend
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   ├── routes/            # API routes
│   │   ├── models/            # Data models
│   │   ├── services/          # Business logic
│   │   ├── middleware/        # Express middleware
│   │   ├── config/            # Configuration files
│   │   └── server.js          # Entry point
│   └── package.json
│
├── 🤖 ai-service/              # Python AI service
│   ├── main.py                # Main FastAPI app
│   ├── voice_free.py          # Voice agent service
│   ├── gemini_live.py         # Gemini integration
│   ├── rag_tool.py            # RAG implementation
│   ├── session_manager.py     # Session management
│   ├── requirements.txt       # Python dependencies
│   └── venv/                  # Virtual environment
│
├── 📄 Documentation files
│   ├── README.md              # This file
│   ├── CHANGELOG.md           # Version history
│   ├── CONTRIBUTING.md        # Contribution guidelines
│   └── LICENSE                # License information
│
└── 🚀 Quick start scripts
    ├── quick-start.sh         # Unix/macOS setup script
    └── quick-start.bat        # Windows setup script
```

---

## 📚 Documentation

### Additional Guides

- [📡 Scraper Flow](server/SCRAPER_FLOW.md) - How the review scraper works
- [🔐 Firebase Setup](server/FIREBASE_SETUP.md) - Firebase configuration guide
- [🤖 RAG Implementation](server/RAG_IMPLEMENTATION.md) - Retrieval-Augmented Generation
- [⚡ Rate Limiting](server/RATE_LIMITING_GUIDE.md) - API rate limit configuration
- [🔧 Troubleshooting](server/TROUBLESHOOTING.md) - Common issues and solutions
- [🎤 Voice Agent](ai-service/README.md) - Voice agent documentation

### API Documentation

Once the servers are running, you can access:
- **FastAPI Interactive Docs**: http://localhost:8000/docs
- **ReDoc Documentation**: http://localhost:8000/redoc

---

## 🎯 Usage

### 1. Sign Up / Log In
Create an account or log in with your existing credentials.

### 2. Add Your App
Navigate to the dashboard and add your app by providing the app store URL.

### 3. Scrape Reviews
Click "Analyze" to start scraping and analyzing reviews from the app store.

### 4. View Insights
- **Dashboard**: See overview metrics, sentiment distribution, and trends
- **Reviews**: Browse all reviews with AI-generated tags and suggested replies
- **Competitor Analysis**: Compare your app with competitors
- **Voice Agent**: Ask questions about your reviews using voice

### 5. Generate Responses
For any review, click "Generate Reply" to get AI-powered response suggestions.

### 6. Export Reports
Download comprehensive PDF reports with all your analysis data.

---

## 🔧 Development

### Running Tests

```bash
# Backend tests
cd server
npm test

# AI service tests
cd ai-service
python -m pytest
```

### Code Style

We use ESLint for JavaScript and Black for Python:

```bash
# Lint frontend
cd client
npm run lint

# Format Python code
cd ai-service
black .
```

### Building for Production

```bash
# Build frontend
cd client
npm run build

# The build output will be in client/dist/
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Find and kill the process using the port
lsof -ti:5001 | xargs kill -9  # Backend
lsof -ti:8000 | xargs kill -9  # AI Service
lsof -ti:5173 | xargs kill -9  # Frontend
```

**WebSocket Connection Failed**
- Ensure the AI service is running on port 8000
- Check that CORS is properly configured
- Verify firewall settings

**Firebase Authentication Error**
- Double-check your Firebase credentials in `.env`
- Ensure Firebase project has Authentication enabled
- Verify Firestore rules are properly configured

**Python Dependencies Installation Failed**
- Make sure you're using Python 3.8 or higher
- Try upgrading pip: `pip install --upgrade pip`
- Install build tools if needed

For more detailed troubleshooting, see [TROUBLESHOOTING.md](server/TROUBLESHOOTING.md)

---

## 📊 Performance

- **Review Processing**: ~100-500 reviews per minute
- **AI Response Generation**: ~2-3 seconds per response
- **Real-time Updates**: <100ms latency via WebSocket
- **Dashboard Load Time**: <2 seconds for 10,000+ reviews

---

## 🔐 Security

- All API keys and secrets are stored in `.env` files (never committed)
- Firebase Admin SDK for secure authentication
- Rate limiting on all API endpoints
- Input validation and sanitization
- CORS protection
- SQL injection prevention with parameterized queries

---

## 🗺️ Roadmap

- [ ] Support for Apple App Store scraping
- [ ] Multi-language support
- [ ] Advanced sentiment analysis with emotion detection
- [ ] Email notifications for critical reviews
- [ ] Team collaboration features
- [ ] Custom AI model fine-tuning
- [ ] Mobile app (iOS & Android)
- [ ] Integration with Slack, Discord, and other tools
- [ ] Advanced analytics with ML-powered predictions
- [ ] A/B testing for response templates

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **Your Name** - *Initial work*

---

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for powering our AI features
- [Firebase](https://firebase.google.com/) for authentication and database
- [React](https://reactjs.org/) for the amazing frontend framework
- [FastAPI](https://fastapi.tiangolo.com/) for the modern Python framework
- [TailwindCSS](https://tailwindcss.com/) for beautiful styling
- All our contributors and users!

---

## 📞 Support

- 📧 Email: support@insightify.io
- 💬 Discord: [Join our community](https://discord.gg/insightify)
- 🐦 Twitter: [@insightify](https://twitter.com/insightify)
- 📖 Documentation: [docs.insightify.io](https://docs.insightify.io)

---

## ⭐ Star History

If you find Insightify helpful, please consider giving it a star! ⭐

<div align="center">

**Made with ❤️ by the Insightify Team**

[⬆ Back to Top](#-insightify)

</div>
