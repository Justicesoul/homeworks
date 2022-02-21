class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callBack, id) {
    if (!id) {
      throw new Error('Ошибка - id для будильника не передан');
    } else if (this.alarmCollection.find((alarm) => id === alarm.id)) {
      console.error('Данный звонок существует!');
    } else {
      this.alarmCollection.push({ id, time, callBack });
    }
  }

  removeClock(id) {
    const index = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(
      (element) => element.id != id
    );
    return !(index === this.alarmCollection.length);
  }

  getCurrentFormattedTime() {
    let hours = ('0' + new Date().getHours()).slice(-2);
    let minutes = ('0' + new Date().getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
  }

  start() {
    const checkClock = (alarm) => {
      if (alarm.time === this.getCurrentFormattedTime()) {
        alarm.callBack();
      }
    };
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((el) => checkClock(el));
      }, 1000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((el) =>
      console.log(`Будильник ${el.id} прозвенит в ${el.time}.`)
    );
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

//------------------------test case--------------------------------
const appAlarm = new AlarmClock();
appAlarm.addClock('7:00', () => console.log('Пора вставать'), 1);
appAlarm.addClock(
  '7:01',
  () => {
    console.log('Пора вставать!');
    appAlarm.removeClock(2);
  },
  2
);
appAlarm.addClock(
  '7:02',
  () => {
    console.log('Вставай уже!!!');
    appAlarm.clearAlarms();
    appAlarm.printAlarms();
  },
  3
);
appAlarm.printAlarms();
appAlarm.start();
