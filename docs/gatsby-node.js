exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/general`,
    toPath: `/general/colors`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/layout`,
    toPath: `/layout/grid`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/navigation`,
    toPath: `/navigation/menu`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/dataEntry`,
    toPath: `/dataEntry/input`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/dataDisplay`,
    toPath: `/dataDisplay/tag`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/feedback`,
    toPath: `/feedback/toast`,
    redirectInBrowser: true,
    isPermanent: true,
  });
};
