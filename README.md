# Article Library App

* Personal article content library

## Quickstart

### Install required dependencies
```
bower install
npm install
```

### Watching

* Run a localhost server listen on port 9000:
`gulp serve`

### Building

* Concat all html, js and css files and minify them to the *dist* directory:
`gulp build`

### Testing

* Install the drivers:
`node_modules/gulp-protractor/node_modules/protractor/bin/webdriver-manager update`
* Run the server via terminal:
`gulp serve`
* Start a standalone webdriver instance (if you aren't using Chrome):
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
