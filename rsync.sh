#!/bin/bash
git push
yarn generate
rsync -avr --delete-after dist/* root@wintc.top:/home/lushg/blog-frontend