---
sidebar_position: 2
sidebar_label: Architecture
title: "Architecture"
id: architecture
slug: /presentation/architecture
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import LogoNodeJS from '@site/static/img/presentation/about/stack/nodejs_logo.svg';
import LogoRN from '@site/static/img/presentation/about/stack/rn_logo.svg';
import LogoMongo from '@site/static/img/presentation/about/stack/mongo_logo.svg';
import LogoFirebase from '@site/static/img/presentation/about/stack/firebase_logo.svg';

## Technology stack {#tech_stack}

<Tabs>
  <TabItem value="1" label="NodeJS" default style={{display: 'flex'}}>
    <LogoNodeJS className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    NodeJS + Express allows you to quickly process a large number of requests and cover a large audience of users
  </TabItem>
  <TabItem value="2" label="React Native">
    <LogoRN className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    Our interface is written in React Native, which allows us to provide a cross-platform product and support for Web, iOS, Android
  </TabItem>
  <TabItem value="3" label="MongoDB">
    <LogoMongo className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    MongoDB is used for data storage, it allows for greater scalability and high schema flexibility.
  </TabItem>
  <TabItem value="4" label="Firebase">
    <LogoFirebase className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    You will be notified of important events. Customize your notifications or receive them from other users. All interactions between users are accompanied by dynamic data updates on both devices
  </TabItem>
</Tabs>

## Architecture {#architecture}

The application is cross-platform and available on platforms: Web, iOS, Android
The application has two layout modes:

- Phone
- Wide (web, tablet)
  Both markups can also be applied across all devices.

:::info Single code

The application is based on a single code for all platforms with rare exceptions when:

- The library is not adapted to all platforms (several are used)
- Features of the perception of the interface require the implementation of different functionality / look for different platforms

That allows you to implement a single logic and reduce the number of vulnerabilities

:::

## Local storage {#local_storage}

The server uses a shared MongoDB database, but mobile devices use an **additional local** MongoDB.

This allows the user to perform the following tasks:

### Data relevance {#data_relevance}

Thanks to synchronization, only relevant information is exchanged.

When communicating with the server, the application sends the following data:

<Tabs>
  <TabItem value="1" label="Read" default>
  <ul>
    <li>url (path to the required data area in the database)</li>
    <li>devicetime (device time at the time the request was sent to the server)</li>
  </ul>
  </TabItem>
  <TabItem value="2" label="Write">
  <ul>
    <li>url (path to the required data area in the database)</li>
    <li>devicetime (device time at the time the request was sent to the server)</li>
    <li>data (data to write)</li>
    <li>time (time to read data on the device)</li>
  </ul>
  </TabItem>
</Tabs>

How the server understands that the information is up-to-date is described in the **synchronization mechanism** section of this chapter.

### Offline {#offline}

Local database on devices allows continuous filling of logs even without network access thanks to **synchronization mechanism**

### Synchronization mechanism {#synchronization_mechanism}

When acting with the database, the data is sent to the server (if there is a network). Otherwise, the transaction is added to the synchronization queue. When a request is received, the server compares the last data modification time in the database and the time specified in the request data.

Data is considered relevant if:  
**Read**: if the time per request is less than the last time the data was changed in the database.  
**Write**: if the time at the time of writing the data is less than the last time the data was changed in the database. This means that newer data has already been recorded. If the data is up to date, the server overwrites it in the database and returns the current time when writing to the database. (Actual time = req.devicetime - servertime + req.time)

After unloading all the data from the queue, the actual data from the server database is requested to the server.
