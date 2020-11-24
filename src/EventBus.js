class EventBus {
  events = {};

  emit(eventName) {
    for (let func in this.events[eventName]) {
      func();
    }
  }
  on(eventName, onEventFunc) {
    if (!(eventName in this.events)) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(onEventFunc);
  }
}

export const eventBus = new EventBus();
export const NavBarUpdate = "updateNavbar";
