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
    status: () => "Hello world",
    mails: () => mockMails,
    mail: (_, args, context) => mockMails[0]
  },
  Mutation: {
    mail: (_, args) => {
      mockMails[1] = args;
      return args;
    }
  }
};

module.exports = resolvers;
