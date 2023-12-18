# Problem-Solving in Vite

## util is not found

### error log in browser

```log
Uncaught TypeError: Cannot read properties of undefined (reading 'custom')
```

### Solution

Install util package

```bash
npm install util
```

## process is not defined

### error log in browser

```log
Uncaught ReferenceError: process is not defined
```

### Solution

Define `process.env` in `vite.config.ts`

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
});
```

## Failed to load web-worker

### error log in browser

```log
Error: Unexpected usage at _EditorSimpleWorker.loadForeignModule (editorSimpleWorker.js:460:31) at webWorker.js:38:30
```

### Solution

Transform worker file

1. create a worker file, e.g. named flinksql.worker.ts

```typescript
import "monaco-sql-languages/out/esm/flinksql/flinksql.worker";
```

2. import the transformed worker file

```typescript
import FlinkSQLWorker from "./flinksql.worker?worker";
(self as any).MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === LanguageIdEnum.FLINK) {
      return new FlinkSQLWorker();
    }
  },
};
```

## assert is not found

### error log in browser

```log
Uncaught Error: assert is not a function TypeError: assert is not a function
```

### Solution

```bash
npm install assert
```
