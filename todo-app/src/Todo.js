import React from 'react'
import './Todo.css'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taskMsg : '',
            taskList : []
        }
    }

    updateTask(taskmsg) {
        this.setState({taskMsg : taskmsg})
    }

    addTask() {
        let task = {
            id : Date.now(),
            msg : this.state.taskMsg 
        }
        var clist = this.state.taskList
        clist.push(task)
        this.setState({taskMsg : '', taskList : clist})
    }

    deleteTask(tid) {
        let list = this.state.taskList.filter(task => task.id != tid)
        this.setState({taskList : list})
    }

    render(){
        return (
            <div className='Outer'>

            <div className='Tile'>
                <h1 > Todo App</h1>
                <div className='MainTile'>
                    <input 
                        type='text' 
                        placeholder= "Write someting..."
                        onChange={(e) => this.updateTask(e.target.value)}
                        value={this.state.taskMsg}
                    >
                    </input>

                    <button
                        type='submit'
                        onClick={() => this.addTask()}
                        disabled={!this.state.taskMsg.length}
                    >
                        Add task
                    </button>
                </div>
                <hr />
                <ul>
                    {this.state.taskList.map(task => {
                        return (
                        <div className='Task'>
                            {/* <input type='checkbox'></input> */}
                            <li>{task.msg}</li>
                            <button
                                onClick={() => this.deleteTask(task.id)}
                            > Delete</button>
                        </div>
                        )
                    })}
                </ul>
            </div>
            </div>
        );
    }
}

export default Todo;