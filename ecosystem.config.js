module.exports = {
  app: [
    {
      name: "app",
      script: "./app.js",
      output: "/root/.pm2/logs/out.log",
      error: "/root/.pm2/logs/error.log",
      log_type: "json",
      merge_logs: true,
      node_args: "--max_old_space_size=1024",
      max_restarts: 3,
    },
  ],
};
