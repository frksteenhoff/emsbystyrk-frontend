# EMS by Styrk

Frontend repository for the website [EMS by Styrk](https://emsbystyrk.dk). 

This project is built using Sveltekit. The boilerplate for this project is forked from the [sanity-sveltekit](https://github.com/sanity-io/get-started-sanity-sveltekit) starter repo.

## Get started

Fetch repo

```bash
git clone https://github.com/frksteenhoff/emsbystyrk.git
```

Install dependencies

```bash
npm install
```

Run project

```bash
npm run dev
```

## Deployment
This website is deployed using [Vercel](https://vercel.com/dashboard). Thus, there are two environment: `dev` and `main`.

### Development
On pushes to the `dev` branch of this repository, a build of the website is triggered. The content is exposed on https://emsbystyrk-frontend-git-dev-frksteenhoff.vercel.app

### Production
On pushes to the `main` branch, a build of this website is triggered in Vercel. The content is exposed on https://emsbystyrk.dk


## Website content
(Almost) all content on this website is added and updated through [Sanity Studio CMS](www.sanity.io).

_Some remnants is still slowly being migrated to Sanity, like images and text that still has no defined schema._

All associated schemas are defined in the repository[emsbystyrk](www.github.com/frksteenhoff/emsbystyrk).

Content published through Sanity will be instantly available in the application. This might change in the future not to exhaust the APIs.

### What cannot be changed through Sanity?
* Front page image
* Tab titles
* Nav bar items (page names)
* Error messages
* Alt text on images

## Svelte Store
Svelte Store docs: https://svelte.dev/tutorial/auto-subscriptions

In this project, the Svelte store is used to avoid fetching information from the Sanity API too often. This is especially important for the footer which is added on all pages. The footer content is also used on the contact page, which is why it is saved to the store and reused rather than call on each visit.

### Current store objects
| Store object name | Description | Comment |
|--|--|--|
| `footerText` | Footer content | See structure in Sanity |
| `whyEMSObj` | Hvad er EMS information | See structure in Sanity |
| `whatIsEMSObj` | Hvorfor EMS information | See structure in Sanity |


## Colors
All colors are defined in `styles.css`. Throughout the project, we stick to the variables defined here. This way, we avoid having changing definitions and colors throughout the code base. 

Definition:

```bash
--primary-text-color: white; # this gives you a variable --primary-text-color that is white
```

General usage:

```
color: var(name-of-color);
```

Full example

```
color: var(--primary-text-color)
```
