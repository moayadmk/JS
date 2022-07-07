// This file isn't transpiled, so must use CommonJS and ES5

// Redister babel to transpile before tests run.
require('@babel/register')();

// Disable wepback features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
