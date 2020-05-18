
let groupList = {}
class Group{
    constructor(){
        
    }
    inGroupCharacter(){

    }
    printGroupData(name){

    }
}
class GroupDelete{
    constructor(){
        this.value = new DOMSearch('id','GroupNameList').value;

        delete groupList[this.value];
        new DOMSearch('id','GroupNameMain').children["Main"+this.value].remove()
        new DOMSearch('id','GroupNameList').children["List"+this.value].remove()
    }
}
class GroupPrint{
    constructor(type){
        this.type = type;
        this.value = new DOMSearch('id','GroupName'+type).value;
        
        this.data = groupList[this.value];
        this['printGroupData' + this.type]();
    }
    printGroupDataMain() {
        let list = new DOMSearch('class', 'MemberSelect');
        if (!this.data) {
            for (let i = 0; i < 5; i++) {
                let select = list[i]
                    select.children[0].innerText = "None";
                    select.children[0].value = "None";
                    select.value = "None";
            }
        }
        else {
            const name = Object.getOwnPropertyNames(this.data.characterList);
            for (let i = 0; i < 5; i++) {
                let select = list[i]
                if (i < name.length) {
                    //if note selected state = gray
                    select.children[0].innerText = playerTeam.character[name[i]].name;
                    select.children[0].value = name[i];
                    select.value = name[i];
                }
                else {
                    select.children[0].innerText = "None";
                    select.children[0].value = "None";
                    select.value = "None";

                }
            }
        }
    }
    printGroupDataList(){
        if(this.value == 'None'){
            const di = new DOMSearch('id' , 'CharacterList').getElementsByTagName('input')
            for(let i = 0 ; i < di.length; i++){
                if(di[i].checked){
                    new DOMSearch('id',di[i].id + 'Label').click();
                }
            }
        }
        else{
        const name = Object.getOwnPropertyNames(this.data.characterList);
        for(let i =0 ; i < name.length; i++){
            new DOMSearch('id', name[i]+ 'SimpleSelectLabel').click()
        }
        }
    }
}
class GroupCreate{
    constructor(){
        this.name = new DOMSearch('id','GroupName').value
        if(!this.name ){
            new AddLog([{text:"Not Name"}],"System");
            return;
        }
        const nameList = Object.getOwnPropertyNames(groupList)
        if(nameList.indexOf(this.name) != -1){
            new AddLog([{text:"Same Name"}],"System");
            return;
        }
        this.characterList = {};

        this.searchSelectCharacter();
        if(Object.getOwnPropertyNames(this.characterList).length > 1){

            groupList[this.name] = this;
            let cList = new DOMSearch('id','GroupNameList');
            let cname  = new CreateTag('option')
            cname.id= 'List' + this.name
            cname.value = this.name;
            cname.innerText = this.name;
            cList.appendChild(cname);
            let mainList = new DOMSearch('id','GroupNameMain');
            let name  = new CreateTag('option')
            name.id= 'Main' + this.name
            name.value = this.name;
            name.innerText = this.name;
            mainList.appendChild(name);
        }
    }
    searchSelectCharacter(){
        const data = Object.getOwnPropertyNames(playerTeam.character)
        let count = 0;
        for(let i = 0; i < data.length; i++){
            if(playerTeam.character[data[i]].selected == 1){
                this.characterList[data[i]] = playerTeam.character[data[i]]
                count ++;
            }
            if(count == 5){
                break;
            }
        }
    }
}
