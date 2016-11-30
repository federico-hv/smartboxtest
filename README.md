SmartBox Test
=============

*Frontend dev technical interview project.*


This mini application was built using ES6, [React](https://facebook.github.io/react/) as UI library for development, [Preact](https://preactjs.com/) to minimize script size in production and [Webpack](https://webpack.github.io/) as module bundler.  

Other well known dependencies used were [Express](http://expressjs.com/) as web server, [Babel](https://babeljs.io/) to transpile ES6 code to ES5 through webpack and [Axios](https://github.com/mzabriskie/axios) as http client due to its ease of use with promises.

To create the parallax scroll effect I used [react-parallax](https://github.com/RRutsche/react-parallax) which may have some issues on mobile browsers.



## Components

The app was not big enough to use a flux implementation for state management so I decided to leave all the logic inside a class based component and separate the rest of the pieces into stateless functional components.

As the document sent by the company stated all the sections needed, the components used were the following:

* App - Main Container
* SectionOne - Shows the logo and a description.
* SectionTwo - Implements the modal and ajax logic.
* SectionThree - Shows the background picture.
* Footer - Is the smallest and contains the white logo.



## Installation


Clone the repo

```sh
$ git clone https://github.com/federicous/smartboxtest.git
```

Install dependencies

```sh
$ cd smartboxtest
$ npm install
```
This will install every package listed in package.json file


Run development:

```sh
$ npm run dev
```

Webpack's configuration file and express server will recognize the dev environment through the `process.env.npm_lifecycle_event` variable and the files will be served from memory.


Run Production:

```sh
$ npm start
```

This will run the `build` script in which webpack will create the bundle and the assets in an optimized way and also will start the node process.


Also if you want to lint your code:

```sh
$ npm run lint
```


If you find any issues while loading image files with webpack you might need to install libpng.

On mac:

```sh
$ brew install libpng
```
