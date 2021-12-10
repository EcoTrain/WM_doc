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
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const chatsRouter = require("./routes/chats");
const filesRouter = require("./routes/files");
const catalogRouter = require("./routes/catalog");
const messagingRouter = require("./routes/firebase/messaging");

const profileRouter = require("./routes/user/profile");
const diaryRouter = require("./routes/user/diary");
const scheduleRouter = require("./routes/user/schedule");
const medicamentRouter = require("./routes/user/medicament");

...

...


//### Routes
app.use("/api/auth", authRouter); // Авторизация/регистрация
app.use("/api/users", usersRouter); // Все пользователи
app.use("/api/chats", chatsRouter); // Все пользователи
app.use("/api/files", filesRouter); // Up/Download files
app.use("/api/catalog", catalogRouter); // Справочники
app.use("/api/messaging", messagingRouter); // Справочники

app.use("/api/profile", profileRouter); // Текущий пользователь
app.use("/api/diary", diaryRouter); // Текущий пользователь
app.use("/api/schedule", scheduleRouter); // Текущий пользователь
app.use("/api/medicament", medicamentRouter); // Текущий пользователь
```
