var images = document.getElementsByClassName("imagens");

for (var i = 0; i < images.length; i++){
    images[i].onclick = function() {
        this.classList.add("hidden");
      };
}