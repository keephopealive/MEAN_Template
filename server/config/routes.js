module.exports = function(app) {
  	var users = require('../controllers/users.js');

// User
    // Index
	app.get('/users', function(request, response) { users.index(request, response) })
	// New
	app.get('/users/new', function(request, response) { users.create(request, response) })
	// Show
	app.get('/users/:id', function(request, response) { users.show(request, response) })
	// Edit 
	app.post('/users/:id/edit', function(request, response) { users.update(request, response) })
	// Create
	app.post('/users', function(request, response) { users.create(request, response) })	
	// Destroy app.delete('/users/:id')
	app.post('/users/:id/destroy', function(request, response) { users.destroy(request, response) })
	// Update app.put/patch('/users/:id') 
	app.post('/users/:id/update', function(request, response) { users.update(request, response) })



// WILDCARD Redirect to Mask unused urls.
	app.get('/*', function(request, response){
		response.redirect('/')
	})
	app.post('/*', function(request, response){
		response.redirect('/')
	})

}