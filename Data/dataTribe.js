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
	}
}