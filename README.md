# react-express-boilerplate
A minimal React boilerplate with Express server. Includes Jest testing, PostCSS and bundling with Parcel

This contains a collection of useful file setup I've been using so far to get started with a simple, React app served with an Express back-end, whilst also providing for testing and CSS processing.  


## Instructions

#### Install locally: 

```
git clone https://github.com/vlbee/react-express-boilerplate.git
npm i 
```

#### Available scripts: 

Build the React app:
`npm run build` 

To run locally you will need to run the server and client concurrently in separate terminal windows with these two scripts: 

```
npm run start:server
npm run start:client
```

Testing:
```
npm test
npm run test:watch
```

## Folder Structure

```
react-express-boilerplate
├── README.md
├── client
│   ├── __mocks__
│   │   ├── fileMock.js
│   │   └── styleMock.js
│   └── src
│       ├── assets
│       │   └── favicon.ico
│       ├── components
│       │   ├── app.js
│       │   ├── button
│       │   │   ├── button.css
│       │   │   ├── button.js
│       │   │   └── button.test.js
│       │   └── errorBoundary.js
│       ├── index.html
│       ├── index.js
│       ├── styles
│       │   ├── _normalize.css
│       │   └── styles.css
│       └── utils
│           └── fetch.js
├── package-lock.json
├── package.json
└── server
    └── src
        └── index.js
```

### Notes

#### Bundling: 

Bundling is being handled by Parcel. Build files will be outputed into `.cache` and `dist` folders.
CSS and JS file will automatically be minified with the 'npm run build' script. 

Minifiers are not used with hot module replacement when running the `npm start` script.


#### Testing:

`__mocks__` - this folder contains mock files to be ignored when running Jest tests. 

Package.json config: 
```
 "jest": {
    "moduleNameMapper": {
      "\\.(css|less|styl|sass|scss)$": "<rootDir>/client/__mocks__/styleMock.js",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/client/__mocks__/fileMock.js"
    }
 ```
    
 
#### CSS:
 
 Includes PostCSS set up with Autoprefixer and Normalize.css. 
 
 
