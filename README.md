<div align="center">

 <img src="assets/storage-function.svg" alt="Logo" width="256" height="256">

# Storage Function 
![npm](https://img.shields.io/npm/v/storage-function?color=g&label=storage-function&logo=npm) ![npm](https://img.shields.io/npm/dy/storage-function?label=Downloads&logo=npm) [![CodeQL Analyze](https://github.com/sametcelikbicak/storage-function/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/sametcelikbicak/storage-function/actions/workflows/codeql-analysis.yml) [![Build & Test](https://github.com/sametcelikbicak/storage-function/actions/workflows/build-test.yml/badge.svg)](https://github.com/sametcelikbicak/storage-function/actions/workflows/build-test.yml) ![dependabot](https://img.shields.io/badge/Dependabot-active-g?logo=dependabot)

![GitHub Repo stars](https://img.shields.io/github/stars/sametcelikbicak/storage-function?style=social)

A function to manipulate browser storages. Such as store a key value pair to  session or local storage,  getting  key value pairs from local or session storage.You can check all available functions for more details.
</div>

## Table of contents

<!-- toc -->
- ##### [Installation](#installation)
- ##### [Breaking Change](#breaking-change)
- ##### [Usage](#usage)
- ##### Local Storage functions
  * [toLocalStorage](#tolocalstorage-usage)
  * [fromLocalStorage](#fromlocalstorage-usage)
  * [removeFromLocalStorage](#removefromlocalstorage-usage)
  * [clearLocalStorage](#clearlocalstorage-usage)
  * [getKeysFromLocalStorage](#getkeysfromlocalstorage-usage)
  * [getAllFromLocalStorage](#getallfromlocalstorage-usage)
  * [getKeysCountFromLocalStorage](#getkeyscountfromlocalstorage-usage)

- ##### Session Storage functions
  * [toSessionStorage](#tosessionstorage-usage)
  * [fromSessionStorage](#fromsessionstorage-usage)
  * [removeFromSessionStorage](#removefromsessionstorage-usage)
  * [clearSessionStorage](#clearsessionstorage-usage)
  * [getKeysFromSessionStorage](#getkeysfromsessionstorage-usage)
  * [getAllFromSessionStorage](#getallfromsessionstorage-usage)
  * [getKeysCountFromSessionStorage](#getkeyscountfromsessionstorage-usage)

- ##### Storage functions
  * [clearStorage](#clearstorage-usage)
  * [getKeys](#getkeys-usage)
  * [getAll](#getall-usage)
  * [getKeysCount](#getkeyscount-usage)

- ##### [Contribute](#want-to-contribute)
<!-- tocstop -->

## Installation

```shell
npm i storage-function
```

## Breaking Change
Before **2.0.0** version each function should be import itself like below
```typescript
import { toLocalStorage, toSessionStorage } from 'storage-function';
```
 or import them with an alias like below

```typescript
 import * as storageFunction from 'storage-function';
```
With **2.0.0** version its enough to just import **storageFunction** then you can reach all helpful function under it like below.
```typescript
import { storageFunction } from 'storage-function';
```

## Usage

#### Local storage key and value definitions
Sample key and value definition for testing local storage functions.
```typescript
const localStorageKey = 'local_storage_key';

const localStorageValue = {
  name: 'object value',
  stringValue: 'string value',
  booleanValue: true,
  numberValue: 1234567890,
  dateValue: new Date(),
};
```

##### - toLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toLocalStorage(localStorageKey, localStorageValue);
```

##### - fromLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.fromLocalStorage(localStorageKey));

Result:
{"name":"object value","stringValue":"string value","booleanValue":true,"numberValue":1234567890,"dateValue":"2021-08-22T15:57:05.147Z"}
```

##### - removeFromLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.removeFromLocalStorage(localStorageKey);
```

##### - clearLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.clearLocalStorage(); // Remove all local storage keys

const exceptedKeys = ['some_key', 'another_key'];
storageFunction.clearLocalStorage(exceptedKeys); // Remove all local storage keys except exceptedKeys
```

##### - getKeysFromLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getKeysFromLocalStorage());

Result:
(2) ["localKey2", "localKey1"]
0: "localKey2"
1: "localKey1"
```

##### - getAllFromLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getAllFromLocalStorage());

Result:
(2) [{…}, {…}]
0: {localKey2: "\"Local storage value 2\""}
1: {localKey1: "\"Local storage value 1\""}
```

##### - getKeysCountFromLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toLocalStorage(localStorageKey, localStorageValue);

console.log(storageFunction.getKeysCountFromLocalStorage());

Result:
1
```

---

#### Session storage key and value definitions
Sample key and value definition for testing session storage functions.
```typescript
const sessionStorageKey = 'session_storage_key';

const sessionStorageValue = {
  name: 'object value',
  stringValue: 'string value',
  booleanValue: true,
  numberValue: 1234567890,
  dateValue: new Date(),
};
```

##### - toSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toSessionStorage(sessionStorageKey, sessionStorageValue);
```

##### - fromSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.fromSessionStorage(sessionStorageKey));

Result:
{"name":"object value","stringValue":"string value","booleanValue":true,"numberValue":1234567890,"dateValue":"2021-08-22T15:58:28.646Z"}
```

##### - removeFromSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.removeFromSessionStorage(sessionStorageKey);
```

##### - clearSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.clearSessionStorage(); // Remove all session storage keys

const exceptedKeys = ['key_one', 'keyTwo'];
storageFunction.clearSessionStorage(exceptedKeys); // Remove all session storage keys except exceptedKeys
```

##### - getKeysFromSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getKeysFromSessionStorage());

Result:
(2) ["sessionKey2", "sessionKey1"]
0: "sessionKey2"
1: "sessionKey1"
```

##### - getAllFromSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getAllFromSessionStorage());

Result:
(2) [{…}, {…}]
0: {sessionKey2: "\"Session storage value 2\""}
1: {sessionKey1: "\"Session storage value 1\""}
```

##### - getKeysCountFromSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toSessionStorage(sessionStorageKey, sessionStorageValue);

console.log(storageFunction.getKeysCountFromSessionStorage());

Result:
1
```

---

#### Storage functions definition
They work with local and session storage.

##### - clearStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.clearStorage(); // Remove all storage keys

const exceptedKeys = ['id_token', 'access_token'];
storageFunction.clearStorage(exceptedKeys); // Remove all storage keys except exceptedKeys
```

##### - getKeys usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getKeys());

Result:
{localStorage: Array(2), sessionStorage: Array(2)}
localStorage: (2) ["localKey2", "localKey1"]
sessionStorage: (2) ["sessionKey2", "sessionKey1"]
```

##### - getAll usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getAll());

Result:
{localStorage: Array(2), sessionStorage: Array(2)}
localStorage: Array(2)
0: {localKey2: "\"Local storage value 2\""}
1: {localKey1: "\"Local storage value 1\""}
sessionStorage: Array(2)
0: {sessionKey2: "\"Session storage value 2\""}
1: {sessionKey1: "\"Session storage value 1\""}
```

##### - getKeysCount usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toLocalStorage(localStorageKey, localStorageValue);
storageFunction.toSessionStorage(sessionStorageKey, sessionStorageValue);

console.log(storageFunction.getKeysCount());

Result:
{localStorage: 1, sessionStorage: 1}
```

## Want to contribute?
You can read and follow our [CONTRIBUTING.md](CONTRIBUTING.md) and report it using
[GitHub Issues](https://github.com/sametcelikbicak/storage-function/issues)! for reporting bugs, suggesting enhancements, bugfixes, new features and extras are welcome.



## Contributors ✨
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://sametcelikbicak.com/"><img src="https://avatars.githubusercontent.com/u/5312741?v=4?s=100" width="100px;" alt="Samet ÇELİKBIÇAK"/><br /><sub><b>Samet ÇELİKBIÇAK</b></sub></a><br /><a href="#infra-sametcelikbicak" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/sametcelikbicak/storage-function/commits?author=sametcelikbicak" title="Code">💻</a> <a href="https://github.com/sametcelikbicak/storage-function/issues?q=author%3Asametcelikbicak" title="Bug reports">🐛</a> <a href="https://github.com/sametcelikbicak/storage-function/commits?author=sametcelikbicak" title="Documentation">📖</a> <a href="#example-sametcelikbicak" title="Examples">💡</a> <a href="#maintenance-sametcelikbicak" title="Maintenance">🚧</a> <a href="https://github.com/sametcelikbicak/storage-function/commits?author=sametcelikbicak" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

