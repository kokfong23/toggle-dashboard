var ToggleItem = require('./toggleItem.js');

var ToggleList = React.createClass({
  componentDidUpdate: function () {
    $("[name='toggle-checkbox']").bootstrapSwitch();
  },
  render: function () {
    var divStyle = {
      'left': '10px'
    };
    var rowStyle = {
      'padding-bottom': '10px'
    };

    var toggleNodes = this.props.data.map(function (toggle) {
      return (
        <ToggleItem toggle={toggle} key={toggle.name} />
      );
    });
    return (
      <div>
        <div className="row" style={rowStyle}>
          <div className="col-md-4" style={divStyle}>
          </div>
          <div className="col-md-4">
            <h3>Web</h3>
          </div>
          <div className="col-md-4">
            <h3>Api</h3>
          </div>
        </div>
        {toggleNodes}
      </div>
    );
  }
});

module.exports = ToggleList;