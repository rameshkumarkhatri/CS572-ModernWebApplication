function isWeekend() {
    const todayDate = new Date();
    const day =     todayDate.getDay();
    
    // const days = ['weekend', 'weekday', 'weekday', 'weekday', 'weekday', 'weekday', 'weekend'];
    // return days[day];

    // or
    const days = {0:'weekend', 1: 'weekday', 2: 'weekday', 3: 'weekday', 4: 'weekday', 5: 'weekday', 6:'weekend'};
    return days[day];
    
    //or
    // switch(day) {
    //     case 0:  return "weekend";
    //     case 6: return "weekend";
    //     default:  return "weekday";
    // }
}

console.log(isWeekend());