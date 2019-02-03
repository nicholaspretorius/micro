const axios = require("axios");

const host = "http://localhost";
const port = process.env.DB_PORT;
const url = `${host}:${port}`;

const get = async path => (await axios.get(`${url}/${path}`)).data.payload;

const post = async (path, body) =>
  (await axios.post(`${url}/${path}`, { ...body })).data.payload;

// const getMails = async () => {
//   const mails = (await axios.get(`${url}/mail`)).data.payload;
//   return mails;
// };

// const getSingleMail = async id => {
//   const mail = (await axios.get(`${url}/mail/${id}`)).data.payload;
//   return mail;
// };

// const sendMail = async body => {
//   const mail = (await axios.post(`${url}/mail`, { ...body })).data.payload;

//   return mail;
// };

const resolvers = {
  Query: {
    status: () => "Hello world",
    mails: () => get("mail"),
    // mail: (_, args, context) => mockMails[0]
    mail: (_, { id }) => get(`mail/${id}`)
  },
  Mutation: {
    mail: (_, args) => post(`mail`, args)
  }
};

module.exports = resolvers;
