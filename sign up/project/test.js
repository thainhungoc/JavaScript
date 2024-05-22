function searchProduct() {
    // Get the search input value
    var input = document.getElementById('searchInput').value.toUpperCase();
    // Get all the product titles
    var productTitles = document.getElementsByClassName('product-title');
  
    for (var i = 0; i < productTitles.length; i++) {
      // If the product title matches the search input
      if (productTitles[i].innerHTML.toUpperCase().indexOf(input) > -1) {
        productTitles[i].parentNode.style.display = "";
      } else {
        productTitles[i].parentNode.style.display = "none";
      }
    }
  }
  