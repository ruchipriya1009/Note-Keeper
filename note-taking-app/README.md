# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

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




/* Button styles aligned to the right side */
.button-container {
  display: flex;
  justify-content: flex-end;
}

button {
 
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgb(198, 196, 196);
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: rgb(156, 154, 154);
}

/* Note list styles */
.note-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

/* Note styles */
.note {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

/* Pinned note styles */
.pinned {
  background-color: #ffeb3b;
}

.note h4 {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: bold;
}

.note p {
  margin: 0;
  font-size: 16px;
}

/* Styles for note buttons */
.note button {
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  border: none;
  border-radius: 4px;
}

.note button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Specific styles for the delete button to remove background */
.note .delete-button {
  border: 1px solid red;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
  border: none;
}

.note .delete-button:hover {
 
}












































/* Center the app content and give some padding */
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Style the form for adding new notes with flexbox */
form {
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  padding: 20px;
 
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
  transition: background 0.3s, box-shadow 0.3s;
}

form:hover {
  background: linear-gradient(145deg, #e0e0e0, #d0d0d0);
  box-shadow: inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff;
}

/* Input and textarea styles */
input, textarea {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
  transition: background 0.3s, box-shadow 0.3s;
}

/* Container for input and textarea to keep them together */
.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input:hover, textarea:hover{
  background: linear-gradient(145deg, #e0e0e0, #d0d0d0);
  box-shadow: inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

button {
 
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgb(198, 196, 196);
  color: gray;
  border: none;
  border-radius: 4px;
}
.note-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

/* Note styles */
.note {
  width: 150px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  border: 1px solid red;
}

.note h4 {
  border: 1px solid green;
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: bold;
}

.note p {
  border: 1px solid green;
  margin: 0;
  font-size: 16px;
}

.note button {
  
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  border: none;
  border-radius: 4px;
}


.note .delete-button {
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
  border: none;
}

.note .delete-button:hover {
  background-color: rgba(255, 0, 0, 0.1);
}
