---
id: chat
title: Chat
slug: /presentation/chat
---

Chat is the main method of interaction between users. Here, users can exchange various types of information. Currently, among the `types of information` available:

- `Text`
- `Image`
- `Document`

### Chat window interface

At the heart of the chat, the selection window is the `SearchPanel` component, as in the Diaries. This allows both local searches for chats by users and global searches for all users.

Depending on the width of the screen, the chat window appears as a separate window or is displayed to the right of the chat list.

<div align="center">
    <img type="imgscreen" src="/WM_doc/img/presentation/chat/chatViewOpen.png"/>
</div>

### Attachments

To send non-text data, a menu for selecting attachments is implemented under the text input field. To activate it, you need to click on the button <i class="fa fa-puzzle-piece d"></i>

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/chat/chatAssetsMenu.png"/></div>

In this menu, you can select attachments to send to your interlocutor.

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/chat/chatAssetsReady.png"/></div>

**Images** are limited to 2MB.
Sending methods: selecting a file from the storage, using the camera
Formats: .png, .jpg, .jpeg

**Documents**
Sending methods: selecting a file from storage
Formats: .doc, .docx, .pdf

## Chat settings

In the chat header there is a button to go to the settings window.
In the chat settings you can do:

- Hide chat (all messages are available when you return to the chat)
- Clear chat (deletes all old messages)
- Delete chat (the chat is hidden and all old messages are deleted)

Various actions are available to you depending on your role (rights) in the chat.

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/chat/chatSettings.png"/></div>

## Create a group chat

Also in the user search window there is a button for creating a group chat. To create a group chat, you only need to add users and specify a name for the chat.

> Group chats are not unique and can be created with the same settings.

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/chat/chatCreate.png"/></div>
