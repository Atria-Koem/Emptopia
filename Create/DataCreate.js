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
                break;
            case "Skill" :
                while(code.length<8){
                    code = "0" + code
                }
                this.code = "K" +  code;
                break;
            case "Tribe" :
                let count = document.getElementById("Count").value;
                this.code = "T" + count + code;
                break;
      
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
                   break;
            case "Skill":
            if(Object.getOwnPropertyNames(dataSkill).indexOf(this.code) != -1){
                this.check = true;
                return true;
                }    
            break;
            case "Tribe":
            if(Object.getOwnPropertyNames(dataTribe).indexOf(this.code) != -1){
                this.check = true;
                return true;
               }
               break;
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
        this.getSrc();
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
getSrc(){
    this.src = document.getElementById("image").value ;
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
    txt+="\t  src : '"  + this.src + "', \n"
    txt += "\t  exp : '" + this.exp + "', \n"
    txt = txt + "},";
    
    document.getElementById("OutPutData").value = txt;
     document.getElementById("TestImg").src = this.src;
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

class CreateTribeData extends CreateData{
    constructor(){
        super("Tribe");
        if(this.check){
            return;
        }
    this.getName();
    this.getState();
        this.getPassive();
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
getPassive(){
    let dataTxt = "\n \t\t"
    let arrayTxt =""
    let childrens = document.getElementById("PassiveSkills").children
    if(childrens.length > 0){
    dataTxt += "max : " + document.getElementById("maxCount").value + "\n \t\t";
     arrayTxt = "skillCode : ["
    for(let i =0 ; i< childrens.length; i++){
        arrayTxt += "'"+ childrens[i].value+ "',"
    }
    arrayTxt = arrayTxt.slice(0,arrayTxt.lastIndexOf(","));
    arrayTxt += "]"
    }
    dataTxt += arrayTxt;
    this.passive =  dataTxt  + "\n\t"
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
    if(this.passive.length> 6)
    txt += "\t passive : {" +this.passive + "}, \n";
    
    txt += "\t  exp : '" + this.exp + "' \n"
    txt = txt + "},";
    
    document.getElementById("OutPutData").value = txt;
    
}
}


function appendBaseValue(){
    let valueG = document.getElementById("BaseValueGroup")
    let valueC = valueG.children
    let newValue = document.createElement("div");
    newValue.innerHTML = " <select class='BaseValue' id='baseType" +valueC.length + "'>            <option value='null' selected='selected'>null</option>            <option value='str'>str</option>            <option value='int'>int</option>            <option value='dex'>dex</option>            <option value='dis'>dis</option>            <option value='spd'>spd</option>            <option value='vit'>vit</option>            <option value='wis'>wis</option>            <option value='agi'>agi</option>            <option value='res'>res</option>            <option value='luk'>luk</option>        </select>          <input type='text' id='baseValue"+ valueC.length +"' value='0'>    </div>"
    valueG.appendChild(newValue);
}
function removeBaseValue(){
    let valueG = document.getElementById("BaseValueGroup")
    if(valueG.children.length > 1)
    valueG.removeChild(valueG.children[valueG.children.length-1]);
}
function appendPassiveSkills(){
    let valueG = document.getElementById("PassiveSkills")
    let skillCode = Object.getOwnPropertyNames(dataSkill)
    let select = document.createElement("select");
  
    for(let i =0 ; i < skillCode.length; i++){
        if(skillCode[i].indexOf("KPT") != -1){
        let option = document.createElement("option");
        option.value = skillCode[i]
        option.innerText = dataSkill[skillCode[i]].name;
        select.appendChild(option);
        }

    }
    valueG.appendChild(select);
}
function removePassiveSkills(){
    let valueG = document.getElementById("PassiveSkills")
    if(valueG.children.length > 1)
    valueG.removeChild(valueG.children[valueG.children.length-1]);
}

function appendPartternValue(){
    let valueG = document.getElementById("Parttern")
    let parttern = document.createElement("div");

    let judgeCode = Object.getOwnPropertyNames(dataPartternType)
    let skillCode = Object.getOwnPropertyNames(dataSkill)

    let jSelect = document.createElement("select");
    jSelect.id = "JudgeType" + valueG.childElementCount;
    for(let i = 0 ; i < judgeCode.length; i++){
        let option = document.createElement("option");
        option.value = judgeCode[i]
        option.innerText = dataPartternType[judgeCode[i]].text;
        jSelect.appendChild(option);
    }
    parttern.appendChild(jSelect);
    let inputText = document.createElement("input");
    inputText.type = "text"
    inputText.id = "Value" + valueG.childElementCount;
    parttern.appendChild(inputText)
    let kselect = document.createElement("select");
    for(let i =0 ; i < skillCode.length; i++){
        if(skillCode[i].indexOf("KPT") == -1){
        let option = document.createElement("option");
        option.value = skillCode[i]
        option.innerText = dataSkill[skillCode[i]].name;
        kselect.appendChild(option);
        }

    }
    parttern.appendChild(kselect)
    valueG.appendChild(parttern);
}
function removePartternValue(){
    let valueG = document.getElementById("Parttern")
    if(valueG.children.length > 1)
    valueG.removeChild(valueG.children[valueG.children.length-1]);
}
class CreatePartter{
    constructor(){
        this.txt = '[';
        this.loadParttern()
        this.codePrint()
    }
    loadParttern(){
        let parttern = document.getElementById("Parttern").children
        let length = parttern.length;
        for(let i = 0 ; i < length; i++){
            if(i != 0){
                this.txt +=","
            }
            let arr = '['
            arr += "'" + document.getElementById("Parttern").children[i].children[0].value + "',"
            let value = parseInt(document.getElementById("Parttern").children[i].children[1].value)
            if(!value || value==NaN){
                value = 0;
            }
            arr += value + ",";
            arr += "'" + document.getElementById("Parttern").children[i].children[2].value + "']"
            this.txt +=arr;
        }
        this.txt += "]"
    }
    codePrint(){
        document.getElementById("OutPutData").value = this.txt;
    }
}