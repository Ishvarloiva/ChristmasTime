function showCategory(type)
{
	$.get(
	{
		url: "",
		data: {type: type},
		succes: function(data)
		{
			alert("yep");
		}
	});
}