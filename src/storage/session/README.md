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
