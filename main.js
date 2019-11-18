const nameState = ['str', 'vit', 'int', 'wis', 'dex', 'agi', 'dis', 'res', 'spd', 'luk'];
const nameOption = ['atkPhy','defPhyPer','defPhyNum','resPhyPer','resPhyNum',
                  'atkMag','defMagPer','defMagNum','resMagPer','resMagNum',
                  'atkPhyTrue','atkMagTrue', 'rateHit','rateDodge','rateDis','rateRes',
                  'rateCrt','valCrt', 'rateHitJust', 'ratePFD','atkRapid','rateCrtLuk','rateDodgeLuk']
const nameColor = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black', 'hue', 'saturation', 'value', 'alpha']
const nameElement = ['normal' , 'fire' , 'water' , 'earth' , 'tree' , 'steel' , 'light' , 'dark']
const nameOptionElement = ['base','atk','def','atkAdd','defAdd','resist']
let check_dblClick = 0
let mapData={
	lengthX : 0,lengthY : 0,
  map:[],
  solve:[],
	turn: 0 ,
  start : {
    x: 0,    y: 0
  },
  exit : {
    x: 0,    y: 0 
  },
  party : {
    x: 0,    y: 0,
    sigth : 5
  },
	positionOfEnemy : [],
	treasureData : {}
	
};
let areaData = {
	10001 : 30,
	10002 : 550
}



class EquipItem{
	constructor(wearerNumber,itemCode,type){
		this.number = wearerNumber
		let item = this.item = 0
		if(itemCode != 'null'){
		item =  Item.prototype.checkInventory(itemCode)
		if(item === 0){
			return
		}
		var wearer = playerTeam.character[wearerNumber].equip
		var slot = this.checkSlot(item.type)
		var equipSlot = wearer[slot]
		let inventoryEquipCategory = inventoryData[equipSlot.category]
		if(!equipSlot.name){}
		else{
			if(!inventoryEquipCategory[equipSlot.code]){
				inventoryEquipCategory[equipSlot.code] = equipSlot
				inventoryEquipCategory[equipSlot.code].number = 1
			}
			else{
				inventoryEquipCategory[equipSlot.code].number += 1;
			}
		}
		playerTeam.character[wearerNumber].equip[slot] = item
		new BattleSpec(playerTeam.character[wearerNumber])	
		item.number -= 1;
		if(item.number == 0){
			delete inventoryData[item.category][itemCode]
		}
		}
		else{
			var wearer = playerTeam.character[wearerNumber].equip
			var equipSlot = wearer[type]
			if(!equipSlot.name){}
			else{
				if(!inventoryData[equipSlot.category][equipSlot.code]){
					inventoryData[equipSlot.category][equipSlot.code] = equipSlot
					inventoryData[equipSlot.category][equipSlot.code].number = 1
				}
				else{
					inventoryData[equipSlot.category][equipSlot.code].number += 1;
				}
			}
			playerTeam.character[wearerNumber].equip[type] = {}
		new BattleSpec(playerTeam.character[wearerNumber])	
		}

	}
	checkOtherHandCheck(slotName){
		let otherName = ''
		switch(slotName){
			case 'LeftHand' :
				otherName = 'RigthHand'
				break;
			case 'RigthHand' :
				otherName ='LeftHand'
				break;
									 }
		const otherHand = this.equip[otherName].type
		const nowType = this.type
		let canEquip = ''
		switch(nowType){
			case 'Bow' :
				canEquip = ['ArrowCase']
				if(canEquip.indexOf(otherHand) === -1){
					new EquipItem(this.number,'null',otherName)
				}
				break;
				break;
									}
		
	}
	checkTwoHandCheck(type){
		switch(type){
			case 'Bow' :
			case 'TwoHandSword' :
			case 'Spear' :
			case 'Axe' :
			case 'Gun' :
			case 'Staff' :
				this.TwoHandCheck = 1
				break;
					 }
		if(this.item.twoHand === 'TwoHand'){
			this.TwoHandCheck = 1
		}
		else if(this.item.twoHand === 'OneHand'){
			this.TwoHandCheck = 0
		}
	}
	checkSlot(type){
		var slotName = ''
		switch(type){
			case 'Sword' :
			case 'TwoHandSword' :
			case 'Dagger' :
			case 'Pike' :
			case 'Spear' :
			case 'Hatchet' :
			case 'Axe' :
			case 'Mace' :
			case 'Pistol' :
			case 'Gun' :
			case 'Wand' :
			case 'Staff' :
			case 'Bow' :
			case 'Whip' :
				slotName = 'LeftHand'
				break;
			case 'MainGauche' :
			case 'SubSword' :
			case 'SubSword' :
			case 'SubPike' :
			case 'SubHatchet' :
			case 'SubMace' :
			case 'SubPistol' :
			case 'BowGun' :
			case 'Shield' :
			case 'Book' :
			case 'ArmGaurd' :
			case 'ArrowCase' :
				slotName = 'RigthHand'
				break;
			case 'Ammor' :
			case 'Cloth' :
			case 'Robe' :
				slotName = 'Body'
				break;
			case 'Helmet' :
			case 'Hat' :
			case 'Circlet' :
				slotName = 'Head'
				break;
			case 'Item' :
				slotName = 'Other'
				break;
					 }
		return slotName
	}
}
let inventoryData = {
	Weapon : {},
	Ammor : {},
	Item : {},
	Head : {},
	Other : {}
}


