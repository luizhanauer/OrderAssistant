# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# Create
```
npm create vite@latest pedido -- --template vue
```

# Run dev
```
npm run dev -- --host 0.0.0.0
```

# Docker
## Build
```
docker build -t order-assistant .
```
## Run
```
docker run -p 8080:80 order-assistant
```

## Demo

[Click Here](https://orderassistant.hanauerlabs.com.br/)