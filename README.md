# Que rico restaurant booking App

_A restaurant booking app with its own API using Nodejs and Express & React with TypeScript in client side_

---

Examples of functionality of the Restaurant is:

- Book a table and possibility to choose by date, amount of guests and time. 
- Mail are sent to the customer when reservations are done, cancelled or edited. 
- Only admin roles can create, edit and delete reservations.
- Sort the reservations by date for admin view.
- Reservations is reflected in MongoDB.

<img width="521" alt="Picture of Decorative products" src="https://user-images.githubusercontent.com/69104443/132841309-dd564c6d-4c75-48a8-a8f7-ff78859baeca.jpg" />
<img width="521" alt="Picture of Decorative products" src="https://user-images.githubusercontent.com/69104443/132842432-5b3bdefe-eed5-402c-8e13-938a815b25c4.jpg" />
<img width="521" alt="Picture of Decorative products" src="https://user-images.githubusercontent.com/69104443/132842702-08170680-3811-4434-933c-8e325d288ee0.jpg" />


## Dependencies

- mongoose
- express
- dotenv
- nodemailer
- animate.css
- axios
- moment
- react animation on scroll
- react loader spinner
- react calendar
- react modal
- styled components
- react router dom

## Usage .env

Create a .env file in the root directory of your project. Then add environment-specific variables on new lines in the form of `NAME=VALUE`. Replace {value} with your own data. For example:

```
MONGODB_URI= {value}
PORT= {value}
ADMIN_EMAIL= {value}
PASS = {value}

```

**This app use the database MongoDB, to be able to setup your own database, please go to MongoDB Atlas to create an account.**



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
