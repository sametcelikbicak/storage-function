#!/usr/bin/env bash

GIT_COMMIT=$(git rev-parse --short HEAD)
GIT_TAG=$(git describe --tags --exact-match $COMMIT || :)

if [[ ${GIT_TAG} == v* ]] ; then
    echo "$GIT_TAG Tag found..."
else
    echo "No git tag found, action cancelled..."
    exit 1
fi