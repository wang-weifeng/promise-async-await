'use strict';
const fs = require("fs");

function hello (file) {
    return new Promise((resolve, reject)=>{
        fs.readFile(file, (err, data)=> {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
}

function world(file) {
    return new Promise((resolve, reject)=>{
        fs.readFile(file, (err, data)=> {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
}

function name_pass(user,pass) {
    return new Promise((resolve, reject)=>{
        console.log("user:"+user);
        if(user != pass){
            resolve('账号密码不正确');
        } else if(user == pass){
            resolve('账号密码正确');
        } else {
            reject(err)
        }

    });
}

let start = async () => {
    try{
        let helloVal = await hello('./text.txt');
        console.log('hello:'+helloVal);
        let worldVal =  await world('./te.txt');
        console.log('world:'+worldVal);
        let namePassVal = await name_pass(worldVal,worldVal);
        console.log('name_pass:'+namePassVal);
    }
    catch(err){
        console.log('程序出错了');
    }
};

start();
console.log('主程序一切正常');
