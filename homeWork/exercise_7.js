
function getTimeFromMinutes (totalMinutes){
if (typeof(totalMinutes) !== "number" || totalMinutes < 0 || !Number.isInteger(totalMinutes)){
    return "Ошибка, проверьте данные";
}
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

let hoursStr = '';

switch (hours) {
    case 0: 
        hoursStr = 'часов';
        break;
    case 1:
        hoursStr = 'час';
        break;
    case 2:
    case 3:
    case 4:
        hoursStr = 'часа';
        break;
    default:
        hoursStr = 'часов';
}
return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(150);

function findMaxNUmber (a, b, c, d){
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number' ){
        return 0;
    }else {
return `Самое большое число ${Math.max(a, b, c, d)}`;
}
}
 findMaxNUmber(2,4,6,1);
 findMaxNUmber(6,4,3,15);
 findMaxNUmber(20,2,8,1.5);
 findMaxNUmber(20.5,21,16,1);
 findMaxNUmber(0.5,1,1.35,1.3);