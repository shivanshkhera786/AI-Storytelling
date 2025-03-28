# AI Storytelling Project

This project is an AI-powered storytelling app that generates short stories based on user prompts and creates AI-generated illustrations using ComfyUI.

## Features
✅ Generate AI-powered stories using OpenAI's GPT-4  
✅ Generate AI illustrations using ComfyUI  
✅ Simple and clean UI with React & TailwindCSS  
✅ Backend powered by FastAPI  

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/AI-Storytelling-Project.git
cd AI-Storytelling-Project
```

### 2️⃣ Install Backend Dependencies
Navigate to the backend folder and install dependencies:
```sh
cd backend
python -m venv venv  # Create virtual environment
source venv/bin/activate  # Activate on Mac/Linux
venv\Scripts\activate  # Activate on Windows
pip install -r requirements.txt
```

### 3️⃣ Run the Backend Server
```sh
uvicorn main:app --reload
```

The FastAPI backend will run at **http://localhost:8000**.

### 4️⃣ Install & Run the Frontend
Navigate to the frontend folder and install dependencies:
```sh
cd ../frontend
npm install
npm run dev
```

The React frontend will run at **http://localhost:5173**.

---

## 🚀 API Endpoints

- **POST /generate** → Generates a story and image based on the user's prompt.  
  **Request Body:**
  ```json
  {
    "prompt": "A brave knight in a futuristic city."
  }
  ```

  **Response:**  
  ```json
  {
    "story": "Once upon a time in a futuristic city...",
    "image": "http://localhost:8188/generated_image.png"
  }
  ```

---

## 📌 Notes

- Replace `your-openai-api-key` in `backend/main.py` with your actual OpenAI API key.
- Ensure ComfyUI is running at `http://localhost:8188` for AI image generation.
- You may modify the frontend UI (`frontend/src/StoryGenerator.js`) to fit your needs.

Happy coding! 🚀
