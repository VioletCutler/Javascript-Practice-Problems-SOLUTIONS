/*
  if sum is a global variable, every time we call the function, we're updating
  its value! If sumThingsWrong is only called once, it will work as expected.
  But if we call it a second time the next time, sum may have been reassigned to
  a value other than zero, which will throw off the results!
  the point here is to avoid referencing global variables unless there's no
  other way to approach the problem at hand. functions work best when we can
  rely on them to always return the same output given the same input. if
  functions rely on global variables with dynamic values, we can't rely on our
  functions working the same way every time.
*/

function sumThingsWrong(num1, num2) {
  let sum = 0;

  sum += num1;
  sum += num2;

  return sum;
}