var dataName = ['Alent', 'Bastie', 'Ceait','Diman','Eginea','Fiwn','Gaoel']



var inCheck = 0;


function selectPlayerCharacter(value){
	var idValue = value.value
	var id = idValue.slice(1)
	if(!playerTeam.character[id]){	}
	else{
		if(playerTeam.character[id].selected === 0){
			playerTeam.character[id].selected = 1;
			value.style.backgroundColor = 'black';
		}
		else if(playerTeam.character[id].selected === 1){
			playerTeam.character[id].selected = 0;
			value.style.backgroundColor = 'white';
		}
	}
}
function search(){
	battleCheck =  0;
	if(Object.getOwnPropertyNames(playerTeam.character).length < 5){
	new CharacterHire()
	}
	//document.getElementById('MiniMap').style.visibility = 'hidden';
	//document.getElementById('Map').style.visibility = 'hidden';
	var code = document.getElementById("AreaSelect").value
	var level = document.getElementById("AreaLevel").value
	enemyGroup = new EnemyGroup(code,level,'random').returnGroup
	new BattleData
	CreateMap.prototype.changeOnPress(1)
	new BattleData
}


function calculrateElement(perforemr,situation,element,base){
		if(performer){
		switch(situation){
			case 'battle' :
				element = performer.battle.element
				var elementBase = performer.battle.element.base
				break;
			case 'now' : 
				element = performer.now.element
				var elementBase = performer.now.element.base
				break;
			case 'origin' :
				element = performer.origin.element
				var elementBase = performer.origin.element.base
				break;
		}
		}
	if(base){
		if(base.base){
			for(var i = 0; i< 8 ; i++){
				if(base.base[nameElement[i]]){
					element.base[nameElement[i]] += base.base[nameElement[i]]
				}
			}
		}
		for(var i = 1 ; i < 6; i++){
			if(base[nameOptionElement[i]]){
				for(var j = 0; j< 8 ; j++){
					if(base[nameOptionElement[i]][nameElement[j]]){
						element[nameOptionElement[i]][nameElement[j]] += base[nameOptionElement[i]][nameElement[j]]
					}
				}
			}
		}
	}
	return element;
}

let battleMode = 1;
function battleModeChange(){
	battleMode *= -1;
	if(battleMode <0){
		document.getElementById("modeId").innerText ="Battle Mode (Active Turn => Turn)"
	}
	else{
		document.getElementById("modeId").innerText ="Battle Mode (Turn => Active Turn)"
	}
}

