---
sidebar_position: 5
id: constructor_diary
title: "Diary constructor"
slug: /presentation/history/constructor_diary
---

## Main

When creating a diary, you must set the following parameters:

1. Name of the diary
2. Graph type
3. Background color
4. Dataset
5. Unit of measurement

**Data set** represents a list of expressions, each of which reflects the relationship of a set of variables.

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

<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/diary/diaryConstructors.png"/></div>

## Charts

`Diaries` are configurations that collect a set of variables in one place and style them for a convenient presentation. Implemented `diary types`:

- [x] Line graphs
- [x] Progress bar (circle)
- [x] Progress bar (line)
- [x] Prime number
- [ ] WaterFall
- [ ] Bar Chart
- [ ] Pie Chart
- [ ] Combine Chart

## Variables

`Variables` are used to identify history objects. A variable contains a name and limits. Variables are created via the `variable constructor`.

<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/variableConstructor.png"/></div>
