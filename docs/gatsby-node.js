exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/general`,
    toPath: `/general/colors`,
    redirectInBrowser: true,
    isPermanent: true,
  });
};
