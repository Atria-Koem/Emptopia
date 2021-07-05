
class Item{
	constructor(code,refine,type){
		if(type == "load" || type == "loadChar"){
			var dCode = code.slice(0,9)
			var itemData  = dataItem[dCode]
			this.baseCode = itemData.code
			refine =  parseInt(code.slice(9,11));
		}
		else if(type != 'refine'){
			var itemData  = dataItem[code]
			this.baseCode = itemData.code
		}
		else{
			var refineItem = this.checkInventory(code)
			var baseCode = refineItem.baseCode 
			var itemData = dataItem[baseCode]
					this.baseCode = refineItem.baseCode
		}
		this.name = itemData.name;
		this.category = itemData.category;
		this.type = itemData.type;
		if(this.category != "Other"){
		this.talent = this.checkTalentValue(code)
		var talentCode = this.talent
		if(talentCode.toString().length != 3 ){
			talentCode = '0' + talentCode
		} 
		if(!(!refine)){
			this.refine = refine
		}

		else if(!itemData.refine){
			this.refine = 0;
		}
		else{
			this.refine = itemData.refine
		}
		var refineCode = (this.refine.toString().length === 2 ) ? this.refine : '0' + this.refine
		if(itemData.spec){
		this.spec = {}
		this.createOption(itemData.spec)
		}
		
	}
		var addCode,randomCode
		this.code = this.createCode(this.baseCode, refineCode, talentCode, addCode, randomCode);
		if(type == "loadChar"){
			return this;
		}
		this.number = this.checkOverlap();
		if(!itemData.exp){}
		else{
			this.exp = itemData.exp
		}
		this.inputInventory()
	}
	createOption(itemData){
		var name = Object.getOwnPropertyNames(itemData)
		if(name.indexOf('health') != -1){
			this.spec.health = this.calculrate(itemData.health)
		}
		if(name.indexOf('state') != -1){
			this.spec.state = this.calculrate(itemData.state)
		}
		if(name.indexOf('option') != -1){
			this.spec.option = this.calculrate(itemData.option)
		}
		if(name.indexOf('element') != -1){
			this.spec.element = this.calculrate(itemData.element)
		}
		if(name.indexOf('add') != -1 ){
			this.spec.add = this.calculrate(itemData.add)
		}
	}
	createCode(base, refine, talent, add, random){
		var code = ''
		var length = base.length
		if(this.category == "Other"){
			return base;
		}
		switch(length){
			case 9 : 
				code = base + refine + talent
				break;
			case 11 :
				code = base + talent
				break;
			default : 
				code = base 
				break;
								 }
		return code
	}
	inputInventory(){
		var code = this.code

			inventoryData[code] = this
	}
	checkOverlap(){
		var code = this.code
		var number = 0;
		if(!inventoryData[code]){
			number = 1
				}
		else{
			number = inventoryData[code].number + 1
		}
		return number
	}
	checkTalentValue(code){
		var length = code.length;
		var talent = 0;
		switch(length){
			case 9 :
			case 11 :
				talent =  100 //+ Math.ceil(Math.random() * 100 - 50)
				break; 
			default :
				talent = parseInt(code.slice(11,14))
				break;
								 }
		return talent
	}
	checkInventory(itemCode){
		var slotInventory =  Object.getOwnPropertyNames(inventoryData)
		var itemCheck = slotInventory.indexOf(itemCode)
		if(itemCheck == -1){
			return 0;
		}
		var item = inventoryData[itemCode]
		return item
	}
	calculrate(type){
		var returnObject = {}
		var name = Object.getOwnPropertyNames(type)
		var length = name.length;
		for(var i = 0 ; i < length ; i++){

			var talentEffect = ['atkPhy','defPhyPer','defPhyNum','atkMag','defMagPer','defMagNum' ]
			var index = talentEffect.indexOf(name[i])
			if(index != -1){
				if(index % 3 === 0){
				returnObject[name[i]] = Math.round(type[name[i]] * ( this.talent / 100) * (1 + Math.pow(this.refine,2) / 100))
				}
				else{
				returnObject[name[i]] = Math.round(type[name[i]] * ( this.talent / 100) * (1 + this.refine * 3 / 100))
				}
			}
			else{
							returnObject[name[i]] = type[name[i]];
			}
		}
		return returnObject;
	}
}

