const  dataTribe = {
	/*
	T0 : { // T + 0 (rebirthCount / 10) + ~(0~9)  Ribirth - 
	code : 'T0',
	name : 'None',
	state : {
	str: 100,				int: 100,				dex: 100,				dis : 100,				spd: 100,
	vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 100 // 100 ==  * 1  150 == *1.5
	}
	element : { } //100 ==  * 1  150 == *1.5
	passvie : {
	max : number
	skillCode : []
	}
	}
	*/
	T0 : {
		code : 'T0',
		name : 'None',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 100,				spd: 100,
			vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 100
		},
		elelemnt : {}
	},
	T00 : {
		code : 'T00',
		name : 'Human',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 95,				spd: 100,
			vit: 100,				wis: 100,				agi: 105,				res : 95,				luk: 105
		},
		elelemnt : {}
	},
	T01 : {
		code : 'T01',
		name : 'Machina',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 95,				spd: 100,
			vit: 105,				wis: 95,				agi: 100,				res : 105,				luk: 100
		},
		elelemnt : {},
		passive : {
			max : 1,
			skillCode : ['KPT10000','KPT10001']
		}
	},
	T02 : {
		code : 'T02',
		name : 'Ort',
		state : {
			str: 100,				int: 105,				dex: 95,				dis : 100,				spd: 95,
			vit: 100,				wis: 105,				agi: 95,				res : 100,				luk: 100
		},
		elelemnt : {}
	},
	T03 : {
		code : 'T03',
		name : 'Sprit',
		state : {
			str: 100,				int: 100,				dex: 105,				dis : 105,				spd: 100,
			vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 95
		},
		elelemnt : {}
	},
	T04 : {
		code : 'T04',
		name : 'Beast',
		state : {
			str: 105,				int: 95,				dex: 95,				dis : 100,				spd: 105,
			vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 100
		},
		elelemnt : {}
	},
	T05 : {
		code : 'T05',
		name : 'Kernel',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 95,				spd: 100,
			vit: 105,				wis: 95,				agi: 100,				res : 105,				luk: 100
		},
		elelemnt : {},
		passive : {
			max : 1,
			skillCode : ['KPT10000','KPT10001']
		}
	},
	T06 : {
		code : 'T06',
		name : 'Dead',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 95,				spd: 100,
			vit: 105,				wis: 95,				agi: 100,				res : 105,				luk: 100
		},
		elelemnt : {},
		passive : {
			max : 1,
			skillCode : ['KPT10000','KPT10001']
		}
	},
	T07 : {
		code : 'T07',
		name : 'Formless',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 95,				spd: 100,
			vit: 105,				wis: 95,				agi: 100,				res : 105,				luk: 100
		},
		elelemnt : {},
		passive : {
			max : 1,
			skillCode : ['KPT10000','KPT10001']
		}
	},
	T08 : {
		code : 'T08',
		name : 'Inorganic',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 95,				spd: 100,
			vit: 105,				wis: 95,				agi: 100,				res : 105,				luk: 100
		},
		elelemnt : {},
		passive : {
			max : 1,
			skillCode : ['KPT10000','KPT10001']
		}
	},
	T09 : {
		code : 'T09',
		name : 'Exterior',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 105,				spd: 100,
			vit: 95,				wis: 100,				agi: 100,				res : 105,				luk: 95
		},
		elelemnt : {},
		passive : {
			max : 1,
			skillCode : ['KPT90000']
		}
	},
	T180 : { 
	  code : 'T180', 
	  name : 'Human Fringe', 
	 state : {
 		str : 100, 	vit : 120, 	int : 100, 	wis : 90, 	dex : 100, 	
 		agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 90
	}, 
	 passive : {
	}, 
	  exp : '인간언저리는 인간에 가깝지만 인간은 아닌 것으로 판명되었다. 보다 두꺼운 지방을 가지고 있어 화염 속성에 강하다.' 
	},
	T140 : { 
		  code : 'T140', 
		  name : 'Furry', 
		 state : {
			str : 90, 	vit : 110, 	int : 80, 	wis : 100, 	dex : 110, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 110, 	luk : 100
		}, 
		 passive : {
		}, 
		  exp : '수인으로 지능이 조금 낮지만 지능이 낮은 만큼 육체적 능력이 뛰어나다.' 
	},
	T121 : { 
		  code : 'T121', 
		  name : 'Scrap Iron', 
		 state : {
			str : 80, 	vit : 140, 	int : 80, 	wis : 100, 	dex : 80, 	
			agi : 100, 	dis : 120, 	res : 120, 	spd : 80, 	luk : 100
		}, 
		 passive : {
		}, 
		  exp : '인격체로 대하기보다는 하나의 물건으로 대하는 것이 정신건강에 이롭다.' 
	},
	T050 : { 
	  code : '0150', 
	  name : 'Half-Man(Tree)', 
	 state : {
 		str : 100, 	vit : 105, 	int : 95, 	wis : 100, 	dex : 100, 	
 		agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
	}, 
	 passive : {
 		max : 3,
 		skillCode : ['KPT00000','KPT00000','KPT00000']
	}, 
	  exp : '나무처럼 보이지만 인간과 별로 다를 것이 없다. 1. 자연동화 - 회피율 5% 상승 2. 껍질피부 - 화상, 빙결의 상태이상을 입었을 때 10% 확률로 상태이상에서 회복 3. 성장 - 행동없이 턴 종료시 방어력 1% 상승' 
	},
	T090 : { 
		  code : '0190', 
		  name : 'Regressor', 
		 state : {
			str : 100, 	vit : 100, 	int : 100, 	wis : 100, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		 passive : {
			max : 1,
			skillCode : ['KPT00000']
		}, 
		  exp : '기억을 가지고 회귀에 성공한 인물이다. 1. 전투본능 - 공격 성공 확률과 회피 성공 확률 3% 상승' 
	},
	T018 : { 
		  code : 'T018', 
		  name : 'Golem', 
		 state : {
			str : 105, 	vit : 105, 	int : 90, 	wis : 100, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		 passive : {
			max : 2,
			skillCode : ['KPT00000','KPT00000']
		}, 
		  exp : '무생물이지만 직접 사고하고 움직인다. 1. 단단함 - 방어력 3% 상승 2. 강력한 한방 - 공격 속도가 10% 감소하지만 공격력이 5% 상승' 
	},

}
