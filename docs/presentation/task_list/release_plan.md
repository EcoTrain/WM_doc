---
sidebar_position: 3
sidebar_label: План по релизам
slug: /presentation/todo_list/releases/tasklist
---

# План выполнения

## 01.11 - 07.11

### Дневники

- [x] Исправление метода представления информации
  - - [x] Сатурация = последнее значение
  - - [x] Рост, вес = последнее значение
  - - [x] Проверить все дневники
- [x] Ограничение лога по периоду
- [x] Валидация формы конструктора
- [x] На превью графиков убрать агрегацию (не обьединять последние замеры)
- [x] На окно дневника перенести график с превью
- [x] Поправить интервал дат по оси, чтобы не налазили друг на друга
- [x] Автозаполнение (имитация активности)
- [x] Удаление дневника
- [x] Агрегация данных на полном графике

## 08.11 - 14.11

### Валидация

- [x] Конструктор медикаментов
- [x] Конструктор дневников
- [x] Конструктор событий

### Просмотр

- [x] Медикаменты
- [x] Дневники
- [x] Переменные
- [x] События

### Поиск

- [x] Медикаменты
- [x] Дневники
- [x] Переменные
- [x] События

### Редактирование

- [x] Дневники
- [x] Медикаменты
- [x] События

### Удаление

- [x] Дневники
- [x] Медикаменты
- [x] События

## 15.11 - 21.11

### Чат

- [x] Отправка вложений на iOS
- [x] Редактирование вложения
- [x] Сохранение чатов у обоих собеседников

### Дневники

- [x] Единицы измерения

## 22.11 - 28.11

- [x] Валидация почты при регистрации
- [x] Отправка 1 сообщения через сокет
- [x] Отследить Network Error на мобилках
- [x] trim на логин и пароль
- [x] Лимиты на размер загружаемых картинок (2мб)

## 29.11 - 10.12

### Чат

- [x] Firebase messaging

### Дневники

- [x] Единицы измерения
- [x] Поиск в базе (каталог готовых)
- [x] Шапка на мобилках

## 13.12 - 27.12

### Общее

- [x] Сжатие кода (ускорение загрузки приложения)
- [x] Сжатие картинок (ускорение работы приложения)
- [x] Разделение кода на чанки (подгрузка по частям)
- [x] Удаление профиля. Чистка всех следов.

## 10.01 - 24.01

### Общее

- [x] Проверка связи с сервером (запрос)
- [x] Проверка подключения к сети (мониторинг)
- [x] Анимация на время загрузки данных
- [x] Оффлайн режим

### Сервер

- [x] Настроить Sentry для мониторинга работы сервера и отслеживания ошибок
- [x] Настроить Prometheus + Gragana для мониторинга работы host VM

### DDOS

- [x] Nginx IP BlockList
- [x] Nginx RPS limit

## 24.01 - 04.02

### Чат

- [x] Подсчёт непрочитанных сообщений
- [x] Действия с сообщениями
- [x] Действия со вложениями
- [x] Выделение сообщений (только своих)
- [x] Редактирование сообщений (только своих)
- [x] Удаление сообщений (только своих)

- [x] Прикрепление нескольких изображений в чате
- [x] Просмотр изображений в сообщении в виде галереи в диалоговом окне

## 07.02 - 18.02

### Чат

- [x] Открытие файла из уведомления
- [x] Ограничение до 10 вложений
- [x] Удаление чата (для создателя)

## 21.02 - 04.04

- [x] Добавление методов работы с массивами на клиент и в API
- [x] Реструктуризация БД под массивы данных вместо обьектов
- [x] Пагинация данных (массивов)
- [x] Создание чата на стороне сервера

## 04.04 - 15.04

- [x] Оповещения о создании и удалении чата на устройства создателя (для локального обновления)
- [x] Личная переписка
  - - [x] Удаление чата, cтирание переписки (персонально для каждого пользователя в чате)
  - - [x] Выход из чата с сохраненем переписки
- [x] Групповые чаты
  - - [x] Конструктор чатов (выбор участников, название беседы и т.п.)
  - - [ ] Приглашения в чат
  - - [x] Выход из чата (оба режима, как в личной переписке)
  - - [x] Роли пользователей в чате (для функционала редактирования и удаления)

## 18.04 - 30.05

- [ ]