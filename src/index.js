import './style.css';
import { todo } from './todo';
import { project } from './project';
import { dashboard } from './dashboard';
import { display_all_projects } from './display_projects';
import { display_all_todos } from './display_todos';

const test = new dashboard();
const temp = test.project_list[0];

console.log(temp.todo_list[3].description);

window.onload = function() {
  display_all_projects(test);
  display_all_todos(temp);
};