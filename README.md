# Kerei (綺麗) - A Modern Tarot Experience

Kerei is a beautifully simple, ad-free, and open-source web application for personal Tarot readings and introspection. Built with React and Firebase, it provides a clean, modern interface for exploring the 78 cards of the Tarot and logging personal readings.

**[Live Demo](https://your-kerei-project-url.web.app)** _(Replace with your deployed Firebase Hosting URL)_

![Kerei Application Screenshot](https://i.imgur.com/your-screenshot-url.png)
_(Suggestion: Take a nice screenshot of your app and replace the link above)_

## ✨ Features

* **Interactive Card Picking:** Pick a random card from a beautifully animated fan of 78 Tarot cards on the homepage.
* **Complete Card Library:** Browse the full 78-card deck in a responsive grid. Click any card to view its details in a sleek, glassmorphism overlay.
* **User Authentication:** Securely sign up or log in using Google or a traditional Email/Password account, powered by Firebase Authentication.
* **Personal Readings Log:** Logged-in users have their readings automatically saved to a personal, persistent log in Firestore, complete with timestamps.
* **Fully Responsive Design:** A seamless experience on desktop, tablet, and mobile devices, from the navbar to the card layouts.
* **Modern Animations:** Smooth page transitions and UI animations powered by Framer Motion.

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Routing:** React Router
* **Animation:** Framer Motion
* **Styling:** CSS
* **Backend & Database:** Firebase (Authentication, Firestore)
* **Icons:** React Icons

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/kerei-tarot.git](https://github.com/your-username/kerei-tarot.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd kerei-tarot
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Set up your Firebase Environment Variables:**
    * Create a file named `.env.local` in the root of your project.
    * Copy your Firebase configuration keys into it, like this:
        ```
        VITE_FIREBASE_API_KEY="AIzaSy..."
        VITE_FIREBASE_AUTH_DOMAIN="your-project-id.firebaseapp.com"
        VITE_FIREBASE_PROJECT_ID="your-project-id"
        VITE_FIREBASE_STORAGE_BUCKET="your-project-id.appspot.com"
        VITE_FIREBASE_MESSAGING_SENDER_ID="12345..."
        VITE_FIREBASE_APP_ID="1:12345...:web:..."
        ```
5.  **Run the development server:**
    ```sh
    npm run dev
    ```

## 👤 Author

**Zaratsu**
* GitHub: [@your-username](https://github.com/your-username)

This project's journey, from initial concept to debugging complex animations, was navigated with the assistance of Google's Gemini.