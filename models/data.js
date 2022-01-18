const fs = require('fs')
const path = require('path')

const FilePath = path.join(path.dirname(require.main.filename), 'json', 'data.json')

module.exports = class Data {
    constructor(wish, imgUrl){
        this.description = wish
        this.imgUrl = imgUrl
    }

    saveData(){
        //read file content first
        fs.readFile(FilePath, (error, fileContent) => {
            let datalist = [];

            if (!error) {
                datalist = JSON.parse(fileContent)                
            }
            else {
                console.log(error);
            }
            datalist.push(this)//newWish.saveWish()

            fs.writeFile(FilePath, JSON.stringify(datalist),(error)=>{
                if (!error) {
                    console.log('data saved');
                }
            })
        })
    }

    static fetchData(callback){
        fs.readFile(FilePath, (error, fileContent) => {
            if (error) {
                callback([])
            }
            callback(JSON.parse(fileContent))
        })
    }
}