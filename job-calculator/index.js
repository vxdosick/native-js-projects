const HOUR_SALARY = 80;
const WORK_HOURS_PER_DAY = 5;
const orderWorkTime = 40;
const numberDayToday = 0; // monday
const orderDedline = 11; // max days to finish
// calculating questions
let isCompleteOrder; // true or false
let howMuchMoney; // totalSalary
let howMuchDaysToComplete;
let actualWorkingDays;
// calculating
howMuchMoney = HOUR_SALARY * orderWorkTime;
howMuchDaysToComplete = orderWorkTime / WORK_HOURS_PER_DAY;
isCompleteOrder = orderDedline >= howMuchDaysToComplete

if (isCompleteOrder) {
    console.log("The order will be fulfilled in due time, and its sum is" + howMuchMoney + '$');
} else {
    console.log("Order cannot be fulfilled, change the work deadline");
}