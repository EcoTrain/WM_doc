---
sidebar_position: 2
title: Release notes
slug: /presentation/release_notes
---

## v0.1

### Build №7

#### Diaries

- [x] Correction of information presentation method
- [x] Log limit for the selected period
- [x] Constructor form validation
- [x] Remove aggregation on chart preview (don't combine last measurements)
- [x] Move chart with preview to diary window
- [x] Fixed date interval along the axis, dates do not overlap
- [x] Autocomplete diaries (simulated activity)
- [x] Deleting a diary

#### Medicines

- [x] View in a separate window
- [x] Removal of medication

### Build №9

#### Medicines

- [x] Search in the database
- [x] Form validation on creation

#### Diaries

- [x] Autocomplete (in profile settings)
- [x] Form validation on creation
- [x] Search in the database
- [x] View in a separate window

#### Scheduler

- [x] Form validation on creation
- [x] Search in the database
- [x] View in a separate window

#### Переменные

- [x] Form validation on creation
- [x] Search in the database
- [x] View in a separate window

### Build №10

#### Editing in a separate window

- [x] Medicines
- [x] Diaries
- [x] Events
- [x] Variables

#### Scheduler

- [x] Deleting events
- [x] Fixed position of events on the board

#### Variables

- [x] Removing variables

### Build №11

#### Diaries

- [x] Data aggregation on the chart for the selected period (when viewing the diary log)
- [x] Removed dots on chart preview
- [x] The preview shows the last 10 values
- [x] Fixed chart drawing size (now on the entire canvas)
- [x] Fixed out of range value on mobile devices

#### Chats

- [x] Added header on mobile devices
- [x] Clearing the input field when submitting from mobile devices
- [x] Added "Back" button on mobile devices
- [x] Fixed elapsed time calculation in chart log

### Build №12

#### Chats

- [x] Implemented attachment selection menu using the iOS keyboard
- [x] Added the ability to send attachments from iOS
- [x] Added the ability to edit an attachment

### Build №13

- [x] Brighter PIN code on mobile devices
- [x] Adding a city to your profile
- [x] Auto-update diaries after auto-generation
- [x] Update chats after adding user from search
- [x] Smoother Graph Smoothing
- [x] Taking into account limits when adding a value to the chart. Alert the user if the value is out of range.
- [x] Update Diary Graph When Value Is Added
- [x] Added units of measurement in diaries
- [x] Fixed bug with NaN in diaries
- [x] Added waiting animation when auto-generating diary entries

### Build №14

- [x] Button to show password during authorization
- [x] Transliteration of file names when saving on the server
- [x] Fixed bug with keyboard height on iOS
- [x] Saving chats for both interlocutors
- [x] Case insensitive search

### Build №15

- [x] Restructured database structure for chats
- [x] Sockets. Auto-update messages in chat

### Build №17

- [x] Email validation during registration
- [x] Checking for a user with the same name / email during registration
- [x] Authorization by login or email
- [x] Changed database structure for chats (chats are separate from users)

### Build №18-19

- [x] Sockets work in chat over https

### Build №20

- [x] Limit on the size of uploaded images 2mb
- [x] Hashing the names of uploaded images (unique names)
- [x] Create thumbnails when uploading images
- [x] Decomposition of the database, reduction to normal form
- [x] Allow \_ in email when registering
- [x] Fixed a bug with freezing after switching to the scheduler

### Build №22

- [x] Checking for the existence of a chat when creating a new one, even without refreshing the page / application (preventing duplicate chats)
- [x] Reference data to users in chat (dynamic update)

### Build №23

- [x] Header in diaries on mobile devices
- [x] Firebase messaging
  - [x] New chat notifications
  - [x] Notifications for new chat messages

### Build №24

- [x] Collapse notifications by category. (Only the last of the category is shown)
- [x] Logging out of the account on all devices when deleting account data from the database
- [x] Deleting a profile
- [x] Rewritten modal windows on a more stable and cross-platform library.
- [x] Added a check for the presence of variables in the diary constructor expression. (Expression cannot consist of constants)

### Build №25

**Исправлено:**

- [x] Error with empty login
- [x] Error when there is no avatar in the chat

**Добавлено:**

- [x] System monitoring with Sentry

### Build №27

- [x] Fixed number of allowed expressions for each diary chart type
- [x] Fixed a bug with color disappearing in the diary designer after switching to other menus

### Build №28

- [x] Prometheus metric collection system set up
- [x] Grafana metrics monitoring service set up
- [x] Compressing transmitted data on Nginx
- [x] Compressing JS / CSS code before building the application on the server
- [x] Code obfuscation (hiding sources, less code transfer)
- [x] Display thumbnails of pictures in chat before loading full-size ones
- [x] Image compression on save

### Build №29

- [x] Fixed data validation in the dialog

### Build №30

**General**

- [x] Removed scroll invert in chat
- [x] Animation while loading data
- [x] Allowed fractional values in dialog boxes
- [x] Raise content when keyboard appears (does not overlap)
- [x] Internationalization of the application for ru/en segments
- [x] Fixed waiting animation when filling diaries
- [x] Fixed error message appearing in dialogs outside the window

**PIN code**

- [x] Locking
  - - [x] Limiting the number of attempts
  - - [x] Screen lock for a while
  - - [x] Styling the lock screen

**Checking for connectivity**

When there is no connection:

- [x] Chat messages not sending
- [x] All data is cached on the device
- [x] The user is notified in the profile

**Offline mode**

- [x] Network connection tracking
- [x] Notifying the user that there is no network connection
- [x] Server error tracking
- [x] Tracking the lack of communication with the server
- [x] User Notification of Data Transfer Error
- [x] Saving Data to the Sync Queue
- [x] Synchronization on connection or application reload
- [x] Data Relevance Check

**Chats**

- [x] Prohibition of sending messages when there is no connection
- [x] Count unread messages
- [x] Sync read messages when chat is selected
- [x] Auto sync for current chat (if any chat is open)
- [x] Notifying the user about the lack of connection with the server (realtime)

### Build №31

- [x] Refactoring the internationalization mechanism to be able to add any language
- [x] Fixed message text on PIN code screen
- [x] Actions with messages:
  - - [x] Choice (only from your own)
  - - [x] Editing (only from your own)
  - - [x] Removing one (only from your own)
  - - [x] Deleting Selected

### Build №32

- [x] Flag that the post has been edited
- [x] Action bar in the chat header (in message selection mode)
- [x] Attaching multiple images in a chat
- [x] View images in a message as a gallery in a dialog box
- [x] Attaching multiple documents in a chat
- [x] Download documents in chat
- [x] Edit attachments in chat

### Build №33

- [x] Clicks on a message don't trigger attachments
- [x] The gallery opens from the clicked image (not the first one)
- [x] Selected messages are marked with a color and a checkBox on the right
- [x] A click on a message is processed across the entire width of the chat area (and the height of the message)

### Build №34

- [x] Hotfix message styles in select mode
- [x] Confirm when deleting messages

### Build №37

- [x] Hotfix message styles
- [x] Select messages on click without context menu
- [x] Attachments are triggered regardless of the message mode

### Build №38

- [x] HotFix Attachment Styles
- [x] Limiting the number of attachments to 10
- [x] Limiting the height of the attachment area on the screen
- [x] Scroll attachments (area does not go beyond the screen)
- [x] Notification when downloading files from chat
- [x] Handle clicking on notifications (file opens)

### Build №41

- [x] HotFix hangs due to new dependencies of the new version of React (added missing ones)
- [x] Reduced number of chat redraws when selecting messages
- [x] Fix input positions in chat when changing phone orientation (when keyboard is open)
- [x] Fix positions of all elements when the keyboard appears on mobile devices
- [x] Updated all react-libraries, JDK, SDK (raised the relevance of the stack for another 3-4 years)
- [x] Added dictionary of translations (internationalization)

### Build №43

- [x] Delete chat (for creator)
- [x] Deleting files from the server when deleting messages/chat
- [x] Fix combining attachment types in one message
- [x] Registration confirmation by mail
- [x] Creating a preset only after confirmation (reducing garbage in the database)
- [x] Handling clicks on notifications in the background

### Build №44-45

- [x] Work when receiving notifications in the background
- [x] Reducing the amount of data in the transmitted token between the server and the client to identify the user
- [x] Change password by mail
- [x] Short links in emails using html transfer

### Build №46

- [x] Resending an email to verify your account
- [x] Fix unread message counter

### Build №49

- [x] Autocomplete diaries with one request to the server
- [x] Pagination and drug search
- [x] History limit when downloading diaries (issued for the last month)
- [x] Chat messages are divided by date, only the time is indicated in the message
- [x] Fix loading medicines on scroll
- [x] Fix log size when viewing diary on large screens

### Build №50

- [x] Added internationalization dictionary
- [x] Reduced application size, reduced redundancy in the amount of libraries

### Build №52

- [x] Added work with arrays
- [x] Pagination of user data (loading data in parts)
- [x] Added validation of expressions in the diary constructor (reducing the number of errors)

### Build №53

- [x] Chat pagination (loading data in parts)
- [x] Messages and users as arrays
- [x] Creating a server-side chat
- [x] Adding a chat to users after 1 message in it
- [x] Exit chat
- [x] When the last user logs out, the chat is deleted.

### Build №54

- [x] Exit the chat while saving the correspondence
- [x] Deleting a chat, erasing correspondence (personally for each user in the chat)
- [x] Notifications and creating a chat with the user when receiving a message

### Build №58

- [x] Chat settings
- [x] Group chats
  - - [x] Chat builder (selection of participants, name of the conversation, change of roles and avatar, etc.)
  - - [x] Exit the chat (both modes, as in personal correspondence)
  - - [x] Chat user roles (admin/user)
  - - [x] Assign new admin when last admin exits

### Build №59

- [x] English by default

### Build №60

- [x] Added copyright screen for authorization and registration in the application and on the website

### Build №61

- [x] Fixed some spelling errors and title style in chat builder

### Build №62

- [x] Multiline message entry in chat
- [x] Line wrap message via ctrl+enter or shift+enter
- [x] Selecting a group of messages (by holding down the shift key)
- [x] Fixed a bug with the absence of a diary chart with a small dataset
- [x] Fixed prefixes and suffixes in diary datasets

### Build №63

- [x] Hidden diary autofill in production mode
- [x] Dark theme
  - - [x] Initialize app with device theme
  - - [x] Switch the theme. Dark/Light
  - - [x] Save theme
  - - [x] Dark theme colors
- [x] Advanced unlock options
  - - [x] PIN Screen: rewritten, more features, better looking
  - - [x] PIN Screen: IPhone pin/TouchID/FaceID unlock available
- [x] Fixed a bug with the last date in the diary in the absence of data

### Build #64

- [x] Changed color palette in themes
- [x] Delete profile button highlighted
- [x] Decreased brightness of avatars in dark theme

## v1.1

### Build #2

- [x] The application has been renamed, now in the file system it has an identifier and the name "Wellness Monitor"
- [x] Changed colors of placeholders in dark theme
- [x] Calendar redraw on theme change
- [x] Dark theme just got darker
- [x] Light theme got even lighter (and in the same color palette)
- [x] Added stub to chats (for beginners)
- [x] Changed text on permission request dialogs
- [x] Re-request permissions to the gallery and camera (if previously denied)
- [x] Using webcam in browser
- [x] Added tooltip to buttons
- [x] Reduced total package size of used libraries by 15-20%
- [x] Calendar localized
- [x] Autofocus on input field in chat

### Build #3 (future)

- [x] User roles and permissions
- [x] Administrator cabinet and user management
- [x] Fixed cascading deletion of user data
- [ ] Editing diaries
  - - [ ] Diary color
  - - [ ] Diary icon
  - - [ ] Serial number
  - - [ ] Data set colors
  - - [ ] Diary type
- [ ] ...