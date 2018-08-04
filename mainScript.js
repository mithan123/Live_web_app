var negotiation = angular.module("negotiation", ['ngRoute']);

negotiation.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    
    when('/home', {
        templateUrl: 'home.html',
        controller: 'homeController'
    }).
    
    when('/about', {
        templateUrl: 'about-us.html',
        controller: 'aboutcontroller'
    }).
    
    when('/404', {
        templateUrl: '404.html',
        controller: 'fourzerofourcontroller'
    }).

    when('/blog-item', {
        templateUrl: 'blog-item.html',
        controller: 'blogitemcontroller'
    }).

    when('/blog', {
        templateUrl: 'blog.html',
        controller: 'blogcontroller'
    }).

    when('/contact-us', {
        templateUrl: 'contact-us.html',
        controller: 'contactcontroller'
    }).

    when('/Portfolio', {
        templateUrl: 'portfolio.html',
        controller: 'portfoliocontroller'
    }).

     when('/pricing', {
        templateUrl: 'pricing.html',
        controller: 'pricingcontroller'
    }).

     when('/services', {
        templateUrl: 'services.html',
        controller: 'servicescontroller'
    }).

      when('/shortcodes', {
        templateUrl: 'shortcodes.html',
        controller: 'shortcodecontroller'
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);

negotiation.controller('homeController', function($scope){
    console.clear();
    console.log('Home Controller');
});

negotiation.controller('aboutcontroller', function($scope){
    console.clear();
    console.log('About Controller');
});

negotiation.controller('servicesController', function($scope){
    console.clear();
    console.log("Services Controller");
});

negotiation.controller('portfolioController', function($scope){
    console.clear();
    console.log("Portfolio Controller");
});

negotiation.contoller('fourzerofourcontroller', function($scope){
    console.clear();
    console.log("404 Controller")
});

negotiation.controller('shortcodecontroller', function($scope){
    console.clear();
    console.log("Shortcode Controller");
})
negotiation.controller('pricingcontroller', function($scope){
    console.clear();
    console.log("Pricing Controller");
})
negotiation.controller('contactcontroller', function($scope){
    console.clear();
    console.log("Contact Controller");
})
negotiation.controller('blogcontroller', function($scope){
    console.clear();
    console.log("Blog Controller");
})
negotiation.controller('blogitemcontroller', function($scope){
    console.clear();
    console.log("Blog Controller");
})