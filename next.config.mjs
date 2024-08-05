import createMDX from "fumadocs-mdx/config";
import { rehypeCode } from "fumadocs-core/mdx-plugins";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  rehypePlugins: [
    rehypeCode,
    {
      tags: ["pre"],
      props: {
        className: "language-tsx",
      },
    },
  ],
};

export default withMDX(config);
