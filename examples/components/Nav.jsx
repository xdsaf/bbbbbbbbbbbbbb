var React = require('react/addons');

var Router = require('react-router-component');
var Link = Router.Link;

var LINKS = [
  {
    id: 'welcome',
    label: 'Welcome',
    uri: '/'
  },
  {
    id: 'component',
    label: 'Popover',
    uri: '/component'
  }
];

var NavItem = React.createClass({
  render: function () {
    var cx = React.addons.classSet;
    var classes = cx({
      'rs-nav-item': true,
      'active': this.props.active
    });

    return (
      <li className={classes}>
        <Link href={this.props.uri}>{this.props.label}</Link>
      </li>
    );
  }
});

var Nav = React.createClass({
  render: function () {
    return (
      <div className="rs-nav-utility rs-fixed-top">
        <div className="rs-container">
          <ul className="rs-nav">
            {LINKS.map(function (link) {
              return <NavItem key={link.id} uri={link.uri} label={link.label} active={this.props.activePage === link.id} />
            }, this)}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
