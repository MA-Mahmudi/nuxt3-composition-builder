# Nuxt3 composition builder


This package in just a fun project which makes our jub easier. For now, it's just compatible with 
pinia state manager. The in use structure, we found it perfect for our usage in which everything 
is separated from all other things. You can see it [below](#The-structure-is-as-following) 

## Installation 
We recommend you to install the package globally for using it in all your projects.

```
npm install -g nuxt3-composition-builder
```


## Usage
After installation and navigating to your project root directory, just run `nuxt3-composition-builder create <name>`.

### The structure is as following:
```
root-|
     |
     |
     composition-|
                 |
                 |
                 name-|
                      |
                      useName.ts
                      name.store.ts
                      name.interface.ts
                      useName.service.ts
```