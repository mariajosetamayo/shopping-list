$(document).ready(function(){
	$("#js-shopping-list-form").submit(function(event){
		event.preventDefault();
		if ($("#shopping-list-entry").val() !== "") {
			$(".shopping-list").append(
				"<li>" + "<span class='shopping-item'>" + $("#shopping-list-entry").val() + "</span>" + "<div class='shopping-item-controls'>" + "<button class='shopping-item-toggle'>" + "<span class='button-label'>check" + "</span>" + "</button>" + " " + "<button class='shopping-item-delete'>" + "<span class='button-label'>delete" + "</span>" + "</button>" + "</div>" + "</li>"
				);
		}
		$(this)[0].reset();
	});

// to remove an item

$(".shopping-list").on("click", ".shopping-item-delete",function(){
	$(this).closest("li").remove();
});

// to check out an item

$(".shopping-list").on("click", ".shopping-item-toggle",function(){
	$(this).closest("li").children(".shopping-item").toggleClass("shopping-item__checked");
});

	
	// var hasItBeenClicked = false
	// $(".shopping-item-delete").on("click", function(event) {
	// 	hasItBeenClicked = true
	// 	console.log(hasItBeenClicked)
	// })

	// $(".shopping-list").on("click", "li", function(event){
	// 	console.log(hasItBeenClicked)
	// 	if (hasItBeenClicked) {
	// 		$(this).remove();
	// 		hasItBeenClicked = false
	// 	}
	// });

	// var hasItBeenClicked2 = false
	// $(".shopping-item-toggle").on("click", function(event){
	// 	hasItBeenClicked2 = true
	// 	console.log(hasItBeenClicked2)
	// })

	// $(".shopping-list").on("click", "li", function(event){
	// 	console.log(hasItBeenClicked2)
	// 	if (hasItBeenClicked2) {
	// 		$(this).children(".shopping-item").toggleClass("shopping-item__checked");
	// 		hasItBeenClicked2 = false
	// 	}
	// });
	

});