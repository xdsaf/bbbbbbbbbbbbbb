var React = require('react');
var Router = require('react-router-component');

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var WelcomePage = require('./WelcomePage');
var ComponentPage = require('./ComponentPage');
var NotFoundPage = require('./NotFoundPage');

var App = React.createClass({
  render: function () {
    return (
        <Locations>
          <Location path="/" handler={WelcomePage} />
          <Location path="/component" handler={ComponentPage} />
          <NotFound handler={NotFoundPage} />
        </Locations>
      );
  }
});


window.addEventListener('DOMContentLoaded', function () {
  React.render(<App />, document.getElementById('app'));
});
