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
}
