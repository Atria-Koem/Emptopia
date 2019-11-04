let openCheck = {
	Equip : 0,
	GetSkill : 0,
	LearnSKill : 0
}
class CreateTag{
	constructor(type){
		let element = document.createElement(type)
		return element
	}
}
class CharacterDesk{
	constructor(performerNumber){
		const idValue = performerNumber.value
		const id = idValue
		this.changeCharacterList('none')
		this.id = id
		if(!playerTeam.character[id]){	
			return 
		}
		else{
			this.performer = playerTeam.character[id]
		}
		let desk = document.getElementById('CharacterDesk')
		desk.innerHTML=''
		desk.value = this.id
		let mainBoard = this.createMainBoard()
		let close = this.createCloseButton()
		let protectAndPositionBoard = this.createPAPBoard()
		let itemBoard = this.createItemBoard()
		let skillBoard = this.createSkillBoard()
		desk.appendChild(close)
		desk.appendChild(mainBoard)
		desk.appendChild(protectAndPositionBoard)
		desk.appendChild(itemBoard)
		desk.appendChild(skillBoard)
		this.checkFavoriteSkill()
		addEventListner.prototype.addEvent()
	}
	createMainBoard(){
		let board = new CreateTag('div');
		board.className = 'CharacterDeskMainBoard'
		let character = this.createCharacteristicData()
		let stateView = this.createStateView()
		board.appendChild(character)
		board.appendChild(stateView)
		return board
	}
	createItemBoard(){
		let board = new CreateTag('div')
		board.className = 'CharacterDeskItemBoard'
		let equipSlot = this.createViewEquipment()

		board.appendChild(equipSlot)

		return board
	}
	createSkillBoard(){
		let board = new CreateTag('div')
		board.className ='CharacterDeskSkillBoard'
		let playerSkill = this.createPlayerSkillData()
		let learnSkill = this.createLearnSkillData()
		board.appendChild(playerSkill)
		board.appendChild(learnSkill)
		return board
	}
	createPlayerSkillData(number){
		let skillData = ''
		if(!number){
			skillData = this.performer.skill
		}
		else{
			skillData = playerTeam.character[number].skill
		}
		let div = new CreateTag('div')
		div.id = 'PlayerSkillData'
		let tittle = CreateViewHTML.prototype.createPTag('PlayerSkill(ClickOpen)','SkillTittle')
		let label = CreateViewHTML.prototype.createViewLabel("PlayerSkillDataCheck","CharacterData")
		let checkBox = CreateViewHTML.prototype.createViewCheckBox("PlayerSkillDataCheck","SimpleSelect",0,"DataLabel",0,openCheck.GetSkill)
		checkBox.addEventListener("click", function(){
			openCheck.GetSkill = this.checked
		})
		label.appendChild(tittle)
		div.appendChild(label)
		div.appendChild(checkBox)
		let dataTap = new CreateTag("div")
		dataTap.className = "CharacterData"
		let skillDataDiv = new CreateTag('div')
		skillDataDiv.className = 'SkillData'
		const skillCode = /*Object.getOwnPropertyNames(*/skillData/*)*/
		const length = skillCode.length 

		for(let i = 0; i < length ; i++){
			const skill = dataSkill[skillCode[i]]
			let addDiv = new CreateTag('div')
			let disabled = (skill.code.indexOf('P') != -1) ? true : false ;
			let checkBox = CreateViewHTML.prototype.createViewCheckBox(skillCode[i] + 'Favorite','SkillFavorite',skillCode[i],'SkillFavorite', disabled)
			let selecter = new CreateTag('div')
			let label = CreateViewHTML.prototype.createViewLabel(skillCode[i] + 'Favorite','Skill')
			selecter.className = 'SkillFavoriteSelecter'
			let skillDiv = new CreateDataView('Skill',0,skill).div
			addDiv.appendChild(checkBox)
			label.appendChild(selecter)
			label.appendChild(skillDiv)
			addDiv.appendChild(label)
			skillDataDiv.appendChild(addDiv)
		}
		dataTap.appendChild(skillDataDiv)
		div.appendChild(dataTap)
		return div
	}
	checkFavoriteSkill(number){
		let favoriteData = ''
		if(!number){
			favoriteData = this.performer.skillFavorite
		}
		else{
			favoriteData = playerTeam.character[number].skillFavorite
		}
		let checkBox = document.getElementsByClassName('SkillFavoriteCheckBox')
		const length = checkBox.length
		for( let i = 0 ; i <length ; i++){
			if(favoriteData.indexOf(checkBox[i].value) != -1){
				checkBox[i].checked = 'checked'
			}
		}
	}
	createLearnSkillData(number){
		let skillData = ''
		let skillLearnArray = ''
		let skillPoint = ''
		if(!number){
			skillData = dataSkill//checkSkillLearning(this.performer)
			skillLearnArray = this.performer.skill
			skillPoint = this.performer.skillPoint
			number = this.performer.code
		}
		else{
			skillData = dataSkill//checkSkillLearning(playerTeam.character[number])
			skillLearnArray = playerTeam.character[number].skill
			skillPoint = playerTeam.character[number].skillPoint
		}
		let div = new CreateTag('div')
		div.id = 'LearnSkillData'
		let title = CreateViewHTML.prototype.createPTag('Can Learn Skill(ClickOpen	)','SkillTittle')
		let label = CreateViewHTML.prototype.createViewLabel("SkillLearnDataCheck","CharacterData")
		let checkBox = CreateViewHTML.prototype.createViewCheckBox("SkillLearnDataCheck","SimpleSelect",0,"DataLabel",0,openCheck.LearnSKill)
		checkBox.addEventListener("click", function(){
			openCheck.LearnSKill = this.checked
		})
		label.appendChild(title)
		div.appendChild(label)
		div.appendChild(checkBox)
		let dataTap = new CreateTag("div")
		dataTap.className = "CharacterData"
		let skillPointDiv = CreateViewHTML.prototype.createPTag('Skill Point : ' + skillPoint ,'SkillTittle')
		div.appendChild(skillPointDiv)
		let learnDiv = new CreateTag('div')
		learnDiv.className = 'SkillData'
		learnDiv.id = 'SkillLearnCode'
		learnDiv.value = null
		const skillCode = Object.getOwnPropertyNames(skillData)
		const length = skillCode.length 
		for(let i = 0; i < length ; i++){
			const canLearnCheck = new CheckSkill(number,skillCode[i]).check
			if(skillLearnArray.indexOf(skillCode[i]) == -1 && canLearnCheck === 'success'){
				const skill = dataSkill[skillCode[i]]
				let addDiv = new CreateTag('div')
				let radio = CreateViewHTML.prototype.createViewRadio(skillCode[i] + 'Learn','SkillLearn',skillCode[i],'SkillLearn')
				let skillDiv = new CreateDataView('Skill','Learn',skill).div
				let selecter = new CreateTag('div')
				let label = CreateViewHTML.prototype.createViewLabel(skillCode[i] + 'Learn','Skill')
				selecter.className = 'SkillLearnSelecter'
				addDiv.appendChild(radio)
				label.appendChild(selecter)
				label.appendChild(skillDiv)
				addDiv.appendChild(label)
				learnDiv.appendChild(addDiv)
			}
		}
		dataTap.appendChild(learnDiv)
		let button = this.createSkillLearnButton()
		dataTap.appendChild(button)
		div.appendChild(dataTap)
		return div
	}
	createSkillLearnButton(){
		let button = CreateViewHTML.prototype.createViewButton(0,'SkillLearn',0,'Learn Skill');
		return button
	}
	createPAPBoard(){
		let board = new CreateTag('div');
		let protectPosition = new CreateTag('div');
		protectPosition.className = 'ProtectAPosition'
		let protectMenu = this.createProtectMenu()
		let positionMenu = this.createPositionMenu()
		protectPosition.appendChild(protectMenu)
		protectPosition.appendChild(positionMenu)
		board.appendChild(protectPosition)
		let changeButton = this.createProtectAndPositionChangeButton()
		board.appendChild(changeButton)
		return board
	}
	createSelectedButton(){
		let div = new CreateTag('div');
		div.className = 'SelectPartyBoard'
		let pFirst = new CreateTag('p');
		pFirst.innerText = 'PartyCheck'
		div.appendChild(pFirst)
		let partySelect = new CreateTag('div');
		partySelect.className = 'SelectParty ViewSelecter'
		const name = ['inParty' , 'outParty']
		for( let i = 0 ; i < 2 ; i++){
		let input = CreateViewHTML.prototype.createViewRadio(name[i]+'SelectParty','select',name[i],'SelectParty View')//new CreateTag("input")
			if(this.performer.selected != i){
				input.checked = true
			}
		let label = new CreateTag("label")
		label.setAttribute("for", name[i] + "SelectParty")
		label.className = "SelectParty ViewLabel "+ name[i] +"SelectParty"
		label.innerText= name[i]
			partySelect.appendChild(input)
			partySelect.appendChild(label)			
		}
		let span = new CreateTag("span")
		span.className = 'SelectParty ViewSelect'
		partySelect.appendChild(span)
		div.appendChild(partySelect)
		return div
	}
	createCharacteristicData(){
		const name = this.performer.name
		const level = this.performer.level
		const job = dataJob[this.performer.job].name
		const tribe = dataTribe[this.performer.tribe].name
		let characteristDiv = new CreateTag('div');
		characteristDiv.className = 'CharacteristicView'
		let nameDiv = new CreateTag('div');
		let nameP = CreateViewHTML.prototype.createPTag(name)
		let namePT = CreateViewHTML.prototype.createPTag('Name')
		nameDiv.appendChild(namePT)
		nameDiv.appendChild(nameP)
		let levelDiv = new CreateTag('div');
		let levelPT = CreateViewHTML.prototype.createPTag('Level')
		let levelP = new CreateTag('div')
		levelP.innerText = level
		let levelData = new CreateTag('div')
		levelData.className = 'StateOptionText'
		let levelUpExp = LevelUp.prototype.calculrateLevelExp(level)
		let levelExp = LevelUp.prototype.calculrateLevelExp(level) - this.performer.levelExp
		let width = levelExp / levelUpExp * 100
		let tittle = levelExp + '/' + levelUpExp 
		let levelBar = CreateViewHTML.prototype.createViewBar(width,tittle)
		levelDiv.appendChild(levelPT)
		levelData.appendChild(levelP)
		levelData.appendChild(levelBar)
		levelDiv.appendChild(levelData)
		let jobDiv = new CreateTag('div');
		let jobP = CreateViewHTML.prototype.createPTag(job)
		let jobPT = CreateViewHTML.prototype.createPTag('Job')
		jobDiv.appendChild(jobPT)
		jobDiv.appendChild(jobP)
		let tribeDiv = new CreateTag('div');
		let tribeP = CreateViewHTML.prototype.createPTag(tribe)
		let tribePT = CreateViewHTML.prototype.createPTag('Tribe')
		tribeDiv.appendChild(tribePT)
		tribeDiv.appendChild(tribeP)
		let selectDiv = this.createSelectedButton()
		characteristDiv.appendChild(nameDiv)
		characteristDiv.appendChild(levelDiv)
		characteristDiv.appendChild(jobDiv)
		characteristDiv.appendChild(tribeDiv)
		characteristDiv.appendChild(selectDiv)
		return characteristDiv
	}
	createHealthData(number){
		let performer = ''
		if(!number){
			performer = this.performer
		}
		else{
		  performer = playerTeam.character[number]
		}
		const health = performer.origin.health
		const battleHealth = performer.battle.health
		const healthName = Object.getOwnPropertyNames(health)
		let divHealth = document.createElement('div')
		divHealth.className = 'HealthOption'
		for(let i = 0 ; i < 3; i ++){
			let div = new CreateTag('div')
			let healthNameP = new CreateTag('p')
			healthNameP.innerText = healthName[3+i].toUpperCase()
			let healthValueP = new CreateTag('p')
			let innerText = health[healthName[i]]
			let healthGap = battleHealth[healthName[i]] - health[healthName[i]]
			if(healthGap > 0){
				innerText += ' + ' + healthGap
			}
			else if(healthGap < 0){
				innerText += ' - ' + Math.abs(healthGap)
			}
			healthValueP.innerText = innerText
			healthValueP.style.color = Text.prototype.checkStyleColor(healthName[3+i].toUpperCase())
			div.className = 'HealthOptionView' 
			div.appendChild(healthNameP)
			div.appendChild(healthValueP)
			divHealth.appendChild(div)
		}
	return divHealth	
	}
	changeCharacterList(type){
		var level = document.getElementsByClassName('level')
		var tribe = document.getElementsByClassName('tribe')
		var length = level.length
		for(var i = 0 ; i < length; i++){
			level[i].style.display = type
			tribe[i].style.display = type
		}
	}
	refreshStateView(){
		let state = document.getElementById('StateView')
		let number = document.getElementById('CharacterDesk').value
		let div = CharacterDesk.prototype.createStateView(number)
		state.innerHTML = div.innerHTML
	}
	createStateView(number){
		var stateView = document.createElement('div');
		var stateLength = nameState.length
		stateView.className = 'StateView'
		stateView.id = 'StateView'
		let health = this.createHealthData(number)
		stateView.appendChild(health)
		for(var i = 0; i< stateLength/2; i++){
			var div = document.createElement('div');
			div.className="StateOption"
			var firstStateDiv = document.createElement('div');
			firstStateDiv.className = 'StateOptionText'
			var firstStateText = document.createElement('div');
			firstStateText.className = 'TEXT'
			firstStateText.innerText = nameState[i * 2];
			firstStateDiv.appendChild(firstStateText)
			div.appendChild(firstStateDiv)
			var firstState = this.createViewState(i * 2 , number);
			div.appendChild(firstState)
			var secondStateDiv = document.createElement('div');
			secondStateDiv.className = 'StateOptionText'
			var secondStateText = document.createElement('div');
			secondStateText.className = 'TEXT'
			secondStateText.innerText = nameState[i * 2 + 1];
			secondStateDiv.appendChild(secondStateText)
			div.appendChild(secondStateDiv)
			var secondState = this.createViewState(i * 2 + 1, number);
			div.appendChild(secondState)
			stateView.appendChild(div)
		}
		var bonus = this.createBonusState(number)
		stateView.appendChild(bonus)
		return stateView
	}
	createBonusState(number){
		if(!number && number != 0){
			var performer = this.performer
		}
		else{
			var performer = playerTeam.character[number]
		}
		var bonus = performer.bonusState
		var div = document.createElement('div');
		div.className = 'StateOption'
		var bonusDiv = document.createElement('div');
		bonusDiv.className = 'BonusStateText'
		bonusDiv.innerText = 'BonusState '
		var bonusStateText = document.createElement('div');
		bonusStateText.className = 'BonusState'
		bonusStateText.id = 'BonusState'
		bonusStateText.value = bonus
		bonusStateText.innerText = bonus;	
		div.appendChild(bonusDiv)
		div.appendChild(bonusStateText)
		var applyButton = this.createStateApplyButton()
		div.appendChild(applyButton)
		var resetButton = this.createStateResetButton()
		div.appendChild(resetButton)
		return div
	}
	createStateApplyButton(){
		var div = document.createElement('div');
		div.className = 'ApplyButton Button'
		div.innerText = 'Apply'
		return div
	}
	createStateResetButton(){
		var div = document.createElement('div');
		div.className = 'ResetButton Button'
		div.innerText = 'Reset'
		return div
	}	
	createCloseButton(){
		var div = document.createElement('div');
		div.className = 'CloseCircle'
		div.addEventListener('click',
																		 function(){
					this.parentNode.innerHTML = ''
			CharacterDesk.prototype.changeCharacterList('block')
				})
		return div
	}
	createPositionMenu(){
		let div = document.createElement('div');
		div.className = 'PositionBoard'
		let pFirst = document.createElement('p');
		pFirst.innerText = 'Position Select'
		div.appendChild(pFirst)
		let positionSelect = document.createElement('div');
		positionSelect.className = 'Position ViewSelecter'
		const name = ['Front' , 'Back']
		for( var i = 0 ; i < 2 ; i++){
		let input = CreateViewHTML.prototype.createViewRadio(name[i]+'Position','position',name[i],'Position View')
			if(this.performer.coordinates == name[i]){
				input.checked = true
			}
		let label = document.createElement("label")
		label.setAttribute("for", name[i] + "Position")
		label.className = "Position ViewLabel "+ name[i] +"Position"
		label.innerText= name[i]
			positionSelect.appendChild(input)
			positionSelect.appendChild(label)			
		}
		let span = document.createElement("span")
		span.className = 'Position ViewSelect'
		positionSelect.appendChild(span)
		div.appendChild(positionSelect)
		return div
	}
	createProtectMenu(){
		var div = document.createElement('div');
		div.className = 'Protect'
		var pFirst = document.createElement('p');
		pFirst.innerText = 'Protect Type'
		div.appendChild(pFirst)
		var select = document.createElement('select')
		select.id = 'ProtectSelect'
		var optionValue = ['Always','HP Percent','Random','None']
		for(var i = 0 ; i < 4; i ++){
			var option = document.createElement('option')
			option.value = optionValue[i]
			option.innerText = optionValue[i]
			select.appendChild(option)
		}
		select.selectedIndex = optionValue.indexOf(this.performer.protectType[0])
		div.appendChild(select)
		var input = document.createElement("input")
		input.setAttribute("type", "number")
		input.id = 'ProtectNumber'
		input.setAttribute("min", 0)
		var value = this.performer.protectType[1]
		input.value = value
		div.appendChild(input)
		return div
	}
	createProtectAndPositionChangeButton(){
		let button = CreateViewHTML.prototype.createViewButton(0,'ChangeProtectPosition',this.id,'Change')
		button.addEventListener('click',
													 function(){
			let performer = playerTeam.character[this.value]
			performer.protectType[0] = document.getElementById('ProtectSelect').value
			performer.protectType[1] = document.getElementById('ProtectNumber').value
			performer.coordinates = (document.getElementsByName("position")[0].checked) ? 'Front': 'Back' ;
		}
													 )
		return button
	}
	createViewEquipment(number){
		if(!number){
			var equip = this.performer.equip
			var id = this.id
		}
		else{
			var performer = playerTeam.character[number]
			var equip = performer.equip
			var id = number
		}
		var div = document.createElement('div');
		div.id = 'EquipSelect'
		var tittle = document.createElement('p');
		let label = CreateViewHTML.prototype.createViewLabel("EquipDataCheck","CharacterData")
		let checkBox = CreateViewHTML.prototype.createViewCheckBox("EquipDataCheck","SimpleSelect",0,"DataLabel",0,openCheck.Equip)
		checkBox.addEventListener("click", function(){
			openCheck.Equip = this.checked
		})
		tittle.className = "EquipmentTittle"
		tittle.innerText = 'Equip(ClickOpen)'
		label.appendChild(tittle)
		div.appendChild(label)
		div.appendChild(checkBox)
		let dataTap = new CreateTag("div")
		dataTap.className = "CharacterData"
		var summaryOption = this.createEquipmentSummaryOption(id)
		dataTap.appendChild(summaryOption)
		var equipSlot = document.createElement('div');
		equipSlot.className = 'ItemEquip'
		var type = Object.getOwnPropertyNames(equip)
		for(var i = 0, typeLength = type.length; i < typeLength ; i++){
			if(!number){
			var slotDiv = this.createEquipmentSlot(type[i])
			}
			else{
				var slotDiv = this.createEquipmentSlot(type[i],performer)
			}
			equipSlot.appendChild(slotDiv)
		}
		var button = document.createElement('button');
		button.className = 'ItemButton RemoveButton Button'
		button.innerText = 'Remove'
		button.value = id
		equipSlot.appendChild(button)
		dataTap.appendChild(equipSlot)
		let inventorySlot = new InventoryDataView('Equipment',this.id)
		dataTap.appendChild(inventorySlot)
		div.appendChild(dataTap)
		return div
	}
	summaryEquipSpecView(number) {
	    var performer = playerTeam.character[number]
	    var equip = performer.equip
	    var equipSlot = Object.getOwnPropertyNames(equip)
	    var equipLength = equipSlot.length
	    var itemOption = { Atk: 0, Matk: 0, Def: { Per: 0, Num: 0 }, Mdef: { Per: 0, Num: 0 } }
	    var targetNameOption = ['atkPhy', 'atkMag', 'defPhyPer', 'defPhyNum', 'defMagPer', 'defMagNum']
	    var targetNameOptionLength = targetNameOption.length
	    for (var i = 0 ; i < equipLength; i++) {
	        var nowItem = equip[equipSlot[i]].spec
	        if (nowItem) {
	            var nowEquipOption = Object.getOwnPropertyNames(nowItem)
	            if (nowEquipOption.indexOf('option') != -1) {
	                var option = Object.getOwnPropertyNames(nowItem.option)
	                for (var j = 0 ; j < targetNameOptionLength; j++) {
	                    if (option.indexOf(targetNameOption[j]) != -1) {
	                        switch (j) {
	                            case 0:
	                                itemOption.Atk += nowItem.option[targetNameOption[j]]
	                                break;
	                            case 1:
	                                itemOption.Matk += nowItem.option[targetNameOption[j]]
	                                break;
	                            case 2:
	                                itemOption.Def.Per += nowItem.option[targetNameOption[j]]
	                                break;
	                            case 3:
	                                itemOption.Def.Num += nowItem.option[targetNameOption[j]]
	                                break;
	                            case 4:
	                                itemOption.Mdef.Per += nowItem.option[targetNameOption[j]]
	                                break;
	                            case 5:
	                                itemOption.Mdef.Num += nowItem.option[targetNameOption[j]]
	                                break;
	                        }
	                    }
	                }
	            }
	        }
	    }
	    return itemOption
	}
	createEquipmentSummaryOption(number){
		var equipOption = this.summaryEquipSpecView(number)
		var div = document.createElement('div');
		div.className = "EquipmentOption"
		var optionName = Object.getOwnPropertyNames(equipOption)
		var length = optionName.length
		for(var i = 0 ; i < length ; i ++){
			var innerDiv = document.createElement('div');
			innerDiv.className = optionName[i]
			var name = document.createElement('p');
			name.className = 'OptionName'
			name.innerText = optionName[i]
			var value = document.createElement('p');
			value.className = "OptionValue"
			switch(optionName[i]){
				case 'Atk' : 
				case 'Matk' :
					value.innerText = equipOption[optionName[i]]
					break;
				case 'Def' :
				case 'Mdef' :
					value.innerText = equipOption[optionName[i]].Per + ' + ' + equipOption[optionName[i]].Num
					break;
													}
			innerDiv.appendChild(name)
			innerDiv.appendChild(value)
			div.appendChild(innerDiv)
		}
		return div
	}
	createEquipmentSlot(type,performer){
		if(!performer){
			var equip = this.performer.equip
		}
		else{
			var equip = performer.equip
		}
		var div = document.createElement('div');
		div.className = 'ItemEquipSlot'
		let radio = CreateViewHTML.prototype.createViewRadio(type,'equipment',type,'ItemCase')//document.createElement("input")
		var label = document.createElement("label")
		label.setAttribute("for", type)
		label.className = "ItemCaseText"
		label.innerText= type
		var infoText = document.createElement('div');
		if(Object.getOwnPropertyNames(equip[type]).length != 0){
			infoText = new CreateDataView('Item','Equip',equip[type]).div
		}
		div.appendChild(radio)
		div.appendChild(label)	
		div.appendChild(infoText)
		return div
	}
	createViewState(number,performerNumber,type){
		if(!performerNumber && performerNumber != 0){
			var performer = this.performer
		}
		else{
			var performer = playerTeam.character[performerNumber]
		}
		let baseState = 0
		let originState = 0
		let addState = 0
		if(!type){
			originState = performer.origin.state[nameState[number]]
			baseState = performer.baseState[nameState[number]]
			addState = performer.battle.state[nameState[number]] - originState
		}
		else{
			baseState = parseInt(document.getElementById('StateOption' + nameState[number]).getAttribute("value"))
			originState = new State(playerTeam.character[performerNumber],baseState,0,0,number).state
			addState = performer.battle.state[nameState[number]] - performer.origin.state[nameState[number]]
		}
		/*if(!performer.add || !performer.add.state || !performer.add.state[nameState[number]]){
			var addState = 0
		}
		else{			
			var addState = performer.add.state[nameState[number]]
		}*/
		var div = document.createElement('div');
		div.id = 'StateOption' + nameState[number]
		div.value = originState
		div.className = 'StateOptionText'
		var stateValue = this.returnStateText(originState, addState);
		var stateGrade = document.createElement('div');
		stateGrade.innerText = stateValue[0]
		if(addState != 0){
			stateGrade.innerText += ' + ' + addState
		}
		stateGrade.style.textTransform =  'none'
		div.appendChild(stateGrade)
		let bar = CreateViewHTML.prototype.createViewBar(stateValue[1],stateValue[1] + '%')
		div.appendChild(bar)
		div.setAttribute("value", baseState)
		div.setAttribute("addValue", 0)
		return div
	}
	returnStateText(number,addNumber,exp){ 
		const grade = ['K' , 'J' , 'I' , 'H'  , 'G' , 'F' , 'E' , 'D' , 'C' , 'B' , 'A' , 'Ex'] 
		const secondGarde = ['k' , 'j' , 'i' , 'h'  , 'g' , 'f' , 'e' , 'd' , 'c' , 'b' , 'a' ]
		var first = Math.floor((number + addNumber) / 1331)
		var secound = Math.floor(((number + addNumber) - first * 1331) / 121)
		var third = (number + addNumber) - first * 1331 - secound * 121;
		if(first > 10){
			var over = Math.floor((number + addNumber) / 14641) - 1;
			var head = (over == 0) ? 'Ex' : 'Ex_' + over
			var numbering = Math.floor(((number + addNumber) % 14641) / 14641 * 1000) / 10
			}
		else{
			var head = grade[first] + secondGarde[secound]
			var numbering =  Math.floor(third / 121 * 1000)/10 // exp / StateExp +  
			}
		return [head,numbering]
	}

}
class CreateViewHTML{
	constructor(){}
	createViewLabel(forId,type){
		let label = new CreateTag('label')
		label.setAttribute("for", forId)
		label.className =  type + 'Label DataLabel'
		return label
	}
	createViewRadio(id,name,value,type,disabled){
		let radio = new CreateTag("input")
		radio.setAttribute("type", "radio")
		radio.setAttribute("name", name)
		radio.id = id
		radio.value = value
		radio.className = type + "Radio"
		if(disabled){
			radio.disabled = true
		}
		return radio
	}
	createViewButton(id,className,value,innerText){
		let button = new CreateTag('button')
		if(id){
			button.id = id
		}
		button.innerText = innerText
		button.className = className + ' Button'
		button.value = value
		return button
	}
	createViewCheckBox(id,name,value,type,disabled,checke){
		let checkBox = new CreateTag("input")
		checkBox.setAttribute("type", "checkbox")
		checkBox.setAttribute("name", name)
		checkBox.id = id
		checkBox.value = value
		checkBox.className = type + "CheckBox"
		
		if(disabled){
			checkBox.disabled = true
		}
		if(checke){
			checkBox.checked = checke
		}
		return checkBox
	}
	createViewBar(width,title){
		let bar = new CreateTag('div');
		bar.className = 'Max'
		let gauge = new CreateTag('div');
		gauge.className = 'EXP'
		gauge.style.width = width + '%'
		gauge.title = title
		bar.appendChild(gauge)
		return bar
	}
	createPTag(text,className){
		let p = new CreateTag('p')
		if(text){
			p.innerText = text
		}
		if(className){
			p.className = className
		}
		return p
	}
}
class InventoryDataView{
	constructor(type,id){
		this.type = type
		if(id){
			this.id = id
		}
		this.inventory = inventoryData
		this.selectMainDiv()
		this.createTittle()
		let hidden = document.getElementById('InventoryType')
		if(!hidden){
			hidden = new CreateTag('hidden')
			hidden.id = 'InventoryType'
			hidden.value = this.type
		}
		this.div.appendChild(hidden)
		let sort = this.createSortDiv(type)
		this.div.appendChild(sort)
		let data = this.createItemData(type)
		this.div.appendChild(data)
		if(type === 'Equipment'){
			let button = this.createEquipButton()
			this.div.appendChild(button)
			return this.div 
		}
	}
	selectMainDiv(){
		switch(this.type){
			case 'Equipment' :
				this.div = new CreateTag('div')		
				this.div.className = 'InventoryView'
				this.div.id = 'Inventory' + this.type
				break;
			case 'List' : 
				this.div = document.getElementById('InventoryView') 
				break;
										}
	}
	
