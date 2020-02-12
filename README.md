## Steps followed

- `create-react-app giftgiver`
- `cd giftgiver`
- `npm install enzyme jest-cli --save-dev`
- `npm install react-bootstrap --save`
- Delete `src` folder
- Create new `src` folder
- Create `src/components/App.test.js`
- `npm run test`
- `shallow` - Method from enzyme for shallow rendering a component
- `it` -  Global function from Jest to create a unit test
- `expect` - Global function from Jest to do checks
- `.toMatchSnapshot()`
- `npm i enzyme-adapter-react-16 --save-dev`
- `app.state()` => get current state of the app from enzyme shallow component object
- `app.find()` => to find an element by their name or class name, just like jQuery syntax
- `app.simulate()`- Simulate a click of a button or some event. equivalent of trigget method in jQuery.