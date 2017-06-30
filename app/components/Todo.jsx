var React = require('react');
var moment = require('moment')

var Todo = React.createClass({
  render: function () {
    var {id, completed, text,createdAt, completedAt} = this.props;
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;
      if(completed) {
        message = 'Completed ';
        timestamp = completed;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
