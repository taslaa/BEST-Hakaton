import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import toastify from "../../../../utils/toastify/toastify";
import EnumsService from "../../../../data/services/EnumsService";
import AuthService from "../../../../data/services/AuthService";
import HomesService from "../../../../data/services/HomesService";

export default function HomeAddPage() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [homeTypes, setHomeTypes] = useState();
    const [user, setUser] = useState();
    const [isFormSubmitting, setFormSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAndSetHomeType = async () => {
            const typesList = await EnumsService.getHomeTypes();
            setHomeTypes(typesList);
            const user = AuthService.getCurrentUser();
            const currentUser = user.FirstName + ' ' + user.LastName;
            const id = user.Id;
            console.log(id);
            setUser(currentUser);
            console.log(currentUser);
        };
        fetchAndSetHomeType();
    }, []);

    const onSubmit = async (data) => {
        setFormSubmitting(true);
        const user = AuthService.getCurrentUser();
        const id = user.Id;
        data.userId = id;
        const newHome = await HomesService.add(data);
        setFormSubmitting(false);
        if (newHome) {
            navigate(`/homes`);
            toastify.success("Successfully added home.");
        } else {
            toastify.error("Error adding home.");
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 mb-sm-5">
                    <h1 className="h3 mb-0">New Home</h1>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card shadow">
                    <div className="card-header border-bottom">
                        <h5 className="card-header-title">Home Information</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
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
                            <div>
                                <label className="form-label">Address</label>
                                <input
                                    {...register("address", {
                                        required: "Device photo is required",
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Home Type</label>

                                <select
                                    {...register("type", {
                                        required: "Home type is required ",
                                    })}
                                    className="form-control"
                                >
                                    <option value="">Choose Home Type</option>
                                    {homeTypes &&
                                        homeTypes.map((homeType, index) => (
                                            <option key={index} value={homeType.key}>
                                                {homeType.value}
                                            </option>
                                        ))}
                                </select>
                                {errors.type && <span className="text-danger">{errors.type.message}</span>}
                            </div>
                            {/* <div>
                                <label className="form-label">User</label>

                                <input
                                    {...register("userId", {
                                        required: "Device photo is required",
                                    })}
                                    type="text"
                                    className="form-control"
                                    value={user}
                                />
                            </div> */}
                            <div className="d-flex justify-content-end mt-4">
                                <button className="btn text-secondary border-0 me-2" onClick={() => navigate("/homes")}>
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
