$(document).ready(function() {
  //document.addEventListener("DOMContentLoaded", function(event) {
  const cardText = $(".card-text");
  //document.getElementsByClassName("card-text");
  for (i = 0; i < cardText.length; i = i + 1) {
    if (!cardText[i].innerHTML) {
      cardText[i].parentNode.remove();
    }
  }
  $(document).on("click", ".submit", function(event) {
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
    const article_id = $(this)
      .parent()
      .parent()
      .parent()
      .children(".card-header")
      .children(".card-title")
      .attr("data-id");
    $.ajax({
      url: "/comment",
      method: "POST",
      data: { name: name, body: body, article_id: article_id } //should update with article id, not title
    }).then(function(response) {
      //checks if updated in api routes
      $(`.card-title[data-id="${article_id}"]`)
        .parent()
        .parent()
        .children(".comments").append(`
          <div class="row" data-id="${response._id}">
            <div class="col">
                <h6>${response.name}</h6>
            </div>
            <div class="col">
                <p>${response.body}</p>
            </div>
            <div class="col">
              <button type="button" class="btn delete btn-danger">Delete</button>
            </div>
          </div>
          `);
    });
  });

  $(document).on("click", ".delete", function(event) {
    const comment_id = $(this)
      .parent()
      .parent()
      .attr("data-id");
    const article_id = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .children(".card-header")
      .children(".card-title")
      .attr("data-id");
    const clickedComment = $(this)
      .parent()
      .parent();
    $.ajax({
      url: "/comment",
      method: "DELETE",
      data: { comment_id: comment_id, article_id: article_id }
    }).then(function(response) {
      if (response.ok === 1) {
        clickedComment.remove();
      }
    });
  });
  //});
});
