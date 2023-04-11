'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post("/addShortUrls",controller.home.shortUrl)
  router.get("/:short",controller.home.getShort)
};
