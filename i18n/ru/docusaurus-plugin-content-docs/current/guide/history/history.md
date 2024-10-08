---
id: introduction
title: Ведение дневника
slug: /guide/history
---

В данном разделе описано ведение дневников, рассмотрены следующие темы:

- [Общее описание](/docs/guide/history)
  - Назначение дневников
  - Функционал дневников
  - Редактирование дневников
- [Создание дневника](/docs/guide/history/constructor_diary)
- [Просмотр](/docs/guide/history/show)
- [Редактирование истории](/docs/guide/history/edit_history)
- [Настройки дневников](/docs/guide/history/edit_diary)

## Дневники

**Дневники предназначены для мониторинга** изменения совокупности каких-либо показателей, называемых `переменные`.  
График дневника может зависеть от нескольких выражений, каждое из которых отражает отношения совокупности переменных.

> Например: баланс жидкости = разность залитой и вылитой жидкости.  
> Эти параметры могут быть отображены в виде двух линий, а могут и в виде одной, отражающей их разность.
> При добавлении нового значения на виджет, данные записываются в профиль в БД (history) и график перерисовывается.

При регистрации пользователя, в его профиле создаётся набор **стандартных** дневников:

1. ЧСС
2. Сатурация (насыщенность крови кислородом)
3. Давление
4. Шаги
5. Температура
6. Сахар
7. Вес
8. Рост
9. ИМТ (Индекс массы тела)

Также пользователь может добавить новые виджеты, или удалить существующие.

Для добавления дневников в профиль, есть 2 способа:

- [x] [конструктор дневников](/docs/guide/history/constructor_diary)
- [ ] Поиск шаблона в каталоге (общий раздел базы данных)

**Настройки** виджета описаны в соответствующем [разделе](/docs/guide/history/edit_diary)

> Более подробно устройство виджета дневника описано в его [конструкторе](/docs/guide/history/constructor_diary)

**Примечания:**

- На панели дневников графики отображают 10 последних замеров без агрегации по времени.

## Создание дневника

Создание нового дневника осуществляется через его **[конструктор](/docs/guide/history/constructor_diary)**  
Для добавления дневника нажмите на кнопку [+] внизу панели дневников в конце списка виджетов

## Редактирование дневников

Часть настроек находится в **[контекстном меню плитки дневника](/docs/guide/history/edit_diary)**  
Полный список параметров редактируется в окне **[подробных настроек дневника](/docs/guide/history/edit_diary)**

<div align="center"><img type="imgscreen" src="/WM_doc/img/guide/diary/diaryLayout.png"/></div>
