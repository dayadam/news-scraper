const cheerio = require("cheerio");
const axios = require("axios");

// Routes
// =============================================================
module.exports = function(app, db) {
  app.get("/", function(req, res) {
    axios.get("https://hypepotamus.com/").then(function(response) {
      const $ = cheerio.load(response.data);
      const results = [];
      $(".entry-title").each(function(i, element) {
        const result = {};
        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");
        result.snippet = $(this)
          .parent()
          .next()
          .children("p")
          .text(); //|| "No snippet available";
        db.Articles.findOne({ link: result.link })
          .populate("comments")
          .then(function(answer) {
            if (answer !== null) {
              results.push(answer);
            } else {
              db.Articles.create(result).then(function(dbres) {
                results.push(result);
              });
            }
          });
      });
      //db.Articles.updateMany({snippet: ""}, {snippet: "No snippet available"})
      res.render("index", { articles: results });
    });
  });

  app.post("/comment", function(req, res) {
    db.Comments.create({
      name: req.body.name,
      body: req.body.body
    }).then(function(response) {
      db.Articles.update(
        { title: req.body.article },
        { $push: { comments: response._id } }
      ).then(function(answer) {
        console.log(answer);
      });
    });
  });
};
