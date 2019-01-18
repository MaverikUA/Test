import * as React from 'react';
import './TaskList.scss';


export class TaskList extends React.Component {

    render() {
        return <div className="tasks">
            {this.props.newTask}
        </div>


    }


}

export default TaskList;