var React = require('react');

var DateTimeFormatter = function () {};
DateTimeFormatter.prototype.format = function (date, timezone) {
  return date + ' :) ' + timezone;
};

var Time = React.createClass({
  render: function () {
    var formatter = new DateTimeFormatter();
    return (
      <div>
        {formatter.format(this.props.time, this.props.timeZone)}
      </div>
    );
  },
  formatTime: function () {

  }
});

module.exports = Time;