	createTittle(){
		let innerText = ''
		switch(this.type){
			case 'Equipmnet' :
				innerText = 'Equipment capable'
				break;
			case 'List' :
				innerText = 'InventoryList'
				break;
										}
		let tittle = CreateViewHTML.prototype.createPTag(innerText,"InventoryTittle")
		tittle.id = "InventoryTittle"
		this.div.appendChild(tittle)
	}
	createSortDiv(type){
		if(!type){
			type = this.type
		}
		let index = this.sortValue = 0
		if(document.getElementById('InventorySelecter'+ type)){
			 index = this.sortValue = document.getElementById('InventorySelecter'+ type).value
		}
		let inventory = this.inventory
		if(!inventory){
			inventory = inventoryData
			
		}
		let select = new CreateTag('select');
		select.id = 'InventoryTypeSelecter' + this.type
		select.className = 'InventoryType'
		const name = Object.getOwnPropertyNames(inventory)
		const length = name.length
		let i = 0
		for( i = 0 ; i < length ; i++){
			let option = new CreateTag('option')
			option.value = name[i]
			option.innerText = name[i]
			select.appendChild(option)
			if( i === index){
				option.setAttribute("selected", "selected")
			}
		}
		let option = new CreateTag('option')
		option.value = 'All'
		option.innerText = 'All'
		select.appendChild(option)
		if( i === index){
			option.setAttribute("selected", "selected")
		}
		return select
	}
	createEquipButton(number){
		let id = ''
		if(!number){
			id = this.id
		}
		else{
			id = number
		}
		let button = CreateViewHTML.prototype.createViewButton('','ItemButton EquipButton',id,'Equip')
		return button
	}
	createItemData(type){
		let div = this.div
		if(!div){
			div = document.getElementById('Inventroy'+this.type)
		}
		if(!type){
			type = this.type
		}
		let inventoryDiv = new CreateTag('div')
		inventoryDiv.className = 'Inventory'
		inventoryDiv.id = 'Inventory' + type
		let inventory = this.inventory
		if(!inventory){
			inventory = inventoryData
			
		}
		const name = Object.getOwnPropertyNames(inventory)
		let sortValue = name[this.sortValue]
		if(!sortValue || document.getElementById('InventoryTypeSelecter'+ type)){
			sortValue = document.getElementById('InventoryTypeSelecter'+ type).value
		}
		const length = name.length
		const checkSort = name.indexOf(sortValue)
		if(sortValue != 'All'){
			this.createItemSortData(type,sortValue,inventoryDiv);
		}
		else{
			for( let i = 0 ; i < length ; i++){
				this.createItemSortData(type,name[i],inventoryDiv)
			}
		}
		return inventoryDiv
	}
	createItemSortData(type,sortType,div){
		const inventory = inventoryData[sortType]
		const inventoryName = Object.getOwnPropertyNames(inventory).sort()
		const length = inventoryName.length 
		for(let i = 0; i < length; i++){
			let createCheck = -1
			if(type === 'Equipment'){
				createCheck = this.checkJobEquipment(inventory[inventoryName[i]].type)
			}
			if(createCheck == -1){
				let itemDiv = new CreateTag('div')
				itemDiv.className = "ItemData"
				let label = CreateViewHTML.prototype.createViewLabel(inventoryName[i],'Item')
				let inputLabel = new CreateDataView('Item',0,inventory[inventoryName[i]]).div
				if(type === 'Equipment'){
					let radio = CreateViewHTML.prototype.createViewRadio(inventoryName[i],'inventory',inventoryName[i],'ItemEquip')
					radio.addEventListener('click',
																 function(){
						document.getElementById('InventoryView').value = this.id
					})
					itemDiv.appendChild(radio)
					let selecter = new CreateTag('div')
					selecter.className = "ItemSelecter"
					label.appendChild(selecter)
				}
				label.appendChild(inputLabel)
				itemDiv.appendChild(label)
				div.appendChild(itemDiv)
			}
		}
	}
	checkJobEquipment(itemType){
		let id = this.id
		let check = 1
		if(!id){
			id = document.getElementById('CharacterDesk').value
		}
		const jobData = dataJob[playerTeam.character[id].job]
		if(jobData.limit){
			check = jobData.limit.indexOf(itemType)
		}
		return check
	}
}
class CreateDataView{ 
	constructor(type,type2,data,code){
		this.type = type
		this.type2 = type2
		this.code = code
		this.data = data
		if(!this.data){
			this.checkDataType()
		}
		this.div = this['create' + type + 'Div']()
	}
	checkDataType(){
		switch(this.type){
			case 'Action' :
				this.data = dataAction[this.code];
				break;
			case 'Item' :
				this.data = dataItem[this.code];
				break;
			case 'Character' :
				this.data = playerTeam.character[this.code]
				break;
			case 'Skill' :
				this.data = dataSkill[this.code]
				break;
			case 'ShopBuy' :
				this.data = dataItem[this.code]
				break;
		}
	}
	createSkillDiv(){
		const skill = this.data
		const skillElementName = Object.getOwnPropertyNames(skill)
		let mainDiv = new CreateTag('div')
		let slash = new Text(' / ').p;
		mainDiv.className = 'SkillInfoText'
		if(this.type2 === 'Learn'){
			let skillPoint = skill.point
			if(!skillPoint){
				skillPoint = 0
			}
			let pointP = new Text( skillPoint + ' pt ','SkillPoint').p
			mainDiv.appendChild(pointP)
			mainDiv.appendChild(slash)
			slash = new Text(' / ').p;
		}
		let nameP = new Text(skill.name , 'SkillName').p
		mainDiv.appendChild(nameP)
		mainDiv.appendChild(slash)
		const typeCheck = skill.code.slice(1,2)
		if(typeCheck != 'P'){
			for(let i = 0 ; i < 2 ; i++){
				let targetType = skill.target[i]
				let targetP = new Text(targetType, targetType ).p
				mainDiv.appendChild(targetP)
				if(i === 0){
					let bar = new Text(' - ').p;
					mainDiv.appendChild(bar)
				}
			}
			slash = new Text(' / ').p;
			mainDiv.appendChild(slash)
		}
		let typeDiv = ''
		switch(typeCheck){
			case 'A' :
				typeDiv = new Text('Active').p
				break;
			case 'P' :
				typeDiv = new Text('Passive').p
				break;
										}
		mainDiv.appendChild(typeDiv)
		slash = new Text(' / ').p;
		mainDiv.appendChild(slash)
		const costData = skill.cost
		if(costData && Object.getOwnPropertyNames(costData).length != 0){
			const costType = ['hp','sp','mp']
			for( let i = 0 ; i < 3 ; i++){
				let appendCheck = 0;
				let innerCostText = costType[i].toUpperCase() + ' : '
				let perCost = costData['p' + costType[i].slice(0,1).toUpperCase() + costType[i].slice(1)]
				if(perCost){
					innerCostText += perCost + ' % '
					appendCheck = 1
				}
				let numberCost = costData[costType[i]]
				if(numberCost){
					if(perCost){
						innerCostText += ' + '
					}
					innerCostText += numberCost
					appendCheck = 1
				}
				if(appendCheck === 1){
					let costDiv = new Text(innerCostText, costType[i].toUpperCase()).p
					mainDiv.appendChild(costDiv)
					slash = new Text(' / ').p;
					mainDiv.appendChild(slash)
				}				
			}
		}
		const powerData = skill.power
		if(powerData){
			if(powerData.base.value != 0){
				const hitCountData = skill.hitCount
				let innerPowerText = powerData.base.value
				let powerDiv = new Text(innerPowerText,'power').p
				mainDiv.appendChild(powerDiv)
				let xDiv = new Text(' x ').p
				mainDiv.appendChild(xDiv)
				let hitCountDiv = new Text(hitCountData, 'hitCount').p
				mainDiv.appendChild(hitCountDiv)
				slash = new Text(' / ').p;
				mainDiv.appendChild(slash)
			}
			let powerTypeDiv = new Text(powerData.base.type,powerData.base.type).p
			mainDiv.appendChild(powerTypeDiv)
			slash = new Text(' / ').p;
			mainDiv.appendChild(slash)
		}

		const delayData = skill.delay
		if(delayData && Object.getOwnPropertyNames(delayData).length != 0){
			const delayName = ['first', 'last']
			let innerDelayText = '( '
			for( let i = 0 ; i < 2 ; i++){
				let value = delayData[delayName[i]]
				if(!value){
					value = 0
				}
				innerDelayText += value
				if( i === 0){
					innerDelayText += ' : '
				}
			}
			innerDelayText += ' ) '
			let delayDiv = new Text(innerDelayText).p
			mainDiv.appendChild(delayDiv)
			slash = new Text(' / ').p;
			mainDiv.appendChild(slash)
		}
		const invalidData = skill.invalid
		if(invalidData && invalidData != 'None'){
			let invalidDiv = new Text(invalidData,invalidData).p
			mainDiv.appendChild(invalidDiv)
			slash = new Text(' / ').p;
			mainDiv.appendChild(slash)
		}
		const addEffectData = skill.addEffect
		if(addEffectData && Object.getOwnPropertyNames(addEffectData).length != 0){
			const addEffectType = Object.getOwnPropertyNames(addEffectData)
			const typeLength = addEffectType.length
			for( let i = 0 ; i < typeLength ; i++){
				const effectData = addEffectData[addEffectType[i]] 
				const effectType = Object.getOwnPropertyNames(effectData)
				const effectLength = effectType.length
				for( let j = 0; j < effectLength; j++){
					const effectName = effectType[j]
					const suffix = Effect.prototype.checkEffectSuffix(effectName)
					let innerEffectText = effectName.slice(suffix.length) + ' '
					const effectValue = effectData[effectName].value
					if(suffix != 'Change'){
						switch(suffix){
							case 'Up' :
								innerEffectText += ' + ' + effectValue + '% '
								break;
							case 'Down' :
								innerEffectText += ' - ' + effectValue + '% '
								break;
							case 'Plus' :
								innerEffectText += ' + ' + effectValue
								break;
							case 'Minus' :
								innerEffectText += ' - ' + effectValue
								break;
							case 'Clear' :
								innerEffectText += ' = 0 '
								break;
							case 'Change' :
								innerEffectText += ' = ' + effectValue
								break;
												 }
						let effectDiv = new Text(innerEffectText , suffix).p
						mainDiv.appendChild(effectDiv)
						slash = new Text(' / ').p;
						mainDiv.appendChild(slash)}
				}
			}
		}
		const limitData = skill.limit
		if(limitData && limitData.length != 0){
			const limitLength  = limitData.length
			let innerLimitText = 'Limit : '
			for(let i = 0 ; i < limitLength ; i++){
				if(i != 0){
					innerLimitText += ', '
				}
				innerLimitText += limitData[i]
			}
			let limitDiv = new Text(innerLimitText).p
			mainDiv.appendChild(limitDiv)
			slash = new Text(' / ').p;
			mainDiv.appendChild(slash)
		}
		const expData = skill.exp
		if(expData && expData.length != 0){
			let expDiv = new Text(expData).p
			mainDiv.appendChild(expDiv)
		}
		return mainDiv
	}
		//disorder : { name : , value :  , turn : }		point : learnSkill	}
	createItemDiv(){
		const item = this.data
		const itemElementName = Object.getOwnPropertyNames(item)
		const optionName = ['atkPhy','atkMag','defPhy','defMag']
		const optionNameLength = optionName.length;
		let div = new CreateTag('div')
		div.className = 'ItemInfoText'
		let innerItemName = ''
		if(item.refair === 0){
			innerItemName = item.name + '(' + item.type + ')';
		}
		else{
			innerItemName = '+' + item.refair + ' ' + item.name + '(' + item.type + ')';
		}
		let nameP = new Text(innerItemName , 'ItemName').p
        if(dataItem[item.baseCode].src){
            let img = new CreateTag('img');
            img.src = dataItem[item.baseCode].src;
            div.appendChild(img);
        }
		let slash = new Text(' / ').p;
		div.appendChild(nameP)
		if(this.type2 != 'Equip'){
			let countP = new Text( 'x' + item.number , 'ItemCount').p
			div.appendChild(countP)
		}
		div.appendChild(slash)
		let checkCreate = {defPhy : 0, defMag : 0}
		const baseOption = item.spec.option
		const baseOptionName = Object.getOwnPropertyNames(baseOption)
		const itemOptionLength = baseOptionName.length
		for( let i  = 0 ; i < itemOptionLength; i ++){
			let checkName = ''
			if(baseOptionName[i].length != 6 && baseOptionName[i].indexOf("True") == -1){
				checkName = baseOptionName[i].slice(0,6)
			}
			else{
				checkName = baseOptionName[i]
			}
			let index = optionName.indexOf(checkName) 
			if(index != -1){
				let textType = optionName[index]
				let innerText = optionName[index].slice(0,1).toUpperCase() + optionName[index].slice(1,3) + ' : '
				let slash = new Text(' / ').p;
				if(index < 2){
					innerText += baseOption[optionName[index]]
				}
				else{
						let defPer = baseOption[optionName[index] + 'Per']
						if(!defPer){
							innerText += '0 + '  
						}
						else{
							innerText += defPer + ' + '
						}
						let defNum = baseOption[optionName[index] + 'Num']
						if(!defNum){
							innerText += '0'  
						}
						else{
							innerText += defNum
						}
						checkCreate[optionName[index]] += 1
					
				}
				if(!checkCreate[optionName[index]] || checkCreate[optionName[index]] == 1){
					let optionP = new Text(innerText , textType).p
				div.appendChild(optionP)
				div.appendChild(slash)
				}
			}			
		}
		if(itemElementName.indexOf('exp') != -1){
			let optionP = new Text(item.exp , 'ItemOption').p
			div.appendChild(optionP)
		}
		return div
	}
	createCharacterDiv(){
		const character = this.data
		let mainDiv = new CreateTag('div');
		mainDiv.className = 'CharacterSlot'
		let dataDiv = new CreateTag('div');
		const selected = character.selected 
		dataDiv.id = character.code;
		dataDiv.value = character.code
		let name = new CreateTag('a');
		name.innerText = character.name
		name.className = 'name'
		let level = new CreateTag('a');
		level.innerText = 'Lv. '+ character.level
		level.className = 'level'
		let tribe = new CreateTag('a');
		tribe.innerText=  dataTribe[character.tribe].name
		tribe.className = 'tribe'
		dataDiv.appendChild(name)
		dataDiv.appendChild(tribe)
		dataDiv.appendChild(level)
		dataDiv.addEventListener('click',function(){new CharacterDesk(this)	})
		mainDiv.appendChild(dataDiv)
		let subDiv = new CreateTag('div')
		let selecter = new CreateTag('div')
		selecter.className = 'SimpleSelecter'
		let checkBox = CreateViewHTML.prototype.createViewCheckBox(character.code + 'SimpleSelect','SimpleSelect',character.code,'SimpleSelect')
		let label = CreateViewHTML.prototype.createViewLabel(character.code + 'SimpleSelect','SimpleSelectParty')
		subDiv.appendChild(checkBox)
		label.appendChild(selecter)
		subDiv.appendChild(label)
		mainDiv.appendChild(subDiv)
		if(selected === 1){
			dataDiv.className = 'inParty';
			checkBox.checked = 'checked'
			selecter.innerText = 'inParty';
		}
		else if(selected === 0){
			dataDiv.className = 'outParty';
			selecter.innerText = 'outParty';
		}
		return mainDiv
	}
	createShopBuyDiv(){
		const item = this.data
		const itemElementName = Object.getOwnPropertyNames(item)
		const optionName = ['atkPhy','atkMag','defPhy','defMag']
		const optionNameLength = optionName.length;
		let div = new CreateTag('div')
		div.className = 'ItemInfoText'
		let innerItemName = item.name + '(' + item.type + ')'
		let nameP = new Text(innerItemName , 'ItemName').p
        if(dataItem[item.code].src){
            let img = new CreateTag('img');
            img.src = dataItem[item.baseCode].src;
            div.appendChild(img);
        }
		let slash = new Text(' / ').p;
		div.appendChild(nameP)
		div.appendChild(slash)
		let checkCreate = {defPhy : 0, defMag : 0}
		if(item.spec){
		const baseOption = item.spec.option
		if(baseOption){
		const baseOptionName = Object.getOwnPropertyNames(baseOption)
		const itemOptionLength = baseOptionName.length
		for( let i  = 0 ; i < itemOptionLength; i ++){
			let checkName = ''
			if(baseOptionName[i].length != 6 && baseOptionName[i].indexOf("True") == -1){
				checkName = baseOptionName[i].slice(0,6)
			}
			else{
				checkName = baseOptionName[i]
			}
			let index = optionName.indexOf(checkName) 
			if(index != -1){
				let textType = optionName[index]
				let innerText = optionName[index].slice(0,1).toUpperCase() + optionName[index].slice(1,3) + ' : '
				let slash = new Text(' / ').p;
				if(index < 2){
					innerText += baseOption[optionName[index]]
				}
				else{
						let defPer = baseOption[optionName[index] + 'Per']
						if(!defPer){
							innerText += '0 + '  
						}
						else{
							innerText += defPer + ' + '
						}
						let defNum = baseOption[optionName[index] + 'Num']
						if(!defNum){
							innerText += '0'  
						}
						else{
							innerText += defNum
						}
						checkCreate[optionName[index]] += 1
					
				}
				if(!checkCreate[optionName[index]] || checkCreate[optionName[index]] == 1){
					let optionP = new Text(innerText , textType).p
				div.appendChild(optionP)
				div.appendChild(slash)
				}
			}			
		}
		}
		}
		if(itemElementName.indexOf('exp') != -1){
		
			let optionP = new Text(item.exp , 'ItemOption').p
			div.appendChild(optionP)
		}
		return div
	}
}
class addEventListner{
	constructor(type){
	}
	addEvent(){
		this.addEventItemEquipRadio()
		this.addEventItemCaseRadio()
		this.addEventLearnSkillRadio()
		this.addEventRemoveButton()
		this.addEventEquipButton()
		this.addEventSkillLearnButton()
		this.addEventInventorySelecter()
		this.addEventStateUp()
		this.addEventStateResetButton()
		this.addEventStateApplyButton()
		this.addEventSelectPartyMember() 
		this.addEventFavoriteSkillCheckBox()
	}
	addEventSelectPartyMember(){
		let label = document.getElementsByClassName('SelectParty ViewLabel')
		const length = label.length
		for(let i = 0 ; i < length ; i++){
			label[i].addEventListener('click', function(){
				const id = document.getElementById('CharacterDesk').value
				let character = playerTeam.character[id]
				const type = this.innerText
				let changeDiv = document.getElementById(id)
				switch(type){
					case 'inParty' :
						character.selected = 1
						changeDiv.className = 'inParty'
						changeDiv.parentElement.lastChild.lastChild.firstChild.innerText = 'inParty';
						changeDiv.parentElement.lastChild.firstChild.checked = true
						break;
					case 'outParty' :
						character.selected = 0
						changeDiv.className = 'outParty'
						changeDiv.parentElement.lastChild.lastChild.firstChild.innerText = 'outParty'
						changeDiv.parentElement.lastChild.firstChild.checked = false
						break;
								 }
			
		})}
	}
	addEventSimpleSelectPartyMember(){
		let label = document.getElementsByClassName('SimpleSelectPartyLabel DataLabel')
		const length = label.length;
		for(let i = 0 ; i < length ; i++){
			label[i].addEventListener('click', function(){
				const id = this.parentElement.firstChild.value
				let character = playerTeam.character[id]
				const type = this.firstChild.innerText
				let desk = ''
				const deskId = document.getElementById('CharacterDesk').value
				switch(type){
					case 'inParty' :
						character.selected = 0
						document.getElementById(id).className = 'outParty'
						this.firstChild.innerText = 'outParty';
						desk = document.getElementById('outPartySelectParty')
						if(desk && deskId === id){
							desk.checked = true
						}
						break;
					case 'outParty' :
						character.selected = 1
						document.getElementById(id).className = 'inParty'
						this.firstChild.innerText = 'inParty';
						desk = document.getElementById('inPartySelectParty')
						if(desk && deskId === id){
							desk.checked = true
						}
						break;
								 }
			
		})}
	}
	addEventInventorySelecter(){
		let selecter = document.getElementsByClassName('InventoryType')
		const length = selecter.length
		for( let i = 0 ; i < length ; i ++){
			selecter[i].addEventListener('change',
														 function(){
				let type = document.getElementById('InventoryType').value
				let selecter = this
				let parent = this.parentNode.children[3]
				let inventory =  InventoryDataView.prototype.createItemData(type)
				parent.innerHTML  = inventory.innerHTML
				addEventListner.prototype.addEventItemEquipRadio()
				document.getElementById('InventoryTittle').value = selecter.selectedIndex
			})}
	}
	addEventStateApplyButton(){
		var applyButton = document.getElementsByClassName('ApplyButton')[0]
		applyButton.addEventListener('click',function(){
			var failCheck = 0
			var performerNumber = document.getElementById('CharacterDesk').value
			var performer = playerTeam.character[performerNumber]
			var bonusValue = performer.bonusState
			var state = performer.baseState
			var bonusSummary = 0
			for(var i = 0 ; i < 10 ; i++){
				var checkType = document.getElementById('StateOption' + nameState[i])
				var upValue = parseInt(checkType.getAttribute("value"))
				var addValue = parseInt(checkType.getAttribute("addValue"))
				if(state[nameState[i]] !=  upValue - addValue){
					failCheck += 1;
				}
				else if(addValue < 0){
					failCheck += 1;
				}
				else if(state[nameState[i]] > upValue){
					failCheck += 1;
				}
				bonusSummary  += addValue
			}
			if(bonusSummary < 0 || bonusSummary > bonusValue){
				failCheck += 1;
			}
			if(failCheck === 0){
				performer.bonusState -= bonusSummary
				for(var i = 0 ; i < 10 ; i++){
					var checkType = document.getElementById('StateOption' + nameState[i])
					var addValue = parseInt(checkType.getAttribute("addValue"))
					if(addValue != 0){
					performer.baseState[nameState[i]]  = state[nameState[i]] = parseInt(checkType.getAttribute("value"))						
					//performer.stateExp[nameState[i]] = Player.prototype.calculrateStateExp(performerNumber,nameState[i])
					}
				}
				new State(playerTeam.character[performerNumber])
				performer.origin.health = new Health('player',performer.origin.state)
				CharacterDesk.prototype.refreshStateView()	
				addEventListner.prototype.addEvent()
			}
		})
	}
	addEventStateResetButton(){
		var resetButton = document.getElementsByClassName('ResetButton')[0]
		resetButton.addEventListener('click',function(){
			CharacterDesk.prototype.refreshStateView()	
			addEventListner.prototype.addEvent()
		})
	}
	addEventEquipButton(){
		var equipButton = document.getElementsByClassName('EquipButton')[0]
		equipButton.addEventListener('click',
														 function(){
			var nowSelect = parseInt(document.getElementById('InventoryTypeSelecterEquipment').selectedIndex)
			var value = document.getElementById('CharacterDesk').value
				var target = document.getElementById('InventoryView').value
				new EquipItem(value,target)
				var parent =  document.getElementById('InventoryEquipment')
				var div = new InventoryDataView('Equipment',value)
				parent.innerHTML = div.innerHTML
			document.getElementById('InventoryTypeSelecterEquipment').selectedIndex = document.getElementById('InventoryTittle').value = nowSelect 
				var divE = CharacterDesk.prototype.createViewEquipment(value)
				var parentE = document.getElementById('EquipSelect')
				parentE.innerHTML = divE.innerHTML
				CharacterDesk.prototype.refreshStateView()
			addEventListner.prototype.addEvent()
			})
	}
	addEventSkillLearnButton(){
		let learnButton = document.getElementsByClassName('SkillLearn Button')[0]
		learnButton.addEventListener('click',
														 function(){
			const id = document.getElementById('CharacterDesk').value
			const learnSkillCode = document.getElementById('SkillLearnCode').value
			new LearnSkill(id,learnSkillCode)
			if(learnSkillCode.indexOf('P') != -1){
				new PassiveEffect(id,learnSkillCode,'first')
			}
			let playerSkillBoard = document.getElementById('PlayerSkillData')
			let newPlayerSkillBoard = CharacterDesk.prototype.createPlayerSkillData(id)
			playerSkillBoard.innerHTML = newPlayerSkillBoard.innerHTML
			let learnBoard = document.getElementById('LearnSkillData')
			let newLearnBoard = CharacterDesk.prototype.createLearnSkillData(id)
			learnBoard.innerHTML = newLearnBoard.innerHTML
			CharacterDesk.prototype.checkFavoriteSkill(id)
			CharacterDesk.prototype.refreshStateView()			
			addEventListner.prototype.addEvent()
			})
	}
	addEventRemoveButton(){
		var itemButton = document.getElementsByClassName('RemoveButton')[0]
		itemButton.addEventListener('click',
														 function(){
			var nowSelect = parseInt(document.getElementById('InventorySelecter').selectedIndex)
			var value = document.getElementById('CharacterDesk').value
				var performer = playerTeam.character[this.value]
				var target = document.getElementById('EquipSelect').value
				new EquipItem(value,'null',target)
				var parent = document.getElementById('EquipSelect')
				var div = CharacterDesk.prototype.createViewEquipment(value)
				parent.innerHTML = div.innerHTML
			document.getElementById('InventorySelecter').selectedIndex = document.getElementById('InventoryTittle').value = nowSelect 
			var parent =  document.getElementById('InventoryView')
				var div = CharacterDesk.prototype.createEquipmentInventory()
				parent.innerHTML = div.innerHTML

			CharacterDesk.prototype.refreshStateView()
			addEventListner.prototype.addEvent()
			})
	}
	addEventItemCaseRadio(){
		var itemCase = document.getElementsByClassName('ItemCaseRadio')
		var length = itemCase.length;
		for(var i = 0 ; i< length ; i++){
			itemCase[i].addEventListener('click',
													function(){
			document.getElementById('EquipSelect').value = this.value
		})
		}
	}
	addEventItemEquipRadio(){
		var radio = document.getElementsByClassName('ItemEquipRadio')
		var length = radio.length;
		for(var i = 0 ; i < length; i++){
			radio[i].addEventListener('click',
													function(){
			document.getElementById('InventoryView').value = this.id
			})
		}
	}
	addEventLearnSkillRadio(){
		let skillLearn = document.getElementsByClassName('SkillLearnRadio')
		const length = skillLearn.length;
		for(let i = 0 ; i< length ; i++){
			skillLearn[i].addEventListener('click',
													function(){
			document.getElementById('SkillLearnCode').value = this.value
		})
		}
	}
	addEventFavoriteSkillCheckBox(){
		let favoriteCheckBox = document.getElementsByClassName('SkillFavoriteCheckBox')
		const length = favoriteCheckBox.length
		for(let i = 0 ; i < length ; i++){
			favoriteCheckBox[i].addEventListener('click',
																					function(){
				const skillCode = this.value
				const id = document.getElementById('CharacterDesk').value
				let character = playerTeam.character[id]
				let skillFavorite = character.skillFavorite
				const checkType = skillFavorite.indexOf(skillCode)
				if(checkType === -1){
					character.skillFavorite.push(skillCode)
					character.skillFavorite.sort()
				}
				else{
					character.skillFavorite.splice(checkType,1)
					
				}
			})
		}
	}
	addEventStateUp(){
		for(var i = 0 ; i < 10 ; i ++){
			var setEventDiv = document.getElementById('StateOption' + nameState[i])
			setEventDiv.addEventListener('click',
																	 function(){
				var bonus = document.getElementById('BonusState')
				var bonusValue = parseInt(bonus.innerText)
				var performerNumber = document.getElementById('CharacterDesk').value
				var bonusValueMain = playerTeam.character[performerNumber].bonusState
				if(bonusValue > 0 && bonusValueMain > 0){
					bonusValue -= 1
					bonus.innerText = bonusValue;
					var set = this
					set.setAttribute("addValue",parseInt(set.getAttribute("addValue")) + 1)
					set.setAttribute("value",parseInt(set.getAttribute("value")) + 1)
					var number = nameState.indexOf(set.id.slice(11))
					var newSet = CharacterDesk.prototype.createViewState(number,performerNumber,'change')
					set.innerHTML = newSet.innerHTML
				}
			}
																	)
		}
	}
	addEventTabs(tabClassName){ 
		let menu = ''
		if(tabClassName){
			menu = document.getElementsByClassName(tabClassName)
		}
		else{
		menu = document.getElementsByClassName('MenuTabs')
		}
		const menuCount = menu.length
		for( let j = 0 ; j < menuCount; j++){
			let tab = menu[j]
			let children = tab.children
			const length = children.length
			for(let i = 0 ; i < length ; i ++){
				let connectTab = children[i].dataset.conecttab
				switch(connectTab){
					case 'CharacterView' :
						this.addCharacterListRefresh(children[i])
						break;
					case 'InventoryView' :
						this.addInventoryListRefresh(children[i])
						break;
				}
				children[i].addEventListener('click',
																		 function(){
					let selectTab = this
					let parent = this.parentNode
					let activeTab = parent.getElementsByClassName('activeTab')[0]
					let aConectTab 
					if(activeTab){
						aConectTab = activeTab.dataset.conecttab
					}					
					let sConectTab = selectTab.dataset.conecttab
					if(aConectTab == sConectTab){
						return
					}
					if(activeTab){
						activeTab.className = ''
						document.getElementById(aConectTab).style.display = 'none'
					}
					switch(aConectTab){
					case 'CharacterView' :
							let list = document.getElementById('CharacterList')
							list.innerHTML = ''
							let desk = document.getElementById('CharacterDesk')
							desk.innerHTML = ''
							break;
					case 'InventoryView' :
						document.getElementById(aConectTab ).innerHTML = ''
						break;
				}					
					selectTab.className = 'activeTab'
					document.getElementById(sConectTab).style.display = 'block'
				}
																		)
		}
		}
	}
	addInventoryListRefresh(tab){
		tab.addEventListener('click', function(){
			let list = document.getElementById('InventoryView')
			list.innerHTML = ''
			let newList = new InventoryDataView('List')
			addEventListner.prototype.addEventInventorySelecter();
			//list.appendChild(newList)
		})
	}
	addCharacterListRefresh(tab){
		tab.addEventListener('click', function(){
			let list = document.getElementById('CharacterList')
			list.innerHTML = ''
			let desk = document.getElementById('CharacterDesk')
			desk.innerHTML = ''
			const character = playerTeam.character
			const names = Object.getOwnPropertyNames(character)
			const length = names.length
			for( let i = 0 ; i < length ; i ++){
				let div = new CreateDataView('Character',0,character[names[i]]).div
				list.appendChild(div)
			}
			if(length === 0){
				list.innerText = 'Not Character'
			}
			else{
				addEventListner.prototype.addEventSimpleSelectPartyMember()
			}
		})
	}
}
class Text{
	constructor(text,type){
		var p = document.createElement('a');
		p.innerText = text + ' '
		this.p = p
		this.checkStyle(type)
		this.setStyle()
	}
	setStyle(){
		var style = Object.getOwnPropertyNames(this.style)
		var length = style.length;
		for(var i =0 ; i < length; i++){
			this.p.style[style[i]] = this.style[style[i]]
		}
		
	}
	checkStyle(type){
		this.style = {}
		this.checkStyleDeco(type)
		this.style.color = this.checkStyleColor(type)
	}
	checkStyleDeco(type){
		switch(type){
			case 'Name' :
			case 'SkillName' :
				this.style.textDecoration = 'underline'
				break;
			case 'ItemCount' :
				this.style.lineHeight = 1.8;
				this.style.fontSize = '0.8em';
				break;
							 }
	}
	checkStyleColor(type){
		let color = ''
		switch(type){
			case 'enemy' :
			case 'Down' :
			case 'Minus' :
			case 'power' :
			case 'HP' :
			case 'atkPhy' :
			case 'HpDamage' :
				color = 'red'
				break;
			case 'Change' :
			case 'Clear' :
			case 'individual' :
			case 'defPhy' :
			case 'HpRecovery' :
				color = 'green'
				break;
			case 'hitCount' :
			case 'multi' :
			case 'atkMag' :
			case 'MpDamage' :
				color = 'blueviolet'
				break;
			case 'friend' :
			case 'MP' :
			case 'MpRecovery' :
				color = 'blue'
				break;
			case 'SpDamage' :
				color = 'yellowgreen'
				break;
			case 'Plus' :
			case 'Up' :
			case 'all' :
			case 'SP' :
			case 'SpRecovery' :
			case 'paralyzed':
				color = 'yellow'
				break;
			case 'self' :
			case 'Delay' :
				color = 'limegreen'
				break;
			case 'Death' :
				color = 'darkred'
				break;
			case 'Support' :
				color = 'slategrey'
				break;
			case 'defMag' :
				color = 'aqua';
				break;
			case 'ItemOption' :
				color = 'gray'
				break;
			default :
			case 'ItemName' :
			case 'ItemCount' :
				color = 'honeydew'
				break;
							 }
		return color
	}
}
class Log{
	constructor(array){
		var length = array.length
		var mainDiv = document.createElement('div')
		mainDiv.className ="Log"
		for( var i = 0 ; i < length ; i++){
			var type = (!array[i].type) ? '' : array[i].type
			var text = new Text(array[i].text, type).p;
			mainDiv.appendChild(text)
		}
		this.divLog = mainDiv
	}
}
class AddLog{
	constructor(textArray,type,parent){
		if(!parent){
		this.selectLogView(type)
			this.clearLogView()
		}
		else{
			this.logView = parent
		}
		//var text = this.createLogText(textArray);
		var log = new Log(textArray).divLog
		var children = this.logView.children
		if(!parent && type != 'Turn'){
		this.logView.insertBefore(log,children[0])
		}
		else{
			this.logView.appendChild(log)
		}
		this.log = log
	}
	selectLogView(type){
		switch(type){
			case 'Battle':
				this.logView = document.getElementById('BattleLogView')
				break;
			case 'Turn' :
				this.logView = document.getElementsByClassName('Log')[0]
				break;
			case 'Map' :
				this.logView = document.getElementById('MapLogView')
				break;
							 }
	}
	clearLogView(type){
		if(type){
			this.selectLogView(type)
			this.logView.innerHTML = ''
		}
		else{
		 var checkValue = this.logView.children.length
		for(; checkValue > 30;){
			this.logView.children[checkValue - 1].remove()
			checkValue = this.logView.children.length
		}
		}
	}
}

