---
sidebar_position: 2
sidebar_label: Architecture
title: "Architecture"
id: architecture
slug: /guide/architecture
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import LogoNodeJS from '@site/static/img/guide/about/stack/nodejs_logo.svg';
import LogoRN from '@site/static/img/guide/about/stack/rn_logo.svg';
import LogoMongo from '@site/static/img/guide/about/stack/mongo_logo.svg';
import LogoFirebase from '@site/static/img/guide/about/stack/firebase_logo.svg';

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
When acting with the database, the data is sent to the server (if there is a network), otherwise the transaction is added to the `synchronization queue`.  

When a request is received, the server compares the last data modification time in the database and the time specified in the request data.
If the data is up to date, the server overwrites it in the database and returns the current time at the time of writing to the database.

:::info All data is timestamped.
Upon receipt of information, it is cut off to the desired period.  
When sending data, they supplement (or replace) the changes already existing with the update of the time.  
:::

### Offline {#offline}

A local database on devices allows for continuous data changes even without network access.  
Thanks to the **sync queue**, your data is stored until the network appears and sent to the server. (in case of an error, it will also be stored for re-sending)
