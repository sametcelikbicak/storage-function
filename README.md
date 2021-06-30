# Storage Function [![npm version](https://badge.fury.io/js/storage-function.svg)](https://badge.fury.io/js/storage-function) ![npm](https://img.shields.io/npm/dt/storage-function?label=Downloads&logo=npm)
A function to manipulate browser storages

## Installation

```
npm i storage-function
```

## Usage
#### Local storage key and value definitions
````
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
````
import { toLocalStorage } from "storage-function";

toLocalStorage(localStorageKey, localStorageValue);
````
* fromLocalStorage usage
````
import { fromLocalStorage } from "storage-function";

console.log(fromLocalStorage(localStorageKey));
````
* fromLocalStorage usage
````
import { removeFromLocalStorage } from "storage-function";

removeFromLocalStorage(localStorageKey);
````
* clearLocalStorage usage
````
import { clearLocalStorage } from "storage-function";

clearLocalStorage();
````
---
---
#### Session storage key and value definitions
````
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
````
import { toSessionStorage } from "storage-function";

toSessionStorage(sessionStorageKey, sessionStorageValue);
````
* fromSessionStorage usage
````
import { fromSessionStorage } from "storage-function";

console.log(fromSessionStorage(sessionStorageKey));
````
* removeFromSessionStorage usage
````
import { removeFromSessionStorage } from "storage-function";

removeFromSessionStorage(sessionStorageKey);
````
* clearSessionStorage usage
````
import { clearSessionStorage } from "storage-function";

clearSessionStorage();
````