class Shop{
	constructor(type){
		this.standBoard = document.getElementsByClassName("Stand")[0];
		this.standBoard.innerHTML = "";
		this.createSellData();
	}
	createSellData(){
		const itemList = Object.getOwnPropertyNames(dataItem);
		const length = itemList.length;
		for(let i =0 ; i < length ; i++){
			let div = new CreateTag("div");
			let checkBox = CreateViewHTML.prototype.createViewCheckBox(itemList[i],"ItemData",itemList[i],"Item");

			div.appendChild(checkBox);
			div.className="ItemData"
			let label = new CreateTag("label");
			label.setAttribute("for", checkBox.id);
			label.className = "ItemData DataLabel"
			let checkDiv = new CreateTag("div");
			checkDiv.className = "ItemSelecter";
			label.appendChild(checkDiv)
			let funds = dataItem[itemList[i]].funds;
			if(!funds){
				funds = 0
			}
			let fundiv = new CreateTag("div")
			let fundData = new Text("$" + funds).p;
			fundiv.appendChild(fundData);
			label.appendChild(fundiv);
			let numberBox = document.createElement("input");
			numberBox.setAttribute("type", "number");
			numberBox.id = "Count" + itemList[i];
			numberBox.style.width = "5%";
			label.appendChild(numberBox);
			let inputLabel = new CreateDataView('ShopBuy',0,0,itemList[i]).div
			label.appendChild(inputLabel)
			div.appendChild(label);
			this.standBoard.appendChild(div);
		}
	}
}

