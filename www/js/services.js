angular.module('Test.services', [])
    // create a new factory
    .factory('StorageService', function($localStorage) {
        $localStorage = $localStorage.$default({
            things: []
        });

        var _getAll = function() {
            return $localStorage.things;
        };
        var _add = function(thing) {
            $localStorage.things.push(thing);
        }
        var _remove = function(thing) {
            $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
        }

        return {
            getAll: _getAll,
            add: _add,
            remove: _remove
        };
    })

// create a new factory
.factory('StorageService', function($localStorage) {
    $localStorage = $localStorage.$default({
        things: []
    });

    var _getAll = function() {
        return $localStorage.things;
    };
    var _add = function(thing) {
        $localStorage.things.push(thing);
    }
    var _remove = function(thing) {
        $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
    }

    return {
        getAll: _getAll,
        add: _add,
        remove: _remove
    };
})


.factory('stockDataService', function($q, $http) {

    var getPriceData = function(ticker) {
        var deferred = $q.defer(),

            url = 'http://finance.yahoo.com/webservice/v1/symbols/' + ticker + '/quote?format=json&view=detail'

        $http.get(url)
            .success(function(jsonData) {
                console.log(jsonData.list);
                var jsonData = jsonData.list.resources[0].resource.fields
                deferred.resolve(jsonData);
            })
            .error(function() {
                deferred.reject();
            })

        url = 'http://finance.yahoo.com/webservice/v1/symbols/' + ticker + '/quote?format=json&view=detail'

        $http.get(url)
            .success(function(jsonData) {
                console.log(jsonData.list);
                var jsonData = jsonData.list.resources[0].resource.fields
                deferred.resolve(jsonData);
            })
            .error(function() {
                deferred.reject();
            })

        return deferred.promise;
    };
    return {
        getPriceData: getPriceData
    }
});
