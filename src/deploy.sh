#!/usr/bin/env sh

echo 'Starting the node installer'
set -x
npm install
npm run build
set -x

