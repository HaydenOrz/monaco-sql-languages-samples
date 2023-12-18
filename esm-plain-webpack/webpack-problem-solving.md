## process is not defined

### error log in browser

```log
Uncaught ReferenceError: process is not defined
```

### Solution

Define `process.env` in `webpack.config.ts`

```javascript
const webpack = require('webpack');

// https://vitejs.dev/config/
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_DEBUG': process.env.NODE_DEBUG,
        })
    ],
}
```
Don't define the entire Process.env! This time it will cause weird problems in this project. Just define `process.env.NODE_DEBUG`, and everything works well!