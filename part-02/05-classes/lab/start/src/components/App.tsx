import { Board } from "./Board.jsx";

class Task {
  /*
    Implement a constructor that initializes the following properties: id, title, assignee
  */

  // TODO

  /*
    Implement a method named `toHtml` that returns the task details as an HTML string.

    Example: <h3>Task title</h3><em>Assigned to</em> Assignee's name.

    Tip: We've provided a couple of classes if you'd like to style up the contents of the task:

    - `task-title`
    - `task-description`
  */

  // TODO
}

export class Column {
  /*
    Implement a constructor that initializes the following properties:

      - title
      - tasks - an array of `Task` instances

    All fields should be `readonly` so that their initial values can't be modified.
  */

  // TODO
}

// ----

/*
  This is an example task instance. Create a few more of your own.
*/
const task1 = new Task(1, "Circle back with the team", "Alisha");

// TODO

/*
  Create column instances for the following columns:

    - To Do
    - Doing
    - Done

  Each column should contain at least one or two tasks.
*/

// TODO

// ----

export function App() {
  /*
    Replace this empty array with an array of the columns you created above.
  */
  const columns: Column[] = []; // TODO

  return <Board columns={columns} />;
}
