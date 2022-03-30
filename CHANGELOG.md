# storage-function package changes

## 2.1.13
- Fix dependabot issues
## 2.1.12
- Fix dependabot issues
## 2.1.11
- Fix dependabot issues
## 2.1.10
- Fix dependabot issues
## 2.1.9
- Update README
- Deactivate NPM Publish script
## 2.1.8
- Fix dependabot issues
## 2.1.7
- Fix dependabot issues
## 2.1.6
- Add logo
## 2.1.5
- Fix dependabot issues
## 2.1.4
- Add GitHub action for test
- Update README
- Update CHANGELOG
- Fix dependabot issues
## 2.1.3
- Update README with Table of Contents
## 2.1.2
- Add CHANGELOG file
- Update `npm-publish.yml`
- Update README with link functionality
- Update `codeql-analysis.yml`
## 2.1.1
- Add npm publish GitHub Action and scripts
## 2.1.0
- Add getKeysCountFromLocalStorage()  function
- Add getKeysCountFromSessionStorage()  function
- Add getKeysCount()  function
## 2.0.1
- Fix dependabot issues
## 2.0.0
#### BREAKING CHANGES
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
## 1.1.4
-
## 1.1.3
- Add CodeQL Analysis
## 1.1.2
- Add dependabot config
- Fix dependabot issues
## 1.1.1
- Update README file
- Update getAllFromLocalStorage() function
- Update getKeysFromLocalStorage() function
- Update getAllFromSessionStorage() function
- Update getKeysFromSessionStorage() function
- Update getAll() function
- Update getKeys() function
## 1.1.0
- Add getAllFromLocalStorage() function
- Add getKeysFromLocalStorage() function
- Add getAllFromSessionStorage() function
- Add getKeysFromSessionStorage() function
- Add getAll() function
- Add getKeys() function
## 1.0.1
- Add all test cases
- Fix minor session storage issue
## 1.0.0
-
## 0.0.9
-
## 0.0.8
-
## 0.0.6
-
## 0.0.5
-
## 0.0.4
-
## 0.0.3
-
## 0.0.2
-
## 0.0.1
- First version released