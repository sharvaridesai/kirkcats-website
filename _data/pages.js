const client = require("../utils").contentfulClient;

module.exports = async () => {
  const pages = await client.getEntries({
    content_type: "page",
    order: "fields.navbarPosition",
  });
  return pages.items;
};
