import './lesson_11.scss';
import {trafficLighter} from './scripts/traffic-lighter';
import {taskList} from './scripts/task-list';

trafficLighter(document.querySelector('#firstLighter'),500);
trafficLighter(document.querySelector('#secondLighter'));
trafficLighter(document.querySelector('#thirdLighter'),750);

taskList(document.querySelector('#taskList'));