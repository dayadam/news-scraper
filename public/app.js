document.addEventListener("DOMContentLoaded", function(event) {
  const cardText = document.getElementsByClassName("card-text");
  for (i = 0; i < cardText.length; i = i + 1) {
    if (!cardText[i].innerHTML) {
      cardText[i].parentNode.remove();
    }
  }
  $(document).on("click", "button", function(event) {
    event.preventDefault();
    const name = $(this)
      .prev()
      .children()
      .children(".name")
      .val();
    const body = $(this)
      .prev()
      .children()
      .children(".body")
      .val();
    const article = $(this)
      .parent()
      .parent()
      .prev()
      .prev()
      .children(".card-title")
      .text();
    $.ajax({
      url: "/comment",
      method: "POST",
      data: { name: name, body: body, article: article }
    }).then(function(response) {});
  });
});
