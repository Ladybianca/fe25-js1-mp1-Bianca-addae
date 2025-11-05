
// Hello world 
for (let i=0; i<5; i++){
    const h1El = document.createElement('h1');
    document.body.appendChild(h1El);
    h1El.innerText = `Rad ${i+1}`;
    h1El.style.fontSize = `${i*5+10}px`;

    const hue = 18+11*i;
    h1El.style.backgroundColor = `hsl(228, 60%, ${hue}%)`;

    console.log(h1El);
}

const divEl = document.createElement('div');
document.body.appendChild(divEl);
document.querySelector('div').classList.add('box');

/**inuti div elementet med klass box */
const olel = document.createElement('ol');
divEl.appendChild(olel);
const liel = document.createElement('li');
olel.appendChild(liel);

const olel1 = document.createElement('ol');
divEl.appendChild(olel1);
const liel1 = document.createElement('li');
olel1.appendChild(liel1);


const olel2 = document.createElement('ol');
divEl.appendChild(olel2);
const liel2 = document.createElement('li');
olel2.appendChild(liel2);

/**orderd list 1,2 och 3 */

//orderd list 1
    for (let i = 0; i < 10; i++) {
      const pEl = document.createElement("p");
      liel.appendChild(pEl);
      pEl.innerText = i;

      if (i % 2 === 0) {
        pEl.style.backgroundColor = "lightpink";
      } else {
        pEl.style.backgroundColor = "purple";
      }

      if (i === 4) {
        pEl.style.backgroundColor = 'hsl(270, 97%, 30%)';
      }
    }

//orderd list 2

    for (let i=9; i >= 0; i--) {
      const pEl = document.createElement("p");
      liel1.appendChild(pEl);
      pEl.innerText = i;
      pEl.style.textAlign = 'center';

      if (i % 2 === 1) {
        pEl.style.backgroundColor = "lightblue";
      } else {
        pEl.style.backgroundColor = "blue";
      }

      if (i === 8) {
        pEl.style.backgroundColor = 'hsl(270, 97%, 30%)';
      }
    }

//orderd list 3 

    const numbers = ["ett","två","tre","fyra","fem","sex", "sju", "åtta","nio","tio" ];
    console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
      const pEl = document.createElement("p");
      liel2.appendChild(pEl);
      pEl.innerText = numbers[i];
      pEl.style.textAlign = 'end';

      if (i % 2 === 0) {
        pEl.style.backgroundColor = "hsl(278, 73%, 68%)";
      } else {
        pEl.style.backgroundColor = "hsl(200,50%,50%)";
      }

      if (numbers[i] === "sex") {
        pEl.style.backgroundColor = 'hsl(270, 97%, 30%)';
      }

    }
