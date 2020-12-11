import React, {useState, useReducer} from "react"
import Todo from "./Todo.js"

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo"
}

function reducer(todos, action){
  switch (action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
      case ACTIONS.TOGGLE_TODO:
        return todos.map(todo => {
          if(todo.id === action.payload.id){
            return {...todo, complete: !todo.complete }
          }
          return todo
        })
        case ACTIONS.DELETE_TODO:
          return todos.filter(todo => todo.id !== action.payload.id)
          default:
            return todos
  }
}

function newTodo(name){
  return { id: Date.now(), name: name, complete: false }
}

export default function App(){

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

function handleSubmit(e){
  e.preventDefault()
  dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name }})
  setName('')
}


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName (e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </div>
  )
}

















// UseState example 

// import React, {useState} from "react"

// function App(){
//   const [count, setCount] = useState(4)
//   const [theme, setTheme] = useState("blue")

//   function incrementCount(){
//     setCount(prevCount => prevCount + 1)
//     setTheme("green")
//   }

//   function decrementCount(){
//     setCount(prevState => prevState - 1)
//     setTheme("red")
//   }

// return(
//   <div>
//     <button onClick={decrementCount}>-</button>
//     <span>{count}</span>
//     <span>{theme}</span>
//     <button onClick={incrementCount}>+</button>
//   </div>
// )
// }

// export default App

























// import React ,{ createContext } from "react"
// import ComA from "./ComA.js"
// import ComB from "./ComB.js"

// const FirstName = createContext()
// const LastName = createContext()

// const App = () => {
//   return (
//     <div>
//       <FirstName.Provider value={"Bisma"}>
//         <LastName.Provider value={"Jamil Ahmed"}>
//         <ComA />
//         </LastName.Provider>
//       </FirstName.Provider>
//     </div>
//   )
// }

// export default App
// export { FirstName, LastName }





































//Context API

// import React, { createContext } from "react"
// import ComA from "./ComA"

// const FirstName = createContext()
// const LastName = createContext()

// const App = () => {
//   return (
//     <div>
//       <FirstName.Provider value={"Bisma"}>
//         <LastName.Provider value={"Jamil"}>
//         <ComA />
//         </LastName.Provider>
//       </FirstName.Provider>
//     </div>
//   )
// }

// export default App
// export { FirstName, LastName }




















































