#!/usr/bin/env bash

echo -e "Hello, "$USER".\nWelcome to the storage-function build script!"
echo -e "Which version option do you wish to use?\n1. Major [1.x.x]\n2. Minor [x.1.x]\n3. Patch [x.x.1] (Default)\n4. Manuel [x.x.x]"
echo -n "Enter your choice [1-2-3] or press [ENTER]:"
read choice

if [ $choice == 1 ]; then
  echo "Major vesion is preparing..."
  npm version major
elif [ $choice == 2 ]; then
  echo "Minor version is preparing..."
  npm version minor
elif [ $choice == 4 ]; then
  echo -n "Enter your new version with [x.x.x] format:"
  read version
  echo "$version version is preparing..."
  npm version $version
else
  echo "Patch version is preparing..."
  npm version patch
fi
