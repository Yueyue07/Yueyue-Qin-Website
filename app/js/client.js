const angular = require('angular');
require('angular-ui-router');
const yueyueApp = angular.module('yueyueApp', ['ui.router']);
require('./blogs')(yueyueApp);

yueyueApp.config(['$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.when('', '/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/home.html'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: '/views/resume.html'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: '/views/blog.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/views/contact.html'
      })
      .state('adminBlog', {
        url: '/write/blogs',
        templateUrl: '/views/write_blog.html',
        controller: 'WriteBlogs'
      });
  }
]);
