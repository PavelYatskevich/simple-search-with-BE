# Simple search with http server

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development steps:

1. Created simple react app
2. Added simple http server to send request to external link, used next libraries: express, http, cors, request.
3. Added search and images components
4. Added request to local server with static query
5. Render Images from response
6. Added search input to search images
7. Added context to share data between components(can use props, but don't like it)
8. Extend search component to store input value in context with debounce
9. Update images component to use input value from context

## TODO:

1. add typescript
2. add tests
3. improve styles

## How to run

1. yarn install - install node modules
2. yarn server - run localserver
3. yarn start - start app

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn server`
Runs the local server at http://localhost:8080/

