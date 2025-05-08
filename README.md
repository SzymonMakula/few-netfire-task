
## Why Next.js
This is the framework I'm most comfortable with. It's very simple to set up and I really only needed an HTTP server for the React app.
The bootstrap comes with Linter & Typescript & TailwindCSS configuration, another reason for me to use it.

## Why Tailwind
It's very easy to start prototyping. I also really like it's API + it comes pre-shipped in the Next.js boostrap template.

## File structure

### Things that change together are kept together
Here's my reasoning: things that change together should be kept together. This means that utility functions, constant variables and
styles that relate ONLY to a specific code should be kept either in the same file or at least folder as that code. This keeps "global" folders like "hooks"
from blowing up out of proportion. A similar rule applies to components - if a component is only ever really used/designed for some specific page,
then this component should not be treated as reusable. Next.js App's router structure helps me foster that - page related components
are defined in the page directory itself.

Components that have many clients or are clearly reusable are put into a "global" components folder.
I've seen many iterations of this folder structure - I don't think it's that important whether they are called "atoms" or structured in some custom manner - 
what I believe matters is if other developers know they're reusable at a glance.
Here I put things like Buttons/Links/Anchors/Banners to either atoms/organisms, indicating their complexity and "completeness", i.e.
atoms are used for building other components, organisms are pretty much ready-to-go components that just need extra configuration.

## Explanatory comments
I've left some comments at vital parts of the codebase, explaining my reasoning.
To finish my thought - given a more complex Figma, a broader project scope and some UX context - I'd probably make many things
differently, e.g. using component libraries, reducing number of button variants etc. Here I work based on a time-constraint, with the assumption
that this page should only really reflect a Desktop implementation of the Figma design. With much of the context missing,
I intentionally make the components "vague/basic".

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
