class EventBus {
  events = {};

  emit(eventName) {
    if (this.events[eventName].length > 0) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        this.events[eventName][i]();
      }
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
export const ExpandingHelpPressed = "expandedHelpPressed";