class refineItem /*extends Item*/{
	constructor(code){
		var itemData = Item.prototype.checkInventory(code)
		if(itemData === 0){
			return
		}
		const chekF = this.checkFunds(itemData)
		if(!chekF){
			new AddLog([{text:"Less Funds "}],"System");
			return;
		}
		var talent = itemData.talent
		var refine = itemData.refine
		var check = this.checkRefine(refine)
		if(check === 1){
			var refineValue = this.succesRefine(itemData)
			//super(code,refineValue)
			let item = new Item(code,refineValue,'refine')
			new AddLog([{text:"Refine Success "}, {text:" +" + refine + "-> +" + refineValue +"  " + item.name}],"System");

			console.log('S')
			this.resultRefine(itemData)
		}
		else{
			new AddLog([{text:"Refine Fail "}, {text:" +" + refine +"  " + itemData.name}],"System");

			this.resultRefine(itemData)
			console.log('F')
		}
	}
	checkRefine(refine){
		var refineRate = 100 - Math.pow(refine / Math.E, Math.PI)
		var refineDice = Math.random() * 100
		var returnValue = 0
		if(refineDice < refineRate){
			returnValue = 1
		}
		return returnValue
	}
	resultRefine(itemData){
		if(itemData.number > 1){
				itemData.number -= 1;
			}
			else{
				delete inventoryData[itemData.code];
			}
	}
	succesRefine(itemData){
		var refine = itemData.refine + 1
		return refine
	}
	checkFunds(itemData){
		let cost = dataItem[itemData.baseCode].price
		if(!cost){
			cost = 0
		}
		cost *=5;

		if(playerTeam.funds > cost){
			playerTeam.funds -=cost;
			Team.prototype.refreshTeamData('funds')
			return true;
		}
		else{
			return false;
		}
	}
}
class MoveItem{
	constructor(type,item){
		this.type= type
		this.item = item 
		this.selectTarget();
		this.checkDelete();
		this.checkAdd();
		if(this.toAdd == true){
			this.toData[this.item.code].number+= 1;
		}
		else{
			this.toData[this.item.code] = this.item;
			this.toData[this.item.code].number = 1;
		}
		if(this.fromDelete == true){
			delete this.fromData[this.item.code]
		}
		else{
			this.toData[this.item.code].number -= 1;
		}
	}
	selectTarget(){
		switch(this.type){
			case 'ToMap' :
				this.toData = mapInventoryData;
				this.fromData= inventoryData;
			break;
			case 'ToInventory':
			this.toData =inventoryData ;
			this.fromData= mapInventoryData ;
			break;
		}
	}
	checkDelete(){
		this.fromDelete = false;
		let count = this.fromData[this.item.code].number
		if( count == 1){
			this.fromDelete = true;
		}
	}
	checkAdd(){
		this.toAdd = false;
		if(this.toData[this.item.code]){
			this.toAdd = true;
		}
	}

}
class UseItem{
	constructor(code){
		this.check = this.checkUseType(code);
		if(!this.check){
			return false;
		}
		this.useCanCheck();
		if(!this.check){
			return false;
		}
		this['useItem' + this.type]();
		return this.check;
	}
	checkUseType(code){
		const item = this.item = dataItem[code];
		if(!item){
			return false;
		}
		if(item.category == "Other"){
			switch(item.type){
				case "Key":
					this.type ="OneTimeArea";
					break;
				case "Map":
					this.type = "Area";
					break;
				case "Rebirth":
					this.type = "Rebirth"
				break;
				case "Navigate":
					this.type ="Navi"
					break;
			}
			return true;
		}
		return false;
	}
	useCanCheck(){
		const data= inventoryData.Other[this.item.code];
		if(!data){
			this.check = false;
		}else{
			const count = data.number
			if(count > 0){
					this.check=true;
			}
			else{
				this.check = false;
			}
		}
		
	}
	useItemNavi(){
		inventoryData.Other[this.item.code].number -= 1;
		if(inventoryData.Other[this.item.code].number == 0){
			delete inventoryData.Other[this.item.code];
		}
		
	}
	useItemRebirth(){
		let performer = playerTeam.character[new DOMSearch( 'id','CharacterDesk').value]
		let data = (this.item.useData == "Random") ? Math.floor(Math.random() * 10) :  this.item.useData
		performer.rebirth = new Rebirth("Item",data,new DOMSearch( 'id','CharacterDesk').value)
		//performer.rebirth.rebirthTypeInput(data);
		inventoryData.Other[this.item.code].number -= 1;
		if(inventoryData.Other[this.item.code].number == 0){
			delete inventoryData.Other[this.item.code];
		}
	}
	useItemArea(){
		new AreaControll('open',this.item.useData)

	}
	useITemOneTimeArea(){

	}
}
