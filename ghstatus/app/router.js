define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var $ = require("jquery");
  var Status = require("status");
  var View = require("view");

  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      console.log("Welcome to your / route.");
      var status = new Status();
      status.fetch({
        success: function(){
          var view = new View({
            el: $("#main"),
            model: status
          });
          view.render();
        }
      });
      console.log(status);
    }
  });
});
