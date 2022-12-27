let planet = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(country) {
    return innerFunction('New York State');

    function innerFunction(state) {
      var city = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + planet + ', ' + country + ', ' + state + ', ' + city;
      }
    }
  }
}

// the alternate solution below takes advantage of ES6 string interpolation
function fullstackHQ2(){
  return middleFunction('United States');

  function middleFunction(country) {
    return innerFunction('New York State');

    function innerFunction(state) {
      var city = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        // note the use of back-ticks (`) instead of normal quotes (')
        return `Fullstack HQ is at ${planet}, ${country}, ${state}, ${city}`;
      }
    }
  }
}