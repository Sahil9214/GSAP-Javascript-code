import { useState } from "react";

interface Task {
  id: string;
  title: string;
  status: string;
}

const tasksValue = [
  {
    id: "1",
    title: "Learn React",
    status: "in-progress",
  },
  {
    id: "2",
    title: "Learn GraphQL",
    status: "todo",
  },
  {
    id: "3",
    title: "Learn Apollo",
    status: "done",
  },
  {
    id: "4",
    title: "Learn TypeScript",
    status: "todo",
  },
  {
    id: "5",
    title: "Learn Node.js",
    status: "in-progress",
  },
];

const DragandDrop = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksValue);
  const [dropIndicator, setShowIndicator] = useState<string | null>(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const res = await axios.get(`http://localhost:3001/tasks`);
  //         setTasks(res.data);
  //       } catch (err) {
  //         console.log(err);
  //         if (!sessionStorage.getItem("showError")) {
  //           const ok = window.confirm(
  //             "Please start the json server just install json-server --watch db.json --port 3001"
  //           );
  //           if (ok) {
  //             window.location.reload();
  //             sessionStorage.setItem("showError", "true");
  //           }
  //         }
  //       }
  //     };
  //     fetchData();
  //   }, []);

  //   function updatedTask(task: Task) {
  //     axios
  //       .put(`http://localhost:3001/tasks/${task.id}`, task)
  //       .then((response) => {
  //         console.log("Task updated successfully:", response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error updating task:", error);
  //       });
  //   }
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: string
  ) => {
    e.dataTransfer.setData("text/plain", taskId.toString());
  };
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.clearData();
    setShowIndicator(null);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setShowIndicator(e.currentTarget.id);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain"); // this wil be stored the value during data transfer
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      task.status = status;

      setTasks((prevTasks) =>
        prevTasks?.map((_task) => (_task.id === task?.id ? task : _task))
      );
    }
  };
  function renderTask(status: string) {
    return tasks
      .filter((task) => task.status === status)
      .map((task, i) => (
        <div
          key={i}
          draggable
          onDragStart={(e) => handleDragStart(e, task.id)}
          onDragEnd={handleDragEnd}
        >
          <h2 className="text-white py-4 text-xl font-serif font-medium">
            {task.title}
          </h2>
        </div>
      ));
  }

  return (
    <div className="flex flex-col h-screen dark:bg-slate-700">
      <div className="flex flex-row items-center justify-between px-8 py-8">
        <div>
          {" "}
          <h1 className="text-lg text-white text-center ">Todo</h1>
          <div
            id="todo"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "todo")}
            className={`flex flex-col items-center justify-start w-[25vw] border-2 border-dashed p-0.5 gap-1 rounded ${
              dropIndicator === "todo" ? "bg-blue-100 " : ""
            }`}
          >
            {renderTask("todo")}
          </div>
        </div>
        <div>
          {" "}
          <h1 className="text-lg text-white text-center ">In-Progress</h1>
          <div
            id="in-progress"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "in-progress")}
            className={`flex flex-col items-center justify-start w-[25vw] border-2 border-dashed p-0.5 gap-1 rounded ${
              dropIndicator === "todo" ? "bg-blue-100 " : ""
            }`}
          >
            {renderTask("in-progress")}
          </div>
        </div>
        <div>
          {" "}
          <h1 className="text-lg text-white text-center ">Done</h1>
          <div
            id="done"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "done")}
            className={`flex flex-col items-center justify-start w-[25vw] border-2 border-dashed p-0.5 gap-1 rounded ${
              dropIndicator === "todo" ? "bg-blue-100 " : ""
            }`}
          >
            {renderTask("done")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragandDrop;
