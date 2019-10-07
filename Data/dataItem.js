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
 			atkPhy : 10, 	resPhyPer : 3, 	resMagPer : 3, 	atkPhyTrue : 3, 	rateHit : 90, 	
 			rateDodge : 3, 	rateCrt : 30, 	valCrt : 130, 	rateHitJust : 60, 	atkRapid : 5, 	
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
 			atkPhy : 41, 	atkPhyTrue : 29, 	rateHit : 75, 	rateHitJust : 55, 	atkRapid : 3
			rateCrt : 20, 	valCrt : 150,
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
 			atkPhy : 52, 	atkMag : 20, 	rateHit : 60, 	rateCrt : 20, 	valCrt : 120, 	
 			rateHitJust : 40
		}, 
	 	exp : 'It's a willow club, but it's definitely a sword.', 
		}
	IT0000015 : { 
		code : 'IT0000015', 
	 	name : 'Damaging Charm', 
	 	category : 'Other', 
		type : Item', 
	 	state : {
 			str : 4, 	int : 4, 	dex : 4, 	spd : 4, 	luk : 4
		}, 
		option : {
 			atkPhy : 15, 	atkMag : 15, 	atkPhyTrue : 10, 	atkMagTrue : 10, 
			rateCrt : 20, 	valCrt : 150,
		}, 
		exp : 'An object that increases your attack if you have it.', 
	}
	IT0000016 : { 
	 	code : 'IT0000016', 
	 	name : 'Peace Maker', 
		category : 'Item', 
	 	type : Item', 
	 	exp : 'We wish for peace. All the objects are restored to health.', 
	}
	IT0000017 : { 
	 	code : 'IT0000017', 
		name : 'Monkey's Dagger', 
	 	category : 'Weapon', 
	 	type : SubSword', 
	 	state : {
 			str : 7, 	vit : 2, 	int : 4, 	dex : 7, 	spd : 5
	 	}, 
	 	option : {
 			atkPhy : 37, 	atkMag : 22, 	atkPhyTrue : 13, 	atkMagTrue : 10, 	rateHit : 70, 	
 			rateHitJust : 60, 	atkRapid : 3
	 	}, 
	 	exp : 'It's a green dagger with a monkey's magic', 
	}
	IT0000018 : { 
	 	code : 'IT0000018', 
	 	name : 'Long live the sun', 
	 	category : 'Weapon', 
	 	type : Shield', 
	 	health : {
 			Hp : 150
		}, 
	 	state : {
 			str : 7, 	vit : 12, 	dis : 10, 	res : 10
	 	}, 
	 	option : {
 			defPhyPer : 52, 	defPhyNum : 5, 	resPhyPer : 10, 	resPhyNum : 5, 	defMagPer : 43, 	
 			defMagNum : 5, 	resMagPer : 10, 	resMagNum : 5, 	rateRes : 10, 	ratePFD : 15
	 	}, 
	 	exp : 'Long live the sun.', 
	}
	IT0000019 : { 
	 	code : 'IT0000019', 
	 	name : 'Blackwing Male', 
	 	category : 'Ammor', 
	 	type : Ammor', 
	 	health : {
 			Hp : 300,
 			pHp : 10
	 	}, 
	 	state : {
 			str : 12, 	vit : 15, 	dis : 10, 	res : 20
		}, 
		option : {
 			defPhyPer : 70, 	defPhyNum : 5, 	resPhyPer : 10, 	resPhyNum : 10, 	defMagPer : 66, 	
 			defMagNum : 5, 	resMagPer : 10, 	resMagNum : 10, 	rateDis : 10, 	rateRes : 10, 	
 			ratePFD : 20
		}, 
		exp : 'A black armor with winghs', 
	}
	IT0000020 : { 
	 	code : 'IT0000020', 
	 	name : 'Chain Saw ', 
	 	category : 'Weapon', 
	 	type : TwoHandSword', 
	 	state : {
 			str : 12, 	vit : 15, 	dex : 10, 	spd : 10, 	luk : 7
		}, 
		option : {
 			atkPhy : 97, 	atkPhyTrue : 55, 	rateHit : 70, 	rateCrt : 25, 	valCrt : 125, 	
 		rateHitJust : 50, 	atkRapid : 1, 	rateCrtLuk : 20
		}, 
		exp : 'Good means of communication', 
	}
	IT0000021 : { 
		code : 'IT0000021', 
		name : 'Retirbution', 
	 	category : 'Weapon', 
	 	type : BowGun', 
	 	state : {
 			str : 12, 	dex : 25
	 	}, 
	 	option : {
 			atkPhy : 55, 	atkPhyTrue : 21, 	rateHit : 95, 	rateCrt : 20, 	valCrt : 150, 	
 			rateHitJust : 60, 	atkRapid : 2, 	rateCrtLuk : 20
	 	}, 
	 	exp : 'Looking for a chance to get revenge on someone.', 
	}
	IT0000022 : { 
	 	code : 'IT0000022', 
	 	name : 'Anxiety', 
	 	category : 'Weapon', 
	 	type : BowGun', 
	 	state : {
 			str : 12, 	dex : 27
		}, 
		option : {
 			atkPhy : 60, 	atkPhyTrue : 22, 	rateHit : 95, 	rateCrt : 20, 	valCrt : 130, 	
 			rateHitJust : 60, 	atkRapid : 2, 	rateCrtLuk : 20
		}, 
		exp : 'Looking for a chance to get revenge on someone.', 
	}
	IT0000023 : { 
	 	code : 'IT0000023', 
	 	name : 'Attack Type Changer(N)', 
	 	category : 'Item', 
	 	type : Item', 
	 	exp : 'Make that the general damage is applied as a magic damage.', 
	}
	IT0000024 : { 
	 	code : 'IT0000024', 
	 	name : 'Attack Type Changer(M)', 
	 	category : 'Item', 
	 	type : Item', 
	 	exp : 'Make that the magic damage is applied as a general damage.', 
	}
}
