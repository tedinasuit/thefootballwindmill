# The Football Windmill

The Football Windmill is a Vue.js application that provides an interactive and engaging way to follow the Eredivisie, the highest echelon of professional football in the Netherlands. The project is structured using Vue.js components and uses Axios for HTTP requests.

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

## Installation

To install and run this project, you will need Node.js and npm installed on your machine. After cloning the repository, navigate to the project directory and run the following commands:

```bash
npm install
npm run serve
