# Nuxt3 composition builder


This package is just a fun project which makes our job easier. For now, it's just compatible with 
pinia state manager. About the structure, we found it perfect for our usage in which everything 
is separated from all other things. 
You can see it [below](#The-structure-is-as-following).

## Installation 
We recommend you to install the package globally for using it in all your projects; For the best user experience it's better to set an alias for the command.

```
npm install -g nuxt3-composition-builder
```


## Usage
After installation and navigating to your project root directory, just run `nuxt3-composition-builder create <name>`.

### The structure is as following:
```
├── src
│   ├── composables
│      ├── [NAME]
│         ├── useName.ts
│         ├── name.store.ts
│         ├── name.interface.ts
│         └── name.service.ts
│
├── node_modules
├── package.json
└── package-lock.json
```

## TO-DO

- [ ] Build multiple composition APIs
- [ ] Support VueX
