---
sidebar_position: 2
sidebar_label: Architecture
title: "Architecture"
id: architecture
slug: /presentation/architecture
---

## Technology stack {#tech_stack}

- Database: MongoDB
- Server: NodeJS
- Client: ReactNative

## Architecture {#architecture}

The application is cross-platform and available on platforms: Web, iOS, Android
The application has two layout modes:

- phone
- Wide (web, tablet)

Both markups can also be applied across all devices.
The application is based on a single code for all platforms with rare exceptions when:

- The library is not adapted to all platforms (several are used)
- Features of the perception of the interface require the implementation of different functionality / look for different platforms

## Local storage {#local_storage}

The server uses a shared MongoDB database, but mobile devices use an **additional local** MongoDB.

This allows the user to perform the following tasks:

### Data relevance {#data_relevance}

Thanks to synchronization, only relevant information is exchanged.

When communicating with the server, the application sends the following data:

- Reading
  - url (path to the required data area in the database)
  - devicetime (device time at the time the request was sent to the server)
- Recording
  - url (path to the required data area in the database)
  - data (data to write)
  - time (time to read data on the device)
  - devicetime (device time at the time the request was sent to the server)

How the server understands that the information is up-to-date is described in the **synchronization mechanism** section of this chapter.

### Offline {#offline}

Local database on devices allows continuous filling of logs even without network access thanks to **synchronization mechanism**

### Synchronization mechanism {#synchronization_mechanism}

When acting with the database, the data is sent to the server (if there is a network). Otherwise, the transaction is added to the synchronization queue. When a request is received, the server compares the last data modification time in the database and the time specified in the request data.

Data is considered relevant if:
**Read**: if the time per request is less than the last time the data was changed in the database.
**Write**: if the time at the time of writing the data is less than the last time the data was changed in the database. This means that newer data has already been recorded. If the data is up to date, the server overwrites it in the database and returns the current time when writing to the database. (Actual time = req.devicetime - servertime + req.time)

After unloading all the data from the queue, the actual data from the server database is requested to the server.
