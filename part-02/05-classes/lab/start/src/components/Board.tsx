import { Column } from "./App.jsx";

export function Board({ columns }: { columns: Column[] }): React.ReactNode {
  return (
    <div className="board">
      {columns.map((column) => (
        <div key={column.title} className="column">
          <h2>{column.title}</h2>
          {column.tasks.map((task) => (
            <div
              key={task.id}
              className="task"
              dangerouslySetInnerHTML={{ __html: task.toHtml() }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
