# Neftlix-GPT 

## Live Link on Google Cloud: [Netflix-GPT](https://netflix-gpt-frontend-4b3dgnveya-vp.a.run.app/login)

### Overview

Netflix GPT utilizes AI and modern web tech to improve movie browsing. It merges streaming features with OpenAI's GPT model for personalized recommendations. Key tasks include integrating Firebase for authentication, TMDB API for data fetching, and Docker for deployment. The app is responsive, leveraging React and TailwindCSS, and deployed on Google Cloud Run for scalability.

## Key Features:

### Authentication and User Management:
- Implemented secure user authentication using Firebase.
- Enabled seamless sign-up, sign-in, and sign-out functionalities.
- Integrated Redux store for efficient user state management.

### Browse and Search Functionality:
- Designed intuitive browsing interfaces with React and TailwindCSS.
- Utilized TMDB API to fetch comprehensive movie data.
- Implemented custom hooks for efficient data management.
- Developed a search page powered by OpenAI's GPT API for intelligent recommendations.
- Handled error cases for a seamless user experience.

### Responsive Design and Deployment:
- Ensured mobile responsiveness for a consistent user experience.
- Containerized frontend and backend components using Docker.
- Deployed on Google Cloud Run for scalability and reliability.

### Enhanced User Experience:
- Integrated advanced features like autoplay, mute, loop, and minimal branding for trailer videos.
- Implemented form validation and bug fixes for smooth interaction.
- Incorporated multi-language support for broader accessibility.

## Technologies Used:

- Frontend Technologies: React, TailwindCSS, Redux
- Database: Firebase Firestore 
- Backend: Firebase Authentication, Express.js for managing API keys securely
- APIs: TMDB API for movie data, OpenAI API for intelligent movie recommendations.
- Deployment: Docker containers deployed on Google Cloud Run.

## Requirements Clarification

### Features

1. (Home Page - Before sign in)

   - netflix.com

2. (Login/Sign In Page - On Sign in click)

   - netflix.com/login
   - Sign In Form
   - Without login - Redirect to sign in Page

3. (Browse Page - Only After Sign in Auth)

   - nextflix.com/browse
   - Without login - Redirect to sign in Page

   - Header

     - Initially transparent, on scrolling down black bg
     - Netflix Logo (Left)
     - Home, TV Shows, Movies, New & Popular, My List, Browser by language

   - Main Movie

     - Trailer auto-plays in background
     - Movie name, description,
     - Play and More Info Button on left
     - replay trailer, and TV-14 on right
     - Fade effect on bottom edge

   - Movie Categories Body
     - Category Rows (Multiple)
     - Category Name (hover : more white, arrow “Explore All” animation)
   - Movie Lists
     - Horizontal Carousel with Movie Card
     - on hover : expand card, plays trailer + info
     - 3 Types of Movie Card:
       - Normal Card,
       - Exclusive on Netflix (Top Left symbol)
       - Top 10 in category (Top Right symbol)
   - Infinite Scroll with new sub categories

4. (Netflix GPT Page - Only After Sign in Auth)
   - Search Bar
   - Provide Movie Suggestions

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
