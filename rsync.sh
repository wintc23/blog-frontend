#!/bin/bash
git push
yarn run build
rsync -avr --delete-after dist/* root@wintc.top:/home/lushg/sites-vue