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

// I could not solve that task -- I copyied teacher code and adjsted it
function getCoupeNumber(coupe) {
    if (typeof(coupe) !== 'number' || coupe < 0 || !Number.isInteger(coupe)) {
        return "There is a wrong number, please type again";
    }

    if (coupe === 0 || coupe > 36) {
        return "We do not have a coupe for with that number";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (coupe <= i) {
            return `Your coupe is ${Math.ceil(i / 4)}`;
        }
    }
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(-3);

