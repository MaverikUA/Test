import * as React from 'react';
import './TaskForm.scss';



export class TaskForm extends React.Component {
    
    render() {
        return <form onSubmit={this.props.taskMethod}>
            <input type="text" name="mytask" className="input-task" placeholder="type your task"></input>
            <button>Добавить задачку</button>
        </form>

    }


}

export default TaskForm;