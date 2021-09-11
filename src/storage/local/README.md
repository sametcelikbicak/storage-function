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
