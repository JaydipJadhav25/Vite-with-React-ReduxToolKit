import { createSlice  , nanoid } from "@reduxjs/toolkit"; 


const initialState = {
    todos :[{id : "abc" , text :  "hello world"} ]
}
export const todoslice = createSlice({

    name : "todo",
    initialState ,
    reducers :{
        // addTodo : (state , action) => state.push(action.payload)
        addTodo : (state , action) =>{ 
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },

        removeTodo : (state , action) =>{
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
        )
        }


    } 
    

})

export const { addTodo , removeTodo} = todoslice.actions
export default todoslice.reducer