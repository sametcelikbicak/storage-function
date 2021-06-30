# Storage Function [![npm version](https://badge.fury.io/js/storage-function.svg)](https://badge.fury.io/js/storage-function) ![npm](https://img.shields.io/npm/dt/storage-function?label=Downloads&logo=npm)
A function to manipulate browser storages

## Installation

```
npm i storage-function
```

## Usage
#### Local storage key and value definitions
````typescript
const localStorageKey = "local_storage_key";

const localStorageValue = {
    name: "object value",
    stringValue: "string value",
    booleanValue: true,
    numberValue: 1234567890,
    dateValue: new Date(),
};
````

* toLocalStorage usage
````typescript
import { toLocalStorage } from "storage-function";

toLocalStorage(localStorageKey, localStorageValue);
````
* fromLocalStorage usage
````typescript
import { fromLocalStorage } from "storage-function";

console.log(fromLocalStorage(localStorageKey));
````
* fromLocalStorage usage
````typescript
import { removeFromLocalStorage } from "storage-function";

removeFromLocalStorage(localStorageKey);
````
* clearLocalStorage usage
````typescript
import { clearLocalStorage } from "storage-function";

clearLocalStorage();
````
---

#### Session storage key and value definitions
````typescript
const sessionStorageKey = "session_storage_key";

const sessionStorageValue = {
    name: "object value",
    stringValue: "string value",
    booleanValue: true,
    numberValue: 1234567890,
    dateValue: new Date(),
};
````

* toSessionStorage usage
````typescript
import { toSessionStorage } from "storage-function";

toSessionStorage(sessionStorageKey, sessionStorageValue);
````
* fromSessionStorage usage
````typescript
import { fromSessionStorage } from "storage-function";

console.log(fromSessionStorage(sessionStorageKey));
````
* removeFromSessionStorage usage
````typescript
import { removeFromSessionStorage } from "storage-function";

removeFromSessionStorage(sessionStorageKey);
````
* clearSessionStorage usage
````typescript
import { clearSessionStorage } from "storage-function";

clearSessionStorage();
````
