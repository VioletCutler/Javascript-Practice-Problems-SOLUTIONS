/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('mapReduce', () => {
  it('maps over an array', () => {
    expect(
      mapReduce([1, 2, 3, 4], (a) => {
        return a * 5;
      })
    ).toEqual([5, 10, 15, 20]);

    expect(
      mapReduce(['I', 'AM', 'RUNNING', 'LATE'], (str) => {
        return str.toLowerCase();
      })
    ).toEqual(['i', 'am', 'running', 'late']);
  });

  it('does not use Array.prototype.map', () => {
    spyOn(Array.prototype, 'map').and.callThrough();

    expect(
      mapReduce(['I', 'AM', 'RUNNING', 'LATE'], (str) => {
        return str.length;
      })
    ).toEqual([1, 2, 7, 4]);

    expect(Array.prototype.map.calls.count()).toBe(0);
  });

  it('correctly uses Array.prototype.reduce', () => {
    spyOn(Array.prototype, 'reduce').and.callThrough();

    expect(
      mapReduce([5, 10, 15, 20, 25, 30], (num) => {
        return num + 2;
      })
    ).toEqual([7, 12, 17, 22, 27, 32]);

    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});

describe('everyReduce', () => {
  it('returns true if the array is empty', () => {
    expect(
      everyReduce([], (val) => {
        return val;
      })
    ).toBe(true);
  });
  it('returns true if every value in the array passes the test implemented by the callback (predicate) function', () => {
    expect(
      everyReduce([1, 3, 4, 2], (num) => {
        return num < 3;
      })
    ).toBe(false);

    expect(
      everyReduce([10, 20, 30, 40], (num) => {
        return num >= 9;
      })
    ).toBe(true);
  });

  it('does not use Array.prototype.every', () => {
    spyOn(Array.prototype, 'every').and.callThrough();

    expect(
      everyReduce(['hello', 'world'], (str) => {
        return str.length > 3;
      })
    ).toBe(true);

    expect(Array.prototype.every.calls.count()).toBe(0);
  });

  it('correctly uses Array.prototype.reduce', () => {
    spyOn(Array.prototype, 'reduce').and.callThrough();

    expect(
      everyReduce(['hello', 'to', 'world'], (str) => {
        return str.length < 3;
      })
    ).toBe(false);

    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});
