# Weather App Server

This is a Node.js server for a weather app that uses the Express.js web framework and the weatherstack API to retrieve weather information for a given location.

## Prerequisites

* Node.js and npm (which is included with Node.js)
* An API key from weatherstack

## Installation and Setup
1. Clone this repository and navigate to the project directory:

```bash
git clone https://github.com/your-username/weather-app-server.git
cd weather-app-server
```
2. Install the dependencies:
```bash
npm install
```
3. Create a file called .env in the root directory of the project, and set the WEATHERSTACK_API_KEY variable to your weatherstack API key:

```bash
WEATHERSTACK_API_KEY=your-api-key
```
4.Start the server:
```bash
npm start
```
The server will start listening for requests on port 3000.

## Usage

```bash
The server has the following routes:

'/': Renders the home page.
'/about': Renders the about page.
'/help': Renders the help page.
'/weather': Accepts an address query parameter and returns weather information for that location.
'/products': Accepts a search query parameter and returns a list of products.
```

## Error Handling

The server has the following error-handling routes:

* '/help': Renders a 404 page for any non-existent help articles.
* *: Renders a 404 page for all other non-existent routes or resources.



## Built With

* Express.js - Web framework for Node.js
* weatherstack API - API for retrieving weather information
* handlebars - Templating engine for rendering views

