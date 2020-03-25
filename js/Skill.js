class CheckSkill{	
	/*KA100003 : { 
		success : {
			0 : {
				jobCode :  '',
				baseSkill : 'KA100000'
			}
		},
		fail : {
			0 : { tribe : "T*4*"} 
		}
	}*/
	constructor(performerNumber,skillCode){
		this.performer = playerTeam.character[performerNumber]
		this.skillData = dataSkill[skillCode]
		this.checkSkillTree()
		if(skillCode.indexOf('T') != -1){
			this.check = 'fail'
			return
		}
		if(!this.learnCondition){
			this.check = 'success'
			return 
		}
		this.skillLearnArray = this.performer.skill
		this.success = 0;
		this.fail = 0;
		this.checkSuccess()
		if(this.fail === 0){
			this.checkFail()
		}
		if(this.fail){
			this.check = 'fail'
			return 
		}
		else if(this.success){
			this.check = 'success'
			return 
		}
	}
	checkSkillTree(){
		this.learnCondition = dataSkillTree[this.skillData.code]
	}
	checkSuccess(){
		const success = this.learnCondition.success
		const name = Object.getOwnPropertyNames(success)
		const length = name.length;
		for( let i = 0 ; i < length ; i++){
			const check = success[i]
			const checkName = Object.getOwnPropertyNames(check)
			const checkLength = checkName.length
			let checkSuccess = 0
			for( let j = 0 ; j < checkLength; j++){
				const value = this['check' + checkName[j]](check[checkName[j]])
				switch(value){
					case 0 :
						checkSuccess = 0
						j = checkLength;
						break;
					case 1 :
						checkSuccess = 1
						break;
										}
			}
			if(checkSuccess === 1){
				this.success = 1
				i = length
			}
		}
		if(this.success === 0){
			this.fail = 1
		}
	}
	checkFail(){
		const fail = this.learnCondition.fail
		if(!fail){
			return
		}
		const name = Object.getOwnPropertyNames(fail)
		const length = name.length;
		for(let i = 0 ; i < length ; i ++){
			const check = fail[i]
			const checkName = Object.getOwnPropertyNames(check)
			const checkLength = checkName.length
			let checkFail = 0
			for( let j = 0; j < checkLength; j++){
				const value = this['check' + checkName[j]](check[checkName[j]])
				switch(value){
					case 0 :
						checkFail = 0
						break;
					case 1 :
						checkFail = 1
						j = checkLength;
						break;
										}
			}
			if(checkFail === 1){
				this.fail = 1
				i = length;
			}
		}
	}
	checkSkill(array){
		const length = array.length
		let success = 0
		for( let i = 0 ; i < length ; i++){
			const checkSkill = this.skillLearnArray.indexOf(array[i])
			switch(checkSkill){
				case -1 :
					success = 0
					i = length
					break;
				default :
					success = 1
					break;
											 }
		}
		return success
	}
	checkJob(array){
		const job = this.performer.job
		if(!array.length){
			return 1
		}
		let returnCheck = 0
		const length = array.length
		for( let i = 0 ; i <length ; i++){
			const checkJob = array[i]
			const checkLength = checkJob.length
			const performer = job.slice(0,checkLength)
			if(checkJob === performer){
				returnCheck = 1
				i = length
			}
		}
		return returnCheck
	}
	checkTribe(array){
		const tribe = this.performer.tribe
		const performerCount = tribe.slice(1,2)
		const performerType = tribe.slice(2)
		if(!array.length){
			return 1
		}
		const length = array.length
		let returnCheck = 0
		for( let i = 0 ; i < length ; i++){
			const checkTribe = array[i]
			const tribeCount = checkTribe.slice(1,2)
			let countCheck = 0
			if(tribeCount === '*'){
				countCheck = 1
			}
			else{
				if(performerCount == tribeCount){
					countCheck = 1
				}
			}
			const tribeType = checkTribe.slice(2)
			let typeCheck = 0
			if(tribeType === '*'){
				typeCheck = 1
			}
			else{
				const typeLength = tribeType.length
				let check = 0
				for(let j = 0 ; j < typeLength; j++){
					const tribeValue = tribeType.slice(j, j + 1)
					const performerValue = performerType.slice(j, j + 1)
					if(tribeValue === '*'){
						check = 1
					}
					else if( performerValue === tribeValue){
						check = 1
					}
					else if( performerValue != tribeValue){
						j = typeLength
					}
				}
				if(check === 1){
					typeCheck = 1
				}
			}
			if(countCheck === 1 && typeCheck === 1){
				returnCheck = 1
			}
		}
		return returnCheck
	}
}

class LearnSkill{
	constructor(performerCode,skillCode){
		if(!performerCode || !skillCode){
			return
		}
		let performer = this.performer = playerTeam.character[performerCode]
		const skill = this.skill = dataSkill[skillCode]
		this.fail = 0;
		this.checkOverLapSkill()
		this.checkSkillPoint()
		this.learnSkill()
	}
	checkOverLapSkill(){
		const skill = this.performer.skill
		const code = this.skill.code
		if(skill.indexOf(code) != -1){
			this.fail = 'OverLap'
		}
	}
	checkSkillPoint(){
		let skillPoint = this.performer.skillPoint
		const learnPoint = (!this.skill.point) ? 0 : this.skill.point
		if(skillPoint >= learnPoint){
			this.performer.skillPoint -= learnPoint
		}
		else{
			this.fail = 'Point Loss'
		}
	}
	learnSkill(){
		if(this.fail != 0){
			console.log(this.fail)
			return
		}
		this.performer.skill.push(this.skill.code)
		this.performer.skill.sort()
	}
}