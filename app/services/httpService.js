/**
 * Created by Jarvis on 1/26/2018.
 */
app.service('httpService', ['$http','$q','api','topHeadlines', function($http,$q,api,topHeadlines) {

    this.hitUrl = function(data) {
        var deferred = $q.defer();
        data.apiKey= api.apiKey;
        data.pageSize=5;
        var req = {
            method: 'GET',
            url: api.url + topHeadlines,
            params: data
        };
        $http(req)
            .then(function(response){
                deferred.resolve(response);
            }, function(e){
                deferred.resolve(e);
            });
        return deferred.promise;
    };

}]);