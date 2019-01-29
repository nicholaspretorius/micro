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

const resolvers = {
  Query: {
    mails: () => mockMails,
    mail: (_, args, context) => console.log(args, context)
  }
};

module.exports = resolvers;
