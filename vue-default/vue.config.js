module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete("prefetch"); //prefetch 기능 off
  },
  devServer: {
    proxy: {
      "/oauth2.0": {
        target: "https://nid.naver.com",
      },
    },
  },
};
