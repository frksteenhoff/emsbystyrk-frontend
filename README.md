# EMS by Styrk

Frontend repository for the website EMS by Styrk. 

## Get started
This project is built using Sveltekit. The boilerplate for this project is forked from the [sanity-sveltekit](https://github.com/sanity-io/get-started-sanity-sveltekit) starter repo.

Fetch repo

```bash
git clone 
```

Install dependencies

```bash
npm install
```

Run project

```bash
npm run dev
```

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


## Deployment
This website is deployed using [Vercel](https://vercel.com/dashboard). Thus, there are two environment: `dev` and `main`.

### Development
On pushes to the `dev` branch of this repository, a build of the website is triggered. The content is exposed on https://emsbystyrk-frontend-git-dev-frksteenhoff.vercel.app

### Production
On pushes to the `main` branch, a build of this website is triggered in Vercel. The content is exposed on https://emsbystyrk.com


## Website content
(Almost) all content on this website is added and updated through [Sanity Studio CMS](www.sanity.io).

Some remnants is still slowly being migrated to Sanity, like images and text that still has no defined schema.

All associated schemas are defined in the repository[emsbystyrk](www.github.com/frksteenhoff/emsbystyrk).

Content published through Sanity will be instantly available in the application. This might change in the future not to exhaust the APIs.