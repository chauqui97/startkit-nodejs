module.exports = {
  connectionPool: {
    user: process.env.DNA_USER || "user_coreapi",
    password: process.env.DNA_PASSWORD || "123456",
    connectString: process.env.DNA_CONNECTIONSTRING || "",
    poolMin: Number(process.env.DNA_POOLMIN) || 4,
    poolMax: Number(process.env.DNA_POOLMAX) || 12,
    poolIncrement: Number(process.env.DNA_POOLINCREMENT) || 4,
    poolAlias: "DNA",
  },
  connectionPoolDev: {
    user: process.env.DNA_USER || "user_coreapi",
    password: process.env.DNA_PASSWORD || "123456",
    connectString: process.env.DNA_CONNECTIONSTRING || "",
    poolMin: Number(process.env.DNA_POOLMIN) || 4,
    poolMax: Number(process.env.DNA_POOLMAX) || 12,
    poolIncrement: Number(process.env.DNA_POOLINCREMENT) || 4,
    poolAlias: "DNA",
  },
};
