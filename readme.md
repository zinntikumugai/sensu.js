# Sensu.js

[Sensu.tips](https://Sensu.tips/) API library.

# How to use

## Install

comming soon...

## use

```
const sensu = require("sensu.js");
const sc = new sensu.Client("APIKEY");

sc.post(["balance","zny"],"z", (err, res, body) => {
    console.log(JSON.parse(body));
});
```
```
{ status: 'SUCCESS',
  currency_name: 'BitZeny',
  balance: '0.00000000',
  currency_code: 'ZNY',
  message: 'あなたの BitZeny の残高は 0.00000000 ZNY です。' }
```

![[TIPSENSU](https://shinoharata.github.io/TipSensuWithTwitter/?name=uesitananame55)](https://i.gyazo.com/b036249a517b291cbc2c836d03c9763f.png)