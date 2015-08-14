# flux-playground
Playground for working with flux

## Getting started

To get started run:
```
npm install
bower install
```

## Running
To create the client-side bundle using browserify run: 
```
npm run watch
```
This will use watchify to watch client/app.js for changes.  Any new changes will rebuild client/bundle.js for you so you can just refresh!


To start the node server run:
```
npm start
```
On windows you may have to run it as:
```
set NODE_PATH=./ & node index.js
```

This will start the node server and allow you to access the site on http://localhost:8080

