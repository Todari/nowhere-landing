const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  // webpack: {
  //   configure: {
  //     resolve: {
  //       fallback: {
  //         path: require.resolve("path"),
  //         os: require.resolve("os-browserify/browser"),
  //         buffer: require.resolve("buffer"),
  //         url: require.resolve("url"),
  //         stream: require.resolve("stream-browserify"),
  //         assert: require.resolve("assert"),
  //         querystring: require.resolve("querystring"),
  //         child_process: false,
  //         ffmpeg: false,
  //         async_hooks: false,
  //         fs: false,
  //         tls: false,
  //         net: false
  //         // crypto: require.resolve("crypto-browserify"),
  //         // stream: require.resolve("stream-browserify"),
  //       },
  //     },
  //   },
  // },
  plugins: [

    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.resolve.fallback = {
            "fs": false,
            "stream": false,
            "net": false,
            "http": false,
            "tls": false,
            "querystring": false,
            "util/types": false,
            "worker_threads": false,
            "zlib": false,
            "console": false,
            "diagnostics_channel": false,
            "perf_hooks":false,
            "child_process": false,
            "ffmpeg-static": false,
            "async_hooks": false,
          }
          webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));
          return webpackConfig;
        },
      },
      // options: {
      //   resolve: {
      //     fallback: {
      //       "stream": false,
      //       "soundcloud.ts": false,
      //       "fs": false,
      //       "child_process": false,
      //       "ffmpeg-static": false,
      //       "async_hooks": false,
      //     },
      //     mainFiles: ['index', 'Cesium']
      //   }
      // }
    },
  ],
};