# Storage Function 
[![npm version](https://badge.fury.io/js/storage-function.svg)](https://badge.fury.io/js/storage-function) ![npm](https://img.shields.io/npm/dt/storage-function?label=Downloads&logo=npm) [![NPM Publish](https://github.com/sametcelikbicak/storage-function/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/sametcelikbicak/storage-function/actions/workflows/npm-publish.yml) [![CodeQL Analyze](https://github.com/sametcelikbicak/storage-function/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/sametcelikbicak/storage-function/actions/workflows/codeql-analysis.yml)

A function to manipulate browser storages. Before **2.0.0** version each function should be import itself like below
```typescript
import { toLocalStorage, toSessionStorage } from 'storage-function';
```
 or import them with an alias like below

```typescript
 import * as storageFunction from 'storage-function';
```
With **2.0.0** version its enough to just import **storageFunction** then you can reach all helpful function under it

## Installation

```
npm i storage-function
```

## Table of contents

<!-- toc -->
- ##### Local Storage functions
  * [toLocalStorage](./src/storage/local/README.md#toLocalStorage)
  * [fromLocalStorage](./src/storage/local/README.md#fromLocalStorage)
  * [removeFromLocalStorage](./src/storage/local/README.md#removeFromLocalStorage)
  * [clearLocalStorage](./src/storage/local/README.md#clearLocalStorage)
  * [getKeysFromLocalStorage](./src/storage/local/README.md#getKeysFromLocalStorage)
  * [getAllFromLocalStorage](./src/storage/local/README.md#getAllFromLocalStorage)
  * [getKeysCountFromLocalStorage](./src/storage/local/README.md#getKeysCountFromLocalStorage)

- ##### Session Storage functions
  * [toSessionStorage](./src/storage/session/README.md#toSessionStorage)
  * [fromSessionStorage](./src/storage/session/README.md#fromSessionStorage)
  * [removeFromSessionStorage](./src/storage/session/README.md#removeFromSessionStorage)
  * [clearSessionStorage](./src/storage/session/README.md#clearSessionStorage)
  * [getKeysFromSessionStorage](./src/storage/session/README.md#getKeysFromSessionStorage)
  * [getAllFromSessionStorage](./src/storage/session/README.md#getAllFromSessionStorage)
  * [getKeysCountFromSessionStorage](./src/storage/session/README.md#getKeysCountFromSessionStorage)

- ##### Storage functions
  * [clearStorage](./src/storage/README.md#clearStorage)
  * [getKeys](./src/storage/README.md#getKeys)
  * [getAll](./src/storage/README.md#getAll)
  * [getKeysCount](./src/storage/README.md#getKeysCount)
<!-- tocstop -->

