$(document).ready(function(){
	//alert("hello world");

	var fetchApi = function(data){
		//alert(data)
		$(".quote").text(data)
	}

	$.get("https://api.github.com/zen", fetchApi)
	//$.get("https://tranquil-headland-8146.herokuapp.com/zen.json", fetchApi)
});

