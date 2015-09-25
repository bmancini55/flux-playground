
let Backbone = require('backbone');
let template = require('./restaurant-listitem.jade');

let View = Backbone.View.extend({

  initialize: function({ model }) {
    this.props = {};
    this.setProps(model);
  },

  setProps: function(newProps) {
    this.props = Object.assign(
      this.props,
      newProps
    );
    this.render();
  },

  render: function() {
    let html = template(this.props);
    this.$el.append(html);
    return this;
  }

});

module.exports = View;
