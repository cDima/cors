# CORS Proxy built for Node.JS, express, on heroku

Lots of sites don't set CORS headers on their websites which blocks javascript access to their images.
This proxy just returns the same [heroku](https://colorlovers.herokuapp.com);

For example: 
http://freecors.herokuapp.com/?path=http://quotesonslides.com/images/Innovation.jpg

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:cdima/colourlovers.git 
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

Usage:

http://localhost:5000/?path=http://quotesonslides.com/images/Innovation.jpg

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

# Author 

Dmitry Sadakov