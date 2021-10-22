---
sidebar_position: 2
title: "Auth"
---

# Авторизация и регистрация

Данный роутер управляет маршрутами **авторизации** и **регистрации**

## Login

URL: `/api/auth/login`

Машрут для авторизации и входа в учётную запись

```json title="[POST] request body"
{
  "email": "<string>",
  "password": "<string>"
}
```

**SUCCESS:** В случае успешной валидации учётных данных сервер отправит ответ с кодом `200`:

```json title="[POST] response body"
200 { "token": "<JWT token string>" }
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
  "email": "<string>",
  "password": "<string>"
}
```


**SUCCESS:** В случае успешной валидации учётных данных сервер отправит ответ с кодом `200`:

```json title="[POST] response body"
200
{
    "user_id": "<user id string>",
    "token": "<JWT token string>"
}
```

**ERROR:** В случае ошибки валидации учётных данных сервер отправит ответ с кодом `400`:

```json title="[POST] response body"
400 { "token": "Пользователь с такой почтой уже существует!" }
```
