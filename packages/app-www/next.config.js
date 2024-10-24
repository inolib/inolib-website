/** @type {import("next").NextConfig} */
export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    cpus: 12,
    workerThreads: false,
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "removeUselessStrokeAndFill",
                    params: {
                      stroke: false,
                      fill: false,
                      removeNone: false,
                    },
                  },
                  "removeXMLNS",
                ],
              },
            },
          },
        ],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
