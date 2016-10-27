// conversion to f = (F - 32) * 5/9 = C

var tempF;
var tempC;

tempF = 50;

tempC = (tempF-32)*(5/9);

console.log("Conversion from Fahrenheit to Celcius: "+tempC+"C");

// conversion to c = C * 9/5 + 32 = F

tempC = 30;

tempF = tempC*(9/5)+32;

console.log("Conversion from Celcius to Fahrenheit: "+tempF+"F");