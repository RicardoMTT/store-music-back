module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ca59d2886b7316a50a2c8e205a614d47'),
    },
  },
});
