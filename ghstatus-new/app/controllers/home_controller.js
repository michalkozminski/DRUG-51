module.exports = {
  index: function(params, callback) {
    var spec = {
      model: {model: 'Status', params: params},
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  }
};
