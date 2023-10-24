import React, { useEffect } from 'react'
import { getTasks } from '../../actions/tasks';
import Task from "../Task/Task"
import TaskForm from '../TaskForm/TaskForm';
import { useDispatch, useSelector } from 'react-redux'
import "./TaskWrapper.css"
import { useNavigate } from 'react-router-dom';
const TasksWrapper = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector(state => state.tasks)
  const { user } = useSelector(state => state.user)
  const { message: addMsg } = useSelector(state => state.createTask)
  const { message: updateMsg } = useSelector(state => state.updateTask)
  const { message: deleteMsg } = useSelector(state => state.deleteTask)



  useEffect(() => {

    if (!user.email) {
      navigate("/")
    }
    // here i want to dispatch whenever i update or add or delete a task so i keep the addMsg,updateMsg,deleteMsg as dependencies
    dispatch(getTasks(user._id))
  }, [addMsg, updateMsg, deleteMsg, user, dispatch])
  return (
    <>
      <div className='tasks-container'>
        <h3 className='mb-3'>Welcome to Task Manager</h3>
        <TaskForm />
        {loading === true ? (

          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (tasks&& 
          tasks.map(task => (
            <Task task={task} key={task._id} />
          ))
        )
        }
      </div>
    </>
  )
}

export default TasksWrapper
