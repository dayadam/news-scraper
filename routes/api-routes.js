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
          .text();
        results.push(result);
      });
      res.render("index", { articles: results });
    });
  });
};
