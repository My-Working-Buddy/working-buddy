# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation guide

Use node v18 or higher

## Running storybook

```
npm run storybook
```

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

## `User login and signup with auth0`

The sequence diagram will illustrate the interaction between the user and the Auth0 React SDK in handling user authentication requests to login in, sign up and logout from the react application.

```mermaid

sequenceDiagram
    box Login
    participant User
    end

    box Web App
    participant MWB
    end

    box Auth0
    participant AU as Authentication
    end

User->>MWB: Click login button
MWB->>AU: send login request
AU->>User: Show universal login prompt
user->>AU: User details input
AU->>MWB: Authorization code
MWB->>AU: Authenticate user ID
```

## `Add JSON server api documentation`

The compatible API server runs on `http://localhost:6060` by default. As such, to connect your React application with that API server, create a `.env` file under the root project directory and populate it with the following environment variables:

```bash
REACT_APP_API_SERVER_URL=http://localhost:6060
```
On package.json, set up the `api` on scripts to run with the following command:

```
json-server --watch db.json --port 6060
```

Create a db.json file to store and define the JSON data in key value pairs.

Next, execute the following command to run the JSON server API:

```bash
npm run api
```


