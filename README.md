# sample-node-cli
Dracal // SDK code sample for Node on CLI

## Assumptions

Running this repository requires you to have installed:
- Node (version >= `18`)
- DracalView (version >= `3.2.x`)
  - Specifically, `dracal-usb-get` needs to be accessible from your `PATH` environment variable (more info in the [documentation how-to](https://www.dracal.com/en/programmers_howto/#dracal-usb-get)).

Script may need to be adjusted depending on your instrument's # of outputs _(currently assumed: 3 outputs)_. See script comments for details.

Ideally, you've also installed `yarn` package manager:
```
npm install -g yarn
```

## Simple usage

Install dependencies
```
yarn  //you can also use `npm install` if you prefer
```

Run script
```
yarn start  //or `npm run start`
```

## Sample output
<img src="https://github.com/Dracaltech/sample-node-cli/assets/1357711/89afe858-7314-4acc-9633-73f848068e52" width=400 />

```
Ξ dracal/sample-node-cli git:(main) ▶ yarn start
yarn run v1.22.21
$ node -r @babel/register app.js
Temperature.(C): 100.11
RH..........(%): 20.85
Pressure..(kPa): 52.87
Temperature.(F): 212.198
Done in 0.59s.
Ξ dracal/sample-node-cli git:(main) ▶
```
