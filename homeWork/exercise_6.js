function calculateVolumeAndArea (length){
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)){
    return 'Something gone wrong';
    }
let volume = 0,
    area = 0;

 volume = length * length * length;
 area = 6 * (length * length);

return `Volume is ${volume}, Area is ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber (coupe){
    if (typeof(coupe) !== 'number' ||  !Number.isInteger(coupe)){
        return 'There is a wrong number, please type again';}
    for (let i = 1; coupe <= 36; i++){
    if (i <= 4){
        console.log('Your coupe is number 1');
    } else if (i <= 8){
        console.log('Your coupe is number 2');
    }else if (i <= 12){
        console.log('Your coupe is number 3');
    }else if (i <= 16){
        console.log('Your coupe is number 4');
    }else if (i <= 20){
        console.log('Your coupe is number 5');
    }else if (i <= 24){
        console.log('Your coupe is number 6');
    }else if (i <= 28){
        console.log('Your coupe is number 7');
    }else if (i <= 32){
        console.log('Your coupe is number 8');
    }else if (i <= 36){
        console.log('Your coupe is number 9');
    }else {
        return `There is no coupe under that number`;
    }

    }
}

getCoupeNumber(15);


