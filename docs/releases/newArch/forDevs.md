---
id: newArch_dev
title: Development
slug: /releases/newArch/forDevs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import LogoPython from '@site/static/img/guide/about/stack/python_logo.svg';
import LogoRN from '@site/static/img/guide/about/stack/rn_logo.svg';
import LogoPostgre from '@site/static/img/guide/about/stack/postgresql_logo.svg';
import LogoMongo from '@site/static/img/guide/about/stack/mongo_logo.svg';
import LogoFirebase from '@site/static/img/guide/about/stack/firebase_logo.svg';

# WM v2.0. Development

:::info
Version 2.0 is under development and is being implemented in parallel with the main application.
:::

## Convenience

### API 2.0: Enhanced user experience

Abstract API. Less code and query execution time. Faster service for a large number of customers. Easier scaling and modifications.

### Autodocumentation

Automatically generated API documentation when writing code
(separate technical documentation)

### Admin panel

Administrator's personal account for managing the database and users.

### Database replication

Your data is securely stored in multiple copies and locations. In the event of a failure on one of our servers, your data will be restored from other storages and available to you.

## Optimization

### Database relationality

Connectivity of entities, normal form of the database, no duplication of information.
Faster queries, fewer database queries using relationship keys between database entities.

> Part of the data has been moved to PostgreSQL (server) and SQLite (mobile app)

### Load balancing and API concurrency

A decentralized network of servers in different countries allows you to quickly respond to user requests by accessing the closest server. Our entire audience is divided into geographic areas in order to improve the quality of user experience.

### Logging all transactions (MongoDB)

All user actions are logged and tracked.
(For the purpose of tracking down the causes of errors and failures)

## New technology stack

<Tabs>
  <TabItem value="FastAPI" label="FastAPI" default style={{display: 'flex'}}>
    <LogoPython className="blackSvgIcon" style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    Python (FastAPI) allows you to quickly process a large number of requests and reach a large audience of users with a minimum amount of code and an abstract API.
  </TabItem>
  <TabItem value="React Native" label="React Native">
    <LogoRN className="blackSvgIcon" style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    Our interface is written in React Native, which allows us to provide a cross-platform product and support for Web, iOS, Android
  </TabItem>
  <TabItem value="PostgreSQL" label="PostgreSQL">
    <LogoPostgre className="blackSvgIcon" style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    Used to store user data and directories. Relationality allows avoiding duplication of data, minimizing the number of requests to the server and database. Replication allows you to securely store your data, keeping it in multiple copies, as well as provide reliable and fast customer support in different parts of the world.
  </TabItem>
  <TabItem value="MongoDB" label="MongoDB">
    <LogoMongo className="blackSvgIcon" style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    It is used to register and record transactions, which provides control over user actions and tracking the occurrence of system failures.
  </TabItem>
  <TabItem value="Firebase" label="Firebase">
    <LogoFirebase className="blackSvgIcon" style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    You will be notified of important events. Customize your notifications or receive them from other users. All interactions between users are accompanied by dynamic data updates on both devices
  </TabItem>
</Tabs>
