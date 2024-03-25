# sample-node-cli
Dracal // SDK code sample for Node on CLI

## Assumptions

Running this repository requires you to have installed:
- Node (version >= `18`)

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
<img src="https://github.com/Dracaltech/sample-node-vcp/assets/1357711/305ff9ae-2d98-4485-99a6-d09c02523d1e" width=400 />

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
