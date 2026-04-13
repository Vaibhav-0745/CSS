var app = angular.module("myApp", []);
app.controller("studentCtrl", function($scope) {
    $scope.students = [
        {name : "Charlie", rollno : 3, marks : 78},
        {name : "Alice", rollno : 1, marks : 85},
        {name : "Bob", rollno : 2, marks : 90}
        
    ];
});