const time = {
  date: new Date(),
  days: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],

  months: [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ],

  displayDate: function () {
    return `${this.days[this.date.getDay()]} ${this.date.getDate()} ${
      this.months[this.date.getMonth()]
    } ${this.date.getFullYear()}`;
  },

  displayTime: function () {
    return this.date;
  },
};
