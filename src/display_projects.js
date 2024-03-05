function display_all_projects (input_dashboard) {
  const container = document.querySelector(".project_list");
  const temp_dashboard = input_dashboard.project_list;
  for (let i = 0; i < temp_dashboard.length; i++) {
    const temp_project = temp_dashboard[i];
    const list_li = document.createElement('li');
    const list_div = document.createElement('div');
    list_div.classList.add("project");

    const list_btn = document.createElement('button');
    list_btn.textContent = "View";
    list_btn.classList.add("project_view");
    list_btn.addEventListener("click", () => {
      console.log(temp_project.id);
    });

    const list_p = document.createElement("p");
    list_p.textContent = temp_project.name;

    list_div.appendChild(list_btn);
    list_div.appendChild(list_p);
    list_li.appendChild(list_div);
    container.appendChild(list_li);
  }
};

export {display_all_projects} 