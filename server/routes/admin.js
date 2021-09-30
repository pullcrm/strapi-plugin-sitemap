'use strict';

module.exports = {
  type: 'admin',
  routes: [
    {
      method: "GET",
      path: "/",
      handler: "Sitemap.buildSitemap",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/presence",
      handler: "Sitemap.hasSitemap",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/settings",
      handler: "Sitemap.getSettings",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/settings",
      handler: "Sitemap.updateSettings",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/pattern/allowed-fields",
      handler: "Sitemap.allowedFields",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/pattern/validate-pattern",
      handler: "Sitemap.validatePattern",
      config: {
        policies: [],
      },
    },
  ],
};
