//Make request for all recipes of one category.
function showCategory(category)
{
	$.ajax(
	{
		url: "",
		data: {req: "recipe_brief", category: category},
		success: function(data)
		{
			//Empty div with data and append navigation tab with buttons to different categories.
			$("#content_js").empty();
			$("#content_js").append(recipes.navigation);
			
			//Each recipe is then created with template.
			for(column in data)
			{
				//Create div.
				var recipe = "<div class='grid_4'>";

				for(id in data[column])
				{
					//Create page via template and given data.
					recipe += recipes.small({
						id          : id,
						name        : data[column][id].name,
						image       : data[column][id].image,
						description : data[column][id].description});
				}

				//Close div.
				recipe += "</div>";

				//Append to dynamic div.
				$("#content_js").append(recipe);
			}
		},
		dataType: "json"
	});
}

//Show full information about one recipe.
function showRecipe(name, image, id)
{
	$.ajax(
	{
		url: "",
		data: {req: "recipe_text", id: id},
		success: function(data)
		{
			//Empty div with data and append navigation tab with buttons to different categories.
			$("#content_js").empty();
			$("#content_js").append(recipes.navigation);

			//Create page via template and given data.
			$("#content_js").append(recipes.recipe({
					name  : name,
					image : image}));

			//This is slightly bad thing as I didn't manage to make recipe text throught template. So I append it to harc-coded div.
			var recipe = $("<div class='grid_12 left'>" + data["recipe"] + "</div>");

			$("#recipe_text").append(recipe);
		},
		dataType: "json"
	});
}