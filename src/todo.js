import {format} from "date-fns";

class todo {
  constructor (title, description, year, month, day, priority) {
    this.title = title;
    this.description = description;
    this.due = format(new Date(year, month, day), "yyyy-MM-dd");
    this.priority = priority;
  };
};

export {todo};