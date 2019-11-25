let dataActiveCharacter = {};
let playerGroup = {};
let enemyGroup = {};
let battleCheck = 0;
class BattleCharacter{
	constructor(performer,type){
		this.code = performer.code
		this.name = performer.name;
		this.job = performer.job;
		this.tribe= performer.tribe;
		this.level = performer.level;
		if(!performer.title){
		this.title = 0
		}
		else{
			this.title = performer.title
		}
		this.health =performer.extendLinkOption('copy', 0, 0,performer.battle.health)
		this.state = {
			origin : performer.extendLinkOption('copy',performer.origin.state), 
			battle : performer.extendLinkOption('copy',performer.battle.state)};
		this.aria = {}
		this.option = {
			battle : performer.extendLinkOption('copy', 0,performer.battle.option),
			origin : performer.extendLinkOption('copy', 0,performer.origin.option),
			add : performer.extendLinkOption('copy', 0,performer.add.option),
			change : {}			
		}
		this.buff = {}
		this.disorder={}
		this.coordinates = performer.coordinates 
		this.ally = performer.ally
		this.type =  (!type) ? performer.type : type;
		//if(type != 'player'){
			this.parttern = performer.parttern.slice(0)
		//}
		this.protectType = performer.protectType
		if(this.type != 'player'){
			this.dropTable = performer.dropTable
			this.exp = performer.exp
			this.funds = performer.funds
		}
		else{
			this.autoType = performer.autoType;
			this.skill = performer.skill
			//const favorite = performer.skillFavorite
			this.skillFavorite = performer.extendLinkOption('copy', 0, 0, 0,performer.skillFavorite)
		}
		this.gauge = (performer.startGauge) ? performer.startGauge : 0;
		this.active = 0;
		this.status = (performer.status) ? performer.status : 'Live';
	}
}
let battleTurn = 0;
class BattleData{
	constructor(type){
		if(battleCheck != 1 && battleCheck != -1){
			dataActiveCharacter = this.createDataActiveCharacter();
			battleTurn = 0 ;
			AddLog.prototype.clearLogView('Battle')
			battleCheck = 1;
		}
		else if(battleCheck === -1){
			new AddLog([{text : 'new Enemy Search'}],'Battle')
			document.getElementsByClassName('MenuTabs')[0].children[1].click()
		}
		else if(battleCheck === 1){
			if(type != 'player'){
			gagueChange()
			}
			else{
				
			}
		}
	}
	createDataActiveCharacter(){
		StatusView.prototype.clearBattleStatusView()
		var activeDataLength = 0
		var activeCharacter = {}
		var playerCode = Object.getOwnPropertyNames(playerGroup)
		var enemyCode = Object.getOwnPropertyNames(enemyGroup)
		var maxLength = Math.max(playerCode.length,enemyCode.length)
		for(var i = 0; i < maxLength; i++){
			if(!playerCode[i]){}
			else if(playerCode[i]){
				var playerSpec = new BattleCharacter(playerGroup[playerCode[i]])
				activeCharacter[playerSpec.code] = playerSpec
				new StatusView(playerSpec,'Battle')
				activeDataLength++
			}
			if(!enemyCode[i]){}
			else if(enemyCode[i]){
				var enemySpec = new BattleCharacter(enemyGroup[enemyCode[i]])
				activeCharacter[enemySpec.code] = enemySpec
				new StatusView(enemySpec,'Battle')
				activeDataLength++
			}
		}
		return activeCharacter
	}
}
class ActionDelay{
	constructor(performer,action,type){		
		if(type === 'fail'){
			performer.gauge -= 100;
			return
		}
		this.action = action
		this.performer = performer
		this.gaugeStock = performer.gauge
		this.checkDelay(type)
		if(type === 'first' && this.delay === 0){
			return
		}
		this.checkDelayOption()
		this.creatDelayLog(type)
		this.summaryDelay()
		this.checkDelayType(type)
	}
	checkDelay(type){
		var check = Object.getOwnPropertyNames(this.action.delay)
		if(check.indexOf(type) != -1){
			var delay = this.action.delay[type] 
			this.delay = delay
			if(type != 'first'){
				this.delay += 100
			}
		}
		else if(type ==='first'){
			this.delay = 0
		}
		else{
			this.delay = 100
		}
	}
	checkDelayType(type){
		switch(type){
			case 'first' :
				this.performer.aria = {
					skill : this.action.code,
					type : this.action.delayType
				}
				break;
			case 'last' :				
				this.performer.aria = {}
				break;
		}		
	}
	checkDelayOption(){
		var option = this.performer.option.battle
		var optionName = Object.getOwnPropertyNames(option)
		var delayType = this.action.delayType
		var skillType = this.action.skillType
		var delayValue = 1;
		if(optionName.indexOf(delayType + 'Decrease') != -1){
			delayValue *= (1 - option.battle[delayType + 'Decrease'] / 100)
		}
		if(optionName.indexOf(skillType + 'Decrease') != -1){
			delayValue *= (1 - option.battle[skillType + 'Decrease'] / 100)			
		}
		if(delayValue != 1){
			if(this.delay > 0){
				this.delay -= this.delay / delayValue
			}
			else{
				this.delay += this.delay * delayValue
			}
		}
		if(optionName.indexOf('baseDelay') != -1){
			if( this.delay - option.battle.baseDelay > -90){
				this.delay -= option.battle.baseDelay
			}
			else{
				this.delay = -90
			}
		}
	}
	summaryDelay(){
		this.performer.gauge-= this.delay
	}
	creatDelayLog(type){
		var gauge = Math.floor(this.gaugeStock)
		var delay = Math.floor(this.gaugeStock - this.delay)
		switch(type){
			case 'first' :
				new AddLog([{text : this.performer.name, type : 'Name'},{text :  this.action.delayType},{text :  '( '+ gauge + '>>>' + delay + ' )'}] , 'Battle')
				break;
			case 'last' :				
				new AddLog([{text :  '( '+ gauge + '>>>' + delay + ' )'}] , 'Turn')
				break;
		}		
		
	}
}
class ActionCost{
	constructor(performer,action,type){
		this.performer = performer
		this.action = action
		this.countUse = 0;
		this.fail = 0;
		this.cost = action.cost
		this.limit = action.limit
		this.costName = Object.getOwnPropertyNames(this.cost)
		this.payCost = {}
		this.limitCheck = {}
		this.payCheck = {}
		this.checkAction()
		if(type === 'View'){
			return
		}
		if(this.fail != 0){
			this.addLogFailReason()
			new ActionDelay(performer,action,'fail')
			return
		}
		else{
			this.summaryPayCost(performer)
			StatusView.prototype.changeStatusView(performer,'Battle')
		}
		
	}
	checkAction(){
		if(this.limit){
			this.checkLimit()
		}
			this.createCostPay()
			this.checkCost()
			this.calculrateCost()
			this.checkPay()
	}
	checkLimit(){
		if(this.performer.code.indexOf('E') != -1 || this.performer.code.indexOf('S') != -1){
			return
		}
		const limitType = this.limit
		const limitLength = limitType.length
		const equip = playerGroup[this.performer.code].equip
		for(let i = 0 ; i <  limitLength; i++){
			let checkSlot = EquipItem.prototype.checkSlot(limitType[i])
			if(equip[checkSlot].type !== limitType[i]){
				this.fail = 'limit'
				this.limitCheck[limitType[i]] = 0
			}
		}
	}
	summaryPayCost(performer){
		const payCostName = Object.getOwnPropertyNames(this.payCost)
		const length = payCostName.length
		for( let i = 0 ; i < length ; i++){
			if(payCostName[i] === 'count'){
				performer.option.battle.count -= this.payCost[payCostName[i]]
			}
			else{
			performer.health[payCostName[i]] -= this.payCost[payCostName[i]]
			}
		}
	}
	addLogFailReason(){
		if( this.fail === 'health'){
		const name = Object.getOwnPropertyNames(this.payCheck)
		const length = name.length
		let fail = ''
		for( let i = 0 ; i < length ; i++){
			if(this.payCheck[name[i]] === 0){
				if(fail.length > 0){
					fail += ', '
				}
				fail += name[i]
			}
		}
		new AddLog([{text : this.performer.name, type : 'Name'}, {text : ' lack By  ' + fail}] , 'Battle')
		}
		else if( this.fail === 'limit'){
			const name = Object.getOwnPropertyNames(this.limitCheck)
			const length = name.length
			let fail = ''
			for( let i = 0 ; i < length ; i++){
				if(this.limitCheck[name[i]] === 0){
					if(fail.length > 0){
						fail += ', '
					}
					fail += name[i]
				}
		}
		new AddLog([{text : this.performer.name, type : 'Name'}, {text : ' Not Equip  ' + fail}] , 'Battle')
		}
	}
	checkPay(){
		var name = Object.getOwnPropertyNames(this.payCost)
		var length = name.length
		for( var i = 0 ; i < length ; i++){
			this.payCheck[name[i]] = this.checkCostPay(name[i])
		}
	}
	checkCostPay(costType){
		var can = 0;
		switch(costType){
			case 'hp' :
				can = 1;
				break;
			case 'mp' :
			case 'sp' :
				if(this.health[costType] > this.payCost[costType]){
					can = 1
				}
				else{
					this.fail = 'health'
				}					
				break;
			case 'count' :
				if(this.count > this.payCost[costType]){
					can = 1
				}
				else{
					this.fail = 'health'
				}
				break;	
									 }
		return can
	}
	createCostPay(){
		this.health = this.performer.health
		if(this.costName.indexOf('count') != -1){
			this.countUse = 1
			this.count = this.performer.option.battle.count
		}
	}
	checkCost(){
		var costName = this.costName
		var length = costName.length
		for(var i = 0 ; i < length ; i ++){
			var cost = this.inputCost(costName[i])
			if(!this.payCost[cost[1]]){
			this.payCost[cost[1]] = cost[0]
			}
			else{
				this.payCost[cost[1]] += cost[0]
			}
		}
	}
	calculrateCost(){
		var payCostName = Object.getOwnPropertyNames(this.payCost)
		var length = payCostName.length
		for(var i = 0 ; i < length ; i++){
			this.payCost[payCostName[i]] = this.checkEfficient(this.payCost[payCostName[i]],payCostName[i])
		}
	}
	checkEfficient(value,costType){
		var actionOption = this.action.skillType + 'Efficient'
		var delayOption = this.action.delayType + 'Efficient'
		var costOption = costType + 'Efficient'
		var option = this.performer.option.battle
		var optionName = Object.getOwnPropertyNames(option)
		if(optionName.indexOf(costOption) != -1){
			value = value * ( 1 - option[costOption] / 100 )
		}
		if(optionName.indexOf(actionOption) != -1){
			value = value * ( 1 - option[actionOption] / 100 )
		}
		if(optionName.indexOf(delayOption) != -1){
			value = value * ( 1 - option[delayOption] / 100 )
		}
		return value
	}
	inputCost(type){
		var health = this.health
		var cost = 0
		var target = ''
		switch(type){
			case 'pHp' :
				cost = this.cost[type] / 100 * health.mHp
				if(cost < 1 && cost > 0){
					cost = 1
				}
				target = 'hp'
				break;
			case 'pMp' :
				cost = this.cost[type] / 100 * health.mMp
				if(cost < 1 && cost > 0){
					cost = 1
				}
				target = 'mp'
				break;
			case 'pSp' :
				cost = this.cost[type] / 100 * health.mSp
				if(cost < 1 && cost > 0){
					cost = 1
				}
				target = 'sp'
				break;
			case 'hp' :
			case 'mp' :
			case 'sp' :
			case 'count' :
				cost = this.cost[type]
				target = type
				break;
							 }
		return [cost,target]
	}
	
}
class ActionTarget{
	constructor(performer,action,target){
		this.performer = performer
		this.action = action
 //normal & protect return value
		this.targetingType = action.target
		this.ally = performer.ally
		
		if(!target){
			this.checkType = 'first'
		}
		else{
			this.checkType = 'second'
			this.target = target
		}
		this.createTargetData(this.checkType)
		this.summaryTarget(this.checkType)
	}
	createTargetData(type){
		switch(type){
			case 'first' :
				this.targetData = {
					target : [],
					allyProtecter : [],
					enemyProtecter : []
				}
				break;
			case 'second' :
				this.targetData = {
					target : []
				}
				break;
					 }

	}
	summaryTarget(type){
		switch(type){
			case 'first' :
				this.selectFirstTarget()
				this.filterTarget()
				this.returnTarget = this.targetData
				break;
			case 'second' :
				this.selectSecondTarget()
				this.returnTarget = this.targetData.target
				break;
							 }
	}
	selectFirstTarget(){
		const targetType = this.targetingType[0]
		const targetCode = Object.getOwnPropertyNames(dataActiveCharacter)
		const targetData = this.targetData
		const length = targetCode.length;
		const invalid = this.action.invalid
		switch(targetType){
			case 'self' :
				targetData.target.push(this.performer.code)
				break;
			case 'all' :
				for(var i = 0; i<length ;i++){
					targetData.target.push(targetCode[i])
					if(!invalid || invalid != 'invalid'){
						const protect = this.protectCheck(targetCode[i])
						if(protect === 1){
							switch(this.ally === dataActiveCharacter[targetCode[i]].ally){
								case true:
									targetData.allyProtecter.push(targetCode[i])
									break;
								case false:
									targetData.enemyProtecter.push(targetCode[i])
									break;
																																					}
						}
					}
				}
				break;
			case 'friend' :
			case 'enemy' :
				for(var i = 0; i<length ;i++){
					if(targetType === 'friend' && this.ally === dataActiveCharacter[targetCode[i]].ally){
						targetData.target.push(targetCode[i])
						if(!invalid || invalid != 'invalid'){
							const protect = this.protectCheck(targetCode[i])
							if(protect === 1){
								targetData.allyProtecter.push(targetCode[i])
							}
						}
					}
					if(targetType === 'enemy' && this.ally != dataActiveCharacter[targetCode[i]].ally){
						targetData.target.push(targetCode[i])
						if(!invalid || invalid != 'invalid'){
							const protect = this.protectCheck(targetCode[i])
							if(protect === 1){
								targetData.enemyProtecter.push(targetCode[i])
							}
						}
					}
				}				
				break;
										 }
		
	}
	selectSecondTarget(){
		var targetType = this.targetingType[1]
		var targetCode = this.target
		var targetLength = targetCode.length;
		var priority = this.action.priorityTarget
		var target = this.targetData.target
			switch(targetType){
				case 'individual' :
				case 'multi' :
					if(!priority){
						var nowTarget = targetCode[Math.floor(Math.random()*targetLength)]
					}
					else if(priority){
						var nowTarget = this.judgeTarget('priority',priority,'target')
						}
					target.push(nowTarget)
					break;
				case 'all' :
					for(var j = 0; j < targetLength; j++){
						target.push(targetCode[j])
					}
					break;
												}
	}
	protectCheck(protecterCode){
		var protecter = dataActiveCharacter[protecterCode]
		var protect = 0;
		if(protecter.coordinates != 'Front'){
			return protect
		}
		var protectType = protecter.protectType;
		switch(protectType[0]){
			case 'None' :
			break;
			case 'Always' :
			protect = 1
			break;
			case 'HP Percent' :
			var hpPercent = protecter.health.hp / protecter.health.mHp * 100
			if(hpPercent > protectType[1]){
				protect = 1
			}
			break;
			case 'Random' :
				var random = Math.random() * 100
				if(random < protectType[1]){
					protect = 1
				}
		}
		return protect
	}
	filterTarget(){
		var special = this.action.specialTarget
		var targetData = this.targetData
		if(!special || special.name != 'Death'){
			this.judgeTarget('special',{ name : 'Live'},'target')//this.targetData.target = this.judgeTarget('special',{ name : 'Live'},'target')
			if(targetData.allyProtecter.length != 0){
				this.judgeTarget('special',{ name : 'Live'},'allyProtecter')//this.targetData.allyProtect = this.judgeTarget('special',{ name : 'Live'},'allyProtect')
			}
			if(targetData.enemyProtecter.length != 0){
				this.judgeTarget('special',{ name : 'Live'},'enemyProtecter')//this.targetData.enemyProtect = this.judgeTarget('special',{ name : 'Live'},'enemyProtect')
			}
		}
		if(special){			
			this.judgeTarget('special',special,'target')//this.targetData.target = this.judgeTarget('special',special,'target')
			if(targetData.allyProtecter.length != 0){
				this.judgeTarget('special',special,'allyProtecter')//this.targetData.allyProtect = this.judgeTarget('special',special,'allyProtect')
			}
			if(targetData.enemyProtecter.length != 0){
				this.judgeTarget('special',special,'enemyProtecter')//this.targetData.enemyProtect = this.judgeTarget('special',special,'enemyProtect')
			}
		}
	}
	judgeTarget(type,jugde,targetType){
		//judgeType = disorder , Low/High healthType , Row, state
		switch(type){
			case 'special' :
				var targetCode = this.targetData[targetType]
				var targetLength = targetCode.length;
				for(var i = 0 ; i < targetLength; i++){		
						var jugdeAgree = 0;
						switch(jugde.name){
							case 'Cast': 
								if(dataActiveCharacter[targetCode[i]].aria.type === 'Cast'){
									jugdeAgree= 1;
								}
								break;
							case 'Charge': 
								if(dataActiveCharacter[targetCode[i]].aria.type === 'Charge'){
									jugdeAgree = 1;
								}
								break;							
							case 'Charge&Cast': 
								if(dataActiveCharacter[targetCode[i]].aria.type === 'Cast' || dataActiveCharacter[targetCode[i]].aria.type === 'Charge'){
									jugdeAgree = 1;
								}
								break;
							case 'UnderMaxHp':
								if(dataActiveCharacter[targetCode[i]].health.mHp <= jugde.value){
									jugdeAgree = 1;
								}
								break;
							case 'UpperMaxHp':
								if(dataActiveCharacter[targetCode[i]].health.mHp >= jugde.value){
									jugdeAgree = 1;
								}
								break;
							case 'Death' :
								if(dataActiveCharacter[targetCode[i]].status == 'Death'){
									jugdeAgree = 1;
								}
								break;
							case 'Live' :
								if(dataActiveCharacter[targetCode[i]].status != 'Death'){
									jugdeAgree = 1;
								}
								break;
														 }
						if(jugdeAgree === 0){
							targetCode.splice(i,1)
							i--;
							targetLength--;
						}
					}
					//return targetCode
					break;
				case 'priority' :
				var targetCode = this.target
				var targetLength = targetCode.length;
					var jugdeStock = []
					switch(jugde.name){
						case 'LowestHp' :
							for(var i = 0 ; i < targetLength; i++){
								jugdeStock.push(dataActiveCharacter[targetCode[i]].health.hp / dataActiveCharacter[targetCode[i]].health.mHp)
							}						
							var value = Math.min.apply(null,jugdeStock)
							break;
													 }
					var targetNumber = jugdeStock.indexOf(value)
					return targetCode[targetNumber];
					break;
								 }			
		}
}
class activeAction{
	constructor(actionCode,performer,performerNumber,type){
		if((performerNumber || performerNumber === 0) && performerNumber != -1){
			performer = dataActiveCharacter[performerNumber]
		}
		let action = dataSkill[actionCode]
		performerNumber = performer.code
		if(type === 'first'){
			let check = new ActionCost(performer,action).fail
			if( check !== 0){
				new BattleData(performer.type)
				return
			}
			new ActionDelay(performer,action,'first')
			if(performer.gauge < 100){
				Performer.prototype.changeGaugeView(performer)
				new BattleData(performer.type)
				return
			}
		}
		battleTurn += 1
		let turn = battleTurn
		const turnLog = this.turnLog =  new AddLog([{text : 'Turn  '},{text : turn}],'Battle').log
		var targetObject = this.targetObject = new ActionTarget(performer,action).returnTarget
		var target =targetObject.target
		if(target.length === 0){
			new AddLog([{text : 'Not Target'}], 'Battle', turnLog)
			performer.aria = {};
			return
		}
		new AddLog([{text : performer.name, type : 'Name'},{text : 'Used'},{text : action.name, type : 'SkillName' }], 'Battle', turnLog)
		for(var i = 0 ; i < action.hitCount ; i ++){
			let nowTarget = new ActionTarget(performer,action,target).returnTarget
			let nowTargetLength = nowTarget.length
			if(action.target[1]=='individual'){
				target = nowTarget
			}
			for(var j = 0; j < nowTargetLength; j++){
				let hitTargetCode = this.selectProtect(performer,nowTarget[j],action)
				let hitTarget = dataActiveCharacter[hitTargetCode]
				let hitCheck = new DecisionCheck(performer,hitTargetCode,action,'Hit').hitCheck
				let healthType = new ActionHealthType(action)
				let healthTypeLength = healthType.length
				let healthTypeName = healthType.health
				if(hitCheck === 1){
					new DecisionCheck(performer,hitTargetCode,action,'Disorder')
					for( var k = 0; k < healthTypeLength; k++){
						let value = new SkillValue(performer,hitTarget,action)
						new ActionValueSummary(hitTarget,healthTypeName[k],action.skillType,value.value)
					}					
				}
				else{
					
				}
				
				new AddEffect(performer,hitTarget,action)
				StatusView.prototype.changeStatusView(hitTarget,'Battle')
			}			
		}
			StatusView.prototype.changeStatusView(performer,'Battle')		
		new ActionDelay(performer,action,'last')
		Performer.prototype.changeGaugeView(performer)
		new DeathCheck(performer,turnLog)
		new BattleData(performer.type)
		
	}
	selectProtect(performer,target,action){
		var actionType = action.skillType
		var allyProtecter = this.targetObject.allyProtecter
		var enemyProtecter = this.targetObject.enemyProtecter
		if(!action.invlid && actionType != 'Support' && dataActiveCharacter[target].coordinates != 'Front'){
					switch(performer.ally === target.ally){
						case true:
							var length = allyProtecter.length
							if(length === 0){
								return target
							}
							var protecter = allyProtecter.slice(0)
							break;
						case false:
							var length = enemyProtecter.length
							if(length === 0){
								return target
							}
							var protecter = enemyProtecter.slice(0)
							break;
																										}
					var protecterLength = protecter.length
					do{
						var nowProtecterNumber = Math.floor(Math.random() * protecterLength )
						var nowProtecter = dataActiveCharacter[protecter.splice(nowProtecterNumber,1)]
						protecterLength = protecter.length
					}while(nowProtecter.health.hp <= 0 && protecterLength > 0)
						if(nowProtecter.health.hp > 0){
							new AddLog([{text : nowProtecter.name},{text : 'Protect for'},{text : dataActiveCharacter[target].name}] , 'Battle', this.turnLog)
							return nowProtecter.code
						}
					}
		return target
				
	}
}
class ActionHealthType{
	constructor(action){
		this.health = []
		this.length = 0;
		const actionPower = action.power
		if(!actionPower){
			return
		}
		const healthType = action.healthType
		this.checkHealthType(healthType)
		this.checkHealthTypeLength();
	}
	checkHealthType(type){
		if(type){
			const length = type.length
			for(let i = 0 ; i < length ; i ++){
				this.health.push(type[i])
			}
		}
		else{
			this.health.push('hp')
		}
	}
	checkHealthTypeLength(){
		this.length = this.health.length;
	}
}
class ActionValueSummary{ 
	constructor(target,healthTarget,actionType,value){
		this.log = new ActionLog(target,healthTarget,actionType,value)
		this.addLogActionValue()
		target.health[healthTarget] = this.log.healthData
	}
	addLogActionValue(){
		const log = this.log
		new AddLog([{text : log.name},{text : log.healthType},{text : log.actionType},{text : log.value ,type : log.textType},{text : '('},{text : log.nowHealth,type : log.textType},{text : '>>' },{text : log.healthData,type : log.textType},{text :')'}] ,'Turn')	
	}
}
class ActionLog{
	constructor(target,healthTarget,actionType,value){
		this.target = target
		this.name = target.name
		this.value = value
		this.checkHealthTarget(healthTarget);
		this.checkActionType(actionType)
		this.checkHealthValue(actionType)
		
	}
	checkHealthTarget(healthTarget){
		switch(healthTarget){
			case 'sp' : 
				this.textType = 'Sp'
				break;
			case 'mp' :
				this.textType = 'Mp'
				break;
			default :
			case 'hp' :
				this.textType = 'Hp'
				break;
					 }
		this.healthType = this.textType
		this.nowHealth = Math.floor(this.target.health[this.textType.toLowerCase()])
	}
	checkActionType(actionType){
		switch(actionType){
			case 'Combat' : 
				this.textType += 'Damage'
				this.actionType = 'Hit'
				break;
			case 'Support' :
				this.maxHealth = this.target.health['m'+ this.textType]
				this.textType += 'Recovery'			
				this.actionType = 'Heal'
				break;
					 }
	}
	checkHealthValue(actionType){
		switch(actionType){
			case 'Combat' : 
				this.healthData = Math.floor(this.nowHealth - this.value)
				break;
			case 'Support' :
				this.healthData = Math.floor(this.nowHealth + this.value)
				if(this.healthData > this.maxHealth){
					this.healthData = Math.floor(this.maxHealth * 1)
				}
				break;
					 }
	}
}
class Effect{
	constructor(type,effectName,effect,dataType){
		this.type = type
		this.dataType = dataType
		this.value = effect.value
		this.suffix = this.checkEffectSuffix(effectName)
		this.name = effectName.slice(this.suffix.length)
		this.address = this.checkEffectTarget(this.name)
		this.limit = effect.limit
		this.checkType()
	}
	checkEffectSuffix(effectType){
		let suffix = ''
		if(effectType.indexOf('Up') != -1){ 
				suffix = 'Up'	
		}
		else if(effectType.indexOf('Down') != -1){ 
			suffix = 'Down'
		}
		else if(effectType.indexOf('Plus') != -1){ 
			suffix = 'Plus'
		}
		else if(effectType.indexOf('Minus') != -1){
			suffix = 'Minus'
		}
		else if(effectType.indexOf('Clear') != -1){
			suffix = 'Clear'
		}
		else if(effectType.indexOf('Change') != -1){
			suffix = 'Change'
		}
		return suffix
	}
	checkEffectTarget(effectTarget){
			let changeTarget = ''
			switch(effectTarget){
				case 'MaxHp' : 
					changeTarget = ['health','mHp']
					break;
				case 'MaxSp' : 
					changeTarget = ['health','mSp']
					break;
				case 'MaxMp' : 
					changeTarget = ['health','mMp']
					break;
				case 'Hp' : 
					changeTarget = ['health','hp']
					break;
				case 'Sp' : 
					changeTarget = ['health','sp']
					break;
				case 'Mp' : 
					changeTarget = ['health','mp']
					break;
				case 'Str' :
					changeTarget = ['state','str']
					break;
				case 'Vit' :
					changeTarget = ['state','vit']
					break;
				case 'Int' :
					changeTarget = ['state','int']
					break;
				case 'Wis' :
					changeTarget = ['state','wis']
					break;
				case 'Dex' :
					changeTarget = ['state','dex']
					break;
				case 'Agi' :
					changeTarget = ['state','agi']
					break;
				case 'Dis' :
					changeTarget = ['state','dis']
					break;
				case 'Res' :
					changeTarget = ['state','res']
					break;
				case 'Spd' :
					changeTarget = ['state','spd']
					break;
				case 'Luk' :
					changeTarget = ['state','luk']
					break;
				case 'regenHp' :
					changeTarget = ['option','regenHp']
					break;
				case 'regenMp' :
					changeTarget = ['option','regenMp']
					break;
				case 'regenSp' :
					changeTarget = ['option','regenSp']
					break;
				case 'HpEfficient' :
					changeTarget = ['option','hpEfficient']
					break;
				case 'MpEfficient' :
					changeTarget = ['option','mpEfficient']
					break;
				case 'SpEfficient' :
					changeTarget = ['option','spEfficient']
					break;
				case 'atkPhy' :
					changeTarget = ['option','add','atkPhy']
					break;
				case 'Coordinates' :
					changeTarget = ['coordinates']
					break;
				case 'Status' :
					changeTarget = ['status']
					break;
				case 'Dealy' :
					changeTarget = ['gauge']
					break;
				case 'Count' :
					changeTarget = ['option','count']
					break;
				case 'DefPhyPer' :
					changeTarget = ['option','defPhyPer']
					break;
											 }
		return changeTarget
	}
	checkType(){
		if(this.address.indexOf('option') != -1 || this.address.indexOf('state') != -1){
			switch(this.dataType){
				case 'activeData': 
					this.address.splice(1,0,this.type)
					break;
				case 'stayData' :
					//this.address.splice(0,0,this.type)
					break;
			}
		}
	}
}
class PassiveEffect{
	constructor(characterCode,skillCode,effectType){
		this.effect = dataSkill[skillCode].passiveEffect
		this.checkEffectType(effectType)
		if(this.fail === 1){
			return
		}
		this.character = playerTeam.character[characterCode]
		
		this.checkTarget()
		this.actionAddEffect()
	}
	checkEffectType(effectType){
		if(!this.effect[effectType]){
			this.fail = 1
		}
		else{
			this.effect = this.effect[effectType]
		}
	}
	checkTarget(){
		if(this.effect.battle){
			this.effectBattle = 1;
		}
		if(this.effect.origin){
			this.effectOrigin = 1;
		}
	}
	actionAddEffect(){
		if(this.effectBattle === 1){
			this.check = {}
			this.activePassiveEffect('battle')
		}
		if(this.effectOrigin === 1){
			this.check = {}
			this.activePassiveEffect('origin')
		}
	}
	activePassiveEffect(type){
		const effectType = Object.getOwnPropertyNames(this.effect[type])
		const length = effectType.length;
		for(let i = 0 ; i < length ; i++){
			const effect = new Effect(type,effectType[i],this.effect[type][effectType[i]],'stayData')
			const suffix = effect.suffix
			const address = effect.address
			const value = effect.value
			const limit = effect.limit
			const name = effect.name
			this.applyEffect(type,address,suffix,value)
			if(effect.name.indexOf('Max') != -1 &&  (effect.name.indexOf('Hp') != -1 || effect.name.indexOf('Sp') != -1 || effect.name.indexOf('Mp') != -1 )){
				address[1]=address[1].slice(1).toLowerCase()
				this.applyEffect(type,address,suffix,value)
			}
		}
	}
	applyEffect(target,effectTarget,suffix,value){
		let access = this.effectTargetCheck(this.character.battle,effectTarget);
		let baseValue = this.effectTargetCheck(this.character[target],effectTarget)
		switch(suffix){
			case 'Up' :
				access[effectTarget[effectTarget.length - 1]] += Math.round(baseValue[effectTarget[effectTarget.length - 1]] * ((value / 100)))
				break;
			case 'Down' :
				access[effectTarget[effectTarget.length - 1]] -= Math.round(baseValue[effectTarget[effectTarget.length - 1]] * ((value / 100)))
				break;
			case 'Plus' :
				access[effectTarget[effectTarget.length - 1]] += value
				break;
			case 'Minus' :
				access[effectTarget[effectTarget.length - 1]] -= value
				break;
			case 'Clear' :
				access[effectTarget[effectTarget.length - 1]] = 0
				break;
			case 'Change' :
				access[effectTarget[effectTarget.length - 1]] = value
				break;
														 }
	}
	effectTargetCheck(target,effectTarget){
		const length = effectTarget.length
		let access = target
		for( let i = 0 ; i < length  ; i++){
			if(!access[effectTarget[i]]){
				access[effectTarget[i]] = 0
			}
			switch(effectTarget[i]){
				case 'state' :
					this.check[effectTarget[i]] = 1;
					break;
						 }
			if(i < length - 1){
			access = access[effectTarget[i]]
			}
		}
		return access
	}
}
class AddEffect{
	constructor(performer,target,action){
		this.addEffect = action.addEffect
		if(!this.addEffect){
			return
		}
		this.performer = dataActiveCharacter[performer.code]
		this.target = dataActiveCharacter[target.code]
		this.effectPerformer = 0;
		this.effectTarget = 0;
		this.checkTarget();
		this.actionAddEffect()
		
	}
	checkTarget(){
		if(this.addEffect.performer){
			this.effectPerformer = 1;
		}
		if(this.addEffect.target){
			this.effectTarget = 1;
		}
		
	}
	actionAddEffect(){
		if(this.effectPerformer === 1){
			this.check = {}
			this.activeAddEffect('performer')
		}
		if(this.effectTarget === 1){
			this.check = {}
			this.activeAddEffect('target')
		}
	}
	activeAddEffect(type){
		const effectType = Object.getOwnPropertyNames(this.addEffect[type])
		const length = effectType.length;
		for(let i = 0 ; i < length ; i++){
			const effect = new Effect('battle',effectType[i],this.addEffect[type][effectType[i]],'activeData')
			const suffix = effect.suffix
			const address = effect.address
			const value = effect.value
			const limit = effect.limit
			const name = effect.name
			this.applyEffect(type,address,suffix,value)
			const limitCheck = this.checkOverEffect(this[type],name,address,suffix,limit)
			this.addLogEffect(this[type],name,suffix,value,limitCheck)
		}
		Performer.prototype.summaryInBattle(this[type].code)
	}
	applyEffect(target,effectTarget,suffix,value){
		let access = this.effectTargetCheck(this[target],effectTarget);
		switch(suffix){
			case 'Up' :
				access[effectTarget[effectTarget.length - 1]] = Math.round(access[effectTarget[effectTarget.length - 1]] * (1 + (value / 100)))
				break;
			case 'Down' :
				access[effectTarget[effectTarget.length - 1]] = Math.round(access[effectTarget[effectTarget.length - 1]] * (1 - (value / 100)))
				break;
			case 'Plus' :
				access[effectTarget[effectTarget.length - 1]] += value
				break;
			case 'Minus' :
				access[effectTarget[effectTarget.length - 1]] -= value
				break;
			case 'Clear' :
				access[effectTarget[effectTarget.length - 1]] = 0
				break;
			case 'Change' :
				access[effectTarget[effectTarget.length - 1]] = value
				break;
														 }
	}
	addLogEffect(target,effect,suffix,effectValue,limit){
		if(!limit){
		new AddLog([{text : target.name},{text : effect},{text : suffix},{text : effectValue}], 'Turn')
		}
		else{
		new AddLog([{text : target.name},{text : effect},{text : limit}], 'Turn')
		}

	}
	effectTargetCheck(target,effectTarget){
		const length = effectTarget.length
		let access = target
		for( let i = 0 ; i < length  ; i++){
			if(!access[effectTarget[i]]){
				access[effectTarget[i]] = 0
			}
			switch(effectTarget[i]){
				case 'state' :
					this.check[effectTarget[i]] = 1;
					break;
						 }
			if(i < length - 1){
			access = access[effectTarget[i]]
			}
		}
		return access
	}
	checkOverEffect(target,effectName,effectTarget,suffix,limit){
		let MaxValue = ''
		let targetValue = this.effectTargetCheck(target,effectTarget)
		switch(effectName){
			case 'Str' :
			case 'Vit' :
			case 'Int' :
			case 'Wis' :
			case 'Dex' :
			case 'Agi' :
			case 'Dis' :
			case 'Res' :
			case 'Spd' :
			case 'Luk' :
				switch(suffix){
					case 'Up' :
					case 'Down' :
						MaxValue = target.state.origin[effectName.toLowerCase()] * 5
						if(targetValue[effectTarget[effectTarget.length - 1]] > MaxValue){
							targetValue[effectTarget[effectTarget.length - 1]] = MaxValue
							return 'Over 500%'
						}
						break;
					case 'Plus' :
					case 'Minus' :
						MaxValue = (!limit) ? 200000 : limit//(!limit) ? 200000 : limit;
						break;
				}
				break;
			case 'Count' : 
				MaxValue = target.option.battle.maxCount * 1
				if(targetValue[effectTarget[effectTarget.length - 1]] > MaxValue){
					targetValue[effectTarget[effectTarget.length - 1]] = MaxValue
				}
				break;
										 }
		
	}
}
class DecisionCheck{
	constructor(performer,targetCode,action,type){
		this.action = action
		this.performer = performer
		this.hitType = this.action.hitType
		this.targetCode = targetCode
		this.target = dataActiveCharacter[this.targetCode]
		this.hitCheck = 0;
		this.checkCallType(type)
		
	}
	checkCallType(type){
		switch(type){
			case 'Hit' :
				this.checkActionType();
				if(this.hitCheck != 1){
					this.addLogMiss()					
				}
				break;
			case 'Disorder' :
				this.checkDisorder();
				break;
							 }
	}
	addLogMiss(){
		new AddLog( [{text : this.target.name},{text : 'avoid Attack by'},{text : this.performer.name}], 'Turn')
	}
	checkDisorder(){
		var disorder = this.action.disorder
		if(disorder){
			var disorderName = Object.getOwnPropertyNames(disorder)
			var disorderLength = disorderName.length;
			for( var i = 0 ; i < disorderLength ; i ++){
				var disorderCheck = this.decisionDisorder(this.performer,this.target,disorder[disorderName[i]])
				if(disorderCheck === 1 ){
					new Disorder(this.performer,this.targetCode,disorder[disorderName[i]])
				}
			}
		}
	}
	decisionDisorder(disorder){
			var disorderType = disorder.name
			var disorderTypeResist = (!this.target.option.battle['resist' + disorderType]) ?  0 : this.target.option.battle['resist' + disorderType];
			var rateDis = this.performer.option.battle.rateDis
			var rateRes = this.target.option.battle.rateRes + disorderTypeResist
			var dis = 0;
			var resist = 0;
		if(!this.hitType){
			if(rateDis > 100){
				resist = rateRes / (rateDis - 100)
			}
			else{
				resist = rateRes
			}
			if( rateRes > 100){
				dis = rateDis / (rateRes - 100)
			}
			else{
				dis = rateDis
			}
			var disDice = Math.random() * 100
			var ResDice = Math.random() * 100
			if(disDice <= dis){
				if(ResDice > resist){
					return 1
				}
				else{
					return 0
				}
			}
			else{
				return 0
			}
		}
		else if(this.hitType === 'Just'){
			return 1;
		}
		return 0
	}
	checkActionType(){
		var actionType = this.action.skillType
		switch(actionType){
			case 'Support' :
				this.hitCheck = 1
				break;
			case 'Combat' :
				this.hitCheck = this.decisionHit()
				break;
										 }
	}
	decisionHit(){
		var rateHit = this.performer.option.battle.rateHit
		var rateDodge = this.target.option.battle.rateDodge
		var rateDodgeLuk = this.target.option.battle.rateDodgeLuk
		if(!this.hitType){
			var hit = 0;
			var dodge = 0;
			var dodgeLuk = rateDodgeLuk
			if(rateHit > 100){
				dodge = rateDodge / (rateHit - 100)
			}
			else{
				dodge = rateDodge
			}
			if( rateDodge > 100){
				hit = rateHit / (rateDodge - 100)
			}
			else{
				hit = rateHit
			}
			var hitDice = Math.random() * 100
			var dodgeDice = Math.random() * 100
			var dodgeLukDice = Math.random() * 100
			if(hitDice <= hit){
				if(dodgeDice > dodge){
					if(dodgeLukDice > dodgeLuk){
						return 1
					}
					else{
						return 0
					}
				}
				else{
					return 0
				}
			}
			else{
				return 0
			}
		}
		else if(this.hitType === 'Just'){
			return 1;
		}
		return 0
	}
}
class Disorder{
	constructor(performer,targetCode,disorder){
		this.disorder = disorder
		this.disorderName = disorder.name
		this.performer = performer
		this.target = dataActiveCharacter[targetCode]
		this.disorderValue = this.calculrateDisorderValue()
		this.checkDisorderEffect()

	}
	calculrateDisorderValue(){
		var value = this.disorder.value
		var disOption = this.performer.option.battle
		var disOptionName = 'strengthen' + this.disorderName
		var disOptionArray = Object.getOwnPropertyNames(disOption)
		if(disOptionArray.indexOf(disOptionName) != -1){
			value += disOption[disOptionName]
		}
		var resOption = this.target.option.battle
		var resOptionName = 'immunity' + this.disorderName
		var resOptionArray = Object.getOwnPropertyNames(resOption)
		if(resOptionArray.indexOf(resOptionName) != -1){
			value -= resOption[resOptionName]
		}
		return value
	}
	checkDisorderEffect(){
		var name = this.disorderName
		var value = this.disorderValue
		var turn = this.disorder.turn
		var disorderSlot = this.target.disorder
		if(!disorderSlot[name]){
			disorderSlot[name] = {}
		}
		disorderSlot[name].name = name
		if(!disorderSlot[name].value){
		disorderSlot[name].value = value}
		else{
			disorderSlot[name].value += value
		}
		disorderSlot[name].turn = turn
			new AddLog([{text : this.target.name},{text : 'get Disorder  ['},{text :  name + ' ] '}], 'Turn')
	}
}
class DeathCheck{
	constructor(performer,parentLog){
		this.parentLog = parentLog
		this.performer = performer
		this.checkDeathCharacter()
		this.checkDrop()
		new BattleEnd()
	}
	checkDeathCharacter(){
		var character = dataActiveCharacter
		var checkData = Object.getOwnPropertyNames(character)
		this.death = []
		var length = checkData.length
		for( var i = 0 ; i < length ; i++){
			if(character[checkData[i]].health.hp <= 0 && character[checkData[i]].status != 'Death'){
				character[checkData[i]].health.hp = 0
				character[checkData[i]].status = 'Death'
				StatusView.prototype.changeStatusView(character[checkData[i]],'Battle')
				this.death.push(checkData[i])
				this.inputDeathLog(checkData[i])
			}
		}
	}
	inputDeathLog(code){
		new AddLog([{text : dataActiveCharacter[code].name, type :'Death'},{text : 'Death', type :'Death'}], 'Battle', this.parentLog)
	}
	checkDrop(){
		var death = this.death
		var length = death.length
		for(var i = 0 ; i < length ; i++){
			new Drop(this.performer, dataActiveCharacter[death[i]])
		}
	}
}
let gInterval;
function gagueChange(number){
	if(Object.getOwnPropertyNames(dataActiveCharacter).indexOf('length') === 0){
		gInterval = clearInterval(gInterval)
		return
	}
	if(!gInterval && !number && number != -1 && number != 0){
	gInterval = setInterval(function(){
			var number = Performer.prototype.checkPerformers()
		gagueChange(number)
	},50)
	}
  if((number === 0 || number) && number != -1 ){

		if(dataActiveCharacter[number].active === 0){
		new Battle(number)
		}
		else{
		gInterval = clearInterval(gInterval)
		}
	}
}
class InstantChangeStatus{
	constructor(number,atkRapid){
		let performer = this.performer = dataActiveCharacter[number]
		this.rapid = atkRapid
		this.changeCheck = 0;
		this.change = {}
		this.checkOption()
		this.checkDisorder()
		this.checkChangeData()
		if(this.changeCheck === 1){
			this.summaryChangeData()
			StatusView.prototype.changeStatusView(performer,'Battle')
		}
	}
	checkOption(){
		const option = this.performer.option.battle
		const optionName = Object.getOwnPropertyNames(option)
		const length = optionName.length
		for(let i = 0 ; i < length ; i++){
			switch(optionName[i]){
				case 'regenHp' :
				case 'regenSp' :
				case 'regenMp' :
					this.change[optionName[i]] = {
						value : option[optionName[i]],
						base : 'm' + optionName[i].slice(5),
						target : optionName[i].slice(5).toLowerCase()
					}
					break;
													}
		}
	}
	checkDisorder(){
		const disorder = this.performer.disorder
		const disorderName = Object.getOwnPropertyNames(disorder)
		const length = disorderName.length
		let value ;
		for(let i = 0 ; i < length ; i++){
			switch(disorderName[i]){
				case 'poision' : 
				case 'bleeding' :
					 value = -disorder[disorderName[i]].value
					this.change[disorderName[i]] = {
						value : this.checkDisorderResist(disorderName[i],value),
						target : 'hp'
					}
					break;
				case 'weakness' :
				 value = -disorder[disorderName[i]].value
				this.change[disorderName[i]] = {
					value : this.checkDisorderResist(disorderName[i],value),
					target : 'sp'
				}
				break;
				case 'spilled' :
				 value = -disorder[disorderName[i]].value
				this.change[disorderName[i]] = {
					value : this.checkDisorderResist(disorderName[i],value),
					target : 'mp'
				}
				break;
				case 'paralyzed' :
					this.performer.aria = {skill: "KA999900", type: "Charge"}
					break;

				}
		}
	}
	checkDisorderResist(disorderName,value){
		const option = this.performer.option.battle
		const optionName = Object.getOwnPropertyNames(option)
		if(optionName.indexOf(disorderName + 'Resist') != -1){
			const resist = option[disorderName + 'Resist']
			value -= resist
		}
		return value
	}
	checkChangeData(){
		const length = Object.getOwnPropertyNames(this.change).length
		if(!length){
			this.changeCheck  = 0
		}
		else{
			this.changeCheck = 1
		}
	}
	summaryChangeData(){
		const change = this.change
		const changeName = Object.getOwnPropertyNames(change)
		const length = changeName.length
		let health = this.performer.health
		for(let i = 0 ; i < length ; i++){
			let changeData = change[changeName[i]]
			let value = this.caculrateChangeValue(changeData)
			health[changeData.target] += value
			this.checkHealthOver(changeData.target)
		}
	}
	caculrateChangeValue(change){
		const value = change.value
		const health = this.performer.health
		const rapid = this.rapid//5000 / this.performer.option.battle.atkRapid
		let base = health[change.base]
		if(!base){
			base = 1
		}
		let returnValue = base * value / 100 * rapid / 100
		return returnValue
	}
	checkHealthOver(type){
		let health = this.performer.health
		let maxHealth = health[ 'm' + type.slice(0,1).toUpperCase() + 'p']
		let checkHealth = health[type]
		if( checkHealth > maxHealth ){
			health[type] = maxHealth
		}
		else if(checkHealth < 0){
			health[type] = 0
		}
	}
}
class Performer{
	constructor(number){
		let performerNumber = number
		this.summaryInBattle(performerNumber)
			return dataActiveCharacter[performerNumber]
	}
	createCreateActiveCodeArray(){
		const array = Object.getOwnPropertyNames(dataActiveCharacter)
		return array
	}
	createGaugeStock(){
		const array = this.createCreateActiveCodeArray()
    const length = array.length;
		const minSpd = this.createSpdStock()
		let gaugeStock = {}
		for(let i = 0 ; i < length ; i++){
			this.addGauge(array[i],minSpd)
			gaugeStock[array[i]] = dataActiveCharacter[array[i]].gauge
		}
		return gaugeStock
	}
	createSpdStock(){
		const array = this.createCreateActiveCodeArray()
    const length = array.length;
		let lowerSpd = 1e+200 
		for(let i = 0 ; i < length ; i++){
			if( dataActiveCharacter[array[i]].state.battle.spd < lowerSpd){
				lowerSpd = dataActiveCharacter[array[i]].state.battle.spd
			}
		}
		return lowerSpd
	}
	
