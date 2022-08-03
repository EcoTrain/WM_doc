---
id: tasklist
title: Feature announcement
slug: /releases/tasklist
---

## [Diaries](/docs/guide/history)

- [ ] Search in the catalog databases
- [ ] Unit = select list
- [ ] Nutriology
- - [ ] Data structure
- - [ ] Create product catalog
- - [ ] Adding new products to the database
- - [ ] Graph = progress (calorie limit)
- - [ ] Log = per day

### Types of diaries:

- [ ] WaterFall
- [ ] Bar Chart
- [ ] Pie Chart
- [ ] Combine Chart

### Other settings:

- [ ] Diary color
- [ ] Diary icon
- [ ] Order number
- [ ] Data set colors
- [ ] Diary type

**optional**

- [ ] Resizing 0.125 | 0.25 | 0.625 | 0.75

### [Variables](/docs/guide/history/constructor_diary)

- [ ] Additional limits (warning thresholds) for variables
- [ ] Personal icons for variables

### [Medicines](/docs/guide/medicines)

[Constructor](/docs/guide/medicines#creation)

- [ ] Sending in chat

### Documentation

Documents should include fields such as:

- [ ] Document type
- [ ] Service fields (series, number, ...)
- [ ] Image set (optional)

### Analyzes

Analyzes should include fields such as:

- [ ] Type of analysis
- [ ] Service fields (its own set for each type ...)
- [ ] Image set (optional)

## [Authorization](/docs/guide/security)

- [ ] Login through Google services
- [ ] Login via VK
- [ ] Login with TouchID / FaceID
- [ ] Registration form
- [ ] Per-device token login and 'Logout on all devices' option

## [Scheduler](/docs/guide/schedule)

- [ ] Event grouping (for the same time and date)
- [ ] Event Notifications (via Firebase)
- [ ] A mark on the completion of events
- [ ] Binding execution to history
- [ ] View information about the event in a separate window
- [ ] Event type selection window in modal
- [x] Editing events
- [ ] Stylization of events. Settings.
- [ ] Filtering events by types in the wide version
- [ ] New types of events
  - - [ ] Making an appointment with a doctor
  - - [ ] Diary reminder

## Profile

- [ ] Document section
  - - [ ] Document builder with type selection
  - - [ ] View
  - - [ ] Removal
  - - [ ] Editing
- [ ] Analysis section
  - - [ ] Analysis constructor with type selection
  - - [ ] View
  - - [ ] Removal
  - - [ ] Editing
- [ ] More personal information (optional)

## [Chat](/docs/guide/chat)

- [ ] Checking if a message has been sent
  - - [ ] In case of failure, cache the message
  - - [ ] In case of failure, hang a button with (!)
  - - [ ] By the button to offer to send again. Collect data and resend.
- [ ] Fast diary sending
  - - [ ] Collection of all data into one object
  - - [ ] Getting information about the diary from the link
  - - [ ] Send data in chat
- [ ] Fast medication sending
  - - [ ] Collection of all data into one object
  - - [ ] Obtaining information about the drug by reference
  - - [ ] Send data in chat
- [ ] Implementation of the exchange of other [`types of information`](/docs/guide/chat)
- [ ] Search by messages
- [ ] Improved user search (more search options)
- [ ] Personal chat settings
  - - [ ] Receive notifications
  - - [ ] Leave the chat
- [ ] Photo gallery
  - - [ ] Rewrite for mobile phones (full screen, like VK)
  - - [ ] Add button "download full"

### Notifications

- [ ] Notifee integration with Firebase
- [ ] Styling notifications

### Map

- [x] Map display
- [x] Geolocation request
- [x] Navigate to the user's location
- [ ] Adding labels with information
- [ ] Display labels with information
- [ ] View labels (click on the marker)
- [ ] Building routes to points

### QR codes

- [ ] Opening links through the application (home page and QR)
- [ ] QR code access settings
  - - [ ] QR code lifetime
  - - [ ] Opening/closing access to information on it
  - - [ ] Share via other applications

## General

- [ ] 3 picture sizes
- - [ ] Thumbnail 128px (background)
- - [ ] Resize 320px (View)
- - [ ] Full (downloaded separately from the link)
