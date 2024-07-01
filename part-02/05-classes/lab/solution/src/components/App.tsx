import { Board } from "./Board.js";

// ----

function uppercase(_target: any, _key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function () {
    const result = originalMethod.apply(this);
    return result.toUpperCase();
  };
}

class Task {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly assignee: string
  ) {}

  @uppercase
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

class Column {
  constructor(readonly title: string, readonly tasks: Task[]) {}
}

// TODO: Figure out the correct one to use
// export type Columns = Array<InstanceType<typeof Column>>;
export type Columns = Array<Column>;

// ----

const task1 = new Task(1, "An important task", "Alice");
const task2 = new Task(2, "Requirements gathering", "Alice");
const task3 = new Task(3, "Schedule important meeting", "Charlie");
const task4 = new Task(4, "Think about things moving forward", "David");
const task5 = new Task(5, "Helicopter above the situation", "Eve");
const task6 = new Task(6, "Circle back with the team", "Frank");

const task7 = new TaskWithSubTasks(7, "A complex task", "Alice", [
  new Task(8, "Sub-task 1", "Alice"),
  new Task(9, "Sub-task 2", "Alice"),
  new Task(10, "Sub-task 3", "Alice"),
]);

const todo = new Column("To Do", [task1, task2, task5]);
const doing = new Column("Doing", [task4, task3, task7]);
const done = new Column("Done", [task6]);

// ----

export function App() {
  const columns = [todo, doing, done];

  return <Board columns={columns} />;
}
