require("dotenv").config();
const contentful = require("contentful");

const contentfulClient = contentful.createClient({
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  space: process.env.CTF_SPACE_ID,
});

exports.contentfulClient = contentfulClient;
