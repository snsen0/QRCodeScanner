module.exports = {
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'svg'], // Ek asset tiplerini ekleyebilirsiniz.
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
