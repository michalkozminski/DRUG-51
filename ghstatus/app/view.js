define(function(require, exports, module) {
  var Backbone = require("backbone");
  var $ = require("jquery");

  module.exports = Backbone.View.extend({
    initialize: function(){
      this.model.set("inne", "foo bar");
    },
    render: function(){
      this.$el.html("Status: "+ this.model.get("status"));
    }
  });
});
