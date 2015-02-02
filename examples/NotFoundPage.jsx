var React = require('react');

var Page = require('./components/Page');

var NotFoundPage = React.createClass({
  render: function () {
    return (
      <Page>
        Not Found!
      </Page>
    );
  }
});

module.exports = NotFoundPage;
