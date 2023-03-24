// for (var i = 1; i <= 100; i++) {
//   if ((i%5 == 0)&&(i%3 == 0)) {
//     console.log("fizzbuzz");
//     document.getElementById("lista").innerHTML += "fizzbuzz" + "<br>";
//   }
//   else if (i%3 == 0) {
//     console.log("fizz");
//     document.getElementById("lista").innerHTML += "fizz" + "<br>";
//   }
//   else if (i%5 == 0) {
//     console.log("buzz");
//     document.getElementById("lista").innerHTML += "buzz" + "<br>";
//   }
//   else {
//     console.log(i);
//     document.getElementById("lista").innerHTML += i + "<br>";
//   }

// }

const container = document.querySelector('.container');

for(let i = 1; i <= 100; i++){

  const box = document.createElement('div');
  box.className = 'box';

  let output = i;

  if(!(i % 15)){
    output = 'FizzBuzz';
    box.classList.add('fizzbuzz');
  }else if(!(i % 3)){
    output = 'Fizz'
    box.classList.add('fizz');
  }else if(!(i % 5)){
    output = 'Buzz'
    box.classList.add('buzz');
  }

  box.append(output);

  container.append(box);

}