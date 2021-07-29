# express-gpc

A basic Express middleware to support easy detection of the GPC flag
(https://globalprivacycontrol.org/).

```
let express = require('express')
  , detectGPC = require('express-gpc')
  , app = express()
;

app.use(detectGPC());

app.get('/', (req, res) => {
  if (req.globalPrivacyControl) {
    // don't sell this person's data
  }
  else {
    // ah, no privacy for you!
  }
})
```
