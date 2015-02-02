var React = require('react');

var Time = require('./Time');
var Page = require('./components/Page');

var WelcomePage = React.createClass({
  render: function () {
    return (
      <Page activePage="welcome">
        Welcome! <Time />
      </Page>
    );
  }
});

module.exports = WelcomePage;
