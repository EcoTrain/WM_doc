---
sidebar_position: 1
sidebar_label: Анонс функций
title: Список задач
slug: /presentation/release_notes/tasklist
---

## [Дневники](/docs/presentation/history)

- [ ] Поиск дневника в базе каталога
- [ ] Ед. изм = список для выбора
- [ ] Нутриология
  - - [ ] Структура данных
  - - [ ] Создать каталог продуктов
  - - [ ] Добавление в БД новых продуктов
  - - [ ] График = прогресс (лимит по калориям)
  - - [ ] Лог = за день

### Типы дневников:

- [ ] WaterFall
- [ ] Bar Chart
- [ ] Pie Chart
- [ ] Combine Chart

### [Переменные](/docs/presentation/history/constructor_diary)

- [ ] Дополнительные пределы (пороги предупреждений) для переменных

### [Медикаменты](/docs/presentation/storage_entities/medicaments)

[Конструктор](/docs/presentation/storage_entities/medicaments#creation)

- [ ] Отправка в чате

### Документы

Документы должны включать в себя такие поля как:

- [ ] Тип документа
- [ ] Служебные поля (серия, номер, ...)
- [ ] Набор изображений (опционально)

### Анализы

Анализы должны включать в себя такие поля как:

- [ ] Тип анализа
- [ ] Служебные поля (свой набор для каждого типа ...)
- [ ] Набор изображений (опционально)

## [Авторизация](/docs/presentation/security)

- [ ] Вход через Google сервисы
- [ ] Вход через VK
- [ ] Вход по TouchID / FaceID
- [ ] Анкета при регистрации
- [ ] Вход по токенам для каждого устройства и возможность 'Выйти на всех устройствах'

## Активности

### [Планировщик](/docs/presentation/schedule)

- [ ] Группировка событий (на одно время и дату)
- [ ] Уведомления о событиях (через Firebase)
- [ ] Отметка о выполнении событий
- [ ] Привязка выполнения к истории
- [ ] Окно выбора типа события в `modal`
- [ ] Фильтрация событий по типам в `wide` версии
- [ ] Новые типы событий
  - - [ ] Запись на прием к врачу
  - - [ ] Напоминание о ведении дневника

### Профиль

- [ ] Раздел документов
  - - [ ] Конструктор документов с выбором типа
  - - [ ] Просмотр
  - - [ ] Удаление
  - - [ ] Редактирование
- [ ] Раздел анализов
  - - [ ] Конструктор анализов с выбором типа
  - - [ ] Просмотр
  - - [ ] Удаление
  - - [ ] Редактирование
- [ ] Больше личной информации (опционально)

### [Чат](/docs/presentation/chat)

- [ ] Проверка отправки сообщения
  - - [ ] В случае неудачи кешировать сообщение
  - - [ ] В случае неудачи повесить кнопку с (!)
  - - [ ] По кнопке предлагать отправить снова. Собирать данные и делать повторную отправку.
- [ ] Быстрая отправка дневника
  - - [ ] Сбор всех данных в один объект
  - - [ ] Получение информации о дневнике по ссылке
  - - [ ] Отправка данных в чате
- [ ] Быстрая отправка медикамента
  - - [ ] Сбор всех данных в один объект
  - - [ ] Получение информации о медикаменте по ссылке
  - - [ ] Отправка данных в чате
- [ ] Реализация обмена другими [`типами информации`](/docs/presentation/chat)
- [ ] Поиск по сообщениям
- [ ] Улучшенный поиск по пользователям (больше параметров поиска)
- [ ] Персональные настройки уведомлений чата
- [ ] Галерея фото
  - - [ ] Переписать под мобилки (на полный экран, как ВК)
  - - [ ] Добавить кнопку "скачать фул"

### Уведомления

- [ ] Notifee integration with Firebase
- [ ] Стилизация уведомлений

### Карта

- [x] Отображение карты
- [x] Запрос геолокации
- [x] Переход на местоположение пользователя
- [ ] Добавление меток с информацией
- [ ] Отображение меток с информацией
- [ ] Просмотр меток (клик по маркеру)
- [ ] Построение маршрутов до точек

### QR коды

- [ ] Открытие ссылок через приложение (главная страница, QR, смена пароля)
- [ ] Сохранение QR кода в виде картинки
- [ ] Настройки доступа QR кода
  - - [ ] Время жизни QR кода
  - - [ ] Открытие/закрытие доступа к информации по нему
  - - [ ] Поделиться через другие приложения
## Общее

- [ ] 3 размера картинок
  - - [x] Thumbnail 128px (фон)
  - - [x] Resize 320px (Просмотр)
  - - [ ] Full (скачивается отдельно по ссылке)
