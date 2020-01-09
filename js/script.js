var elemento;

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    elemento = "FizzBuzz";
  } else if (i % 3 == 0 ) {
    elemento = "Fizz";
  } else if (i % 5 == 0 ) {
    elemento = "Buzz";
  } else {
    elemento = i;
  }
  document.getElementById('lista').innerHTML += "<li>" + elemento + "</li>";
}
