import { observer } from "mobx-react-lite";
import moment from "moment/moment";
import notificationsStore from "../../../data/stores/NotificationsStore";

const Notifications = observer(() => {
  const markAsRead = (index) => {
    notificationsStore.markAsRead(index);
  };

  return (
    <li className="nav-item dropdown ms-3">
      <a className="nav-notification btn btn-light p-0 mb-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
        <i className="bi bi-bell fa-fw"></i>
      </a>
      {notificationsStore.unread > 0 && <span className="notif-badge animation-blink"></span>}

      <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md shadow-lg p-0">
        <div className="card bg-transparent">
          <div className="card-header bg-transparent d-flex justify-content-between align-items-center border-bottom">
            <h6 className="m-0">
              Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span>
            </h6>
            <a className="small" href="#">
              Clear all
            </a>
          </div>

          <div className="card-body p-0">
            <ul className="list-group list-group-flush list-unstyled p-2">
              {notificationsStore.notifications.map((notification, i) => (
                <li key={i}>
                  <a onClick={() => markAsRead(i)} className={`list-group-item list-group-item-action rounded border-0 mb-1 p-3 ${!notification.isRead ? "notif-unread" : ""}`}>
                    <h6 className="mb-2">{notification.title}</h6>
                    <p className="mb-0 small">{notification.text}</p>
                    <span>{moment(notification.dateTime).format("DD.MM.YYYY HH:mm")}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-footer bg-transparent text-center border-top">
            <a href="#" className="btn btn-sm btn-link mb-0 p-0">
              See all incoming activity
            </a>
          </div>
        </div>
      </div>
    </li>
  );
});

export default Notifications;
