/**
 * Created by hunter on 15-10-21.
 */
    var YO = angular.module('YOtest',[]);
        YO.controller('firstController',function ($scope) {
            $scope.list = [{
                name:'list1'
            },{
                name:'list2'
            },{
                name:'list3'
            }];
            $scope.targetName = function (this_) {
                alert(this_.innerHTML)
            }
        })