const axios = require("axios");

const mockMails = [
  {
    subject: "Hello world 1!",
    receiver: "nic1@test.com",
    content: "Hello Nic1!",
    _id: "1"
  },
  {
    subject: "Hello world 2!",
    receiver: "nic2@test.com",
    content: "Hello Nic2!",
    _id: "2"
  },
  {
    subject: "Hello world 3!",
    receiver: "nic3@test.com",
    content: "Hello Nic3!",
    _id: "3"
  }
];

const getMails = async () => {
  const mails = (await axios.get("http://localhost:3001/mail")).data.payload;
  return mails;
};

const getSingleMail = async id => {
  const mail = (await axios.get(`http://localhost:3001/mail/${id}`)).data
    .payload;
  return mail;
};

const resolvers = {
  Query: {
    status: () => "Hello world",
    mails: () => getMails(),
    // mail: (_, args, context) => mockMails[0]
    mail: (_, { id }) => getSingleMail(id)
  },
  Mutation: {
    mail: (_, args) => {
      mockMails[1] = args;
      return args;
    }
  }
};

module.exports = resolvers;
