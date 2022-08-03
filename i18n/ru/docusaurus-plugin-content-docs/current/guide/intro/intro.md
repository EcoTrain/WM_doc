---
id: guide_intro
title: О проекте
slug: /guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import LogoDiary from '@site/static/img/guide/about/functional/diary_logo.svg';
import LogoScheduler from '@site/static/img/guide/about/functional/scheduler_logo.svg';
import LogoChat from '@site/static/img/guide/about/functional/chat_logo.svg';
import LogoSync from '@site/static/img/guide/about/functional/sync_logo.svg';
import LogoOffiline from '@site/static/img/guide/about/functional/offline_logo.svg';

Ассистент предназначен для поддержки и сопровождения пользователей, а также поддержания связи с другими пользователями. Для пользования ассистентом достаточно лишь зарегистрироваться, что занимает меньше минуты. Данный ассистент, помогает мониторить показатели вашего здоровья, планировать программу лечения, питания и приёма медикаментов, общаться с другими пользователями.

## Функционал

<Tabs className="unique-tabs" style={{}}>
    <TabItem label="Health diaries" value='1'>
        <LogoDiary className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        <a href="/docs/guide/history">Дневники здоровья</a> позволяют следить за показателями здоровья. График дневника агрегирует ваши данные по выбранному периоду и отражает динамику изменения показателей. Вы можете настроить виджеты дневника под себя и изменить как визуальные параметры, так и показатели которые учитывает ваш дневник.
    </TabItem>
    <TabItem label="Event Scheduler" value='2'>
        <LogoScheduler className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        Создавайте одиночные и повторяющиеся мероприятия с напоминаниями в <a href="/docs/guide/schedule">планировщике</a>. Это поможет вам придерживаться режима приема лекарств, вести дневник и следить за личными вещами, такими как визиты к врачу.
    </TabItem>
    <TabItem label="Chat" value='3'>
        <LogoChat className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        Вы можете обмениваться сообщениями в <a href="/docs/guide/chat">чате</a>, прикреплять изображения и документы. Найдите пользователя с помощью строки поиска и напишите ему или создайте групповой чат. Обо всех событиях в чате вы будете уведомлены push-уведомлением или мгновенным обновлением информации на экране.
    </TabItem>
    <TabItem label="Offline mode" value='5'>
        <LogoOffiline className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        Если у вас нет доступа к интернету, все ваши данные будут сохранены на устройстве и добавлены в очередь на отправку.
    </TabItem>
    <TabItem label="Synchronization" value='6'>
        <LogoSync className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
        При появлении доступа в интернет данные синхронизируются с сервером и обновляются на устройстве.
    </TabItem>
</Tabs>

## Планы

<Tabs className="unique-tabs" style={{}}>
    <TabItem label="Nutriciology" value='1'>
        <img align="left" src="/WM_doc/img/guide/about/plan/nutriciolory_logo.svg" style={{width: "10%",marginRight: 20}}/>
        Мониторинг белков, жиров и углеводов. Соблюдение режима питания. Подсчёт калорий.
    </TabItem>
    <TabItem label="Help map" value='2'>
        <img align="left" src="/WM_doc/img/guide/about/plan/map_logo.svg" style={{width: "10%",marginRight: 20}}/>
       Отображение полезных мест на карте и построение маршрутов до них. Таких как места оказания медицинской помощи или страховые компании.
    </TabItem>
    <TabItem label="Chat" value='3'>
        <img align="left" src="/WM_doc/img/guide/about/plan/chat_logo.svg" style={{width: "10%",marginRight: 20}}/>
        Обмен новыми типами вложений, таких как медикаменты и дневники. Персональные настройки. Пересылка сообщений.
    </TabItem>
    <TabItem label="Diaries" value='4'>
        <img align="left" src="/WM_doc/img/guide/about/plan/chart_logo.svg" style={{width: "10%",marginRight: 20}}/>
        Новые типы диаграмм (баланс жидкости, круговая и столбчатая диаграммы и т. д.), изменение порядка виджетов, экспорт данных.
    </TabItem>
    <TabItem label="Scheduler" value='5'>
        <img align="left" src="/WM_doc/img/guide/about/plan/chat_logo.svg" style={{width: "10%",marginRight: 20}}/>
        Оповещения о запланированых событиях и задачах, новые типы задач, такие как посещение врача или ведение дневника
    </TabItem>
    <TabItem label="Authorization" value='6'>
        <img align="left" src="/WM_doc/img/guide/about/plan/auth_logo.svg" style={{width: "10%",marginRight: 20}}/>
        Использование сторонних сервисов, таких как Google, Facebook, Apple
    </TabItem>
</Tabs>

:::info Подробнее

более подробный план задач находится в разделе **[Анонс функций](/docs/releases/tasklist)**

:::

## О руководстве пользователя

Данный сайт является руководством пользователя приложения [`Wellness Monitor`](https://wellness.a2rd.com).

В меню навигации вы можете найти интересующие вас разделы, чтобы ознакомиться с функционалом и инструкциями пользования.

Также здесь ведётся [`логирование релизов`](/docs/releases/notes), описание выпущенных сборок приложения и планируемый функционал в будущем.

### Маркеры платформ

В навигации могут встречаться **пины** разных цветов. Наличие пина говорит о поддержке какого-либо модуля только одной или двумя платформами.

- ![#f03c15](https://via.placeholder.com/15/000000/000000?text=+) ` iOS`
- ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) ` Android`
- ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) ` Web`
