# App

  - *public* - Compiled files
  - *dev* - contains scss, js and html templates

## Deploy
Install App Engine Python SDK and then run the following from within the root directory:

```sh
appcfg.py update .
```
Changes will be deployed to https://xxx

# Developer Workflow

## Prerequisites

## Download code

## Install Gulp & Dependencies
Install the [Java SE Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

Then run these commands
```
npm install -g gulp
npm install
```


### Setup CSSComb in Sublime
CSSComb allows us to enforce a strict CSS style guide. Install CSSComb package:

```
npm install csscomb -g
```

In Sublime, install the sublime-hooks package and add the following to your
Preferences => Settings => User:


```json
"on_pre_save_language": [{
    "command": "css_comb"
}]
```

Now whenever you save any SCSS file, it will be linted to Google's standards.


### Run server and develop
```
gulp
```

All development files (SCSS, JS, HTML) are in the dev folder. Once built, the compiled files will be stored in the ```public/static``` folder.

When gulp is run:
- SCSS files are compiled into one CSS (public/static/app.css)
- HTML files are copied across (public/static/)
- JS files are clang formatted
- Two JS files are compiled:
  - public/static/app.js - Concatenated JS file, not minified, easier for development
  - public/static/app.min.js - Minified JS file

Whenever changes are made to any files, the relevant task will run and the server will automatically update. By default, the local webserver is at http://localhost:8000/
