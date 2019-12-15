function hello() {
  document.addEventListener("DOMContentLoaded", function(event) {
    const cardText = document.getElementsByClassName("card-text");
    for (i = 0; i < cardText.length; i = i + 1) {
      console.log(cardText[i].innerHTML);
      if (!cardText[i].innerHTML) {
        console.log(cardText[i].innerHTML);
        cardText[i].parentNode.remove();
      }
    }
  });
}

setTimeout(function(){
    //document.addEventListener("DOMContentLoaded", function(event) {
      const cardText = document.getElementsByClassName("card-text");
      for (i = 0; i < cardText.length; i = i + 1) {
        console.log(cardText[i].innerHTML);
        if (!cardText[i].innerHTML) {
          console.log(cardText[i].innerHTML);
          cardText[i].parentNode.remove();
        }
      }
    //});
  }, 5000);
