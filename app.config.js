export default {
  expo: {
    name: "Subsfy",
    slug: "Subsfy",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon-subsfy.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash-subsfy.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      bundleIdentifier: "com.subsfy",
      buildNumber: "1.0.0",
      supportsTablet: true
    },
    android: {
      package: "com.subsfy",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/icon-subsfy.png",
        backgroundColor: "#FFFFFF"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    }
  }
}
