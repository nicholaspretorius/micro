module.exports = {
  transport: {
    service: process.env.NM_SERVICE,
    host: process.env.NM_HOST,
    port: process.env.NM_PORT,
    secure: true,
    // auth: {
    //   username: '',
    //   pass: '',
    // },
    auth: {
      type: process.env.NM_AUTH,
      user: process.env.NM_USER,
      clientId: process.env.NM_CLIENT_ID,
      clientSecret: process.env.NM_CLIENT_SECRET,
      accessToken: process.env.NM_TOKEN,
      refreshToken: process.env.NM_REFRESH_TOKEN
    }
  },
  defaults: {
    from: `"Itemly" <${process.env.NM_USER}>`,
    templateDir: "./mailer/templates",
    templateOptions: {
      engine: "PUG",
      engineConfig: {
        doctype: "html",
        debug: true
      }
    }
  }
};
