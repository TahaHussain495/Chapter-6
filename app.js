
// a

// the value of a++ :12

// b

// the value of a++ : 11

// c

// the value of --a : 10

// d

// the value of a-- : 11


// 2

// a=2
// b=1

// c= --a - --b + ++b + b--;

// console.log(c)

// 1   -  0  + 1   + 1


// --a; 1
// --a - --b; 1 - 0
// --a - --b + ++b; 1 - 0 + 1
// --a - --b + ++b + b--; 1 - 0 + 1 + 0





 //1. +prompt("Enter any number:")
//   let displayNum = 10
//   document.write("<b>Result:</b>\n<p>The value of a is:"+displayNum+"</p>")
//   document.write("<p>........................................</p>")
//   let pre_increment = ++displayNum
//   document.write("<p>The value of ++a is: "+pre_increment+"</p>")
//   document.write("<p>Now the value of a is: "+displayNum+"</p>")

//  let post_increment = displayNum++
//   document.write("<p>The value of a++ is: "+pre_increment+"</p>")
//   document.write("<p>Now the value of a is: "+displayNum+"</p>")

//  let pre_dicrement = --displayNum
//  document.write("<p>The value of --a is: "+pre_dicrement+"</p>")
//  document.write("<p>Now the value of a is: "+displayNum+"</p>")

//  let post_dicrement = displayNum--
//  document.write("<p>The value of a-- is: "+post_dicrement+"</p>")
//  document.write("<p>Now the value of a is: "+displayNum+"</p>")

//  //2.
//  var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
//  console.log("a: " + a); // 1
//  console.log("b: " + b); // 0
//  console.log("result: " + result); // 3

//  //3.
//  let userName = prompt("Enter your name:");
//  document.write("<h3>Hello, " + userName + "! Welcome to our website.</h3>");

//  4.
//  let tableNumber = +prompt("Enter a number for the multiplication table:")||5;
//  document.write("<h3>Multiplication Table of " + tableNumber + "</h3>");
//  for (let i = 1; i <= 10; i++) {
//      document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
//  }

// 5.
// let subject1 = prompt("Enter first subject name:");
// let subject2 = prompt("Enter second subject name:");
// let subject3 = prompt("Enter third subject name:");
// let totalMarks = 100;
// let obtained1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// let obtained2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// let obtained3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));
// let percentage1 = (obtained1/totalMarks)*100
// let percentage2 = (obtained2/totalMarks)*100
// let percentage3 = (obtained3/totalMarks)*100

// let totalObtained = obtained1 + obtained2 + obtained3;
// let percentage = (totalObtained / (totalMarks * 3)) * 100;

// document.write("<h3>Subject Marks and Percentage</h3>");
// document.write("<table ><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th> <th>Percentage</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtained1 + "</td><td>"+ percentage1.toFixed(2) +"%</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtained2 + "</td><td>"+ percentage2.toFixed(2) +"%</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtained3 + "</td><td>"+ percentage3.toFixed(2) +"%</td></tr>");
// document.write("<tr><td></td>")
// document.write("<td>" + totalMarks *3 + "</td>")
// document.write("<td>" + totalObtained + "</td>")
// document.write("<td>" + percentage.toFixed(2) + "%</td>")
// document.write("</table>");