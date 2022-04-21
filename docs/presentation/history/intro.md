---
sidebar_position: 1
id: introduction
title: Introduction
slug: /presentation/history/intro
---

This section describes journaling and covers the following topics:

- [General description](/docs/presentation/history/intro)
  - Purpose of diaries
  - Diary functionality
  - Editing diaries
- [Diary creating](/docs/presentation/history/constructor_diary)
- [View](/docs/presentation/history/show)
- [Editing history](/docs/presentation/history/edit_history)
- [Diary settings](/docs/presentation/history/edit_diary)

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

- [x] diary constructor
- [ ] Search in template database

Widget **settings** are described in the corresponding [section](/docs/presentation/history/edit_diary)

> The device of the diary widget is described in more detail in its [constructor](/docs/presentation/history/constructor_diary)

**Notes:**

- In the diary panel, graphs display the last 10 measurements without aggregation by time.

Editing added diaries is available through the context menu of the diary tile (long press | right mouse click):

- [x] Resize 0.5 | one
- [x] Period change
- [x] Delete
- [ ] Other settings:
  - [ ] Diary color
  - [ ] Diary Icon
  - [ ] Serial number
  - [ ] Data set colors
  - [ ] Diary type

<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/diary/diaryLayout.png"/></div>
