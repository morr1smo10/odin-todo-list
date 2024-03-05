import {format} from "date-fns";

class todo {
  constructor (id, title, description, year, month, day, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.due = format(new Date(year, month, day), "yyyy-MM-dd");
    this.priority = priority;
  };
};

export {todo};