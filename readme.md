# Sensu.js

[![Dependency Status](https://beta.gemnasium.com/badges/github.com/zinntikumugai/sensu.js.svg)](https://beta.gemnasium.com/projects/github.com/zinntikumugai/sensu.js)
[![license](https://img.shields.io/github/license/zinntikumugai/sensu.js.svg)](https://github.com/zinntikumugai/sensu.js)
[![GitHub top language](https://img.shields.io/github/languages/top/zinntikumugai/sensu.js.svg)](https://github.com/zinntikumugai/sensu.js)


[Sensu.tips](https://Sensu.tips/) API library.

# How to use

## Install

```
npm install sensu.js
```

## use

```javascript
const sensu = require("sensu.js");
const sc = new sensu.Client("APIKEY");

sc.post(["balance","zny"],"z", (err, res, body) => {
    console.log(JSON.parse(body));
});
sc.post(sc.ssplit("balance zny"), "z", (err, res, body) => {
    console.log(JSON.parse(body));
});
sc.post(sc.ssplit("balance znyt"), "z", (err, res, body) => {
    if(res.statusCode !== 200) {
        console.log("Web Err!");
    }else {
        console.log(JSON.parse(body));
    }
});
```
```json
{
  "status": "SUCCESS",
  "currency_name": "BitZeny",
  "balance": "0.00000000",
  "currency_code": "ZNY",
  "message": "あなたの BitZeny の残高は 0.00000000 ZNY です。"
}
```

[![TIPSENSU](https://i.gyazo.com/b036249a517b291cbc2c836d03c9763f.png)](https://shinoharata.github.io/TipSensuWithTwitter/?name=uesitananame55)