---
sidebar_position: 5
id: constructor_diary
title: "Diary constructor"
slug: /presentation/history/constructor_diary
---

## General {#diary_costructor_general}

When creating a diary, you must set the following parameters:

1. Name of the diary
2. Graph type
3. Background color
4. Dataset
5. Unit of measurement

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/diary/diaryConstructor.png"/></div>

## Charts {#diary_costructor_charts}

`Diaries` are configurations that collect a set of variables in one place and style them for a convenient presentation. Implemented `diary types`:

- [x] Line graphs
- [x] Progress bar (circle)
- [x] Progress bar (line)
- [x] Prime number
- [ ] WaterFall
- [ ] Bar Chart
- [ ] Pie Chart
- [ ] Combine Chart

## Data sets {#diary_costructor_datasets}

**Data set** represents a list of expressions, each of which reflects the relationship of a set of [variables](/docs/presentation/history/constructor_diary)..

> For example: liquid balance = difference between filled and poured liquid.
> These options can be displayed as:
>
> - two lines (two expressions with one variable each)
> - one line reflecting their difference (one expression of type A - B).

Expressions are **assembled** from blocks of the form `[var][?]`.

- Clicking on the `[var]` block opens a dialog with a list of variables.
- Clicking on the `[?]` block opens a dialog with a list of available operations.

To the right of the expression is the **expression settings** button, where you can set such parameters as:

- The color of the element on the chart
- Inclusion of expression in widget statistics (total value in the widget panel)
- Prefix and suffix when counting statistics

**Prefix and suffix** do not affect diary log values. They only change the visual shell of the value, for easier reading.

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/diary/diaryConstructorWithPrefAndSuf.png"/></div>
Form for creating a diary

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/diary/diaryViewWithPrefAndSuf.png"/></div>
Diary view window

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/diary/diaryWidgetWithPrefAndSuf.png"/></div>
Diary widget with prefixes and suffixes

## Variables {#diary_costructor_variables}

`Variables` are used to identify history objects. A variable contains a name and limits. Variables are created via the `variable constructor`.

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/diary/variableConstructor.png"/></div>
