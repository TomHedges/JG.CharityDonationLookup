# JG income/donation report - for JustGiving front-end developer interview

Very basic React implementation, avoiding create-react-app to reduce overhead and provide a learning experience.
Built in response to [Recruitment Test - Charity Donations](https://github.com/JustGiving/recruitment-test-donations)

Key sources of info:

- [Creating a React App From Scratch](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
- [Tutorial: How to set up React, webpack, and Babel 7 from scratch (2019)](https://www.valentinog.com/blog/react-webpack-babel/)

## Getting Started:

_This project created in a Windows 10, VSCode 1.30 environment_

1. Clone this repo
2. Install dependencies with 'npm install'
3. Run in dev mode with 'npm start'

## Key details:

### Dependecies:

- React core framework
- Babel
- Webpack
- React Hot Loader - to provide immediate refresh on file update
- Axios - performing HTTP requests
- Webfontloader - Prevent Google Font Roboto from triggering Google Page Speed ("Render Blocking CSS")

### Dev Dependencies:

- Jest - JavaScript test runner
- Jest SVG Transformer - handles SVG import for local images in tests
- Enzyme - additional React test functionality
- URL Loader - converting small images into Base64 for faster loading
- File Loader - serving larger images as separate files

### Other info:

- Open "test/exampleContent.html" in your browser to see a mocked-up page used to refine the visual design and component structure
