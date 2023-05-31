import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import toastify from "../../../../utils/toastify/toastify";
import EnumsService from "../../../../data/services/EnumsService";
import AuthService from "../../../../data/services/AuthService";
import HomesService from "../../../../data/services/HomesService";
import DevicesService from "../../../../data/services/DevicesService";
import ActionsService from "../../../../data/services/ActionsService";

export default function ActionPage() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [user, setUser] = useState();
    const [isFormSubmitting, setFormSubmitting] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const onSubmit = async (data) => {
        setFormSubmitting(true);
        const user = AuthService.getCurrentUser();
        const Userid = user.Id;
        data.userId = Userid;
        data.deviceId = id;
        const newAction = await ActionsService.add(data);
        setFormSubmitting(false);
        if (newAction) {
            navigate(`/actions`);
            toastify.success("Successfully added action.");
        } else {
            toastify.error("Error adding action.");
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 mb-sm-5">
                    <h1 className="h3 mb-0">New Action</h1>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card shadow">
                    <div className="card-header border-bottom">
                        <h5 className="card-header-title">Action Information</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">Setting Name</label>
                                <input
                                    {...register("settingName", {
                                        required: "Description is required",
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Description"
                                />
                                {errors.settingName && <span className="text-danger">{errors.settingName.message}</span>}
                            </div>
                            <div>
                                <label className="form-label">Setting Value</label>
                                <input
                                    {...register("settingValue", {
                                        required: "Device photo is required",
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Start Time</label>
                                <input
                                    {...register("startTime", {
                                        required: "Description is required",
                                    })}
                                    type="date"
                                    className="form-control"
                                    placeholder="Description"
                                />
                                {errors.startTime && <span className="text-danger">{errors.startTime.message}</span>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">End Time</label>
                                <input
                                    {...register("endTime", {
                                        required: "Description is required",
                                    })}
                                    type="date"
                                    className="form-control"
                                    placeholder="Description"
                                />
                                {errors.endTime && <span className="text-danger">{errors.endTime.message}</span>}
                            </div>
                            <div className="d-flex justify-content-end mt-4">
                                <button className="btn text-secondary border-0 me-2" onClick={() => navigate(`/homes/rooms/devices?roomId=${id}`)}>
                                    Discard
                                </button>
                                <button disabled={isFormSubmitting} type="submit" className="btn btn-primary">
                                    {isFormSubmitting && <i className="fa fa-spin fa-spinner"></i>}
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
}
