
const dataPartternType = {
	'OT00000' : { text : "반드시"},
	'OTRAND0' : { text : "○○%의 확률로"},
	'OTCOUNT' : { text : "○회 까지 반드시"},
	'MH00000' : { text : "자신의 최대 HP가 ○○ 일때"},
	'MH00100' : { text : "자신의 최대 HP가 ○○ 보다 클 때"},
	'MH00200' : { text : "자신의 최대 HP가 ○○ 보다 작을 때"},
	'NH00000' : { text : "자신의 현재 HP가 ○○ 일때"},
	'NH00100' : { text : "자신의 현재 HP가 ○○ 보다 클 때"},
	'NH00200' : { text : "자신의 현재 HP가 ○○ 보다 작을 때"},
	'NH00010' : { text : "자신의 현재 HP가 ○○% 일때"},
	'NH00110' : { text : "자신의 현재 HP가 ○○% 보다 클 때"},
	'NH00210' : { text : "자신의 현재 HP가 ○○% 보다 작을 때"},
	'MM00000' : { text : "자신의 최대 MP가 ○○ 일때"},
	'MM00100' : { text : "자신의 최대 MP가 ○○ 보다 클 때"},
	'MM00200' : { text : "자신의 최대 MP가 ○○ 보다 작을 때"},
	'NM00000' : { text : "자신의 현재 MP가 ○○ 일때"},
	'NM00100' : { text : "자신의 현재 MP가 ○○ 보다 클 때"},
	'NM00200' : { text : "자신의 현재 MP가 ○○ 보다 작을 때"},
	'NM00010' : { text : "자신의 현재 MP가 ○○% 일때"},
	'NM00110' : { text : "자신의 현재 MP가 ○○% 보다 클 때"},
	'NM00210' : { text : "자신의 현재 MP가 ○○% 보다 작을 때"},
	'MS00000' : { text : "자신의 최대 SP가 ○○ 일때"},
	'MS00100' : { text : "자신의 최대 SP가 ○○ 보다 클 때"},
	'MS00200' : { text : "자신의 최대 SP가 ○○ 보다 작을 때"},
	'NS00000' : { text : "자신의 현재 SP가 ○○ 일때"},
	'NS00100' : { text : "자신의 현재 SP가 ○○ 보다 클 때"},
	'NS00200' : { text : "자신의 현재 SP가 ○○ 보다 작을 때"},
	'NS00010' : { text : "자신의 현재 SP가 ○○% 일때"},
	'NS00110' : { text : "자신의 현재 SP가 ○○% 보다 클 때"},
	'NS00210' : { text : "자신의 현재 SP가 ○○% 보다 작을 때"},
	'DE10000' : { text : "아군의 사망자가 ○○ 일때"},
	'DE10100' : { text : "아군의 사망자가 ○○ 보다 클 때"},
	'DE10200' : { text : "아군의 사망자가 ○○ 보다 작을 때"},
	'DE20000' : { text : "적군의 사망자가 ○○ 일때"},
	'DE20100' : { text : "적군의 사망자가 ○○ 보다 클 때"},
	'DE20200' : { text : "적군의 사망자가 ○○ 보다 작을 때"},
	'DE30000' : { text : "전체 사망자가 ○○ 일때"}, 
	'DE30100' : { text : "전체 사망자가 ○○ 보다 클 때"},
	'DE30200' : { text : "전체 사망자가 ○○ 보다 작을 때"},
	'CC10000' : { text : "영창 중인 아군이 ○○일 때"}
}

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
				case 'NH00010' :
					if(performer.health.hp/performer.health.mHp == value/100){
						return action
					}
					break;
				case 'NH00110' :
					if(performer.health.hp/performer.health.mHp >= value/100){
						return action
					}
					break;
				case 'NH00210' :
					if(performer.health.hp/performer.health.mHp <= value/100){
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
				case 'NM00010' :
					if(performer.health.mp/performer.health.mMp == value / 100){
						return action
					}
					break;
				case 'NM00110' :
					if(performer.health.mp/performer.health.mMp >= value / 100){
						return action
					}
					break;
				case 'NM00210' :
					if(performer.health.mp/performer.health.mMp <= value / 100){
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
				case 'NS00000' :
					if(performer.health.sp/performer.health.mSp == value/100){
						return action
					}
					break;
				case 'NS00100' :
					if(performer.health.sp/performer.health.mSp >= value/100){
						return action
					}
					break;
				case 'NS00200' :
					if(performer.health.sp/performer.health.mSp <= value/100){
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
				case 'DE20000' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(performer.ally !== dataActiveCharacter[i].ally && dataActiveCharacter[i].health.hp <= 0){
							judge += 1;
						}
					}
					if(judge === value){
						return action
					}
					break;
				case 'DE20100' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(performer.ally !== dataActiveCharacter[i].ally && dataActiveCharacter[i].health.hp <= 0){
							judge += 1;
						}
					}
					if(judge >= value){
						return action
					}
					break;
				case 'DE20200' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(performer.ally !== dataActiveCharacter[i].ally && dataActiveCharacter[i].health.hp <= 0){
							judge += 1;
						}
					}
					if(judge <= value){
						return action
					}
					break;
				case 'DE30000' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(dataActiveCharacter[i].health.hp <= 0){
							judge += 1;
						}
					}
					if(judge === value){
						return action
					}
					break;
				case 'DE30100' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(dataActiveCharacter[i].health.hp <= 0){
							judge += 1;
						}
					}
					if(judge >= value){
						return action
					}
					break;
				case 'DE30200' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(dataActiveCharacter[i].health.hp <= 0){
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
