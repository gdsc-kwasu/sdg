# first things first, do;

### `yarn install`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

Since We're going to be working on this together. Sit tight, Let's walk through the architecture of the project.

[src/](src) is where most of the magic will be made. In it we have [components/](src/components), [containers/](src/containers), [layout/](src/layout), and [utils/](src/utils).

All reusable components should go into the `components/` folder. Reusable in this sense, refers to components that have global scope, some example could be `<Button />`, `<Search />` and `<Card />` components. Feel free to add more.

We shouldn't bloat the files in the `pages/` route. Instead, let's have scoped page/route components in the `containers/`. If you go into the containers folder. You'll see that we have two dummy components, residing in `home/` and `users/`. As we progress you can add more components that are scoped to the pages route in this folder.

> ## Only pages components should be in the `containers/` subdir, please.

To see this, in action. You can open the [`pages/index.js`](pages/index.js), and you'll see how the component is referenced. When you look closely, you'd also see that the way the component is being imported is a bit different.

```js
import React from "react";
import Head from "next/head";
import HomePage from "@containers/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>SDG app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <React.Fragment>
        <HomePage />
      </React.Fragment>
    </>
  );
}
```

Instead of the apparaoch you may be familiar with &mdash; `import component from "../path/to/directory"`, we'd be referencing the component with an import alias like the one below; So you don't have to keep doing `"../../../../"` whenever you need to use a component.

```js
import HomePage from "@containers/home";
```

The `layout/` container is where we'd place any global and reusable layouts of the App. So, when you notice that you're already repeating yourself over and over by creating a certain layout UI. Please move it into this folder. An example could be the `<Sidebar/>` and a `<UserProfile />` component. Merge them together and allow them receive a `reactNode` or `HTMLElement`.

In `utils/`, we can place all our helper functions. Stuffs like image optimization scripts, dummy JSON data, etc.

And lest I forget, we have the [styles/](styles) folder. All the global styles regarding this project will be kept in it. From design tokens with CSS variables to custom animations and some micro-interactions.

## Feel free to ask any question as we progress.

For now, we may be creating issues, and assigning some of you to them. So you get to work on UI implementation of the various screens assigned to you.

The stack we're using for this project is

- Next.js (React)
- Styling &mdash; [styled-components](https://styled-components.com/)

One last thing. If you notice any typos in this README, please feel free to open an issue.
