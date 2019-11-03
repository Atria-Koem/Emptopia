class Parttern{
	constructor(performer,parttern){
		var partternLength = parttern.length
		var action = 0;
		for(var i = 0 ; i < partternLength; i++){
			if(i > 0 && (action === 'ADDJUDGE' && parttern[i-1][2] === action)){
			action = this.judgeParttern(parttern[i],performer)
			}
			else if(i > 0 && (action != 'ADDJUDGE' && parttern[i-1][2] === 'ADDJUDGE')){
				// 이전 조건이 다중구문 이면서 불만족했으나 현재 조건에 대해서는 패스
				// action != 'ADDJUDGE' && parttern[i-1][2] == 'ADDJUDGE'
				// 이전 조건이 다중구문 이면서 만족했고 현재 조건이 다중 구문일때 진행
				// action == 'ADDJUDGE' && parttern[i-1][2] == action
				// 이전 조건이 다중구문 이면서 만족했고 현재 조건이 액션일때
				// 이전 조건과 상관없을 경우
				// 
			}
			else{
				action = this.judgeParttern(parttern[i],performer)
			}
			if(action != 0 && action != 'ADDJUDGE'){
				break;
			}
		}
		if(!action){
			action = "KA000000"
		}
		this.action =  action
	}
	judgeParttern(parttern,performer){
			var judgeCause = parttern[0]
			var value = (!parttern[1]) ? 0 : parttern[1] ;
			var action = parttern[2]
			switch(judgeCause){
				case 'OT00000' :
					return action
				case 'OTRAND0' :
					if(Math.random()*100 <= value ){
						return action
					}
					break;
				case 'OTCOUNT' :
					if(!parttern[3]){
						parttern.push(0)
					}
					if(parttern[3] < value || parttern[3] === 0 ){
						parttern[3] += 1
						return action
					}
					break;
				case 'MH00000' :
					if(performer.health.mHp === value){
						return action
					}
					break;
				case 'MH00100' :
					if(performer.health.mHp >= value){
						return action
					}
					break;
				case 'MH00200' :
					if(performer.health.mHp <= value){
						return action
					}
					break;
				case 'NH00000' :
					if(performer.health.hp === value){
						return action
					}
					break;
				case 'NH00100' :
					if(performer.health.hp >= value){
						return action
					}
					break;
				case 'NH00200' :
					if(performer.health.hp <= value){
						return action
					}
					break;
				case 'MM00000' :
					if(performer.health.mMp === value){
						return action
					}
					break;
				case 'MM00100' :
					if(performer.health.mMp >= value){
						return action
					}
					break;
				case 'MM00200' :
					if(performer.health.mMp <= value){
						return action
					}
					break;
				case 'NM00000' :
					if(performer.health.mp === value){
						return action
					}
					break;
				case 'NM00100' :
					if(performer.health.mp >= value){
						return action
					}
					break;
				case 'NM00200' :
					if(performer.health.mp <= value){
						return action
					}
					break;
				case 'MS00000' :
					if(performer.health.mSp === value){
						return action
					}
					break;
				case 'MS00100' :
					if(performer.health.mSp >= value){
						return action
					}
					break;
				case 'MS00200' :
					if(performer.health.mSp <= value){
						return action
					}
					break;
				case 'NS00000' :
					if(performer.health.sp === value){
						return action
					}
					break;
				case 'NS00100' :
					if(performer.health.sp >= value){
						return action
					}
					break;
				case 'NS00200' :
					if(performer.health.sp <= value){
						return action
					}
					break;
				case 'DE10000' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(performer.ally === dataActiveCharacter[i].ally && dataActiveCharacter[i].health.hp <= 0){
							judge += 1;
						}
					}
					if(judge === value){
						return action
					}
					break;
				case 'DE10100' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(performer.ally === dataActiveCharacter[i].ally && dataActiveCharacter[i].health.hp <= 0){
							judge += 1;
						}
					}
					if(judge >= value){
						return action
					}
					break;
				case 'DE10200' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(performer.ally === dataActiveCharacter[i].ally && dataActiveCharacter[i].health.hp <= 0){
							judge += 1;
						}
					}
					if(judge <= value){
						return action
					}
					break;
						 }
			return  0
		}

}