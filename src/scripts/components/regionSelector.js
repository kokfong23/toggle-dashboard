var RegionSelector = React.createClass({
    getInitialState: function () {
        return {
            value: 'wus'
        }
    },
    change: function (event) {
        this.setState({ value: event.target.value });
        this.props.onRegionChanged(event.target.value);
    },
    render: function () {
        return (
            <div className="form-group">
                <label htmlFor="region">Region: </label>
                <select id="region" onChange={this.change} value={this.state.value} className="form-control">
                    <option value="wus">WUS</option>
                    <option value="jae">JAE</option>
                </select>
            </div>
        );
    }
});

module.exports = RegionSelector;