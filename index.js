function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);

  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

function promptTemperature() {
  const fahrenheit = parseFloat(prompt("Enter a temperature in Fahrenheit"));
  if (!isNaN(fahrenheit)) {
    const celsius = convertToCelsius(fahrenheit).toFixed(1);
    const message = describeTemperature(fahrenheit);
    alert(`${fahrenheit}°F is ${celsius}°C, which is ${message}.`);
  } else {
    alert("Please enter a valid number");
  }
}

promptTemperature();
