angular.module('Eggly', [

])
.controller('MainCtrl', function($scope) {
	$scope.categories = [
		{"id": 0, "name": "Development"},
		{"id": 1, "name": "Design"},
		{"id": 2, "name": "Exercise"},
		{"id": 3, "name": "Humor"}
	];
	$scope.bookmarks = [
		{"id": 0, "title": "thing1", "url":"", "category": "Development"},
		{"id": 1, "title": "thing2", "url":"", "category": "Design"},
		{"id": 2, "title": "thing3", "url":"", "category": "Humor"}
	];
})
;