function displayProductCategory(){
	var prodCategory = document.getElementById('categoryEntry').value;

		switch (prodCategory) {
			case "C":
				document.getElementById('displayCategory').innerHTML =
				"Category: Clothing";
				break;
			case "E": 
				document.getElementById('displayCategory').innerHTML =
				"Category: Electronics";
				break;
			case "B":
				document.getElementById('displayCategory').innerHTML = 
				"Category: Books";
				break;
			default: 
				window.alert("Invalid Section Category");
				}
}