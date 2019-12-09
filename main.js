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
let hireTimer ={};
let timerInterval;
class Timer{
	constructor(){
		console.log("TEST");
		this.timerHireControll();
	}
	timerHireControll(){
		const data = Object.getOwnPropertyNames(hireTimer)
		const length = data.length;
		for(let i = 0 ; i < length ; i++){
			hireTimer[data[i]].time -= 1;
			if(hireTimer[data[i]].time  <= 0){
				CharacterHire.prototype.hireCharacter(hireTimer[data[i]].data)
				delete hireTimer[data[i]];
			}
		}
		if(length > 0){
			new HireList();
		}
	}
}
class CharacterHire{
	constructor(type){
		var name = document.getElementById('HireName').value
		if(!name){
			document.getElementById('HireName').value = 'Input Name'
			return
		}
		if(name ==='Input Name'){
			name = dataName[Math.floor(dataName.length * Math.random)]
		}
		this.type=type;
		var checkHire = this.hirePayment(this.type);

		this.name = name;
		this.timeValue = this.hireTimeValeu(this.type);
		if(checkHire != 0){
			this.hireSetTimer();
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
			case 'base':
			value = 0;
			break;
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
			case 'base':
			timeValue = 0;
			break;
			case 'normal' :
			default:
			timeValue = 100
		}
		return timeValue
	}
	hireJobType(){
		const job = this.job =  document.getElementById('').value
	}
	hireSetTimer(){
		var createCharacter = new Player(name)
		this.hireBaseSkill(createCharacter)
		hireTimer[createCharacter.code]={
			code : createCharacter.code,
			time : this.timeValue,
			hireName :createCharacter.name,
			data : createCharacter
		}
	
		
	}
	hireCharacter(createCharacter){
	
		playerTeam.character[createCharacter.code] = createCharacter
		new BattleSpec(createCharacter,'passive')
		playerTeam.refreshTeamData('funds')
		new AddLog([{text:"Hire "}, {text: createCharacter.name}],"System");

	}
	hireBaseSkill(createCharacter){
		let dS = Object.getOwnPropertyNames(dataSkill)
		for(let j = 0 ; j < 6; j++){
			let skillCode
			do{
				skillCode = dS[Math.floor(Math.random() * dS.length)];
			}while(skillCode.indexOf("A")== -1);
            while(createCharacter.skill.indexOf(skillCode) == -1){
                createCharacter.skill.push(skillCode);
			}
		}
	}
}
let playerTeam = {}
function createTeam(){
	playerTeam = new Team
	playerTeam.refreshTeamData()
    for(let i =0 ; i < 10; i++){
        new CharacterHire('base');
    }
    let a = Object.getOwnPropertyNames(playerTeam.character)
    for(let i = 0 ; i < 5; i++){
    //    playerTeam.character[a[i]].selected = 1;
    }
    let c = Object.getOwnPropertyNames(dataSkill)
    for(let i = 0 ; i < a.length ; i++){
        
        
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
	timerInterval = this.setInterval(function(){new Timer()},1000);
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
		loadItem();
		loadCharact();
		for(let i =0; i<10 ;i++){
			new Item("IT9950000");
			new Item("IT9950010");
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



function clickMenu(value){
	switch(value){
		case'Character':
		document.getElementById('MainTab').children[3].click()
		break;
		case 'Hire':
			document.getElementById('MainTab').children[4].click()
			document.getElementById('TownTabs').children[0].click()
		break;
		case 'Buy':
			document.getElementById('MainTab').children[4].click()
			document.getElementById('TownTabs').children[1].click()
		break;
		case 'Sell':
			document.getElementById('MainTab').children[4].click()
			document.getElementById('TownTabs').children[2].click()
		break;
		case 'Inventory':
			document.getElementById('MainTab').children[5].click()
		break;
	}
}
function saveItem(){
	if(localStorage.Item){
		localStorage.removeItem("Item")
	}
	const inv = Object.getOwnPropertyNames(inventoryData);
	const invLength = inv.length;
	let inputText = ''
	for(let i = 0 ; i < invLength; i++){
		const data = inventoryData[inv[i]]
		const itData = Object.getOwnPropertyNames(data);
		const itLength = itData.length;
		for(let j = 0; j< itLength ; j++){
			inputText+= itData[j] + "%" + data[itData[j]].number + "^";
		}

	}

	localStorage.setItem("Item",inputText);
}
function loadItem(){
	const data = localStorage.Item;
	if(!data){
		console.log("NOT DATA");
		return
	}
	const spData = data.split("^");
	const spLength = spData.length;
	for(let i = 0 ;i < spLength-1;i++){
		const cdData = spData[i].split("%");
		const code = cdData[0];
		let count = parseInt(cdData[1]);
		if(count == NaN){
			count = 1;
		}
		for(let j = 0 ; j < count; j++){
			new Item(code,0,'load');
		}
	}
}

function saveCharacter(data){
	const dataNames = Object.getOwnPropertyNames(data);
	let saveData ="";
	//["", "", "", "", 
	//"", "", "", "", 
	//"", "", "", "",
	// "", "", "", "", 
	//"", "", "", "", 
	//"", "", "", "", 
	//"", ""]
	saveData += data.code + "^"
	saveData += data.seed + "^"
	saveData += data.name + "^"
	saveData += data.ally + "^"
	saveData += data.status + "^"
	saveData += data.coordinates + "^"
	saveData += data.level + "^"
	saveData += data.levelExp + "^"
	saveData += data.job + "^"
	saveData += data.tribe + "^"
	saveData += data.protectType[0] +"%" +data.protectType[1]+ "^"
	let originState =""
	let expState =""
	let rebirthState=""
	for(let i = 0; i < nameState.length; i++){
		originState += data.baseState[nameState[i]] + "%"
		expState += data.stateExp[nameState[i]] + "%"
		if(data.rebirth.state){
			rebirthState +=data.rebirth.state[nameState[i]]+"/"
		}
	}
	saveData += originState + "^"
	saveData += expState + "^"
	let skill = data.skill[0]
	for(let i = 1 ; i < data.skill.length; i++){
		skill +=  "%" +data.skill[i]
	}

	saveData += skill + "^"
	let rebirthData = data.rebirth.count +"%"
	for(let i = 0 ; i < data.rebirth.stack; i++){
		rebirthData += data.rebirth.stack[i] + "/"
	}
	rebirthData += "%" + rebirthState
	saveData+= rebirthData +"^" ;
	let equipData = ""
	const equipName = Object.getOwnPropertyNames(data.equip)
	for(let i = 0 ; i < equipName.length; i++){
		if(data.equip[equipName[i]].code){
			equipData +=data.equip[equipName[i]].code
		}
		equipData += "%"
	}
	saveData+=equipData +"^"
	let partternData =""
	for(let i = 0 ; i < data.parttern.length; i++){
		partternData += data.parttern[i][0] +"/" + data.parttern[i][1] +"/" + data.parttern[i][2] +"%"
	}


	saveData+=partternData +"^"
	saveData += data.bonusState + "^"
	saveData += data.skillPoint
	localStorage.setItem(data.code,saveData);
}
function loadCharact(){
	let storageData = Object.getOwnPropertyNames(localStorage)
	for(let i = 0 ; i < storageData.length; i++){
		if(storageData[i].indexOf("P") ==0){
			playerTeam.character[storageData[i]] = new Player(localStorage[storageData[i]],"Load")
		}
	}
}