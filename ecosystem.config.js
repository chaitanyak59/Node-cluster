module.exports = {
    apps : [{
      name: "Server App",
      instances : "max",
      exec_mode : "cluster",
      script: "./dist/src/index.js",
      env: {
        NODE_ENV: "production",
      }
    }]
  }