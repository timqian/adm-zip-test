## Permission lost after zipping and unzipping

To reproduce

```bash
# install dependency
npm i

# zip hello.sh and unzip to a folder
node test.js

# check permission
ll hello.sh
# -rwxr-x---

ll unzippedFolder/hello.sh 
# -rw-rw-rw-
```