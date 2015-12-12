function showCategory(category)
{
	$.ajax(
	{
		url: "",
		data: {req: "recipe_brief",category: category},
		success: function(data)
		{
			$("#content_js").empty();
			for(id in data)
			{
				$("#content_js").append(recipes.small({
					id:id,
					name:data[id].name,
					image:data[id].image,
					description:data[id].description}));
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
		data: {req: "recipe_whole", id: id},
		success: function(data)
		{
			$("#content_js").empty();
			$("#content_js").append(recipes.recipe({
					name:name,
					image: image,
					recipe:data[0]});
		},
		dataType: "json"
	});
}