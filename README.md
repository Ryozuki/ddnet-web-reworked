# ddnet-web-reworked
Reworked ddnet web using nodejs, Express and pugjs (jade)

## How-to

Go to the ddnet-web directory.

Run `npm install`
Then `npm start` to start a server on localhost:3000

## Using a production process manager (pm2)
- Install pm2 globaly, `npm install pm2 -g`
- Update it `pm2 update`
- Run the process (run from ddnet-web) `pm2 start bin/www --watch` 
- More info at this [website](https://github.com/Unitech/pm2)

Note: --watch will watch for changes and update the page.

