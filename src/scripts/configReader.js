var GetConfig = function(branchName, serviceName, region, callback){
     $.ajax({
      url: "http://localhost/NintexTfs/api/toggles/" + branchName + "/" + serviceName + "/" + region,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        callback(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
};

module.exports = {GetConfig};