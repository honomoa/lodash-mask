lodash-mask
===========
Mask your partial string

### Instalation

```js
npm install --save https://github.com/honomoa/lodash-mask
```

### Usage
```js
var _ = require('lodash');
require('lodash-mask');

_.mask('WORD'); // it shows "W**D"
_.mask('WORD', '-'); // it shows "W--D"
```
