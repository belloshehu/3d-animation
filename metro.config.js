// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
config.resolver = {
	...config.resolver,
	assetExts: [...(config.resolver.assetExts || []), "glb"],
	sourceExts: [...(config.resolver.sourceExts || []), "glb"],
};

module.exports = config;

// const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

// const defaultConfig = getDefaultConfig(__dirname);

// /**
//  * Metro configuration
//  * https://metrobundler.dev/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {
// 	resolver: {
// 		// This makes it possible to import .glb files in your code:
// 		assetExts: [...(defaultConfig.resolver?.assetExts || []), "glb"],
// 	},
// 	transformer: { unstable_allowRequireContext: true },
// };

// module.exports = mergeConfig(defaultConfig, config);

// const {getDefaultConfig} = require('expo/metro-config');

// const { mergeConfig, getDefaultConfig } = require("@react-native/metro-config");

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = {
// 	resolver: {
// 		sourceExts: ["js", "jsx", "json", "ts", "tsx", "cjs", "mjs"],
// 		assetExts: ["glb", "gltf", "png", "jpg"],
// 	},
// 	transformer: { unstable_allowRequireContext: true },
// };

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
