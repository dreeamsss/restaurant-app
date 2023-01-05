const path = require("path");

module.exports = (env) => {
  const modules = {
    images: {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: (f) => {
              let dirNameInsideAssets = path.relative(
                path.join(__dirname, "src"),
                path.dirname(f)
              );
              return `${dirNameInsideAssets}/[name].[ext]`;
            },
          },
        },
      ],
    },
  };

  return {
    modules,
  };
};
