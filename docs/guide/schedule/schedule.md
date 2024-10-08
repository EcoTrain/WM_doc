---
sidebar_position: 1
id: scheduler
title: Planning
slug: /guide/schedule
---

An important element of the system is task scheduling. In this case, the tasks are divided into

- `Reminders`, (simple text reminder)
- `Taking medications`,
- `Doctor's appointment`
- `Keeping diaries`

## Scheduler Interface {#schedule_interface}

The scheduler is divided into

- `title` and
- a `body` whose layout changes from vertical to horizontal depending on the screen's width.

The `body` contains a hidden `calendar` block (date picker) and a `schedule block for the day`. To open the `calendar` block, you need to click on the name of the month in the `header`.

`Schedule for the day` is a list, where each of the lines is responsible for the `hour`.

If a task is scheduled for the current day, it will be displayed next to the hour in which it is scheduled. If several tasks overlap the execution window, tasks are added to the right of the existing ones.

The calendar `pins` the days on which at least one task is scheduled

<div align="center">
    <img type="imgscreen" src="/WM_doc/img/guide/calendar/schedulerView.png"/>
    <img type="imgscreen" src="/WM_doc/img/guide/calendar/schedulerCalendar.png"/>
</div>

## Creating events {#schedule_event_add}

To add an `Event`, click on the corresponding button at the bottom of the window.

After clicking, you get to the window for selecting the `type of event`. Currently, only two types are available:

- `Reminder`
- `Taking medication`

<div align="center"><img type="imgscreen" src="/WM_doc/img/guide/calendar/schedulerEventTypes.png"/></div>

Depending on the selected type of event, the event creation form will have the corresponding fields for entering parameters.

<div align="center">
    <img type="imgscreen" src="/WM_doc/img/guide/calendar/addEvent_default.png"/>
    <img type="imgscreen" src="/WM_doc/img/guide/calendar/addEvent_med.png"/>
</div>

### Event Timings

To select the time of the event, you can use two methods:

- date selection
- choice of days of the week

In the first case, you need to select a specific date. Then the `event` will appear in the `calendar` only once.

If you decide to select the days of the week, then the `event` in the `calendar` will appear constantly according to the selected days of the week. If at least one day of the week is selected, then the `date picker` widget will be disabled.

After selecting the days, you can set the time for the `event` to appear in the `schedule for the day`. To do this, you can click on the already added time to delete it on the panel with the clock or on the + button to add a new time.

<div align="center"><img type="imgscreen" src="/WM_doc/img/guide/calendar/schedulerTimeSelector.png"/></div>
