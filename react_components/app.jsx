var React = require('react');
var ReactDOM = require('react-dom');

var DisplayEnum = Object.freeze({
    DISPLAY_HOME: 0
});

var DestinyChildBox = React.createClass({

    getInitialState: function() {
        return {
            display: DisplayEnum.DISPLAY_HOME,
        };
    },

    render: function() {
        var page;

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
