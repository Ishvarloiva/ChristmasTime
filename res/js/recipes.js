function showCategory(category)
{
	$.ajax(
	{
		url: "",
		data: {req: "recipe_brief",category: category},
		success: function(data)
		{
			$("#content_js").empty();
			$("#content_js").append(recipes.navigation);
			
			for(column in data)
			{
				var div = "<div class='grid_4'>";
				for(id in data[column])
				{
					div += recipes.small({
						id:data[column][id],
						name:data[column][id].name,
						image:data[column][id].image,
						description:data[column][id].description});
				}
				div += "</div>";
				$("#content_js").append(div);
			}
		},
		dataType: "json"
	});
}

function showRecipe(name, image, id)
{
	$.ajax(
	{
		url: "",
		data: {req: "recipe_text", id: id},
		success: function(data)
		{
			$("#content_js").empty();
			$("#content_js").append(recipes.navigation);
			var obj = $("<div class='grid_12 left'>" + data["recipe"] + "</div>");
			$("#content_js").append(recipes.recipe({
					name:name,
					image:image}));
			$("#recipe_text").append(obj);
		},
		dataType: "json"
	});
}