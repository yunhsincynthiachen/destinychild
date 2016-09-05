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
                      <p>Hello</p>
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
