class Item{
	constructor(code,refair,type){
		if(type != 'refair'){
			var itemData  = dataItem[code]
			this.baseCode = itemData.code
		}
		else{
			var refairItem = this.checkInventory(code)
			var baseCode = refairItem.baseCode 
			var itemData = dataItem[baseCode]
					this.baseCode = refairItem.baseCode
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
		if(!(!refair)){
			this.refair = refair
		}
		else if(!itemData.refair){
			this.refair = 0;
		}
		else{
			this.refair = itemData.refair
		}
		var refairCode = (this.refair.toString().length === 2 ) ? this.refair : '0' + this.refair
		if(itemData.spec){
		this.spec = {}
		this.createOption(itemData.spec)
		}
		
	}
	var addCode,randomCode
		this.code = this.createCode(this.baseCode, refairCode, talentCode, addCode, randomCode);

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
	createCode(base, refair, talent, add, random){
		var code = ''
		var length = base.length
		if(this.category == "Other"){
			return base;
		}
		switch(length){
			case 9 : 
				code = base + refair + talent
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
		var category = this.category
		var code = this.code

			inventoryData[category][code] = this
	}
	checkOverlap(){
		var category = this.category
		var code = this.code
		var number = 0;
		if(!inventoryData[category][code]){
			number = 1
				}
		else{
			number = inventoryData[category][code].number + 1
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
		var slotName =  Object.getOwnPropertyNames(inventoryData)
		var slotNameLength = slotName.length
		for(var i = 0; i < slotNameLength ; i++){
			var slotInventory = Object.getOwnPropertyNames(inventoryData[slotName[i]])
			var itemCheck = slotInventory.indexOf(itemCode)
			if(itemCheck != -1){
				break;
			}
		}
		if(i === slotNameLength){
			return 0
		}
		var item = inventoryData[slotName[i]][itemCode]
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
				returnObject[name[i]] = Math.round(type[name[i]] * ( this.talent / 100) * (1 + Math.pow(this.refair,2) / 100))
				}
				else{
				returnObject[name[i]] = Math.round(type[name[i]] * ( this.talent / 100) * (1 + this.refair * 3 / 100))
				}
			}
			else{
							returnObject[name[i]] = type[name[i]];
			}
		}
		return returnObject;
	}
}

class refairItem /*extends Item*/{
	constructor(code){
		var itemData = Item.prototype.checkInventory(code)
		if(itemData === 0){
			return
		}
		var talent = itemData.talent
		var refair = itemData.refair
		var check = this.checkRefair(refair)
		if(check === 1){
			var refairValue = this.succesRefair(itemData)
			//super(code,refairValue)
			new Item(code,refairValue,'refair')
			console.log('S')
			this.resultRefair(itemData)
		}
		else{
			this.resultRefair(itemData)
			console.log('F')
		}
	}
	checkRefair(refair){
		var refairRate = 100 - Math.pow(refair / Math.E, Math.PI)
		var refairDice = Math.random() * 100
		var returnValue = 0
		if(refairDice < refairRate){
			returnValue = 1
		}
		return returnValue
	}
	resultRefair(itemData){
		if(itemData.number > 1){
				itemData.number -= 1;
			}
			else{
				delete inventoryData[itemData.category][itemData.code];
			}
	}
	succesRefair(itemData){
		var refair = itemData.refair + 1
		return refair
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
				case "Map":
					this.type = item.type;
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
		let performer = playerTeam.character[document.getElementById('CharacterDesk').value]
		let data = (this.item.useData == "Random") ? Math.floor(Math.random() * 10) :  this.item.useData
		performer.rebirth = new Rebirth("Item",data,document.getElementById('CharacterDesk').value)
		//performer.rebirth.rebirthTypeInput(data);
		
	}
}
