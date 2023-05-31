const { makeObservable, observable, action, computed } = require("mobx");

class NotificationsStore {
  notifications = [];

  constructor() {
    makeObservable(this, {
      notifications: observable,
      notify: action,
      markAsRead: action,
      unread: computed,
    });

    var fromLocalStorage = localStorage.getItem("notifications");

    if (fromLocalStorage) {
      var notificationsParsed = JSON.parse(fromLocalStorage);
      this.notifications = notificationsParsed;
    }
  }

  notify(title, text) {
    this.notifications.unshift({
      title: title,
      text: text,
      dateTime: new Date(),
      isRead: false,
    });
    localStorage.setItem("notifications", JSON.stringify(this.notifications));
  }

  markAsRead(index) {
    this.notifications[index].isRead = true;
  }

  get unread() {
    return this.notifications.filter((x) => !x.isRead).length;
  }
}

const notificationsStore = new NotificationsStore();
export default notificationsStore;
