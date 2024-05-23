// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//como se escribe un bucle:

//for (let counter = 0; counter <= 10; counter++) {
//  console.log(counter);}
//const names = ['Keko', 'Cris', 'Andrea', 'Celi'];
//or (let counter = 0; counter < names.length; counter++) {
//  console.log(names[counter]);
//}

//for (const name of names) {console.log(name);}

for (let counter = 10; counter >= 0; counter--) {
  console.log(counter);
}

const uwuNumbers = numbers => {
  let total = 0;

  for (let counter = 0; counter < numbers.length; counter++) {
    total = total + numbers[counter];
  }
  console.log(total);
};

uwuNumbers([1, 1, 1, 1, 1, 1, 1, 1, 1]);

const aleatoryNumber = number => {
  for (let counter = 0; counter <= 10; counter++) {
    console.log(`${counter} x ${number} =  ${number * counter}`);
  }
};

aleatoryNumber([4]);

const aNumber = number => {
  for (let counter = 10; counter >= 0; counter--) {
    console.log(`${counter} x ${number} =  ${number * counter}`);
  }
};

aNumber([4]);

const ageYear = (year, age) => {
  let myBirthyear = year - age;

  console.log(`Naciste en el año ${myBirthyear}`);

  for (let counter = 1; counter <= 25; counter++) {
    if (counter === 1) {
      console.log(`En el año ${myBirthyear + counter} cumpliste ${counter} año`);
    } else {
      console.log(`En el año ${myBirthyear + counter} cumpliste ${counter} años`);
    }
  }
};

ageYear(2024, 25);

const onlyEvenNumbers = (numberA, numberB) => {
  let start;
  let end;

  if (numberA < numberB) {
    start = numberA;
    end = numberB;
  } else {
    start = numberB;
    end = numberA;
  }
}
for (let counter = start; counter <= end; counter++) {
   if (counter % 2 === 0) console.log(counter);

   onlyEvenNumbers(20, 12);


// const twoNumbers = (number1, number2) => {

//   if (number1 < number2) {
//     for (let counter = number1; counter <= number2; counter++) {
//       if (counter % 2 === 0) console.log(counter);
//     }
//   } else {
//     for (let counter = number1; counter >= number2; counter--) {
//       if (counter % 2 === 0) console.log(counter);
//     }
//   }
// };

// twoNumbers(20, 12);


