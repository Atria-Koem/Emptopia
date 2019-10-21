const nameOption = ['atkPhy','defPhyPer','defPhyNum','resPhyPer','resPhyNum',
                  'atkMag','defMagPer','defMagNum','resMagPer','resMagNum',
                  'atkPhyTrue','atkMagTrue', 'rateHit','rateDodge','rateDis','rateRes',
                  'rateCrt','valCrt', 'rateHitJust', 'ratePFD','atkRapid','rateCrtLuk','rateDodgeLuk']
const nameState = ['str', 'vit', 'int', 'wis', 'dex', 'agi', 'dis', 'res', 'spd', 'luk'];
class CreateData{
    constructor(category){
        let dataName = "data"+category;

        this.codeCreate(category);
        if(this.checkCode(category)){
                    document.getElementById("OutPutData").value = "SAME";

            return;
        }

    }
    codeCreate(category){
        let code = document.getElementById("Code").value
        switch(category){
            case "Item":
                while(code.length < 7){
                    code = "0" + code
                }
                this.code = "IT" +  code;
                break;
            case "Job":
                while(code.length < 8){
                    code += "0" 
                }
                this.code = "J" +  code;
        }

        
    }
    checkCode(category){
        switch(category){
               case "Item":
                if(Object.getOwnPropertyNames(dataItem).indexOf(this.code) != -1){
                this.check =  true;
                    return true;
                }
                break;
            case "Job":
                if(Object.getOwnPropertyNames(dataJob).indexOf(this.code) != -1){
                   this.check = true;
                   return true;
                   }
               }
        this.check = false;
        return false;
    }
  getName(){
        this.name = document.getElementById("Name").value;
    }
}

class CreateItemData extends CreateData{
        constructor(){
            super("Item");
            if(this.check){
                return;
            }
            this.check = 0;
        this.getName();
        this.getCategory()
        this.getItemType()
        this.getHealth();
        this.getState()
        this.getOption();
        this.getExp();
        this.codePrint();
        }

    getCategory(){
        this.category = document.getElementById("Category").value
    }
    getItemType(){
        this.itemType = document.getElementById("ItemType").value;
    }
    getHealth(){
        const type = ["Hp","Sp","Mp"]
        const sumType = ["Number","Percent"]
        let dataTxt =""
        let count = 0;
        for(let i = 0 ; i < sumType.length; i++){
            dataTxt += "\n \t\t"
            for(let j = 0 ; j < type.length ; j++){
                if(document.getElementById(sumType[i] + type[j]).value != ""){
                    if( i == 1){
                        dataTxt +="p"
                    }
                    dataTxt += type[j] + " : " + document.getElementById(sumType[i] + type[j]).value + ","
                    count ++;
                    this.check = 1;
                }
            }
        }
            dataTxt = dataTxt.slice(0,dataTxt.lastIndexOf(","));

        this.health = dataTxt + "\n\t";
    }
    getState(){
          let dataTxt = "\n \t\t"
        let count = 0;
        for(let i = 0 ; i < nameState.length; i ++){
            if(count%6 == 5){
                dataTxt +="\n \t\t";
                count  = 0
            }
            if(document.getElementById(nameState[i]).value !=""){
                dataTxt += nameState[i] + " : " + document.getElementById(nameState[i]).value + ", \t"
                count ++;
                this.check = 1;
            }
        }
             dataTxt = dataTxt.slice(0,dataTxt.lastIndexOf(","));
        this.state = dataTxt  + "\n\t"
    }
    getOption(){
        let dataTxt = "\n \t\t"
        let count = 0;
        for(let i = 0 ; i < nameOption.length; i ++){
            if(count%6 == 5){
                dataTxt +="\n \t\t";
                count  = 0
            }
            if(document.getElementById(nameOption[i]).value !=""){
                dataTxt += nameOption[i] + " : " + document.getElementById(nameOption[i]).value + ", \t"
                count ++;
                this.check = 1;
            }
        }
             dataTxt = dataTxt.slice(0,dataTxt.lastIndexOf(","));
        this.option = dataTxt  + "\n\t"
    } 
    getExp(){
        this.exp = document.getElementById("exp").value;
    }
    codePrint(){
        let txt ;
        txt = this.code + " : { \n"
        
        txt += "\t  code : '" + this.code + "', \n"
        txt += "\t  name : '" + this.name + "', \n"
        txt += "\t category : '" + this.category  + "', \n"
        txt += "\t type : '" + this.itemType + "', \n"
        if(this.check == 1){
            txt += "\t spec : { \n" 
        if(this.health.length > 10   ){
        txt += "\t \t health : {" + this.health + "\t }, \n"
        }
        if(this.state.length> 6){
            txt += "\t \t state : {" + this.state + "\t }, \n"
        }
        if(this.option.length > 6   ){
            txt += "\t \t option : {" + this.option + "\t }, \n"
        }
            txt += "\t }, \n"

    }
        txt += "\t  exp : '" + this.exp + "', \n"
        txt = txt + "},";
        
        document.getElementById("OutPutData").value = txt;
        
    }
}

class CreateJobData extends CreateData{
        constructor(){
            super("Job");
            if(this.check){
                return;
            }
        this.getName();
        this.getState();
            this.getLimit();
        this.getExp();
        this.codePrint();
        }


    getState(){
          let dataTxt = "\n \t\t"
        let count = 0;
        for(let i = 0 ; i < nameState.length; i ++){
            if(count%6 == 5){
                dataTxt +="\n \t\t";
                count  = 0
            }
            if(document.getElementById(nameState[i]).value !=""){
                dataTxt += nameState[i] + " : " + document.getElementById(nameState[i]).value + ", \t"
                count ++;
            }
        }
             dataTxt = dataTxt.slice(0,dataTxt.lastIndexOf(","));
        this.state = dataTxt  + "\n\t"
    }
    getLimit(){
        let dataTxt = ""
        const limit = document.getElementsByClassName("Limit")
        for(let i = 0 ; i < limit.length; i++){
            if(limit[i].checked){
                dataTxt += "'" + limit[i].value + "', "
                
            }
        }
        dataTxt = dataTxt.slice(0,dataTxt.lastIndexOf(","));
        this.limit = dataTxt 
        
    }
    getExp(){
        this.exp = document.getElementById("exp").value;
        
    }
    codePrint(){
        let txt ;
        txt = this.code + " : { \n"
        
        txt += "\t  code : '" + this.code + "', \n"
        txt += "\t  name : '" + this.name + "', \n"
        if(this.state.length> 6){
            txt += "\t state : {" + this.state + "}, \n"
        }
        txt += "\t  limit : [" + this.limit + "], \n"
        txt += "\t  exp : '" + this.exp + "' \n"
        txt = txt + "},";
        
        document.getElementById("OutPutData").value = txt;
        
    }
}
