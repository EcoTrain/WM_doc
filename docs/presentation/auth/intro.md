---
sidebar_position: 1
sidebar_label: Введение
slug: /presentation/security/intro
---

# Аутентификация

## Вход

Первый вход в приложение осуществляется через страницу Login.

Для авторизации требуется:

- Имя пользователя / Почта
- Пароль

<!-- !["Страница авторизации"](/img/presentation/auth/login.png) -->
<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/auth/login.png"/></div>

## Регистрация

В текущей версии, регистрация требует только ввода уникального логина и пароля. После регистрации, Вы сразу попадаете в приложение

Для регистрации требуется:

- Имя пользователя
- Почта
- Пароль

<!-- !["Страница регистрации"](/img/presentation/auth/signUp.png) -->
<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/auth/signUp.png"/></div>

## Пинкод <span class="pin mobile"></span>

В мобильных версиях после авторизвации требуется добавить пинкод. Далее, при каждом входе в приложение, необходимо вводить созданный ранее код. Если Вы забыли пинкод, вы можете сбросить данные и зайти заново, нажав на кнопку "Забыли пинкод"

<!-- !["Страница пинкода"](/img/presentation/auth/pin.png) -->
<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/auth/pin.png"/></div>

> - Возможно добавление в Web версию в следующих релизах
> - Возможно отключение через настройки в следующих релизах

## Защита

Данные пользователя передаются через протокол HTTPS с SSL шифрованием.
