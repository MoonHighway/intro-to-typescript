# Lab: Kanban ✅

> **Part 2: Section 5: Classes**

The CTO has asked you to build the data layer for a web based kanban board.
That's right, it's time to build the _ultimate_ project management tool!

## Requirements

1. `cd` into the `part-02/05-classes/lab/start/` and run `npm run serve` to start the server for the kanban app.
2. Open [`http://127.0.0.1:8000/`](http://127.0.0.1:8000/) in your web browser.
3. Follow the instructions in `part-02/05-classes/lab/start/src/components/App.tsx`.

**Tip:** Refresh the web page in your browser any time you make changes.

### Extra credit

Good news: users love the new kanban board! But they're requesting a new feature: subtasks.

1. Create a new class which can represent a task with subtasks.
2. The field which contains the subtasks should be readonly.
3. The `toHtml()` method in this class should output the task as well as its subtasks.
4. Create a couple of instances of your new class and display them on the kanban board.
