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
		price: 128, 
		src : 'we_sword001.png',
		exp : '기본적인 검. 품질은 좋지 않다.' 
	},
	IT0000001 : {
		code : 'IT0000001',
		name : 'Wooden Shield',
		category : 'Armor',
		type : 'Shield',
		spec : {
			option : {
				defPhyPer: 3, defPhyNum: 10
			}
		},
		price: 152, 
		src : 'shield_002o.png',  
		exp : '나무로 만들어진 조잡한 방패로 별로 몸을 지켜줄 것 같지는 않다.' 
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
		price: 110, 
		src : 'helm_014.png',
		exp : '나무로 만들어진 조잡한 헬멧.' 
	},
	IT0000003 : {
		code : 'IT0000003',
		name : 'Wooden Armor',
		category : 'Armor',
		type : 'Armor',
		spec : {
			option : {
				defPhyPer: 8, defPhyNum: 4
			}
		},
		price: 328, 
		src : 'armor_004.png',
		exp : '나무로 만들어진 조잡한 갑옷. 큰 충격을 받으면 부서진다.' 
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
		price: 98, 
		src : 'we_bow017.png', 
		exp : '조잡하게 만들어진 활.' 
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
		price: 57, 
		src : 'we_sword001.png',
		exp : '절삭력이 거의 없는 단검.' 
	},
	IT0000006 : {
		code : 'IT0000006',
		name : 'Text Book',
		category : 'Armor',
		type : 'Book',
		spec : {
			option : {
				defPhyPer: 1, defPhyNum: 2,
				defMagPer: 1, defMagNum: 2
			}
		},
		price: 528, 
		src : 'book_002c.png',
		exp : '알수 없는 문자가 가득 쓰여진 책.' 
	},
	IT0000007 : {
		code : 'IT0000007',
		name : 'ArrowCase',
		category : 'Armor',
		type : 'ArrowCase',
		spec : {
			option : {
				atkPhy : 1
			},
			add : {
				count : 30, maxCount : 50
			}
		},
		price: 66, 
		exp : '30개의 화살이 들어가는 화살 통.' 
	},
	IT0000008 : { 
	 	code : 'IT0000008', 
	 	name : 'Bone Helm', 
	 	category : 'Head', 
	 	type : 'Helmet', 
		spec : {
	 		health : {
 				hp : 10,mp : 15,
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
		price: 721, 
		src : 'helm_001.png',
	  	exp : '그저 뼈로 이루어진 투구. 여러군데 금이 가 있다.', 
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
			add : {
				count : 20, maxCount : 20
			}
		},
		price: 528, 
		src : 'we_gun011.png',
	  	exp : '탑에서 발견된 무기.', 
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
		 price: 728, 
		 src : 'we_sword036.png',
	 	exp : '이 아이템은 초록색이다.', 
	},
	 IT0000011 : { 
	 	code : 'IT0000011', 
	 	name : 'Ghost Belt', 
	 	category : 'Armor', 
	 	type : 'Armor', 
		 spec : {
		 	health : {
 		
 			pHp : 7,pSp : 7,pMp : 7
		}, 
	 	state : {
 			dis : 7, 	res : 7, 	spd : 7, 	luk : 7
		}, 
		 },
		 price: 2728, 
	  	exp : '유령이 가지고 있던 허리띠지만 저주에 걸리거나 하는 일은 아직까지는 없었다.', 
	},
	IT0000012 : { 
	 	code : 'IT0000012', 
	 	name : 'Thunder Ring', 
	 	category : 'Head', 
	 	type : 'Circlet', 
		spec : {
		 	health : {
 			mp : 30,
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
		price: 14728, 
	  	exp : '전기를 내뿜는 개처럼 생긴 짐승의 가죽으로 만들어졌다.', 
	},
	IT9000001 : { 
	 	code : 'IT9000001', 
	 	name : '비단붕대', 
	 	category : 'Other', 
	 	type : 'Item', 
		price: 162, 
	  	exp : '비단 붕대는 감으면 체력을 회복시켜 주는 마법 물품이다. 파티의 비밀무기로 활용될 수 있다. 총 체력의 30%를 회복시켜 준다.', 
	},
	IT0000014 : { 
	 	code : 'IT0000014', 
	 	name : '버드나무 몽둥이', 
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
		price: 1733, 
	 	exp : '이것은 버드나무로 제작된 몽둥이가 분명하지만 알수 없는 이유로 절삭력을 가지고 있다.', 
		},
	IT9000002 : { 
		code : 'IT9000002', 
	 	name : 'Damaged Charm', 
	 	category : 'Other', 
		type : 'Item', 
		spec : {
	 	state : {
 			str : 4, 	int : 4, 	dex : 4, 	spd : 4, 	luk : 4
		}, 
		option : {
 			atkPhy : 15, 	atkMag : 15, 	atkPhyTrue : 10, 	atkMagTrue : 10, 
		}, 
		},
		price: 2226, 
		exp : '소지하고 있으면 파티의 공격력을 비롯한 능력을 증가시켜 준다.', 
	},
	IT9000003 : { 
	 	code : 'IT9000003', 
	 	name : 'Peacemaker', 
		category : 'Other', 
	 	type : 'Item', 
		price: 711, 
	 	exp : '우리의 소원은 평화. 모든 것의 체력을 전부 회복시켜준다.', 
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
		price: 3727, 
	 	exp : '원숭이들의 주술이 가미된 초록색 아이템.', 
		
	},
	IT0000018 : { 
	 	code : 'IT0000018', 
	 	name : '태양만세', 
	 	category : 'Weapon', 
	 	type : 'Shield', 
		spec : {
	 	health : {
 			hp : 150
		}, 
	 	state : {
 			str : 7, 	vit : 12, 	dis : 10, 	res : 10
	 	}, 
	 	option : {
 			defPhyPer : 52, 	defPhyNum : 5, 	resPhyPer : 10, 	resPhyNum : 5, 	defMagPer : 43, 	
 			defMagNum : 5, 	resMagPer : 10, 	resMagNum : 5, 	rateRes : 10, 	ratePFD : 15
	 	}, 
		},
		price: 4121, 
	 	exp : '태양만세.', 
		
	},
	IT0000019 : { 
	 	code : 'IT0000019', 
	 	name : 'BlackwingMale', 
	 	category : 'Armor', 
	 	type : 'Armor', 
	 	health : {
 			hp : 300,
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
		price: 1612, 
		exp : '날개 문양이 세겨진 갑옷.', 
	},
	IT0000020 : { 
	 	code : 'IT0000020', 
	 	name : 'Chain Saw', 
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
		price: 4724, 
		exp : '전기 톱은 예로부터 널리 알려진 좋은 대화 수단이다.', 
	},
	IT1000001 : { 
		code : 'IT1000001', 
		name : '보복', 
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
			add : {
				count : 5, maxCount : 5
			}
		},
		price: 3228, 
	 	exp : '누군가에게 복수할 기회를 노리고 있는 원혼이 들어가 있다. 염원과 한 세트를 이룬다. 파티 내에 각각의 사용자 존재시 명중률을 5% 증가시켜준다', 
	},
	IT1000002 : { 
	 	code : 'IT1000002', 
	 	name : '염원', 
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
			add : {
				count : 7, maxCount : 7
			}
		},
		price: 5733, 
		exp : '누군가에게 복수할 기회를 노리고 있는 원혼이 들어가 있다. 보복과 한 세트를 이룬다. 파티 내에 각각의 사용자 존재시 명중률을 5% 증가시켜준다',
	},
	IT9000004 : { 
	 	code : 'IT9000004', 
	 	name : '공격 타입 변경(M)', 
	 	category : 'Other', 
	 	type : 'Item', 
		price: 255, 
	 	exp : '노말 타입 데미지를 마법 데미지로 변경시켜 준다.', 
	},
	IT9000005 : { 
	 	code : 'IT9000005', 
	 	name : '공격 타입 변경(N)', 
	 	category : 'Other', 
	 	type : 'Item', 
		price: 255, 
	 	exp : '마법 데미지를 노말 타입 데미지로 변경시켜 준다.', 
	},
	IT0000025 : { 
	 	code : 'IT0000025', 
	 	name : 'RosethronWhip', 
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
		price: 1181, 
		exp : '이 채찍은 날카로운 가시로 뒤덥혀 있다. 일정 적중당한 적을 확률로 출혈 상태로 만든다.', 
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
		price: 6529, 
		exp : '강력한 독이 깃든 검. 자신도 적도 상태이상에 취약해진다. 30% 확률로 상대방 혹은 자신에게 중독을 부여한다.', 
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
	price: 6252, 
	  exp : '불의 힘이 담긴 창으로 15% 확률로 적에게 화상을 입힌다.', 
	},
	IT0000028 : { 
		  code : 'IT0000028', 
		  name : '강철 심장', 
		 category : 'Weapon', 
		 type : 'SubPike', 
		spec : {
		 health : {
			hp : 75
		}, 
		 state : {
			str : 3, 	vit : 12
		}, 
		 option : {
			atkPhy : 16, 	atkPhyTrue : 7, 	rateHit : 85, 	rateDis : 15, 	rateRes : 5, 	
			rateCrt : 2, 	valCrt : 120, 	rateHitJust : 70, 	atkRapid : 1.4
		}, 
		},
		price: 8227, 
		  exp : '강철 골렘의 심장을 담았다고 하는 짧은 창. 전투 당 한번씩 강철의 가호 시전을 가능하도록 해준다.', 
	},
	IT0000029 : { 
		  code : 'IT0000029', 
		  name : '가죽 팔 보호대', 
		 category : 'Armor', 
		 type : 'ArmGaurd', 
		spec : {
		 option : {
			defPhyPer : 13, 	defPhyNum : 4, 	defMagPer : 10, 	defMagNum : 4
		}, 
		},
		price: 480, 
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
		price: 623, 
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
		price: 724, 
		  exp : '강철로 제작된 일반적인 방패.', 
	},
	IT0000032 : { 
		  code : 'IT0000032', 
		  name : '죽음의 숨결', 
		 category : 'Head', 
		 type : 'Helmet', 
		spec : {
		 health : {
			hp : 140,sp : 50,
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
		price: 1124, 
		  exp : '많은 마법사의 죽음과 함께 했고 마법사의 죽음을 기다리는 투구, 마법사로써의 능력을 향상시켜준다.', 
	},
	IT0000033 : { 
		  code : 'IT0000033', 
		  name : '자연의 기운', 
		 category : 'Armor', 
		 type : 'Robe', 
		spec : {
		 health : {
			hp : 110,sp : 20,mp : 130,
			pMp : 10
		}, 
		 state : {
			vit : 4, 	int : 12
		}, 
		 option : {
			defPhyPer : 21, 	defPhyNum : 6, 	defMagPer : 33, 	defMagNum : 11, 	rateDodge : 4
		}, 
		},
		price: 449, 
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
			add : {
				count : 12, maxCount : 12
			}
		},
		price: 14449,
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
			add : {
				count : 15, maxCount : 15
			}
		},
		price: 24449,
		  exp : '12% 확률로 중독 상태를 발생시키는 총알을 발사하는 총. 맞은 상대가 중독되는 이유는 알 수 없다.', 
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
			add : {
				count : 3, maxCount : 3
			}
		},
		price: 11244,
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
		price: 6447,
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
		price: 1212,
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
		price: 54220,
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
		price: 4262,
		  exp : '두가지 기운을 가지고 있는 검. 적중당한 적을 일정 확률로 화상이나 동상 상태로 만듬.', 
	},
	IT0000041 : { 
		  code : 'IT0000041', 
		  name : '나무꾼 도끼', 
		 category : 'Weapon', 
		 type : 'Axe', 
		 state : {
			str : 16, 	vit : 22
		}, 
		 option : {
			atkPhy : 52, 	atkPhyTrue : 24, 	rateHit : 72, 	rateHitJust : 68, 	atkRapid : 2.6,
			rateCrt : 5, 	valCrt : 152,
		}, 
		price: 3322,
		  exp : '평범한 벌목용 도끼로 마을 사람들에게 구매할 수 있다.', 
	},
	IT0000042 : { 
		  code : 'IT0000042', 
		  name : '황천의 나무꾼 도끼', 
		 category : 'Weapon', 
		 type : 'Axe', 
		 health : {
			hp : 1244,sp : 224
		}, 
		 state : {
			str : 48, 	vit : 56
		}, 
		 option : {
			atkPhy : 167, 	atkMag : 25, 	atkPhyTrue : 88, 	atkMagTrue : 10, 	rateHit : 82, 	
			rateHitJust : 67, 	atkRapid : 2.4,		rateCrt : 5, 	valCrt : 157
		}, 
		price: 18888,
		  exp : '벌목을 하던 나무꾼은 황천까지 다녀왔다고 한다. 황천의 기운을 흡수한 도끼는 마법적 기운을 가지게 되었다. 도끼는 나무꾼에게 살 수 있다.', 
	},
	IT0000043 : { 
		  code : 'IT0000043', 
		  name : '두개골 절단 돌격 도끼', 
		 category : 'Weapon', 
		 type : 'Axe', 
		spec:{
		 health : {
			hp : 400,sp : 130
		}, 
		 state : {
			str : 25, 	vit : 44
		}, 
		 option : {
			atkPhy : 132, 	defPhyPer : 40, 	defPhyNum : 22, 	atkPhyTrue : 67, 	rateHit : 91, 	
			rateRes : 4, 	rateCrt : 3, 	valCrt : 167, 	rateHitJust : 87, 	atkRapid : 3.7
		}, 
		},
		price: 6225,
		  exp : '거대한 돌격 도끼로 방어 성능이 우수 하다.', 
	},
	IT0000044 : { 
		  code : 'IT0000044', 
		  name : '광선검', 
		 category : 'Weapon', 
		 type : 'Sword', 
		spec:{
		 option : {
			atkPhy : 33, 	atkPhyTrue : 11, 	rateHit : 88, 	rateCrt : 17, 	valCrt : 800, 	
			rateHitJust : 76, 	atkRapid : 8.2
		}, 
		},
		price: 3372,
		  exp : '탑에서 발견된 외계 문명의 무기. 가볍고 높은 절삭력을 가지고 있다.', 
	},
	IT0000045 : { 
		  code : 'IT0000044', 
		  name : '독 폭주', 
		 category : 'Weapon', 
		 type : 'Sword', 
		spec:{
		 option : {
			atkPhy : 133, 	atkPhyTrue : 97, 	rateHit : 90, 	rateCrt : 4.7, 	valCrt : 150, 	
			atkRapid : 2.1
		}, 
		},
		price: 14449,
		  exp : '중독상태 일때 사용하면 공격력이 150% 상승한다.', 
	},
	IT1000003 : { 
	  code : 'IT1000003', 
	  name : '쌍날 장창', 
	 category : 'Weapon', 
	 type : 'Spear', 
	 health : {
 		hp : 2670
	}, 
	 state : {
 		str : 60, 	dex : 140
	}, 
	 option : {
 		atkPhy : 524, 	atkPhyTrue : 282, 	rateHit : 80, 	rateCrt : 5, 	valCrt : 140, 	
 		rateHitJust : 64, 	atkRapid : 3.6
	}, 
		price: 88411,
	  exp : '두개의 날이 달린 창. 같은 창을 들고 있는 파티원이 있다면 들고 있는 인원 한명당 공격속도가 0.2 증가한다.', 
	},
	IT1000004 : { 
		  code : 'IT1000004', 
		  name : '지하고블린 머리장식', 
		 category : 'Head', 
		 type : 'Circlet', 
		 state : {
			str : 2, 	vit : 6, 	int : 5, 	dex : 2
		}, 
		 option : {
			defPhyPer : 42, 	defPhyNum : 12, 	defMagPer : 26, 	defMagNum : 10
		}, 
		price: 3221,
		  exp : '지하고블린에게 쉽게 얻을 수 있는 머리장식. 지하고블린 머리장식, 지하고블린 천 갑옷, 지하고블린 천 팔보호대와 하나의 세트를 이루며 3가지의 장비를 모두 착용하였을 때 모든 방어력과 저항력이 10상승한다.', 
	},
	IT1000005 : { 
		  code : 'IT1000005', 
		  name : '지하고블린 천 갑옷', 
		 category : 'Armor', 
		 type : 'Cloth', 
		 state : {
			str : 4, 	vit : 8, 	int : 2, 	dex : 1
		}, 
		 option : {
			defPhyPer : 64, 	defPhyNum : 12, 	defMagPer : 27, 	defMagNum : 8
		}, 
		price: 3311,
		  exp : '지하고블린들이 두꺼운 천을 겹쳐 제작한 천 갑옷. 갑옷치고는 가볍지만 방어력이 높지는 않다. 지하고블린 머리장식, 지하고블린 천 갑옷, 지하고블린 천 팔보호대와 하나의 세트를 이루며 3가지의 장비를 모두 착용하였을 때 모든 방어력과 저항력이 10상승한다.', 
	},
	IT1000006 : { 
		  code : 'IT1000006', 
		  name : '지하고블린 천 팔보호대', 
		 category : 'Armor', 
		 type : 'ArmGaurd', 
		 state : {
			str : 3, 	vit : 5, 	int : 1, 	dex : 6
		}, 
		 option : {
			defPhyPer : 22, 	defPhyNum : 6, 	defMagPer : 13, 	defMagNum : 4
		}, 
		price: 2440,
		  exp : '지하고블린들 보편적으로 착용하고 있던 팔보호구. 지하고블린의 역한 침냄새가 난다. 지하고블린 머리장식, 지하고블린 천 갑옷, 지하고블린 천 팔보호대와 하나의 세트를 이루며 3가지의 장비를 모두 착용하였을 때 모든 방어력과 저항력이 10상승한다.', 
	},
	IT0000046 : { 
		  code : 'IT0000046', 
		  name : '거대칠면조의 다리뼈', 
		 category : 'Weapon', 
		 type : 'Spear', 
		 health : {
			hp : 150
		}, 
		 state : {
			str : 13, 	dex : 22
		}, 
		 option : {
			atkPhy : 82, 	atkPhyTrue : 27, 	rateHit : 70,	rateCrt : 10, 	valCrt : 120, 	rateHitJust : 60, 	atkRapid : 2.9
		}, 
		price: 6688,
		  exp : '탑안에 서식하는 거대한 칠면조의 다리뼈의 한쪽 끝을 날카롭게 깍아만든 창. 야수형 적을 상대할 때 추가로 30의 데미지를 준다.', 
	},
	IT0000047 : { 
		  code : 'IT0000047', 
		  name : '거대칠면조 힘줄', 
		 category : 'Weapon', 
		 type : 'Whip', 
		 health : {
			hp : 150
		}, 
		 state : {
			str : 13, 	dex : 22
		}, 
		 option : {
			atkPhy : 72, 	atkPhyTrue : 20, 	rateHit : 80, 	rateCrt : 10, 	valCrt : 200, 	
			rateHitJust : 30, 	atkRapid : 2
		}, 
		price: 5557,
		  exp : '탑안에 서식하는 거대한 칠면조의 힘줄로 만든 채찍. 야수형 적을 상대할 때 추가로 30의 데미지를 준다.', 
	},
	IT0000048 : { 
		  code : 'IT0000048', 
		  name : '음속의 창', 
		 category : 'Weapon', 
		 type : 'Spear', 
		 state : {
			vit : 330, 	dex : 200
		}, 
		 option : {
			atkPhy : 670, 	atkPhyTrue : 360, 	rateHit : 80, 	rateCrt : 2, 	valCrt : 125, 	
			rateHitJust : 57, 	atkRapid : 57
		}, 
		price: 124250,
		  exp : '착용자의 공격을 빠르게 바꿔주는 창. 착용자는 공격시 전체 체력의 7%의 체력을 잃는다.', 
	},
	IT0000049 : { 
		  code : 'IT0000049', 
		  name : '마을경비병의 장창', 
		 category : 'Weapon', 
		 type : 'Spear', 
		 state : {
			str : 3, 	vit : 5, 	dex : 9
		}, 
		 option : {
			atkPhy : 89, 	atkPhyTrue : 34, 	rateHit : 95, 	rateCrt : 7, 	valCrt : 125, 	
			rateHitJust : 70, 	atkRapid : 3.6
		}, 
		price: 1449,
		  exp : '귀사의 제품은 정확한 규격과 높은 품질을 자랑합니다.', 
	},
	IT1000006 : { 
		  code : 'IT1000006', 
		  name : '골렘파괴자', 
		 category : 'Weapon', 
		 type : 'Mace', 
		 state : {
			str : 324, 	vit : 355
		}, 
		 option : {
			atkPhy : 890, 	atkPhyTrue : 340, 	rateHit : 88, 	rateCrt : 7, 	valCrt : 148, 	
			rateHitJust : 70, 	atkRapid : 3.4
		}, 
		price: 92449,
		  exp : '골렘을 부수는데 확실한 효과를 보여주는 둔기. 골렘괭이와 함께 사용한다면 낮은 확률로 골렘에게서 광석을 채취할 수 있다.', 
	},
	IT1000007 : { 
		  code : 'IT1000007', 
		  name : '골렘괭이', 
		 category : 'Weapon', 
		 type : 'SubMace', 
		 state : {
			str : 142, 	vit : 162
		}, 
		 option : {
			atkPhy : 427, 	atkPhyTrue : 121, 	rateHit : 88, 	rateCrt : 5, 	valCrt : 123, 	
			rateHitJust : 70, 	atkRapid : 3.7
		}, 
		price: 44331,
		  exp : '골렘을 부수는데 확실한 효과를 보여주는 곡괭이. 골렘파괴자와 함께 사용한다면 낮은 확률로 골렘에게서 광석을 채취할 수 있다.', 
	},
	IT0000050 : { 
		  code : 'IT0000050', 
		  name : '안전모', 
		 category : 'Head', 
		 type : 'Helmet', 
		 health : {

			pHp : 12,pSp : 7
		}, 
		 state : {
			str : 88, 	vit : 96
		}, 
		 option : {
			defPhyPer : 44, 	defPhyNum : 21, 	defMagPer : 30, 	defMagNum : 12
		}, 
		price: 1881,
		  exp : '알 수 없는 글자가 쓰여져 있는 헬멧. 착용자는 알 수 없는 이유로 체력과 스테미너가 증가한다.', 
	},
	IT9000006 : { 
		  code : 'IT9000006', 
		  name : '동굴탈출용로프', 
		 category : 'Other', 
		 type : 'Item', 
		price: 248,
		  exp : '동굴탈출용 로프를 사용하면 어떠한 상황에서도 탑 밖으로 돌아갈 수 있다. 하지만 60%의 확률로 사용에 성공한다.', 
	},
	IT9000007 : { 
	  code : 'IT9000007', 
	  name : '물', 
	 category : 'Other', 
	 type : 'Item', 
		price: 140,
	  src : 'food_004.png', 
	  exp : '깨끗한 정제수. hp, mp 리젠 20%', 
	},
	IT0000051 : { 
		  code : 'IT0000051', 
		  name : 'Silver Shovel', 
		 category : 'Weapon', 
		 type : 'TwoHandSword', 
		 spec : { 
			 health : {

			pHp : 3,pSp : 3
			 }, 
			 state : {
			str : 72, 	vit : 44
			 }, 
			 option : {
			atkPhy : 68, 	atkPhyTrue : 21, 	rateHit : 90, 	rateCrt : 4, 	valCrt : 130, 	
			rateHitJust : 70, 	atkRapid : 4
			 }, 
		 }, 
		price: 7243,
		  exp : '은으로 만든 삽이다. 언데드 몬스터에게 20% 추가 데미지를 준다.', 
	},
	IT0000052 : { 
		  code : 'IT0000052', 
		  name : '부지깽이', 
		 category : 'Weapon', 
		 type : 'Wand', 
		 spec : { 
			 health : {
			mp : 254
			 }, 
			 state : {
			int : 37
			 }, 
			 option : {
			atkPhy : 25, 	atkMag : 37, 	atkPhyTrue : 12, 	atkMagTrue : 21, 	rateHit : 87, 	
			rateDis : 20, 	rateCrt : 4, 	valCrt : 227, 	rateHitJust : 73, 	atkRapid : 8
			 }, 
		 }, 
		price: 16557,
		  src : 'we_staff001b.png', 
		  exp : '평범한 부지깽이다. 불속성 데미지를 준다. 불속성 공격을 할 경우 400%의 추가 데미지를 입힌다.', 
	},
	IT0000053 : { 
		  code : 'IT0000053', 
		  name : 'Wood Staff', 
		 category : 'Weapon', 
		 type : 'Staff', 
		 spec : { 
			 state : {
			int : 12
			 }, 
			 option : {
			atkMag : 30, 	atkMagTrue : 8, 	rateHit : 70, 	rateCrt : 3, 	valCrt : 120, 	
			rateHitJust : 42, 	atkRapid : 2
			 }, 
		 }, 
		price: 1542,
		  src : 'we_staff010c.png', 
		  exp : '나무가지를 꺾어서 만든 조잡한 지팡이.', 
	},
	IT0000054 : { 
		  code : 'IT0000054', 
		  name : '열매달린 가지', 
		 category : 'Weapon', 
		 type : 'Staff', 
		 spec : { 
			 state : {
			vit : 16, 	int : 22
			 }, 
			 option : {
			atkMag : 75, 	atkMagTrue : 33, 	rateHit : 50, 	rateCrt : 6, 	valCrt : 220, 	
			rateHitJust : 50, 	atkRapid : 6
			 }, 
		 }, 
		price: 9488,
		  src : 'we_staff001.png', 
		  exp : '열매가 달려있는 나무가지다. 착용자의 치유능력이 30%상승한다.', 
	},
	IT9000008 : { 
		  code : 'IT9000008', 
		  name : '파야열매', 
		 category : 'Other', 
		 type : 'Item', 
		price: 172,
		  src : 'food_035.png', 
		  exp : '전투시 복용하면 전체 체력의 1/4을 회복하지만 방어력이 25% 하락한다.', 
	},
	IT9000009 : { 
		  code : 'IT9000009', 
		  name : '날달걀', 
		 category : 'Other', 
		 type : 'Item', 
		price: 149,
		  src : 'food_037.png', 
		  exp : '전투시 복용하면 전체 체력의 1/8을 지속적으로 회복한다.', 
	},
	IT9000010 : { 
		  code : 'IT9000010', 
		  name : '감자', 
		 category : 'Other', 
		 type : 'Item', 
		price: 252,
		  src : 'food_036.png', 
		  exp : '전투시 복용하면 전체 체력의 1/4을 회복한다. 특정 층에서 아이템을 교환할 때 사용할 수 있다.', 
	},
	IT1000007 : { 
		  code : 'IT1000007', 
		  name : '초보 마법사 모자', 
		 category : 'Armor', 
		 type : 'Hat', 
		 spec : { 
			 state : {
			vit : 2, 	int : 7
			 }, 
			 option : {
			defPhyPer : 20, 	defMagPer : 22, 	
	defPhyNum : 5,	defMagNum : 5
			 }, 
		 }, 
		price: 654,
		  src : 'helm_005.png', 
		  exp : '초보 마법사들이 즐겨쓰는 모자다. 초보 마법사 로브와 함께 착용하면 마법 공격력과 방어력이 10% 상승한다.', 
	},
	IT1000008 : { 
		  code : 'IT1000008', 
		  name : '초보 마법사 로브', 
		 category : 'Armor', 
		 type : 'Robe', 
		 spec : { 
			 state : {
			vit : 12, 	int : 6
			 }, 
			 option : {
			defPhyPer : 31, 	defMagPer : 42, 	defPhyNum : 5,	defMagNum : 5
			 }, 
		 }, 
		price: 788,
		  src : 'armor_010b.png', 
		  exp : '초보 마법사들이 즐겨입는 로브로 초보 마법사 모자와 함께 착용하면 마법 공격력과 방어력이 10% 상승한다.', 
	},
	IT0000055 : { 
		  code : 'IT0000055', 
		  name : 'Jewel Amplifier', 
		 category : 'Weapon', 
		 type : 'Staff', 
		 spec : { 
			 health : {

			pMp : 10
			 }, 
			 state : {
			vit : 62, 	int : 131
			 }, 
			 option : {
			atkMag : 265, 	atkMagTrue : 126, 	rateHit : 91, 	rateHitJust : 77, 	atkRapid : 6
			 }, 
		 }, 
		price: 34777,
		  src : 'we_staff020b.png', 
		  exp : '보석을 통하여 마력을 증폭시켜주는 지팡이.', 
	},
	IT0000013 : { 
		  code : 'IT0000013', 
		  name : '평범한 리본', 
		 category : 'Item', 
		 type : 'Item', 
		 spec : { 
			 health : {

			pHp : 2,pSp : 2,pMp : 2
			 }, 
		 }, 
		price: 311,
		  src : 'acce_010.png', 
		  exp : '별다른 능력을 가지지 않은 장식품', 
	},
	IT0000015 : { 
		  code : 'IT0000015', 
		  name : '주시자의 눈', 
		 category : 'Item', 
		 type : 'Item', 
		 spec : { 
			 health : {

			pMp : 7
			 }, 
		 }, 
		price: 8006,
		  src : 'acce_003e.png', 
		  exp : '탑에서 사망한 수도승의 눈. 착용자의 명중률을 12% 상승시킨다.', 
	},
	IT0000016 : { 
		  code : 'IT0000016', 
		  name : '고무줄', 
		 category : 'Item', 
		 type : 'Item', 
		 spec : { 
			 state : {
			luk : 16
			 }, 
		 }, 
		price: 444,
		  src : 'acce_004.png', 
		  exp : '행운을 올려주는 노란색 고무줄.', 
	},
	IT0000021 : { 
		  code : 'IT0000021', 
		  name : '얼음마법서 -1-', 
		 category : 'Weapon', 
		 type : 'Book', 
		 spec : { 
			 health : {

			pMp : 17
			 }, 
			 state : {
			str : 22, 	int : 48
			 }, 
			 option : {
			atkMag : 63, 	atkMagTrue : 17, 	rateHit : 78, 	rateDis : 15, 	rateHitJust : 66, 	
			atkRapid : 3
			 }, 
		 }, 
		price: 1227,
		  src : 'book_002.png', 
		  exp : '얼음 마법의 정수가 담긴 책. 시리즈로 출간되었고 기초 얼음마법 패키지가 들어있다. 빙결 확률이 25% 증가한다.', 
	},
	IT0000022 : { 
		  code : 'IT0000022', 
		  name : '화염마법서 -1-', 
		 category : 'Weapon', 
		 type : 'Book', 
		 spec : { 
			 health : {

			pMp : 17
			 }, 
			 state : {
			str : 18, 	int : 52
			 }, 
			 option : {
			atkMag : 70, 	atkMagTrue : 24, 	rateHit : 71, 	rateDis : 15, 	rateHitJust : 60, 	
			atkRapid : 2
			 }, 
		 }, 
		price: 1227,
		  src : 'book_002c.png', 
		  exp : '화염 마법의 정수가 담긴 책. 시리즈로 출간된 것으로 알려져 있다. 기초 화염마법 패키지가 들어있다. 화상을 입을 확률이 25% 증가한다.', 
	},
	IT0000023 : { 
		  code : 'IT0000022', 
		  name : ' Druid', 
		 category : 'Weapon', 
		 type : 'Book', 
		 spec : { 
			 health : {

			pMp : 4
			 }, 
			 state : {
			vit : 40, 	int : 30
			 }, 
			 option : {
			atkMag : 40, 	atkMagTrue : 7, 	rateHit : 82, 	rateHitJust : 69, 	atkRapid : 5
			 }, 
		 }, 
		price: 1227,
		  src : 'book_002b.png', 
		  exp : '영웅 드루이드의 일대기가 담겨있는 책. <만년동안 응어리진 분노를... 222p>', 
	},
	IT0000024 : { 
		  code : 'IT0000024', 
		  name : '기술머신', 
		 category : 'Other', 
		 type : 'Item', 
		price: 6550,
		  src : 'item_051.png', 
		  exp : '익히고 있는 기술중 한가지를 선택하여 랜덤한 다른 기술로 변화시킨다.', 
	},
	IT0000056 : { 
	 code : 'IT0000056', 
	 name : 'Hit Glasses', 
	 category : 'Item', 
	 type : 'Item', 
	 spec : { 
	 	 option : {
 		rateHit : 20
		 }, 
	 }, 
	  price: 4556, 
	  src : 'acce_015.png', 
	  exp : '착용자의 명중률 30% 상승', 
	},
	IT0000057 : { 
		 code : 'IT0000057', 
		 name : 'Automatic Gatling', 
		 category : 'Weapon', 
		 type : 'Gun', 
		 spec : { 
			 state : {
			str : 32, 	vit : 17, 	dex : 44
			 }, 
			 option : {
			atkPhy : 162, 	atkPhyTrue : 48, 	rateHit : 20, 	rateHitJust : 15,	rateCrt : 4, 	valCrt : 1440, 	
			atkRapid : 7
			 }, 
			 add : {
				count : 125, maxCount : 125
			}
		 }, 
		  price: 4500, 
		  src : 'we_gun006.png', 
		  exp : '빠른 공격속도를 가지지만 상대방을 맞추기는 쉽지 않다. 한번 공격시 2회 공격', 
	},
	IT0000058 : { 
		 code : 'IT0000058', 
		 name : 'X-Critic', 
		 category : 'Weapon', 
		 type : 'Gun', 
		 spec : { 
			 state : {
			str : 22, 	vit : 11, 	dex : 55
			 }, 
			 option : {
			atkPhy : 123, 	atkPhyTrue : 44, 	rateHit : 70, 	rateHitJust : 64,	rateCrt : 4, 	valCrt : 142, 	
			atkRapid : 5
			 }, 
			 add : {
				count : 15, maxCount : 15
			}
		 }, 
		  price: 6320, 
		  src : 'we_gun005.png', 
		  exp : '동료들의 치명타 확률을 20% 올려준다.', 
	},
	IT0000059 : { 
		 code : 'IT0000059', 
		 name : 'M-Pistol', 
		 category : 'Weapon', 
		 type : 'SubPistol', 
		 spec : { 
			 state : {
			int : 38, 	dex : 47
			 }, 
			 option : {
			atkMag : 149, 	atkMagTrue : 66, 	rateHit : 80, 	rateCrt : 7, 	valCrt : 120, 	
			rateHitJust : 66, 	atkRapid : 4
			 }, 
			 add : {
				count : 10, maxCount : 10
			}
		 }, 
		  price: 7746, 
		  src : 'we_gun002.png', 
		  exp : '마법 피해를 입히는 탄환을 발사한다.', 
	},
	IT0000060 : { 
		 code : 'IT0000060', 
		 name : 'Vampire', 
		 category : 'Weapon', 
		 type : 'SubPistol', 
		 spec : { 
			 state : {
			str : 41, 	dex : 47
			 }, 
			 option : {
			atkPhy : 159, 	atkPhyTrue : 61, 	rateHit : 94, 	rateCrt : 6, 	valCrt : 150, 	
			rateHitJust : 71, 	atkRapid : 6
			 }, 
			 add : {
				count : 12, maxCount : 12
			}
		 }, 
		  price: 11472, 
		  src : 'we_gun003.png', 
		  exp : '상대방에게 준 피해의 5% 만큼 자신의 체력을 회복한다.', 
	},
	IT0000061 : { 
		 code : 'IT0000061', 
		 name : 'Combat30', 
		 category : 'Weapon', 
		 type : 'SubPistol', 
		 spec : { 
			 state : {
			str : 152, 	dex : 361
			 }, 
			 option : {
			atkPhy : 372, 	atkPhyTrue : 92, 	rateHit : 63, 	rateCrt : 5, 	valCrt : 177, 	
			rateHitJust : 54, 	atkRapid : 4
			 }, 
			 add : {
				count : 7, maxCount : 7
			}
		 }, 
		  price: 41555, 
		  src : 'we_gun003.png', 
		  exp : '더블 배럴 샷건. 한번에 두발의 탄환을 발사하는 총.', 
	},
	IT9000011 : { 
		 code : 'IT9000011', 
		 name : 'Cake in mint', 
		 category : 'Other', 
		 type : 'Item', 
		  price: 420, 
		  src : 'food_006.png', 
		  exp : '빵 안에는 역겨운 초록이 숨어있다. 파티원의 체력을 30% 회복한다.', 
	},
	IT9000012 : { 
		 code : 'IT9000012', 
		 name : 'Coconut Water', 
		 category : 'Other', 
		 type : 'Item', 
		  price: 620, 
		  src : 'food_004.png', 
		  exp : '이 세상의 맛이 아니다.45%의 MP를 회복하지만 구토를 유발한다.', 
	},
	IT9000013 : { 
		 code : 'IT9000013', 
		 name : 'Big Meat', 
		 category : 'Other', 
		 type : 'Item', 
		  price: 1304, 
		  src : 'food_020.png', 
		  exp : '흔히 만화고기라 불리는 모양을 가지고 있는 이 음식은 HP와 MP를 40% ~ 60% 회복해준다.', 
	},
	IT9000014 : { 
		 code : 'IT9000014', 
		 name : '국밥', 
		 category : 'Other', 
		 type : 'Item', 
		  price: 502, 
		  src : 'food_028.png', 
		  exp : '그 가격이면 국밥을 먹는다. HP와 MP를 25% 회복시킨다.', 
	},
	IT0000062 : { 
		 code : 'IT0000062', 
		 name : '霄白衣', 
		 category : 'Armor', 
		 type : 'Robe', 
		 spec : { 
			 health : {
			hp : 664,sp : 124,mp : 338,
			pMp : 12
			 }, 
			 state : {
			vit : 51, 	int : 84
			 }, 
			 option : {
			defPhyPer : 54, 	resPhyPer : 12, 	defMagPer : 57, 	resMagPer : 16
			 }, 
		 }, 
		  price: 50292, 
		  src : 'armor_027.png', 
		  exp : '这件衣服使用的字母没有意义，但看起来不错。', 
	},
	IT0000063 : { 
		 code : 'IT0000063', 
		 name : '翼のドレス', 
		 category : 'Armor', 
		 type : 'Cloth', 
		 spec : { 
			 health : {
			hp : 224,sp : 87,mp : 120
			 }, 
			 state : {
			vit : 52, 	dex : 112
			 }, 
			 option : {
			defPhyPer : 42, 	resPhyPer : 7, 	defMagPer : 33, 	resMagPer : 5
			 }, 
		 }, 
		  price: 30226, 
		  src : 'armor_024b.png', 
		  exp : '물건을 훔칠 확률이 올라가는 특이한 옷.', 
	},
	IT0000064 : { 
		 code : 'IT0000064', 
		 name : 'नाइटको आर्मर', 
		 category : 'Armor', 
		 type : 'Armor', 
		 spec : { 
			 health : {
			hp : 542,sp : 223,
			pHp : 7
			 }, 
			 state : {
			str : 87, 	vit : 52
			 }, 
			 option : {
			defPhyPer : 60, 	resPhyPer : 20, 	defMagPer : 28, 	resMagPer : 6
			 }, 
		 }, 
		  price: 44253, 
		  src : 'armor_029b.png', 
		  exp : '알수없는 언어가 쓰여진 갑옷이지만 방어력만큼은 확실한 것으로 알려져 있다.', 
	},
	IT0000065 : { 
		 code : 'IT0000065', 
		 name : '코볼트 잔해', 
		 category : 'Armor', 
		 type : 'Armor', 
		 spec : { 
			 health : {
			hp : 66,sp : 23,
			pHp : 3
			 }, 
			 state : {
			str : 26, 	vit : 17
			 }, 
			 option : {
			defPhyPer : 24, 	resPhyPer : 8, 	defMagPer : 12, 	resMagPer : 6
			 }, 
		 }, 
		  price: 3220, 
		  src : 'armor_019b.png', 
		  exp : '평범한 갑옷에 코볼트의 가죽을 덧댄 갑옷. 별다른 차이는 있지 않은 것으로 알려져 있다.', 
	},
	IT0000066 : { 
		 code : 'IT0000066', 
		 name : '버려진 로브', 
		 category : 'Armor', 
		 type : 'Robe', 
		 spec : { 
			 health : {
			hp : 41,sp : 12,mp : 59
			 }, 
			 state : {
			int : 36
			 }, 
			  option : {
			defPhyPer : 16, 	resPhyPer : 4, 	defMagPer : 18, 	resMagPer : 7
			 }, 
		 }, 
		  price: 1402, 
		  src : 'armor_018.png', 
		  exp : '마을 바닥에 떨어져 있던 것 치고는 상태가 괜찮아 보인다.', 
	},
	IT0000067 : { 
		 code : 'IT0000067', 
		 name : '돌격조끼', 
		 category : 'Armor', 
		 type : 'Armor', 
		 spec : { 
			 health : {
			hp : 228,sp : 140
			 }, 
			 state : {
			str : 97, 	vit : 68
			 }, 
			 option : {
			defPhyPer : 55, 	resPhyPer : 20, 	defMagPer : 55, 	resMagPer : 20
			 }, 
		 }, 
		  price: 37728, 
		  src : 'armor_014.png', 
		  exp : '착용자의 방어력과 마법방어력이 15% 상승한다.', 
	},
	IT0000068 : { 
		 code : 'IT0000068', 
		 name : '암석방패', 
		 category : 'Weapon', 
		 type : 'Shield', 
		 spec : { 
			 health : {
			hp : 151,sp : 228,
			pHp : 5,pSp : 5
			 }, 
			 state : {
			str : 97, 	vit : 68
			 }, 
			 option : {
			defPhyPer : 34, 	resPhyPer : 11, 	defMagPer : 34, 	resMagPer : 11
			 }, 
		 }, 
		  price: 5728, 
		  src : 'shield_001n.png', 
		  exp : '알수 없는 바위 덩어리를 깎아 만든 방패', 
	},
	IT9910000: {
	    code: 'IT9910000',
	    name: 'Branch',
	    category: 'Other',
	    type: 'Map',
	    useData: '20001',//지도의 경우 해방되는 아이템.
		price: 100,
	    src: 'MI_item.png',
	    exp: '끝이 꺽여 있는 나뭇가지. 어째선지 가리키고 있는 방향이 있는 것 같다.'

	},
	IT9920000: {
	    code: 'IT9920000',
	    name: 'BrokeBranch',
	    category: 'Other',
	    type: 'Key',
	    useData: '20001',//지도의 경우 해방되는 아이템.
		price: 100,
	    src: 'MI_item.png',
	    exp: '부러진 나뭇가지. 어째선지 가리키고 있는 방향이 있는 것 같다(1 회용).'

	},
	IT0000069 : { 
	 code : 'IT0000069', 
	 name : '驛川之鏡', 
	 category : 'Weapon', 
	 type : 'Shield', 
	 spec : { 
	 	 health : {
 		hp : 554,sp : 288
		 }, 
	 	 state : {
 		vit : 75, 	res : 10
		 }, 
	 	 option : {
 		defPhyPer : 14, 	defMagPer : 14
		 }, 
	 }, 
	  price: '5254', 
	  src : 'acce_016.png', 
	  exp : '가공된 수정으로 만들어진 방패.', 
	},
	IT0000070 : { 
		 code : 'IT0000070', 
		 name : '猫耳', 
		 category : 'Armor', 
		 type : 'Hat', 
		 spec : { 
			 health : {

			pHp : 10,pSp : 10,pMp : 10
			 }, 
			 state : {
			str : 10, 	vit : 10, 	int : 10, 	wis : 10, 	dex : 10, 	
			agi : 10, 	dis : 10, 	res : 10, 	spd : 10, 	luk : 10
			 }, 
		 }, 
		  price: '5254', 
		  src : 'acce_020.png', 
		  exp : '모든 능력치를 10 상승시켜주는 장식용 악세사리.', 
	},
	IT0000071 : { 
		 code : 'IT0000071', 
		 name : 'Lollipops', 
		 category : 'Weapon', 
		 type : 'Staff', 
		 spec : { 
			 health : {
			mp : 442,
			pMp : 10
			 }, 
			 state : {
			int : 109
			 }, 
			 option : {
			atkPhy : 54, 	atkMag : 167, 	atkPhyTrue : 22, 	atkMagTrue : 84, 	rateCrt : 6, 	valCrt : 123,	rateHit : 82, 	rateHitJust : 66,	
			 }, 
		 }, 
		  price: '8254', 
		  src : 'acce_025.png', 
		  exp : '비상식량으로 사용이 가능하며 체력을 15% 회복시킬 수 있다.', 
	},
	IT0000072 : { 
		 code : 'IT0000072', 
		 name : 'Rad Leather', 
		 category : 'Armor', 
		 type : 'Armor', 
		 spec : { 
			 health : {
			hp : 244,sp : 97
			 }, 
			 state : {
			str : 48, 	vit : 29, 	dex : 52
			 }, 
			 option : {
			defPhyPer : 17, 	defMagPer : 16
			 }, 
		 }, 
		  price: '1438', 
		  src : 'armor_005f.png', 
		  exp : '붉게 물들인 가죽으로 만든 갑옷. 별다른 효과는 가지고 있지 않다.', 
	},
	IT0000073 : { 
		 code : 'IT0000073', 
		 name : 'ডিভাইন ভেটেরিনারি', 
		 category : 'Armor', 
		 type : 'Robe', 
		 spec : { 
			 health : {
			hp : 244,sp : 97,mp : 433
			 }, 
			 state : {
			vit : 42, 	int : 237
			 }, 
			 option : {
			defPhyPer : 23, 	defMagPer : 23
			 }, 
		 }, 
		  price: '11376', 
		  src : 'armor_011e.png', 
		  exp : '', 
	},
	IT0000074 : { 
		 code : 'IT0000074', 
		 name : 'Combat Vest', 
		 category : 'Armor', 
		 type : 'Armor', 
		 spec : { 
			 health : {
			sp : 266,
			pHp : 30
			 }, 
			 state : {
			vit : 244, 	res : 55
			 }, 
			 option : {
			defPhyPer : 23, 	defMagPer : 23, 	rateDodge : 22
			 }, 
		 }, 
		  price: '15284', 
		  src : 'armor_014e.png', 
		  exp : '전투시에 회피율이 추가로 15% 올라가는 조끼.', 
	},
	IT0000075 : { 
		 code : 'IT0000075', 
		 name : 'Curved Memorial Bar', 
		 category : 'Weapon', 
		 type : 'Staff', 
		 spec : { 
			 health : {
			hp : 177,mp : 347,
			pMp : 5
			 }, 
			 state : {
			vit : 41, 	int : 110
			 }, 
			 option : {
			atkMag : 142, 	atkMagTrue : 65, 	rateHit : 91, 	rateCrt : 6, 	valCrt : 123, 	
			rateHitJust : 57, 	atkRapid : 5
			 }, 
		 }, 
		  price: '9384', 
		  src : 'food_007.png', 
		  exp : '정체를 알수없는 누군가의 기억이 담겨 있다.', 
	},
	IT0000075 : { 
	 code : 'IT0000075', 
	 name : 'Gown', 
	 category : 'Armor', 
	 type : 'Cloth', 
	 spec : { 
	 	 health : {
 		mp : 362,
 		pHp : 5,pSp : 5,pMp : 5
		 }, 
	 	 state : {
 		vit : 61, 	int : 77
		 }, 
	 	 option : {
 		defPhyPer : 15, 	defMagPer : 17
		 }, 
	 }, 
	  price: '5654', 
	  src : 'armor_015e.png', 
	  exp : '흰색 일색으로 이루어진 가운.', 
	},
	IT0000076 : { 
		 code : 'IT0000076', 
		 name : '秘密', 
		 category : 'Armor', 
		 type : 'ArmGaurd', 
		 spec : { 
			 health : {
			sp : 122
			 }, 
			 state : {
			str : 51, 	dex : 72
			 }, 
			 option : {
			atkPhy : 66, 	defPhyPer : 15, 	defMagPer : 12, 	atkPhyTrue : 15
			 }, 
		 }, 
		  price: '13658', 
		  src : 'gauntlet_009.png', 
		  exp : '칼날이 달려있는 방어구. 주의하지 않는다면 자신에게 피해를 줄 수도 있다.', 
	},
	IT0000077 : { 
		 code : 'IT0000076', 
		 name : 'Trumpet', 
		 category : 'Item', 
		 type : 'Item', 
		 spec : { 
			 health : {

			pHp : 15,pSp : 15,pMp : 15
			 }, 
			 state : {
			vit : 66, 	luk : 25
			 }, 
		 }, 
		  price: '63658', 
		  src : 'inst_002.png', 
		  exp : '행운을 올려주는 나팔.', 
	},
	IT0000078 : { 
		 code : 'IT0000078', 
		 name : 'Face Protector', 
		 category : 'Armor', 
		 type : 'Helmet', 
		 spec : { 
			 health : {
			hp : 661,sp : 244
			 }, 
			 state : {
			vit : 98
			 }, 
			 option : {
			defPhyPer : 41, 	defMagPer : 27
			 }, 
		 }, 
		  price: '5667', 
		  src : 'helm_009.png', 
		  exp : '값싼 보급형 방어구. 눈먼 화살로 부터 안면을 보호해준다.', 
	},
	IT0000079 : { 
		 code : 'IT0000079', 
		 name : 'Goblin Mask', 
		 category : 'Armor', 
		 type : 'Helmet', 
		 spec : { 
			 health : {
			sp : 255
			 }, 
			 state : {
			dex : 68, 	spd : 101
			 }, 
			 option : {
			atkPhy : 132, 	defPhyPer : 11, 	defMagPer : 7, 	atkPhyTrue : 70
			 }, 
		 }, 
		  price: '21110', 
		  src : 'helm_013.png', 
		  exp : '민첩성과 속도를 올려주는 가면.', 
	},
	IT0000080 : { 
		 code : 'IT0000080', 
		 name : 'Burning Wand', 
		 category : 'Weapon', 
		 type : 'Wand', 
		 spec : { 
			 health : {
			mp : 314,
			pMp : 7
			 }, 
			 state : {
			int : 102
			 }, 
			 option : {
			atkMag : 161, 	atkMagTrue : 81, 	rateHit : 92, 	rateCrt : 5, 	valCrt : 140, 	
			rateHitJust : 71, 	atkRapid : 3
			 }, 
		 }, 
		  price: '16999', 
		  src : 'item_024.png', 
		  exp : '공격시 화염 속성 피해를 입힌다. 화속성 추가 피해 10%', 
	},
	IT0000081 : { 
		 code : 'IT0000081', 
		 name : '명필가의 붓', 
		 category : 'Weapon', 
		 type : 'Staff', 
		 spec : { 
			 health : {
			mp : 327,
			pMp : 8
			 }, 
			 state : {
			vit : 88, 	int : 162
			 }, 
			 option : {
			atkMag : 331, 	atkMagTrue : 124, 	rateHit : 99, 	rateCrt : 5, 	valCrt : 140, 	
			rateHitJust : 65, 	atkRapid : 2
			 }, 
		 }, 
		  price: '146991', 
		  src : 'item_038.png', 
		  exp : '다른 세계의 명필가가 글씨를 쓸때 사용했다고 알려졌다.', 
	},
	IT0000082 : { 
		 code : 'IT0000082', 
		 name : '녹색베일', 
		 category : 'Armor', 
		 type : 'Robe', 
		 spec : { 
			 health : {
			hp : 117,sp : 85,mp : 261
			 }, 
			 state : {
			vit : 39, 	int : 62
			 }, 
			 option : {
			defPhyPer : 11, 	defMagPer : 15
			 }, 
		 }, 
		  price: '2412', 
		  src : 'armor_001.png', 
		  exp : '녹색천으로 만들어진 베일. 천의 재료는 알 수 없다.', 
	},
	IT0000083 : { 
		 code : 'IT0000083', 
		 name : 'Fluffy Coat', 
		 category : 'Armor', 
		 type : 'Cloth', 
		 spec : { 
			 health : {
			hp : 265,sp : 110,mp : 447
			 }, 
			 state : {
			vit : 44, 	int : 89, 	luk : 12
			 }, 
			 option : {
			defPhyPer : 23, 	defMagPer : 19
			 }, 
		 }, 
		  price: '15121', 
		  src : 'armor_015.png', 
		  exp : '푹신한 재질로 만들어진 옷. 입으면 방어력이 올라갈 것만 같다.', 
	},
	IT0000084 : { 
		 code : 'IT0000084', 
		 name : 'Grass Dress', 
		 category : 'Armor', 
		 type : 'Cloth', 
		 spec : { 
			 health : {
			hp : 77,sp : 46,mp : 128
			 }, 
			 state : {
			vit : 27, 	int : 55
			 }, 
			 option : {
			defPhyPer : 10, 	defMagPer : 10
			 }, 
		 }, 
		  price: '2112', 
		  src : 'armor_013c.png', 
		  exp : '식물의 잎과 줄기로 제작된 옷이다. 매 턴마다 체력을 1/16 회복하지만 화염피해를 입을 경우 체력의 2%만큼의 추가 데미지를 입는다.', 
	},
	IT0000085 : { 
		 code : 'IT0000085', 
		 name : 'Clothing of Monastics', 
		 category : 'Armor', 
		 type : 'Cloth', 
		 spec : { 
			 health : {
			hp : 82,sp : 51,mp : 64
			 }, 
			 state : {
			str : 14, 	vit : 25, 	int : 28, 	dex : 51
			 }, 
			 option : {
			defPhyPer : 15, 	defMagPer : 12
			 }, 
		 }, 
		  price: '4142', 
		  src : 'armor_022d.png', 
		  exp : '알 수 없는 기운으로 보호받고 있는 오래된 수도복. 냄새가 나는 것만 같이 느껴진다.', 
	},
	IT0000086 : { 
		 code : 'IT0000086', 
		 name : 'ゲダ', 
		 category : 'Item', 
		 type : 'Item', 
		 spec : { 
			 health : {
			hp : 207
			 }, 
			 state : {
			str : 5, 	vit : 5, 	int : 5, 	wis : 5, 	dex : 5, 	
			agi : 5, 	dis : 5, 	res : 5, 	spd : 5, 	luk : 5
			 }, 
			 option : {
			atkPhy : 5, 	atkMag : 5
			 }, 
		 }, 
		  price: '0', 
		  src : 'boots_007.png', 
		  exp : '탑에서 발견된 다른 세계의 신발. 모든 능력치를 상승시켜 준다.', 
	},
	IT0000087 : { 
		 code : 'IT0000087', 
		 name : 'ArrowCase', 
		 category : 'Weapon', 
		 type : 'ArrowCase', 
		 spec : { 
			 state : {
			dex : 17, 	spd : 7
			 }, 
		 }, 
		  price: '0', 
		  src : 'item_043.png', 
		  exp : '가죽으로 만들어진 화살통.', 
	},
	IT0000088 : { 
		 code : 'IT0000088', 
		 name : 'Light Quiver', 
		 category : 'Weapon', 
		 type : 'ArrowCase', 
		 spec : { 
			 state : {
			dex : 24, 	spd : 7
			 }, 
		 }, 
		  price: '0', 
		  src : 'item_043.png', 
		  exp : '경량화 마법이 걸린 것으로 추정되는 화살통.', 
	},
	IT0000089 : { 
		 code : 'IT0000089', 
		 name : 'Escape Button', 
		 category : 'Item', 
		 type : 'Item', 
		  price: '0', 
		  src : 'MI_error.png', 
		  exp : '도망칠 확률을 높여주는 악세사리.', 
	},
	IT0000090 : { 
		 code : 'IT0000090', 
		 name : 'Angel Ring', 
		 category : 'Item', 
		 type : 'Item', 
		 spec : { 
			 state : {
			luk : 38
			 }, 
			 option : {
			resPhyPer : 4, 	resMagPer : 4, 	rateDodge : 12
			 }, 
		 }, 
		  price: '0', 
		  src : 'mat_026.png', 
		  exp : '행운을 높여주는 아이템. 소지하고 있는 것만으로도 파티 전원의 행운이 높아진다.', 
	},
	IT9000024 : { 
		 code : 'IT9000024', 
		 name : '민트를 뿌린 고기', 
		 category : 'Other', 
		 type : 'Item', 
		  price: '0', 
		  src : 'item_012.png', 
		  exp : '4턴동안 체력이 10% 감소하지만 방어력이 40% 상승한다.', 
	},
	IT9000025 : { 
		 code : 'IT9000025', 
		 name : '각얼음', 
		 category : 'Other', 
		 type : 'Item', 
		  price: '0', 
		  src : 'item_014.png', 
		  exp : '3턴 동안 얼음 속성 마법의 데미지가 15% 증가된다.', 
	},
	IT0000091 : { 
		 code : 'IT0000091', 
		 name : '신속의 장화', 
		 category : 'Item', 
		 type : 'Item', 
		 spec : { 
			 state : {
			dex : 44, 	spd : 27
			 }, 
		 }, 
		  price: '7721', 
		  src : 'boots_003c.png', 
		  exp : '공격속도를 10% 증가시켜주는 장화.', 
	},
	IT0000092 : { 
		 code : 'IT0000092', 
		 name : '빨간장화', 
		 category : 'Item', 
		 type : 'Item', 
		 spec : { 
			 state : {
			dex : 33, 	spd : 27
			 }, 
			 option : {
			atkPhy : 33, 	defPhyPer : 3, 	atkMag : 33, 	defMagPer : 3, 	rateDodge : 3
			 }, 
		 }, 
		  price: '3333', 
		  src : 'boots_003b.png', 
		  exp : '3배 빨라지는 붉은색의 장화. 공격속도가 30% 상승한다.', 
	},
	IT0000093 : { 
		 code : 'IT0000093', 
		 name : '태도', 
		 category : 'Weapon', 
		 type : 'Sword', 
		 spec : { 
			 health : {
			hp : 247,sp : 121
			 }, 
			 state : {
			str : 99, 	vit : 25, 	dex : 68
			 }, 
			 option : {
			atkPhy : 233, 	atkPhyTrue : 89, 	rateHit : 87, 	rateDodge : 5, 	rateCrt : 12, 	
			valCrt : 128, 	rateHitJust : 80, 	atkRapid : 11
			 }, 
		 }, 
		  price: '43211', 
		  src : 'we_sword021.png', 
		  exp : 'અજાણી ભાષા લખેલી છે.', 
	},
	IT0000094 : { 
		 code : 'IT0000094', 
		 name : '불편한 무기', 
		 category : 'Weapon', 
		 type : 'Sword', 
		 spec : { 
			 health : {
			hp : 252,sp : 117
			 }, 
			 state : {
			str : 168, 	vit : 108, 	int : -101
			 }, 
			 option : {
			atkPhy : 433, 	atkPhyTrue : 189, 	rateHit : 50, 	rateCrt : 5, 	valCrt : 132, 	
			rateHitJust : 50, 	atkRapid : 6
			 }, 
		 }, 
		  price: '16651', 
		  src : 'we_sword015.png', 
		  exp : '멍청해지는 듯한 느낌이 드는 무기. 사용시 무기 사용에 불편함을 느끼게 된다.', 
	},
	IT0000095 : { 
		 code : 'IT0000095', 
		 name : 'Scimeter', 
		 category : 'Weapon', 
		 type : 'Sword', 
		 spec : { 
			 health : {
			hp : 104,sp : 59
			 }, 
			 state : {
			str : 67, 	vit : 42
			 }, 
			 option : {
			atkPhy : 86, 	atkPhyTrue : 51, 	rateHit : 72, 	rateCrt : 6, 	valCrt : 117, 	
			rateHitJust : 45, 	atkRapid : 8
			 }, 
		 }, 
		  price: '5548', 
		  src : 'we_sword003.png', 
		  exp : '사막의 전사들이 즐겨 사용했다고 알려진 곡도. 받는 화염피해가 3% 감소한다.', 
	},
	IT0000096 : { 
		 code : 'IT0000096', 
		 name : 'Heal Spanner', 
		 category : 'Weapon', 
		 type : 'Staff', 
		 spec : { 
			 health : {
			hp : 104,mp : 161
			 }, 
			 state : {
			vit : 21, 	int : 49
			 }, 
			 option : {
			atkMag : 59, 	atkMagTrue : 32, 	rateHit : 95, 	rateCrt : 4, 	valCrt : 116, 	
			rateHitJust : 80, 	atkRapid : 4
			 }, 
		 }, 
		  price: '1228', 
		  src : 'we_staff014c.png', 
		  exp : '기계 종족의 체력을 추가로 12% 회복시켜주는 공구형태의 지팡이.', 
	},
	IT0000096 : { 
		 code : 'IT0000096', 
		 name : '숨통끊기', 
		 category : 'Weapon', 
		 type : 'Spear', 
		 spec : { 
			 health : {
			hp : 521,sp : 317
			 }, 
			 state : {
			str : 121, 	vit : 81, 	dex : 111
			 }, 
			 option : {
			atkPhy : 544, 	atkPhyTrue : 312, 	rateHit : 96, 	rateCrt : 4, 	valCrt : 142, 	
			rateHitJust : 74, 	atkRapid : 5
			 }, 
		 }, 
		  price: '124216', 
		  src : 'we_spear017b.png', 
		  exp : '40% 이하의 체력을 가진 상대에게 30%의 추가 피해를 입힘.', 
	},
	IT0000097 : { 
		 code : 'IT0000097', 
		 name : '기다란 국자', 
		 category : 'Weapon', 
		 type : 'Spear', 
		 spec : { 
			 health : {
			hp : 126,sp : 98
			 }, 
			 state : {
			str : 48, 	vit : 55, 	dex : 31
			 }, 
			 option : {
			atkPhy : 121, 	atkPhyTrue : 75, 	rateHit : 77, 	rateCrt : 6, 	valCrt : 123, 	
			rateHitJust : 68, 	atkRapid : 3
			 }, 
		 }, 
		  price: '4478', 
		  src : 'we_other011.png', 
		  exp : '주로 군대에서 사용되는 국자. 음식을 먹을 때 받는 효과 5% 상승.', 
	},
	IT0000098 : { 
		 code : 'IT0000098', 
		 name : '용사냥활', 
		 category : 'Weapon', 
		 type : 'Bow', 
		 spec : { 
			 health : {
			hp : 77,sp : 181
			 }, 
			 state : {
			str : 67, 	dex : 221, 	luk : 40
			 }, 
			 option : {
			atkPhy : 472, 	atkPhyTrue : 212, 	rateHit : 76, 	rateCrt : 3, 	valCrt : 227, 	
			rateHitJust : 66, 	atkRapid : 1
			 }, 
		 }, 
		  price: '0', 
		  src : 'we_bow009b.png', 
		  exp : '전설적인 사냥꾼이 사용했다고 전해지는 활', 
	},
	IT0000099 : { 
		 code : 'IT0000099', 
		 name : 'Little Ballista', 
		 category : 'Weapon', 
		 type : 'BowGun', 
		 spec : { 
			 health : {
			sp : 181
			 }, 
			 state : {
			str : 44, 	vit : 35, 	dex : 109
			 }, 
			 option : {
			atkPhy : 227, 	atkPhyTrue : 99, 	rateHit : 69, 	rateCrt : 9, 	valCrt : 267, 	
			rateHitJust : 42, 	atkRapid : 1
			 }, 
		 }, 
		  price: '34124', 
		  src : 'we_bow015b.png', 
		  exp : '.', 
	},
	IT0000100 : { 
		 code : 'IT0000100', 
		 name : '징박힌 몽둥이', 
		 category : 'Weapon', 
		 type : 'Axe', 
		 spec : { 
			 health : {
			hp : 65,sp : 20
			 }, 
			 state : {
			str : 17, 	vit : 12
			 }, 
			 option : {
			atkPhy : 61, 	atkPhyTrue : 30, 	rateHit : 86, 	rateCrt : 4, 	valCrt : 116, 	
			rateHitJust : 77, 	atkRapid : 5
			 }, 
		 }, 
		  price: '1712', 
		  src : 'we_axe022.png', 
		  exp : '몽둥이에 박힌 못은 상대방을 기죽게 만든다. 7% 확률로 공포에 걸리게 만듬.', 
	},
	IT0000101 : { 
		 code : 'IT0000101', 
		 name : '피묻은 대검', 
		 category : 'Weapon', 
		 type : 'Sword', 
		 spec : { 
			 health : {
			sp : 124
			 }, 
			 state : {
			str : 33, 	
			 }, 
			 option : {
			atkPhy : 167, 	atkPhyTrue : 25, 	rateHit : 75, 	rateCrt : 4, 	valCrt : 130,
				 atkRapid : 2
			 }, 
		 }, 
		  price: '5542', 
		  src : 'Image\\we_sword039.png', 
		  exp : '오래되어 말라붙은 피가 지워지지 않는다.', 
	},
	IT0000102 : { 
		 code : 'IT0000102', 
		 name : 'Green Leaf', 
		 category : 'Weapon', 
		 type : 'Dagger', 
		 spec : { 
			 health : {
			sp : 67,
			pMp : 3
			 }, 
			 state : {
			str : 16, 	dex : 17
			 }, 
			 option : {
			atkPhy : 84, 	atkMag : 26, 	atkPhyTrue : 17, 	atkMagTrue : 26, 	rateHit : 85, 	
			rateCrt : 5, 	valCrt : 180, 	atkRapid : 4
			 }, 
		 }, 
		  price: '3720', 
		  src : 'Image\\we_sword040.png', 
		  exp : '공격 당 추가적으로 마법피해를 입히는 무기.', 
	},
	IT0000103 : { 
		 code : 'IT0000103', 
		 name : '삽을 닮은 대검', 
		 category : 'Weapon', 
		 type : 'TwoHandSword', 
		 spec : { 
			 health : {

			pHp : 25,pSp : 15
			 }, 
			 state : {
			str : 122, 	vit : 30
			 }, 
			 option : {
			atkPhy : 266, 	atkPhyTrue : 79, 	rateHit : 80, 	rateCrt : 2, 	valCrt : 220, 	
			atkRapid : 1
			 }, 
		 }, 
		  price: '54325', 
		  src : 'Image\\we_sword042.png', 
		  exp : '땅을 파거나 무엇인가를 짓이기는 것에 사용하는 것이 더 유용할 수도 있다.', 
	},
	IT0000104 : { 
		 code : 'IT0000103', 
		 name : 'Mens symbol', 
		 category : 'Ammor', 
		 type : 'Robe', 
		 spec : { 
			 health : {
			hp : 25,sp : 25,mp : 25
			 }, 
			 state : {
			str : 25, 	vit : 25, 	int : 25, 	wis : 25, 	dex : 25, 	
			agi : 25, 	dis : 25, 	res : 25, 	spd : 25, 	luk : 25
			 }, 
			 option : {
			defPhyPer : 25, 	resPhyPer : 25, 	defMagPer : 25, 	resMagPer : 25, 	rateDodge : 25, 	
			rateRes : 25, 	rateDodgeLuk : 25
			 }, 
		 }, 
		  price: '25000', 
		  src : 'Image\\armor_003b.png', 
		  exp : '영롱한 색으로 빛이 난다.', 
	},
	IT0000105 : { 
		 code : 'IT0000105', 
		 name : 'Magic Guard', 
		 category : 'Ammor', 
		 type : 'Shield', 
		 spec : { 
			 health : {

			pMp : 15
			 }, 
			 state : {
			int : 21
			 }, 
			 option : {
			defPhyPer : 4, 	defMagPer : 12, 	rateRes : 15
			 }, 
		 }, 
		  price: '', 
		  src : 'Image\\acce_003f.png', 
		  exp : '착용자가 공격당할 때 보이지 않는 방패가 생성되지만 높은 방어력을 기대하기는 어렵다.', 
	},
	IT9000016 : { 
	 code : 'IT9000016', 
	 name : 'Spicy Pepper', 
	 category : 'Other', 
	 type : 'Item', 
	  price: '384', 
	  src : 'food_018.png', 
	  exp : 'hp, sp, mp를 즉시 1/4 회복 시켜주는 음식. 30% 확률로 혼란상태에 빠진다.', 
	},
	IT9000017 : { 
		 code : 'IT9000017', 
		 name : 'おにぎり', 
		 category : 'Other', 
		 type : 'Item', 
		  price: '86', 
		  src : 'food_019.png', 
		  exp : 'hp, sp, mp를 즉시 1/8 회복 시켜주는 음식.', 
	},
	IT9000018 : { 
		 code : 'IT9000018', 
		 name : 'Protein', 
		 category : 'Other', 
		 type : 'Item', 
		  price: '3092', 
		  src : 'food_038.png', 
		  exp : '사용시 4턴 동안 공격력을 20% 증가시킨다.', 
	},
	IT9000019 : { 
		 code : 'IT9000019', 
		 name : 'MaxUp', 
		 category : 'Other', 
		 type : 'Item', 
		  price: '3092', 
		  src : 'food_038.png', 
		  exp : '사용시 4턴 동안 최대 체력을 20% 증가시킨다.', 
	},
	IT9000020 : { 
		 code : 'IT9000020', 
		 name : 'Iron', 
		 category : 'Other', 
		 type : 'Item', 
		  price: '3092', 
		  src : 'food_038.png', 
		  exp : '사용시 4턴 동안 방어력을 20% 증가시킨다.', 
	},
	IT9000021 : { 
		 code : 'IT9000021', 
		 name : 'Calcium', 
		 category : 'Other', 
		 type : 'Item', 
		  price: '3092', 
		  src : 'food_038.png', 
		  exp : '사용시 4턴 동안 마법 공격력을 20% 증가시킨다.', 
	},
	IT9000022 : { 
		 code : 'IT9000022', 
		 name : 'Zinc', 
		 category : 'Other', 
		 type : 'Item', 
		  price: '3092', 
		  src : 'food_038.png', 
		  exp : '사용시 4턴 동안 마법 방어력을 20% 증가시킨다.', 
	},
	IT9000023 : { 
		 code : 'IT9000023', 
		 name : 'Carbos', 
		 category : 'Other', 
		 type : 'Item', 
		  price: '3092', 
		  src : 'food_038.png', 
		  exp : '사용시 4턴 동안 스피드를 20% 증가시킨다.', 
	},
	IT9000024 : { 
		 code : 'IT9000024', 
		 name : 'Tricolor Rice Cake', 
		 category : 'Other', 
		 type : 'Item', 
		  price: '26421', 
		  src : 'food_032b.png', 
		  exp : '사용시 4번의 전투 동안 20% 많은 양의 경험치를 획득한다.', 
	},
	IT9910000: {
	    code: 'IT9910000',
	    name: 'Branch',
	    category: 'Other',
	    type: 'Map',
	    useData: '20001',//지도의 경우 해방되는 아이템.
		price: 100,
	    src: 'MI_item.png',
	    exp: '끝이 꺽여 있는 나뭇가지. 어째선지 가리키고 있는 방향이 있는 것 같다.'

	},
	IT9920000: {
	    code: 'IT9920000',
	    name: 'BrokeBranch',
	    category: 'Other',
	    type: 'Key',
	    useData: '20001',//지도의 경우 해방되는 아이템.
		price: 100,
	    src: 'MI_item.png',
	    exp: '부러진 나뭇가지. 어째선지 가리키고 있는 방향이 있는 것 같다(1 회용).'

	},
	IT9940000: {
	    code: 'IT9940000',
	    name: 'Simple NaviMap',
	    category: 'Other',
	    type: 'Navigate',
	    useData: 'All',//지도의 경우 해방되는 아이템.
		price: 100,
	    src: 'MI_item.png',
	    exp: '기본적인 지도. 지나간 길이 기록된다. 1회용 아이템'

	},
	IT9950000: {
	    code: 'IT9950000',
	    name: 'Rebirth Potion',
	    category: 'Other',
	    type: 'Rebirth',
	    useData: 'Random',//지도의 경우 해방되는 아이템.
	    src: 'item_000.png',
	    exp: '환생시켜주는 물약. 무엇으로 환생할지 알 수 없다. 환생이 가능할 때에도 마실 수 있으니 마셔서 손해 보는 일은 없도록 하자'

	},
	IT9950010: {
	    code: 'IT9950010',
	    name: 'Rebirth Potion(Type Human)',
	    category: 'Other',
	    type: 'Rebirth',
	    useData: '0',
	    src: 'item_000.png',
	    exp: 'Human 속성으로 환생시켜주는 물약. 환생이 가능할 때에도 마실 수 있으니 마셔서 손해 보는 일은 없도록 하자'

	},
	IT9950011: {
	    code: 'IT9950011',
	    name: 'Rebirth Potion(Type Machina)',
	    category: 'Other',
	    type: 'Rebirth',
	    useData: '1',
	    src: 'item_001.png',
	    exp: 'Machina 속성으로 환생시켜주는 물약. 환생이 가능할 때에도 마실 수 있으니 마셔서 손해 보는 일은 없도록 하자'

	},
	IT9950012: {
	    code: 'IT9950012',
	    name: 'Rebirth Potion(Type Ort)',
	    category: 'Other',
	    type: 'Rebirth',
	    useData: '2',
	    src: 'item_002.png',
	    exp: 'Ort 속성으로 환생시켜주는 물약. 환생이 가능할 때에도 마실 수 있으니 마셔서 손해 보는 일은 없도록 하자'

	},
	IT9950013: {
	    code: 'IT9950013',
	    name: 'Rebirth Potion(Type Sprit)',
	    category: 'Other',
	    type: 'Rebirth',
	    useData: '3',
	    src: 'item_003.png',
	    exp: 'Sprit 속성으로 환생시켜주는 물약. 환생이 가능할 때에도 마실 수 있으니 마셔서 손해 보는 일은 없도록 하자'

	},
	IT9950014: {
	    code: 'IT9950014',
	    name: 'Rebirth Potion(Type Beast)',
	    category: 'Other',
	    type: 'Rebirth',
	    useData: '4',
	    src: 'item_004.png',
	    exp: 'Beast 속성으로 환생시켜주는 물약. 환생이 가능할 때에도 마실 수 있으니 마셔서 손해 보는 일은 없도록 하자'

	},
	IT9950015: {
	    code: 'IT9950015',
	    name: 'Rebirth Potion(Type Kernel)',
	    category: 'Other',
	    type: 'Rebirth',
	    useData: '5',
	    src: 'item_005.png',
	    exp: 'Kernel 속성으로 환생시켜주는 물약. 환생이 가능할 때에도 마실 수 있으니 마셔서 손해 보는 일은 없도록 하자'

	},
	IT9950016: {
	    code: 'IT9950016',
	    name: 'Rebirth Potion(Type Dead)',
	    category: 'Other',
	    type: 'Rebirth',
	    useData: '6',
	    src: 'item_006.png',
	    exp: 'Dead 속성으로 환생시켜주는 물약. 환생이 가능할 때에도 마실 수 있으니 마셔서 손해 보는 일은 없도록 하자'

	},
	IT9950017: {
	    code: 'IT9950017',
	    name: 'Rebirth Potion(Type Formless)',
	    category: 'Other',
	    type: 'Rebirth',
	    useData: '7',
	    src: 'item_007.png',
	    exp: 'Formless 속성으로 환생시켜주는 물약. 환생이 가능할 때에도 마실 수 있으니 마셔서 손해 보는 일은 없도록 하자'

	},
	IT9950018: {
	    code: 'IT9950018',
	    name: 'Rebirth Potion(Type Inorganic)',
	    category: 'Other',
	    type: 'Rebirth',
	    useData: '8',
	    src: 'item_008.png',
	    exp: 'Inorganic 속성으로 환생시켜주는 물약. 환생이 가능할 때에도 마실 수 있으니 마셔서 손해 보는 일은 없도록 하자'

	},
	IT9950019: {
	    code: 'IT9950019',
	    name: 'Rebirth Potion(Type Exterior)',
	    category: 'Other',
	    type: 'Rebirth',
	    useData: '9',
	    src: 'item_000.png',
	    exp: 'Exterior 속성으로 환생시켜주는 물약. 환생이 가능할 때에도 마실 수 있으니 마셔서 손해 보는 일은 없도록 하자'

	},
}

