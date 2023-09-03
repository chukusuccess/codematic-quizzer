# Codematic Quizzer Web Application

Codematic Quizzer is a simple quiz web app built with trivia API.

## Type of App

Progressive Web App (PWA)

## Development Stack:

React.js, JavaScript, TailwindCSS, Framer motion.

- **React.js:** For frontend Functional Components.
- **JavaScript:** For Logic.
- **TailwindCSS:** For styling.
- **Framer motion:** For UI components animation.
- **Jest:** For Testing.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). and uses Node Package Manager version 20.

NOTE: if you use Yarn or any other package manager, delete the package-lock.json file before you proceed with running scripts. Run the corresponding commands as per your own package manager.

## Getting started / Available Scripts

```bash
git clone https://github.com/chukusuccess/codematic-quizzer
```

Clone the project with the above script

```bash
cd codematic-quizzer
```

cd into the project directory with the above script and run:

### `npm install`

Installs all dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm test`

Launches the Jest test runner in the watch mode. This means changes made in test files (all files in **test** folder) will trigger a test re-run\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. Also look at - [Jest](https://jestjs.io/docs/getting-started) - Documentation.

### `npm run build`

Builds the app for production to the `build` folder.

## Key Features of App

- **Select Quiz Category:** All users can select a quiz category, difficulty level(easy/hard/medium) and number of questions (max 10).
- **Score Calculation:** All users can be able to see their score at the end of each quiz.
- **Restart Quiz:** All users can be able to restart a quiz at any time.
- **PWA:** Add Codematic Quizzer to phone app screen.

## Code Style and Project structure

- **CircleCI:** CircleCI is configured in this project

```bash
.circleci/config.yml
```

This file defines the CI/CD workflow.

- **API and Services:** Public Trivia API [https://opentdb.com/](https://opentdb.com/).

```bash
src/services/api.js
```

1. Axios API instance is initialized in the api.js file using axios.create() and the baseUrl for Trivia public API is set there.

```bash
src/services/category.service.js
```

2. CategoryService class is created in the category.service.js file. This class holds all methods relevant to getting quiz category.

- **Utils:**

```bash
src/utilities/arrays.utils.js
```

1. Array utility functions are written in this arrays.utils.js file. JSDoc comments have been added to them.

- **Pages:**

```bash
src/pages
```

1. All pages are in pages folder: Categories.jsx, Home.jsx, Quiz.jsx are the main pages while Loading.jsx and Error.jsx only render during an API call (Loading.jsx) and After an API call if there is an error (Error.jsx).

- **Splash Screens:**

```bash
src/components/Splash-Animation
```

1. contains the splash / onboarding screens. The very first screens in the Quiz App

- **Reusable Components:**

```bash
src/components
```

1. contains other re-usable components

- **Test files:**

```bash
src/__test__
```

1. contains all test files

## Deployment

App is live! deployed on: Vercel view here: [https://codematic-quizzer.vercel.app/](https://codematic-quizzer.vercel.app/)
