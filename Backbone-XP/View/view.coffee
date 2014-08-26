define [
	"backbone"
], (Backbone) ->
	class ViewQualquer extends Backbone.View

		
		initialize:(options)->
			@el = options.el
			@render()

		events:
			"click #r2":"chamaOr2"

		chamaOr2:->
			alert "r2z"


		render:->
			@$el.html("<button id='r2'>Beleza</button>")


		