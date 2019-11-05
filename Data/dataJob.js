const  dataJob = {
	J00000000 : {
		code : 'J00000000',
		name : 'Novice',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 100,				spd: 100,
			vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 100
		},
		limit : []
	},
	J10000000 : {
		code : 'J10000000',
		name : 'Warrior',
		state : {
			str: 101,				int: 100,				dex: 100,				dis : 100,				spd: 100,
			vit: 101,				wis: 100,				agi: 100,				res : 100,				luk: 100
		},
		limit : []
	},
	J20000000 : {
		code : 'J20000000',
		name : 'Sorcerer',
		state : {
			str: 100,				int: 101,				dex: 100,				dis : 100,				spd: 100,
			vit: 100,				wis: 101,				agi: 100,				res : 100,				luk: 100
		},
		limit : ['Bow']
	},
	J30000000 : {
		code : 'J30000000',
		name : 'Priest',
		state : {
			str: 100,				int: 101,				dex: 100,				dis : 100,				spd: 100,
			vit: 100,				wis: 100,				agi: 100,				res : 101,				luk: 100
		},
		limit : []
	},
	J40000000 : {
		code : 'J40000000',
		name : 'Hunter',
		state : {
			str: 100,				int: 100,				dex: 101,				dis : 100,				spd: 100,
			vit: 100,				wis: 100,				agi: 101,				res : 100,				luk: 100
		},
		limit : []
	},
	J41000000 : {
		code : 'J41000000',
		name : 'Rogue',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 100,				spd: 105,
			vit: 100,				wis: 100,				agi: 103,				res : 100,				luk: 100
		},
		limit : []
	},
	J50000000 : { 
	  code : 'J50000000', 
	  name : 'Mercenary', 
	 state : {
 		str : 100, 	vit : 102, 	int : 100, 	wis : 100, 	dex : 100, 	
 		agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
	  limit : [], 
	  exp : '누구든 용병이 될 수 있다.' 
	},
	J42000000 : { 
	  code : 'J42000000', 
	  name : 'Gunlancer', 
	 state : {
 		str : 100, 	vit : 101, 	int : 100, 	wis : 100, 	dex : 101, 	
 		agi : 101, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
	}, 
	  limit : ['Sword', 'TwoHandSword', 'Dagger', 'Hatchet', 'Axe', 'Mace', 'Wand', 'Staff', 'Bow', 'Whip', 'MainGauche', 'BowGun', 'Shield', 'Book', 'ArrowCase', 'Ammor', 'Robe', 'Helmet', 'Circlet'], 
	  exp : '오로지 총과 창만을 사용할 수 있다.' 
	},
	J21000000 : { 
		  code : 'J21000000', 
		  name : 'Warlock', 
		 state : {
			str : 100, 	vit : 100, 	int : 102, 	wis : 101, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		  limit : ['Sword', 'TwoHandSword', 'Axe', 'Bow', 'SubSword', 'SubPike', 'BowGun', 'Shield', 'ArrowCase'], 
		  exp : '공격적인 마법을 주로 사용하는 마법사.' 
	},
	J22000000 : { 
		  code : 'J22000000', 
		  name : 'Wizard', 
		 state : {
			str : 100, 	vit : 100, 	int : 100, 	wis : 103, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		  limit : ['Sword', 'TwoHandSword', 'Axe', 'Bow', 'SubSword', 'SubPike', 'BowGun', 'Shield', 'ArrowCase'], 
		  exp : '보조 마법을 통하여 전투에 도움을 준다.' 
	},
	J23000000 : { 
		  code : 'J23000000', 
		  name : 'Mage', 
		 state : {
			str : 100, 	vit : 100, 	int : 101, 	wis : 102, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		  limit : ['Sword', 'TwoHandSword', 'Axe', 'Bow', 'SubSword', 'SubPike', 'BowGun', 'Shield', 'ArrowCase'], 
		  exp : '그들은 주로 점성술을 통하여 파티의 운세를 점치곤한다.' 
	},
	J24000000 : { 
		  code : 'J24000000', 
		  name : 'Illusionist', 
		 state : {
			str : 100, 	vit : 100, 	int : 101, 	wis : 100, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 102
		}, 
		  limit : ['Sword', 'TwoHandSword', 'Axe', 'Bow', 'SubSword', 'SubPike', 'BowGun', 'Shield', 'ArrowCase'], 
		  exp : '전투에 큰 도움이 되지는 않지만 눈속임을 통하여 적을 혼란스럽게 만든다.' 
	},
	J25000000 : { 
		  code : 'J25000000', 
		  name : 'Theurgist', 
		 state : {
			str : 100, 	vit : 100, 	int : 103, 	wis : 100, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		  limit : ['Sword', 'TwoHandSword', 'Axe', 'Bow', 'SubSword', 'SubPike', 'BowGun', 'Shield', 'ArrowCase'], 
		  exp : '사제 처럼 신의 힘을 빌리지만 사제와 달리 치유마법을 사용하지 못하며 공격적인 마법을 사용한다.' 
	},
	J26000000 : { 
		  code : 'J26000000', 
		  name : 'Enchanter', 
		 state : {
			str : 100, 	vit : 100, 	int : 100, 	wis : 100, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 103
		}, 
		  limit : [], 
		  exp : '전투 시 무기에 일시적으로 속성부여를 하거나 비전투 시 영구적으로 무기에 속성을 부여한다.' 
	},
	J27000000 : { 
		  code : 'J27000000', 
		  name : 'Conjurer', 
		 state : {
			str : 100, 	vit : 102, 	int : 101, 	wis : 100, 	dex : 100, 	
			agi : 100, 	dis : 100, 	res : 100, 	spd : 100, 	luk : 100
		}, 
		  limit : ['Pistol', 'Gun', 'Bow', 'SubPistol', 'BowGun', 'ArrowCase'], 
		  exp : '우상 숭배를 통하여 전위에 서는 마법사.' 
	},
}
