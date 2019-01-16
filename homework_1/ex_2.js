function isWeekend() {
    const todayDate = new Date();
    const day =     todayDate.getDay();
    // const days = ['weekend', 'weekday', 'weekday', 'weekday', 'weekday', 'weekday', 'weekend'];
    // return days[day];

    switch(day) {
        case 0:  return "weekend";
        case 6: return "weekend";
        default:  return "weekday";
    }
}

console.log(isWeekend());