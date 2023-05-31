import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import toastify from "../../../../utils/toastify/toastify";
import _debounce from "debounce";
import RoomsService from "../../../../data/services/RoomsService";

export default function RoomsPage() {
    const [rooms, setRooms] = useState();
    const { id } = useParams();
    const [isFormSubmitting, setFormSubmitting] = useState(false);


    const navigate = useNavigate();

    const fetchRooms = async () => {
        const roomsList = await RoomsService.getByParams();
        setRooms(roomsList);
    }

    useEffect(() => {
        fetchRooms();
    }, []);

    const deleteRoom = async (id) => {
        const deleted = await RoomsService.delete(id);
        if (deleted) {
            const currentRooms = [...rooms];
            const index = currentRooms.findIndex((v) => v.id === id);
            currentRooms.splice(index, 1);
            setRooms(currentRooms);
            toastify.success("Successfully deleted home.");
        } else {
            toastify.error("Error deleting home.");
        }
    };


    const onSubmit = async (data) => {
        setFormSubmitting(true);
        const newRoom = await RoomsService.add(data);
        console.log(newRoom);
        setFormSubmitting(false);
        if (newRoom) {
            navigate(`/rooms`);
            toastify.success("Successfully added device");
        } else {
            toastify.error("Error adding device");
        }
    };


    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 mb-sm-4">
                    <div className="d-sm-flex justify-content-between align-items-center">
                        <h1 className="h3 mb-3 mb-sm-0">Rooms</h1>
                        <div className="d-grid">
                            <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create")}>
                                + New Room
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {(!rooms || rooms.length === 0) && (
                    <div className="col">
                        <div className="card shadow h-100">
                            <div className="card-body text-center">
                                No results
                            </div>
                        </div>
                    </div>
                )}
                {rooms && rooms.map((room, index) => (
                    <div key={index} className="col">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h5 className="card-title">{room.name}</h5>
                                <div className="col-auto text-end">
                                    <button className="btn btn-sm btn-light me-2" onClick={() => navigate(`/homes/rooms/devices/${room.id}`)}>
                                        Devices
                                    </button>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteRoom(room.id)}>
                                        Delete
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
