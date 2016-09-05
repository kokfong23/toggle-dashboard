var ToggleItem = React.createClass({
    getToggle: function (isEnabled) {
        if (isEnabled) {
            return <input type="checkbox" name="toggle-checkbox" defaultChecked />;
        }
        else {
            return <input type="checkbox" name="toggle-checkbox" />;
        }
    },

    render: function () {
        var rowStyle = {
            padding: '10px'
        };

        return (
            <div className="row" style={rowStyle}>
                <div className="col-md-4" >
                    <label htmlFor={this.props.toggle.name}>{this.props.toggle.name}</label>
                </div>
                <div className="col-md-4">
                    {this.getToggle(this.props.toggle.enabledInWeb) }
                </div>
                <div className="col-md-4">
                    {this.getToggle(this.props.toggle.enabledInApi) }
                </div>
            </div>
        );
    }
});

module.exports = ToggleItem;