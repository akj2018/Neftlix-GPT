# Neftlix-GPT

- [x] create-react-app
- [x] Configured TailwindCSS
- [x] Routing (Login, Browse, Home)
- [x] Designing Login Page
- [x] Header
- [x] Sign In / Sign Up Form
- [x] Footer
- [x] Form Validation
- [x] useRef Hook
- [x] Firebase Setup
- [x] Deploy on Firebase
- [x] Create a user account on Firebase
- [x] Perform user sign in and sign up with Firebase
- [x] Setup Redux Store with userSlice
- [x] Update userSlice with info on Sign In/Sign Up/Sign Out
- [x] Redirect to /browse on Successful Sign In/Sign Up
- [x] Implement Sign Out , Redirect to "/login" and update userSlice to null
- [x] Update display name after sign up and update userSlice state
- [x] Unsubsribed to onAuthStateChnaged callback
- [x] Add hardcoded string values to contants.js
- [x] BugFix : Redirect to "/login" if user not signed in, Redirect to "/browse" if user signed in and trying to go "/login"

- [x] Designing Browse Page (main container + secondary container)
- [x] Fetch API Key and API Read Access Token from [TMDB Movies API](https://developer.themoviedb.org/reference/intro/getting-started)
- [x] Get nowPlayingMovies data using TMDB nowPlayingMovies API
- [x] Converted nowPlayingMovies data into a custom hook
- [x] Create moviesSlice and update store with movies data
- [x] Fetch data for Trailer video and update store
- [x] Embedded Youtube Video link and make it autoplay, mute, loop, minimal branding
- [x] Build the Secondary Container (Movie Lists, Movie Cards)
- [x] Add CDN URL Link to fetch images
- [x] Designed Custom Hooks (useTopRatedMovies, usePopularMovies, useUpcomingMovies) and updated redux Store
- [x] Subscribe to store and rendered Movie Lists with Movie Cards and Title, TailwindCSS for UI

- [x] Access GPT Search Page via Link ("/gpt") on Browse Page Header
- [x] Create a seprate slice in store for gpt page
- [x] Netflix GPT Search Page with search bar
- [x] Abstracted hard-coded strings (page bg url) into constants.js
- [x] (BONUS) Build Multi-Lang Feature into GPT Page
- [x] Integrate GPT API to recommend movies based on user prompt.
- [x] Fetch the data using the openai package and api key and diplayed
- [x] Handled error cases for no results, invalid input, no input in GPT search bar
- [x] Modified GPT slice to contain data for fetched moviesList and moviesInfo
- [x] Bugfix issue : Allow openai to make calls in a browser (client-side) environment
- [x] Use .env to securely store the api keys (TMBD & Openai)
- [x] Memoization in custom hooks to avoid redundant network calls if store is initilaized
- [] Shimmer UI for gpt page search results
- [] Making app mobile responsive

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
