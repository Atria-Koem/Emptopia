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
    T0: {
        code: 'T0',
        name: 'None',
        state: {
            str: 100, int: 100, dex: 100, dis: 100, spd: 100,
            vit: 100, wis: 100, agi: 100, res: 100, luk: 100
        },
        elelemnt: {}
    },
    T00: {
        code: 'T00',
        name: 'Human',
        state: {
            str: 100, int: 100, dex: 100, dis: 95, spd: 100,
            vit: 100, wis: 100, agi: 105, res: 95, luk: 105
        },
        elelemnt: {}
    },
    T01: {
        code: 'T01',
        name: 'Machina',
        state: {
            str: 100, int: 100, dex: 100, dis: 95, spd: 100,
            vit: 105, wis: 95, agi: 100, res: 105, luk: 100
        },
        elelemnt: {},
        passive: {
            max: 1,
            skillCode: ['KPT10000', 'KPT10001']
        }
    },
    T02: {
        code: 'T02',
        name: 'Ort',
        state: {
            str: 100, int: 105, dex: 95, dis: 100, spd: 95,
            vit: 100, wis: 105, agi: 95, res: 100, luk: 100
        },
        elelemnt: {}
    },
    T03: {
        code: 'T03',
        name: 'Sprit',
        state: {
            str: 100, int: 100, dex: 105, dis: 105, spd: 100,
            vit: 100, wis: 100, agi: 100, res: 100, luk: 95
        },
        elelemnt: {}
    },
    T04: {
        code: 'T04',
        name: 'Beast',
        state: {
            str: 105, int: 95, dex: 95, dis: 100, spd: 105,
            vit: 100, wis: 100, agi: 100, res: 100, luk: 100
        },
        elelemnt: {}
    },
    T05: {
        code: 'T05',
        name: 'Kernel',
        state: {
            str: 100, int: 100, dex: 100, dis: 95, spd: 100,
            vit: 105, wis: 95, agi: 100, res: 105, luk: 100
        },
        elelemnt: {},
        passive: {
            max: 1,
            skillCode: ['KPT10000', 'KPT10001']
        }
    },
    T06: {
        code: 'T06',
        name: 'Dead',
        state: {
            str: 100, int: 100, dex: 100, dis: 95, spd: 100,
            vit: 105, wis: 95, agi: 100, res: 105, luk: 100
        },
        elelemnt: {},
        passive: {
            max: 1,
            skillCode: ['KPT10000', 'KPT10001']
        }
    },
    T067: {
        code: 'T067',
        name: 'Banshee',
        state: {
            str: 90, int: 120, dex: 100, dis: 90, spd: 100,
            vit: 90, wis: 110, agi: 100, res: 100, luk: 90
        },
        elelemnt: {},
        passive: {
            max: 1,
            skillCode: ['KPT10000', 'KPT10001']
        }
    },
    T07: {
        code: 'T07',
        name: 'Formless',
        state: {
            str: 100, int: 100, dex: 100, dis: 95, spd: 100,
            vit: 105, wis: 95, agi: 100, res: 105, luk: 100
        },
        elelemnt: {},
        passive: {
            max: 1,
            skillCode: ['KPT10000', 'KPT10001']
        }
    },
    T08: {
        code: 'T08',
        name: 'Inorganic',
        state: {
            str: 100, int: 100, dex: 100, dis: 95, spd: 100,
            vit: 105, wis: 95, agi: 100, res: 105, luk: 100
        },
        elelemnt: {},
        passive: {
            max: 1,
            skillCode: ['KPT10000', 'KPT10001']
        }
    },
    T09: {
        code: 'T09',
        name: 'Exterior',
        state: {
            str: 100, int: 100, dex: 100, dis: 105, spd: 100,
            vit: 95, wis: 100, agi: 100, res: 105, luk: 95
        },
        elelemnt: {},
        passive: {
            max: 1,
            skillCode: ['KPT90000']
        }
    },
    T099: {
        code: 'T099',
        name: 'Exiles',
        state: {
            str: 100, int: 100, dex: 95, dis: 110, spd: 100,
            vit: 90, wis: 100, agi: 105, res: 110, luk: 90
        },
        elelemnt: {},
        passive: {
            max: 1,
            skillCode: ['KPT90000', 'KPT90001']
        }
    },
    T0999: {
        code: 'T0999',
        name: 'Purgee',
        state: {
            str: 100, int: 100, dex: 95, dis: 120, spd: 90,
            vit: 90, wis: 90, agi: 105, res: 120, luk: 90
        },
        elelemnt: {},
        passive: {
            max: 1,
            skillCode: ['KPT90000', 'KPT90001', 'KPT90002']
        }
    },
    T09999: {
        code: 'T09999',
        name: 'Banishment',
        state: {
            str: 90, int: 90, dex: 90, dis: 140, spd: 90,
            vit: 90, wis: 90, agi: 90, res: 140, luk: 90
        },
        elelemnt: {},
        passive: {
            max: 3,
            skillCode: ['KPT90000', 'KPT90001', 'KPT90002']
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
	  code : 'T050', 
	  name : 'Half-Man(Tree)', 
	 state : {
 		str : 100, 	vit : 110, 	int : 100, 	wis : 100, 	dex : 100, 	
 		agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
	}, 
	 passive : {
 		max : 3,
 		skillCode : ['KPT00000','KPT00000','KPT00000']
	}, 
	  exp : '나무처럼 보이지만 인간과 별로 다를 것이 없다. 1. 자연동화 - 회피율 5% 상승 2. 껍질피부 - 화상, 빙결의 상태이상을 입었을 때 10% 확률로 상태이상에서 회복 3. 성장 - 행동없이 턴 종료시 방어력 1% 상승' 
	},
	T090 : { 
		  code : 'T090', 
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
			str : 110, 	vit : 110, 	int : 90, 	wis : 100, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		 passive : {
			max : 2,
			skillCode : ['KPT00000','KPT00000']
		}, 
		  exp : '무생물이지만 직접 사고하고 움직인다. 1. 단단함 - 방어력 3% 상승 2. 강력한 한방 - 공격 속도가 10% 감소하지만 공격력이 5% 상승' 
	},
	T064 : { 
		  code : 'T064', 
		  name : 'Dead Beast', 
		 state : {
			str : 115, 	vit : 110, 	int : 70, 	wis : 100, 	dex : 105, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		 passive : {
			max : 2,
			skillCode : ['KPT00000','KPT00000']
		}, 
		  exp : '죽음에서 돌아온 짐승. 1. 부패 - 행동시 1%의 체력 감소 3%의 추가 피해, 2. 썩은피부 - 피해를 받았을때 2%의 추가 피해를 입지만 최대 체력의 2%의 피해를 입힌다.' 
	},
	T010 : { 
		  code : 'T010', 
		  name : 'Humanoid', 
		 state : {
			str : 100, 	vit : 100, 	int : 100, 	wis : 100, 	dex : 100, 	
			agi : 90, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		 passive : {
			max : 1,
			skillCode : ['KPT00000']
		}, 
		  exp : '1. 나노로봇 - 행동이 끝날때 마다 다음 행동이 시작하기 전까지 체력회복' 
	},
	T076 : { 
		  code : 'T076', 
		  name : 'Ghost', 
		 state : {
			str : 100, 	vit : 100, 	int : 110, 	wis : 110, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 90
		}, 
		passive : {
			max : 2,
			skillCode : ['KPT00000','KPT00000']
		}, 
		  exp : '1.불운 - 상태이상에 걸릴 확률 3% 상승, 2.물리면역 - 물리공격에 피해를 입지 않음' 
	},
	T034 : { 
		  code : 'T034', 
		  name : 'Spirit', 
		 state : {
			str : 100, 	vit : 100, 	int : 100, 	wis : 100, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 110
		}, 
		passive : {
			max : 1,
			skillCode : ['KPT00000']
		}, 
		  exp : '1.마법저항 - 마법피해 30% 반감' 
	},
	T094 : { 
		  code : 'T094', 
		  name : 'Exiled Beast', 
		 state : {
			str : 100, 	vit : 70, 	int : 100, 	wis : 100, 	dex : 110, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		passive : {
			max : 1,
			skillCode : ['KPT00000']
		}, 
		  exp : '1.날카로운 발톱 - 물리공격 10% 상승' 
	},
	T023 : { 
		  code : 'T023', 
		  name : 'Ruins Elemental', 
		 state : {
			str : 100, 	vit : 100, 	int : 110, 	wis : 100, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		passive : {
			max : 2,
			skillCode : ['KPT00000','KPT00000']
		}, 
		  exp : '1.고대의 존재 - 저항력 3% 상승, 2.유산 - 전투 후 획득 금액 3% 증가' 
	},
	T064 : { 
		  code : 'T064', 
		  name : 'Reaper', 
		 state : {
			str : 100, 	vit : 100, 	int : 100, 	wis : 100, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		passive : {
			max : 1,
			skillCode : ['KPT00000']
		}, 
		  exp : '1.사신 - 생명체 상대로 입히는 피해 5% 증가' 
	},
	T080 : { 
		  code : 'T080', 
		  name : 'Mannequin', 
		 state : {
			str : 105, 	vit : 100, 	int : 100, 	wis : 100, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 105, 	spd : 100, 	luk : 100
		}, 
	},
	T001 : { 
		  code : 'T010', 
		  name : 'Reinforcor', 
		 state : {
			str : 110, 	vit : 90, 	int : 100, 	wis : 100, 	dex : 110, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		passive : {
			max : 2,
			skillCode : ['KPT00000','KPT00000']
		}, 
		  exp : '1.불완전한 신체 - 기술 사용시 전체 체력의 2%의 피해를 입음, 2.강화된 신체 - 기술의 피해량 5% 증가' 
	},
	T043 : { 
		  code : 'T043', 
		  name : 'Adored Animal', 
		 state : {
			str : 110, 	vit : 90, 	int : 105, 	wis : 100, 	dex : 105, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		passive : {
			max : 1,
			skillCode : ['KPT00000']
		}, 
		  exp : '1.우상 - 입히는 신성피해 2% 증가' 
	},
	T067 : { 
		  code : 'T067', 
		  name : 'Silent Death', 
		 state : {
			str : 1, 	vit : 1, 	int : 1, 	wis : 1, 	dex : 1, 	
			agi : 1, 	dis : 1, 	res : 1, 	spd : 1, 	luk : 1
		}, 
		passive : {
			max : 1,
			skillCode : ['KPT00000']
		}, 
		  exp : '1.죽음 - 사망시 모든 적을 제거' 
	},
	T071 : { 
	  code : 'T071', 
	  name : 'A.I', 
	 state : {
 		str : 100, 	vit : 100, 	int : 100, 	wis : 100, 	dex : 100, 	
 		agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
	}, 
	 passive : {
 		max : 2,
 		skillCode : ['KPT10000','KPT10000']
	}, 
	  exp : '1.빠른분석 - 동료들이 치명타를 맞출 확률 2% 상승, 2. 지능상승 - 기계들의 공격 속도 3% 상승' 
	},

}