class CharacterHire{
	constructor(){
		var name = document.getElementById('HireName').value
		if(!name){
			document.getElementById('HireName').value = 'Input Name'
			return
		}
		if(name ==='Input Name'){
			name = dataName[Math.floor(dataName.length * Math.random)]
		}
		var checkHire = this.hirePayment();
		if(checkHire != 0){
			var createCharacter = new Player(name)
		playerTeam.character[createCharacter.code] = createCharacter
			new BattleSpec(createCharacter,'passive')
			playerTeam.refreshTeamData('funds')
		}
		else{
			document.getElementById('HireName').value = 'Less Funds'
			document.getElementById('HireName').style.backgroundColor = '#6e0906'
			document.getElementById('HireName').addEventListener('focus',
																													 function(){
				document.getElementById('HireName').style.backgroundColor = '#10b090'
			}
																													)
		}
	}
	hirePayment(type){
		var value = 0;
		switch(type){
			case 'normal' : 
			break;
			default :
			value = 100;
			break;
		}
		if(playerTeam.funds >= value){
			playerTeam.funds -= value
			return 1
		}
		else{
			return 0
		}
	}
	hireTimeValeu(type){
		var timeValue = 0;
		switch(type){
			case 'normal' :
			timeValue = 100
		}
		return timeValue
	}
	hireJobType(){
		const job = this.job =  document.getElementById('').value
	}
}
let playerTeam = {}
function createTeam(){
	playerTeam = new Team
	playerTeam.refreshTeamData()
    for(let i =0 ; i < 10; i++){
        new CharacterHire();
    }
    let a = Object.getOwnPropertyNames(playerTeam.character)
    for(let i = 0 ; i < 5; i++){
        playerTeam.character[a[i]].selected = 1;
    }
    let c = Object.getOwnPropertyNames(dataSkill)
    for(let i = 0 ; i < a.length ; i++){
        for(let j = 0 ; j < 6; j++){
			let skillCode
			do{
				skillCode = c[Math.floor(Math.random() * c.length)];
			}while(skillCode.indexOf("A")== -1);
            while(playerTeam.character[a[i]].skill.indexOf(skillCode) == -1){
                playerTeam.character[a[i]].skill.push(skillCode);
            }
        }
    }
}
function loadScript(url,folder)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
	script.src = folder + "\\" + url + ".js";
	script.onload = function(){
		load++;
		
	}
	head.appendChild(script);
	
}
const scriptNames = ["Battle","Item","Maps","Parttern","Skill","Spec","Team","Tribe","UI"];
const dataNamse = ["Area","Item","Job","Monster","Skill","SkillTree","Tribe"];
let load = 0;
window.onload = function(){
	for(let i = 0 ; i < scriptNames.length; i++){
		loadScript(scriptNames[i],"js");
	}
	for(let i = 0 ; i < dataNamse.length; i++){
		loadScript( "data"+ dataNamse[i],"data");
	}
	
	//do{
	//	
//}while(load < scriptNames.length + dataNamse.length)
	document.getElementById("AreaSelect").addEventListener('change',
																												 function(){
		var area = new Area
		area.changeLevel()
	})
	test = this.setInterval(setLoad,1)
	

}
let test;
function setLoad(){
	console.log(load);
	if(load ==  scriptNames.length + dataNamse.length){
		document.getElementById("wrapper").innerHTML ="";
		clearInterval(test);
		addEvents()
		createTeam()
		document.getElementsByClassName('MenuTabs')[0].children[2].click()
		new Shop();
		for(let i =0; i<10 ;i++){
			new Item("IT9940000");
		}
	}
}
function addEvents(){
	addEventListner.prototype.addEventTabs()
}
function enemyKill() {
	var data = Object.getOwnPropertyNames(dataActiveCharacter)
	var length = data.length
	for(var i = 0 ; i < length ; i++){
		if(data[i].indexOf('E') != -1){
			dataActiveCharacter[data[i]].health.hp = -10;
		}
	}
}