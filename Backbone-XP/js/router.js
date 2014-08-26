(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'js/view'], function(Backbone, ViewQualquer) {
    var router;
    return router = (function(_super) {
      __extends(router, _super);

      function router() {
        return router.__super__.constructor.apply(this, arguments);
      }

      router.prototype.initialize = function() {
        return Backbone.history.start();
      };

      router.prototype.routes = {
        "": "primeiraView"
      };

      router.prototype.primeiraView = function() {
        var view;
        return view = new ViewQualquer({
          el: $("#container")
        });
      };

      return router;

    })(Backbone.Router);
  });

}).call(this);
