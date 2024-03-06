import './style.css';
import { todo } from './todo';
import { project } from './project';
import { dashboard } from './dashboard';
import { display_all_projects } from './display_projects';
import { display_all_todos } from './display_todos';
import { create_newproject } from './create_project';

const test = new dashboard();
const temp = test.project_list[0];

window.onload = function() {
  display_all_projects(test);
  display_all_todos(temp);
  create_newproject(test);
};
