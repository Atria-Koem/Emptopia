const nameOption = ['atkPhy','defPhyPer','defPhyNum','resPhyPer','resPhyNum',
                  'atkMag','defMagPer','defMagNum','resMagPer','resMagNum',
                  'atkPhyTrue','atkMagTrue', 'rateHit','rateDodge','rateDis','rateRes',
                  'rateCrt','valCrt', 'rateHitJust', 'ratePFD','atkRapid','rateCrtLuk','rateDodgeLuk']
const nameState = ['str', 'vit', 'int', 'wis', 'dex', 'agi', 'dis', 'res', 'spd', 'luk'];
class CreateData{
    constructor(){
        this.codeCreate();
        if(Object.getOwnPropertyNames(dataItem).indexOf(this.code) != -1){
                    document.getElementById("OutPutData").value = "SAME";
            return;
        }
        this.getName();
        this.getCategory()
        this.getItemType()
        this.getHealth();
        this.getState()
        this.getOption();
        this.getExp();
        this.codePrint();
    }
    codeCreate(){
        let code = document.getElementById("Code").value
        while(code.length < 7){
            code = "0" + code
        }
        this.code = "IT" +  code;
        
    }
    getName(){
        this.name = document.getElementById("Name").value;
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
        txt += "\t type : " + this.itemType + "', \n"
        if(this.health.length > 10   ){
        txt += "\t health : {" + this.health + "}, \n"
        }
        if(this.state.length> 6){
            txt += "\t state : {" + this.state + "}, \n"
        }
        if(this.option.length > 6   ){
            txt += "\t option : {" + this.option + "}, \n"
        }
        txt += "\t  exp : '" + this.exp + "', \n"
        txt = txt + "},";
        
        document.getElementById("OutPutData").value = txt;
        
    }
}

function saveToFile_Chrome(fileName, content) {
    var blob = new Blob([content], { type: 'text/plain' });
 
    objURL = window.URL.createObjectURL(blob);
            
    // 이전에 생성된 메모리 해제
    if (window.__Xr_objURL_forCreatingFile__) {
        window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
    window.__Xr_objURL_forCreatingFile__ = objURL;
 
    var a = document.createElement('a');
 
    a.download = fileName;
    a.href = objURL;
    a.click();
}