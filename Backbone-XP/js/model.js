(function() {
  var model;

  model = (function() {
    function model() {}

    model.prototype.foo = function() {
      return console.log("hello guys");
    };

    return model;

  })();

}).call(this);
