const fs = require('fs')
const path = require('path')

const FilePath = path.join(path.dirname(require.main.filename), 'data', 'data.json')

module.exports = class Data {
    constructor(_fullName, _dateOfbirth,_placeOfresidence,_schools,_technicalSkills,_softSkills,_image){
        this.fullName = _fullName
        this.dateOfbirth = _dateOfbirth
        this.placeOfresidence = _placeOfresidence
        this.schools = _schools
        this.technicalSkills = _technicalSkills
        this.softSkills = _softSkills
        this.image = _image
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