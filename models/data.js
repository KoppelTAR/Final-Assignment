const fs = require('fs')
const path = require('path')

const FilePath = path.join(path.dirname(require.main.filename), 'data', 'data.json')

module.exports = class Data {
    constructor(fullName, dateOfbirth,placeOfresidence,schools,technicalSkills,softSkills){
        this.fullName = fullName
        this.dateOfbirth = dateOfbirth
        this.placeOfresidence = placeOfresidence
        this.schools = schools
        this.technicalSkills = technicalSkills
        this.softSkills = softSkills
    }

    saveData(){
        //read file content first
        fs.readFile(FilePath, (error, fileContent) => {
            let datalist = [];

            if (!error) {
                datalist.push(this)//newWish.saveWish()
                //datalist = JSON.parse(fileContent)   
            }
            else {
                console.log(error);
            }

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