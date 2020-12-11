import React from "react"
import { ACTIONS } from "./App.js"

// useReducer todo code

export default function Todo({ todo, dispatch }){
    return(
        <div>
            <span style={{ color: todo.complete ? "#aaa" : "#000" }}>
                {todo.name}
            </span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div>
    )
}

































//prop-types todo code

// import React, {Component} from "react";
// import TodoItem from "./TodoItem";
// import propTypes from "prop-types";

// class Todos extends Component {
//     markComplete = () => {
//         console.log('Hello')
//     }
//     render(){
//         return this.props.todos.map((todo) => (
//             <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
//         ));
//     }
// }

// // PropTypes
// Todos.propTypes = {
//     todos: propTypes.array.isRequired,
//     markComplete: propTypes.func.isRequired,
//     delTodo: propTypes.func.isRequired,
// }

// export default Todos