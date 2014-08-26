(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["backbone"], function(Backbone) {
    var ViewQualquer;
    return ViewQualquer = (function(_super) {
      __extends(ViewQualquer, _super);

      function ViewQualquer() {
        return ViewQualquer.__super__.constructor.apply(this, arguments);
      }

      ViewQualquer.prototype.initialize = function(options) {
        this.el = options.el;
        return this.render();
      };

      ViewQualquer.prototype.events = {
        "click #r2": "chamaOr2"
      };

      ViewQualquer.prototype.chamaOr2 = function() {
        return alert("r2z");
      };

      ViewQualquer.prototype.render = function() {
        return this.$el.html("<button id='r2'>Beleza</button>");
      };

      return ViewQualquer;

    })(Backbone.View);
  });

}).call(this);
