import React, { useState } from 'react';
import "./TaskList.css"

function TaskList(){
    const[todo, setTodo] = useState("")
    const[todos, setTodos] = useState([])
    const addTodo = () =>{
        if(todo !==""){
            setTodos([...todos,todo])
            setTodo("")
        }

    }

    const deleteTodo = (text) =>{
        const newTodos = todos.filter((todo)=>{
            return todo !== text;
        });
        setTodos(newTodos)
    };
    return(
        <>
            <div className="add_div">
                <input
                    type="text"
                    className="add_input"
                    value = {todo}
                    placeholder= "Добавить задачу"
                    onChange={
                        (e) =>{
                            setTodo(e.target.value);
                        }
                    }
                />
            </div>
            <div className=" add_div2 ">
                {todo?.length > 0 ?(
                    <button className="add_btn_activ" onClick={addTodo}>Добавить</button>
                ) : (
                    <button className="add_btn_disactiv" onClick={addTodo}>Добавить</button>
                )}

            </div>
            {todos?.length > 0 ? (
                <div className="task_list">
                    <ul>
                        {todos.map((todo, index) => (
                            <div className='task'>
                                <div style={{
                                    display:"flex",
                                    justifyContent:"flex-start",
                                    alignItems:"center",
                                }}>
                                    <input type="radio" className="radio"/>
                                    <li key={index} className="task_li"> {todo} </li>
                                </div>
                                <button
                                    className="del_btn"
                                    onClick={() => {
                                        deleteTodo(todo)
                                    }}
                                >Удалить
                                </button>
                            </div>
                        ))}
                    </ul>
                </div>
            ) : (
                <p></p>
            )}

        </>
    )
}

export default TaskList