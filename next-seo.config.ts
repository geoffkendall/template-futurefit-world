import { DefaultSeoProps } from "next-seo"

const description = "Making the world fit for the future — for all life on Earth."
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: "%s | Future-Fit World",
  defaultTitle: "Future-Fit World",
  description,

  openGraph: {
    type: "website",
    locale: "en_IE",
    title: "Future-Fit World",
    description,
  },
  additionalLinkTags: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/favicon/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    },
  ],
}

export default config
