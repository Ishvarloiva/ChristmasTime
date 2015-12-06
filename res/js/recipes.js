function showCategory(category)
{
	$.ajax(
	{
		url: "",
		data: {category: category},
		success: function(data)
		{
			$("#content_js").empty();
			for(id in data)
			{
				$("#content_js").append(recipes.small({id: id,
					name:data[id].name,
					image:data[id].image,
					description:data[id].description,
					recipe:data[id].recipe});
			}
		}
		dataType: "json"
	});
}