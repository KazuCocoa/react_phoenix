import {Socket} from "phoenix"

// let socket = new Socket("/ws")
// socket.connect()
// socket.join("topic:subtopic", {}).receive("ok", chan => {
// })

$(function() {
  var App = React.createClass( {
    getInitialState: function () {
      return { message: "" }
    },
    updateMessage: function(e) {
      this.setState({ message: e.target.value });
    },
    render: function() {
      return(
        <div>
          <input type="text" onChange={this.updateMessage} />
          <p>{this.state.message}</p>
        </div>
      );
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
