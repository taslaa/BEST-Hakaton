import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DevicesService from "../../../../data/services/DevicesService";
import DeviceTypesService from "../../../../data/services/DeviceTypesService";
import HomesService from "../../../../data/services/HomesService";
import UsersService from "../../../../data/services/UsersService";

export default function DashboardPage() {
  const [totalUsers, setTotalUsers] = useState();
  const [totalHomes, setTotalHomes] = useState();
  const [totalDevices, setTotalDevices] = useState();
  const [totalDeviceTypes, setTotalDeviceTypes] = useState();

  useEffect(() => {
    const fetchAndSetTotalUsers = async () => {
      const response = await UsersService.getTotalUsers();
      setTotalUsers(response.counterValue);
    }
    const fetchAndSetTotalHomes = async () => {
      const response = await HomesService.getTotalHomes();
      setTotalHomes(response.counterValue);
    }
    const fetchAndSetTotalDevices = async () => {
      const response = await DevicesService.getTotalDevices();
      setTotalDevices(response.counterValue);
    }
    const fetchAndSetTotalDeviceTypes = async () => {
      const response = await DeviceTypesService.getTotalDeviceTypes();
      setTotalDeviceTypes(response.counterValue);
    }
    fetchAndSetTotalUsers();
    fetchAndSetTotalHomes();
    fetchAndSetTotalDevices();
    fetchAndSetTotalDeviceTypes();
  }, [])

  return (
    <>
      <h1 className="h3 mb-3 mb-sm-4">Dashboard</h1>
      <div class="container">
  <div class="row g-4 mb-5">
  <div class="col-md-2 col-xxl-6">
      <div class="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h4 class="mb-0">{totalUsers}</h4>
            <span class="h6 fw-light mb-0">Total Users</span>
          </div>
          <div class="icon-lg rounded-circle bg-warning text-white mb-0"><i class="fa-solid fa-users fa-fw"></i></div>
        </div>
      </div>
    </div>
    <div class="col-md-2 col-xxl-6">
      <div class="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h4 class="mb-0">{totalHomes}</h4>
            <span class="h6 fw-light mb-0">Total Homes</span>
          </div>
          <div class="icon-lg rounded-circle bg-warning text-white mb-0"><i class="fa-solid fa-people-roof fa-fw"></i></div>
        </div>
      </div>
    </div>
  </div>
  <div class="row g-4 mb-5">
  <div class="col-md-2 col-xxl-6">
      <div class="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h4 class="mb-0">{totalDevices}</h4>
            <span class="h6 fw-light mb-0">Total Devices</span>
          </div>
          <div class="icon-lg rounded-circle bg-warning text-white mb-0"><i class="fa-solid fa-computer"></i></div>
        </div>
      </div>
    </div>
    <div class="col-md-2 col-xxl-6">
      <div class="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h4 class="mb-0">{totalDeviceTypes}</h4>
            <span class="h6 fw-light mb-0">Total Device Types</span>
          </div>
          <div class="icon-lg rounded-circle bg-warning text-white mb-0"><i class="fa-solid fa-house-laptop"></i></div>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
  );
}
