import * as React from 'react';
import { TaskForm } from './components/task-form/TaskForm.jsx';
import { ToDoList } from './components/todo-list/ToDoList.jsx';




export class App extends React.Component {
    render() {
        return <div className="page-wrapper">

            <ToDoList />

        </div>;

    }

}

