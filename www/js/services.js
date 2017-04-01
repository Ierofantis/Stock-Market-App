angular.module('Test.services', [])

.factory('stockDataService', function($q, $http) {
    var getPriceData = function(ticker) {
        var deferred = $q.defer(),
            url = 'http://finance.yahoo.com/webservice/v1/symbols/'+ticker+'/quote?format=json&view=detail'

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
