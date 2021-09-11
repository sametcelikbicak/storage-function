#### Storage definition

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