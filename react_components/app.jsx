var React = require('react');
var ReactDOM = require('react-dom');

var DisplayEnum = Object.freeze({
    DISPLAY_HOME: 0
});

var DestinyChildBox = React.createClass({

    getInitialState: function() {
        return {
            display: DisplayEnum.DISPLAY_HOME,
            resources: [],
            metadata: []
        };
    },

    componentDidMount: function() {
        //Calls login to facebook as soon as component is mounting
        this.getResourcesPlusMetadata();
        return null;
    },

    getResourcesPlusMetadata: function() {
      $.ajax({
          url: '/api/resources/allResources',
          dataType: 'json',
          type: 'GET',
          success: function(resourceAndMetadataItems){
              this.setState({
                resources: resourceAndMetadataItems['resources'],
                metadata: resourceAndMetadataItems['metadata']
              });

          }.bind(this),
          error: function(xhr, status, err){
              console.log("cannot get resources, '/api/resources/allResources'", status, err.toString());
          }.bind(this)
      })
    },

    render: function() {
      var page;
      console.log(this.state);
      // Decide whether to show login page, tinder news wheel, or dashboard
      switch (this.state.display) {

          case DisplayEnum.DISPLAY_HOME:
              page = (
                <div>
                  <div className="col-md-4">
                    <p>Hello</p>
                  </div>
                  <div className="col-md-4">
                    <p>Bye</p>
                  </div>
                  <div className="col-md-4">
                    <p>Yup</p>
                  </div>
                </div>
              );
              break;

      }

      return (
          <div>
      {page}
          </div>
      );
    }
});

ReactDOM.render(
  <DestinyChildBox />,
  document.getElementById('content')
);
