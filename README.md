# Lightning-Interview-Question

## lightning-interview

The following repo is designed as a coding/interview challenge specifically for future/current Lightning JS developers. It uses a premade starter lightning application with some aspects missing from the final result. The goal of the excersize will be to address the missing items.

The files that require modification are all within the `src` directory. Specifically `SearchPage.js`, `Tile.js` and `api.js` require some modification in order to achieve the final result.

Knowledge of the lightning framework is not required but documentation for the framework can be found here: [Lightning Render Engine](https://rdkcentral.github.io/Lightning/docs/renderEngine/overview) for reference.

#### Running and developing the App

1. Install the NPM dependencies by running `npm install`

2. Run the app locally by using `lng dev` or `npm run start` to start the watcher and run a local webserver

3. Open `http://127.0.0.1:8080/` in a browser window, refresh page upon each new change

---

## Challenges to solve

1. Interpret keyboard entry - see `SearchPage.js` Challenge 1 in `_handleKey` method
2. Use query string to search an api - see `api/api.js` Challenge 2
3. Populate the two provided rows with 5 Tiles each - see `SearchPage.js` Challenge 3 `populateResults` method
4. Modify the `Tile.js` file to allow changes to the focused tile's styling - see `Tile.js` Challenge 4a & 4b comments

## Success looks like this:

![](/static/images/lightning-interview-success.gif)
