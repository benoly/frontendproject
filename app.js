angular.module("coresourcePage",["ui.router"])

.config(function($urlRouterProvider, $stateProvider){
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "/templates/home.html",
      controller: "homeCtrl"
    })
    .state("about", {
      url: "/about",
      templateUrl: "/templates/about.html",
      controller: "aboutCtrl"
    })
    .state("solutions", {
      url: "/solutions",
      templateUrl: "/templates/solutions.html",
      controller: "solutionsCtrl"
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "/templates/contact.html"
      // controller: "contactCtrl"
    })

    $urlRouterProvider.otherwise("/");

  })
