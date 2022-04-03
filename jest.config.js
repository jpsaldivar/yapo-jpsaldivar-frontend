module.exports = {
    moduleNameMapper: {
        /* Handle CSS imports (with CSS modules)
        https://jestjs.io/docs/webpack#mocking-css-modules */
        //"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

        // Handle CSS imports (without CSS modules)
        "^.+\\.(css|sass|scss)$": "<rootDir>/_mocks_/styleMock.js",

        /* Handle image imports
        https://jestjs.io/docs/webpack#handling-static-assets */
        "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/_mocks_/fileMock.js"
    },
    collectCoverageFrom: [
        "src/*/.{js,jsx,ts,tsx}",
        "!src/app/*.js",
        "!*/.d.ts",
        "!*/node_modules/*",
      ],
      coverageThreshold: {
        "./src/*/.js": {
          branches: 50,
          functions: 50,
          lines: 50,
          statements: -10,
        },
      },
    testEnvironment: "jsdom",
}