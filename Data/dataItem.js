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
		name : '숏 소드',
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
		exp : '기본적인 검. 품질은 좋지 않다.' 
	},
	IT0000001 : {
		code : 'IT0000001',
		name : '우든 실드',
		category : 'Ammor',
		type : 'Shield',
		spec : {
			option : {
				defPhyPer: 3, defPhyNum: 10
			}
		},
		exp : '나무로 만들어진 조잡한 방패로 별로 몸을 지켜줄 것 같지는 않다.' 
	},
	IT0000002 : {
		code : 'IT0000002',
		name : '우든 헬멧',
		category : 'Head',
		type : 'Helmet',
		spec : {
			option : {
				defPhyPer: 1, defPhyNum: 1
			}
		},
		exp : '나무로 만들어진 조잡한 헬멧.' 
	},
	IT0000003 : {
		code : 'IT0000003',
		name : '우든 아머',
		category : 'Ammor',
		type : 'Ammor',
		spec : {
			option : {
				defPhyPer: 8, defPhyNum: 4
			}
		},
		exp : '나무로 만들어진 조잡한 갑옷. 큰 충격을 받으면 부서진다.' 
	},
	IT0000004 : {
		code : 'IT0000004',
		name : '숏 보우',
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
		exp : '조잡하게 만들어진 활.' 
	},
	IT0000005 : {
		code : 'IT0000005',
		name : '대거',
		category : 'Weapon',
		type : 'Dagger',
		spec : {
			option : {
				atkPhy: 8
			}
		},
		exp : '절삭력이 거의 없는 단검.' 
	},
	IT0000006 : {
		code : 'IT0000006',
		name : '종이 책',
		category : 'Ammor',
		type : 'Book',
		spec : {
			option : {
				defPhyPer: 1, defPhyNum: 2,
				defMagPer: 1, defMagNum: 2
			}
		},
		exp : '알수 없는 문자가 가득 쓰여진 책.' 
	},
	IT0000007 : {
		code : 'IT0000007',
		name : '화살 통',
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
		exp : '30개의 화살이 들어가는 화살 통.' 
	},
	IT0000008 : { 
	 	code : 'IT0000008', 
	 	name : '뼈 투구', 
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
		},
	  	exp : '탑에서 발견된 무기.', 
	},
	 IT0000010 : { 
	 	code : 'IT0000010', 
	 	name : '곰의 바이킹', 
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
	 	exp : '이 아이템은 초록색이다.', 
	},
	 IT0000011 : { 
	 	code : 'IT0000011', 
	 	name : '유령 허리띠', 
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
	  	exp : '유령이 가지고 있던 허리띠지만 저주에 걸리거나 하는 일은 아직까지는 없었다.', 
	},
	IT0000012 : { 
	 	code : 'IT0000012', 
	 	name : '번개고리', 
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
	  	exp : '전기를 내뿜는 개처럼 생긴 짐승의 가죽으로 만들어졌다.', 
	},
	IT0000013 : { 
	 	code : 'IT0000013', 
	 	name : '비단 붕대', 
	 	category : 'Other', 
	 	type : 'Item', 
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
	 	exp : '이것은 버드나무로 제작된 몽둥이가 분명하지만 알수 없는 이유로 절삭력을 가지고 있다.', 
		},
	IT0000015 : { 
		code : 'IT0000015', 
	 	name : '데미지드 참', 
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
		exp : '소지하고 있으면 파티의 공격력을 비롯한 능력을 증가시켜 준다.', 
	},
	IT0000016 : { 
	 	code : 'IT0000016', 
	 	name : '평화제작기', 
		category : 'Item', 
	 	type : 'Item', 
	 	exp : '우리의 소원은 평화. 모든 것의 체력을 전부 회복시켜준다.', 
	},
	IT0000017 : { 
	 	code : 'IT0000017', 
		name : '원숭이의 단검', 
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
	 	exp : '원숭이들의 주술이 가미된 초록색 아이템.', 
		
	},
	IT0000018 : { 
	 	code : 'IT0000018', 
	 	name : '태양만세', 
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
	 	exp : '태양만세.', 
		
	},
	IT0000019 : { 
	 	code : 'IT0000019', 
	 	name : '블랙윙', 
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
		exp : '날개 문양이 세겨진 갑옷.', 
	},
	IT0000020 : { 
	 	code : 'IT0000020', 
	 	name : '전기 톱', 
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
		exp : '전기 톱은 예로부터 널리 알려진 좋은 대화 수단이다.', 
	},
	IT0000021 : { 
		code : 'IT0000021', 
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
		},
	 	exp : '누군가에게 복수할 기회를 노리고 있는 원혼이 들어가 있다. 염원과 한 세트를 이룬다. 파티 내에 각각의 사용자 존재시 명중률을 5% 증가시켜준다', 
	},
	IT0000022 : { 
	 	code : 'IT0000022', 
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
		},
		exp : '누군가에게 복수할 기회를 노리고 있는 원혼이 들어가 있다. 보복과 한 세트를 이룬다. 파티 내에 각각의 사용자 존재시 명중률을 5% 증가시켜준다', ', 
	},
	IT0000023 : { 
	 	code : 'IT0000023', 
	 	name : '공격 타입 변경(M)', 
	 	category : 'Item', 
	 	type : 'Item', 
	 	exp : '노말 타입 데미지를 마법 데미지로 변경시켜 준다.', 
	},
	IT0000024 : { 
	 	code : 'IT0000024', 
	 	name : 'Attack Type Changer(N)', 
	 	category : 'Item', 
	 	type : 'Item', 
	 	exp : '마법 데미지를 노말 타입 데미지로 변경시켜 준다.', 
	},
	IT0000025 : { 
	 	code : 'IT0000025', 
	 	name : '가시 장미 채찍', 
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
		exp : '이 채찍은 날카로운 가시로 뒤덥혀 있다. 일정 적중당한 적을 확률로 출혈 상태로 만든다.', 
	},
	IT0000026 : { 
	 	code : 'IT0000026', 
	 	name : '타란튤라', 
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
		exp : '강력한 독이 깃든 검으로 공격시 일정 확률로 상대방 혹은 자신에게 중독을 부여한다.', 
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
		  exp : '평범한 벌목용 도끼로 마을 사람들에게 구매할 수 있다.', 
	},
	IT0000042 : { 
		  code : 'IT0000042', 
		  name : '황천의 나무꾼 도끼', 
		 category : 'Weapon', 
		 type : 'Axe', 
		 health : {
			Hp : 1244,Sp : 224
		}, 
		 state : {
			str : 48, 	vit : 56
		}, 
		 option : {
			atkPhy : 167, 	atkMag : 25, 	atkPhyTrue : 88, 	atkMagTrue : 10, 	rateHit : 82, 	
			rateHitJust : 67, 	atkRapid : 2.4,		rateCrt : 5, 	valCrt : 157
		}, 
		  exp : '벌목을 하던 나무꾼은 황천까지 다녀왔다고 한다. 황천의 기운을 흡수한 도끼는 마법적 기운을 가지게 되었다. 도끼는 나무꾼에게 살 수 있다.', 
	},
	IT0000043 : { 
		  code : 'IT0000043', 
		  name : '두개골 절단 돌격 도끼', 
		 category : 'Weapon', 
		 type : 'Axe', 
		spec:{
		 health : {
			Hp : 400,Sp : 130
		}, 
		 state : {
			str : 25, 	vit : 44
		}, 
		 option : {
			atkPhy : 132, 	defPhyPer : 40, 	defPhyNum : 22, 	atkPhyTrue : 67, 	rateHit : 91, 	
			rateRes : 4, 	rateCrt : 3, 	valCrt : 167, 	rateHitJust : 87, 	atkRapid : 3.7
		}, 
		},
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
			rateHitJust : 76, 	atkRapid : 1.2
		}, 
		},
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
		  exp : '중독상태 일때 사용하면 공격력이 150% 상승한다.', 
	},
}
