module.exports = function(config) {
  if (!config) {
    throw new Error('The connie-firebase initializer takes a string');
  }

  var connie = require('connie');
  require('connie-firebase')(connie);
  
  return connie('firebase', config).initializer();
};
