module.exports = {
  port: Number(process.env.API_PORT) || 3000,
  channelEnableXSSFilterYN: process.env.CHANNEL_ENABLE_XSS_FILTER || "['TTSP', 'MAPP']"
};
