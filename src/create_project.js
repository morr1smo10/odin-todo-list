import { display_all_projects } from "./display_projects";
import { display_all_todos } from "./display_todos";
import { project } from "./project";

function create_newproject (input_dashboard) {
  const create_project_btn = document.querySelector("#create_project_btn");
  create_project_btn.addEventListener("click", () => {
    const userInput = prompt("Please enter the name of the project:");
    const new_proj = new project(userInput);
    input_dashboard.create_project(new_proj);
    display_all_projects(input_dashboard);
    display_all_todos(new_proj);
  });
}

export {create_newproject};