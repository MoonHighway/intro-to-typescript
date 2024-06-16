import { Board } from "./Board.jsx";

class Task {
  /*
    Implement a constructor that initializes the following properties: id, title, assignee
  */

  constructor(
    readonly id: number,
    readonly title: string,
    readonly assignee: string
  ) {}

  /*
    Implement a method named `toHtml` that returns the task details as an HTML string.

    Example: <h3>Task title</h3><em>Assigned to</em> Assignee's name.

    Tip: We've provided a couple of classes if you'd like to style up the contents of the task:

    - `task-title`
    - `task-description`
  */

  toHtml() {
    return `
      <h3>${this.title}</h3>
      <p><em>Assigned to</em> ${this.assignee}</p>
    `;
  }
}

class TaskWithSubTasks extends Task {
  constructor(
    id: number,
    title: string,
    assignee: string,
    readonly subTasks: Task[]
  ) {
    super(id, title, assignee);
  }

  override toHtml() {
    return `
      ${super.toHtml()}
      <hr />
      ${this.subTasks.map((task) => task.toHtml()).join("<hr />")}
    `;
  }
}

export class Column {
  /*
    Implement a constructor that initializes the following properties:

      - title
      - tasks - an array of `Task` instances

    All fields should be `readonly` so that their initial values can't be modified.
  */

  constructor(readonly title: string, readonly tasks: Task[]) {}
}

// ----

/*
  This is an example task instance. Create a few more of your own.
*/
const task1 = new Task(1, "Circle back with the team", "Alisha");
const task2 = new Task(2, "Requirements gathering", "Alice");
const task3 = new Task(3, "Schedule important meeting", "Charlie");
const task4 = new Task(4, "Think about things moving forward", "David");
const task5 = new Task(5, "Helicopter above the situation", "Mia");
const task6 = new Task(6, "Another important task", "Frank");

const task7 = new TaskWithSubTasks(7, "Pivot the company", "Amelia", [
  new Task(7.1, "Hire branding agency", "Amelia"),
  new Task(7.2, "Rewrite all apps", "Amelia"),
  new Task(7.3, "Let the CEO know", "Amelia"),
]);

const task8 = new TaskWithSubTasks(8, "Synergise with the C-suite", "Noah", [
  new Task(8.1, "Ideate", "Noah"),
  new Task(8.2, "Strategise", "Noah"),
  new Task(8.3, "Execute", "Noah"),
]);

/*
  Create column instances for the following columns:

    - To Do
    - Doing
    - Done

  Each column should contain at least one or two tasks.
*/

const columnToDo = new Column("To Do", [task1, task2, task5, task8]);
const columnDoing = new Column("Doing", [task4, task3, task7]);
const columnDone = new Column("Done", [task6]);

// ----

export function App() {
  /*
    Replace this empty array with an array of the columns you created above.
  */
  const columns: Column[] = [columnToDo, columnDoing, columnDone];

  return <Board columns={columns} />;
}
