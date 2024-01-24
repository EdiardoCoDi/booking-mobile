#!/bin/bash
set -ex
adb devices
npm install
npm run start-mobile