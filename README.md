# Biscuit Machine

[![codecov](https://codecov.io/gh/dimitarnestorov/biscuit-machine/branch/master/graph/badge.svg)](https://codecov.io/gh/dimitarnestorov/biscuit-machine)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configuration

### `.env` file

Most configuration is in the `.env` file located in the root of the repository. When changing this file Jest and the development server must be restarted for changes to take effect.

-   `REACT_APP_MAX_DOUGH` - how much dough can the extruder have
-   `REACT_APP_INITIAL_DOUGH` - how much dough does the extruder have on page load
-   `REACT_APP_COOKIE_COST` - how much dough does it require to make one cookie
-   `REACT_APP_MINIMUM_OVEN_TEMPERATURE` - how much is the minimum temperature (room temperature)
-   `REACT_APP_GOOD_BAKE_TEMPERATURE` - what is the minimum temperature that the cookies should begin baking at
-   `REACT_APP_BURNING_BAKE_TEMPERATURE` - what is the temperature at which cookies are going to start burning
-   `REACT_APP_BAKE_RATE` - the rate of which the cookies are baking per tick
-   `REACT_APP_OVERBAKE_RATE` - how badly the cookies are going to burn per tick
-   `REACT_APP_OVEN_TEMPERATURE_CHANGE_AFTER_TICK` - how much does the temeperature in the oven change per tick
-   `REACT_APP_MINIMUM_GOOD_BAKED_RATE` - at what rate a cookie is considered well cooked
-   `REACT_APP_MAXIMUM_GOOD_BAKED_RATE` - at what rate a cookie is considered burnt

### `src/BiscuitMachine/config.module.scss` file

Configuration that is shared between JavaScript and other `scss` files is located here:

-   `$tickMilliseconds` - in how much time should the main `setInterval` callback fire
-   `$movingMilliseconds` - how many milliseconds does the conveyor belt move
-   `$pausedMilliseconds` - how many milliseconds does the conveyor pause for

## Future ideas

-   [ ] Detect bad cookies and have a mechanism where they’re sent in the trash rather than down the slide
-   [ ] Expose read only machine state for debug purposes (something like "Stats for nerds" on YouTube)
-   [ ] Different cookie recipes (takes less time to cook, no stamping, etc.)
-   [ ] Cookie recipes which start a fire if over cooked, fire detectors, sprinklers
-   [ ] Flower extruder so that stamper doesn’t stick
-   [ ] Changing settings (how fast cookies bake, when they’re considered good, etc.) and storing them in local storage
-   [ ] Restart button which resets all the state

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
