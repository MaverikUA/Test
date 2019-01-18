import * as React from 'react';
import './ToDoList.scss';

export class ToDoList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            tasks: ['']
        };

    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            let newTasksList = this.state.tasks;
            newTasksList.push(e.currentTarget.value);
            e.currentTarget.value = "";
            this.setState({
                tasks: newTasksList
            })
            
        }
    }

    deleteTask(task, e) {
        this.setState({
            tasks: this.state.tasks.filter((t) => {
                return t !== task;
            })
        });

    }


    render() {
        return <div className="todolist">
            <div className="header">
                <input className="input-task" onKeyPress={this.handleKeyPress.bind(this)}></input>
            </div>
            <div className="tasks">
                {
                    this.state.tasks.map((task) => {
                        return <div className="task">
                            {task}
                            <span className="delete" onClick={this.deleteTask.bind(this, task)}>x</span>
                        </div>
                    })
                }


            </div>
        </div>
    }


}