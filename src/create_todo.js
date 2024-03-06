import { todo } from "./todo";
import { display_all_todos } from "./display_todos";

function add_todo (input_project) {
  const showButton = document.querySelector('#showDialog');
  const favDialog = document.getElementById('favDialog');
  const closeBtn = document.getElementById('closeBtn');
  const confirmBtn = document.getElementById('confirmBtn');
  const form = document.querySelector('form');
  var submitted = false;
  showButton.addEventListener("click", () => {
    form.reset();
    submitted = false;
    favDialog.showModal();
  });
  form.addEventListener("submit", (event) => {
    if (submitted == true) {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const year = parseInt(document.getElementById('year').value);
      const month = parseInt(document.getElementById('month').value);
      const day = parseInt(document.getElementById('day').value);
      const priority = parseInt(document.getElementById('priority').value);
      console.log(month);
      input_project.create_todo(new todo(title, description, year, month, day, priority));
      display_all_todos(input_project);
    }
  });
  confirmBtn.addEventListener("click", () => {
    submitted = true;
    favDialog.close();
    console.log("check");
  });
  closeBtn.addEventListener("click", () => {
    favDialog.close();
    form.reset();
  });
}

export {add_todo};