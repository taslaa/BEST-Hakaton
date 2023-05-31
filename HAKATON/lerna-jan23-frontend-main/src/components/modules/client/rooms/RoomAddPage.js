import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import toastify from "../../../../utils/toastify/toastify";
import RoomsService from "../../../../data/services/RoomsService";

export default function RoomAddPage() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [isFormSubmitting, setFormSubmitting] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();


    const onSubmit = async (data) => {
        setFormSubmitting(true);
        data.homeId = id;
        const room = await RoomsService.add(data);
        setFormSubmitting(false);
        if (room) {
            navigate(`/homes/rooms/${id}`);
            toastify.success("Successfully added room.");
        } else {
            toastify.error("Error adding room.");
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 mb-sm-5">
                    <h1 className="h3 mb-0">New Room</h1>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card shadow">
                    <div className="card-header border-bottom">
                        <h5 className="card-header-title">Room Information</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    {...register("name", {
                                        required: "Description is required",
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Description"
                                />
                                {errors.name && <span className="text-danger">{errors.name.message}</span>}
                            </div>
                            <div className="d-flex justify-content-end mt-4">
                                <button className="btn text-secondary border-0 me-2" onClick={() => navigate(`/homes/rooms/${id}`)}>
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
