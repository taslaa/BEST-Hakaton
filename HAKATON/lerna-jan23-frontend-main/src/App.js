import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClientLayout from "./components/layout/ClientLayout";
import HomePage from "./components/modules/public/home/home-page";
import ProtectedRoute from "./components/common/ProtectedRoute";
import AdminLayout from "./components/layout/AdminLayout";
import SignUpPage from "./components/modules/public/sign-up/SignUpPage";
import SignInPage from "./components/modules/public/sign-in/SignInPage";
import DashboardPage from "./components/modules/admin/dashboard/DashboardPage";
import DeviceTypePage from "./components/modules/admin/deviceTypes/DeviceTypePage";
import DeviceTypeAddPage from "./components/modules/admin/deviceTypes/DeviceTypeAddPage";
import DeviceTypeEditPage from "./components/modules/admin/deviceTypes/DeviceTypeEditPage";
import DevicePage from "./components/modules/client/devices/DevicesPage";
import DeviceAddPage from "./components/modules/client/devices/DeviceAddPage";
import HomesPage from "./components/modules/client/homes/HomesPage";
import HomeAddPage from "./components/modules/client/homes/HomeAddPage";
import RoomsPage from "./components/modules/client/rooms/RoomsPage";
import RoomAddPage from "./components/modules/client/rooms/RoomAddPage";
import UsersPage from "./components/modules/admin/users/UsersPage";
import UserDetailPage from "./components/modules/admin/users/UserDetailPage";
import UserProfilePage from "./components/modules/admin/users/UserProfilePage";
import ActionPage from "./components/modules/client/actions/ActionsPage";
import ActionsDisplayPage from "./components/modules/client/actions/ActionsDisplayPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout></ClientLayout>}>
        <Route index element={<HomePage />}></Route>
        <Route path="/devices" element={<DevicePage></DevicePage>}></Route>
        <Route path="/homes" element={<HomesPage></HomesPage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>

        <Route path="/homes/create" element={<HomeAddPage></HomeAddPage>}></Route>
        <Route path="/homes/rooms/:id" element={<RoomsPage></RoomsPage>}></Route>
        <Route path="/homes/rooms/:id/create" element={<RoomAddPage></RoomAddPage>}></Route>
        <Route path="/homes/rooms/devices/:id" element={<DevicePage></DevicePage>}></Route>
        <Route path="/homes/rooms/devices/actions/:id" element={<ActionPage></ActionPage>}></Route>
        <Route path="/devices/create" element={<DeviceAddPage></DeviceAddPage>}></Route>
        <Route path="/actions" element={<ActionsDisplayPage></ActionsDisplayPage>}></Route>
      </Route>
      <Route
        path="/admin"
        element={
          <ProtectedRoute roles="Administrator">
            <AdminLayout></AdminLayout>
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />}></Route>
        <Route path="deviceTypes" element={<DeviceTypePage />}></Route>
        <Route path="deviceTypes/create" element={<DeviceTypeAddPage />}></Route>
        <Route path="deviceTypes/edit/:id" element={<DeviceTypeEditPage />}></Route>
        <Route path="users" element={<UsersPage />}></Route>
        <Route path="users/statistic/:id" element={<UserDetailPage />}></Route>
        <Route path="users/profile/:id" element={<UserProfilePage />}></Route>


      </Route>
      <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>

    </Routes>
  );
}

export default App;
