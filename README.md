# Pendings App

## Key Features

- [x] Responsive and modern UI.
- [x] Add pendings.
- [x] Finish pendings.
- [x] Remove pendings.
- [x] Preserve data by saving to local storage.
- [x] Display real-time count of active and finished pendings.
- [x] Only active pendings are displayed in the dashboard.
- [x] Active pendings can be dragged to anywhere in the dashboard.
- [x] Active pendings are sorted by due date.
- [x] Active pendings that have a due date of today or tomorrow have a red background to indicate urgency.
- [x] Description validations to avoid duplicates.
- [x] Form validation to avoid empty values.

## Tech Stack

- React
- Redux: I decided to use Redux because it provides a scalable and predictable way to manage state, making the app easier to debug, share state between components and improve performance because there are no unwanted re-renders.
- Material UI: I decided to use Material UI because it allows to quickly build a consistent, responsive, and accessible user interface, while providing a high degree of customization and flexibility.
- Styled-components: I decided to use styled-components because it helps a lot to easily customize the styling of Material UI components without having to write custom CSS classes while promoting modularity, scalability, and performance.
- react-draggable: I decided to use react-draggable because it provides a simple and flexible solution for implementing draggable components. It is very easy to use and customize. It also has cross-browser compatibility and is a lightweight library.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies required to run the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
