---
sidebar_position: 1
sidebar_label: Клиент
slug: /presentation/todo_list/client
---

# Задачи на клиенте

## [Сущности](http://localhost:3002/docs/presentation/storage_entities/intro)

### [Дневники](http://localhost:3002/docs/presentation/storage_entities/intro#дневники)

[`Конструктор`](http://localhost:3002/docs/views/constructors#конструктор-дневников)   

Реализованные `типы` дневников:
- [x] Линейные графики
- [x] Прогресс бар (круг)
- [x] Прогресс бар (линия)
- [x] Простое число
- [ ] WaterFall
- [ ] Bar Chart
- [ ] Pie Chart
- [ ] Combine Chart

Для добавления дневников в профиль, есть 2 способа:
- [x] [`конструктор дневников`](http://localhost:3002/docs/views/constructors#конструктор-дневников)
- [ ] Поиск в базе

Редактирование добавленных дневников доступно через контекстное меню плитки дневника (long press | right mouse click):
- [x] Изменение периода
- [x] Изменение размера 0.5 | 1
- [ ] Изменение размера 0.125 | 0.25 | 0.625 | 0.75
- [x] Удаление дневника
- [ ] Удаление значения из лога
- [ ] Другие настройки:
    - - [ ] Цвет дневника
    - - [ ] Иконка дневника
    - - [ ] Порядковый номер
    - - [ ] Цвета ноборов данных
    - - [ ] Тип дневника

### [Медикаменты](http://localhost:3002/docs/presentation/storage_entities/intro#медикаменты)

[`Конструктор`](http://localhost:3002/docs/views/constructors#конструктор-медикаментов)  

- [x] Добавление
- [x] Просмотр
- [x] Удаление медикамента
- [x] Редактировние
- [ ] Отправка в чате

### [Документы](http://localhost:3002/docs/presentation/storage_entities/intro#документы)

Документы должны включать в себя такие поля как:
- [ ] Тип документа
- [ ] Служебные поля (серия, номер, ...)
- [ ] Набор изображений


### [Анализы](http://localhost:3002/docs/presentation/storage_entities/intro#анализы)

`Анализы` в данном контексте являются сущностью для хранения конфигураций. История анализов должна храниться в `истории`:

## [Безопасность](http://localhost:3002/docs/presentation/security/intro)

Не реализовано:
- [ ] Вход через Google сервисы
- [ ] Вход через VK

Идеи
- [ ] Вход по TouchID / FaceID
- [ ] Интеграция с WEB
- [ ] Анкета при регистрации

## Активности  

### [Планировщик](http://localhost:3002/docs/presentation/schedule/intro)

В первую очередь

- [ ] Уведомления о событиях
- [ ] Отметка о выполнении событий
- [ ] Привязка выполнения к истории
- [ ] Просмотр информации о событии в отдельном окне

Потом

- [ ] Окно выбора типа события в `modal`
- [ ] Редактирование событий
- [ ] Стилизация событий
- [ ] Фильтрация событий по типам в `wide` версии
- [ ] Запись на прием к врачу
- [ ] Напоминание о ведении дневника


### Профиль

- [ ] Раздел документов
- [ ] Раздел анализов
- [ ] Больше личной информации (опционально)

### [Чат](http://localhost:3002/docs/presentation/history/interaction#чаты)
 
- [ ] Firebase messaging
- [ ] Ссылки на данные пользователей вместо копирования
- [ ] Прикрепление нескольких вложений
- [ ] Реализация обмена оставшимися [`типами информации`](http://localhost:3002/docs/presentation/history/interaction#чаты)
- [ ] Другие медиа вложения (аудио, видео)
- [ ] Поиск по сообщениям
- [ ] Удаление сообщений/чатов
- [ ] Редактирование сообщений
- [ ] Улучшенный поиск по пользователям

### Карта

- [x] Отображение карты
- [x] Запрос геолокации
- [x] Переход на местоположение пользователя
- [ ] Добавление меток с информацией
- [ ] Отображение меток с информацией
- [ ] Просмотр меток (клик по маркеру)
- [ ] Построение маршрутов до точек

### [Дневники](http://localhost:3002/docs/presentation/history/intro)

- [x] Добавлениие дневника через конструктор
- [x] Просмотр дневника, графика и логов
- [x] Добавление значения на дневник
- [x] Настройки дневника
- [x] Опрятный вид графика в окне просмотра дневника
- [x] Интервал времени, чтобы даты по оси не налазили друг на друга
- [x] Исправление метода представления информации
    - - [x] Сатурация = последнее значение
    - - [x] Рост, вес = последнее значение
    - - [x] Проверить все дневники
- [x] Ограничение лога по периоду
- [ ] Подгрузка лога
- [x] Валидация формы конструктора
- [x] На превью графиков убрать агрегацию (не обьединять последние замеры)
- [x] На окно дневника перенести график с превью
- [ ] Агрегация данных на полном графике
- [x] Добавить данные в историю (имитация активности)
- [x] Поправить интервал дат по оси, чтобы не налазили друг на друга
- [x] Добавить удаление дневника
- [ ] Нутриология 
    - - [ ] Структура данных
    - - [ ] Создать каталог продуктов 
    - - [ ] Добавление в БД новых продуктов
    - - [ ] График = прогресс (лимит по калориям)
    - - [ ] Лог = за день

## [Архитектура](http://localhost:3002/docs/presentation/architecture)

### [Реализация механизма синхронизации](http://localhost:3002/docs/presentation/architecture#реализация-механизма-синхронизации)
- [x] Структура БД и API, позволяющая понять актуальность данных
- [ ] Реализация стека операций на офлайн устройствах с отправкой при подключении к сети или входе
- [ ] Смещение разницы во времени на клиенте и сервере
- [ ] Рекурсивный поиск новых данных на сервере
- [ ] Подключение [`FCM`](https://firebase.google.com/products/cloud-messaging?hl=ru) для оповещения синхронизируемых устройств
- [ ] Подключение ([Redux](https://redux.js.org/) | [MobX](https://mobx.js.org/)) для обработки данных


## Глобальные задачи

### Первый этап

- [ ] Хранение документов
- [ ] Хранение анализов

### Второй этап

- [ ] Система измерений для медикаментов и анализов
- [ ] Дополнительные пределы (пороги предупреждений) для переменных
- [ ] Иконки для переменных
- [ ] Доработка типов дневников
