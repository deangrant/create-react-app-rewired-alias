/**
 * Configures aliases for Webpack and Jest in a React application.
 *
 * This configuration uses 'react-app-alias' to create consistent path aliases
 * for both Webpack and Jest. This ensures that both the build process
 * (handled by Webpack) and the testing process (handled by Jest) correctly
 * resolve the same path aliases.
 * 
 * 'options' can include specific configurations for aliasing, but it is empty
 * in this case, which means default configurations are used.
 */

// Importing the aliasWebpack and aliasJest functions from react-app-alias.
const {aliasWebpack, aliasJest} = require('react-app-alias')

// Options for configuring the aliases. It's an empty object here,
// meaning default settings are used. You can customize it as needed.
const options = {}

// Configuring Webpack aliases. This exports a modified configuration
// for Webpack using the provided options.
module.exports = aliasWebpack(options)

// Configuring Jest aliases. This adds a 'jest' property to the exports,
// containing the modified Jest configuration using the provided options.
module.exports.jest = aliasJest(options)
