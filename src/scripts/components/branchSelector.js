var BranchSelector = React.createClass({
    getInitialState: function () {
        return {
            value: 'Melange'
        }
    },
    change: function (event) {
        this.setState({ value: event.target.value });
        this.props.onBranchChanged(event.target.value);
    },
    render: function () {
        return (
            <div className="form-group">
                <label htmlFor="branch">Branch: </label>
                <select id="branch" onChange={this.change} value={this.state.value} className="form-control">
                    <option value="Melange">Melange</option>
                    <option value="Hotfix">Hotfix</option>
                </select>
            </div>
        );
    }
});

module.exports = BranchSelector;