'use strict';
const fs = require("fs");
function hello(file) {
    return new Promise((resolve, reject) => {
            fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
}

//最简单的一个promise示例

hello('./text.txt').then((data) => {
    console.log('promise result = ' + data)
}).catch((err) => {
    console.log(err)
});

