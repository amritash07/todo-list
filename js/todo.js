$("ul").on("click","li",function()
{
$(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(500,function()
		{
			$(this).remove();
		});
	event.stopPropogation();
});
$("input[type='text']").keypress(function(event)
{
	if(event.which===13)
	{
		var todo=$(this).val();
		$(this).val("");
		$("ul").append("<li><span> X </span>" +   todo  +  "</li>")
	}
});
$(".fa").click(function()
{
	$("input[type='text']").fadeToggle()
})