---
id: introduction
title: Keeping a diary
slug: /guide/history
---

This section describes journaling and covers the following topics:

- [General description](/docs/guide/history)
  - Purpose of diaries
  - Diary functionality
  - Editing diaries
- [Diary creating](/docs/guide/history/constructor_diary)
- [View](/docs/guide/history/show)
- [Editing history](/docs/guide/history/edit_history)
- [Diary settings](/docs/guide/history/edit_diary)

## Diaries

**Diaries are designed to monitor** changes in the totality of any indicators, called `variables`.
A diary chart can depend on several expressions, each reflecting the relationship of a set of variables.

> For example, fluid balance = the difference between filled and poured liquid.
> These parameters can be displayed as two lines or as one line, reflecting their difference.
> When adding a new value to the widget, the data is written to the profile in the database (history) and the graph is redrawn.

When a user registers, a set of **standard** diaries is created in his profile:

1. Heart rate
2. Saturation (blood oxygen saturation)
3. Pressure
4. Steps
5. Temperature
6. Sugar
7. Weight
8. Growth
9. BMI (Body Mass Index)

The user can also add new widgets or remove existing ones.

To add diaries to your profile, there are 2 ways:

- [x] [diary constructor](/docs/guide/history/constructor_diary)
- [ ] Search in template database

Widget **settings** are described in the corresponding [section](/docs/guide/history/edit_diary)

> The device of the diary widget is described in more detail in its [constructor](/docs/guide/history/constructor_diary)

**Notes:**

- In the diary panel, graphs display the last 10 measurements without aggregation by time.

## Creating a diary

Creating a new diary is done through its **[constructor](/docs/guide/history/constructor_diary)**  
To add a diary, click on the [+] button at the bottom of the diary panel at the end of the list of widgets

## Editing diaries

Some of the settings are in **[diary tile context menu](/docs/guide/history/edit_diary)**  
The full list of parameters is edited in the window **[detailed diary settings](/docs/guide/history/edit_diary)**

<div align="center"><img type="imgscreen" src="/WM_doc/img/guide/diary/diaryLayout.png"/></div>
