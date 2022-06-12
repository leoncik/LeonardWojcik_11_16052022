# Kasa

Project carried out as part of the Front-End Web Development Career Path of OpenClassrooms.

## Table of content

- [Description](#description)
  - [Coding guidelines](#coding-guidelines)
  - [Highlights](#highlights)
- [Live demo](#live-demo)
- [Installation](#installation)
- [How to use](#how-to-use)
  - [Visualize and edit the project](#visualize-and-edit-the-project)
  - [Use the tests](#use-the-tests)

## Description

### Coding guidelines

- The project must be bootstrapped with [Create React App](https://create-react-app.dev/)
- The project should not use any external libraries.
- There should be no error or warning in the console.

### Highlights

- In order to ensure the code quality, I have used [Husky](https://typicode.github.io/husky), [ESLint](https://eslint.org/), [lint-staged](https://www.npmjs.com/package/lint-staged) and [Prettier](https://prettier.io/) to lint and format the code.
- Because using external libraries were not allowed, the carousel was completely made from scratch. To make It performant and elegant (I wanted to add a sliding animation), I decided to display only 3 images at a time, and dynamically add the rest of them when the user clicks on the "next" or "previous" button. Here is a diagram showing how it works :
![CarouselStructure](https://user-images.githubusercontent.com/85347446/173227523-8be13385-547d-4b68-84e3-ac9163b29cda.png)


## Live demo

Use this link to try the project : https://leoncik.github.io/LeonardWojcik_11_16052022/#/

## Installation

1. Clone this repository or fork It.

```sh
git clone https://github.com/leoncik/LeonardWojcik_6_24112021
```

2. Make sure that [Node.js](https://nodejs.org/en/) is installed on your machine and that you have a package manager (like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)). Then install the dependencies.

```sh
yarn install
```

3. You are ready to do !

## How to use

### Visualize and edit the project

Run `yarn start` to launch a dev server and work on the project.

You can learn more about the available scripts in the official Creatte React App documentation : https://create-react-app.dev/docs/available-scripts/.

### Use the tests

To run annd watch the tests in the console, run : `yarn test`.
To watch the test coverage in the console, run : `yarn test -- --coverage`.

[⬆ Back to top](#kasa)

--- Original README content ---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
