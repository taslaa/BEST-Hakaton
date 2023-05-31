import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import UsersService from '../../../../data/services/UsersService';
import toastify from '../../../../utils/toastify/toastify';

export default function UsersPage() {
    const [users, setUsers] = useState();
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        const fetchUsers = async () => {
            const usersList = await UsersService.getByParams(1, 999);
            setUsers(usersList);
        }
        fetchUsers();
    })

    const deleteUser = async (id) => {
        const deletedUser = await UsersService.delete(id);
        if (deleteUser) {
            const currentUsers = [...users];
            const index = currentUsers.findIndex((u) => u.id === id);
            currentUsers.splice(index, 1);
            setUsers(currentUsers);
            toastify.success(t("SUCCESSFULLY_DELETED_USER"));
        } else {
            toastify.error(t("ERROR_DELETING_USER"));
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 mb-sm-4">
                    <div className="d-sm-flex justify-content-between align-items-center">
                        <h1 className="h3 mb-3 mb-sm-0">Users</h1>
                    </div>
                </div>
            </div>
            <div className="card shadow">
                <div className="card-body">
                    <div className="bg-light rounded p-3 d-none d-lg-block">
                        <div className="row row-cols-7 g-4">
                            <div className="col">
                                <h6 className="mb-0">First name</h6>
                            </div>
                            <div className="col">
                                <h6 className="mb-0">Last name</h6>
                            </div>
                            <div className="col">
                                <h6 className="float-end mb-0">Activity status</h6>
                            </div>
                            <div className="col">
                                <h6 className="float-end mb-0">Action</h6>
                            </div>
                        </div>
                    </div>
                    {users &&
                        users.map((user, index) => (
                            <div key={index} className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
                                <div className="col">
                                    <small className="d-block d-lg-none">{t("FIRST_NAME")}:</small>
                                    <h6 className="mb-0 fw-normal">{user.firstName}</h6>
                                </div>
                                <div className="col">
                                    <small className="d-block d-lg-none">{t("LAST_NAME")}:</small>
                                    <h6 className="mb-0 fw-normal">{user.lastName}</h6>
                                </div>
                                <div className="col">
                                    <small className="d-block d-lg-none">Activity status:</small>
                                    <div className={`badge bg-opacity-10 ${user.isActive ? "bg-success text-success" : "bg-danger text-danger"}`}>{user.isActive ? "Active" : "Inactive"}</div>
                                </div>
                                <div className="col">
                                    <button className="btn btn-sm btn-danger float-end mb-0" onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </button>
                                    <button className="btn btn-sm btn-light me-2" onClick={() => navigate(`statistic/${user.id}`)}>
                                        Details
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}
