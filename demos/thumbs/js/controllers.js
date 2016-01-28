angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Weezer', subTitle: 'Blue Album', img:'http://ionicframework.com/img/docs/blue-album.jpg', id: 1 },
    { title: 'Smashing Pumpkins', subTitle:'Siamese Dream', img:'http://ionicframework.com/img/docs/siamese-dream.jpg', id: 2 },
    { title: 'Beastie Boys',subTitle:'License to ILL',img:'http://ionicframework.com/img/docs/license-to-ill.jpg', id: 4 },
    { title: 'Green Day',subTitle:'Dookie', img:'http://ionicframework.com/img/docs/dookie.jpg', id: 5 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
