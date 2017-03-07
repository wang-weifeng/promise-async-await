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
};

function name_pass(user,pass) {
    return new Promise((resolve, reject)=>{
        if (user == pass) {
            resolve('账号密码验证成功');
        } else if(user != pass){
            resolve('账号密码验证不成功');
        } else {
            reject(err);
        }

    });
}

hello('./text.txt')
    .then((data)=>{
        console.log("hello:"+data);
        return world('./te.txt');
    })
    .then( (data) =>{
        console.log("world:"+data);
        return name_pass(data,data);
    })
    .then( (data)=> {
        console.log("name_pass:"+data);
    })
    .catch((err) =>{
        console.log(err)
    });

