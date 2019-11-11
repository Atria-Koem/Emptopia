class CreateSpec {
    constructor(type) {
        this.seed = this.createSeed()
        this.type = type;
    }
    createSeed() {
        let date = new Date();
        let dateMs = date.getMilliseconds();
        let dateS = date.getSeconds();
        let seed = Math.abs((Math.ceil(Math.random() * 9516) % (dateMs - 500)) % (dateS - 30));
        if ((!seed || seed == NaN) && seed != 0) {
            seed = 0
        }
        return seed;
    }
    createTimeSeed(type) {
        let time = new Date();
        let milliSeconds = time.getMilliseconds();
        let seconds = time.getSeconds();
        return [seconds, milliSeconds]
    }
    createSeedValue(target) {
        let time = this.createTimeSeed();
        let milliSeconds = time[1]
        let seconds = time[0]
        let seed = Math.abs(Math.sqrt(Math.pow(Math.ceil(milliSeconds * 0.5), Math.random() * 76 - 38) + Math.abs(Math.exp(seconds - 30))) + (Math.pow((seconds + 3), 2) + milliSeconds))
        let value = 0;
        value = (Math.ceil((Math.pow(seed, 1 / 6) % (Math.random() * 1600) + 400) * Math.abs(seconds - 30) / 30)) % (Math.floor(Math.random() * 100 + 1681) + Math.round(Math.random() * (seed % 400))) + 1
        let sState = (seconds * 5) % 12
        let sUpState = -1;
        let sUpValue = (seconds * 3) % 10;
        sUpValue = (Math.floor(sUpValue / 5) === 0) ? -(sUpValue % 5) : sUpValue % 5;
        let sValue = { 0: -1, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: Math.floor(Math.random() * 10), 7: 5, 8: 6, 9: 7, 10: 8, 11: 9 }
        sUpState = sValue[sState]
        if (sUpState === target) {
            value += sUpValue
        }
        let msPercent = Math.floor(((milliSeconds % 33) / 3) - 6 * 100) / 10
        let msState = Math.floor((milliSeconds * Math.PI / Math.E) % 30)
        switch (Math.ceil(msState / 10)) {
            case 0:
                msPercent = 0;
                msState = -1
                break;
            case 1:
                msPercent = -(msPercent)
                msState = msState % 10
                break;
            case 2:
                msPercent = Math.floor(Math.random() * msPercent * 2 - msPercent)
                msState = msState % 10
                break;
            case 3:
                msPercent = msPercent
                msState = msState % 10
                break;

        }
        if (msState === target) {
            value = Math.floor(value * (100 + msPercent) / 100)
        }
        if (value > 7320) {
            value = 7320
        }
        else if (value === NaN || !value || value === 0) {
            value = 10
        }
        else if (value < 0) {
            value = Math.ceil(Math.abs(value) * 0.6) + 10
        }
        return value
    }
    createState(type, seed, level, base, color) {
        let state = {
            str: 0, vit: 0, int: 0, wis: 0, dis: 0, res: 0,
            dex: 0, agi: 0, spd: 0, luk: 0
        };
        let name = Object.getOwnPropertyNames(state);
        let length = name.length
        if (type === 'player') {
            for (let i = 0; i < length; i++) {
                let value = Math.round(this.createSeedValue(i) * (1 + seed / 10))
                if (value === NaN || !value || value < 1) {
                    value = 1
                }
                state[name[i]] = value
            }
        }
        if (type === 'enemy') {
            for (let i = 0; i < length; i++) {
                state[name[i]] = base[name[i]] *  (level + Math.pow(level / 10,1.1)) + seed
            }
        }
        return state
    }
    createOption(state) {
        let option = {
        
        }
        option = new Option(0, 0, option, state);
        return option
    }
    createElement(base) {
        let element = {}
        for (let i = 0 ; i < 6; i++) {
            if (!element[nameOptionElement[i]]) {
                element[nameOptionElement[i]] = {}
            }
            for (let j = 0; i < 8; j++) {
                element[nameOptionElement[i]][nameElement[i]] = 0;
            }
        }
        element = calculrateElement(0, 0, element, base);
        return element
    }
    createBonusState() {
        let seed = Math.abs(this.seed)
        if (seed === 0) {
            seed = 1
        }
        let time = new Date();
        let milliSeconds = time.getMilliseconds();
        let seconds = time.getSeconds();
        let seedT = (seconds % 30 + milliSeconds % 120) % 72
        let bonus = Math.round(seedT / (seed))
        if ((bonus == NaN || !bonus) && bonus != 0) {
            bonus = 144
        }
        return bonus

    }
    extendLinkOption(type, state, option, health, array) {
        let extend = {}
        if (health) {
            let name = Object.getOwnPropertyNames(health);
            let length = name.length
            switch (type) {
                case 'extend':
                    extend.health = {
                        mHp: health.mHp, mSp: health.mSp, mMp: health.mMp,
                        hp: health.hp, sp: health.sp, mp: health.mp
                    }
                    break;
                case 'copy':
                    extend = {
                        mHp: health.mHp, mSp: health.mSp, mMp: health.mMp,
                        hp: health.hp, sp: health.sp, mp: health.mp
                    }
                    break;
            }
        }
        if (state) {
            let name = Object.getOwnPropertyNames(state)
            let length = name.length
            switch (type) {
                case 'extend':

                    extend.state = {}
                    for (let i = 0; i < length; i++) {
                        extend.state[name[i]] = state[name[i]]
                    }
                    break;
                case 'copy':
                    for (let i = 0; i < length; i++) {
                        extend[name[i]] = state[name[i]]
                    }
                    break;
            }
        }
        if (option) {
            let name = Object.getOwnPropertyNames(option)
            let length = name.length
            switch (type) {
                case 'extend':
                    extend.option = {}
                    for (let i = 0; i < length ; i++) {
                        extend.option[name[i]] = option[name[i]]
                    }
                    break;
                case 'copy':
                    for (let i = 0; i < length ; i++) {
                        extend[name[i]] = option[name[i]]
                    }
                    break;
            }
        }
        if (array) {
            extend = []
            const length = array.length;
            for (let i = 0 ; i < length ; i++) {
                extend[i] = array[i]
            }
        }
        return extend
    }
}
class Enemy extends CreateSpec{
	constructor(code,level,count,ally,type){
		super('enemy');
		var enemyData = dataMonster[code];
		this.level = level;
		this.name = enemyData.name + '(' + count+  ')';
		this.enemyCode = code
		this.exp = this.createExp(enemyData.exp);
		this.job = enemyData.job
		this.tribe = enemyData.tribe
		var baseState = this.createState('enemy',this.seed, level,enemyData.state)
		this.baseState = baseState
		var state = new State(0,this.baseState,this.job,this.tribe) 
		var health = new Health('enemy',state,0,enemyData.health,this.level);
		var option = this.createOption(state);
		this.battle = this.extendLinkOption('extend',state,option,health);
		this.origin = this.extendLinkOption('extend',state,option,health);
		this.add = {option : enemyData.option}
		this.funds = enemyData.funds
		this.parttern = this.createParttern(enemyData.parttern)
		this.skill = (!enemyData.skill) ? [] : enemyData.skill
		this.dropTable = enemyData.dropTable
		this.protectType = enemyData.protectType		
		if(!enemyData.coordinates){
			var coordinates = (Math.round(Math.random())) ? 'Back' : 'Front'
		}
		else{
			var coordinates = enemyData.coordinates
		}
		this.coordinates = coordinates
		this.type = (!type) ? '' : type
		this.ally = (!ally) ? 'enemy' : ally
		this.code = new CharacterCode(this.ally,this.type).code
	}
	createExp(exp){
		var level = this.level
		var name = Object.getOwnPropertyNames(exp)
		var returnValue = {}
		for(var i = 0, length = name.length; i < length; i++){
			returnValue[name[i]] = Math.round(exp[name[i]] * (1 + (level - 1) / 10) + Math.pow(level, 3 / 2) / 10)
		}
		return returnValue
	}
	createParttern(parttern){
		var returnParttern = []
		for(var i = 0 ,length = parttern.length ; i < length ; i++){
			returnParttern[i] = (parttern[i].slice(0))
		}
		return returnParttern
	}	
}
class CharacterCode{
	constructor(ally,type){
		var code = this.createAllyCode(ally)
		var length = this.createLengthCode(code)
		var random = this.createRandomCode(code,length)
		this.code = code + length + random 
		if(!type){
			var typeCode = this.createTypeCode(type)
			this.code += typeCode
		}
	}
	createAllyCode(ally){
		var code = ''
		switch(ally){
			case 'Enemy' :
			case 'enemy' :
			case 'E' :
				code = 'E'
				break;
			case 'Player' :
			case 'player' :
			case 'P' :
				code = 'P'
				break;
							 }
		return code
	}
	createLengthCode(code){
		if(code === 'E'){
			var length = Object.getOwnPropertyNames(enemyGroup).length % 10
		}
		else if(code === 'P'){
			var length = Object.getOwnPropertyNames(playerTeam.character).length % 10
		}
		return length
	}
	createRandomCode(ally,length){
		do{
			var randomCode = Math.floor(Math.random() * 100000)
			while(randomCode.toString().length != 5){
				randomCode = '0' + randomCode
			}
			var code = ally + length + randomCode
			var check = this.checkCode(code)
			}while(check  != -1)
				return randomCode
	}
	checkCode(code){
		if(code.indexOf('E') != -1){
			var check = Object.getOwnPropertyNames(enemyGroup).indexOf(code)
			}
		else if(code.indexOf('P') != -1){
			var check = Object.getOwnPropertyNames(playerTeam.character).indexOf(code)
			}
		return check
	}
	createTypeCode(type){
		var code = ''
		switch(type){
			case 'summon' :
			case 'Summon' :
			case 'S' :
				code = 'S'
				break;
			default :
				break;
							 }
		return code
	}
}
class Player extends CreateSpec{
	constructor(name,grade){
		super('player');
		if(!name){
			this.name = dataName[Math.floor(Math.random() * dataName.length)]
		}
		else{
			this.name = name
		}
		var level = 1;
		this.level = level;
		const tribe = Object.getOwnPropertyNames(dataTribe)
		const selectTribe = dataTribe[tribe[Math.floor(Math.random() * tribe.length)]].code
		const job = Object.getOwnPropertyNames(dataJob)
		const selectJob = dataJob[job[Math.floor(Math.random() * job.length)]].code
		this.job = selectJob
		this.tribe = selectTribe
		this.rebirth = new Rebirth(-1);
		this.createBaseData(level);
		this.stateExp = this.createStateExp()
		this.levelExp = LevelUp.prototype.calculrateLevelExp(this.level)
		this.add = {}
		var coordinates = (Math.round(Math.random())) ? 'Back' : 'Front'
		this.coordinates = coordinates
		this.ally = 'player'
		this.selected = 0;
		this.parttern = [['OT00000',0,'KA100000']]
		this.status = 'Live'
		this.skill = ['KA100000']
		const tribePassive = Tribe.prototype.selectTribePassive(selectTribe)
		if(tribePassive){
		for( let i = 0 ; i < tribePassive.length ; i ++){
			this.skill.push(tribePassive[i])
		}}
		this.skillFavorite = []

		this.code = new CharacterCode(this.ally).code
		this.protectType = ['HP Percent',50]
		this.equip = {
			LeftHand : {},
			RigthHand : {},
			Body : {},
			Head : {},
			Other : {}
		}
		this.bonusState = this.createBonusState()
		this.skillPoint = Math.round(this.bonusState / 5)
		this.addPlayerDesk();
	}
	createBaseData(level){
		var baseState = this.createState('player',this.seed, level)
		this.baseState = baseState
		this.checkRebirthData();
		var state = new State(0,this.baseState,this.job,this.tribe)
		var health = new Health('player',state);
		var option = this.createOption(state);
		this.battle = this.extendLinkOption('extend',state,option,health);
		this.origin = this.extendLinkOption('extend',state,option,health);
	}
	checkRebirthData(){
		if(this.rebirth.state){
			const stateName = Object.getOwnPropertyNames(this.baseState);
			const length = stateName.length;
			for(let i =0 ; i < length ; i++){
				
				this.baseState[stateName[i]] += this.rebirth.state[stateName[i]]
			}
		}
	}
	createStateExp(number){
		const state = this.baseState
		let exp = {}
		const level = this.level
		const name = Object.getOwnPropertyNames(state)
			for(var i = 0, length = name.length; i < length; i++){
				exp[name[i]] = LevelUp.prototype.calculrateStateExp(0,level,state[name[i]])
			}
		return exp
	}
	addPlayerDesk(){
		var desk = document.getElementById('CharacterList');
		var newCharacter = new CreateDataView('Character',0,this).div
		desk.appendChild(newCharacter);
	}
}
class BattleSpec{
	constructor(performer,type){
		this.performer = performer
		this.addSpec = {}
		var stack = ['equip','passive']
		if(!type){
			this.refreshBattleBaseSpec()
			this.summaryPassiveSkill('first')
			this.checkEquipOption()
			this.summaryAddSpec()
			this.summaryPassiveSkill('last')
		}
		else{
			if(type == 'passive'){
			this.summaryPassiveSkill('first')
			this.summaryPassiveSkill('last')
			}
		}
	}
	refreshBattleBaseSpec(type){
		if(!type || type === 'all'){
			var origin = this.performer.origin
			var originName = Object.getOwnPropertyNames(origin)
			var originLength = originName.length
			for(var i = 0 ; i < originLength; i++){
				var refresh = origin[originName[i]]
				this.performer.battle[originName[i]] = {}
				var refreshName = Object.getOwnPropertyNames(refresh)
				var refreshLength = refreshName.length
				for(var j = 0 ; j < refreshLength; j++){
					if(!this.performer.battle[originName[i]][refreshName[j]] ){
						this.performer.battle[originName[i]][refreshName[j]]  = 0
					}
					this.performer.battle[originName[i]][refreshName[j]] = refresh[refreshName[j]] * 1
				}
			}
		}
		else{
			var origin = this.performer.origin[type]
			var originName = Object.getOwnPropertyNames(origin)
			var originLength = originName.length
			this.performer.battle[type] = {}
			for(var i = 0 ; i < originLength; i++){
				if(!this.performer.battle[type][originName[i]]){
					this.performer.battle[type][originName[i]]  = 0
				}
				this.performer.battle[type][originName[i]] = origin[originName[j]] * 1
			}
		}
	}
	summaryAddSpec(){
		var addSpec = this.addSpec
		var addSpecName = Object.getOwnPropertyNames(addSpec)
		var addSpecLength = addSpecName.length
		for( var i = 0 ; i < addSpecLength ; i ++){
			var specValue = addSpec[addSpecName[i]]
			var specValueName = Object.getOwnPropertyNames(specValue)
			var specValueLength = specValueName.length
			for( var j = 0 ; j < specValueLength ; j++){
				if(!this.performer.battle[addSpecName[i]][specValueName[j]]){
					this.performer.battle[addSpecName[i]][specValueName[j]] = 0
				}
				this.performer.battle[addSpecName[i]][specValueName[j]] += specValue[specValueName[j]]
			}
		}
	}
	checkEquipOption(){
		var equip = this.performer.equip
		var equipSlot = Object.getOwnPropertyNames(equip)
		var equipLength = equipSlot.length
		for( var i = 0 ; i < equipLength ; i++){
			var item = equip[equipSlot[i]].spec
			if(item){
				var itemOption = Object.getOwnPropertyNames(item)
				var itemOptionLength = itemOption.length
				if(itemOptionLength != 0){
					for( var j = 0 ; j < itemOptionLength ; j++){
						this[itemOption[j] + 'CalculrateSpec'](item[itemOption[j]])
					}
				}
			}
		}
	}
	healthCalculrateSpec(data){
		if(!this.addSpec.health){
			this.addSpec.health = {}
		}
		var health = this.addSpec.health
		var name = Object.getOwnPropertyNames(data)
		var length = name.length
		for( var i = 0 ; i < length ; i ++){
			var target = health[name[i]].slice(0,2)
			if(!this.addSpec.health[target]){
				this.addSpec.health[target] = 0
			}
			if(health[name[i]].indexOf('Percent') === -1){
				var addValue = health[name[i]]
			}
			else{
				var addValue = Math.round(this.performer.origin.health[target] * (health[name[i]] / 100))			
			}
			this.addSpec.health[target] += addValue
		}
	}
	stateCalculrateSpec(data){
		if(!this.addSpec.state){
			this.addSpec.state = {}
		}
		var state = this.addSpec.state
		var name = Object.getOwnPropertyNames(data)
		var length = name.length
		for( var i = 0 ; i < length ; i ++){
			if(!this.addSpec.state[name[i]]){
				this.addSpec.state[name[i]] = 0
			}
			this.addSpec.state[name[i]] += data[name[i]]
		}
	}
	optionCalculrateSpec(data){
		if(!this.addSpec.option){
			this.addSpec.option = {}
		}
		var option = this.addSpec.option
		var name = Object.getOwnPropertyNames(data)
		var length = name.length
		for( var i = 0 ; i < length ; i ++){
			if(!this.addSpec.option[name[i]]){
				this.addSpec.option[name[i]] = 0
			}
			this.addSpec.option[name[i]] += data[name[i]]
		}
	}
	addCalculrateSpec(data){
		if(!this.addSpec.option){
			this.addSpec.option = {}
		}
		let option = this.addSpec.option
		const name = Object.getOwnPropertyNames(data)
		const length = name.length;
		for( let i = 0 ; i < length ; i++){
			if(!this.addSpec.option[name[i]]){
				this.addSpec.option[name[i]] = 0
			}
			this.addSpec.option[name[i]] += data[name[i]]
		}
	}
	summaryPassiveSkill(timing){
		let passive = []
		const skill = this.performer.skill
		const skillLength = skill.length
		for( let i = 0 ; i < skillLength ; i++){
			if(skill[i].indexOf('P') != -1){
				passive.push(skill[i])
			}
		}
		const length = passive.length
		for(let i = 0 ; i< length ; i++){
			const nowPassive = dataSkill[passive[i]].passiveEffect[timing]
			if(nowPassive){
				new PassiveEffect(this.performer.code,passive[i],timing)
			}
		}
	}
}
class State{ 
	constructor(performer,baseState,job,tribe,type){
		if(type || type === 0){
			this.job = dataJob[performer.job]
			this.tribe = dataTribe[performer.tribe]
			this.bonus = this.summaryBonus(type)
			this.state = this.calculrateState(baseState)
			return this.state
		}
		else if(performer){
		this.baseState = performer.baseState
		this.job = dataJob[performer.job]
		this.tribe = dataTribe[performer.tribe]
		this.bonus = this.summaryBonus()
		this.state = this.calculrateState()
		performer.origin.state = this.state
		}
		else{
		this.baseState = baseState
		this.job = dataJob[job]
		this.tribe = dataTribe[tribe]
		this.bonus = this.summaryBonus()
		this.state = this.calculrateState()
			return this.state
		}
	}
	summaryBonus(number){
		if(!number && number != 0){
		var bonus = {}
		var stateName = Object.getOwnPropertyNames(this.baseState)
		var length = stateName.length
		var jobBonus = this.job.state
		var tribeBonus = this.tribe.state
		for(var i = 0 ; i < length ; i ++){
			if(!jobBonus[stateName[i]] && jobBonus[stateName[i]] != 0){
				var bonusJ = 100
			}
			else{
				var bonusJ = jobBonus[stateName[i]]
				}
			if(!tribeBonus[stateName[i]] && tribeBonus[stateName[i]] != 0){
				var bonusT = 100
			}
			else{
				var bonusT = tribeBonus[stateName[i]] 
				}
			bonus[stateName[i]] = (bonusJ  * bonusT ) / 100
		}
		}
		else{
			var jobBonus = this.job.state
		var tribeBonus = this.tribe.state
			if(!jobBonus[nameState[number]] && jobBonus[nameState[number]] != 0){
				var bonusJ = 100
			}
			else{
				var bonusJ = jobBonus[nameState[number]]
				}
			if(!tribeBonus[nameState[number]] && tribeBonus[nameState[number]] != 0){
				var bonusT = 100
			}
			else{
				var bonusT = tribeBonus[nameState[number]] 
				}
			bonus = (bonusJ  * bonusT ) / 100
		}
		return bonus
	}
	calculrateState(base){
		if(!base){
		var state = {}
		var stateName = Object.getOwnPropertyNames(this.baseState)
		var length = stateName.length
		for(var i = 0 ; i < length ; i++){
			state[stateName[i]] = Math.round(this.bonus[stateName[i]] * this.baseState[stateName[i]] / 100)
		}
		}
		else{
			state = Math.round(this.bonus * base / 100)
		}
		return state
	}
	linkBattleState(performer){
		var origin = performer.origin.state
		var stateName = Object.getOwnPropertyNames(this.baseState)
		var length = stateName.length
		for(var i = 0 ; i < length ; i++){
			performer.battle.state[stateName[i]] = origin[stateName[i]] * 1
		}
	}
}

