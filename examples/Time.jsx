var React = require('react');

var moment = require('moment-timezone');

var Time = React.createClass({
  render: function () {
    var jun = moment("2014-06-01T12:00:00Z");

    return jun.tz('America/Los_Angeles').format('ha z');
  }
});

module.exports = Time;
