angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  $scope.getMessages = function(){
    messageService.getMessages().then(function(response) {
      $scope.messages = response.data;
    });
  };
  //The getMessages function will call the getData method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)
$scope.postMessage = function(message){
  messageService.postMessage(message);
  $scope.message = '';
};
$scope.getCookie = function(){
  messageService.getCookie().then(function(response) {
    $scope.cookies = response.data;
  });
};


  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.



  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
    setInterval(function(){
     $scope.getMessages();

   }, 1500);

});
