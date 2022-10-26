---
id: guide_intro
title: About in brief
slug: /guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import LogoDiary from '@site/static/img/guide/about/functional/diary_logo.svg';
import LogoScheduler from '@site/static/img/guide/about/functional/scheduler_logo.svg';
import LogoChat from '@site/static/img/guide/about/functional/chat_logo.svg';
import LogoSync from '@site/static/img/guide/about/functional/sync_logo.svg';
import LogoOffiline from '@site/static/img/guide/about/functional/offline_logo.svg';

import LogoNutriology from '@site/static/img/guide/about/plan/nutriciolory_logo.svg';
import LogoMap from '@site/static/img/guide/about/plan/map_logo.svg';
import LogoAuth from '@site/static/img/guide/about/plan/auth_logo.svg';
import LogoChart from '@site/static/img/guide/about/plan/chart_logo.svg';

The assistant is designed to support and accompany users, as well as to maintain communication with other users. To use the assistant, you just need to register, which takes less than a minute. This assistant helps you monitor your health indicators, plan your treatment, nutrition and medication program, and communicate with other users.

## Functional

<Tabs className="unique-tabs" style={{}}>
    <TabItem label="Health diaries" value='1'>
        <LogoDiary className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        <a href="/docs/guide/history">Health diaries</a> allow you to monitor health indicators. The diary chart aggregates your data for the selected period and reflects the dynamics of changes in indicators. You can customize the diary widgets for yourself and change both the visual parameters and the indicators that your diary takes into account.
    </TabItem>
    <TabItem label="Scheduler" value='2'>
        <LogoScheduler className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        Create single and recurring events with reminders in <a href="/docs/guide/schedule">Scheduler</a>. This will help you stick to your medication regimen, keep a diary, and keep track of personal things like doctor visits.
    </TabItem>
    <TabItem label="Messenger" value='3'>
        <LogoChat className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        You can exchange messages in a <a href="/docs/guide/messenger">messenger</a>, attach images and documents. Find a user using the search bar and write to him or create a group chat. You will be notified about all the events in the messenger by a push notification or an instant update of the information on the screen.
    </TabItem>
    <TabItem label="Offline" value='5'>
        <LogoOffiline className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        If you do not have access to the Internet, all your data will be saved on the device and added to the queue for sending.
    </TabItem>
    <TabItem label="Synchronization" value='6'>
        <LogoSync className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        When access to the Internet appears, data is synchronized with the server and updated on the device.
    </TabItem>
</Tabs>

## Plan

<Tabs className="unique-tabs" style={{}}>
    <TabItem label="Nutriciology" value='1'>
        <LogoNutriology className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        Monitoring of proteins, fats and carbohydrates. Compliance with the diet. Counting calories.
    </TabItem>
    <TabItem label="Help map" value='2'>
        <LogoMap className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
       Displaying useful places on the map and building routes to them. Such as healthcare providers or insurance companies.
    </TabItem>
    <TabItem label="Messenger" value='3'>
        <LogoChat className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        Exchange of new types of attachments, such as medicines and diaries. Personal settings. Forwarding messages.
    </TabItem>
    <TabItem label="Diaries" value='4'>
        <LogoChart className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        New chart types (fluid balance, pie and column charts, etc.), reordering of widgets, data export.
    </TabItem>
    <TabItem label="Scheduler" value='5'>
        <LogoChat className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        Alerts for scheduled events and tasks, new types of tasks such as visiting a doctor or keeping a diary
    </TabItem>
    <TabItem label="Authorization" value='6'>
        <LogoAuth className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        Use of third party services such as Google, Facebook, Apple
    </TabItem>
</Tabs>

:::info Read more

a more detailed task plan is in the section **[Feature announcement](/docs/releases/tasklist)**

:::

## About user manual

This site is a user guide for the [`Wellness Monitor`](https://wellness.a2rd.com) app.

In the navigation menu, you can find the sections that interest you in order to familiarize yourself with the functionality and instructions for use.

Also here is the [`logging of releases`](/docs/releases/notes), a description of the released builds of the application and the planned functionality in the future.

### Platform markers

Navigation may contain **pins** of different colours. The presence of a pin indicates that only one or two platforms support a module.

- ![#f03c15](https://via.placeholder.com/15/000000/000000?text=+) ` iOS`
- ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) ` Android`
- ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) ` Web`
