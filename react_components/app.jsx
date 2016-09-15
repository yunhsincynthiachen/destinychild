var React = require('react');
var ReactDOM = require('react-dom');
var Resources = require('./resources.jsx');

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
                    <div className="row">
                    <h1>Destiny's Child</h1>
                    </div>
                    <Resources metadata={[]} resources={[]}/>
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
