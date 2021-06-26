storybook helps build components in isolation.

# hierarchy

```shell 
components folder(only shared components) -> widgets(contains components specific to the page and coupling of all the components used in it) -> pages(where API calls happen) 
```

## Structure

```raw
.
├── .husky/                            pre-commit setting
├── .storybook/                       Storybook config folder
├── public/                           Static content to serve
├── src/
│   ├── config/
│   │    └── apiConfig.js              API setup
│   ├── hooks/
│   │    └── useWindowSize.tsx         a mediaQuery hook
│   ├── pages/
│   │    └── *                        Page components, routing is based on file tree
│   ├── redux                          The redux store and configs
│   ├── ui/                           Reusable stateless components based on SCSS with story in 3 different subfolders   
│   │    ├── atoms                    Atom components like Button, Image, Link, Tooltip etc
│   │    ├── components               Card, Hero, Gallery etc, which consume a set of atom components.
│   │    └── widgets                  Wdigets consume a set of components, can be something larger lives in pages.                   
│   └── utils/                        Common client side tools
├── index.jsx                          The app entry point
├── routes.yml                          Where all the app routes are put
├── editorconfig.json                    Editor settings
├── .eslintrc.js                        Linter config 
├── .prettierrc                       Prettier config 
└── package.json                      Application manifest
```

## Development

```shell
npm install

# start dev mode
npm start
```

## Run storybook

```
npm run storybook
```

## Lint

```shell
# run eslint
npm run lint

# run style lint
npm run lint:styled

# autofix certain errors
npm run fix-styles
```