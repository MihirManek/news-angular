/**
 * Created by Jarvis on 1/26/2018.
 */
angular.module('app.config',[])
    .constant('api',{
        'url':'https://newsapi.org/v2/',
        'port':'80',
        'apiKey':'a5a15e15f87d4e4ab11cdf875bcb6716'
    })
    .constant('topHeadlines','top-headlines')
;