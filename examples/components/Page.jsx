var React = require('react');

var Nav = require('./Nav');

var Page = React.createClass({
  render: function () {
    return (
      <div>
        <Nav activePage={this.props.activePage} />
        <div className="rs-body">
          <div className="rs-inner">
            <div className="rs-container">
              <div className="rs-main">
                <div className="rs-content rs-panel">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Page;
