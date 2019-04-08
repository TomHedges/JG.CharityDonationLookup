# JG income/donation report - for JustGiving front-end developer interview

## Summary:

Very basic React implementation, avoiding create-react-app to reduce overhead and provide a learning experience.
Built in response to [Recruitment Test - Charity Donations](https://github.com/JustGiving/recruitment-test-donations)

### Concept:

- Provide a simple search by charity ID, with AJAX-populated results list (will only contain a single result, which may be an error message)
- When user selects charity from search results, display the charity's basic information, and trigger the asynchronous loading of recent donations (display a loading spinner in the meantime)
- Once donations search returns, display formatted donations list, or a message that no results were returned
- Automatically re-run the search for donations every 10 seconds, and add to list if additional donations are found.
- Allow user to search for a new charity by ID - and only update charity details/donations list when a new charity is selected.
- Visual style should be broadly inline with JustGiving brand
- Should be supported by modern/evergreen browsers

### Resources which have been helpful during developoment:

- [Creating a React App From Scratch](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
- [Tutorial: How to set up React, webpack, and Babel 7 from scratch (2019)](https://www.valentinog.com/blog/react-webpack-babel/)
- [Jest official documentation](https://jestjs.io/docs/en/getting-started.html)
- [Enzyme official documentation](https://airbnb.io/enzyme/)
- A lot of [StackOverflow](https://stackoverflow.com/)

## Getting Started:

_This project created in a Windows 10, VSCode 1.33 environment_

1. Clone this repo
2. Create a [JustGiving Developer](https://developer.justgiving.com/) account to obtain an `appId`
3. Rename 'src/constants/api_key.change_to_just_js' to 'src/constants/api_key.js' (change only file extension)
4. In the renamed file, replace `YOUR_JG_API_KEY` with the `appId` from step 2. Save and close file.
5. Install dependencies with 'npm install'
6. Run in dev mode with 'npm start' - go to [http://localhost:4000](http://localhost:4000)
7. Run tests (Jest/Enzyme) with 'npm test'
   - Note: Some tests currently return the message: 'Warning: Each child in a list should have a unique "key" prop.' However, this error appears out of context (related to Components containing no Lists or Arrays), and is not displayed when used in-browser. Potentially a bug in the testing framework.

## Key details:

### Dependecies:

- React core framework
- Babel - transpiler
- Webpack - module bundler
- React Hot Loader - to provide immediate refresh on file update.
- Axios - performing HTTP requests
- Webfontloader - Prevent Google Font Roboto from triggering Google Page Speed ("Render Blocking CSS")
- Babel Polyfill - to enable Axios to function in IE11 and earlier, and support async/await tests
- Prop Types - Check for the presence of required props to support cross-component development

### Dev Dependencies:

- Jest - JavaScript test runner
- Jest SVG Transformer - handles SVG import for local images in tests
- Enzyme - React-specific testing functionality
- URL Loader - converting small images into Base64 for faster loading
- File Loader - serving larger images as separate files

### Other info:

- Open "test/exampleContent.html" in your browser to see a mocked-up page used to refine the visual design and component structure
