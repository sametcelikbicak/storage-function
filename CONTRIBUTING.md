# Contributing to [storage-function](https://github.com/sametcelikbicak/storage-function)

First off, thanks for taking the time to contribute! 🎉👍  

## How Can I Contribute?
It is publicly open for any contribution. Reporting bugs, suggesting
enhancements, bugfixes, new features and extras are welcome.

- To contribute to code: 
    - Fork the repo
    - Create a branch for your change(s)
    - Push your change(s) to your fork
    - Open a Pull Request(PR).
- To report a bug: If something does not work, please report it using
  [GitHub Issues](https://github.com/sametcelikbicak/storage-function/issues).

## Development setup 🛠
Install dependencies first.
```
npm install
```
Build your changes.
``` 
npm run build
```
Run the test after your changes.
```
npm run test
```
Before push your changes run lint and format scripts.
```
npm run lint
npm run format
```

## Testing your changes 🧪
After your changes and run the build script you can install your changes locally and test the changes. First build your changes.
```
npm run build
```
Then pack your package by running below command root of your folder.
```
npm pack
```
After all you can use newly created package in your test app to verify your changes, just take newly created package path and go to your test app and run below command.
```
npm install <your-newly-created-package-path>
# i.e: npm install /Users/sametcelikbicak/storage-function/storage-function-2022.10.23.tgz
````

### Code of Conduct
This project and everyone participating in it is governed by the
[Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to
uphold this code. 
