var React = require('react');

var Page = require('./components/Page');

var ComponentPage = React.createClass({
  render: function () {
    return (
      <Page activePage="component">
        Popovers
      </Page>
    );
  }
});

module.exports = ComponentPage;
