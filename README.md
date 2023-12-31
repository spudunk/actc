This web application is built with the [SvelteKit](https://kit.svelte.dev/) application framework. 

Styling uses [TailwindCSS](https://tailwindcss.com/docs/guides/sveltekit) to streamline development, but standard Svelte styling conventions are also allowed and in some cases implemented for simplicity. 

Automatic deployments are configured using Github Actions and Cloudflare Pages. 

To create preview deployments, create and publish a new branch. The site will be accessible at:
`https://branch-name.actc.pages.dev`

Any updates to the 'main' branch will be automatically deployed to:
`https://actc.pages.dev`. 

`actc.pro` has a CNAME (DNS) record that points to `actc.pages.dev`. 

SSL is handled automatically by Cloudflare. For this to work, the actc.pro CNAME record must be proxied through Cloudflare. This requires using the Cloudflare nameservers.


## Developing

This project uses the [Bun](https://bun.sh/guides/ecosystem/sveltekit) package manager. 

Start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open

# or use the Bun dev server instead of NodeJS (currently builds slower)
bun --bun run dev
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

## Deployment

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

This application is currently configured to host on [Cloudflare Pages](https://pages.cloudflare.com/) with the [Cloudflare adapter](https://kit.svelte.dev/docs/adapter-cloudflare), but the compiled application can be hosted on various platforms with minimal change in configuration. This setup prevents vendor lock-in and allows great flexibility in hosting environments. 

The guide for deploying to Cloudflare Pages can be found here:
[Cloudflare Pages - Get Started](https://developers.cloudflare.com/pages/get-started/guide/#connect-your-git-provider-to-pages)

Future features, such as form handling or image delivery, may require implementing platform specific code. This code should be kept in seperate libraries to maintain seperation of concerns and simplify migration between hosting platforms.

