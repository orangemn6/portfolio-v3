#!/bin/bash
hugo
rm -rf blog
cp blog-src/public blog
git add .
git commit -m "posted to blog"
git push
