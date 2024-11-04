// WHILE LOOP
  let i = 1;
  let sum = 0;
  while (i <= 10){
    //Loop the program until the value of the incrementing var is less than and equal to 10.
    sum += i; //sum=0+1 for i=1 => 1 then sum=1+2 for i=2 => 3....
    console.log (sum)
    i+=1;
  }
  console.log ('The final sum is ', sum)

// REVERSE WHILE LOOP
  let q = 20;
  while (q >= 1){
    console.log(q);
    //Loop the program until the value of the decrementing var is greater than and equal to 1.
    q-=1;
  }
  console.log('End');

  // Printing multiplication tables in reverse order.
  let num = 2;
  let limit = 10;
  while (limit >= 1){
    console.log(num, 'X', limit, '=', num*limit);
    limit-=1;
  }
  console.log('---------\nLIMIT REACHED');

// FOR LOOP
  let newNum = 3;
  let newLimit = 10;
  for (let x = newLimit; x >= 1; x-=1){
    console.log(newNum, 'X', newLimit, '=', newNum*x);
  }
  /*
  let num = 2;
  let limit = 10;
  for (; limit >= 1; limit-=1) {
    console.log(num, 'X', limit, '=', num * limit);
    }
  console.log('---------\nLIMIT REACHED');
  */

  // Prinitng all the even number between the given range
  let initial = 2;
  let final = 26;
  for (let e = initial + 1; e < final; e+=1){
    if (e % 2 == 0){
        console.log(e,' is an even number.');
    }
  }

// DO WHILE LOOP
// Entry Controlled and Exit Controlled
// FOR-OF LOOP