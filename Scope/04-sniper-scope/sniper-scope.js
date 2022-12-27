// notice that bond is defined in the global scope!
let bond = '007';

/*
  No surprise that AgentinScope in oddJob is true. No code is run that changes
  the value stored in the global bond variable, and there is no locally-scoped
  bond variable with a different value.
*/

function oddJob() {
  let AgentinScope = (bond === '007');
  let prediction = true;

  return AgentinScope === prediction;
}


/*
  goldFinger has a parameter named bond. A parameter is a part of a
  function's local scope, so whenever bond is referenced inside of goldFinger,
  the function will be accessing the argument passed into the function as the
  bond parameter. In this case, when the function is called by the test, no
  value is passed in as an argument. This means that the locally-scoped bond
  parameter is undefined.
*/

function goldFinger(bond) {
  let AgentinScope = (bond === '007')
  let prediction = false;

  return AgentinScope === prediction;
}


/*
  No locally-scoped bond variable or parameter in scaramanga, so when it
  accesses bond, it reaches out to the global bond variable, which is still
  equal to '007'.
*/

function scaramanga(target) {
  target = bond;

  let AgentinScope = (bond === '007')
  let prediction = true;

  return AgentinScope === prediction;
}


/*
  No suprises here, either. drNo clearly redefines the bond variable locally
  as 'Body Double', which is definitely not equal to '007'.
*/

function drNo() {
  let bond = 'Body Double';

  let AgentinScope = (bond === '007');
  let prediction = false;

  return AgentinScope === prediction;
}


/*
  The behavior in jaws may surprise you. As you learn more about how
  JavaScript handles the assignment of primitive values (like strings), this
  behavior will be easier to anticipate. When we assign the string from one
  variable into a second variable, a copy of that string value is stored in the
  second variable. It doesn't matter if the first variable is subsequently
  assigned a new value; that second variable will always have the original copy
  of string until the second variable is reassigned. This behavior is covered at
  length in our Pass-by-value, Pass-by-reference unit.
*/

function jaws() {
  let agent = bond;
  bond = 'Body Double';

  let AgentinScope = (agent === '007');
  let prediction = true;

  return AgentinScope === prediction;
}


/*
  The behavior in elChiffre is really surprising! Throughout this problem, we've
  grown accustomed to the fact that the global bond variable is assigned to the
  value '007'. But if you console.log the value of bond at the beginning of
  elChiffre, bond is now equal to 'Body Double'. When was our global variable
  redefined? Remember that the tests run all of the functions in this file
  in the order in which they're defined.
*/

function elChiffre() {
  let agent = bond;
  bond = 'Body Double';

  let AgentinScope = (agent === '007');
  let prediction = false;

  return AgentinScope === prediction;
}