class SkillButtonView{
	constructor(number){
		this.performer = dataActiveCharacter[number]
		this.performer.active = 1;
		this.skill = playerGroup[number].skill
		this.favorite = playerGroup[number].skillFavorite
		this.favoriteLength = this.favorite.length
		let board = this.board = document.getElementById('SkillBorder')
		this.clearBoard()
		//favorite , action , item , far away
		//action sort combat , support
		this.createTabData()
		this.createTabData('Favorite')
	}
	clearBoard(){
		this.board.innerHTML = ''
		this.board.value = this.performer.code
		this.board.style.visibility  =  'visible';
		this.board.appendChild(this.createPerformerData())
		this.board.appendChild(this.createSelectTabs())
		addEventListner.prototype.addEventTabs('MenuTabs Vertical SkillBoard')
	}
	createPerformerData(){
		let div = new CreateTag('div')
		let base = new CreateTag('a')
		base.innerText = 'Action Selected By '
		let name = new CreateTag('a')
		name.innerText = this.performer.name
		div.appendChild(base)
		div.appendChild(name)
		return div
	}
	createSelectTabs(type){
		let board = new CreateTag('div')
		board.className = 'SkillSelecter'
		let tabs = new CreateTag('ul')
		tabs.className = 'MenuTabs Vertical SkillBoard'
		let containers = new CreateTag('div')
		containers.className = 'MenuContainer Vertical SkillBoard'
		const connectTab = ['Favorite','Action','Item','Far Away']
		for( let i = 0 ; i < 4 ; i ++){
			let tab = new CreateTag('li')
			let tabA = new CreateTag('a')
			tabA.innerText = connectTab[i]
			tab.id = connectTab[i] + 'ActionTab'
			tab.setAttribute('data-conecttab',connectTab[i] + 'Menu')
			tab.appendChild(tabA)
			tabs.appendChild(tab)
			let container = new CreateTag('div')
			container.id = connectTab[i] + 'Menu'
			container.className = 'TabDataView SkillBoard'
			container.innerText = connectTab[i]
			containers.appendChild(container)
			if(i === 1 && this.favoriteLength === 0){
				tab.className = 'activeTab'
				container.style.display = 'block'
			}
			else if( i === 0 && this.favoriteLength !== 0){
				tab.className = 'activeTab'
				container.style.display = 'block'
			}
		}
		board.appendChild(tabs)
		board.appendChild(containers)
		return board
	}
	createTabData(type){
		if(!type){
			type = 'Action'
		}
		let container = document.getElementById(type + 'Menu')
		const skill = this.createSkillData(type.toLowerCase())//Object.getOwnPropertyNames(dataSkill)//this.skill.active
		const length  = skill.length
		for(let i = 0 ; i < length ; i ++){
			let div = this.createSkillButton(skill[i])
			if(div){
				container.appendChild(div)
			}
		}
	}
	createSkillData(type){
		let skill = this.skill
		if(type != 'favorite'){
			skill = this.skill//Object.getOwnPropertyNames(dataSkill)
		}//this.skill.active
		else{
			skill = this.favorite
		}
		const length  = skill.length
		let data = []
		for(let i = 0 ; i < length; i++){
			data.push(skill[i])
		}
		return data
	}
	createSkillButton(skillCode){
		if(skillCode.indexOf('P') != -1){
			return 0
		}
		const skillData = dataSkill[skillCode]
		const costData = new ActionCost(this.performer,skillData,'View').payCost
		let skillSlot = new CreateTag('div');
		skillSlot.className = 'SkillSlot'
		let skillButton = new CreateTag('div');
		skillButton.className = 'SkillButton'
		let innerText = skillData.name + '('
		const costName = Object.getOwnPropertyNames(costData)
		const length = costName.length;
		if(length != 0){
			for(let i = 0 ; i < length ; i++){
				innerText += ' ' + costName[i] + ' : ' + Math.round(costData[costName[i]]) + ' '
			}
			innerText += ')'
		}
		else{
			innerText += ' None )'
		}
		skillButton.innerText = innerText
		skillButton.value = skillData.code
		skillButton.addEventListener('click',
																 function(){
			const performer = this.parentNode.parentNode.parentNode.parentNode.parentNode.value
			document.getElementById('Battle' + performer + 'Border').style.backgroundColor = 'rgb(66, 104, 66)'
			/*this.parentNode.parentNode*/document.getElementById('SkillBorder').style.visibility = 'collapse';
			//this.parentNode.parentNode.innerHTML = ''
			dataActiveCharacter[performer].active = 0;		
			if(dataActiveCharacter[performer].skillFavorite.indexOf(this.value) === -1){
				if(dataActiveCharacter[performer].skillFavorite.length > 10){
				 let del = dataActiveCharacter[performer].skillFavorite.shift()
				}
				dataActiveCharacter[performer].skillFavorite.push(this.value)
			}
			new activeAction(this.value,0,performer,'first')
			new BattleData
		})
		skillButton.addEventListener('mouseover',
																 function(){
			const performer = this.parentNode.parentNode.parentNode.parentNode.parentNode.value
			const check = new ActionCost(dataActiveCharacter[performer],dataSkill[this.value],'View').fail
			if(check !== 0){
				this.style.backgroundColor = 'red'
			}
			else{
				this.style.backgroundColor = 'black'
			}
		} )
		skillSlot.appendChild(skillButton)
		return skillSlot
	}	
}