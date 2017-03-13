// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.itemmenu',{
      url: '/itemmenu',
      views:{
        'menuContent' : {
          templateUrl: 'templates/itemmenu.html',
          controller: 'ItemMenuCtrl'
        }
      }
    })
    .state('app.bride',{
      url: '/bride',
      views:{
        'menuContent':{
          templateUrl: 'templates/bride.html',
          controller: 'BrideCtrl'
        }
      }
    })
    .state('app.groom',{
      url: '/groom',
      views:{
        'menuContent':{
          templateUrl: 'templates/groom.html',
          controller: 'GroomCtrl'
        }
      }
    })
    .state('app.other',{
      url: '/other',
      views:{
        'menuContent':{
          templateUrl: 'templates/other.html',
          controller: 'OtherCtrl'
        }
      }
    })
    .state('app.menusingle',{
      url: '/menusingle/:menuId',
      views:{
        'menuContent':{
          templateUrl: 'templates/menusingle.html',
          controller: 'MenuSingleCtrl'
        }
      }
    })
    .state('app.profile',{
      url: '/profile/:profileId',
      views:{
        'menuContent':{
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })
    .state('app.magazine',{
      url: '/magazine',
      views:{
        'menuContent':{
          templateUrl: 'templates/magazine.html',
          controller: 'MagazineCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/magazine');
});
