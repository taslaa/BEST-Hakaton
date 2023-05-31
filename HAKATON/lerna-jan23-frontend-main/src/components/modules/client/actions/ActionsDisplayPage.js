import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toastify from "../../../../utils/toastify/toastify";
import { useTranslation } from "react-i18next";
import DeviceTypesService from "../../../../data/services/DeviceTypesService";
import _debounce from "debounce";
import DevicesService from "../../../../data/services/DevicesService";
import ActionsService from "../../../../data/services/ActionsService";

export default function ActionsDisplayPage() {
    const [actions, setActions] = useState();

    const navigate = useNavigate();

    const fetchActions = async () => {
        const actionsList = await ActionsService.getByParams();
        setActions(actionsList);
    }

    useEffect(() => {
        fetchActions();
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 mb-sm-4">
                    <div className="d-sm-flex justify-content-between align-items-center">
                        <h1 className="h3 mb-3 mb-sm-0">Actions</h1>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {(!actions || actions.length === 0) && (
                    <div className="col">
                        <div className="card shadow h-100">
                            <div className="card-body text-center">
                                No results
                            </div>
                        </div>
                    </div>
                )}
                {actions && actions.map((action, index) => (
                    <div key={index} className="col">
                        <div className="col-md-4 col-xxl-6">
                            <div className="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h4 className="h6 fw-light mb-0">Setting Name: {action.settingName}</h4>
                                        <h4 className="h6 fw-light mb-0">Setting Value: {action.settingValue}</h4>
                                        <h4 className="h6 fw-light mb-0">Start Time: {new Date(action.startTime).toLocaleDateString()}</h4>
                                        <h4 className="h6 fw-light mb-0">End Time: {new Date(action.endTime).toLocaleDateString()}</h4>
                                        <h4 className="h6 fw-light mb-0">Device: {action.device}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </>
    );
}
