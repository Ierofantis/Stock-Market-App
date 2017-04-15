angular.module('Test.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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

.controller('MyStocksCtrl', ['$scope',
    function($scope) {

        $scope.myStocksArray = [
            { ticker: "AAPL" },
            { ticker: "FB" },
            { ticker: "NFLX" },
            { ticker: "INTC" },
            { ticker: "C" },
            { ticker: "T" },
            { ticker: "GE" }
        ];
        $scope.todoText = {ticker:''};
        $scope.addTodo = function() {            
            $scope.myStocksArray.push($scope.todoText);
            console.log($scope.myStocksArray)
        };

         $scope.Remove = function(x) {            
            $scope.myStocksArray.splice($scope.myStocksArray.indexOf(x), 1);
        };
    }    
])

.controller('StockCtrl', ['$scope', '$stateParams', '$window', '$ionicPopup', 'StorageService', 'stockDataService',
    function($scope, $stateParams, $window, $ionicPopup, StorageService, stockDataService) {

        $scope.ticker = $stateParams.stockTicker;
        $scope.chartView = 1;

        //local storage
        $scope.things = StorageService.getAll($scope.note);
        $scope.add = function(Note) {
            StorageService.add(newThing);
        };
        $scope.remove = function(thing) {
            StorageService.remove(thing);
        };
        $scope.$on("$ionicView.afterEnter", function() {
            getPriceData();

        });

        $scope.chartViewFunc = function(n) {
            $scope.chartView = n;
        }

        $scope.addNote = function() {
            $scope.note = { title: 'Note', body: '', date: $scope.todayDate, ticker: $scope.ticker }

            // An elaborate, custom popup
            var note = $ionicPopup.show({
                template: '<input type="text" ng-model="note.title" id="stock-note-title"><textarea type="text" ng-model="note.body" id="stock-note-body"></textarea>',
                title: 'New Note For' + '' + $scope.ticker,
                scope: $scope,
                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            console.log("save", $scope.note)
                            StorageService.add($scope.note);
                        }
                    }
                ]
            });
            note.then(function(res) {
                console.log(res)
            });
        };

        function getPriceData() {
            var promise = stockDataService.getPriceData($scope.ticker);
            promise.then(function(data) {
                console.log(data);
                $scope.stockPriceData = data;
            })
        }

    }
]);
