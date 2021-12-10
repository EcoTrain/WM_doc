---
sidebar_position: 2
title: "auth"
---

# Авторизация и регистрация

Данный роутер управляет маршрутами **авторизации** и **регистрации**

## Login

URL: `/api/auth/login`

Машрут для авторизации и входа в учётную запись

```json title="[POST] request body"
{
  "email": "<string>", // email || username
  "password": "<string>" // raw string
}
```

**SUCCESS:** В случае успешной валидации учётных данных сервер отправит ответ с кодом `200`:

```json title="[POST] response body"
200 {
  "token": "<JWT token string>",
  "email": "<sring || null>",
  "username": "<sring || null>",
  "personal": "<dict || null>",
  }
```

**ERROR:** В случае ошибки валидации учётных данных сервер отправит ответ с кодом `401`:

```json title="[POST] response body"
401 { "token": "Не верный логин или пароль!" }
```

## Logout

URL: `/api/auth/logout`

Маршрут для выхода их учётной записи. Не принимает никаких данных в теле запроса.

```json title="[POST] request body"
200 {"msg":"logout succesfull"}
```

## Signup

URL: `/api/auth/signup`

Машрут для регистрации новых пользователей

```json title="[POST] request body "
{
  "username": "<string>", // УНИКАЛЬНО
  "email": "<string>", // УНИКАЛЬНО. По формату почты *@*.*
  "password": "<string>" // Минимум 6 символов
}
```

**SUCCESS:** В случае успешной валидации учётных данных сервер отправит ответ с кодом `200`:

```json title="[POST] response body"
200
{
    "token": "<JWT token string>",
    "email": "<sring>",
    "username": "<sring>",
    "personal": "<null>",
}
```

**ERROR:** В случае ошибки валидации учётных данных сервер отправит ответ с кодом `400`:

```json title="[POST] response body"
400 { "token": "<error message>" }
```
