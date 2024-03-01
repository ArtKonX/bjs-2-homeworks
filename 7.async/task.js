class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, func) {

        if ((arguments.length !== 2) || (time === null) || (func === null)) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else {

            let callOnTime = false;

            if (this.alarmCollection.length > 0) {
                callOnTime = this.alarmCollection.find((elem) => elem.time === time);
            }

            if (callOnTime === true) {
                console.warn('Уже присутствует звонок на это же время');
            } else {
                this.alarmCollection.push({ callback: func, time: time, canCall: true });
            }
        }
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((elem) => elem.time !== time);
        return this.alarmCollection;
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();

        return currentDate.toLocaleTimeString().slice(0, 5);
    }

    start() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((elem) => {

                    if ((elem.time === this.getCurrentFormattedTime()) && (elem.canCall)) {
                        elem.canCall = false;
                        elem.callback();
                    }
                });
            }, 1000);
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((elem) => elem.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}