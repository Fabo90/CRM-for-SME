import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from '../component/Navbar.jsx';
import { Footer } from '../component/Footer.jsx';
import PropTypes from "prop-types";
import Swal from 'sweetalert2'
import "../../styles/totaltasks.css"

export const TotalTasks = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.isLogged();
        actions.getTasks();
        if (!store.loggedIn) {
            navigate('/');
            Swal.fire({
                icon: "info",
                title: "Alert",
                text: "Your session has expired. Please log in"
            });
        }
    }, [store.loggedIn]);

    return (

        <div>
            <Navbar page="Tasks" />
            <div id="tasksHead" className="text-center">
                <h1>Total Tasks</h1>
            </div>

            <ul id="taskscontent">
                {store.tasks.map((task, index) => (
                    <li className="border border-dark p-2 my-2 d-flex justify-content-between row bg-light" key={index}>
                        <div className="col-2 d-flex flex-column">
                            <h5 className="fw-bold" >Task title</h5>
                            <span><Link to={'/client/' + task.client_id} className='link'>{task.title}</Link></span>
                        </div>
                        <div className="col-2 d-flex flex-column">
                            <h5 className="fw-bold">User Asign</h5>
                            <span>{task.user_name}</span>
                        </div>
                        <div className="col-2 d-flex flex-column">
                            <h5 className="fw-bold" >Due Date</h5>
                            <span>{task.due_date}</span>
                        </div>

                        <div className="col-2 d-flex flex-column">
                            <h5 className="fw-bold" >Priority</h5>
                            <span className={task.priority === "Low" ? 'text-success' : task.priority === "Medium" ? 'text-warning' : 'text-danger'}>{task.priority}</span>
                        </div>

                        <div className="col-2 d-flex flex-column justify-content-center align-items-center">
                            <h5 className="fw-bold">Status</h5>
                            <span className={task.status == 'Pending' ? 'text-secondary' : 'text-success'}>{task.status}</span>
                        </div>


                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
};

TotalTasks.propTypes = {
    onAddTask: PropTypes.func,
    onEditTask: PropTypes.func,
    onDeleteTask: PropTypes.func,
};

TotalTasks.defaultProps = {
    onAddTask: null,
    onEditTask: null,
    onDeleteTask: null,
};