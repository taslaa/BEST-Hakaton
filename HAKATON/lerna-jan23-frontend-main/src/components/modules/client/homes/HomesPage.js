import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toastify from "../../../../utils/toastify/toastify";
import { useTranslation } from "react-i18next";
import DeviceTypesService from "../../../../data/services/DeviceTypesService";
import _debounce from "debounce";
import DevicesService from "../../../../data/services/DevicesService";
import HomesService from "../../../../data/services/HomesService";

export default function HomesPage() {
    const [homes, setHomes] = useState();

    const navigate = useNavigate();

    const fetchHomes = async () => {
        const homesList = await HomesService.getByParams();
        setHomes(homesList);
    }

    useEffect(() => {
        fetchHomes();
    }, []);

    const deleteDevice = async (id) => {
        const deleted = await DevicesService.delete(id);
        if (deleted) {
            const currentHomes = [...homes];
            const index = currentHomes.findIndex((v) => v.id === id);
            currentHomes.splice(index, 1);
            setHomes(currentHomes);
            toastify.success("Successfully deleted home.");
        } else {
            toastify.error("Error deleting home.");
        }
    };



    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 mb-sm-4">
                    <div className="d-sm-flex justify-content-between align-items-center">
                        <h1 className="h3 mb-3 mb-sm-0">Homes</h1>
                        <div className="d-grid">
                            <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create")}>
                                + New Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {(!homes || homes.length === 0) && (
                    <div className="col">
                        <div className="card shadow h-100">
                            <div className="card-body text-center">
                                No results
                            </div>
                        </div>
                    </div>
                )}
                {homes && homes.map((home, index) => (
                    <div key={index} className="col">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h5 className="card-title">{home.name}</h5>
                                <p className="card-text">{home.address}</p>
                                <div className="col-auto text-end">
                                    <button className="btn btn-sm btn-light me-2" onClick={() => navigate(`rooms/${home.id}`)}>
                                        Rooms
                                    </button>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteDevice(home.id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}
