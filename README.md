# The Football Windmill

The Football Windmill is a Vue.js application that provides information about various football leagues. It uses Vue Router for routing and Axios for making HTTP requests.

## Features

- Display of live scores
- Information about Eredivisie league (fixtures, lineup, news, table)
- Home view and about view


## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm run serve`

## Project Structure

- `public`: Contains the static files like favicon and index.html.
- `src`: Contains the main source code for the application.
  - `assets`: Contains the image assets used in the application.
  - `components`: Contains the Vue.js components used in the application.
  - `router`: Contains the Vue Router configuration.
  - `views`: Contains the different views of the application.
- `vue.config.js`: Contains the configuration for Vue CLI.

## Components

The application is composed of several Vue.js components:

- **App.vue**: This is the main component that serves as the root of the application.

- **ButtonGrid.vue**: This component is responsible for rendering a grid of buttons.

- **EredivisieCanvas.vue**: This component is used to display the Eredivisie logo.

- **EredivisieFixtures.vue**: This component is used to display the fixtures of the Eredivisie league.

- **EredivisieLineup.vue**: This component is used to display the lineup of the Eredivisie league.

- **EredivisieNews.vue**: This component fetches and displays the latest news related to the Eredivisie league. It uses Axios to fetch data from an RSS feed and parses it using the 'rss-parser' library.

- **EredivisieTable.vue**: This component is used to display the table of the Eredivisie league.

- **HelloWorld.vue**: This is a sample component that displays a "Hello World" message.

- **HomeButton.vue**: This component displays a home button with a windmill image that redirects users to the home page.

- **ThreeButtons.vue**: This component displays three buttons labeled "Table", "Fixtures", and "News". Clicking on these buttons will change the active component to EredivisieTable, EredivisieFixtures, and EredivisieNews respectively.

- **LiveScores.vue**: This component extracts match data from an API (football-data.org). Cuurently not working due to a CORS error.

## Dependencies

- `axios`: Promise based HTTP client for the browser and node.js
- `core-js`: Standard library
- `https-browserify`: Allows the use of HTTPS in the browser
- `register-service-worker`: A script to simplify service worker registration
- `rss-parser`: A small library for turning RSS XML feeds into JavaScript objects
- `stream-http`: A streaming HTTP client for browsers
- `timers-browserify`: Browserify's timers module
- `url`: The core 'url' packaged standalone for use with Browserify
- `vue`: Progressive JavaScript Framework
- `vue-router`: Official router for Vue.js

## Development Dependencies

- `@babel/core`: Babel compiler core
- `@babel/eslint-parser`: ESLint parser that allows ESLint to lint Babel-transpiled code
- `@vue/cli-plugin-babel`: Babel plugin for Vue CLI
- `@vue/cli-plugin-eslint`: ESLint plugin for Vue CLI
- `@vue/cli-plugin-pwa`: PWA plugin for Vue CLI
- `@vue/cli-plugin-router`: Vue Router plugin for Vue CLI
- `@vue/cli-service`: Local service for Vue CLI projects
- `eslint`: Tool for identifying and reporting on patterns in JavaScript
- `eslint-plugin-vue`: ESLint plugin for Vue.js applications

## Scripts

- `serve`: Starts the development server
- `build`: Builds the application for production
- `lint`: Lints and fixes files

