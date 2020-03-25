let openCheck = {
	Equip: 0,
	GetSkill: 0,
	LearnSKill: 0
}
class CreateTag {
	constructor(type) {
		let element = document.createElement(type)
		return element
	}
}
class CharacterDesk {
	constructor(performerNumber) {
		const idValue = performerNumber.value
		const id = idValue
		this.changeCharacterList('none')
		this.id = id
		if (!playerTeam.character[id]) {
			return
		}
		else {
			this.performer = playerTeam.character[id]
		}
		let desk = new DOMSearch('id', 'CharacterDesk')
		desk.innerHTML = ''
		desk.value = this.id
		let mainBoard = this.createMainBoard()
		let close = this.createCloseButton()
		let protectAndPositionBoard = this.createPAPBoard()
		let parttern = this.createPartternView(this.id = id)
		let itemBoard = this.createItemBoard()
		let skillBoard = this.createSkillBoard()
		desk.appendChild(close)
		let buttonGroup = this.createCharacterAction();
		desk.appendChild(buttonGroup)

		desk.appendChild(mainBoard)

		desk.appendChild(protectAndPositionBoard)
		desk.appendChild(parttern)
		desk.appendChild(itemBoard)
		desk.appendChild(skillBoard)
		this.checkFavoriteSkill()
		addEventListner.prototype.addEvent()
		if (this.useItems.div) {
			addEventListner.prototype.addEventUseItemButton();
		}
	}
	createMainBoard() {
		let board = new CreateTag('div');
		board.className = 'CharacterDeskMainBoard'
		let character = this.createCharacteristicData()
		let stateView = this.createStateView()
		board.appendChild(character)
		board.appendChild(stateView)
		return board
	}
	createCharacterAction() {
		let div = new CreateTag("div")
		div.className = "CharacterButtonGroup"
		let group = new CreateTag("div")
		group.style.width = "30%"
		let fire = new CreateTag("div")
		fire.className = 'FireButton Button'
		fire.innerText = 'Fire'
		let save = new CreateTag("div")
		save.className = 'SaveButton Button'
		save.innerText = 'Save'
		group.appendChild(fire)
		group.appendChild(save)
		div.appendChild(group);
		this.useItems = new CharacterUseItem()
		if (this.useItems.div) {
			div.appendChild(this.useItems.div);
		}
		return div;
	}
	createItemBoard() {
		let board = new CreateTag('div')
		board.className = 'CharacterDeskItemBoard'
		let equipSlot = this.createViewEquipment()

		board.appendChild(equipSlot)

		return board
	}
	createSkillBoard() {
		let board = new CreateTag('div')
		board.className = 'CharacterDeskSkillBoard'
		let playerSkill = this.createPlayerSkillData()
		let learnSkill = this.createLearnSkillData()
		board.appendChild(playerSkill)
		board.appendChild(learnSkill)
		return board
	}
	createPlayerSkillData(number) {
		let skillData = ''
		if (!number) {
			skillData = this.performer.skill
		}
		else {
			skillData = playerTeam.character[number].skill
		}
		let div = new CreateTag('div')
		div.id = 'PlayerSkillData'
		let tittle = CreateViewHTML.prototype.createPTag('PlayerSkill(ClickOpen)', 'SkillTittle')
		let label = CreateViewHTML.prototype.createViewLabel("PlayerSkillDataCheck", "CharacterData")
		let checkBox = CreateViewHTML.prototype.createViewCheckBox("PlayerSkillDataCheck", "SimpleSelect", 0, "DataLabel", 0, openCheck.GetSkill)
		checkBox.addEventListener("click", function () {
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

		for (let i = 0; i < length; i++) {
			const skill = dataSkill[skillCode[i]]
			let addDiv = new CreateTag('div')
			let disabled = (skill.code.indexOf('P') != -1) ? true : false;
			let checkBox = CreateViewHTML.prototype.createViewCheckBox(skillCode[i] + 'Favorite', 'SkillFavorite', skillCode[i], 'SkillFavorite', disabled)
			let selecter = new CreateTag('div')
			let label = CreateViewHTML.prototype.createViewLabel(skillCode[i] + 'Favorite', 'Skill')
			selecter.className = 'SkillFavoriteSelecter'
			let skillDiv = new CreateDataView('Skill', 0, skill).div
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
	checkFavoriteSkill(number) {
		let favoriteData = ''
		if (!number) {
			favoriteData = this.performer.skillFavorite
		}
		else {
			favoriteData = playerTeam.character[number].skillFavorite
		}
		let checkBox = new DOMSearch('class', 'SkillFavoriteCheckBox')
		const length = checkBox.length
		for (let i = 0; i < length; i++) {
			if (favoriteData.indexOf(checkBox[i].value) != -1) {
				checkBox[i].checked = 'checked'
			}
		}
	}
	createLearnSkillData(number) {
		let skillData = ''
		let skillLearnArray = ''
		let skillPoint = ''
		if (!number) {
			skillData = dataSkill//checkSkillLearning(this.performer)
			skillLearnArray = this.performer.skill
			skillPoint = this.performer.skillPoint
			number = this.performer.code
		}
		else {
			skillData = dataSkill//checkSkillLearning(playerTeam.character[number])
			skillLearnArray = playerTeam.character[number].skill
			skillPoint = playerTeam.character[number].skillPoint
		}
		let div = new CreateTag('div')
		div.id = 'LearnSkillData'
		let title = CreateViewHTML.prototype.createPTag('Can Learn Skill(ClickOpen	)', 'SkillTittle')
		let label = CreateViewHTML.prototype.createViewLabel("SkillLearnDataCheck", "CharacterData")
		let checkBox = CreateViewHTML.prototype.createViewCheckBox("SkillLearnDataCheck", "SimpleSelect", 0, "DataLabel", 0, openCheck.LearnSKill)
		checkBox.addEventListener("click", function () {
			openCheck.LearnSKill = this.checked
		})
		label.appendChild(title)
		div.appendChild(label)
		div.appendChild(checkBox)
		let dataTap = new CreateTag("div")
		dataTap.className = "CharacterData"
		let skillPointDiv = CreateViewHTML.prototype.createPTag('Skill Point : ' + skillPoint, 'SkillTittle')
		div.appendChild(skillPointDiv)
		let learnDiv = new CreateTag('div')
		learnDiv.className = 'SkillData'
		learnDiv.id = 'SkillLearnCode'
		learnDiv.value = null
		const skillCode = Object.getOwnPropertyNames(skillData)
		const length = skillCode.length
		for (let i = 0; i < length; i++) {
			const canLearnCheck = new CheckSkill(number, skillCode[i]).check
			if (skillLearnArray.indexOf(skillCode[i]) == -1 && canLearnCheck === 'success') {
				const skill = dataSkill[skillCode[i]]
				let addDiv = new CreateTag('div')
				let radio = CreateViewHTML.prototype.createViewRadio(skillCode[i] + 'Learn', 'SkillLearn', skillCode[i], 'SkillLearn')
				let skillDiv = new CreateDataView('Skill', 'Learn', skill).div
				let selecter = new CreateTag('div')
				let label = CreateViewHTML.prototype.createViewLabel(skillCode[i] + 'Learn', 'Skill')
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
	createSkillLearnButton() {
		let button = CreateViewHTML.prototype.createViewButton(0, 'SkillLearn', 0, 'Learn Skill');
		return button
	}
	createPAPBoard() {
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
		let auto = this.createActionType()
		board.appendChild(auto)
		return board
	}
	createSelectedButton(performer) {
		let div = new CreateTag('div');
		div.className = 'SelectPartyBoard'
		let pFirst = new CreateTag('p');
		pFirst.innerText = 'PartyCheck'
		div.appendChild(pFirst)
		let partySelect = new CreateTag('div');
		partySelect.className = 'SelectParty ViewSelecter'
		const name = ['inParty', 'outParty']
		for (let i = 0; i < 2; i++) {
			let input = CreateViewHTML.prototype.createViewRadio(name[i] + 'SelectParty', 'select', name[i], 'SelectParty View')//new CreateTag("input")
			if (performer.selected != i) {
				input.checked = true
			}
			let label = new CreateTag("label")
			label.setAttribute("for", name[i] + "SelectParty")
			label.className = "SelectParty ViewLabel " + name[i] + "SelectParty"
			label.innerText = name[i]
			partySelect.appendChild(input)
			partySelect.appendChild(label)
		}
		let span = new CreateTag("span")
		span.className = 'SelectParty ViewSelect'
		partySelect.appendChild(span)
		div.appendChild(partySelect)
		return div
	}
	createCharacteristicData(number) {
		if (!number && number != 0) {
			var performer = this.performer
			var name = this.performer.name
			var level = this.performer.level
			var job = dataJob[this.performer.job].name
			var tribe = dataTribe[this.performer.tribe].name
			var levelExp = LevelUp.prototype.calculrateLevelExp(level) - this.performer.levelExp
		}
		else {
			var performer = playerTeam.character[number];
			var name = performer.name
			var level = performer.level
			var job = dataJob[performer.job].name
			var tribe = dataTribe[performer.tribe].name
			var levelExp = LevelUp.prototype.calculrateLevelExp(level) - performer.levelExp
		}
		let characteristDiv = new CreateTag('div');
		characteristDiv.className = 'CharacteristicView'
		characteristDiv.id = 'CharacteristicView'
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

		let width = levelExp / levelUpExp * 100
		let tittle = levelExp + '/' + levelUpExp
		let levelBar = CreateViewHTML.prototype.createViewBar(width, tittle)
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
		let selectDiv = this.createSelectedButton(performer)
		characteristDiv.appendChild(nameDiv)
		characteristDiv.appendChild(levelDiv)
		characteristDiv.appendChild(jobDiv)
		characteristDiv.appendChild(tribeDiv)
		characteristDiv.appendChild(selectDiv)
		return characteristDiv
	}
	createHealthData(number) {
		let performer = ''
		if (!number) {
			performer = this.performer
		}
		else {
			performer = playerTeam.character[number]
		}
		const health = performer.origin.health
		const battleHealth = performer.battle.health
		const healthName = Object.getOwnPropertyNames(health)
		let divHealth = document.createElement('div')
		divHealth.className = 'HealthOption'
		for (let i = 0; i < 3; i++) {
			let div = new CreateTag('div')
			let healthNameP = new CreateTag('p')
			healthNameP.innerText = healthName[3 + i].toUpperCase()
			let healthValueP = new CreateTag('p')
			let innerText = health[healthName[i]]
			let healthGap = battleHealth[healthName[i]] - health[healthName[i]]
			if (healthGap > 0) {
				innerText += ' + ' + healthGap
			}
			else if (healthGap < 0) {
				innerText += ' - ' + Math.abs(healthGap)
			}
			healthValueP.innerText = innerText
			healthValueP.style.color = Text.prototype.checkStyleColor(healthName[3 + i].toUpperCase())
			div.className = 'HealthOptionView'
			div.appendChild(healthNameP)
			div.appendChild(healthValueP)
			divHealth.appendChild(div)
		}
		return divHealth
	}
	changeCharacterList(type) {
		var level = new DOMSearch('class', 'level')
		var tribe = new DOMSearch('class', 'tribe')
		var length = level.length
		for (var i = 0; i < length; i++) {
			level[i].style.display = type
			tribe[i].style.display = type
		}
	}
	refreshUseItemList() {
		let useItems = new DOMSearch('id', 'CharacterUseItem');
		let div = new CharacterUseItem()
		if (div.div) {
			useItems.innerHTML = div.div.innerHTML
			addEventListner.prototype.addEventUseItemButton();
		}
		else {
			useItems.remove();
		}

	}
	refreshCharacteristicData() {
		let Characteristic = new DOMSearch('id', 'CharacteristicView')
		let number = new DOMSearch('id', 'CharacterDesk').value
		let div = CharacterDesk.prototype.createCharacteristicData(number)
		Characteristic.innerHTML = div.innerHTML
	}
	refreshStateView() {
		let state = new DOMSearch('id', 'StateView')
		let number = new DOMSearch('id', 'CharacterDesk').value
		let div = CharacterDesk.prototype.createStateView(number)
		state.innerHTML = div.innerHTML
	}
	createStateView(number) {
		var stateView = document.createElement('div');
		var stateLength = nameState.length
		stateView.className = 'StateView'
		stateView.id = 'StateView'
		let health = this.createHealthData(number)
		stateView.appendChild(health)
		for (var i = 0; i < stateLength / 2; i++) {
			var div = document.createElement('div');
			div.className = "StateOption"
			var firstStateDiv = document.createElement('div');
			firstStateDiv.className = 'StateOptionText'
			var firstStateText = document.createElement('div');
			firstStateText.className = 'TEXT'
			firstStateText.innerText = nameState[i * 2];
			firstStateDiv.appendChild(firstStateText)
			div.appendChild(firstStateDiv)
			var firstState = this.createViewState(i * 2, number);
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
	createBonusState(number) {
		if (!number && number != 0) {
			var performer = this.performer
		}
		else {
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
	createStateApplyButton() {
		var div = document.createElement('div');
		div.className = 'ApplyButton Button'
		div.innerText = 'Apply'
		return div
	}
	createStateResetButton() {
		var div = document.createElement('div');
		div.className = 'ResetButton Button'
		div.innerText = 'Reset'
		return div
	}
	createCloseButton() {
		var div = document.createElement('div');
		div.className = 'CloseCircle'
		div.addEventListener('click',
			function () {
				this.parentNode.innerHTML = ''
				CharacterDesk.prototype.changeCharacterList('block')
			})
		return div
	}
	createPositionMenu() {
		let div = document.createElement('div');
		div.className = 'PositionBoard'
		let pFirst = document.createElement('p');
		pFirst.innerText = 'Position Select'
		div.appendChild(pFirst)
		let positionSelect = document.createElement('div');
		positionSelect.className = 'Position ViewSelecter'
		const name = ['Front', 'Back']
		for (var i = 0; i < 2; i++) {
			let input = CreateViewHTML.prototype.createViewRadio(name[i] + 'Position', 'position', name[i], 'Position View')
			if (this.performer.coordinates == name[i]) {
				input.checked = true
			}
			let label = document.createElement("label")
			label.setAttribute("for", name[i] + "Position")
			label.className = "Position ViewLabel " + name[i] + "Position"
			label.innerText = name[i]
			positionSelect.appendChild(input)
			positionSelect.appendChild(label)
		}
		let span = document.createElement("span")
		span.className = 'Position ViewSelect'
		positionSelect.appendChild(span)
		div.appendChild(positionSelect)
		return div
	}
	createActionType() {
		var div = new CreateTag("div")
		div.className = 'Action'
		var txt = new CreateTag("p")
		txt.innerText = 'Action Type'
		div.appendChild(txt)
		var select = document.createElement('select')
		select.id = 'ActionSelect'
		var optionValue = ['Select', 'PartternAuto', 'RandomAuto']
		for (var i = 0; i < 3; i++) {
			var option = document.createElement('option')
			option.value = i
			option.innerText = optionValue[i]
			select.appendChild(option)
		}
		select.selectedIndex = this.performer.autoType
		div.appendChild(select)
		let button = CreateViewHTML.prototype.createViewButton(0, 'ChangeProtectPosition', this.id, 'Change')
		button.addEventListener('click',
			function () {
				let performer = playerTeam.character[this.value]
				performer.autoType = new DOMSearch('id', 'ActionSelect').value

			})
		div.appendChild(button)
		return div;
	}
	createProtectMenu() {
		var div = document.createElement('div');
		div.className = 'Protect'
		var pFirst = document.createElement('p');
		pFirst.innerText = 'Protect Type'
		div.appendChild(pFirst)
		var select = document.createElement('select')
		select.id = 'ProtectSelect'
		var optionValue = ['Always', 'HP Percent', 'Random', 'None']
		for (var i = 0; i < 4; i++) {
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
	createProtectAndPositionChangeButton() {
		let button = CreateViewHTML.prototype.createViewButton(0, 'ChangeProtectPosition', this.id, 'Change')
		button.addEventListener('click',
			function () {
				let performer = playerTeam.character[this.value]
				performer.protectType[0] = new DOMSearch('id', 'ProtectSelect').value
				performer.protectType[1] = new DOMSearch('id', 'ProtectNumber').value
				performer.coordinates = (new DOMSearch('name', "position")[0].checked) ? 'Front' : 'Back';
			}
		)
		return button
	}
	createViewEquipment(number) {
		if (!number) {
			var equip = this.performer.equip
			var id = this.id
		}
		else {
			var performer = playerTeam.character[number]
			var equip = performer.equip
			var id = number
		}
		var div = document.createElement('div');
		div.id = 'EquipSelect'
		var tittle = document.createElement('p');
		let label = CreateViewHTML.prototype.createViewLabel("EquipDataCheck", "CharacterData")
		let checkBox = CreateViewHTML.prototype.createViewCheckBox("EquipDataCheck", "SimpleSelect", 0, "DataLabel", 0, openCheck.Equip)
		checkBox.addEventListener("click", function () {
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
		for (var i = 0, typeLength = type.length; i < typeLength; i++) {
			if (!number) {
				var slotDiv = this.createEquipmentSlot(type[i])
			}
			else {
				var slotDiv = this.createEquipmentSlot(type[i], performer)
			}
			equipSlot.appendChild(slotDiv)
		}
		var button = document.createElement('button');
		button.className = 'ItemButton RemoveButton Button'
		button.innerText = 'Remove'
		button.value = id
		equipSlot.appendChild(button)
		dataTap.appendChild(equipSlot)
		let inventorySlot = new InventoryDataView('Equipment', this.id)
		dataTap.appendChild(inventorySlot)
		div.appendChild(dataTap)
		return div
	}
	createPartternView(number) {
		const performer = playerTeam.character[number]
		const pData = performer.parttern
		const intwis = (performer.origin.state.int + performer.origin.state.wis) / 121
		var div = new CreateTag("div")
		div.id = 'PartternSelect'
		var tittle = document.createElement('p');
		let label = CreateViewHTML.prototype.createViewLabel("PartternDataCheck", "CharacterData")
		let checkBox = CreateViewHTML.prototype.createViewCheckBox("PartternDataCheck", "SimpleSelect", 0, "DataLabel", 0, openCheck.Equip)
		checkBox.addEventListener("click", function () {
			openCheck.Parttern = this.checked
		})
		tittle.className = "PartternTittle"
		tittle.innerText = 'Parttern(ClickOpen)'
		label.appendChild(tittle)
		div.appendChild(label)
		div.appendChild(checkBox)
		let dataTap = new CreateTag("div")
		dataTap.className = "CharacterData"
		let partternTab = new CreateTag("div");
		partternTab.className = "PartternTab"
		for (let i = 0; i < intwis + 1; i++) {
			let partDiv = new CreateTag('div');
			partDiv.setAttribute("partData", i);
			partDiv.id = "Parttern" + i;
			partDiv.draggable = true;
			addEventListner.prototype.addPartternDragAndDrop(partDiv);
			partDiv.style.display = "flex"
			let numberDiv = new CreateTag('div');
			let numberText = new Text(i + 1).p;
			numberDiv.style.width = "30px"
			let judge = new CreateDataView('Parttern', i).div
			let jValue = document.createElement("input")
			jValue.setAttribute("type", "number")
			jValue.setAttribute("min", 0)
			jValue.className = "PartternSkillValue"
			let skill = new CreateDataView('CharacterSkill', 0, 0, number).div
			numberDiv.appendChild(numberText);
			partDiv.appendChild(numberDiv);
			partDiv.appendChild(judge);
			partDiv.appendChild(jValue);
			partDiv.appendChild(skill);
			partternTab.appendChild(partDiv);
			if (i < pData.length) {
				judge.value = pData[i][0];
				jValue.value = pData[i][1];
				skill.value = pData[i][2];
			}
		}
		dataTap.appendChild(partternTab);
		div.appendChild(dataTap);

		let button = CreateViewHTML.prototype.createViewButton(0, 'Parttern Apply', this.id, 'Apply')
		button.addEventListener('click',
			function () {
				new PartternInput(this.value);

			})
		button.style.width = "250px"
		dataTap.appendChild(button);
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
		for (var i = 0; i < equipLength; i++) {
			var nowItem = equip[equipSlot[i]].spec
			if (nowItem) {
				var nowEquipOption = Object.getOwnPropertyNames(nowItem)
				if (nowEquipOption.indexOf('option') != -1) {
					var option = Object.getOwnPropertyNames(nowItem.option)
					for (var j = 0; j < targetNameOptionLength; j++) {
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
	createEquipmentSummaryOption(number) {
		var equipOption = this.summaryEquipSpecView(number)
		var div = document.createElement('div');
		div.className = "EquipmentOption"
		var optionName = Object.getOwnPropertyNames(equipOption)
		var length = optionName.length
		for (var i = 0; i < length; i++) {
			var innerDiv = document.createElement('div');
			innerDiv.className = optionName[i]
			var name = document.createElement('p');
			name.className = 'OptionName'
			name.innerText = optionName[i]
			var value = document.createElement('p');
			value.className = "OptionValue"
			switch (optionName[i]) {
				case 'Atk':
				case 'Matk':
					value.innerText = equipOption[optionName[i]]
					break;
				case 'Def':
				case 'Mdef':
					value.innerText = equipOption[optionName[i]].Per + ' + ' + equipOption[optionName[i]].Num
					break;
			}
			innerDiv.appendChild(name)
			innerDiv.appendChild(value)
			div.appendChild(innerDiv)
		}
		return div
	}
	createEquipmentSlot(type, performer) {
		if (!performer) {
			var equip = this.performer.equip
		}
		else {
			var equip = performer.equip
		}
		var div = document.createElement('div');
		div.className = 'ItemEquipSlot'
		let radio = CreateViewHTML.prototype.createViewRadio(type, 'equipment', type, 'ItemCase')//document.createElement("input")
		var label = document.createElement("label")
		label.setAttribute("for", type)
		label.className = "ItemCaseText"
		label.innerText = type
		var infoText = document.createElement('div');
		if (Object.getOwnPropertyNames(equip[type]).length != 0) {
			infoText = new CreateDataView('Item', 'Equip', equip[type]).div
		}
		div.appendChild(radio)
		div.appendChild(label)
		div.appendChild(infoText)
		return div
	}
	createViewState(number, performerNumber, type) {
		if (!performerNumber && performerNumber != 0) {
			var performer = this.performer
		}
		else {
			var performer = playerTeam.character[performerNumber]
		}
		let baseState = 0
		let originState = 0
		let addState = 0
		if (!type) {
			originState = performer.origin.state[nameState[number]]
			baseState = performer.baseState[nameState[number]]
			addState = performer.battle.state[nameState[number]] - originState
		}
		else {
			baseState = parseInt(new DOMSearch('id', 'StateOption' + nameState[number]).getAttribute("value"))
			originState = new State(playerTeam.character[performerNumber], baseState, 0, 0, number).state
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
		if (addState != 0) {
			stateGrade.innerText += ' + ' + addState
		}
		stateGrade.style.textTransform = 'none'
		div.appendChild(stateGrade)
		let bar = CreateViewHTML.prototype.createViewBar(stateValue[1], stateValue[1] + '%')
		div.appendChild(bar)
		div.setAttribute("value", baseState)
		div.setAttribute("addValue", 0)
		return div
	}
	returnStateText(number, addNumber, exp) {
		const grade = ['K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'Ex']
		const secondGarde = ['k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
		var first = Math.floor((number + addNumber) / 1331)
		var secound = Math.floor(((number + addNumber) - first * 1331) / 121)
		var third = (number + addNumber) - first * 1331 - secound * 121;
		if (first > 10) {
			var over = Math.floor((number + addNumber) / 14641) - 1;
			var head = (over == 0) ? 'Ex' : 'Ex_' + over
			var numbering = Math.floor(((number + addNumber) % 14641) / 14641 * 1000) / 10
		}
		else {
			var head = grade[first] + secondGarde[secound]
			var numbering = Math.floor(third / 121 * 1000) / 10 // exp / StateExp +  
		}
		return [head, numbering]
	}

}
class PartternInput {
	constructor(value) {
		this.performer = playerTeam.character[value]
		this.tab = new DOMSearch('class', "PartternTab")[0].children
		this.loadInputData()
		this.inputData()
	}
	loadInputData() {
		this.parttern = []
		const length = this.tab.length;
		for (let i = 0; i < length; i++) {
			const data = this.tab[i]
			let jud = data.children[1].value
			let value = data.children[2].value;
			if (!value || value == NaN) {
				value = 0;
			}
			let skill = data.children[3].value;
			this.parttern[i] = [jud, value, skill];
		}
	}
	inputData() {
		this.performer.parttern = this.parttern;
	}
}
class CreateViewHTML {
	constructor() { }
	createViewLabel(forId, type) {
		let label = new CreateTag('label')
		label.setAttribute("for", forId)
		label.className = type + 'Label DataLabel'
		return label
	}
	createViewRadio(id, name, value, type, disabled) {
		let radio = new CreateTag("input")
		radio.setAttribute("type", "radio")
		radio.setAttribute("name", name)
		radio.id = id
		radio.value = value
		radio.className = type + "Radio"
		if (disabled) {
			radio.disabled = true
		}
		return radio
	}
	createViewButton(id, className, value, innerText) {
		let button = new CreateTag('button')
		if (id) {
			button.id = id
		}
		button.innerText = innerText
		button.className = className + ' Button'
		button.value = value
		return button
	}
	createViewCheckBox(id, name, value, type, disabled, checke) {
		let checkBox = new CreateTag("input")
		checkBox.setAttribute("type", "checkbox")
		checkBox.setAttribute("name", name)
		checkBox.id = id
		checkBox.value = value
		checkBox.className = type + "CheckBox"

		if (disabled) {
			checkBox.disabled = true
		}
		if (checke) {
			checkBox.checked = checke
		}
		return checkBox
	}
	createViewBar(width, title) {
		let bar = new CreateTag('div');
		bar.className = 'Max'
		let gauge = new CreateTag('div');
		gauge.className = 'EXP'
		gauge.style.width = width + '%'
		gauge.title = title
		bar.appendChild(gauge)
		return bar
	}
	createPTag(text, className) {
		let p = new CreateTag('p')
		if (text) {
			p.innerText = text
		}
		if (className) {
			p.className = className
		}
		return p
	}
}
class InventoryDataView {
	constructor(type, id) {
		this.type = type
		if (id) {
			this.id = id
		}
		this.inventory = inventoryData
		this.selectMainDiv()
		this.createTittle()
		let hidden = new DOMSearch('id', 'InventoryType')
		if (!hidden.check) {
			hidden = new CreateTag('hidden')
			hidden.id = 'InventoryType'

		}
		hidden.value = this.type
		this.div.appendChild(hidden)
		let sort = this.createSortDiv(type)
		this.div.appendChild(sort)
		let data = this.createItemData(type)
		this.div.appendChild(data)
		if (type === 'Equipment') {
			let button = this.createEquipButton()
			this.div.appendChild(button)
			return this.div
		}
	}
	selectMainDiv() {
		switch (this.type) {
			case 'Equipment':
				this.div = new CreateTag('div')
				this.div.className = 'InventoryView'
				this.div.id = 'Inventory' + this.type
				break;
			case 'List':
				this.div = new DOMSearch('id', 'InventoryView')
				break;
		}
	}

	createTittle() {
		let innerText = ''
		switch (this.type) {
			case 'Equipmnet':
				innerText = 'Equipment capable'
				break;
			case 'List':
				innerText = 'InventoryList'
				break;
		}
		let tittle = CreateViewHTML.prototype.createPTag(innerText, "InventoryTittle")
		tittle.id = "InventoryTittle"
		this.div.appendChild(tittle)
	}
	createSortDiv(type) {
		if (!type) {
			type = this.type
		}
		let index = this.sortValue = 0
		if (new DOMSearch('id', 'InventoryTypeSelecter' + type).check) {
			index = this.sortValue = new DOMSearch('id', 'InventoryTypeSelecter' + type).value
		}
		let inventory = this.inventory
		if (!inventory) {
			inventory = inventoryData

		}
		let select = new CreateTag('select');
		select.id = 'InventoryTypeSelecter' + this.type
		select.className = 'InventoryType'
		const name = ['Weapon', 'Ammor', 'Item', 'Head', 'Other']//Object.getOwnPropertyNames(inventory)
		const length = name.length
		let i = 0
		for (i = 0; i < length; i++) {
			let option = new CreateTag('option')
			option.value = name[i]
			option.innerText = name[i]
			select.appendChild(option)
			if (i === index) {
				option.setAttribute("selected", "selected")
			}
		}
		let option = new CreateTag('option')
		option.value = 'All'
		option.innerText = 'All'
		select.appendChild(option)
		if (i === index) {
			option.setAttribute("selected", "selected")
		}
		return select
	}
	createEquipButton(number) {
		let id = ''
		if (!number) {
			id = this.id
		}
		else {
			id = number
		}
		let button = CreateViewHTML.prototype.createViewButton('', 'ItemButton EquipButton', id, 'Equip')
		return button
	}
	createItemData(type) {
		let div = this.div
		if (!div) {
			div = new DOMSearch('id', 'Inventroy' + this.type)
		}
		if (!type) {
			type = this.type
		}
		let inventoryDiv = new CreateTag('div')
		inventoryDiv.className = 'Inventory'
		inventoryDiv.id = 'Inventory' + type
		let inventory = this.inventory
		if (!inventory) {
			inventory = inventoryData

		}
		const name = ['Weapon', 'Ammor', 'Item', 'Head', 'Other']
		let sortValue = name[this.sortValue]
		if (!sortValue || new DOMSearch('id', 'InventoryTypeSelecter' + type).check) {
			sortValue = new DOMSearch('id', 'InventoryTypeSelecter' + type).value
		}
		const length = name.length
		const checkSort = name.indexOf(sortValue)
		if (sortValue != 'All') {
			this.createItemSortData(type, sortValue, inventoryDiv);
		}
		else {

			this.createItemSortData(type, true, inventoryDiv)

		}
		return inventoryDiv
	}
	createItemSortData(type, sortType, div) {
		const inventory = inventoryData
		const itemName = Object.getOwnPropertyNames(inventory).sort()
		const length = itemName.length
		for (let i = 0; i < length; i++) {
			let createCheck = -1
			if (sortType === true) {

			}
			else if (sortType != inventory[itemName[i]].category) {
				createCheck = 1;
			}
			else if (type === 'Equipment') {
				createCheck = this.checkJobEquipment(inventory[itemName[i]].type)
			}
			if (createCheck == -1) {
				let itemDiv = new CreateTag('div')
				itemDiv.className = "ItemData"
				let label = CreateViewHTML.prototype.createViewLabel(itemName[i], 'Item')
				let inputLabel = new CreateDataView('Item', 0, inventory[itemName[i]]).div
				if (type === 'Equipment') {
					let radio = CreateViewHTML.prototype.createViewRadio(itemName[i], 'inventory', itemName[i], 'ItemEquip')
					radio.addEventListener('click',
						function () {
							new DOMSearch('id', 'InventoryView').value = this.id
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
	checkJobEquipment(itemType) {
		let id = this.id
		let check = 1
		if (!id) {
			id = new DOMSearch('id', 'CharacterDesk').value
		}
		const jobData = dataJob[playerTeam.character[id].job]
		if (jobData.limit) {
			check = jobData.limit.indexOf(itemType)
		}
		return check
	}
}
class CreateDataView {
	constructor(type, type2, data, code) {
		this.type = type
		this.type2 = type2
		this.code = code
		this.data = data
		if (!this.data) {
			this.checkDataType()
		}
		this.div = this['create' + type + 'Div']()
	}
	checkDataType() {
		switch (this.type) {
			case 'Action':
				this.data = dataAction[this.code];
				break;
			case 'Item':
			case 'ShopBuy':
			case 'ShopRefine':
			case 'ShopSell':
				this.data = dataItem[this.code];
				break;
			case 'Character':
				this.data = playerTeam.character[this.code]
				break;
			case 'CharacterSkill':
				this.data = playerTeam.character[this.code].skill
				break;
			case 'Skill':
				this.data = dataSkill[this.code]
				break;
			case 'Parttern':
				this.data = dataPartternType;
				break;
			case 'CharacterUseItem':
				this.data = inventoryData
				break;
		}
	}
	createSkillDiv() {
		const skill = this.data
		const skillElementName = Object.getOwnPropertyNames(skill)
		let mainDiv = new CreateTag('div')
		let slash = new Text(' / ').p;
		mainDiv.className = 'SkillInfoText'
		if (this.type2 === 'Learn') {
			let skillPoint = skill.point
			if (!skillPoint) {
				skillPoint = 0
			}
			let pointP = new Text(skillPoint + ' pt ', 'SkillPoint').p
			mainDiv.appendChild(pointP)
			mainDiv.appendChild(slash)
			slash = new Text(' / ').p;
		}
		let img = new ImageDiv('Skill', skill.code).div;
		mainDiv.appendChild(img);
		let nameP = new Text(skill.name, 'SkillName').p
		mainDiv.appendChild(nameP)
		mainDiv.appendChild(slash)
		const typeCheck = skill.code.slice(1, 2)
		if (typeCheck != 'P') {
			for (let i = 0; i < 2; i++) {
				let targetType = skill.target[i]
				let targetP = new Text(targetType, targetType).p
				mainDiv.appendChild(targetP)
				if (i === 0) {
					let bar = new Text(' - ').p;
					mainDiv.appendChild(bar)
				}
			}
			slash = new Text(' / ').p;
			mainDiv.appendChild(slash)
		}
		let typeDiv = ''
		switch (typeCheck) {
			case 'A':
				typeDiv = new Text('Active').p
				break;
			case 'P':
				typeDiv = new Text('Passive').p
				break;
			default:
				typeDiv = new Text(' ').p;
				break;
		}
		mainDiv.appendChild(typeDiv)
		slash = new Text(' / ').p;
		mainDiv.appendChild(slash)
		const costData = skill.cost
		if (costData && Object.getOwnPropertyNames(costData).length != 0) {
			const costType = ['hp', 'sp', 'mp']
			for (let i = 0; i < 3; i++) {
				let appendCheck = 0;
				let innerCostText = costType[i].toUpperCase() + ' : '
				let perCost = costData['p' + costType[i].slice(0, 1).toUpperCase() + costType[i].slice(1)]
				if (perCost) {
					innerCostText += perCost + ' % '
					appendCheck = 1
				}
				let numberCost = costData[costType[i]]
				if (numberCost) {
					if (perCost) {
						innerCostText += ' + '
					}
					innerCostText += numberCost
					appendCheck = 1
				}
				if (appendCheck === 1) {
					let costDiv = new Text(innerCostText, costType[i].toUpperCase()).p
					mainDiv.appendChild(costDiv)
					slash = new Text(' / ').p;
					mainDiv.appendChild(slash)
				}
			}
		}
		const powerData = skill.power
		if (powerData) {
			if (powerData.base.value != 0) {
				const hitCountData = skill.hitCount
				let innerPowerText = powerData.base.value
				let powerDiv = new Text(innerPowerText, 'power').p
				mainDiv.appendChild(powerDiv)
				let xDiv = new Text(' x ').p
				mainDiv.appendChild(xDiv)
				let hitCountDiv = new Text(hitCountData, 'hitCount').p
				mainDiv.appendChild(hitCountDiv)
				slash = new Text(' / ').p;
				mainDiv.appendChild(slash)
			}
			let powerTypeDiv = new Text(powerData.base.type, powerData.base.type).p
			mainDiv.appendChild(powerTypeDiv)
			slash = new Text(' / ').p;
			mainDiv.appendChild(slash)
		}

		const delayData = skill.delay
		if (delayData && Object.getOwnPropertyNames(delayData).length != 0) {
			const delayName = ['first', 'last']
			let innerDelayText = '( '
			for (let i = 0; i < 2; i++) {
				let value = delayData[delayName[i]]
				if (!value) {
					value = 0
				}
				innerDelayText += value
				if (i === 0) {
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
		if (invalidData && invalidData != 'None') {
			let invalidDiv = new Text(invalidData, invalidData).p
			mainDiv.appendChild(invalidDiv)
			slash = new Text(' / ').p;
			mainDiv.appendChild(slash)
		}
		const addEffectData = skill.addEffect
		if (addEffectData && Object.getOwnPropertyNames(addEffectData).length != 0) {
			const addEffectType = Object.getOwnPropertyNames(addEffectData)
			const typeLength = addEffectType.length
			for (let i = 0; i < typeLength; i++) {
				const effectData = addEffectData[addEffectType[i]]
				const effectType = Object.getOwnPropertyNames(effectData)
				const effectLength = effectType.length
				for (let j = 0; j < effectLength; j++) {
					const effectName = effectType[j]
					const suffix = Effect.prototype.checkEffectSuffix(effectName)
					let innerEffectText = effectName.slice(suffix.length) + ' '
					const effectValue = effectData[effectName].value
					if (suffix != 'Change') {
						switch (suffix) {
							case 'Up':
								innerEffectText += ' + ' + effectValue + '% '
								break;
							case 'Down':
								innerEffectText += ' - ' + effectValue + '% '
								break;
							case 'Plus':
								innerEffectText += ' + ' + effectValue
								break;
							case 'Minus':
								innerEffectText += ' - ' + effectValue
								break;
							case 'Clear':
								innerEffectText += ' = 0 '
								break;
							case 'Change':
								innerEffectText += ' = ' + effectValue
								break;
						}
						let effectDiv = new Text(innerEffectText, suffix).p
						mainDiv.appendChild(effectDiv)
						slash = new Text(' / ').p;
						mainDiv.appendChild(slash)
					}
				}
			}
		}
		const limitData = skill.limit
		if (limitData && limitData.length != 0) {
			const limitLength = limitData.length
			let innerLimitText = 'Limit : '
			for (let i = 0; i < limitLength; i++) {
				if (i != 0) {
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
		if (expData && expData.length != 0) {
			let expDiv = new Text(expData).p
			mainDiv.appendChild(expDiv)
		}
		return mainDiv
	}
	//disorder : { name : , value :  , turn : }		point : learnSkill	}
	createItemDiv() {
		const item = this.data
		const itemElementName = Object.getOwnPropertyNames(item)

		let div = new CreateTag('div')
		div.className = 'ItemInfoText'
		let innerItemName = ''
		if (item.refine === 0 || !item.refine) {
			innerItemName = item.name + '(' + item.type + ')';
		}
		else {
			innerItemName = '+' + item.refine + ' ' + item.name + '(' + item.type + ')';
		}
		let nameP = new Text(innerItemName, 'ItemName').p

		let img = new ImageDiv('Item', item.baseCode).div;
		div.appendChild(img);
		let slash = new Text(' / ').p;
		div.appendChild(nameP)
		if (this.type2 != 'Equip') {
			let countP = new Text('x' + item.number, 'ItemCount').p
			div.appendChild(countP)
		}
		div.appendChild(slash)

		if (item.spec) {
			this.createItemData(div, item)
		}
		if (itemElementName.indexOf('exp') != -1) {
			let optionP = new Text(item.exp, 'ItemOption').p
			div.appendChild(optionP)
		}
		return div
	}
	createCharacterDiv() {
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
		level.innerText = 'Lv. ' + character.level
		level.className = 'level'
		let tribe = new CreateTag('a');
		tribe.innerText = dataTribe[character.tribe].name
		tribe.className = 'tribe'
		dataDiv.appendChild(name)
		dataDiv.appendChild(tribe)
		dataDiv.appendChild(level)
		dataDiv.addEventListener('click', function () { new CharacterDesk(this) })
		mainDiv.appendChild(dataDiv)
		let subDiv = new CreateTag('div')
		let selecter = new CreateTag('div')
		selecter.className = 'SimpleSelecter'
		let checkBox = CreateViewHTML.prototype.createViewCheckBox(character.code + 'SimpleSelect', 'SimpleSelect', character.code, 'SimpleSelect')
		let label = CreateViewHTML.prototype.createViewLabel(character.code + 'SimpleSelect', 'SimpleSelectParty')
		subDiv.appendChild(checkBox)
		label.appendChild(selecter)
		subDiv.appendChild(label)
		mainDiv.appendChild(subDiv)
		if (selected === 1) {
			dataDiv.className = 'inParty';
			checkBox.checked = 'checked'
			//selecter.innerText = 'inParty';
		}
		else if (selected === 0) {
			dataDiv.className = 'outParty';
			//selecter.innerText = 'outParty';
		}
		return mainDiv
	}
	createShopBuyDiv() {
		const item = this.data
		const itemElementName = Object.getOwnPropertyNames(item)

		let div = new CreateTag('div')
		div.className = 'ItemInfoText'
		let innerItemName = item.name + '(' + item.type + ')'
		let nameP = new Text(innerItemName, 'ItemName').p
		let img = new ImageDiv('Item', item.code).div;
		div.appendChild(img);
		let slash = new Text(' / ').p;
		div.appendChild(nameP)
		div.appendChild(slash)

		
		if (item.spec) {
			this.createItemData(div, item)
		}
		if (itemElementName.indexOf('exp') != -1) {

			let optionP = new Text(item.exp, 'ItemOption').p
			div.appendChild(optionP)
		}
		return div
	}
	createShopSellDiv() {
		const item = this.data
		const itemElementName = Object.getOwnPropertyNames(item)

		let div = new CreateTag('div')
		div.className = 'ItemInfoText'
		let innerItemName = ''
		if (item.refine === 0 || !item.refine) {
			innerItemName = item.name + '(' + item.type + ')';
		}
		else {
			innerItemName = '+' + item.refine + ' ' + item.name + '(' + item.type + ')';
		}

		let nameP = new Text(innerItemName, 'ItemName').p
		let img = new ImageDiv('Item', item.baseCode).div;
		div.appendChild(img);
		let slash = new Text(' / ').p;
		div.appendChild(nameP)
		let countP = new Text('x' + item.number, 'ItemCount').p
		div.appendChild(countP)
		div.appendChild(slash)
		if (item.spec) {
			this.createItemData(div, item)
		}
		if (itemElementName.indexOf('exp') != -1) {

			let optionP = new Text(item.exp, 'ItemOption').p
			div.appendChild(optionP)
		}
		return div
	}
	createShopRefineDiv() {
		const item = this.data
		const itemElementName = Object.getOwnPropertyNames(item)
		let div = new CreateTag('div')
		div.className = 'ItemInfoText'
		let innerItemName = ''
		if (item.refine === 0 || !item.refine) {
			innerItemName = item.name + '(' + item.type + ')';
		}
		else {
			innerItemName = '+' + item.refine + ' ' + item.name + '(' + item.type + ')';
		}

		let nameP = new Text(innerItemName, 'ItemName').p
		let img = new ImageDiv('Item', item.baseCode).div;
		div.appendChild(img);
		let slash = new Text(' / ').p;
		div.appendChild(nameP)
		let countP = new Text('x' + item.number, 'ItemCount').p
		div.appendChild(countP)
		div.appendChild(slash)
	
		if (item.spec) {
			this.createItemData(div, item)
		}
		if (itemElementName.indexOf('exp') != -1) {

			let optionP = new Text(item.exp, 'ItemOption').p
			div.appendChild(optionP)
		}
		return div
	}
	createPartternDiv() {
		const judgeCode = Object.getOwnPropertyNames(this.data)
		let jSelect = document.createElement("select");
		jSelect.id = "JudgeType" + this.type2;
		jSelect.className = 'PartternSkillJudge'
		for (let i = 0; i < judgeCode.length; i++) {
			let option = document.createElement("option");
			option.value = judgeCode[i]
			option.innerText = dataPartternType[judgeCode[i]].text;
			jSelect.appendChild(option);
		}
		return jSelect;
	}
	createCharacterSkillDiv() {

		const skillCode = this.data;
		let kselect = document.createElement("select");
		kselect.className = 'PartternSkillOption'
		for (let i = 0; i < skillCode.length; i++) {
			if (skillCode[i].indexOf("KPT") == -1) {
				let option = document.createElement("option");
				option.value = skillCode[i]
				option.innerText = dataSkill[skillCode[i]].name;
				kselect.appendChild(option);
			}

		}
		return kselect;
	}
	createCharacterUseItemDiv() {
		const item = this.data;
		const code = Object.getOwnPropertyNames(item);
		const useItems = ['Rebirth']
		let select = document.createElement("select");
		select.className = 'CharacterUseItem'
		for (let i = 0; i < code.length; i++) {
			if (useItems.indexOf(item[code[i]].type) != -1) {
				let option = document.createElement("option");
				option.value = code[i]
				option.innerText = dataItem[code[i]].name + ' x' + this.data[code[i]].number;
				select.appendChild(option);
			}

		}
		return select;
	}
	createItemData(div, item) {
		const optionName = ['atkPhy', 'atkMag', 'defPhy', 'defMag']
		const optionNameLength = optionName.length;
		let checkCreate = { defPhy: 0, defMag: 0 }
		const baseOption = item.spec.option
		if (baseOption) {
			const baseOptionName = Object.getOwnPropertyNames(baseOption)
			const itemOptionLength = baseOptionName.length
			for (let i = 0; i < itemOptionLength; i++) {
				let checkName = ''
				if (baseOptionName[i].length != 6 && baseOptionName[i].indexOf("True") == -1) {
					checkName = baseOptionName[i].slice(0, 6)
				}
				else {
					checkName = baseOptionName[i]
				}
				let index = optionName.indexOf(checkName)
				if (index != -1) {
					let textType = optionName[index]
					let innerText = optionName[index].slice(0, 1).toUpperCase() + optionName[index].slice(1, 3) + ' : '
					if (optionName[index].indexOf("Mag") != -1) {
						innerText = "M" + innerText.toLowerCase();
					}
					let slash = new Text(' / ').p;
					if (index < 2) {
						innerText += baseOption[optionName[index]]
					}
					else {
						let defPer = baseOption[optionName[index] + 'Per']
						if (!defPer) {
							innerText += '0 + '
						}
						else {
							innerText += defPer + ' + '
						}
						let defNum = baseOption[optionName[index] + 'Num']
						if (!defNum) {
							innerText += '0'
						}
						else {
							innerText += defNum
						}
						checkCreate[optionName[index]] += 1

					}
					if (!checkCreate[optionName[index]] || checkCreate[optionName[index]] == 1) {
						let optionP = new Text(innerText, textType).p
						div.appendChild(optionP)
						div.appendChild(slash)
					}
				}
			}
		}

	}
}
class addEventListner {
	constructor(type) {
	}
	addEvent() {
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
		this.addEventHireFireButton()

	}
	addEventSelectPartyMember() {
		let label = new DOMSearch('class', 'SelectParty ViewLabel')
		const length = label.length
		for (let i = 0; i < length; i++) {
			label[i].addEventListener('click', function () {
				const id = new DOMSearch('id', 'CharacterDesk').value
				let character = playerTeam.character[id]
				const type = this.innerText
				let changeDiv = new DOMSearch('id', id)
				switch (type) {
					case 'inParty':
						character.selected = 1
						changeDiv.className = 'inParty'
						changeDiv.parentElement.lastChild.lastChild.firstChild.innerText = 'inParty';
						changeDiv.parentElement.lastChild.firstChild.checked = true
						break;
					case 'outParty':
						character.selected = 0
						changeDiv.className = 'outParty'
						changeDiv.parentElement.lastChild.lastChild.firstChild.innerText = 'outParty'
						changeDiv.parentElement.lastChild.firstChild.checked = false
						break;
				}

			})
		}
	}
	addEventSimpleSelectPartyMember() {
		let label = new DOMSearch('class', 'SimpleSelectPartyLabel DataLabel')
		const length = label.length;
		for (let i = 0; i < length; i++) {
			label[i].addEventListener('click', function () {
				const id = this.parentElement.firstChild.value
				let character = playerTeam.character[id]

				let desk = ''
				const deskId = new DOMSearch('id', 'CharacterDesk').value
				switch (character.selected) {
					case 1:
						character.selected = 0
						new DOMSearch('id', id).className = 'outParty'
						//this.firstChild.innerText = 'outParty';
						desk = new DOMSearch('id', 'outPartySelectParty')
						if (desk && deskId === id) {
							desk.checked = true
						}
						break;
					case 0:
						character.selected = 1
						new DOMSearch('id', id).className = 'inParty'
						//this.firstChild.innerText = 'inParty';
						desk = new DOMSearch('id', 'inPartySelectParty')
						if (desk && deskId === id) {
							desk.checked = true
						}
						break;
				}

			})
		}
	}
	addEventInventorySelecter() {
		let selecter = new DOMSearch('class', 'InventoryType')
		const length = selecter.length
		for (let i = 0; i < length; i++) {
			selecter[i].addEventListener('change',
				function () {
					let type = new DOMSearch('id', 'InventoryType').value
					let selecter = this
					let parent = this.parentNode.children[3]
					let inventory = InventoryDataView.prototype.createItemData(type)
					parent.innerHTML = inventory.innerHTML
					addEventListner.prototype.addEventItemEquipRadio()
					new DOMSearch('id', 'InventoryTittle').value = selecter.selectedIndex
				})
		}
	}
	addEventStateApplyButton() {
		var applyButton = new DOMSearch('class', 'ApplyButton')[0]
		applyButton.addEventListener('click', function () {
			var failCheck = 0
			var performerNumber = new DOMSearch('id', 'CharacterDesk').value
			var performer = playerTeam.character[performerNumber]
			var bonusValue = performer.bonusState
			var state = performer.baseState
			var bonusSummary = 0
			for (var i = 0; i < 10; i++) {
				var checkType = new DOMSearch('id', 'StateOption' + nameState[i])
				var upValue = parseInt(checkType.getAttribute("value"))
				var addValue = parseInt(checkType.getAttribute("addValue"))
				if (state[nameState[i]] != upValue - addValue) {
					failCheck += 1;
				}
				else if (addValue < 0) {
					failCheck += 1;
				}
				else if (state[nameState[i]] > upValue) {
					failCheck += 1;
				}
				bonusSummary += addValue
			}
			if (bonusSummary < 0 || bonusSummary > bonusValue) {
				failCheck += 1;
			}
			if (failCheck === 0) {
				performer.bonusState -= bonusSummary
				for (var i = 0; i < 10; i++) {
					var checkType = new DOMSearch('id', 'StateOption' + nameState[i])
					var addValue = parseInt(checkType.getAttribute("addValue"))
					if (addValue != 0) {
						performer.baseState[nameState[i]] = state[nameState[i]] = parseInt(checkType.getAttribute("value"))
						//performer.stateExp[nameState[i]] = Player.prototype.calculrateStateExp(performerNumber,nameState[i])
					}
				}
				new State(playerTeam.character[performerNumber])
				performer.origin.health = new Health('player', performer.origin.state)
				CharacterDesk.prototype.refreshStateView()
				addEventListner.prototype.addEvent()
			}
		})
	}
	addEventHireFireButton() {
		let fire = new DOMSearch('class', 'FireButton')[0]
		fire.addEventListener('click', function () {
			let value = new DOMSearch('id', 'CharacterDesk').value
			var answer = confirm('fire' + playerTeam.character[value].name + '?');
			if (answer) {
				delete playerTeam.character[value];
				new DOMSearch('id', value).parentElement.remove();
				if (localStorage[value]) {
					localStorage.removeItem(value);
				}
				new DOMSearch('id', 'MainTab').children[3].click()

			}
		})
		let save = new DOMSearch('class', 'SaveButton')[0]
		save.addEventListener('click', function () {
			let value = new DOMSearch('id', 'CharacterDesk').value

			saveCharacter(playerTeam.character[value]);
		})
	}
	addEventUseItemButton() {
		var useButton = new DOMSearch('class', 'UseItemButton')[0];
		useButton.addEventListener('click', function () {
			const value = new DOMSearch('id', 'UseItemValue').value;
			new UseItem(value);
			CharacterDesk.prototype.refreshUseItemList()
			CharacterDesk.prototype.refreshStateView()
			CharacterDesk.prototype.refreshCharacteristicData()
			addEventListner.prototype.addEvent()
		})
	}
	addEventStateResetButton() {
		var resetButton = new DOMSearch('class', 'ResetButton')[0]
		resetButton.addEventListener('click', function () {
			CharacterDesk.prototype.refreshStateView()
			addEventListner.prototype.addEvent()
		})
	}
	addEventEquipButton() {
		var equipButton = new DOMSearch('class', 'EquipButton')[0]
		equipButton.addEventListener('click',
			function () {
				const listType = new DOMSearch('id', 'InventoryType').value
				var nowSelect = parseInt(new DOMSearch('id', 'InventoryTypeSelecterEquipment').selectedIndex)
				var value = new DOMSearch('id', 'CharacterDesk').value
				var target = new DOMSearch('id', 'InventoryView').value
				new EquipItem(value, target)
				var parent = new DOMSearch('id', 'InventoryEquipment')
				var div = new InventoryDataView('Equipment', value)
				parent.innerHTML = div.innerHTML
				new DOMSearch('id', 'InventoryTypeSelecterEquipment').selectedIndex = new DOMSearch('id', 'InventoryTittle').value = nowSelect
				var divE = CharacterDesk.prototype.createViewEquipment(value)
				var parentE = new DOMSearch('id', 'EquipSelect')
				parentE.innerHTML = divE.innerHTML

				new DOMSearch('id', 'InventoryType').value = listType;
				CharacterDesk.prototype.refreshStateView()
				addEventListner.prototype.addEvent()
			})
	}
	addEventSkillLearnButton() {
		let learnButton = new DOMSearch('class', 'SkillLearn Button')[0]
		learnButton.addEventListener('click',
			function () {
				const id = new DOMSearch('id', 'CharacterDesk').value
				const learnSkillCode = new DOMSearch('id', 'SkillLearnCode').value
				new LearnSkill(id, learnSkillCode)
				if (learnSkillCode.indexOf('P') != -1) {
					new PassiveEffect(id, learnSkillCode, 'first')
				}
				let playerSkillBoard = new DOMSearch('id', 'PlayerSkillData')
				let newPlayerSkillBoard = CharacterDesk.prototype.createPlayerSkillData(id)
				playerSkillBoard.innerHTML = newPlayerSkillBoard.innerHTML
				let learnBoard = new DOMSearch('id', 'LearnSkillData')
				let newLearnBoard = CharacterDesk.prototype.createLearnSkillData(id)
				learnBoard.innerHTML = newLearnBoard.innerHTML
				CharacterDesk.prototype.checkFavoriteSkill(id)
				CharacterDesk.prototype.refreshStateView()
				addEventListner.prototype.addEvent()
			})
	}
	addEventRemoveButton() {
		var itemButton = new DOMSearch('class', 'RemoveButton')[0]
		itemButton.addEventListener('click',
			function () {
				const listType = new DOMSearch('id', 'InventoryType').value
				var nowSelect = parseInt(new DOMSearch('id', 'InventoryTypeSelecterEquipment').selectedIndex)
				var value = new DOMSearch('id', 'CharacterDesk').value
				var performer = playerTeam.character[this.value]
				var target = new DOMSearch('id', 'EquipSelect').value
				new EquipItem(value, 'null', target)
				var parent = new DOMSearch('id', 'EquipSelect')
				var div = CharacterDesk.prototype.createViewEquipment(value)
				parent.innerHTML = div.innerHTML
				new DOMSearch('id', 'InventoryTypeSelecterEquipment').selectedIndex = new DOMSearch('id', 'InventoryTittle').value = nowSelect
				// var parent2 =  new DOMSearch( 'id','InventoryView')
				// 	var div2 = new InventoryDataView('Equipment',value)//CharacterDesk.prototype.createEquipmentInventory()
				// 	parent2.innerHTML = div2.innerHTML
				var parent = new DOMSearch('id', 'InventoryEquipment')
				var div = new InventoryDataView('Equipment', value)
				parent.innerHTML = div.innerHTML
				new DOMSearch('id', 'InventoryType').value = listType;
				CharacterDesk.prototype.refreshStateView()
				addEventListner.prototype.addEvent()
			})
	}
	addEventItemCaseRadio() {
		var itemCase = new DOMSearch('class', 'ItemCaseRadio')
		var length = itemCase.length;
		for (var i = 0; i < length; i++) {
			itemCase[i].addEventListener('click',
				function () {
					new DOMSearch('id', 'EquipSelect').value = this.value
				})
		}
	}
	addEventItemEquipRadio() {
		var radio = new DOMSearch('class', 'ItemEquipRadio')
		var length = radio.length;
		for (var i = 0; i < length; i++) {
			radio[i].addEventListener('click',
				function () {
					new DOMSearch('id', 'InventoryView').value = this.id
				})
		}
	}
	addEventLearnSkillRadio() {
		let skillLearn = new DOMSearch('class', 'SkillLearnRadio')
		const length = skillLearn.length;
		for (let i = 0; i < length; i++) {
			skillLearn[i].addEventListener('click',
				function () {
					new DOMSearch('id', 'SkillLearnCode').value = this.value
				})
		}
	}
	addEventFavoriteSkillCheckBox() {
		let favoriteCheckBox = new DOMSearch('class', 'SkillFavoriteCheckBox')
		const length = favoriteCheckBox.length
		for (let i = 0; i < length; i++) {
			favoriteCheckBox[i].addEventListener('click',
				function () {
					const skillCode = this.value
					const id = new DOMSearch('id', 'CharacterDesk').value
					let character = playerTeam.character[id]
					let skillFavorite = character.skillFavorite
					const checkType = skillFavorite.indexOf(skillCode)
					if (checkType === -1) {
						character.skillFavorite.push(skillCode)
						character.skillFavorite.sort()
					}
					else {
						character.skillFavorite.splice(checkType, 1)

					}
				})
		}
	}
	addEventStateUp() {
		for (var i = 0; i < 10; i++) {
			var setEventDiv = new DOMSearch('id', 'StateOption' + nameState[i])
			setEventDiv.addEventListener('click',
				function () {
					var bonus = new DOMSearch('id', 'BonusState')
					var bonusValue = parseInt(bonus.innerText)
					var performerNumber = new DOMSearch('id', 'CharacterDesk').value
					var bonusValueMain = playerTeam.character[performerNumber].bonusState
					if (bonusValue > 0 && bonusValueMain > 0) {
						bonusValue -= 1
						bonus.innerText = bonusValue;
						var set = this
						set.setAttribute("addValue", parseInt(set.getAttribute("addValue")) + 1)
						set.setAttribute("value", parseInt(set.getAttribute("value")) + 1)
						var number = nameState.indexOf(set.id.slice(11))
						var newSet = CharacterDesk.prototype.createViewState(number, performerNumber, 'change')
						set.innerHTML = newSet.innerHTML
					}
				}
			)
		}
	}
	addEventTabs(tabClassName) {
		let menu = ''
		if (tabClassName) {
			menu = new DOMSearch('class', tabClassName)
		}
		else {
			menu = new DOMSearch('class', 'MenuTabs')
		}
		const menuCount = menu.length
		for (let j = 0; j < menuCount; j++) {
			let tab = menu[j]
			let children = tab.children
			const length = children.length
			for (let i = 0; i < length; i++) {
				let connectTab = children[i].dataset.conecttab
				switch (connectTab) {
					case 'CharacterView':
						this.addCharacterListRefresh(children[i])
						break;
					case 'InventoryView':
						this.addInventoryListRefresh(children[i])
						break;
				}
				children[i].addEventListener('click',
					function () {
						let selectTab = this
						let parent = this.parentNode
						let activeTab = parent.getElementsByClassName('activeTab')[0]
						let aConectTab
						if (activeTab) {
							aConectTab = activeTab.dataset.conecttab
						}
						let sConectTab = selectTab.dataset.conecttab
						if (aConectTab == sConectTab) {
							return
						}
						if (activeTab) {
							activeTab.className = ''
							new DOMSearch('id', aConectTab).style.display = 'none'
						}
						switch (aConectTab) {
							case 'CharacterView':
								let list = new DOMSearch('id', 'CharacterList')
								list.innerHTML = ''
								let desk = new DOMSearch('id', 'CharacterDesk')
								desk.innerHTML = ''
								break;
							case 'InventoryView':
								new DOMSearch('id', aConectTab).innerHTML = ''
								break;
						}
						selectTab.className = 'activeTab'
						new DOMSearch('id', sConectTab).style.display = 'block'
					}
				)
			}
		}
		this.addEventTownTabs();
	}
	addEventTownTabs() {
		new DOMSearch('id', "BuyMenuTabs").addEventListener('click',
			function () {
				new Shop("Buy")
			})
		new DOMSearch('id', "SellMenuTabs").addEventListener('click',
			function () {
				new Shop("Sell")
			})
		new DOMSearch('id', "RefineMenuTabs").addEventListener('click',
			function () {
				new Shop("Refine")
			})
	}
	addInventoryListRefresh(tab) {
		tab.addEventListener('click', function () {
			let list = new DOMSearch('id', 'InventoryView')
			list.innerHTML = ''
			let newList = new InventoryDataView('List')
			addEventListner.prototype.addEventInventorySelecter();
			//list.appendChild(newList)
		})
	}
	addCharacterListRefresh(tab) {
		tab.addEventListener('click', function () {
			let list = new DOMSearch('id', 'CharacterList')
			list.innerHTML = ''
			let desk = new DOMSearch('id', 'CharacterDesk')
			desk.innerHTML = ''
			const character = playerTeam.character
			const names = Object.getOwnPropertyNames(character)
			const length = names.length
			for (let i = 0; i < length; i++) {
				let div = new CreateDataView('Character', 0, character[names[i]]).div
				list.appendChild(div)
			}
			if (length === 0) {
				list.innerText = 'Not Character'
			}
			else {
				addEventListner.prototype.addEventSimpleSelectPartyMember()
			}
		})
	}
	addPartternDragAndDrop(parttern) {
		parttern.addEventListener('dragstart', function () { onDragStart(event) })
		parttern.addEventListener('drop', function () { onDrop(event) })
		parttern.addEventListener('dragover', function () { onDragOver(event) })
		function onDragStart(event) {
			event.dataTransfer.setData('text/plain', event.target.getAttribute("partData"));

			event.currentTarget.style.backgroundColor = 'yellow';
		}
		function onDragOver(event) {
			event.preventDefault();
		}
		function onDrop(event) {
			const parttern = new DOMSearch('class', "PartternTab")[0];
			const id = event.dataTransfer.getData('text');

			const draggableElement = parttern.children[id];
			let target = event.target
			let reIndex //Parttern + i;
			do {
				reIndex = target.getAttribute("partData");
				if (reIndex == undefined) {
					target = target.parentNode
				}
			} while (reIndex == undefined)
			draggableElement.style.backgroundColor = '';
			const saveIndex = draggableElement.getAttribute("partData");
			draggableElement.setAttribute("partData", reIndex)
			const dropzone = parttern.children[reIndex];
			dropzone.setAttribute("partData", saveIndex)
			const tmp = parttern.replaceChild(dropzone, draggableElement);
			parttern.insertBefore(tmp, parttern.children[reIndex]);

			event.dataTransfer.clearData();
			new PartternInput(new DOMSearch('id', 'CharacterDesk').value);
		}
	}
	addEventBuyButton() {
		var buttons = new DOMSearch('class', 'BuyButton')
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function () {
				new ShopInter('Buy');
				saveItem();
			})
		}
	}
	addEventSellButton() {
		var buttons = new DOMSearch('class', 'SellButton')
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function () {
				new ShopInter('Sell');
				saveItem();
			})
		}
	}
	addEventRefineButton() {
		var buttons = new DOMSearch('class', 'RefineButton')
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function () {
				new ShopRefine();
				saveItem();
			})
		}
	}
	addEventShopClearButton() {
		var buttons = new DOMSearch('class', 'ClearButton')
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function () {
				ShopInter.prototype.unChecked();
			})
		}
	}
	addSystemLogClickAndLoad(log) {

		log.addEventListener('click', function () {
			//console.log("ClickDESTORY")
			this.remove();
		})

		setTimeout(
			function () {
				//console.log("TEST")
				log.remove();
			}
			, 3000);
	}
	addEventBattleRunAway() {
		new DOMSearch('id', "RunAwayButton").addEventListener('click', function () {
			new BattleEnd("runAway")
			new DOMSearch('class', 'MenuTabs')[0].children[1].click()
		})
	}
}
class Text {
	constructor(text, type) {
		var p = document.createElement('a');
		p.innerText = text + ' '
		this.p = p
		this.checkStyle(type)
		this.setStyle()
	}
	setStyle() {
		var style = Object.getOwnPropertyNames(this.style)
		var length = style.length;
		for (var i = 0; i < length; i++) {
			this.p.style[style[i]] = this.style[style[i]]
		}

	}
	checkStyle(type) {
		this.style = {}
		this.checkStyleDeco(type)
		this.style.color = this.checkStyleColor(type)
	}
	checkStyleDeco(type) {
		switch (type) {
			case 'Name':
			case 'SkillName':
				this.style.textDecoration = 'underline'
				break;
			case 'ItemCount':
				this.style.lineHeight = 1.8;
				this.style.fontSize = '0.8em';
				break;
		}
	}
	checkStyleColor(type) {
		let color = ''
		switch (type) {
			case 'enemy':
			case 'Down':
			case 'Minus':
			case 'power':
			case 'HP':
			case 'atkPhy':
			case 'HpDamage':
				color = 'rgb(200,30,30)'
				break;
			case 'Change':
			case 'Clear':
			case 'individual':
			case 'defPhy':
			case 'HpRecovery':
				color = 'rgb(30, 130, 30)'
				break;
			case 'hitCount':
			case 'multi':
			case 'atkMag':
			case 'MpDamage':
				color = 'blueviolet'
				break;
			case 'friend':
			case 'MP':
			case 'MpRecovery':
				color = 'rgb(30,30,200)'
				break;
			case 'SpDamage':
				color = 'yellowgreen'
				break;
			case 'Plus':
			case 'Up':
			case 'all':
			case 'SP':
			case 'SpRecovery':
			case 'paralyzed':
				color = 'rgb(200, 200, 30)'
				break;
			case 'self':
			case 'Delay':
				color = 'rgb(30, 130, 30)'
				break;
			case 'Death':
				color = 'darkred'
				break;
			case 'Support':
				color = 'slategrey'
				break;
			case 'defMag':
				color = 'aqua';
				break;
			case 'ItemOption':
				color = 'gray'
				break;
			default:
			case 'ItemName':
			case 'ItemCount':
				color = 'honeydew'
				break;
		}
		return color
	}
}
class Log {
	constructor(array) {
		var length = array.length
		var mainDiv = document.createElement('div')
		mainDiv.className = "Log"
		for (var i = 0; i < length; i++) {
			var type = (!array[i].type) ? '' : array[i].type
			var text = new Text(array[i].text, type).p;
			mainDiv.appendChild(text)
		}
		this.divLog = mainDiv
	}
}
class AddLog {
	constructor(textArray, type, parent) {
		if (!parent) {
			this.selectLogView(type)
			this.clearLogView()
		}
		else {
			this.logView = parent
		}
		//var text = this.createLogText(textArray);
		var log = new Log(textArray).divLog
		var children = this.logView.children
		if (!parent && type != 'Turn' && type != 'System') {
			this.logView.insertBefore(log, children[0])
		}
		else {
			if (type == 'System') {
				addEventListner.prototype.addSystemLogClickAndLoad(log)
			}
			this.logView.appendChild(log)
		}
		this.log = log
	}
	selectLogView(type) {
		switch (type) {
			case 'Battle':
				this.logView = new DOMSearch('id', 'BattleLogView')
				break;
			case 'Turn':
				this.logView = new DOMSearch('class', 'Log')[0]
				break;
			case 'Map':
				this.logView = new DOMSearch('id', 'MapLogView')
				break;
			case 'System':
				this.logView = new DOMSearch('id', 'SystemLogView')
				break;
		}
	}
	clearLogView(type) {
		if (type) {
			this.selectLogView(type)
			this.logView.innerHTML = ''
		}
		else {
			var checkValue = this.logView.children.length
			for (; checkValue > 30;) {
				this.logView.children[checkValue - 1].remove()
				checkValue = this.logView.children.length
			}
		}
	}
}

class Shop {
	constructor(type) {

		this.boardClear()
		this.selectBoard(type)
		switch (type) {
			case 'Buy':
				this.createBuyData();
				addEventListner.prototype.addEventBuyButton();
				addEventListner.prototype.addEventShopClearButton();
				break;
			case 'Sell':
				this.createSellData();
				addEventListner.prototype.addEventSellButton();
				addEventListner.prototype.addEventShopClearButton();
				break;
			case 'Refine':
				this.createRefineData();
				addEventListner.prototype.addEventRefineButton();
				break;
		}


	}
	boardClear() {
		new DOMSearch('name', "Buy")[0].innerHTML = "";
		new DOMSearch('name', "Sell")[0].innerHTML = "";
		new DOMSearch('name', "Refine")[0].innerHTML = "";
	}
	selectBoard(type) {
		this.standBoard = new DOMSearch('name', type)[0];
	}
	createBuyButton() {
		var div = document.createElement('div');
		div.className = 'BuyButton Button'
		div.innerText = 'Buy Apply'
		return div
	}
	createSellButton() {
		var div = document.createElement('div');
		div.className = 'SellButton Button'
		div.innerText = 'Sell Apply'
		return div
	}
	createRefineButton() {
		var div = document.createElement('div');
		div.className = 'RefineButton Button'
		div.innerText = 'Refine Apply'
		return div
	}
	createClearButton() {
		var div = document.createElement('div');
		div.className = 'ClearButton Button'
		div.innerText = 'Reset'
		return div
	}
	createBuyData() {

		const itemList = Object.getOwnPropertyNames(dataItem);
		const length = itemList.length;

		let fButtonGroup = new CreateTag('div');
		fButtonGroup.style.display = "flex";
		fButtonGroup.style.borderBottom = "1px solid black"
		let fisrtButton = this.createBuyButton();
		fisrtButton.style.width = "50%";
		let fClearButton = this.createClearButton();
		fClearButton.style.width = "50%";
		fButtonGroup.appendChild(fisrtButton);
		fButtonGroup.appendChild(fClearButton);
		this.standBoard.appendChild(fButtonGroup)
		for (let i = 0; i < length; i++) {
			let div = new CreateTag("div");
			let checkBox = CreateViewHTML.prototype.createViewCheckBox(itemList[i], "ItemData", itemList[i], "Item");

			div.appendChild(checkBox);
			div.className = "ItemData"
			let label = new CreateTag("label");
			label.setAttribute("for", checkBox.id);
			label.className = "ItemData DataLabel"
			let formCheck = new CreateTag("div");

			let checkDiv = new CreateTag("div");
			checkDiv.className = "ItemSelecter";

			formCheck.style.width = "5%";
			formCheck.appendChild(checkDiv)
			label.appendChild(formCheck)

			let funds = dataItem[itemList[i]].price;
			if (!funds) {
				funds = 10
			}
			let fundiv = new CreateTag("div")
			fundiv.style.width = "10%";
			let fundData = new Text("$" + funds).p;
			fundiv.appendChild(fundData);
			label.appendChild(fundiv);
			let numberDiv = new CreateTag("div");
			numberDiv.style.width = "15%";
			let numberBox = document.createElement("input");
			numberBox.setAttribute("type", "number");
			numberBox.id = "Count" + itemList[i];
			numberBox.value = 0;
			numberBox.style.width = "100%";

			numberDiv.appendChild(numberBox);
			label.appendChild(numberDiv);
			let inputLabel = new CreateDataView('ShopBuy', 0, 0, itemList[i]).div
			inputLabel.style.width = "65%";
			label.appendChild(inputLabel)
			div.appendChild(label);
			this.standBoard.appendChild(div);
		}

		let sfButtonGroup = new CreateTag('div');
		sfButtonGroup.style.display = "flex";
		let secondButton = this.createBuyButton();
		secondButton.style.width = "50%";
		let sClearButton = this.createClearButton();
		sClearButton.style.width = "50%";
		sfButtonGroup.appendChild(secondButton);
		sfButtonGroup.appendChild(sClearButton);
		this.standBoard.appendChild(sfButtonGroup)
	}
	createSellData() {
		const itemList = Object.getOwnPropertyNames(inventoryData);
		itemList.sort();
		const length = itemList.length;
		let fButtonGroup = new CreateTag('div');
		fButtonGroup.style.display = "flex";
		fButtonGroup.style.borderBottom = "1px solid black"
		let fisrtButton = this.createSellButton();
		fisrtButton.style.width = "50%";
		let fClearButton = this.createClearButton();
		fClearButton.style.width = "50%";
		fButtonGroup.appendChild(fisrtButton);
		fButtonGroup.appendChild(fClearButton);
		this.standBoard.appendChild(fButtonGroup)

		for (let i = 0; i < length; i++) {
			let div = new CreateTag("div");
			let checkBox = CreateViewHTML.prototype.createViewCheckBox(itemList[i], "ItemData", itemList[i], "Item");

			div.appendChild(checkBox);
			div.className = "ItemData"
			let label = new CreateTag("label");
			label.setAttribute("for", checkBox.id);
			label.className = "ItemData DataLabel"
			let formCheck = new CreateTag("div");

			let checkDiv = new CreateTag("div");
			checkDiv.className = "ItemSelecter";

			formCheck.style.width = "5%";
			formCheck.appendChild(checkDiv)
			label.appendChild(formCheck)

			let funds = dataItem[inventoryData[itemList[i]].baseCode].price;
			funds = Math.floor(funds / 2);
			if (!funds) {
				funds = 5
			}
			let fundiv = new CreateTag("div")
			fundiv.style.width = "10%";
			let fundData = new Text("$" + funds).p;
			fundiv.appendChild(fundData);
			label.appendChild(fundiv);
			let numberDiv = new CreateTag("div");
			numberDiv.style.width = "15%";
			let numberBox = document.createElement("input");
			numberBox.setAttribute("type", "number");
			numberBox.id = "Count" + itemList[i];
			numberBox.value = 0;
			numberBox.style.width = "100%";

			numberDiv.appendChild(numberBox);
			label.appendChild(numberDiv);
			let inputLabel = new CreateDataView('ShopSell', 0, inventoryData[itemList[i]]).div
			inputLabel.style.width = "65%";
			label.appendChild(inputLabel)
			div.appendChild(label);
			this.standBoard.appendChild(div);
		}


		let sfButtonGroup = new CreateTag('div');
		sfButtonGroup.style.display = "flex";
		let secondButton = this.createSellButton();
		secondButton.style.width = "50%";
		let sClearButton = this.createClearButton();
		sClearButton.style.width = "50%";
		sfButtonGroup.appendChild(secondButton);
		sfButtonGroup.appendChild(sClearButton);
		this.standBoard.appendChild(sfButtonGroup)
	}
	createRefineData() {
		const itemList = Object.getOwnPropertyNames(inventoryData);
		const length = itemList.length;
		itemList.sort()
		let fButtonGroup = new CreateTag('div');
		fButtonGroup.style.display = "flex";
		fButtonGroup.style.borderBottom = "1px solid black"
		let fisrtButton = this.createRefineButton();
		fisrtButton.style.width = "50%";
		let fClearButton = this.createClearButton();
		fClearButton.style.width = "50%";
		fButtonGroup.appendChild(fisrtButton);
		fButtonGroup.appendChild(fClearButton);
		this.standBoard.appendChild(fButtonGroup)

		for (let i = 0; i < length; i++) {
			if(inventoryData[itemList[i]].category != 'Other'){
			let div = new CreateTag("div");
			let Radio = CreateViewHTML.prototype.createViewRadio(itemList[i], "ItemData", itemList[i], "ItemRefine");

			div.appendChild(Radio);
			div.className = "ItemData"
			let label = new CreateTag("label");
			label.setAttribute("for", Radio.id);
			label.className = "ItemData DataLabel"
			let formCheck = new CreateTag("div");

			let checkDiv = new CreateTag("div");
			checkDiv.className = "ItemSelecter";

			formCheck.style.width = "5%";
			formCheck.appendChild(checkDiv)
			label.appendChild(formCheck)

			let funds = dataItem[inventoryData[itemList[i]].baseCode].price;
			funds = funds * 5;
			if (!funds) {
				funds = 0;
			}
			let fundiv = new CreateTag("div")
			fundiv.style.width = "10%";
			let fundData = new Text("$" + funds).p;
			fundiv.appendChild(fundData);
			label.appendChild(fundiv);

			let inputLabel = new CreateDataView('ShopRefine', 0, inventoryData[itemList[i]]).div
			inputLabel.style.width = "65%";
			label.appendChild(inputLabel)
			div.appendChild(label);
			this.standBoard.appendChild(div);
		 }
		}
		

		let sfButtonGroup = new CreateTag('div');
		sfButtonGroup.style.display = "flex";
		let secondButton = this.createRefineButton();
		secondButton.style.width = "50%";
		let sClearButton = this.createClearButton();
		sClearButton.style.width = "50%";
		sfButtonGroup.appendChild(secondButton);
		sfButtonGroup.appendChild(sClearButton);
		this.standBoard.appendChild(sfButtonGroup)
	}
}
class ShopRefine {
	constructor() {
		this.checkedItemSearch();
		this.refineItem();
	}
	checkedItemSearch() {
		const check = new DOMSearch('name', "ItemData")
		const length = check.length;
		this.data = {}
		for (let i = 0; i < length; i++) {
			if (check[i].checked) {

				this.codeData = check[i].id;

			}
		}

	}
	refineItem() {
		new refineItem(this.codeData);
		new Shop('Refine');
	}
}
class ShopInter {
	constructor(type) {
		this.checkedItemSearch();
		this.checkedPrice();
		let check = this.checkDatas(type);
		if (check) {
			switch (type) {
				case 'Buy':
					check = this.checkFunds();
					if (check) {
						this.buyItems();
					}
					break;
				case 'Sell':
					check = this.checkItem();
					if (check) {
						this.sellItems();
						this.getFunds();
					}
					break;
				case 'Refine':

					break;
			}
		}
	}
	checkedItemSearch() {
		const check = new DOMSearch('name', "ItemData")
		const length = check.length;
		this.data = {}
		for (let i = 0; i < length; i++) {
			if (check[i].checked) {
				let value = parseInt(new DOMSearch('id', "Count" + check[i].id).value)
				if (value == NaN) {
					value = 0;
				}
				this.data[check[i].id] = value;

			}
		}
		this.codeData = Object.getOwnPropertyNames(this.data);
	}
	checkedPrice() {
		let priceData = 0;
		let length = this.codeData.length;
		for (let i = 0; i < length; i++) {
			let code = this.codeData[i]
			if (code.length > 9) {
				code = code.slice(0, 9)
			}
			let price = dataItem[code].price
			if (!price) {
				price = 10;
			}
			priceData += price * this.data[this.codeData[i]];
		}
		this.price = priceData;
	}
	checkDatas(type) {
		const length = this.codeData.length;
		for (let i = 0; i < length; i++) {
			if (this.data[this.codeData[i]] < 0) {
				return false;
			}
		}
		return true;
	}
	checkFunds() {
		if (this.price != 0 && this.price < playerTeam.funds) {
			playerTeam.funds -= this.price;
			new AddLog([{ text: "Use Funds" }, { text: this.price }], "System");
			Team.prototype.refreshTeamData('funds')
			return true;
		}

		return false;
	}

	buyItems() {
		let length = this.codeData.length;
		for (let i = 0; i < length; i++) {
			const count = this.data[this.codeData[i]];
			new AddLog([{ text: "Buy " }, { text: dataItem[this.codeData[i]].name }, { text: count }], "System");
			for (let j = 0; j < count; j++) {
				new Item(this.codeData[i]);
			}
		}
	}
	unChecked() {
		const check = new DOMSearch('name', "ItemData")
		const length = check.length;
		this.buyData = {}
		for (let i = 0; i < length; i++) {
			if (check[i].checked) {
				check[i].checked = false;
			}
		}
	}
	checkItem() {
		let length = this.codeData.length;
		for (let i = 0; i < length; i++) {
			const iData = dataItem[this.codeData[i].slice(0, 9)];
			const count = inventoryData[this.codeData[i]].number;
			if (this.data[this.codeData[i]] <= 0 || this.data[this.codeData[i]] > count) {
				return false;
			}
		}
		return true;

	}
	sellItems() {
		let length = this.codeData.length;
		for (let i = 0; i < length; i++) {
			const iData = dataItem[this.codeData[i].slice(0, 9)];
			const count = inventoryData[this.codeData[i]].number;
			if (this.data[this.codeData[i]] <= count) {
				new AddLog([{ text: "Sell " }, { text: inventoryData[this.codeData[i]].name }, { text: this.data[this.codeData[i]] }], "System");

				inventoryData[this.codeData[i]].number -= this.data[this.codeData[i]]
				if (inventoryData[this.codeData[i]].number == 0) {
					delete inventoryData[this.codeData[i]]
				}

			}
		}
	}
	getFunds() {
		playerTeam.funds += Math.floor(this.price / 2);
		new AddLog([{ text: "Get Funds" }, { text: Math.floor(this.price / 2) }], "System");
		Team.prototype.refreshTeamData('funds')
		new Shop('Sell');
	}
}
class SkillButtonView {
	constructor(number) {
		this.performer = dataActiveCharacter[number]
		this.performer.active = 1;
		this.skill = playerGroup[number].skill
		this.favorite = playerGroup[number].skillFavorite
		this.favoriteLength = this.favorite.length
		let board = this.board = new DOMSearch('id', 'SkillBorder')
		this.clearBoard()
		//favorite , action , item , far away
		//action sort combat , support
		this.createFarAwayData();
		this.createTabData()
		this.createTabData('Favorite')
	}
	clearBoard() {
		this.board.innerHTML = ''
		this.board.value = this.performer.code
		this.board.style.visibility = 'visible';
		this.board.appendChild(this.createPerformerData())
		this.board.appendChild(this.createSelectTabs())
		addEventListner.prototype.addEventTabs('MenuTabs Vertical SkillBoard')

	}
	createPerformerData() {
		let div = new CreateTag('div')
		div.style.color = "White"
		let base = new CreateTag('a')
		base.innerText = 'Action Selected By '
		let name = new CreateTag('a')
		name.innerText = this.performer.name
		div.appendChild(base)
		div.appendChild(name)
		return div
	}
	createSelectTabs(type) {
		let board = new CreateTag('div')
		board.className = 'SkillSelecter'
		let tabs = new CreateTag('ul')
		tabs.className = 'MenuTabs Vertical SkillBoard'
		let containers = new CreateTag('div')
		containers.className = 'MenuContainer Vertical SkillBoard'
		const connectTab = ['Favorite', 'Action', 'Item', 'FarAway']
		for (let i = 0; i < 4; i++) {
			let tab = new CreateTag('li')
			let tabA = new CreateTag('a')
			tabA.innerText = connectTab[i]
			tab.id = connectTab[i] + 'ActionTab'
			tab.setAttribute('data-conecttab', connectTab[i] + 'Menu')
			tab.appendChild(tabA)
			tabs.appendChild(tab)
			let container = new CreateTag('div')
			container.id = connectTab[i] + 'Menu'
			container.className = 'TabDataView SkillBoard'
			container.innerText = connectTab[i]
			containers.appendChild(container)
			if (i === 1 && this.favoriteLength === 0) {
				tab.className = 'activeTab'
				container.style.display = 'block'
			}
			else if (i === 0 && this.favoriteLength !== 0) {
				tab.className = 'activeTab'
				container.style.display = 'block'
			}
		}
		board.appendChild(tabs)
		board.appendChild(containers)
		return board
	}
	createFarAwayData() {
		let container = new DOMSearch('id', 'FarAwayMenu')



		var apply = document.createElement('div');
		apply.id = "RunAwayButton"
		apply.className = 'Button'
		apply.innerText = 'RunAway'
		container.appendChild(apply)
		addEventListner.prototype.addEventBattleRunAway();

	}
	createTabData(type) {
		if (!type) {
			type = 'Action'
		}
		let container = new DOMSearch('id', type + 'Menu')
		const skill = this.createSkillData(type.toLowerCase())//Object.getOwnPropertyNames(dataSkill)//this.skill.active
		const length = skill.length
		for (let i = 0; i < length; i++) {
			let div = this.createSkillButton(skill[i])
			if (div) {
				container.appendChild(div)
			}
		}
	}
	createSkillData(type) {
		let skill = this.skill
		if (type != 'favorite') {
			skill = this.skill//Object.getOwnPropertyNames(dataSkill)
		}//this.skill.active
		else {
			skill = this.favorite
		}
		const length = skill.length
		let data = []
		for (let i = 0; i < length; i++) {
			data.push(skill[i])
		}
		return data
	}
	createSkillButton(skillCode) {
		if (skillCode.indexOf('P') != -1) {
			return 0
		}
		const skillData = dataSkill[skillCode]
		const costData = new ActionCost(this.performer, skillData, 'View').payCost
		let skillSlot = new CreateTag('div');
		skillSlot.className = 'SkillSlot'
		let skillButton = new CreateTag('div');
		skillButton.className = 'SkillButton'
		let innerText = skillData.name + '('
		const costName = Object.getOwnPropertyNames(costData)
		const length = costName.length;
		if (length != 0) {
			for (let i = 0; i < length; i++) {
				innerText += ' ' + costName[i] + ' : ' + Math.round(costData[costName[i]]) + ' '
			}
			innerText += ')'
		}
		else {
			innerText += ' None )'
		}
		skillButton.innerText = innerText
		skillButton.value = skillData.code
		skillButton.addEventListener('click',
			function () {
				const performer = this.parentNode.parentNode.parentNode.parentNode.parentNode.value
				new DOMSearch('id', 'Battle' + performer + 'Border').style.backgroundColor = 'rgb(100, 160, 100)'
			/*this.parentNode.parentNode*/new DOMSearch('id', 'SkillBorder').style.visibility = 'collapse';
				//this.parentNode.parentNode.innerHTML = ''
				dataActiveCharacter[performer].active = 0;
				if (dataActiveCharacter[performer].skillFavorite.indexOf(this.value) === -1) {
					if (dataActiveCharacter[performer].skillFavorite.length > 10) {
						let del = dataActiveCharacter[performer].skillFavorite.shift()
					}
					dataActiveCharacter[performer].skillFavorite.push(this.value)
				}
				new activeAction(this.value, 0, performer, 'first')
				new BattleData
			})
		skillButton.addEventListener('mouseover',
			function () {
				const performer = this.parentNode.parentNode.parentNode.parentNode.parentNode.value
				const check = new ActionCost(dataActiveCharacter[performer], dataSkill[this.value], 'View').fail
				if (check !== 0) {
					this.style.backgroundColor = 'red'
				}
				else {
					this.style.backgroundColor = 'black'
				}
			})
		skillSlot.appendChild(skillButton)
		return skillSlot
	}
}

class HireList {
	constructor() {
		this.listDOM = new DOMSearch('id', "HireList")
		this.listData = hireTimer;
		this.clearList();
		this.createListAll();
	}
	clearList() {
		this.listDOM.innerHTML = "";
	}
	createListAll() {
		const name = Object.getOwnPropertyNames(this.listData)
		const length = name.length;
		for (let i = 0; i < length; i++) {
			let div = this.createData(this.listData[name[i]], i);
			this.listDOM.appendChild(div);
		}
	}
	createData(data, count) {

		let partDiv = new CreateTag('div');
		partDiv.style.display = "flex"
		partDiv.value = data.code;
		partDiv.id = "Hire" + data.code;
		let numberDiv = new CreateTag('div');
		let numberText = new Text(count + 1).p;
		numberDiv.style.width = "30px"
		numberDiv.className = "HireNumber"
		numberDiv.appendChild(numberText);
		let name = new CreateTag("div");
		name.innerText = data.hireName;
		name.className = "HireNameText"
		let timeDiv = new CreateTag("div");
		let time = this.calculrateTimeText(data.time);
		let timeTxt = new Text(time).p;
		timeTxt.id = "HireTime" + data.code
		timeDiv.className = "HireTimer"
		timeDiv.appendChild(timeTxt);

		partDiv.appendChild(numberDiv);
		partDiv.appendChild(name);
		partDiv.appendChild(timeDiv);

		return partDiv
	}
	calculrateTimeText(time) {
		let txt = '';
		let hour = Math.floor(time / 3600);
		let minut = Math.floor((time % 3600) / 60);
		let second = time % 60
		if (hour.length < 3) {
			hour = '0' + hour
		}
		if (minut.length < 3) {
			minut = '0' + minut
		}
		if (second.length < 3) {
			second = '0' + second
		}
		txt = hour + " : " + minut + " : " + second;
		return txt;
	}
}


class CharacterUseItem {
	constructor() {
		this.div = new CreateTag('div');
		this.div.id = "CharacterUseItem"
		let option = new CreateDataView('CharacterUseItem', 0).div
		if (option.children.length < 1) {
			this.div = false;
			return false;
		}
		option.id = 'UseItemValue'
		let button = this.createApplyButton();
		this.div.appendChild(option);
		this.div.appendChild(button);


	}
	createApplyButton() {
		var div = new CreateTag('div');
		div.className = 'UseItemButton Button'
		div.innerText = 'Apply'
		return div
	}
}
class DOMSearch {
	constructor(type, target) {
		let returnDOM;
		this.check = false;
		switch (type) {
			case 'id':
				returnDOM = document.getElementById(target)
				break;
			case 'class':
				returnDOM = document.getElementsByClassName(target)
				break;
			case 'name':
				returnDOM = document.getElementsByName(target)
				break;
		}
		if (returnDOM != null) {
			this.check = true;
		}
		return returnDOM;
	}
}

class ImageDiv {
	constructor(type, code) {
		this.div = new CreateTag('img');
		this.searchData(type, code);
		if (!this.data.src) {
			this.defalutImage(type)
		}
		else {
			this.src = this.data.src
		}
		this.srcCreate();
		this.div.src = this.src;
	}
	searchData(type, code) {
		switch (type) {
			case 'Item':
				this.data = dataItem[code];
				break;
			case 'Skill':
				this.data = dataSkill[code]
				break;
		}
	}
	defalutImage(type) {
		let dType;
		switch (type) {
			case 'Item':
				dType = this.data.type
				switch (dType) {
					case 'Sword':
						this.src = 'we_sword001.png'
						break;
					case 'Shield':
						this.src = 'shield_002o.png'
						break;
					default:
						this.src = 'we_sword001.png'
						break;
				}
				break;
			case 'Skill':
				dType = this.data.skillType
				switch (dType) {
					case 'Combat':
						this.src = 'skill_042.png'
						break;
					case 'Support':
						this.src = 'skill_013a.png'
						break;
					default:
						this.src = 'skill_042.png'
						break;
				}
				break;
		}
	}
	srcCreate() {
		this.src = 'Image\\icon\\' + this.src;
	}
}