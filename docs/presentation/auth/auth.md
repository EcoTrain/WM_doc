---
id: auth
title: Authentication
slug: /presentation/security
---

## Registration {#signup}

Registration requires:

- Username (unique)
- Mail (unique)
- Password

After registration, you will be sent an email to confirm your registration.

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/auth/signup.png"/></div>

## Login {#login}

The first login to the application is through the authorization page.

Login requires:

- Username / Email
- Password
<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/auth/login.png"/></div>

## Pincode <span class="pin mobile"></span> {#pincode}

In mobile versions, after authorization, you need to add a pincode. Further, each time you enter the application, you must enter the previously created code. If you have forgotten your PIN, you can reset your PIN and log in again by clicking on the "Reset PIN" button.

<div align="center">
    <img type="imgscreen" src="/WM_doc/img/presentation/auth/pin/pin_enter.png"/>
    <img type="imgscreen" src="/WM_doc/img/presentation/auth/pin/pin_lock.png"/>
</div>

- For iOS users, it is possible to log in with a device PIN code instead of an application PIN code
- Possible to disable via settings in future releases

## FaceID/TouchID <span class="pin ios"></span> {#faceid}

iOS users can unlock using TouchID or FaceID instead of entering a PIN code

## Protection

- User data is transmitted via the HTTPS protocol
- Confidential data is encrypted on the client and decrypted on the server using the private key
- Personal data is stored in the database in encrypted form