class Job{
	constructor(performer){
		
	}
	checkJobState(){
		
	}
}
class Health{
	constructor(type , state , color , base , level , subType){
		let hp = this.calculrateHp(state.vit,state.wis,state.str,state.int)
		let mp = this.calculrateMp(state.wis,state.int)
		let sp = this.calculrateSp(state.vit,state.str)
		this.mHp = hp		
		this.mSp = sp
		this.mMp = mp
		this.hp = hp
		this.sp = sp
		this.mp = mp

		if(type ==='enemy'){
    this.addBaseValue(base,level)
			}
	}
	calculrateHp(vit,wis,str,int){
		let valueVW = Math.pow( (vit + wis) * 7 , 2.73 / 3) 
		let valueSI = Math.pow( (str + int) * Math.sqrt(5) , 1.73 / 3)
		let hp = Math.floor(valueVW + valueSI)
		if(!hp){
			hp = 1
		}
		return hp
	}
	calculrateMp(wis,int){
		let mp = Math.floor(Math.pow( wis * 17 + int * Math.PI , 1.73 / Math.PI))
		return mp
	}
	calculrateSp(vit,str){
		let sp = Math.floor(Math.pow( vit * 17 + str * Math.PI , 1.73 / Math.PI))
		return sp
	}
	addBaseValue(base,level){
		if(!level){
			level = 1
		}
		else{
			level = 1 + Math.pow(level / 5,1.3 / 3)
		}
		let baseName = Object.getOwnPropertyNames(base)
		let length = baseName.length
		for(let i = 0 ; i < length; i++){
			let maxName =  'm' + baseName[i].slice(0,1).toUpperCase() + 'p'
			this[baseName[i]] += Math.floor(base[baseName[i]] * Math.pow(level * 7, 2.73 / 3))
			this[maxName] += Math.floor(base[baseName[i]] * Math.pow(level * 7, 2.73 / 3))
		}
	}
}
class Option{
	constructor(performer,situation,option,state,target){
		this.performer = performer
		if(!option && !state){
			this.selectValueObject(situation)
		}
		else{
			this.option = option
			this.state = state
		}
		if(!target){
			target = 'all'
		}
		else{
		}
		this.calculrateAtk(target)
		this.calculrateRes(target)
		this.calculrateRate(target)
		this.calculrateRapid(target)
		if(target != 'all'){
			return
		}
		else if(situation === 'inBattle'){
			this.battleOption = performer.option.battle//{}
			this.summaryBattleOption()
			performer.option.battle = this.battleOption
		}
		else if(situation === 'battle' && performer.enemyCode){
			this.base = (!dataMonster[performer.enemyCode].option) ? {} : dataMonster[performer.enemyCode].option
			this.change = {}
			this.battleOption = {}
			this.summaryBattleOption()
			performer.battle.option = this.battleOption
		}
		else{
			return this.option
		}
	}
	valueTan(value){
		var checkValue = value;
		var radian = Math.PI / 180
		if(checkValue >= 57.289961630759424687278147537113){
			var alpha = 18;
		}
		else{
			var alpha = 0;
		}
		for(; alpha < 18; alpha++){
			if(checkValue < Math.tan(radian * (alpha * 5 + 5))){
				break;
			}
		}
		if(alpha === 18){
			var beta = 89
			for(var i = 0 ; beta < 90 ; i ++){
				var addValue = 0.9 * Math.pow(0.1,i)
				var down = Math.tan(radian*beta)
				var up = Math.tan(radian*(beta+addValue))
				if(checkValue >=down && checkValue < up){
					var returnValue = beta + Math.round((checkValue - down)/(up - down) * 100000 * addValue) / 100000
					return returnValue
				}
				beta += addValue
			}
			if(beta >= 90){
				var returnValue = 90
				return returnValue
			}
		}
		else{
			for(var i = 0 ; i < 5; i++){
				var beta = alpha * 5 + i 
				var down = Math.tan(radian*beta);
				var up = Math.tan(radian*(beta+1))
				if(checkValue >=down && checkValue < up){
					var returnValue = beta + Math.round((checkValue - down)/(up - down) * 100000) / 100000
					return returnValue
				}
			}
		}
	}
	valueState(state){
    if(state <= 14640 ){
      var main = Math.sqrt(Math.pow(Math.pow(state,Math.E) / 250,Math.PI))
      var value =  Math.pow(Math.sqrt(Math.pow(Math.pow(100,Math.E) / 250,Math.PI)),0.3685) / (Math.pow(11 - Math.sqrt(Math.sqrt(state)),3))
			var divValue = this.valueTan(value) / 89.99999999999999 * 89;
      }
    else{
			var stateExCount = Math.floor(state / 14641);
			var stateOver = Math.floor(state % 14641);
      var main = Math.sqrt(Math.pow(Math.pow(state,Math.E) / 250,Math.PI))
      //var firstValue = Math.pow(Math.sqrt(Math.pow(Math.pow(100,Math.E) / 250,Math.PI)),0.3685) / (Math.pow(11 - 10.999812166488725561794533735179,3))
			var divValue = 89;
			for( var i = 0 ; i < stateExCount ; i ++){
				if( i === stateExCount - 1){
				var addValue =  Math.pow(Math.sqrt(Math.pow(Math.pow(100,Math.E) / 250,Math.PI)),0.3685) / (Math.pow(11 - Math.sqrt(Math.sqrt(stateOver)),3))
				var add = this.valueTan(addValue) / 89.99999999999999 *  0.9 * Math.pow(0.1,i)
				divValue += add
				}
				else{
				divValue += 0.9 * Math.pow(0.1,i)
				}
			}
    }
    
    var calculrateValue = Math.ceil(Math.pow(state,0.9) / Math.sqrt((90000 - divValue * 1000) / 1000) * Math.sqrt(main / 1185.5173380429778) + Math.pow(state / 10,1.5))
    return calculrateValue
  }
	valueAtk(state){
		let base = Math.ceil(state / 11)
			var value  = Math.pow(this.valueState(state),1.75/2.4) + Math.floor(state / 41)
				var i = 0;
				var alpha = 0;
				var beta = 1;
				var length = Math.floor(value).toString().length;
				var atk = 0;
				for(i = 0; i<=length; i++){
					alpha = Math.pow(10,i);
					if(i != 0){
						beta *= i;
					}
					atk += Math.pow(Math.floor(value / alpha)*beta,4/5);
				}
				return Math.round(atk / 121 + base);
			}
	valueRes(state){
     var def =  this.valueState(state); 
     var value = (state > 100) ? Math.pow(state - 1,1/5) : Math.pow((state - 1) / 100,1 / 5)
      var defPer = Math.floor(Math.floor(Math.sqrt(Math.pow(Math.pow(Math.round(def - 1) / 765,1/5.738192445132472) + value,2) / 90) / 102.04 * 9999000) / 100.00590059005900590059) / 100
      var defNum = Math.floor(Math.pow(this.valueState(state) / 100,1 / 2.7) * 10 - 1) + Math.round(Math.pow(state - 1,3 / 5) / 20)
      return [defPer,defNum]
    }
	valueRate(state,type){
		var radian = Math.PI / 180
		var value = this.valueState(state)
		if(state <= 14641){	
			var rate = Math.round(Math.sin(Math.pow(Math.ceil(Math.pow(Math.floor(Math.pow(value,8 / 9) * 100),1 / 6) / Math.pow((101 - state / 14641 * 100) / 250,1 / Math.PI)) * Math.sqrt(Math.pow(state / 14641 * 100,1 / 4)/Math.E),0.8059631184268222) * radian / 392.3550073787575 * 90) * 100)
      }
		else{
			var value = (4641.5 + (Math.floor((state - 14641) / 14641) * 100 + state % 14641) / 100) * 0.001
			if(value < 4.6415){
				value = 4.6415
			}
			var rate = Math.floor(Math.pow(value,3))
			}
		rate = rate / 100*type
		return rate;
	}
	selectValueObject(situation){
		var performer = this.performer
		switch(situation){
			case 'inBattle' :
				this.option = performer.option.origin
				this.state = performer.state.battle
				this.base = performer.option.add
				this.change = performer.option.change
				break;
			case 'battle' :
				this.option = performer.battle.option
				this.state = performer.battle.state
				break;
			case 'origin' :
				this.option = performer.origin.option
				this.state = performer.origin.state
				break;
		}
	}
	calculrateAtk(target){
		switch(target){
			case 'atkPhy' :
				this.option.atkPhy = this.valueAtk(this.state.str)
				break;
			case 'atkMag' :
				this.option.atkMag = this.valueAtk(this.state.int)
				break;
			case 'all' :
				this.option.atkPhy = this.valueAtk(this.state.str)
				this.option.atkMag = this.valueAtk(this.state.int)
				break;
					 }
	}
	calculrateRes(target){
		switch(target){
			case 'defPhy' :
				var phyRes = this.valueRes(this.state.vit)
				this.option.resPhyPer = phyRes[0]
				this.option.resPhyNum = phyRes[1]
				break;
			case 'defMag' :
				var magRes = this.valueRes(this.state.wis)
				this.option.resMagPer = magRes[0]
				this.option.resMagNum = magRes[1]
				break;
			case 'all' :
				var phyRes = this.valueRes(this.state.vit)
				this.option.resPhyPer = phyRes[0]
				this.option.resPhyNum = phyRes[1]
				var magRes = this.valueRes(this.state.wis)
				this.option.resMagPer = magRes[0]
				this.option.resMagNum = magRes[1]
				break;
					 }
	}
	calculrateRate(target){
		switch(target){
			case 'rateHit' :
				this.option.rateHit = 30 + this.valueRate(this.state.dex,69)
				break;
			case 'rateDodge' :
				this.option.rateDodge = 30 + this.valueRate(this.state.agi,69)
				break;
			case 'rateDis' :
				this.option.rateDis = 30 + this.valueRate(this.state.dis,99)
				break;
			case 'rateRes' :
				this.option.rateRes = 30 + this.valueRate(this.state.res,99)
				break;
			case 'rateCrtLuk' :
				this.option.rateCrtLuk = 0 + this.valueRate(this.state.luk,77)
				break;
			case 'rateDodgeLuk' :
				this.option.rateDodgeLuk = -10 + this.valueRate(this.state.luk,77)
				break;
			case 'all' :
				this.option.rateHit = 30 + this.valueRate(this.state.dex,69)
				this.option.rateDodge = 30 + this.valueRate(this.state.agi,69)
				this.option.rateDis = 30 + this.valueRate(this.state.dis,99)
				this.option.rateRes = 30 + this.valueRate(this.state.res,99)
				this.option.rateCrtLuk = 0 + this.valueRate(this.state.luk,77)
				this.option.rateDodgeLuk = -10 + this.valueRate(this.state.luk,77)
				break;
					 }
	}
	calculrateRapid(target){
		if(target === 'atkRapid' || target === 'all'){
		var atkRapid = 10000 / Math.pow(Math.log(this.valueState(this.state.spd) + 1) * 0.87,1/3) 
		this.option.atkRapid = (atkRapid < 1000) ? 1000 : atkRapid
		}
	}
	summaryBattleOption(){
		const optionName = Object.getOwnPropertyNames(this.option)		
		if(optionName){
			for( var i = 0 , length = optionName.length ; i < length ; i++){
				if(!this.battleOption[optionName[i]]){
					this.battleOption[optionName[i]] = 0
				}
				this.battleOption[optionName[i]] = this.option[optionName[i]]
			}
		}
		const baseName = Object.getOwnPropertyNames(this.base)		
		if(baseName){
			for( var i = 0 , length = baseName.length ; i < length ; i++){
				if(!this.battleOption[baseName[i]]){
					this.battleOption[baseName[i]] = 0
				}
				this.battleOption[baseName[i]] += this.base[baseName[i]]
			}
		}
		const changeName = Object.getOwnPropertyNames(this.change)
		if(changeName){
			for( var i = 0 , length = changeName.length ; i < length ; i++){
				if(!this.battleOption[changeName[i]]){
					this.battleOption[changeName[i]] = 0
				}
				this.battleOption[changeName[i]] += this.change[changeName[i]]
			}
		}
	}
}
class StatusView{
	constructor(performer,type){
		this.type = type
		//this['clear' + type + 'StatusView']();
		this.createStatusView(performer,type)
	}
	clearPartyStatusView(){
	let div = document.getElementById('inPlayedCharacter')
	div.innerHTML = ''
	}
	clearBattleStatusView(){
		var player = document.getElementById('playerBorder')
		var front = document.createElement('div');
		var back = document.createElement('div');
		front.className = 'PFront'
		back.className  = 'PBack'
		player.innerHTML = ''
		player.appendChild(front)
		player.appendChild(back)
		var enemy = document.getElementById('enemyBorder')
		var front = document.createElement('div');
		var back = document.createElement('div');
		front.className = 'EFront'
		back.className  = 'EBack'
		enemy.innerHTML = ''
		enemy.appendChild(back)
		enemy.appendChild(front)
	}
	changeStatusView(performer,type){
		let performerCode = performer.code
		let health = this.checkHealth(performer,type)
		const healthName = Object.getOwnPropertyNames(health)
		for(let i = 0 ; i < 3; i ++){
			let div = document.getElementById(type + performerCode + healthName[3+i].toString().toUpperCase());
			let width =  health[healthName[3+i]] /  health[healthName[i]]
			if(width < 0){
				width = 0;
			}
			div.style.width = width * 100 + '%'
			div.style.backgroundColor = this.checkhealthColor(performer,healthName[3+i].toUpperCase())
			if( i === 0){
				let board = document.getElementById(type + performerCode + 'Border')
				board.style.backgroundColor = this.checkBoardColor(performer,health)
			}
		}
		this.checkBordeCoordinates(performer,type)
	}
	checkBordeCoordinates(performer,type){
		let performerCode = performer.code
		let performerBoard = document.getElementById(type + performerCode + 'Border')
		let boardParentClass = performerBoard.parentNode.className
		let coordinatesClassName = performerCode.slice(0,1) + performer.coordinates
		if(boardParentClass != coordinatesClassName){		
		let parent = this.checkDivParent(type,performerCode,performer.coordinates)
		parent.appendChild(performerBoard)
		}
		
	}
	checkBoardColor(performer,health){
		let boardColor = ''
		const disorder = performer.disorder
		
		if(health.hp <= 0 && performer.status === 'Death'){
			boardColor = "grey"
		}
		else if(disorder){
			
				const disorderName = Object.getOwnPropertyNames(disorder)
			for( let i = 0 ; i < disorderName.length ; i ++){
				switch(disorderName[i]){
					case 'paralyzed' :
				
							boardColor = 'yellow'

						break;
					case 'bleeding' :
						boardColor = 'red';
						break;
					}
			
			}
		}
		else{
			boardColor = '#426842'
		}
		return boardColor
	}
	checkhealthColor(performer,healthName){
		let color = ''
		switch(healthName){
			case 'HP' :
			color = 'red'
			break;
			case 'SP' :
			color = 'yellow'
			break;
			case 'MP' :
			color = 'blue'
			break;
		}
		const disorder = performer.disorder
		if(disorder){
		const disorderName = Object.getOwnPropertyNames(disorder)
		const length = disorderName.length
		for( let i = 0 ; i < length ; i ++){
			switch(disorderName[i]){
				case 'poision' :
					if(healthName === 'HP'){
						color = 'purple'
					}
					break;
				case 'spilled' :
					if(healthName === 'MP'){
						color = 'grey'
					}
					break;
				case 'weakness' :
					if(healthName === "SP"){
						color = 'white'

					}
					break;
														}
		}
		}
		return color
	}
	checkDivParent(type,code,coordinates){
		let parent = ''
		switch(type){
			case 'Party' :
				parent = document.getElementById('inPlayedCharacter')
				break;
			case 'Battle' :
				let allyType = code.slice(0,1)
				switch(allyType){
					case 'P':
						parent = document.getElementById('playerBorder')
						if(coordinates === 'Front'){
							parent = parent.children[0]
						}
						else if(coordinates === 'Back'){
							parent = parent.children[1]
						}
						break;
					case 'E':
						parent = document.getElementById('enemyBorder')
						if(coordinates === 'Front'){
							parent = parent.children[1]
						}
						else if(coordinates === 'Back'){
							parent = parent.children[0]
						}
						break;
									 }
				break;				
							 }
		return parent
	}
	createNameView(performer){
		let level = performer.level 
		let name = performer.name
		let title = performer.title
		let nameDiv = document.createElement('div');
		nameDiv.className = 'Name';
		if(!title){
			nameDiv.innerHTML = 'Lv.' + level + '  ' + name
		}
		else if(title){
			nameDiv.innerHTML += 'Lv.' + level + '  ' + '<ruby>' + name + '<rt>' + title + '</rt><ruby>'
		}
		return nameDiv
	}
	createTypeBorderView(performer){
		let divTypeBorder = document.createElement('div');
		divTypeBorder.className = 'Type'
		let divTribe = document.createElement('div');
		divTribe.className = 'Tribe'
		divTribe.innerText = dataTribe[performer.tribe].name
		let divJob = document.createElement('div');
		divJob.className = 'Job'
		divJob.innerText = dataJob[performer.job].name
		divTypeBorder.appendChild(divJob)
		divTypeBorder.appendChild(divTribe)
		return divTypeBorder
	}
	checkHealth(performer,type){
		if(!type){
			type = this.type
		}
		let health
		switch(type){
			case 'Battle' :
				health = performer.health
				break;
			case 'Party' :
				health = performer.battle.health
				break;
										}
		return health
	}
	createHealthView(performer,health){
		let divHealth  = document.createElement('div');
		divHealth.className = 'Health ' + this.type
		let healthName = Object.getOwnPropertyNames(health)
		for(let i = 0 ; i < 3; i ++){
			let divP = document.createElement('div');
			divP.className = 'Max'
			let divC = document.createElement('div');
			divC.id = this.type + performer.code + healthName[3+i].toString().toUpperCase()
			divC.className =healthName[3+i].toString().toUpperCase()
			divC.style.width = health[healthName[3+i]] /  health[healthName[i]] * 100 + '%'
			divC.style.backgroundColor = this.checkhealthColor(performer,healthName[3+i].toUpperCase())
			divP.appendChild(divC)
			divHealth.appendChild(divP)
		}
		return divHealth
	}	
	createGaugeView(code){
		let divGaugeM = document.createElement('div');
		divGaugeM.className = 'Max'
		let divGauge = document.createElement('div');
		divGauge.id = code + 'Gauge'
		divGauge.className = 'Gauge'
		divGaugeM.appendChild(divGauge)
		return divGaugeM
	}
	createStatusView(performer,type){
		const performerCode = performer.code
		let parent = this.checkDivParent(type,performerCode,performer.coordinates)
		let healthValue = 	this.checkHealth(performer)
		let stateBorder = document.createElement('div');
		stateBorder.className = 'StateBorder ' + type 
		stateBorder.id = type + performerCode + 'Border'
		stateBorder.style.backgroundColor = this.checkBoardColor(performer,healthValue)
		let name = this.createNameView(performer)
		let health  = this.createHealthView(performer,healthValue)
		stateBorder.appendChild(name)
		if(type === 'Battle'){
			let typeBorder = this.createTypeBorderView(performer)
			let gauge = this.createGaugeView(performerCode)
			health.appendChild(gauge)
			stateBorder.appendChild(typeBorder)
		}
		stateBorder.appendChild(health)
		parent.appendChild(stateBorder)
	}
}

