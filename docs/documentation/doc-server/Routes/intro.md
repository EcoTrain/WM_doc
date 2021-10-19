---
sidebar_position: 1
title: "Intro"
---

# Маршруты

Маршрутизация в приложении выполняется при помощи ряда маршрутизаторов, каждый из которых отвечает за свою ветку URL.  

Все машруты к серверу начинаются с `/api`

Маршрутизаторы подключаются к приложению в файле `app.js`:

```js title="app.js"
//### Routers Files
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const usersRouter = require('./routes/users');
const filesRouter = require('./routes/files');
const catalogRouter = require('./routes/catalog');
const messagingRouter = require('./routes/firebase/messaging');

...

...

//### Routes
app.use('/api', indexRouter);             // Корень, базовые страницы
app.use('/api/auth', authRouter);          // Авторизация/регистрация
app.use('/api/profile', profileRouter);    // Текущий пользователь
app.use('/api/users', usersRouter);        // Все пользователи
app.use('/api/files', filesRouter);        // Up/Download files
app.use('/api/catalog', catalogRouter);    // Справочники
app.use('/api/messaging', messagingRouter);    // Справочники
```
