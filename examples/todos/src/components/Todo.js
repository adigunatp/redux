import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClickToggle, onClickDelete, onClickDuplicate, completed, text}) => (
  <div>
    <li>
      <h4
        onClick={onClickToggle}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          display: 'inline-block',
          marginRight: '5px'
        }}
      >
        {text}
      </h4>
      <button onClick={onClickDelete}>Delete</button>
      <button onClick={onClickDuplicate}>Duplicate</button>
    </li>
  </div>
)

Todo.propTypes = {
  onClickToggle: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickDuplicate: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
