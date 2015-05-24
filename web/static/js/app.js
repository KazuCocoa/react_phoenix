import {Socket} from "phoenix"

// let socket = new Socket("/ws")
// socket.connect()
// socket.join("topic:subtopic", {}).receive("ok", chan => {
// })

$(function() {
  var App = React.createClass( {
    getInitialState: function() {
      return { message: "" }
    },
    updateMessage: function(e) {
      this.setState({ message: e.target.value });
    },

    render: function() {
      return (
        <div>
          <input type="text" onChange={this.updateMessage} />
          <Message message={this.state.message} />
        </div>
      );
    }
  });

  var Message = React.createClass({
    render: function() {
      return <p>{this.props.message}</p>;
    }
  });

  React.render(
    <h2 className="jumbotron">Hello from React!</h2>,
    document.getElementById('hello-world')
  );

  React.render(
    <App />,
    document.getElementById('app-container')
  );

});

let App = {
}

export default App
