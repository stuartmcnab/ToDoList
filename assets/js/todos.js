// put a line through a to do to show its done but keep it on the list by changig its class to completed from the custom css
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete the item from the list with a fadeout function, after the fadeout is complete, remove the item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//get the text from the input field
		var todoText = $(this).val();
		$(this).val("");
		//put the text from the input field in a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});