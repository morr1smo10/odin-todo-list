class project {
  constructor (id, name, todo_list = []) {
    this.id = id;
    this.name = name;
    this.todo_list = todo_list;
  };

  create_todo(todo) {
    this.todo_list.push(todo);
  };

  delete_todo(index) {
    this.todo_list.splice(index, 1);
  };
};

export {project};