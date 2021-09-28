// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = number(prompt(`enter a number`));
if (num % 2 === 0) {
  alert("number is even");
} else {
  alert(`number is odd`);
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number(prompt(`enter a first number`));
let num2 = Number(prompt(`enter a second number`));

if (num1 >= num2) {
  alert("Max Number is : " + num1);
} else {
  alert("Max Number is : " + num2);
}

// 3. Convert the above code using`?` terniary operator

num1 >= num2
  ? alert("Max Number is : " + num1)
  : alert("Max Number is : " + num2);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let house = prompt(`enter house name`);
if (house === `stark`) {
  alert(`winter is coming`);
} else if (house === `lannister`) {
  alert(`A lannister always pays his debt`);
} else {
  alert(" All men must die");
}

// 5. Convert the above code using`?` terniary operator
house === `stark`
  ? alert(`winter is coming`)
  : alert(`A lannister always pays his debt`);

// Switch

switch (house) {
  case "stark":
    alert(`winter is coming`);
    break;
  case "lannister":
    alert(`A lannister always pays his debt`);
    break;
  default:
    alert(" All men must die");
    break;
}
// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = Number(prompt(`enter your month number`));
switch (month) {
  case 1:
    alert(`number of days 31`);
    break;
  case 2:
    alert(`number of days 30`);
    break;
  case 3:
    alert(`number of days 28`);
    break;
  case 4:
    alert(`number of days 30`);
    break;
  case 5:
    alert(`number of days 31`);
    break;
  case 6:
    alert(`number of days 30`);
    break;
  case 7:
    alert(`number of days 31`);
    break;
  case 8:
    alert(`number of days 31`);
    break;
  case 9:
    alert(`number of days 30`);
    break;
  case 10:
    alert(`number of days 31`);
    break;
  case 11:
    alert(`number of days 30`);
    break;
  case 12:
    alert(`number of days 31`);
    break;
}

/* 7.
      - Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
        - `Salary <= 20000` tax is 10 %
        - `Salary <= 40000` tax is 20 %
        - `Salary > 50000` tax is 30 %
      
      */
let salary = Number(prompt(`enter your salary`));
if (salary <= 20000) {
  salary = salary - (salary * 10) / 100;
  alert("Your in-hand Salary after Deduction is: " + salary);
} else if (salary <= 40000) {
  salary = salary - (salary * 20) / 100;
  alert("Your in-hand Salary after Deduction is: " + salary);
} else {
  salary = salary - (salary * 30) / 100;
  alert("Your in-hand Salary after Deduction is: " + salary);
}

//  if..else vs switch

/* 8.
      Implement the condition give below using`if..else` and`switch` statement.
      
        - `marks > 100` alert`"Marks can't be greater than 100"`
        - `marks > 80 && marks < 100` alert`"Grade A"`
        - `marks > 50 && marks < 80` alert`"Grade B"`
        - `marks > 30 && marks < 50` alert`"Grade C"`
        - `marks > 0` alert`"Grade D"`
      
      */
let marks = Number(prompt(`Enter your marks`));
if (marks > 100) {
  alert(`Marks can't be greater than 100`);
} else if (marks > 80 && marks < 100) {
  alert("Grade A");
} else if (marks > 50 && marks < 80) {
  alert("Grade B");
} else if (marks > 30 && marks < 50) {
  alert("Grade C");
} else if (marks > 0) {
  alert("Grade D");
}

// switch (marks) {
//   marks > 100:
// alert(`Marks can't be greater than 100`);
// break;
// marks > 80 && marks < 100:
// alert("Grade A");
// break;
// marks > 50 && marks < 80:
// alert("Grade B");
// break;
// marks > 30 && marks < 50 :
// alert("Grade C");
// break;
// marks > 0:
// alert("Grade D");
// }

/* 9. Weather app
    
      - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
      - If user says`sunny` alert`Wear a T-shirt`
      - If`rainy` alert`Don't forget to take your raincoat`
      - If`hot` alert`Get a hanky`
      - If`freezing` alert`Get your sweeter on`
      - Anything else should alert`Not a valid input`
    */
let weather = prompt(`What is the weather like outside?`);
if (weather == `sunny`) {
  alert(`Wear a shirt`);
} else if (weather == `rainy`) {
  alert(`Don't forget to take your raincoat`);
} else if (weather == `hot`) {
  alert(`Get a hanky`);
} else if (weather == `freezing`) {
  alert(`Get your sweeter on`);
} else {
  alert(`Not a valid input`);
}
