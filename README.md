# Storage Function [![npm version](https://badge.fury.io/js/storage-function.svg)](https://badge.fury.io/js/storage-function) ![npm](https://img.shields.io/npm/dt/storage-function?label=Downloads&logo=npm)

A function to manipulate browser storages

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
import { toLocalStorage } from 'storage-function';

toLocalStorage(localStorageKey, localStorageValue);
```

- fromLocalStorage usage

```typescript
import { fromLocalStorage } from 'storage-function';

console.log(fromLocalStorage(localStorageKey));
```

- fromLocalStorage usage

```typescript
import { removeFromLocalStorage } from 'storage-function';

removeFromLocalStorage(localStorageKey);
```

- clearLocalStorage usage

```typescript
import { clearLocalStorage } from 'storage-function';

clearLocalStorage(); // Remove all local storage keys

const exceptedKeys = ['some_key', 'another_key'];
clearLocalStorage(exceptedKeys); // Remove all local storage keys except exceptedKeys
```

- getKeysFromLocalStorage usage

```typescript
import { getKeysFromLocalStorage } from 'storage-function';

console.log(getKeysFromLocalStorage());

Result:
(2) ["localKey2", "localKey1"]
0: "localKey2"
1: "localKey1"
```

- getAllFromLocalStorage usage

```typescript
import { getAllFromLocalStorage } from 'storage-function';

console.log(getAllFromLocalStorage());

Result:
(2) [{…}, {…}]
0: {localKey2: "\"Local storage value 2\""}
1: {localKey1: "\"Local storage value 1\""}
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
import { toSessionStorage } from 'storage-function';

toSessionStorage(sessionStorageKey, sessionStorageValue);
```

- fromSessionStorage usage

```typescript
import { fromSessionStorage } from 'storage-function';

console.log(fromSessionStorage(sessionStorageKey));
```

- removeFromSessionStorage usage

```typescript
import { removeFromSessionStorage } from 'storage-function';

removeFromSessionStorage(sessionStorageKey);
```

- clearSessionStorage usage

```typescript
import { clearSessionStorage } from 'storage-function';

clearSessionStorage(); // Remove all session storage keys

const exceptedKeys = ['key_one', 'keyTwo'];
clearSessionStorage(exceptedKeys); // Remove all session storage keys except exceptedKeys
```

- getKeysFromSessionStorage usage

```typescript
import { getKeysFromSessionStorage } from 'storage-function';

console.log(getKeysFromSessionStorage());

Result:
(2) ["sessionKey2", "sessionKey1"]
0: "sessionKey2"
1: "sessionKey1"
```

- getAllFromSessionStorage usage

```typescript
import { getAllFromSessionStorage } from 'storage-function';

console.log(getAllFromSessionStorage());

Result:
(2) [{…}, {…}]
0: {sessionKey2: "\"Session storage value 2\""}
1: {sessionKey1: "\"Session storage value 1\""}
```

---

#### Storage definition

- clearStorage usage

```typescript
import { clearStorage } from 'storage-function';

clearStorage(); // Remove all storage keys

const exceptedKeys = ['id_token', 'access_token'];
clearStorage(exceptedKeys); // Remove all storage keys except exceptedKeys
```

- getKeys usage

```typescript
import { getKeys } from 'storage-function';

console.log(getKeys());

Result:
{localStorage: Array(2), sessionStorage: Array(2)}
localStorage: (2) ["localKey2", "localKey1"]
sessionStorage: (2) ["sessionKey2", "sessionKey1"]
```

- getAll usage

```typescript
import { getAll } from 'storage-function';

console.log(getAll());

Result:
{localStorage: Array(2), sessionStorage: Array(2)}
localStorage: Array(2)
0: {localKey2: "\"Local storage value 2\""}
1: {localKey1: "\"Local storage value 1\""}
sessionStorage: Array(2)
0: {sessionKey2: "\"Session storage value 2\""}
1: {sessionKey1: "\"Session storage value 1\""}
```
