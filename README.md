
# Sixpack

This is a practical implementation on webpack bundle called sixpack. if you're new to javascript and coding and don't know what webpack is you can take a look at [this](https://lihautan.com/what-is-module-bundler-and-how-does-it-work/) masterpiece 



## How to Use the Bundler ?

Clone this repository using following command

```bash
  git clone https://github.com/omraval18/sixpack.git
```

    
Install all the dependencies

```bash
  npm install
```


Finally call following command to run the code 

```bash
  node src/index.js
```


## Change Target Files

You can go to the [src/index.js](https://github.com/omraval18/sixpack/blob/main/src/index.js) there you'll see following code at the end

```js
const graph = createGraph("./test/entry.js");
const result = bundle(graph);
console.log(result);

```

here change the route in [createGraph()]() to your file's location.
