# LeetCode Clone

## Overview

This project is a LeetCode clone built using ReactJS, Chakra UI, Lottie, Tailwind, and Supabase for authentication. It provides a platform for users to practice solving LeetCode questions, track their progress, and access solution resources.

## Features

- **Authentication:**
  - Users can sign up if visiting for the first time.
  - Returning users can log in.
  - Login button is disabled until all required fields are filled.
  - Password mismatch triggers a Toastify message.

- **Home Section:**
  - After successful login, users are directed to the home section.
  - LeetCode questions are displayed with status icons (cross for unsolved, tick for solved).
  - Clicking on a question redirects to the question page.

- **Question Page:**
  - Detailed information about each question, including type and difficulty level.
  - YouTube icon opens a modal with a solution video.
  - Clicking on the question opens a slider with a left component (question) and a right component (code editor).
  - Timer clock starts on click, measuring the time taken to solve a question.

- **Profile Component:**
  - Uses LeetCode API to fetch user information.
  - Displays the number of questions solved and contest details.

## Technologies Used

- ReactJS
- Chakra UI
- Lottie
- Tailwind CSS
- Supabase (for authentication)
- LeetCode API

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up Supabase for authentication.
4. Start the application using `npm start`.

## Usage

- Visit the home section after login to access LeetCode questions.
- Click on a question to view detailed information and start solving.
- Use the code editor and timer to track your progress.
- Check your profile for LeetCode statistics.

## Acknowledgments

- This project was inspired by the LeetCode platform.
- Special thanks to the open-source community for the libraries and APIs used.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to add or modify sections based on additional features, technologies, or acknowledgments you want to include. Make sure to replace placeholder names with actual details specific to your project.
