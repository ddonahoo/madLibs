var app = angular.module ('madlibApp');

app.factory('myFactory', function() {

  var myInfo = {};

  return {
    pass: pass,
    result: result
  };

  function pass (propernoun, number1, noun1, adjective1, adjective2, number2, adjective3, noun2, number3, verb, adjective4) {

    myInfo.propernoun = propernoun;
    myInfo.number1 = number1;
    myInfo.noun1 = noun1;
    myInfo.adjective1 = adjective1;
    myInfo.adjective2 = adjective2;
    myInfo.number2 = number2;
    myInfo.adjective3 = adjective3;
    myInfo.noun2 = noun2;
    myInfo.number3 = number3;
    myInfo.verb = verb;
    myInfo.adjective4 = adjective4;
    console.log(myInfo);

  }
  function result() {
    return myInfo;
  }
});
