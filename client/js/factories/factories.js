app
.factory('UserFactory', function($http) {
	var factory = {};

	factory.create = function(newUser, callback){
		$http.post('/users', newUser).success(function(server_response){
			callback(server_response);
		})
	}
	
	return factory;
})
