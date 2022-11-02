---
id: newArch_dev
title: Разработка
slug: /releases/newArch/forDevs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import LogoPython from '@site/static/img/guide/about/stack/python_logo.svg';
import LogoRN from '@site/static/img/guide/about/stack/rn_logo.svg';
import LogoPostgre from '@site/static/img/guide/about/stack/postgresql_logo.svg';
import LogoMongo from '@site/static/img/guide/about/stack/mongo_logo.svg';
import LogoFirebase from '@site/static/img/guide/about/stack/firebase_logo.svg';

# WM v2.0. Разработка

:::info 
Версия 2.0 находится в разработке и реализуется параллельно с основным приложением. 
:::

## Удобство

### API 2.0: Расширенные возможности пользователей

Абстрактное API. Меньше объём кода и время выполнения запроса. Быстрее обслуживание большого количества клиентов. Легче масштабирование и модификации.

### Автодокументация

Автоматически генерируемая документация API при написании кода
(отдельная техническая документация)

### Панель администратора

Личный кабинет администратора для управления БД и пользователями.

### Репликация БД

Ваши данные надёжно сохранены в нескольких копиях и локациях. В случае сбоя на одном из наших серверов, ваши данные будут восстановлены из других хранилищ и доступны вам.

## Оптимизация

### Реляционность БД

Связность сущностей, нормальная форма БД, отсутствие дублирования информации.  
 Быстрее запросы, меньшее количество запросов к БД при помощи ключей отношений между сущностями БД.

> Часть данных перенесена на PostgreSQL (сервер) и SQLite (мобильное приложение)

### Балансировка нагрузки и паралеллизм API

Децентрализованная сеть серверов в разных странах позволяет быстрее реагировать на запросы пользователей, обращаясь к наиболее близкому серверу. Вся наша аудитория разделена по географическим зонам в целях улучшения качества обслуживания пользователей.

### Логирование всех транзакций (MongoDB)

Все действия пользователей логируются и отслеживаются.  
(В целях отслеживания причин возникновения ошибок и сбоев)

## Новый стек технологий

<Tabs>
  <TabItem value="FastAPI" label="FastAPI" default style={{display: 'flex'}}>
    <LogoPython className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    Python (FastAPI) позволяет быстро обрабатывать большое количество запросов и охватывать большую аудиторию пользователей при минимальном количестве кода и абстрактном API.
  </TabItem>
  <TabItem value="React Native" label="React Native">
    <LogoRN className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    Наш интерфейс написан на React Native, что позволяет обеспечить кроссплатформенность продукта и поддержку Web, iOS, Android
  </TabItem>
  <TabItem value="PostgreSQL" label="PostgreSQL">
    <LogoPostgre className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    Используется для хранения пользовательских данных и каталогов. Реляционность позволяет избежать дублирования данных, минимизировать количество запросов к серверу и БД. Репликация позволяет надёжно сохранить ваши данные, сохраняя их в нескольких копиях, а также обеспечить надёжную и быструю поддержку клиентов в разных частях мира.
  </TabItem>
  <TabItem value="MongoDB" label="MongoDB">
    <LogoMongo className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    Используется для регистрации и учёта транзакций, что обеспечивает контроль действий пользователей и отслеживание возникновения сбоев в работе системы.
  </TabItem>
  <TabItem value="Firebase" label="Firebase">
    <LogoFirebase className="blackSvgIcon"  style={{width: "10%",height: '100%',marginRight: 20, float: 'left'}}/>
    Вы будете оповещены о важных событиях. Настраивайте свои уведомления или получайте их от других пользователей. Все взаимодействия между пользователями сопровождаются динамическим обновлениям данных на обоих устройствах
  </TabItem>
</Tabs>
