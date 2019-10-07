const dataItem = {
	/*IT0000000 : { [weapon,ammor,item,head,...,other(9)]
									[L -> R -> B -> H -> I]
		code : 'IT0000000',
		name : 'Short Sword',
		category : 'Weapon',
		type : 'Sword',
		health:{
			Hp : 10, Sp: 10, Mp : 10,
			pHp : 10, pSp: 10, pMp : 10
		},
		state: {
			str: 10,				int: 0,				dex: 0,				dis : 0,				spd: 0,
			vit: 0,				wis: 0,				agi: 0,				res : 0,				luk: 0
		},
		option : {
			atkPhy: 10,defPhyPer: 0,defPhyNum: 0,resPhyPer: 0,resPhyNum: 0,
			atkMag: 0,defMagPer: 0,defMagNum : 0,resMagPer: 0,resMagNum : 0,
			atkPhyTrue: 0 ,atkMagTrue : 0 ,rateHit: 0,rateDodge : 0,rateDis : 0, rateRes : 0 ,
			rateCrt: 0,valCrt : 0, rateHitJust : 0, ratePFD: 0,atkRapid : 0,rateCrtLuk: 0,rateDodgeLuk : 0
		},
		addOption : {},
		elelemnt : {}
	}*/
	IT0000000 : {
		code : 'IT0000000',
		name : 'Short Sword',
		category : 'Weapon',
		type : 'Sword',
		spec : {
			state: {
				str: 1
			},
			option : {
				atkPhy: 10
			}
		},
		exp : 'Simple Sword' 
	},
	IT0000001 : {
		code : 'IT0000001',
		name : 'Wooden Shield',
		category : 'Ammor',
		type : 'Shield',
		spec : {
			option : {
				defPhyPer: 3, defPhyNum: 10
			}
		},
		exp : 'Simple Shield' 
	},
	IT0000002 : {
		code : 'IT0000002',
		name : 'Wooden Helmet',
		category : 'Head',
		type : 'Helmet',
		spec : {
			option : {
				defPhyPer: 1, defPhyNum: 1
			}
		},
		exp : 'Simple Helemt' 
	},
	IT0000003 : {
		code : 'IT0000003',
		name : 'Wooden Ammor',
		category : 'Ammor',
		type : 'Ammor',
		spec : {
			option : {
				defPhyPer: 8, defPhyNum: 4
			}
		},
		exp : 'Simple Ammor' 
	},
	IT0000004 : {
		code : 'IT0000004',
		name : 'Short Bow',
		category : 'Weapon',
		type : 'Bow',
		spec : {
			option : {
				atkPhy: 35
			},
			add : {
				count : 10, maxCount : 10
			}
		},
		exp : 'Simple Bow' 
	},
	IT0000005 : {
		code : 'IT0000005',
		name : 'Dagger',
		category : 'Weapon',
		type : 'Dagger',
		spec : {
			option : {
				atkPhy: 8
			}
		},
		exp : 'Simple Bow' 
	},
	IT0000006 : {
		code : 'IT0000006',
		name : 'TextBook',
		category : 'Ammor',
		type : 'Book',
		spec : {
			option : {
				defPhyPer: 1, defPhyNum: 2,
				defMagPer: 1, defMagNum: 2
			}
		},
		exp : 'Simple Book' 
	},
	IT0000007 : {
		code : 'IT0000007',
		name : 'ArrowCase',
		category : 'Ammor',
		type : 'ArrowCase',
		spec : {
			option : {
				atkPhy : 1
			},
			add : {
				count : 30, maxCount : 50
			}
		},
		exp : 'Simple Case / (30)' 
	}
	IT0000008 : { 
	 	code : 'IT0000008', 
	 	name : 'Bon Helm', 
	 	category : 'Head', 
	 	type : Helmet', 
	 	health : {
 			Hp : 10,Mp : 15,
 			pHp : 3,pMp : 5
		}, 
	 	state : {
 			str : 3, 	vit : 4, 	int : 4, 	wis : 4, 	dex : -1, 	
 			agi : -1, 	res : 2, 	spd : -1
		}, 
	 	option : {
 			resPhyPer : 3, 	resMagPer : 3
		}, 
	  	exp : 'Just bone helm', 
		}
	IT0000009 : { 
	  	code : 'IT0000009', 
		name : '56-Type', 
	 	category : 'Weapon', 
	 	type : Gun', 
	 	health : {
 		
 			pSp : 12
		}, 
	 	state : {
 			str : 4, 	dex : 7, 	agi : 2, 	res : 2, 	spd : 5, 	
 			luk : 3
		}, 
		option : {
 			atkPhy : 10, 	resPhyPer : 3, 	resMagPer : 3, 	atkPhyTrue : 3, 	rateHit : 10, 	
 			rateDodge : 3, 	rateCrt : 3, 	valCrt : 30, 	rateHitJust : 10, 	atkRapid : 5, 	
 			rateCrtLuk : 12, 	rateDodgeLuk : 3
		}, 
	  	exp : 'Like FPS weapon', 
		}
	 IT0000010 : { 
	 	code : 'IT0000010', 
	 	name : 'Bear's Viking', 
	 	category : 'Weapon', 
	 	type : Sword', 
	 	state : {
 			str : 3, 	vit : 2
		}, 
	 	option : {
 			atkPhy : 41, 	atkPhyTrue : 29, 	rateHit : 5, 	rateHitJust : 5, 	atkRapid : 3
		}, 
	 	exp : 'This item is green', 
		}
	 IT0000011 : { 
	 	code : 'IT0000011', 
	 	name : 'Ghost Belt', 
	 	category : 'Ammor', 
	 	type : Ammor', 
	 	health : {
 		
 			pHp : 7,pSp : 7,pMp : 7
		}, 
	 	state : {
 			dis : 7, 	res : 7, 	spd : 7, 	luk : 7
		}, 
	  	exp : 'Ghost belt, not curse', 
		}
	IT0000012 : { 
	 	code : 'IT0000012', 
	 	name : 'Thunther Ring', 
	 	category : 'Head', 
	 	type : Circlet', 
	 	health : {
 			Mp : 30,
 			pHp : 3,pSp : 7,pMp : 3
		}, 
		state : {
 			vit : 2, 	int : 5, 	wis : 5, 	dex : 3, 	agi : 5, 	
 			res : 5, 	spd : 4
		}, 
	 	option : {
 			atkMag : 12, 	defMagPer : 5, 	defMagNum : 3, 	resMagPer : 5, 	resMagNum : 3, 	
 			rateDodge : 2, 	rateRes : 3, 	rateDodgeLuk : 2
		}, 
	  	exp : 'Jolteon's leather', 
		}
	IT0000012 : { 
		code : 'IT0000012', 
	 	name : 'Thunther Ring', 
	 	category : 'Head', 
	 	type : Circlet', 
	 	health : {
 			Mp : 30,
 			pHp : 3,pSp : 7,pMp : 3
		}, 
	 	state : {
 			vit : 2, 	int : 5, 	wis : 5, 	dex : 3, 	agi : 5, 	
 			res : 5, 	spd : 4
		}, 
	 	option : {
 			atkMag : 12, 	defMagPer : 5, 	defMagNum : 3, 	resMagPer : 5, 	resMagNum : 3, 	
 			rateDodge : 2, 	rateRes : 3, 	rateDodgeLuk : 2
		}, 
	  	exp : 'Jolteon's leather', 
		}
	IT0000013 : { 
	 	code : 'IT0000013', 
	 	name : 'Silk Bangage', 
	 	category : 'Other', 
	 	type : Item', 
	  	exp : 'It helps you regain your physical strength. It's a secret weapon for thieves. Heals 30% of your total health.', 
		}
	IT0000014 : { 
	 	code : 'IT0000014', 
	 	name : 'A Willow Club', 
	 	category : 'Weapon', 
	 	type : Sword', 
	 	state : {
 			str : 13, 	vit : 12, 	dex : 5, 	res : 5, 	spd : 7, 	
 			luk : 5
		}, 
	 	option : {
 			atkPhy : 52, 	atkMag : 20, 	rateHit : 60, 	rateCrt : 20, 	valCrt : 20, 	
 			rateHitJust : 40
		}, 
	 	exp : 'It's a willow club, but it's definitely a sword.', 
		}
}
