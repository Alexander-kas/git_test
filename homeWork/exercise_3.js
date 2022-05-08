 for (let i = 5; i <= 10; i++){
    console.log(i);
}

for (let j = 20; j > 10; j--){
    if (j === 13) {
        break;
    }
    console.log(j);
}

for (let k = 2; k <= 10; k +=2){
    console.log(k);
}
//Teacher code
for (let l = 2; l <= 10; l++){
    if (l % 2 === 0){
    console.log(l);
    }
}


let n = 2;

while(n < 16){
  n++;
  if(n % 2) {
  console.log(n);
  }
}
// Teacher code
let m = 2;

while (m <= 16) {
    if (m % 2 === 0) {
        m++;
        continue;
    } else {
        console.log(m);
    }
    m++;
}

    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);

