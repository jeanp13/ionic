/*
 *O Angular disponibiliza no escolpo global o objeto angular, que possui uma série
 *de funções que permite interagir com o framework, entre elas o module que permite
 *criar um módulo. Obs.: Como boa prática, esta deve ser a única variável globao
 *
 injeção da dependências minhasDiretrizes que chama as diretivas criadas
 *ngAnimate que permite aparecer as classes CSS dos eventos Angular
 *ngRoute que permite criar as rotas
 */
angular.module('biblioteca', ['minhasDiretrizes', 'ngRoute',])
        .config(function ($routeProvider, $locationProvider) {

            /* ativa o módulo html5 que permite usar as urls mais limpas sem o 
             * # 
             */

            /* caso este desativado para acessar as rotas deve se usar o #, por 
             * exemplo localhost:3000/#/livros e caso o navegador não tenha 
             * suporte para html5, ele volta a versão anterior automaticamente
             */
            $locationProvider.html5Mode(true);

            /* a partir da rota /livros permite chamar o fragmento de DOM na 
             * pasta partials/principal.html e coloca este fragmento de DOM 
             * sobre a resposanbilidade do LivroController 
             */
            $routeProvider.when('/placas', {
                templateUrl: 'partials/principal.html',
                controller: 'CameraCtrl'
            });

            /* a partir da rota /livros/new permite chamar o framento de DOM na 
             * pasta partials/novo-livro.html e coloca este fragmento sobre 
             * responsabilidade do controller NovoLivroController
             */
            $routeProvider.when('/nova', {
                templateUrl: 'partials/nova-placa.html',
                controller: 'CameraCtrl'
            });

            /* toda rota que não for declarada será considerada inválida, e vai 
             * ativar este método que vai redirecionar para a rota /livros 
             */
            $routeProvider.otherwise({redirectTo: '/placas'});
        });
