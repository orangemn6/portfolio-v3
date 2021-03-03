#!/bin/bash
cd blog-src
hugo
cd ..
rm -rf blog
cp -r blog-src/public blog
git add .
git commit -m "posted to blog"
git push
