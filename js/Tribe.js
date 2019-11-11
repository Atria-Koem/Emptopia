class Tribe{
	constructor(performer){
        this.performer = performer
        
		this.checkRebirthCount()
		this.checkRebirthStack()
		this.checkTribeCode()
		performer.tribe = this.checkTribe
    }
    callPerformer(){

    }
	checkRebirthCount(){
		let count = Math.floor(this.performer.rebirth.count / 10)
		if(count > 9){
			count = 9
		}
		this.rebirthCount = count
	}
	checkRebirthStack(){
		const array = this.performer.rebirth.stack
		const length = array.length
		let stack = ''
		for( let i = length - 1 ; i > -1 ; i--){
			stack += array[i]
		}
		this.rebirthStack = stack
	}
	checkTribeCode(){
		const tribeData = Object.getOwnPropertyNames(dataTribe)
		const count = this.rebirthCount
		const stackLength = this.rebirthStack.length
		let stackValue = 0
        let countValue = 0
        let check;
        let code;
		do{
			 code  = this.createTribeCode(stackValue,countValue)
			stackValue += 1
			if(stackValue === stackLength){
				stackValue = 0;
				countValue += 1
			}
			if(countValue === count && stackValue === stackLength){
				code = 'T0'
			}
			check = tribeData.indexOf(code)
        }while( check == -1 )
        console.log(code);
			this.checkTribe = code
	}
	createTribeCode(stackValue,countValue){
		const stack = this.rebirthStack
		const count = this.rebirthCount
		let code = 'T'
		let countCode = count - countValue
		let stackCode = stack.slice(0,stack.length - stackValue)
		code += countCode + stackCode
		return code
		
	}
	selectTribePassive(tribeCode){
		let passiveArray = []
		const tribeData = dataTribe[tribeCode].passive
		if(!tribeData){
			return
		}
		const tribePassive = tribeData.skillCode
		if(!tribePassive){
			return
		}
		const length = tribePassive.length
		const max = tribeData.max
		for( let i = 0 ; i < max ; i++){
			passiveArray.push(tribePassive[Math.floor(Math.random() * length)])
		}
		if(this.performer){
			for(let i = 0 ; i < max ; i ++){
				this.performer.push(passiveArray[i])
			}
			return
		}
		return passiveArray
	}
}
class Rebirth{
	constructor(type,rType,code){
		if(type == -1){
			this.createDefaultData()
			return;
		}

		this.loadRebirthData(code);
		if(type =="Level"){
			const check = this.checkRebirhtLevel(code)
			if(!check){
				return;
			}
		}
		this.rebirthTypeInput(rType);
		this.saveStateRebirth(code);
		new Tribe(playerTeam.character[code]);
		this.updateState(code)
		this.updataSkill(code)
	}
	checkRebirhtLevel(code){
		const level =playerTeam.character[code].level;
		const rebirhtLevel = 100 + Math.round(Math.pow(this.count,0.9)*1.5);
		if(level >= rebirhtLevel){
			return true;
		}
		else{
			return false;
		}
	}
	loadRebirthData(code){
		const data = playerTeam.character[code].rebirth
		this.count = data.count;
		this.stack = data.stack;
		this.state = data.state;
	}
    createDefaultData(){
        this.count = 0;
        this.stack = [];
        
    }
	createRebirthObject(){
		let rebirth = {
			count : 0,
			stack : []
		}
		return rebirth
    }
    rebirthTypeInput(type){
        this.count++;
        if(this.stack.length >= 10){
            this.stack.pop();
        }
        this.stack.unshift(type);
	}
	saveStateRebirth(code){
		const baseState = playerTeam.character[code].baseState
		const stateName = Object.getOwnPropertyNames(baseState);
		const length = stateName.length;
		this.state = {	}
		for(let i =0 ; i < length ; i++){
			if(!this.state[stateName[i]]){
				this.state[stateName[i]]=0;
			}
			this.state[stateName[i]] += Math.floor(baseState[stateName[i]] / 22);
		}

	}
	updateState(code){
		let character =  playerTeam.character[code];
		character.createBaseData(1);
	}
	updataSkill(code){
		playerTeam.character[code].skill = ['KA100000']
		const tribePassive = Tribe.prototype.selectTribePassive(playerTeam.character[code].tribe)
		if(tribePassive){
			for( let i = 0 ; i < tribePassive.length ; i ++){
			playerTeam.character[code].skill.push(tribePassive[i])
		}}
	}
}