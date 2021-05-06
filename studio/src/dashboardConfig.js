export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "609430216a59f200b635d388",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-j1dr4b9f",
                  apiId: "5d294c9a-818a-4983-a9e0-d4f49efa7c2e",
                },
                {
                  buildHookId: "60943021170cf800d8c4b8f8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ut6vfo7x",
                  apiId: "92478d47-fb8e-4bc8-a344-1f4cccff8f8c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Hamzah-syed/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ut6vfo7x.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
