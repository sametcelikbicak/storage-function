# Storage Function [![npm version](https://badge.fury.io/js/storage-function.svg)](https://badge.fury.io/js/storage-function) ![npm](https://img.shields.io/npm/dt/storage-function?label=Downloads&logo=npm)

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

## Usage

#### Local storage key and value definitions

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

- toLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toLocalStorage(localStorageKey, localStorageValue);
```

- fromLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.fromLocalStorage(localStorageKey));

Result:
{"name":"object value","stringValue":"string value","booleanValue":true,"numberValue":1234567890,"dateValue":"2021-08-22T15:57:05.147Z"}
```

- fromLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.removeFromLocalStorage(localStorageKey);
```

- clearLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.clearLocalStorage(); // Remove all local storage keys

const exceptedKeys = ['some_key', 'another_key'];
storageFunction.clearLocalStorage(exceptedKeys); // Remove all local storage keys except exceptedKeys
```

- getKeysFromLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getKeysFromLocalStorage());

Result:
(2) ["localKey2", "localKey1"]
0: "localKey2"
1: "localKey1"
```

- getAllFromLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getAllFromLocalStorage());

Result:
(2) [{…}, {…}]
0: {localKey2: "\"Local storage value 2\""}
1: {localKey1: "\"Local storage value 1\""}
```

- getKeysCountFromLocalStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toLocalStorage(localStorageKey, localStorageValue);

console.log(storageFunction.getKeysCountFromLocalStorage());

Result:
1
```

---

#### Session storage key and value definitions

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

- toSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toSessionStorage(sessionStorageKey, sessionStorageValue);
```

- fromSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.fromSessionStorage(sessionStorageKey));

Result:
{"name":"object value","stringValue":"string value","booleanValue":true,"numberValue":1234567890,"dateValue":"2021-08-22T15:58:28.646Z"}
```

- removeFromSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.removeFromSessionStorage(sessionStorageKey);
```

- clearSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.clearSessionStorage(); // Remove all session storage keys

const exceptedKeys = ['key_one', 'keyTwo'];
storageFunction.clearSessionStorage(exceptedKeys); // Remove all session storage keys except exceptedKeys
```

- getKeysFromSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getKeysFromSessionStorage());

Result:
(2) ["sessionKey2", "sessionKey1"]
0: "sessionKey2"
1: "sessionKey1"
```

- getAllFromSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getAllFromSessionStorage());

Result:
(2) [{…}, {…}]
0: {sessionKey2: "\"Session storage value 2\""}
1: {sessionKey1: "\"Session storage value 1\""}
```

- getKeysCountFromSessionStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toSessionStorage(sessionStorageKey, sessionStorageValue);

console.log(storageFunction.getKeysCountFromSessionStorage());

Result:
1
```

---

#### Storage definition

- clearStorage usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.clearStorage(); // Remove all storage keys

const exceptedKeys = ['id_token', 'access_token'];
storageFunction.clearStorage(exceptedKeys); // Remove all storage keys except exceptedKeys
```

- getKeys usage

```typescript
import { storageFunction } from 'storage-function';

console.log(storageFunction.getKeys());

Result:
{localStorage: Array(2), sessionStorage: Array(2)}
localStorage: (2) ["localKey2", "localKey1"]
sessionStorage: (2) ["sessionKey2", "sessionKey1"]
```

- getAll usage

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

- getKeysCount usage

```typescript
import { storageFunction } from 'storage-function';

storageFunction.toLocalStorage(localStorageKey, localStorageValue);
storageFunction.toSessionStorage(sessionStorageKey, sessionStorageValue);

console.log(storageFunction.getKeysCount());

Result:
{localStorage: 1, sessionStorage: 1}
```