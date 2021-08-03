module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/ChuckPhilips/react-app",
  plugins: [
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build" },
          { path: "coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