class LevelUp{
	constructor(characterCode){
		if(!characterCode){
			return
		}
		this.code = characterCode
		this.performer =  playerTeam.character[characterCode]
		this.upValue = {}
		this.levelCheck = 0;
		this.stateCheck = 0;
		this.checkUp()
		this.createLog()
		if(this.log){
			this.applyHealth()
			new State(this.performer)
			new BattleSpec(this.performer)
		}
	}
	createLog(){
		this.createMainLog()
		if(this.log){
			const upName = Object.getOwnPropertyNames(this.upValue)
			const length = upName.length
			for( let i = 0 ; i <length ; i++){
				this.createUpLog(upName[i])
			}
		}
	}
	createMainLog(){
		const levelCheck = this.levelCheck
		const stateCheck = this.stateCheck
		let text = ''
		if(levelCheck && stateCheck){
			text = 'Level & State Up'
		}
		else if(!levelCheck && stateCheck){
			text = 'State Up'
		}
		else if(levelCheck && !stateCheck){
			text = 'Level Up'
		}
		if(levelCheck || stateCheck){
			this.log = new AddLog([{text : this.performer.name},{text : text}] , 'Battle').log
		}
	}
	createUpLog(name){
		const performerName = this.performer.name
		const upValue = this.upValue[name]
		new AddLog([{text : performerName},{text : name + '  ' + upValue},{text : 'Up'}] , 'Battle',this.log)
	}
	checkUp(){
		this.checkLevelUp()
		if(this.levelCheck != 0){
			this.checkStateUp()	
		}
	}
	checkStateUp(){
		let state = this.performer.baseState
		let stateExp = this.performer.stateExp
		const stateName = Object.getOwnPropertyNames(stateExp)
		const length = stateName.length
		for(let i = 0 ; i < length; i++){
			while(stateExp[stateName[i]] <= 0){
				if(!this.upValue[stateName[i]]){
					this.upValue[stateName[i]] = 0
				}
				this.upValue[stateName[i]] += 1
				this.stateCheck += 1
				state[stateName[i]] += 1;
				stateExp[stateName[i]] += this.calculrateStateExp(stateName[i])
			}		
		}
	}
	checkLevelUp(){
		let performer = this.performer
		this.upValue['level'] = 0
		while(performer.levelExp <= 0){
			this.upValue['level'] += 1
			this.levelCheck += 1
			performer.level+= 1;
			performer.skillPoint += 1;
			performer.levelExp += this.calculrateLevelExp()
			const level = performer.level
			if(level % 4 === 0 ){
				performer.skillPoint += 1;
			}
			
		}		
	}
	calculrateLevelExp(level){
		if(!level){
			level = this.performer.level
		}
		return Math.floor(Math.pow(level,1.735) * 13.8 / Math.pow(Math.round(level / 10 + 1),Math.sqrt(2) / 5))
	}
	calculrateStateExp(target,level,value){
		let state = '' 
		if(!level && !value){
			state = this.performer.baseState[target]
			level = this.performer.level
		}
		else{
			state = value
		}
		let expValue = Math.ceil (Math.pow(state % 121 , (state / 1331) / 10) * state / 11 + Math.pow(level,1/5) * (11 + Math.pow(level,2/3) / 250)  * state / 11 )
		return expValue
	}
	applyHealth(){
		this.performer.health = new Health('player',this.performer.origin.state)
	}
}
