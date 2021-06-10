//js code to check whether the given date is a weekday or weekend
var today = new Date();
var x = today.getDay();
if (x == 6 || x == 0)
    return "Weekend";
else
    return "Weekday";