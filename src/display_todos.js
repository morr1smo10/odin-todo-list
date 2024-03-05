function display_all_todos (input_project) {
  const container = document.querySelector(".todo_list");
  container.innerHTML = "";
  const temp_project = input_project.todo_list;
  for (let i = 0; i < temp_project.length; i++) {
    const temp_todo = temp_project[i];
    const list_li = document.createElement('li');
    const list_div = document.createElement('div');
    list_div.classList.add("todo");

    const list_p_title = document.createElement("p");
    list_p_title.textContent = "Title: " + temp_todo.title;

    const list_p_description = document.createElement("p");
    list_p_description.textContent = "Description: " + temp_todo.description;

    const list_p_due = document.createElement("p");
    list_p_due.textContent = "Due date: " + temp_todo.due;

    const list_p_priority = document.createElement("p");
    list_p_priority.textContent = "Priority: " + temp_todo.priority;

    const list_btn = document.createElement('button');
    list_btn.textContent = "delete";
    list_btn.classList.add("todo_delete");
    list_btn.addEventListener("click", () => {
      delete_todo(input_project, i);
    });

    list_div.appendChild(list_p_title);
    list_div.appendChild(list_p_description);
    list_div.appendChild(list_p_due);
    list_div.appendChild(list_p_priority);
    list_div.appendChild(list_btn);
    list_li.appendChild(list_div);
    container.appendChild(list_li);
  }
};

function delete_todo (proj, index) {
  proj.todo_list.splice(index, 1);
  display_all_todos(proj);
}

export {display_all_todos} 