#!/bin/bash
git push
yarn run build
scp -r dist/* root@wintc.top:/home/lushg/blog-frontend