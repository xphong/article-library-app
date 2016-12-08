# Article Library App - [https://xphong.github.io/article-library-app](https://xphong.github.io/article-library-app)

* Personal article content library
* Requires CORS bypass, ex: [Allow-Control-Allow-Origin: * Chrome Extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)

## Quickstart

### Install required dependencies
```
bower install
npm install
```

### Watching (Dev)

* Run a localhost server listen on port 9000:
`gulp serve`

### Building (Prod)

* Concat all html, js and css files and minify them to the *dist* directory:
`gulp build`

### Testing

* Install the drivers:
`node_modules/gulp-protractor/node_modules/protractor/bin/webdriver-manager update`
* Run the server via terminal:
`gulp serve`
* Start a standalone webdriver instance:
`gulp webdriver`
* Run the e2e tests:
`gulp e2e`
* For unit tests:
`npm test`

## Technologies

* AngularJS 1.5.8
* Semantic UI
* Gulp
* Mocha/Chai/Protractor
