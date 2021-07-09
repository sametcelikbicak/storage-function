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
```

- getAllFromLocalStorage usage

```typescript
import { getAllFromLocalStorage } from 'storage-function';

console.log(getAllFromLocalStorage());
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
```

- getAllFromSessionStorage usage

```typescript
import { getAllFromSessionStorage } from 'storage-function';

console.log(getAllFromSessionStorage());
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
```

- getAll usage

```typescript
import { getAll } from 'storage-function';

console.log(getAll());
```
