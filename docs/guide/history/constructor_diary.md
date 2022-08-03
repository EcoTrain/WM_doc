---
sidebar_position: 5
id: constructor_diary
title: "Diary constructor"
slug: /guide/history/constructor_diary
---

## General {#diary_costructor_general}

When creating a diary, you can set the following options:

1. Name of the diary
2. Graph type
3. Icon color
4. Datasets
5. Unit of measurement
6. Data display time interval
7. Data aggregation rule

<div align="center"><img type="imgscreen" src="/WM_doc/img/guide/diary/constructor/view.png"/></div>

## Charts {#diary_costructor_charts}

`Diaries` are configurations that collect a set of variables in one place and style them for a convenient presentation. Implemented `diary types`:

- [x] Line graphs
- [x] Progress circle
- [x] Progress bar
- [x] Prime number

## Data sets {#diary_costructor_datasets}

**Data set** represents a list of expressions, each of which reflects the relationship of a set of [variables](/docs/guide/history/constructor_diary)..

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
- Prefix and suffix when calculating the total value in the diary widget panel

**Prefix and suffix** do not affect diary log values. They only change the visual shell of the value, for easier reading.

Form for creating a diary

<div align="center"><img type="imgscreen" src="/WM_doc/img/guide/diary/constructor/datasets.png"/></div>

Diary view window

<div align="center"><img type="imgscreen" src="/WM_doc/img/guide/diary/diaryFullView.png"/></div>

Diary widget with prefixes and suffixes

<div align="center"><img type="imgscreen" src="/WM_doc/img/guide/diary/diaryWidget.png"/></div>

## Variables {#diary_costructor_variables}

`Variables` are used to identify history objects. A variable contains a name and limits. Variables are created via the `variable constructor`.

<div align="center"><img type="imgscreen" src="/WM_doc/img/guide/diary/variableConstructor.png"/></div>

## Aggregation {#diary_costructor_aggregation}

All collected data in the diaries is aggregated at specified intervals depending on the period of the diary:

- Period 1 day: aggregation interval - 3 hours
- Period 1 week: aggregation interval - 1 day
- Period 1 month: aggregation interval - 3 days

The final value defines the aggregation rule:

- last value
- mean
- total value

Aggregation is used for the readability of graphs with a large amount of data.
You can change the diary period, interval and aggregation rule in the diary settings when editing it

> At the same time, absolutely all measurements are displayed in the diary log without aggregation
