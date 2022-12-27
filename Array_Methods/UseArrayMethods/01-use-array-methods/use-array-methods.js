/* eslint-disable no-unused-vars */

const indexAndValue = (arr) => arr.map((value, index) => ({ value, index }));

const capitalize = (str) => str.toUpperCase();

// alternative solution:
{
  const capitalize = "".toUpperCase.call.bind("".toUpperCase);
}

const swapCase = (str) =>
  str
    .split(" ")
    .map((word, i) => (i % 2 ? word : capitalize(word)))
    .join(" ");

const getPopulation = (countries, names) =>
  countries.reduce((accum, country) => {
    if (names.includes(country.name) || names.length === 0) {
      return accum + country.population;
    }
    return accum;
  }, 0);

const extensionSearch = (ext, arr) => arr.filter((file) => file.includes(ext));

// alternative solutions:
{
  const getPopulation = (countries, names) =>
    countries.reduce(
      (acc, { name, population }) =>
        acc + (names.includes(name) || !names.length ? population : 0),
      0
    );
}
{
  const getPopulation = (countries, names) =>
    (names.length ? names : countries.map(({ name }) => name)).reduce(
      (acc, name) =>
        acc + countries.find((country) => country.name === name).population,
      0
    );
}

const keyifyArrayOfObjects = (key, arr) =>
  arr.reduce((accum, superheroObj) => {
    accum[superheroObj[key]] = superheroObj;
    return accum;
  }, {});

// alternative solution:
{
  const keyifyArrayOfObjects = (key, arr) =>
    arr.reduce((acc, heroObj) => ({ ...acc, [heroObj[key]]: heroObj }), {});
}

const powerLevelAverage = (arr) =>
  Math.round(
    arr.reduce((acc, { powerLevel }) => acc + powerLevel, 0) / arr.length
  );

