$("form").submit(function(e) {

	e.preventDefault();
});

// Intermediate 1 | Manipulating HTML Document 
// Using JQuery selectors select the listed elements bellow and do appropriate manipulation to them:

// Remove the form from the page

 $( "form" ).remove();

// Create 5 new DIVs in the article element

for (var i = 0; i < 5; i++) {
	$( "<div>Test</div>").appendTo( "article" );
}

// Within the input field change the value to "Search for..."

//$("input[value='msg']").val('Search for ...');

// Add a class name of "box" to each new DIV

$( "div" ).addClass( "box" );

// Change the link to "www.codefactory.wien"

$("a" ).attr("href", "https://www.codefactory.wien/");

// Please note: For solving this exercise use the file attached for this section.