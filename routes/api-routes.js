const db = require("../models/Articles.js");
const cheerio = require("cheerio");
const axios = require("axios");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    axios.get("https://hypepotamus.com/").then(function(response) {
      const $ = cheerio.load(response.data);
      const results = [];
      $(".entry-title").each(function(i, element) {
        const title = $(this)
          .children("a")
          .text();
        const link = $(this)
          .children("a")
          .attr("href");
        const result = {
          title: title,
          link: link
        };
        results.push(result);
      });
      res.render("index", { articles: results });
    });
  });
};
