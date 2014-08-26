define [
	'backbone'
	'js/view'
], (Backbone,ViewQualquer)->

	class router extends Backbone.Router
		initialize:->
			Backbone.history.start()

		routes:
			"":"primeiraView"

		primeiraView:->
			view = new ViewQualquer(el : $("#container"))
			





