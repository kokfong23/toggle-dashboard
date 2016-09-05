'use strict'

var configReader = require('./scripts/configReader.js');
var ToggleList = require('./scripts/components/toggleList.js');
var BranchSelector = require('./scripts/components/branchSelector.js');
var ServiceSelector = require('./scripts/components/serviceSelector.js');
var RegionSelector = require('./scripts/components/regionSelector.js');

var ToggleBox = React.createClass({
  selectedBranch: 'Melange',
  selectedService: 'Test3',
  selectedRegion: 'wus',

  loadTogglesFromFile: function () {
    var self = this;
    console.log('Selected branch:' + this.selectedBranch);
    console.log('Selected service:' + this.selectedService);
    console.log('Selected region:' + this.selectedRegion);

    configReader.GetConfig(this.selectedBranch, this.selectedService, this.selectedRegion,
      function (toggleData) {
        self.setState({ data: toggleData });
      }
    );
  },

  getInitialState: function () {
    return { data: [] };
  },

  handleOnServiceChanged: function (service) {
    this.selectedService = service;
    this.loadTogglesFromFile();
  },

  handleOnBranchChanged: function (branch) {
    this.selectedBranch = branch;
    this.loadTogglesFromFile();
  },

  handleOnRegionChanged:function(region){
    this.selectedRegion = region;
    this.loadTogglesFromFile();
  },

  componentDidMount: function () {
    this.loadTogglesFromFile();
  },

  render: function () {
    var rowStyle = {
      'padding-top': '10px',
      'padding-left': '10px'
    };

    return (
      <div className="container">
        <h1>Toggles</h1>
        <div className="row" style={rowStyle}>
          <div className="col-md-4">
            <BranchSelector onBranchChanged={this.handleOnBranchChanged}/>
          </div>
          <div className="col-md-4">
            <ServiceSelector onServiceChanged={this.handleOnServiceChanged}/>
          </div>
          <div className="col-md-4">
            <RegionSelector onRegionChanged={this.handleOnRegionChanged}/>
          </div>
        </div>
        <ToggleList data={this.state.data} />
      </div>
    );
  }
});

ReactDOM.render(<ToggleBox />, document.getElementById('content')
);
