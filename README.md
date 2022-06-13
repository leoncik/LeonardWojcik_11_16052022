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

### Scenario

Kasa is a fictional web app for renting an apartment.

### Coding guidelines

- The project must be bootstrapped with [Create React App](https://create-react-app.dev/).
- The project should not use any external libraries.
- There should be no error or warning in the console.

### Highlights

- In order to ensure the code quality, I have used [Husky](https://typicode.github.io/husky), [ESLint](https://eslint.org/), [lint-staged](https://www.npmjs.com/package/lint-staged) and [Prettier](https://prettier.io/) to lint and format the code.
- Because using external libraries were not allowed, the carousel was completely made from scratch. To make It performant and elegant (I wanted to add a sliding animation), I decided to display only 3 images at a time, and dynamically add the rest of them when the user clicks on the "next" or "previous" button. Here is a diagram showing how it works :

![CarouselStructure](https://user-images.githubusercontent.com/85347446/173227523-8be13385-547d-4b68-84e3-ac9163b29cda.png)

Note : If the carousel is provided with only one image, the controls are not displayed. If the carousel is provided with two images, It will be still working (the last image of the list will be duplicated in order to show the animation).

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

To run and watch the tests in the console, run : `yarn test`.
To watch the test coverage in the console, run : `yarn test -- --coverage`.

[⬆ Back to top](#kasa)
