var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
  url: 'https://status.github.com/api/status.json'
});
