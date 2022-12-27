/*
  Test One
  The test was passing in 'test succeeding' as an argument! Capture that value
  with a parameter also named testOneMessage to get the test to pass.
*/

let testOneMessage = 'test failing';

function testOne(testOneMessage) {
  return testOneMessage;
}


/*
  Test Two
  Reassign the global testTwoMessage variable in the helper function.
*/

let testTwoMessage = 'test failing';

function testTwo() {
  helperFunc();
  return testTwoMessage;
}

function helperFunc(a) {
  testTwoMessage = 'test succeeding';
  return a;
}


/*
  Test Three
  Pass a truthy value into getMessage so it returns the correct message.
*/

let testThreeMessage = 'test failing';

function testThree(testThreeMessage) {
  if (testThreeMessage) {
    testThreeMessage = 'test succeeding';
  }

  let msg = getMessage(1);
  return msg;

  function getMessage(value) {
    if (value) {
      return testThreeMessage;
    }

    return 'test failing';
  }
}


/*
  Test Four
  Change the name of the parameter in doubleInner to prevent the msg in its
  scope from being reassigned to the 'test failing' string.
*/

let testFourMessage = 'test succeeding';

function testFour(msg) {
  function innerFunc(msg) {
    msg = msg

    function doubleInner(ms) {
      testFourMessage = msg;
      return testFourMessage;
    }

    testFourMessage = doubleInner('test failing')
  }

  innerFunc(testFourMessage);

  msg = testFourMessage;
  return testFourMessage;
}