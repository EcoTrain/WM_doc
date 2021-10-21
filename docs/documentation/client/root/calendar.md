---
sidebar_position: 3
title: 'calendar'
slug: /views/todo
---

# Планировщик задач  

> Исходный код: `ui/root/calendar/todo.js`  

Включает в себя окна `авторизации`, `регистрации`, `пин-кода`

## Отображение дня
 
> Исходный код: `ui/root/authflow/RenderItemDay.js`  

!["Планировщик задач"](../../../../static/img/client/calendar/calendar.png)

## Конструктор событий

> Исходный код: `ui/root/authflow/CreateEvent.js`  

<!-- <h3 align="center">Выбор типа событий</h3>   -->

* ### Выбор типа событий

!["Выбор типа событий"](../../../../static/img/client/calendar/calendar_contructor_mode.png)  


<!-- <h3 align="center">Конструктор событий</h3>   -->

* ### Конструктор событий

!["Конструктор событий"](../../../../static/img/client/calendar/calendar_contructor.png)

### Выбор времени

> Исходный код: `ui/root/authflow/TimeSchedule.js` 

Представляет список выбраных времён. Возвращает список массив времён в строковом формате.

### Выбор дня недели

> Исходный код: `ui/root/authflow/WeekSchedule.js` 

Представляет список дней недели. Возвращает список выбраных индексов.







