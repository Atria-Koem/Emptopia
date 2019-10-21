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
	},
	IT0000008 : { 
	 	code : 'IT0000008', 
	 	name : 'Bon Helm', 
	 	category : 'Head', 
	 	type : 'Helmet', 
		spec : {
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
		},
	  	exp : 'Just bone helm', 
		},
	IT0000009 : { 
	  	code : 'IT0000009', 
		name : '56-Type', 
	 	category : 'Weapon', 
	 	type : 'Gun', 
		spec : {
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
		},
	  	exp : 'Like FPS weapon', 
		},
	 IT0000010 : { 
	 	code : 'IT0000010', 
	 	name : 'Bears Viking', 
	 	category : 'Weapon', 
	 	type : 'Sword', 
		 spec : {
			 state : {
				 str : 3, 	vit : 2
			 }, 
			 option : {
				 atkPhy : 41, 	atkPhyTrue : 29, 	rateHit : 75, 	rateHitJust : 55, 	atkRapid : 3,
			rateCrt : 20, 	valCrt : 150,
			 }, 
		 },
	 	exp : 'This item is green', 
	},
	 IT0000011 : { 
	 	code : 'IT0000011', 
	 	name : 'Ghost Belt', 
	 	category : 'Ammor', 
	 	type : 'Ammor', 
		 spec : {
		 	health : {
 		
 			pHp : 7,pSp : 7,pMp : 7
		}, 
	 	state : {
 			dis : 7, 	res : 7, 	spd : 7, 	luk : 7
		}, 
		 },
	  	exp : 'Ghost belt, not curse', 
	},
	IT0000012 : { 
	 	code : 'IT0000012', 
	 	name : 'Thunther Ring', 
	 	category : 'Head', 
	 	type : 'Circlet', 
		spec : {
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
		},
	  	exp : 'Jolteons leather', 
	},
	IT0000013 : { 
	 	code : 'IT0000013', 
	 	name : 'Silk Bangage', 
	 	category : 'Other', 
	 	type : 'Item', 
	  	exp : 'It helps you regain your physical strength. Its a secret weapon for thieves. Heals 30% of your total health.', 
	},
	IT0000014 : { 
	 	code : 'IT0000014', 
	 	name : 'A Willow Club', 
	 	category : 'Weapon', 
	 	type : 'Sword', 
		spec : {
	 	state : {
 			str : 13, 	vit : 12, 	dex : 5, 	res : 5, 	spd : 7, 	
 			luk : 5
		}, 
	 	option : {
 			atkPhy : 52, 	atkMag : 20, 	rateHit : 60, 	rateCrt : 20, 	valCrt : 120, 	
 			rateHitJust : 40
		}, 
		},
	 	exp : 'Its a willow club, but its definitely a sword.', 
		},
	IT0000015 : { 
		code : 'IT0000015', 
	 	name : 'Damaging Charm', 
	 	category : 'Other', 
		type : 'Item', 
		spec : {
	 	state : {
 			str : 4, 	int : 4, 	dex : 4, 	spd : 4, 	luk : 4
		}, 
		option : {
 			atkPhy : 15, 	atkMag : 15, 	atkPhyTrue : 10, 	atkMagTrue : 10, 
			rateCrt : 20, 	valCrt : 150,
		}, 
		},
		exp : 'An object that increases your attack if you have it.', 
	},
	IT0000016 : { 
	 	code : 'IT0000016', 
	 	name : 'Peace Maker', 
		category : 'Item', 
	 	type : 'Item', 
	 	exp : 'We wish for peace. All the objects are restored to health.', 
	},
	IT0000017 : { 
	 	code : 'IT0000017', 
		name : 'Monkeys Dagger', 
		category : 'Weapon', 
	 	type : 'SubSword', 
		spec : {
	 	state : {
 			str : 7, 	vit : 2, 	int : 4, 	dex : 7, 	spd : 5
	 	}, 
	 	option : {
 			atkPhy : 37, 	atkMag : 22, 	atkPhyTrue : 13, 	atkMagTrue : 10, 	rateHit : 70, 	
 			rateHitJust : 60, 	atkRapid : 3
	 	}, 
		},
	 	exp : 'Its a green dagger with a monkeys magic', 
		
	},
	IT0000018 : { 
	 	code : 'IT0000018', 
	 	name : 'Long live the sun', 
	 	category : 'Weapon', 
	 	type : 'Shield', 
		spec : {
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
		},
	 	exp : 'Long live the sun.', 
		
	},
	IT0000019 : { 
	 	code : 'IT0000019', 
	 	name : 'Blackwing Male', 
	 	category : 'Ammor', 
	 	type : 'Ammor', 
	 	health : {
 			Hp : 300,
 			pHp : 10
	 	}, 
		spec : {
	 	state : {
 			str : 12, 	vit : 15, 	dis : 10, 	res : 20
		}, 
		option : {
 			defPhyPer : 70, 	defPhyNum : 5, 	resPhyPer : 10, 	resPhyNum : 10, 	defMagPer : 66, 	
 			defMagNum : 5, 	resMagPer : 10, 	resMagNum : 10, 	rateDis : 10, 	rateRes : 10, 	
 			ratePFD : 20
		}, 
		},
		exp : 'A black armor with winghs', 
	},
	IT0000020 : { 
	 	code : 'IT0000020', 
	 	name : 'Chain Saw ', 
	 	category : 'Weapon', 
	 	type : 'TwoHandSword', 
		spec : {
	 	state : {
 			str : 12, 	vit : 15, 	dex : 10, 	spd : 10, 	luk : 7
		}, 
		option : {
 			atkPhy : 97, 	atkPhyTrue : 55, 	rateHit : 70, 	rateCrt : 25, 	valCrt : 125, 	
 		rateHitJust : 50, 	atkRapid : 1, 	rateCrtLuk : 20
		}, 
		},
		exp : 'Good means of communication', 
	},
	IT0000021 : { 
		code : 'IT0000021', 
		name : 'Retirbution', 
	 	category : 'Weapon', 
	 	type : 'BowGun', 
		spec : {
	 	state : {
 			str : 12, 	dex : 25
	 	}, 
	 	option : {
 			atkPhy : 55, 	atkPhyTrue : 21, 	rateHit : 95, 	rateCrt : 20, 	valCrt : 150, 	
 			rateHitJust : 60, 	atkRapid : 2, 	rateCrtLuk : 20
	 	}, 
		},
	 	exp : 'Looking for a chance to get revenge on someone.', 
	},
	IT0000022 : { 
	 	code : 'IT0000022', 
	 	name : 'Anxiety', 
	 	category : 'Weapon', 
	 	type : 'BowGun', 
		spec : {
	 	state : {
 			str : 12, 	dex : 27
		}, 
		option : {
 			atkPhy : 60, 	atkPhyTrue : 22, 	rateHit : 95, 	rateCrt : 20, 	valCrt : 130, 	
 			rateHitJust : 60, 	atkRapid : 2, 	rateCrtLuk : 20
		}, 
		},
		exp : 'Looking for a chance to get revenge on someone.', 
	},
	IT0000023 : { 
	 	code : 'IT0000023', 
	 	name : 'Attack Type Changer(N)', 
	 	category : 'Item', 
	 	type : 'Item', 
	 	exp : 'Make that the general damage is applied as a magic damage.', 
	},
	IT0000024 : { 
	 	code : 'IT0000024', 
	 	name : 'Attack Type Changer(M)', 
	 	category : 'Item', 
	 	type : 'Item', 
	 	exp : 'Make that the magic damage is applied as a general damage.', 
	},
	IT0000025 : { 
	 	code : 'IT0000025', 
	 	name : 'Rose Whip', 
	 	category : 'Weapon', 
	 	type : 'Whip', 
		spec : {
	 	state : {
 			str : 5, 	dex : 5, 	spd : 5
		}, 
		option : {
 			atkPhy : 31, 	atkPhyTrue : 11, 	rateHit : 70, 	rateDis : 30, 	rateCrt : 10, 	
 			valCrt : 300, 	rateHitJust : 30, 	atkRapid : 2
		}, 
		},
		exp : 'A whip covered with sharp thorns. A certain probability leaves an abnormal bleed.', 
	},
	IT0000026 : { 
	 	code : 'IT0000026', 
	 	name : 'Tarantula', 
	 	category : 'Weapon', 
	 	type : 'SubSword', 
		spec : {
	 	state : {
 			vit : 2, 	dex : 8
		}, 
		option : {
 			atkPhy : 41, 	atkPhyTrue : 19, 	rateHit : 90, 	rateDis : 20, 	rateCrt : 10, 	
 			valCrt : 140, 	rateHitJust : 60, 	atkRapid : 1
		}, 
		},
		exp : 'Its a venom dagger. By a certain probability, to onself or the enemy is addicted to conditionally abnormalities.', 
	},
	IT0000027 : { 
	  code : 'IT0000027', 
	  name : '불의 기도', 
	 category : 'Weapon', 
	 type : 'Pike', 
		spec : {
	 state : {
 		str : 15, 	vit : 8, 	res : 5
	}, 
	 option : {
 		atkPhy : 97, 	atkPhyTrue : 62, 	rateHit : 85, 	rateDis : 15, 	rateRes : 5, 	
 		rateCrt : 3, 	valCrt : 140, 	rateHitJust : 70, 	atkRapid : 3
	}, 
		},
	  exp : '불의 힘이 담긴 창으로 15% 확률로 적에게 화상을 입힌다.', 
	},
	IT0000028 : { 
		  code : 'IT0000028', 
		  name : '강철 심장', 
		 category : 'Weapon', 
		 type : 'SubPike', 
		spec : {
		 health : {
			Hp : 75
		}, 
		 state : {
			str : 3, 	vit : 12
		}, 
		 option : {
			atkPhy : 16, 	atkPhyTrue : 7, 	rateHit : 85, 	rateDis : 15, 	rateRes : 5, 	
			rateCrt : 2, 	valCrt : 120, 	rateHitJust : 70, 	atkRapid : 1.4
		}, 
		},
		  exp : '강철 골렘의 심장을 담았다고 하는 짧은 창. 전투 당 한번씩 강철의 가호 시전을 가능하도록 해준다.', 
	},
	IT0000029 : { 
		  code : 'IT0000029', 
		  name : '가죽 팔 보호대', 
		 category : 'Ammor', 
		 type : 'ArmGaurd', 
		spec : {
		 option : {
			defPhyPer : 13, 	defPhyNum : 4, 	defMagPer : 10, 	defMagNum : 4
		}, 
		},
		  exp : '가볍게 팔을 감싸는 보호대. 부가적인 능력은 존재하지 않는다.', 
	},
	IT0000030 : { 
		  code : 'IT0000030', 
		  name : '가죽 채찍', 
		 category : 'Weapon', 
		 type : 'Whip', 
		spec : {
		 state : {
			str : 3, 	dex : 7
		}, 
		 option : {
			atkPhy : 55, 	atkPhyTrue : 32, 	rateHit : 65, 	rateCrt : 2, 	valCrt : 240, 	
			rateHitJust : 60, 	atkRapid : 2.5
		}, 
		},
		  exp : '두꺼운 가죽으로 만들어진 채찍', 
	},
	IT0000031 : { 
		  code : 'IT0000031', 
		  name : '강철 방패', 
		 category : 'Weapon', 
		 type : 'Shield', 
		spec : {
		 state : {
			str : 3, 	dis : 5, 	res : 7
		}, 
		 option : {
			defPhyPer : 61, 	defPhyNum : 20, 	resPhyPer : 10, 	resPhyNum : 5, 	defMagPer : 54, 	
			defMagNum : 18, 	resMagPer : 10, 	resMagNum : 5, 	rateRes : 5, 	ratePFD : 7
		}, 
		},
		  exp : '강철로 제작된 일반적인 방패.', 
	},
	IT0000032 : { 
		  code : 'IT0000032', 
		  name : '죽음의 숨결', 
		 category : 'Head', 
		 type : 'Helmet', 
		spec : {
		 health : {
			Hp : 140,Sp : 50,
			pMp : 15
		}, 
		 state : {
			int : 17, 	dis : 12
		}, 
		 option : {
			defPhyPer : 55, 	defPhyNum : 20, 	resPhyPer : 12, 	resPhyNum : 5, 	atkMag : 20, 	
			defMagPer : 71, 	defMagNum : 24, 	resMagPer : 20, 	resMagNum : 5, 	rateRes : 6
		}, 
		},
		  exp : '많은 마법사의 죽음과 함께 했고 마법사의 죽음을 기다리는 투구, 마법사로써의 능력을 향상시켜준다.', 
	},
	IT0000033 : { 
		  code : 'IT0000033', 
		  name : '자연의 기운', 
		 category : 'Ammor', 
		 type : 'Robe', 
		spec : {
		 health : {
			Hp : 110,Sp : 20,Mp : 130,
			pMp : 10
		}, 
		 state : {
			vit : 4, 	int : 12
		}, 
		 option : {
			defPhyPer : 21, 	defPhyNum : 6, 	defMagPer : 33, 	defMagNum : 11, 	rateDodge : 4
		}, 
		},
		  exp : '마나 회복력이 상승하는 것만 같은 로브.', 
	},
	IT0000034 : { 
		  code : 'IT0000034', 
		  name : '선장의 외교', 
		 category : 'Weapon', 
		 type : 'Pistol', 
		spec : {
		 state : {
			vit : 28, 	dex : 26
		}, 
		 option : {
			atkPhy : 317, 	atkPhyTrue : 112, 	rateHit : 82, 	rateCrt : 7, 	valCrt : 220, 	
			rateHitJust : 70, 	atkRapid : 3
		}, 
		},
		  exp : '전설적인 해적 구드루가 썼다고 전해지는 총이지만 사실 여부는 확인 할 수 없다.', 
	},
	IT0000035 : { 
		  code : 'IT0000035', 
		  name : '뱀의 독샘', 
		 category : 'Weapon', 
		 type : 'Pistol', 
		spec : {
		 state : {
			dex : 32
		}, 
		 option : {
			atkPhy : 144, 	atkPhyTrue : 59, 	rateHit : 88, 	rateDis : 6, 	rateCrt : 8, 	
			valCrt : 130, 	rateHitJust : 62, 	atkRapid : 3
		}, 
		},
		  exp : '일정 확률로 중독 상태를 발생시키는 총알을 발사하는 총. 맞은 상대가 중독되는 이유는 알 수 없다.', 
	},
	IT0000036 : { 
		  code : 'IT0000036', 
		  name : '산탄 권총', 
		 category : 'Weapon', 
		 type : 'SubPistol', 
		spec : {
		 state : {
			vit : 14, 	dex : 17
		}, 
		 option : {
			atkPhy : 400, 	atkPhyTrue : 1, 	rateHit : 100, 	rateHitJust : 100, 	atkRapid : 8
		}, 
		},
		  exp : '넓은 범위의 산탄을 발사 하는 권총. 살살 맞으면 아프지 않은 탄을 발사하는 것으로 유명하다.', 
	},
	IT0000037 : { 
		  code : 'IT0000037', 
		  name : '사마귀 비수', 
		 category : 'Weapon', 
		 type : 'SubSword', 
		spec : {
		 option : {
			atkPhy : 70, 	atkPhyTrue : 22, 	rateDis : 20, 	rateCrt : 12, 	valCrt : 120, 	
			atkRapid : 1.8
		},
		},
		  exp : '톱날 같은 칼날은 살점을 뜯어낸다. 일정 확률로 출혈 상태를 발생시킨다.', 
	},
	IT0000038 : { 
		  code : 'IT0000038', 
		  name : '햇날', 
		 category : 'Weapon', 
		 type : 'SubSword', 
		spec : {
		 state : {
			str : 12, 	vit : 12, 	int : 12, 	dex : 12, 	spd : 12, 	
			luk : 12
		}, 
		 option : {
			atkPhy : 11, 	atkPhyTrue : 6, 	rateCrt : 30, 	valCrt : 120, 	atkRapid : 1.4
		} 
		},
		  exp : '태양 빛을 담아 재련한 단검. 착용자의 능력치를 상승시킨다.', 
	},
	IT0000039 : { 
		  code : 'IT0000039', 
		  name : '심해물고기', 
		 category : 'Weapon', 
		 type : 'TwoHandSword', 
		spec : {
		 state : {
			str : 45, 	vit : 38
		}, 
		 option : {
			atkPhy : 320, 	atkPhyTrue : 165, 	rateCrt : 4, 	valCrt : 320, 	atkRapid : 3.8
		}, 
		},
		  exp : '깊은 바다에서 건져올린 물고기. ', 
	},
	IT0000040 : { 
		  code : 'IT0000040', 
		  name : '서리불꽃', 
		 category : 'Weapon', 
		 type : 'Sword', 
		spec : {
		 state : {
			str : 12, 	dex : 8
		}, 
		 option : {
			atkPhy : 46, 	atkPhyTrue : 25,  atkMag : 25, 	atkMagTrue : 10,
			rateDis : 15, 	rateCrt : 7, 	valCrt : 138, 	atkRapid : 2.6
		}, 
		},
		  exp : '두가지 기운을 가지고 있는 검. 적중당한 적을 일정 확률로 화상이나 동상 상태로 만듬.', 
	}

}
