require.config
	baseUrl : '../'

	paths:
		"backbone":"bower_components/backbone/backbone"
		"underscore":"bower_components/underscore/underscore"
		"jquery":"bower_components/jquery/dist/jquery"

	shim:
		"backbone":
			deps:['underscore','jquery']


require ['js/router'], (Router) ->
	router = new Router()

