var ServiceSelector = React.createClass({
    getInitialState: function () {
        return {
            value: 'Test3'
        }
    },
    change: function (event) {
        this.setState({ value: event.target.value });
        this.props.onServiceChanged(event.target.value);
    },
    render: function () {
        return (
            <div className="form-group">
                <label htmlFor="service">Environment: </label>
                <select id="service" onChange={this.change} value={this.state.value} className="form-control">
                    <option value="Test3">Test3</option>
                    <option value="Test4">Test4</option>
                </select>
            </div>
        );
    }
});

module.exports = ServiceSelector;