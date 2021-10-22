---
sidebar_position: 3
title: "Files"
---

# Обмен файлами

Данный роутер управляет маршрутами **обмена файлами**  

Файлы сохраняются в файловой системе сервера. 
Сервер выступает в роли **FTP** и предоставляет доступ к сохранённым файлам по **прямой ссылке**. Ссылка на сохранённый файл выдаётся сервером в ответе на запрос клиента.  

Сервер принимает **FormData** и выдаёт в ответ метаинформацию о сохранённом файле. 

## Upload images

URL: `/api/files/upload_img`

Машрут для отправки на сервер изображений. 

Тело запроса включает **FormData** с файлами и метаданными.  
Тело ответа включает **JSON** c метаданными о принятых файлах.

```json title="[POST] request body"
[
  {
    "destination": "public/images/full",
    "encoding": "7bit",
    "fieldname": "file",
    "filename": "1631521695124-cake.jpg",
    "mimetype": "image/jpeg",
    "originalname": "cake.jpg",
    "path": "public\\images\\full\\1631521695124-cake.jpg",
    "size": 175981
  }
  ...
  { file_info },
  { file_info }
  ...
]
```

Сервер генерирует миниатюру изображения, сохраняет её в соседнюю с оригиналом папку `resized`, и добавляет путь к миниатюре в ответ (поле `resize`).

```json title="[POST] response body"
[
  {
    "destination": "public/images/full",
    "encoding": "7bit",
    "fieldname": "file",
    "filename": "1631521695124-cake.jpg",
    "mimetype": "image/jpeg",
    "originalname": "cake.jpg",
    "path": "public\\images\\full\\1631521695124-cake.jpg",
    "resize": "public\\images\\resized\\1631521695124-cake.jpg",
    "size": 175981
  }
  ...
  { file_info },
  { file_info }
  ...
]
```


## Upload files

URL: `/api/files/upload_files`

Машрут для отправки на сервер файлов.  

Тело запроса включает **FormData** с файлами и метаданными.  
Тело ответа включает **JSON** c метаданными о принятых файлах.

```json title="[POST] request body"
[
  {
    "destination": "public/images/full",
    "encoding": "7bit",
    "fieldname": "file",
    "filename": "1631521695124-cake.jpg",
    "mimetype": "image/jpeg",
    "originalname": "cake.jpg",
    "path": "public\\files\\1631521695124-test.txt",
    "size": 175981
  }
  ...
  { file_info },
  { file_info }
  ...
]
```

```json title="[POST] response body"
[
  {
    "destination": "public/images/full",
    "encoding": "7bit",
    "fieldname": "file",
    "filename": "1631521695124-cake.jpg",
    "mimetype": "image/jpeg",
    "originalname": "cake.jpg",
    "path": "public\\files\\1631521695124-test.txt",
    "size": 175981
  }
  ...
  { file_info },
  { file_info }
  ...
]
```

## (deprecated) Download image 

URL: `/api/files/download_img`

В случае, если вам нужен не просмотр, а полноценное скачивание файла.

```json title="[POST] request body"
{
  "mimetype": "image/png",
  "path": "public\\images\\full\\1631521695124-cake.jpg",
}
```

```json title="[POST] response body"
  { "file": "<base64 string>" }
```

## (deprecated) Download file

URL: `/api/files/download_files`

В случае, если вам нужно полноценное скачивание файла.  

```json title="[POST] request body"
{
  "path": "public\\files\\1631521695124-test.txt",
}
```

Ответ представляет файл и отправляется через res.sendFile(filePath) 

```json title="[POST] response body"
  { "file": <file obj> }
```