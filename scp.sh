#!/bin/bash
git push
yarn generate
scp -r dist/* root@wintc.top:/home/lushg/blog-frontend