	checkPerformers(){
		const gaugeStock = this.createGaugeStock()
		const code = Object.getOwnPropertyNames(gaugeStock)
		const length = code.length;
		let nowMax = 0 
		let maxCode = ''
    for(var i = 0; i < length; i++){
			if(gaugeStock[code[i]] >= 100 && ((document.getElementById('SkillBorder').style.visibility == "visible" && dataActiveCharacter[code[i]].ally == "player" && !dataActiveCharacter[code[i]].aria.skill) )){
				code.splice(i,1)
				i--
			}
			if(nowMax < gaugeStock[code[i]] ){
				nowMax = gaugeStock[code[i]]
				maxCode = code[i]
			}
    }  
		if(nowMax >= 100){
      var returnValue = maxCode
			}
		else{
			var returnValue = -1
		}
    return returnValue
  }
	calculrateGauge(spd,minSpd){
		let gauge = 1
		const x = spd
		const y = minSpd
		gauge += Math.pow(10,( 3 / (4 * (Math.sqrt(2)))) - 1) * Math.pow(37, -1/Math.sqrt(2)) * Math.pow(x - y, 3 / (10 * Math.sqrt(2)))	+ Math.pow( x - y, 1 / Math.pow(2 , 5 / 6) ) / 100 + Math.pow( 10 , 1 / Math.pow(2 , 5 / 6) - 1 ) * Math.pow( Math.sqrt(x) - Math.sqrt(y), 1 / Math.pow(2 , 5 / 6))
		return gauge
	}
	addGauge(number,minSpd){
		if(dataActiveCharacter[number].health.hp != 0){
			var atkRapid = this.calculrateGauge(dataActiveCharacter[number].state.battle.spd,minSpd)//dataActiveCharacter[number].option.battle.atkRapid
			if(dataActiveCharacter[number].gauge < 100){
				dataActiveCharacter[number].gauge += atkRapid;
				if(dataActiveCharacter[number].gauge > 100){
					dataActiveCharacter[number].gauge = 100;
				}
			}//5000/atkRapid //(101 - Math.pow(atkRapid,1/2.15)) / 100;
			new InstantChangeStatus(number,atkRapid)
			this.changeGaugeView(dataActiveCharacter[number])
		}
		else{
			if(dataActiveCharacter[number].gauge != 0){
			dataActiveCharacter[number].gauge = 0;
			this.changeGaugeView(dataActiveCharacter[number])
			}
		}
	}
	summaryInBattle(performerNumber){
		var performer = dataActiveCharacter[performerNumber]
		new Option(performer,'inBattle')
	}
	changeGaugeView(performer){
	const performerCode = performer.code
	let gauge = document.getElementById(performerCode + 'Gauge')
	const stock = performer.gauge
	let width = Math.abs(stock)

	if(stock > 0){
		gauge.style.backgroundColor = 'limegreen';
		if(width > 100){
			width = 100
		}
	}
	else{
		if(width > 100){
			width %= 100
		}
		var gaugeColor = 'rgba( '
		var backColor = 'rgba( '
		var max = gauge.parentElement
		switch(Math.floor(Math.abs(stock) / 100)){
			case 0 :
				gaugeColor += '100, 100, 100, 0.85)'
				backColor += '0, 0, 0, 0.25)'
				break;
			case 1 :
				gaugeColor += '90, 90, 90,0.85)'
				backColor += '100, 100, 100, 0.85)'
				break;
			case 2 :
				gaugeColor += '80, 80, 80,0.85)'
				backColor += '90, 90, 90,0.85)'
				break;
			case 3 :
				gaugeColor += '70, 70, 70,0.85)'
				backColor += '80, 80, 80,0.85)'
				break;
			case 4 :
				gaugeColor += '60, 60, 60,0.85)'
				backColor += '70, 70, 70,0.85)'
				break;
			default :
				gaugeColor += '50, 50, 50,0.85)'
				backColor += '60, 60, 60,0.85)'
				break;
											}
		gauge.style.backgroundColor = gaugeColor;
		max.style.backgroundColor = backColor
	}
	gauge.innerText = Math.floor(stock)
	gauge.style.width = width + '%'
}
}
class Drop{
	constructor(performer,dropper){
				if(dropper.ally != 'player'){
				this.checkItemDrop(dropper);
				this.checkFundsDrop(dropper);

					if(performer.ally === 'player'){
						if(performer.type === 'summon'){
							var inNumber = performer.summoner
						}
						else{
							var inNumber = performer.code
						}
						this.checkExpDrop(dropper,inNumber);
					}
			}
	}
	checkItemDrop(dropper){
		var dropTable = dropper.dropTable
		var length = dropTable;
		var checkTable = dropTable.slice(0)
		var length = dropTable.length
		for(; length > 0 ;){
			var randomDice = Math.floor(Math.random() * length)
			var check = checkTable.splice(randomDice,1)[0]
			var checkDice = Math.random() * 1000000;
			if(checkDice < check[0]){
				var item = new Item(check[1])
				var category = item.category
				var code = item.code
				new AddLog([{text : dropper.name},{text : 'drop Item'},{text : item.name}], 'Battle')
				new AddLog([{text : dropper.name},{text : 'drop Item'},{text : item.name}],"System");

				dropper.dropTable = []
				break;
			}
			length--
		}
	}
	checkExpDrop(dropper,number){
		let performer = playerTeam.character[number]
		let exp = dropper.exp
		let levelExp = 0;
		const name = Object.getOwnPropertyNames(exp)
		for(let i = 0, length = name.length; i < length; i++){
			performer.stateExp[name[i]] -= Math.floor(exp[name[i]])
			levelExp += Math.round(exp[name[i]] / 20)
			exp[name[i]] /= 2		
		}		
		console.log(levelExp)
		performer.levelExp -= levelExp
		new LevelUp(number)
	}
	checkFundsDrop(dropper){
		var funds= dropper.funds
		playerTeam.funds += Math.floor(funds);
		funds /= 2;
		
	}
}
class BattleEnd{
	constructor(type){
		this.eLength = 0;
		this.pLength = 0;
		this.data = Object.getOwnPropertyNames(dataActiveCharacter)
		this.endCheck = 0;
		this.checkAllyLength()
		this.checkDeathCount()
		this.checkTurnOver()

		this.checkWinAlly()

		if(this.endCheck === 1 || type === 'runAway'){
			this.linkageStatus();
			this.endBattle()
		}
	}	
	checkAllyLength(){
		var data = this.data
		var length = data.length;
		for(var i = 0; i < length; i++){
			if(data[i].indexOf('E') != -1){
				this.eLength += 1
			}
			else 	if(data[i].indexOf('P') != -1){
				this.pLength += 1
			}
		}
	}
	checkDeathCount(){
		var data = this.data
		var length = data.length
		for(var i = 0 ; i < length ; i++){
			if(data[i].indexOf('E') != -1){
				if(dataActiveCharacter[data[i]].health.hp <= 0){
				this.eLength -= 1
				}
			}
			else 	if(data[i].indexOf('P') != -1){
				if(dataActiveCharacter[data[i]].health.hp <= 0){
				this.pLength -= 1
				}
			}
		}
	}
	checkWinAlly(){
		if(this.endCheck === 1){
			new AddLog( [{text : "Turn Over"}],'Battle')
		}
		else if(this.pLength === 0){
			new AddLog( [{text : playerTeam.name},{text : 'Lose'}],'Battle')
			this.endCheck = 1
			
		}
		else if(this.eLength === 0){
			new AddLog( [{text : playerTeam.name},{text : 'Win'}] ,'Battle')
			this.endCheck = 1
			const poeIndex= mapData.positionEnemyCount;
			if(poeIndex != null){
				const poe = mapData.positionEnemyData[poeIndex]
				mapData.map[poe.y][poe.x] = 0;
				delete mapData.positionEnemyData[poeIndex]
			}
		}
	}
	checkTurnOver(){
		if(battleTurn > 100){
			this.endCheck = 1;
		}
	}
	endBattle(){
		dataActiveCharacter = {}
		document.getElementById('Map').style.visibility = 'visible';
		document.getElementById('MiniMap').style.visibility = 'visible';
		document.getElementById('playerBorder').innerHTML = ''
		document.getElementById('enemyBorder').innerHTML = ''			
		CreateMap.prototype.changeOnPress(1)
		battleCheck = -1;
	}
	linkageStatus(){
		const name = Object.getOwnPropertyNames(playerGroup)
		const length = name.length
		const healthName = ['hp','sp','mp']
		const maxHealthName = ['mHp','mSp','mMp']
		for(let i = 0 ; i < length ; i++){
			let health = playerGroup[name[i]].battle.health
			let linkHealth = dataActiveCharacter[name[i]].health
			for( let j = 0 ; j < 3; j ++){
				health[healthName[j]] = linkHealth[healthName[j]]
				if(health[healthName[j]] > health[maxHealthName[j]]){
					health[healthName[j]]  = health[maxHealthName[j]] * 1
				}
			}
			playerGroup[name[i]].status = dataActiveCharacter[name[i]].status
			StatusView.prototype.changeStatusView(playerGroup[name[i]],'Party')		
		}		

	}
}
class Battle{
	constructor(number){
		if(number === -1 || (!number && number != 0)){
			return
		}
		else {
			var performer= new Performer(number)
			this.checkDisorderPerforemr(performer)
			if(battleCheck== -1){
				return
			}
		}
		if(!performer.aria.skill){
			if(performer.type != 'player'){
				var action = new Parttern(performer,performer.parttern).action//this.checkParttern(performer,performer.parttern)
			  new activeAction(action,performer,-1,'first')
				}
			else if(performer.type === 'player'){
				if(performer.autoType != 0){
					var action;
					switch(performer.autoType ){
						case '2':
						const length = performer.skill.length;
						action = performer.skill[Math.floor(Math.random() * length)];
						new activeAction(action,performer,-1,'first')
						break;
						case '1':
						action = new Parttern(performer,performer.parttern).action//this.checkParttern(performer,performer.parttern)
						new activeAction(action,performer,-1,'first')
						break;
					}

				}
				else if(document.getElementById('SkillBorder').style.visibility != "visible"){
					new SkillButtonView(number)
					if(battleMode > 0){
					gInterval = clearInterval(gInterval);
					}
				}
		  //this.createSelectSkillButton(performer)
			}
		}
		else if(performer.aria.skill){
			var action = performer.aria.skill
			new activeAction(action,performer)
			}
	}
	checkDisorderPerforemr(performer){
		var disorder = performer.disorder
		var disorderName = Object.getOwnPropertyNames(disorder)
		var disorderLength = disorderName.length
		for(var i = 0 ; i < disorderLength ; i++){
			if(disorder[disorderName[i]].turn > 0){
				disorder[disorderName[i]].turn -= 1;
				if(disorder[disorderName[i]].turn === 0){
					delete disorder[disorderName[i]]
				}
			}
		}
	}
}
class SkillValue{
	constructor(performer,target,skill,disorder){
		this.skill = skill
		this.performer = performer
		this.target = target
		this.state = {
			performer : performer.state.battle,
			target : target.state.battle
		}
		this.option = {
			performer : performer.option.battle,
			target : target.option.battle
		}
		this.power = skill.power
		this.skillType = skill.skillType
		this.defenceType = skill.defenceType
		this.baseType = skill.baseType
		let baseValue = this.baseValue = this.calculrateBaseValue()
		let value =  this.calculratePower();
		let skillType = skill.skillType
		value = this.checkCritical(value)
		if(skillType === 'Combat'){
			var perfectDefence = this.checkPerfectDefence()
			if(perfectDefence === 1){
				if(!skill.hitType || skill.hitType != 'Just'){
					value[0] = 0;
				}
				else if(skill.hitType === 'Just'){
				}
			}
			value = this.calculrateDefence(value)
			value = this.calculrateResist(value)
		}
		else if(skillType === 'Support'){
			if(!this.defenceType){
				value = value[0] + value [1]
			}
			else{	
				value = this.calculrateDefence(value)
				value = this.calculrateResist(value)
			}
		}
		this.value = Math.ceil(value)
		this.addEffect = skill.addEffect
	}
	checkBaseType(){
		if(!this.baseType || this.baseType.length === 0){
			switch(this.power.base.type){
				case 'Physical' :
					this.baseType = [['str',100]]
					break;
				case 'Magical' :
					this.baseType = [['int',100]]
					break;
				case 'Hybrid' :
					this.baseType = [['str',50],['int',50]]
					break;					
														 }
		}
	}
	calculrateBaseValue(){
		this.checkBaseType();
		const baseType = this.baseType
		const length = baseType.length;
		let baseValue = 0
		for(let i = 0 ; i < length; i ++){
			baseValue += Option.prototype.valueAtk(this.state.performer[baseType[i][0]]) * baseType[i][1] / 100
		}
		return baseValue
	}
	calculratePower(){
		const baseDamage = this.baseValue
		const value = this.power
		const valueLength = Object.getOwnPropertyNames(value).length
		const option = this.option.performer
		const baseValueType = value.base.type//[0][0]
		const baseValue = value.base.value//[0][1]
		let damage = 0
		let trueDamage = 0;

		switch(baseValueType){
			case 'Physical' :
			    damage += (baseDamage + option.atkPhy) * baseValue / 100
			    if (!!option.atkPhyTrue) {
			        trueDamage += (option.atkPhyTrue) * baseValue / 100
			    }
				break;
			case 'Magical' :
			    damage += (baseDamage + option.atkMag) * baseValue / 100
			    if (!!option.atkMagTrue) {
			        trueDamage += (option.atkMagTrue) * baseValue / 100
			    }
				break;
			case 'Hybrid' :
			    damage += (baseDamage + (option.atkPhy + option.atkMag) / 2) * baseValue / 100
			    if (!!option.atkPhyTrue) {
                    trueDamage+=(option.atkPhyTrue) * baseValue / 200
			    }
			    if (!!option.atkMagTrue) {
			        trueDamage += (option.atkMagTrue) * baseValue / 200

			    }
				break;
		}
		if (valueLength > 1) {
                                                
			for(let i = 1 ; i < valueLength; i++){
				damage = this.checkAddValue(value[i],damage)
							
			}
		}

        return [damage , trueDamage]
	}
	checkAddValue(addArray,value){// {value : , target, address, suffix}
		const addBaseValue = addArray.value
		const targetType = addArray.target
		const suffix = addArray.suffix
		let addValue = this.checkAddAddress(addArray.address,targetType)
		let calculratValue = addValue * addBaseValue / 100
		switch(suffix){
			case 'Plus' :
				value += addValue * addBaseValue / 100
				break;
			case 'Minus' :
				value -= addValue * addBaseValue / 100
				break;
			case 'Multi' :
				value *= addValue * addBaseValue / 100
				break;
			case 'Divide' :
				value /= addValue * addBaseValue / 100
				break;
								 }
		return value
	}
	checkAddAddress(address,type){
		let value = this[type]
		const length = address.length ;
		for( let i = 0 ; i <length ; i++){
			if( i > 0 && address[i - 1].indexOf('health') !== -1 && address[i].length > 3){
				value = this.checkHealthAddAddress(address[i],value)
			}
			else{
				value = value[address[i]]
			}
		}
		return value
	}
	checkHealthAddAddress(address,target){
		const nowHealth = target[address.slice(2).toLowerCase()]
		const maxHealth = target['m' + address.slice(2)]
		const suffix = address.slice(0,2)
		let value = ''
		switch(suffix){
			case 'rP' :
				value = nowHealth / maxHealth  * 100
				break;
			case 'lP' :
				value = (maxHealth  - nowHealth) / maxHealth  * 100
				break;
			case 'lN' :
				value = (maxHealth  - nowHealth) 
				break;
								 }
		return value
		
	}
	checkCritical(damage){
		const rateCrtLuk = this.option.performer.rateCrtLuk
		const rateCrt = this.option.performer.rateCrt
		const rateVal = this.option.performer.rateVal
		let multiply = 1;
		const diceLuk = Math.random() * 100;
		const diceCrt = Math.random() * 100;
		if(diceLuk <= rateCrtLuk){
			multiply = 2;
			new AddLog( [{text : 'Luk multiply' + multiply}],'Turn')
		}
		else if(diceCrt <= rateCrt){
			multiply = rateVal 
			new AddLog( [{text : 'multiply' + multiply}],'Turn')
		}
		damage[0] *= multiply
		damage[1] *= multiply
		return damage
	}
	checkPerfectDefence(){
		const ratePFD = this.option.target.ratePFD
		const rateHitJust = this.option.performer.rateHitJust
		const dicePFD = Math.random() * 100;
		const checkPFD = ratePFD - rateHitJust
		if(dicePFD <= checkPFD){
			return 1;
		}
		else{
			return 0;
		}
	}
	calculrateDefence(damage){
		const option = this.option.target
		const type = this.skill.defenceType
		let value = damage[0];
		let trueValue = damage[1];
		const minValue = damage[0] / 10;
		if (value != 0) {
		    let perDef = 0;
		    let numDef = 0;
			switch(type){
			    case 'Physical': //'defPhyPer','defPhyNum','resPhyPer','resPhyNum'
			        if (!!option.defPhyPer) {
			            perDef += option.defPhyPer
			        }
			        if (!!option.defPhyNum) {
			            numDef += option.defPhyNum
			        }
					break;
			    case 'Magical':
			        if (!!option.defMagPer) {
			            perDef += option.defMagPer
			        }
			        if (!!option.defMagNum) {
			            numDef += option.defMagNum
			        }
					break;
			    case 'Hybrid':
			        if (!!option.defPhyPer) {
			            perDef += option.defPhyPer / 2 
			        }
			        if (!!option.defPhyNum) {
			            numDef += option.defPhyNum / 2
			        }
			        if (!!option.defMagPer) {
			            perDef += option.defMagPer / 2
			        }
			        if (!!option.defMagNum) {
			            numDef += option.defMagNum / 2
			        }
					break;
				case 'Ignore' : 
					break;
			}
			value = value * (100 - perDef) / 100 - (numDef);
			if(value < minValue){
				value = minValue
			}
		}
		value +=trueValue
		return value;
	}
	calculrateResist(damage){
		const option = this.option.target
		const type = this.skill.power.base.type
		let value = damage;
		const minValue = damage / 100 ; 
		switch(type){
			case 'Physical' : //'defPhyPer','defPhyNum','resPhyPer','resPhyNum'
				value = value * ( 100 - option.resPhyPer) / 100 - option.resPhyNum;
				break;
			case 'Magical' :
				value = value * ( 100 - option.resMagPer) / 100 - option.resMagNum;
				break;
			case 'Hybrid' : 
				value = value * ( 100 - (option.resPhyPer + option.resMagPer) / 2) / 100 - (option.resPhyNum + option.resMagNum) / 2;
				break;
							 }
		if(value < minValue){
			value = minValue
		}
		return value
	}
	calculrateElement(){}
}