<div align="center">

 <img src="assets/storage-function.svg" alt="Logo" width="256" height="256">

# Storage Function 
![npm](https://img.shields.io/npm/v/storage-function?color=g&label=storage-function&logo=npm) ![npm](https://img.shields.io/npm/dt/storage-function?label=Downloads&logo=npm) [![NPM Publish](https://github.com/sametcelikbicak/storage-function/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/sametcelikbicak/storage-function/actions/workflows/npm-publish.yml) [![CodeQL Analyze](https://github.com/sametcelikbicak/storage-function/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/sametcelikbicak/storage-function/actions/workflows/codeql-analysis.yml) [![Build & Test](https://github.com/sametcelikbicak/storage-function/actions/workflows/build-test.yml/badge.svg)](https://github.com/sametcelikbicak/storage-function/actions/workflows/build-test.yml) ![dependabot](https://img.shields.io/badge/Dependabot-active-g?logo=dependabot)

A function to manipulate browser storages. Such as store a key value pair to  session or local storage,  getting  key value pairs from local or session storage.You can check all available functions for more details.
</div>

## Table of contents

<!-- toc -->
- ##### [Installation](#installation)
- ##### [Breaking Change](#breakingChange)
- ##### [Usage](#usage)
- ##### Local Storage functions
  * [toLocalStorage](#toLocalStorage)
  * [fromLocalStorage](#fromLocalStorage)
  * [removeFromLocalStorage](#removeFromLocalStorage)
  * [clearLocalStorage](#clearLocalStorage)
  * [getKeysFromLocalStorage](#getKeysFromLocalStorage)
  * [getAllFromLocalStorage](#getAllFromLocalStorage)
  * [getKeysCountFromLocalStorage](#getKeysCountFromLocalStorage)

- ##### Session Storage functions
  * [toSessionStorage](#toSessionStorage)
  * [fromSessionStorage](#fromSessionStorage)
  * [removeFromSessionStorage](#removeFromSessionStorage)
  * [clearSessionStorage](#clearSessionStorage)
  * [getKeysFromSessionStorage](#getKeysFromSessionStorage)
  * [getAllFromSessionStorage](#getAllFromSessionStorage)
  * [getKeysCountFromSessionStorage](#getKeysCountFromSessionStorage)

- ##### Storage functions
  * [clearStorage](#clearStorage)
  * [getKeys](#getKeys)
  * [getAll](#getAll)
  * [getKeysCount](#getKeysCount)
<!-- tocstop -->

## <span id="installation">Installation</span>

```shell
npm i storage-function
```

## <span id="breakingChange">Breaking Change</span>
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

## <span id="usage">Usage</span>

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

##### - <span id="toLocalStorage">toLocalStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toLocalStorage(localStorageKey, localStorageValue);
```

##### - <span id="fromLocalStorage">fromLocalStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.fromLocalStorage(localStorageKey));

Result:
{"name":"object value","stringValue":"string value","booleanValue":true,"numberValue":1234567890,"dateValue":"2021-08-22T15:57:05.147Z"}
```

##### - <span id="removeFromLocalStorage">removeFromLocalStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

storageFunction.removeFromLocalStorage(localStorageKey);
```

##### - <span id="clearLocalStorage">clearLocalStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

storageFunction.clearLocalStorage(); // Remove all local storage keys

const exceptedKeys = ['some_key', 'another_key'];
storageFunction.clearLocalStorage(exceptedKeys); // Remove all local storage keys except exceptedKeys
```

##### - <span id="getKeysFromLocalStorage">getKeysFromLocalStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getKeysFromLocalStorage());

Result:
(2) ["localKey2", "localKey1"]
0: "localKey2"
1: "localKey1"
```

##### - <span id="getAllFromLocalStorage">getAllFromLocalStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getAllFromLocalStorage());

Result:
(2) [{…}, {…}]
0: {localKey2: "\"Local storage value 2\""}
1: {localKey1: "\"Local storage value 1\""}
```

##### - <span id="getKeysCountFromLocalStorage">getKeysCountFromLocalStorage usage</span>

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

##### - <span id="toSessionStorage">toSessionStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toSessionStorage(sessionStorageKey, sessionStorageValue);
```

##### - <span id="fromSessionStorage">fromSessionStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.fromSessionStorage(sessionStorageKey));

Result:
{"name":"object value","stringValue":"string value","booleanValue":true,"numberValue":1234567890,"dateValue":"2021-08-22T15:58:28.646Z"}
```

##### - <span id="removeFromSessionStorage">removeFromSessionStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

storageFunction.removeFromSessionStorage(sessionStorageKey);
```

##### - <span id="clearSessionStorage">clearSessionStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

storageFunction.clearSessionStorage(); // Remove all session storage keys

const exceptedKeys = ['key_one', 'keyTwo'];
storageFunction.clearSessionStorage(exceptedKeys); // Remove all session storage keys except exceptedKeys
```

##### - <span id="getKeysFromSessionStorage">getKeysFromSessionStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getKeysFromSessionStorage());

Result:
(2) ["sessionKey2", "sessionKey1"]
0: "sessionKey2"
1: "sessionKey1"
```

##### - <span id="getAllFromSessionStorage">getAllFromSessionStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getAllFromSessionStorage());

Result:
(2) [{…}, {…}]
0: {sessionKey2: "\"Session storage value 2\""}
1: {sessionKey1: "\"Session storage value 1\""}
```

##### - <span id="getKeysCountFromSessionStorage">getKeysCountFromSessionStorage usage</span>

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

##### - <span id="clearStorage">clearStorage usage</span>

```typescript
import { storageFunction } from 'storage-function';

storageFunction.clearStorage(); // Remove all storage keys

const exceptedKeys = ['id_token', 'access_token'];
storageFunction.clearStorage(exceptedKeys); // Remove all storage keys except exceptedKeys
```

##### - <span id="getKeys">getKeys usage</span>

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getKeys());

Result:
{localStorage: Array(2), sessionStorage: Array(2)}
localStorage: (2) ["localKey2", "localKey1"]
sessionStorage: (2) ["sessionKey2", "sessionKey1"]
```

##### - <span id="getAll">getAll usage</span>

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

##### - <span id="getKeysCount">getKeysCount usage</span>

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toLocalStorage(localStorageKey, localStorageValue);
storageFunction.toSessionStorage(sessionStorageKey, sessionStorageValue);

console.log(storageFunction.getKeysCount());

Result:
{localStorage: 1, sessionStorage: 1}
```