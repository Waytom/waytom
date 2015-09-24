(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);

    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/home/home.html',
                    title: 'home',
                    settings: {
                        nav: 1,
                        sidebar: true,
                        hide: "",
                        content: '<i class="fa fa-home"></i> Главная'
                    }
                }
            }, {
                url: '/video',
                config: {
                    title: 'video',
                    templateUrl: 'app/video/video.html',
                    settings: {
                        nav: 3,
                        sidebar: true,
                        hide: "!",
                        content: '<i class="fa fa-television"></i> Смотреть видео'
                    }
                }
            }, {
                url: '/cash',
                config: {
                    title: 'cash',
                    templateUrl: 'app/cash/cash.html',
                    settings: {
                        nav: 4,
                        sidebar: true,
                        hide: "!",
                        content: '<i class="fa fa-money"></i> Касса'
                    }
                }
            }, {
                url: '/profile',
                config: {
                    title: 'profile',
                    templateUrl: 'app/profile/profile.html',
                    settings: {
                        nav: 5,
                        sidebar: true,
                        hide: "!",
                        content: '<i class="fa fa-user"></i> Профиль'
                    }
                }
            }, {
                url: '/catalog',
                config: {
                    title: 'catalog',
                    templateUrl: 'app/catalog/catalog.html',
                    settings: {
                        nav: 6,
                        sidebar: true,
                        hide: "!",
                        content: '<i class="fa fa-folder-open"></i> Каталог'
                    }
                }
            }, {
                url: '/news',
                config: {
                    title: 'news',
                    templateUrl: 'app/news/news.html',
                    settings: {
                        nav: 7,
                        sidebar: true,
                        hide: "!",
                        content: '<i class="fa fa-newspaper-o"></i> Новости'
                    }
                }
            }, {
                url: '/rules',
                config: {
                    title: 'rules',
                    templateUrl: 'app/rules/rules.html',
                    settings: {
                        nav: 8,
                        sidebar: true,
                        hide: "!",
                        content: '<i class="fa fa-book"></i> Справка'
                    }
                }
            }, {
                url: '/login',
                config: {
                    title: 'login',
                    templateUrl: 'app/login/login.html',
                    settings: {
                        nav: 1,
                        topnav: true,
                        hide: "",
                        content: '<i class="fa fa-sign-in"></i> Вход'
                    }
                }
            }, {
                url: '/signup',
                config: {
                    title: 'signup',
                    templateUrl: 'app/signup/signup.html',
                    settings: {
                        nav: 2,
                        topnav: true,
                        hide: "",
                        content: '<i class="fa fa-key"></i> Регистрация'
                    }
                }
            }, {
                url: '/',
                config: {
                    templateUrl: 'app/home/home.html',
                    title: 'home',
                    settings: {
                        nav: 3,
                        topnav: true,
                        hide: "!",
                        content: '<i class="fa fa-sign-out"></i> Выход'
                    }
                }
            }
        ];
    }
})();