var myBirthday, myAgeInDays, thisYear;
// get data from user
myBirthday = prompt("What is your year of birth?", "1374");
thisYear = prompt("What year is it now?", "1401");

myAgeInDays = (thisYear - myBirthday) * 365;

// show results to user
alert("My age in days is: " + myAgeInDays);
alert("Am I older than 25? : " + (myAgeInDays > 9125));
