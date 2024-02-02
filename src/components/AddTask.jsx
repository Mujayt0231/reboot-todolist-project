import { AddTaskModal} from "./AddTaskModal";
import {ADD_TASK_MODAL_ID} from "../constants"
const AddTask = () => {
  return (
    <>
          <button
        className="btn btn-dark"
        type="button"
        id="add-task-modal-trigger"
        data-bs-toggle="modal"
        data-bs-target={`#${ADD_TASK_MODAL_ID}`}
        //onClick={handleAddTask}
>
        Add Task
      </button>  

      <AddTaskModal/>
    </>
  )
}

export default AddTask
