import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export const UserInfo = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getInfo();
        actions.isLogged();
        if (!store.loggedIn) {
            navigate("/");
            Swal.fire({
                icon: "info",
                title: "Alert",
                text: "Your session has expired. Please log in"
            });
        }
    }, [store.token]);


    return (
        <div className="container-fluid">
            <div className="card-header m-3 card text-center">
                <h5 className="h2 fw-bold">User info</h5>
            </div>

            <div className="card-header m-3 card text-center">
                <h4 className="fw-bold">Name</h4>
                <p>{store.userInfo}</p>
                <div className="d-flex justify-content-center mt-2">
                    <Link to={'/changepassword'}>
                        <button className="btn btn-sm btn-secondary text-truncate">Change password</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};