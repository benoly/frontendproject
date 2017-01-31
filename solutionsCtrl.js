angular.module("coresourcePage").controller("solutionsCtrl", function(){

  $(document).ready(function(){
    $('.parallax').parallax();
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
  });




});

angular.module("coresourcePage")
.controller("solutionsCtrl", function($scope, mainServ){
  $scope.cardinfo = mainServ.solutionsinfo;
  // setInterval(function(){
  //   console.log($scope.attrs);
  // },2000)
});
