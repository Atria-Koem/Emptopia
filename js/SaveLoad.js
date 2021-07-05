

function saveItem() {
	if (localStorage.Item) {
		localStorage.removeItem("Item")
	}
	const data = Object.getOwnPropertyNames(inventoryData);
	const dataLength = data.length;
	let inputText = ''
	for (let i = 0; i < dataLength; i++) {
		inputText += data[i] + "%" + inventoryData[data[i]].number + "^";
	}



	localStorage.setItem("Item", inputText);
}
function loadItem() {
	const data = localStorage.Item;
	if (!data) {
		console.log("NOT DATA");
		return
	}
	const spData = data.split("^");
	const spLength = spData.length;
	for (let i = 0; i < spLength - 1; i++) {
		const cdData = spData[i].split("%");
		const code = cdData[0];
		let count = parseInt(cdData[1]);
		if (count == NaN) {
			count = 1;
		}
		for (let j = 0; j < count; j++) {
			new Item(code, 0, 'load');
		}
	}
}

function saveCharacter(data) {
	const dataNames = Object.getOwnPropertyNames(data);
	let saveData = "";
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
	saveData += data.protectType[0] + "%" + data.protectType[1] + "^"
	let originState = ""
	let expState = ""
	let rebirthState = ""
	for (let i = 0; i < nameState.length; i++) {
		if (i != 0) {
			originState += "%"
			expState += "%"
		}
		originState += data.baseState[nameState[i]]
		expState += data.stateExp[nameState[i]]
		if (data.rebirth.state) {
			if (i != 0) {
				rebirthState += "/"
			}
			rebirthState += data.rebirth.state[nameState[i]]
		}
	}
	saveData += originState + "^"
	saveData += expState + "^"
	let skill = data.skill[0]
	for (let i = 1; i < data.skill.length; i++) {
		skill += "%" + data.skill[i]
	}

	saveData += skill + "^"
	let rebirthData = data.rebirth.count + "%"
	for (let i = 0; i < data.rebirth.stack.length; i++) {
		if (i != 0) {
			rebirthData += "/"
		}
		rebirthData += data.rebirth.stack[i]
	}
	rebirthData += "%" + rebirthState
	saveData += rebirthData + "^";
	let equipData = ""
	const equipName = Object.getOwnPropertyNames(data.equip)
	for (let i = 0; i < equipName.length; i++) {
		if (data.equip[equipName[i]].code) {
			equipData += data.equip[equipName[i]].code
		}
		equipData += "%"
	}
	saveData += equipData + "^"
	let partternData = ""
	for (let i = 0; i < data.parttern.length; i++) {
		if (i != 0) {
			partternData += "%"
		}
		partternData += data.parttern[i][0] + "/" + data.parttern[i][1] + "/" + data.parttern[i][2]
	}


	saveData += partternData + "^"
	saveData += data.bonusState + "^"
	saveData += data.skillPoint + "^"
	saveData += data.activeType
	localStorage.setItem(data.code, saveData);
}
function loadCharact() {
	let storageData = Object.getOwnPropertyNames(localStorage)
	for (let i = 0; i < storageData.length; i++) {
		if (storageData[i].indexOf("P") == 0) {
			playerTeam.character[storageData[i]] = new Player(localStorage[storageData[i]], "Load")
		}
	}
} 
