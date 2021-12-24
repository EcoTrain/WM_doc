---
sidebar_position: 6
title: "chats"
---

# Чаты

Данный роутер управляет маршрутами **чатов**

## Создание чата

URL: `/api/chats/create`

Маршрут для создания чата в БД.

```json title="[POST] request body"
{
  "chat_id": "<timestamp>",
  "users_email_list": "[<email_str>,...]"
}
```

users_email_list[0] = инициатор, создатель чата

Если чат с такими юзерами уже существует, сервер вернёт id **найденного** чата:

```json title="[POST] response body ERROR"
{
  "message": "Чат уже существует",
  "time": "<existed_chat_id>",
  "exist": true
}
```

Если такого чата ещё нет, сервер вернёт id **созданного** чата:

```json title="[POST] response body SUCCESS"
{
  "message": "Данные обновлены",
  "time": "<req.body.chat_id>",
  "exist": false
}
```

## Получение данных о чате

URL: `/api/chats/get`

Маршрут для получение данных о чатах.

```json title="[POST] request body"
{ "email": "<sting>" }
```

По полученному email из БД будет получен список id чатов этого юзера.  
Затем по списку id чатов будет подгружена информация о самих чатах (участники, сообщения и т.п.)

```json title="[POST] response body"
{
  "<chat_id_1>": {
    "id": "<timestamp>",
    "users": {},
    "messages": {}
    ...
  },
  "<chat_id_2>": {
    ...
  }
}
```
