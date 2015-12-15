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
			var column = "column0";
			var div = "<div class='grid_4'>";
			for(id in column)
			{
				div += recipes.small({
					id:id,
					name:id.name,
					image:id.image,
					description:id.description});
			}
			div += "</div>";
			$("#content_js").append(div);
			
			var column = "column1";
			var div = "<div class='grid_4'>";
			for(id in column)
			{
				div += recipes.small({
					id:id,
					name:id.name,
					image:id.image,
					description:id.description});
			}
			div += "</div>";
			$("#content_js").append(div);
			
			var column = "column2";
			var div = "<div class='grid_4'>";
			for(id in column)
			{
				div += recipes.small({
					id:id,
					name:id.name,
					image:id.image,
					description:id.description});
			}
			div += "</div>";
			$("#content_js").append(div);
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