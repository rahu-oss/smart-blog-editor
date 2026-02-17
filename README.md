# Smart Blog Editor

Smart Blog Editor is a full stack web application where users can
register, log in, write blog posts, and publish them. The editor
automatically saves the content while typing and also provides an
AI-generated summary feature.

This project was developed as part of a full stack assignment to
demonstrate frontend, backend, database, and auto-save functionality
similar to modern blog platforms.

------------------------------------------------------------------------

# Features

-   User Registration and Login
-   Email validation with proper error messages
-   Blog editor with auto-save functionality
-   Publish button to publish blog
-   AI-generated summary
-   MongoDB database integration
-   Status indicator (Saving, Saved, Published)
-   Clean UI using Tailwind CSS

------------------------------------------------------------------------

# Setup Instructions

## 1. Clone the repository

git clone `<your-github-repo-link>`{=html} cd smart-blog-editor

------------------------------------------------------------------------

## 2. Backend Setup

Open terminal and go to backend folder:

cd backend

Install dependencies:

pip install -r requirements.txt

Create a .env file and add:

MONGO_URL=your_mongodb_connection_string OPENAI_API_KEY=your_api_key
JWT_SECRET=your_secret_key

Run backend:

uvicorn app.main:app --reload

Backend runs on:

http://localhost:8000

------------------------------------------------------------------------

## 3. Frontend Setup

Open new terminal:

cd frontend

Install dependencies:

npm install

Run frontend:

npm run dev

Frontend runs on:

http://localhost:5173

------------------------------------------------------------------------

# Explanation of Auto-Save Logic

The auto-save feature is implemented using React useEffect hook.

When the user types in the editor:

-   The content state updates
-   A delay of 2 seconds is applied using setTimeout
-   After the delay, a PATCH request is sent to the backend
-   The backend updates the blog content in MongoDB

This delay prevents sending too many requests while the user is typing
continuously.

This approach was chosen because:

-   It prevents data loss
-   It improves user experience
-   It reduces unnecessary database load
-   It works similar to real-world editors like Google Docs

The UI also shows status messages such as:

Saving... Saved Published

------------------------------------------------------------------------

# Database Schema Explanation

MongoDB was chosen because it is flexible and easy to use with JSON
data.

Posts Collection Schema:

{ \_id: ObjectId, content: string, status: string }

Field Explanation:

\_id: Unique identifier for each post.

content: Stores the blog text.

status: Stores post state: draft or published

Why this schema was chosen:

-   Simple and easy to manage
-   Suitable for assignment requirements
-   Easy to update during auto-save
-   Easy to extend in future (title, author, date)

------------------------------------------------------------------------

# How Publish Works

When the Publish button is clicked:

-   Frontend sends PATCH request
-   Backend updates status to "published"
-   MongoDB stores the published post

------------------------------------------------------------------------

# Tech Stack

Frontend:

React Tailwind CSS Axios

Backend:

FastAPI Python

Database:

MongoDB Atlas

AI:

OpenAI API / DeepSeek API

------------------------------------------------------------------------

# Author

Rahul Kumar

This project was created as a full stack assignment project for learning
and demonstration purposes.
