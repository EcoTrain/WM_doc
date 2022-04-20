---
sidebar_position: 3
title: "diary"
---

# Дневники

Данный роутер управляет маршрутами взаимодействия с **дневниками текущего пользователя**

## Получение

URL: `/api/diary/get`

Функция получения описана в [репозитории](/docs/documentation/server/routes/user/repository#get)

## Редактирование

URL: `/api/diary/update`

Функция получения описана в [репозитории](/docs/documentation/server/routes/user/repository#update)

## Удаление

URL: `/api/diary/remove`

Функция получения описана в [репозитории](/docs/documentation/server/routes/user/repository#remove)

## Наполнение дневников

URL: `/api/diary/autofill`

Маршрут для заполнения дневников случайными значениями в допустимых пределах переменных.

```json title="[POST] request body"
{ "count": "<int number>" }
```

**Если параметр `count` не задан:**

```json title="[POST] response body"
{
  "message": "Укажите количество записей. Данные не обновлены",
  "code": -1,
  "time": "<timestamp>"
}
```

**Если количество генерируемых записей задано:**

- Сервер получает информацию из профиля пользователя о переменных и истории их изменения.
- Для каждой переменной узнаёт её пределы и генерирует значение.
- Записывает это значение в историю переменной
