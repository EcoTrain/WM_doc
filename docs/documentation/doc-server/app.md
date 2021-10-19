---
sidebar_position: 1
---

# App

Приложение сервера написано на `Node JS` и `Express JS` и выполняет функцию API. Оно общается с БД и эндпоинтами. Это тонкий сервер.

```js title="app.js"
const express = require('express');

var app = express();
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({limit: '10mb', extended: true}));
```

## Запуск

Приложение имеет ряд конфигурационных команд.  
Они описаны в файле package.json в разделе scripts.  

### Релиз
Запуск в режиме релиза:

```bash
npm run start
```
В режиме релиза приложение не реагирует на какие-либо изменения в коде.

### Дебаг
Запуск в режиме дебага:

```bash
npm run debug
```
В режиме дебага приложение перезапускается при сохранении изменений в исходном коде.  
