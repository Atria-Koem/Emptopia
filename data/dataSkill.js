const dataSkill = {
	//KA = active , KP = passive + simpleJobCode 0000 + count
	//KPT simpleTribeCode 000 + count
		/*KA000000 : {
		code : 'KA000000',
		name : 'Default',
		rate : 10000// player selected this Skill rate 
		target : ['enemy','individual'], //[ ( self,  friend ,  enemy,  all) , ( individual , multi , all) ]
		specialTarget : {}, // only Jugde Match Target can't Other Target
		priorityTarget : {}, // Jugde Match priority  can Other Target  
		cost : {}, // Null = 0 Cost , hp , mp , sp , count
		delay : {}, // Null = first 0 / last 0  
		healthType : ['Hp'] // Hp or Null = Hp , Sp = Sp , Mp = Mp 
		delayType : 'Charge', // Charge or Cast
		skillType : 'Combat', // Combat or Support
		baseType : [['',value]] // base AtkValue
		power : [['Physical',100]], // power[0] = [Physical(atkPhy) , Magical(atkMag) , Hybrid(atkPhy+atkMag /2) , value] power[1~] = [[elementParents,all element] , value(100 = 1) , calculrateType( 0 = PlusMins 1 = Multiply)]// {value : , target, address, suffix}
		hitCount : 1, // 0 = only Add Effect 1~ = Damage and Recovery
		hitType : 'Just' // just hit
		defenceType : 'Physical', // Physical , Magical , Hybrid  , Ignore if SupportType have This type  Recovery Value down by Defence Value
		invalid : 'None', // have this Type  frontRow can't protect backRow Targetting
		exp : 'BaseSkill', // explanation
		disorder : { name : , value :  , turn : }
		addEffect : {performer{valeu : ,limit} target}, //prefix( Up/Down = Percent Calculrate , Plus/Minus = NumberCalculrate )+ suffix( change Element Target)
		point : learnSkill
		limit : ['None'] // Math Equip Weapon can use
	}*/
	KP000000 :{
		code : 'KP000000',
		name : 'Test',
		passiveEffect : {
			first : {
				origin : {
					PlusMaxHp : {value : 10},			PlusMaxSp : {value : 10},			PlusMaxMp : {value : 10}, PlusStr : {value : 10}
				}
			}
		},
		point : 0
	},
	KPT00000 :{
		code : 'KPT00000',
		name : 'TribePassive Type0',
		passiveEffect : {
			first : {
				origin : {
					PlusMaxHp : {value : 10},			PlusMaxSp : {value : 10},			PlusMaxMp : {value : 10}, PlusStr : {value : 10}
				}
			}
		},
		point : 0
	},
	KPT10000 :{
		code : 'KPT10000',
		name : 'OverHeat',
		passiveEffect : {
			first : {
				origin : {
					DownMaxHp : {value : 20}, PlusSpd : { value : 5}
				}
			}
		},
		point : 0,
		exp : 'MaxHp - 20%, Spd + 5'
	},
	KPT10001 :{
		code : 'KPT10001',
		name : 'OverCharge',
		passiveEffect : {
			first : {
				origin : {
					MinusSpEfficient : { value : 50 }
				}
			}
		},
		point : 0,
		exp : 'Stamina Cost + 50%'
	},
	KPT20001 :{
		code : 'KPT80001',
		name : 'MineralsBody',
		passiveEffect : {
			first : {
				origin : {
					MinusDefPhyPer : {value : 15}
				}
			}
		},
		point : 0,
		exp : 'PhysicalDefence (-15 + 0)'
	},
	KPT30000 :{
		code : 'KPT30000',
		name : 'TribePassive Type3',
		passiveEffect : {
			first : {
				origin : {
					PlusMaxHp : {value : 10},			PlusMaxSp : {value : 10},			PlusMaxMp : {value : 10}, PlusStr : {value : 10}
				}
			}
		},
		point : 0
	},
	KPT40000 :{
		code : 'KPT40000',
		name : 'TribePassive Type4',
		passiveEffect : {
			first : {
				origin : {
					PlusMaxHp : {value : 10},			PlusMaxSp : {value : 10},			PlusMaxMp : {value : 10}, PlusStr : {value : 10}
				}
			}
		},
		point : 0
	},
	KPT50000 :{
		code : 'KPT50000',
		name : 'TribePassive Type5',
		passiveEffect : {
			first : {
				origin : {
					PlusMaxHp : {value : 10},			PlusMaxSp : {value : 10},			PlusMaxMp : {value : 10}, PlusStr : {value : 10}
				}
			}
		},
		point : 0
	},
	KPT60000 :{
		code : 'KPT60000',
		name : 'TribePassive Type6',
		passiveEffect : {
			first : {
				origin : {
					PlusMaxHp : {value : 10},			PlusMaxSp : {value : 10},			PlusMaxMp : {value : 10}, PlusStr : {value : 10}
				}
			}
		},
		point : 0
	},
	KPT70000 :{
		code : 'KPT70000',
		name : 'TribePassive Type7',
		passiveEffect : {
			first : {
				origin : {
					PlusMaxHp : {value : 10},			PlusMaxSp : {value : 10},			PlusMaxMp : {value : 10}, PlusStr : {value : 10}
				}
			}
		},
		point : 0
	},
	KPT80000 :{
		code : 'KPT80000',
		name : 'TribePassive Type8',
		passiveEffect : {
			first : {
				origin : {
					PlusMaxHp : {value : 10},			PlusMaxSp : {value : 10},			PlusMaxMp : {value : 10}, PlusStr : {value : 10}
				}
			}
		},
		point : 0
	},
	KPT90000 :{
		code : 'KPT90000',
		name : 'The denial of the world - 1',
		passiveEffect : {
			last : {
				battle : {
					DownStr : {value : 10},	DownInt : {value : 10},	DownDex : {value : 10},	DownDis : {value : 10},	DownSpd : {value : 10},
					DownVit : {value : 10},	DownWis : {value : 10},	DownAgi : {value : 10},	DownRes : {value : 10},	DownLuk : {value : 10},
				}
			}
		},
		point : 0,
		exp : 'All State -10%'
	},
	KPT90001 :{
		code : 'KPT90001',
		name : 'The denial of the world - 2',
		passiveEffect : {
			last : {
				battle : {
					DownMaxHp : {value : 30},	DownMaxSp : {value : 30},	DownMaxMp : {value : 30}
				}
			}
		},
		point : 0,
		exp : 'Hp,Sp,Mp -30%'
	},
	KPT90002 :{
		code : 'KPT90002',
		name : 'The denial of the world - 3',
		passiveEffect : {
			last : {
				battle : {
					MinusHpEfficient : {value : 30},	MinusSpEfficient : {value : 30},	MinusMpEfficient : {value : 30}
				}
			}
		},
		point : 0,
		exp : 'Hp,Sp,Mp -30%'
	},
	KA000000 : {
		code : 'KA000000',
		name : 'Stay',
		target : ['self','individual'],
		cost : {},
		delay : {},
		point : -10,
		exp : 'Stay',
	},
	KA100000 : {
		code : 'KA100000',
		name : 'Attack',
		target : ['enemy','individual'],
		cost : {},
		delay : {},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : { base : { type : 'Physical', value : 100 } },
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'BaseSkill',
	},
		KA100001 : {
		code : 'KA100001',
		name : 'Double Hit',
		target : ['enemy','individual'],
		cost : {sp : 6},
		delay : {},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : { base : { type : 'Physical', value : 90 } },
		hitCount : 2,
		point : 2,
		defenceType : 'Physical',
	},
	KA100002 : {
		code : 'KA100002',
		name : 'Bash',
		target : ['enemy','individual'],
		cost : {sp : 5},
		delay : {first : 20,last : 20},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : { base : { type : 'Physical', value : 140 } },
		hitCount : 1,
		point : 5,
		defenceType : 'Physical',
	},
	KA100003 : {
		code : 'KA100003',
		name : 'KnockBack',
		target : ['enemy','individual'],
		cost : {sp : 10, pSp : 3},
		delay : {first : 40,last : 20},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : { base : { type : 'Physical', value : 150 } },
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'Target Back Position',
		addEffect : {target : { ChangeCoordinates : {value : 'Back'}}}
	}	,
	KA100004 : {
		code : 'KA100004',
		name : 'PokeDraw',
		target : ['enemy','individual'],
		cost : {sp : 10, pSp : 3},
		delay : {first : 40,last : 20},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : { base : { type : 'Physical', value : 150 } },
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'Target Front Position',
		addEffect : {target : { ChangeCoordinates : {value : 'Front'}}}
	},
	KA100005 : {
		code : 'KA100005',
		name : 'FirstAid',
		target : ['self','individual'],
		cost : {pSp : 1},
		delay : {},
		delayType : 'Charge',
		skillType : 'Support', 
		power : { base : { type : 'Physical', value : 0 }, 1 : {target : 'target', address : ['health','lNHp'],value : 30 , suffix : 'Plus' } },
		hitCount : 1,
		exp : 'Recovary Lost Hp 30%',
	},
	KA100006 : {
		code : 'KA100006',
		name : 'Slash',
		target : ['enemy','individual'],
		cost : {sp : 5},
		delay : {first : 10,last : 40},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : { base : { type : 'Physical', value : 140 } },
		hitCount : 2,
		point : 3,
		defenceType : 'Physical',
		disorder : { bleeding : {name : 'bleeding',value : 10, turn : 2}}
	},
	KA110000 : {
		code : 'KA110000',
		name : 'AddStrength',
		target : ['self','individual'],
		cost : {sp : 5},
		delay : {first : 10,last : 30},
		delayType : 'Charge',
		skillType : 'Support', 
		hitCount : 1,
		defenceType : 'Physical',
		addEffect : {performer : { PlusStr : {value : 10}}}
	},
	KA120000 : {
		code : 'KA120000',
		name : 'SoulBreak',
		target : ['enemy','individual'],
		cost : {sp : 8, mp : 8},
		delay : {first : 20,last : 20},
		delayType : 'Charge',
		skillType : 'Combat', 
		healthType : ['hp','mp'],
		power : { base : { type : 'Hybrid', value : 110 } },
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'HP + SP Damage'
	},
	KA130000 : {
		code : 'KA130000',
		name : 'ExtendHp',
		target : ['self','individual'],
		cost : {pSp : 10},
		delay : {first : 100,last : 20},
		delayType : 'Charge',
		skillType : 'Support', 
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'BaseSkill',
		addEffect : {performer : { UpMaxHp : {value : 10}}}
	},
	KA140000 : {
		code : 'KA140000',
		name : 'Rush',
		target : ['enemy','multi'],
		cost : {pHp : 15, sp : 2},
		delay : {},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : { base : { type : 'Physical', value : 140 } },
		hitCount : 4,
		defenceType : 'Physical',
		exp : 'BaseSkill',
	},
	KA200000 : {
		code : 'KA200000',
		name : 'FireBall',
		target : ['enemy','individual'],
		cost : {mp : 7},
		delay : {first : 60},
		delayType : 'Casting',
		skillType : 'Combat', 
		power : { base : { type : 'Magical', value : 150 } },
		hitCount : 4,
		defenceType : 'Magical',
		invalid : 'None',
		exp : 'BaseSkill',
	},
	KA200001 : {
		code : 'KA200001',
		name : 'ManaRecovary',
		target : ['self','individual'],
		cost : {},
		delay : {},
		skillType : 'Support', 
		healthType : ['mp'],
		power : { base : { type : 'Magical', value : 0 }, 1 : {target : 'target' , address : ['health','mMp'],value : 30 , suffix : 'Plus'} },
		hitCount : 1,
		exp : '30% recovary',
	},
	KA200002 : {
		code : 'KA200002',
		name : 'Flash',
		target : ['enemy','all'],
		cost : {mp : 10},
		delay : {first : 30,last : 50},
		delayType : 'Casting',
		skillType : 'Combat', 
		power : { base : { type : 'Magical', value : 10 }},
		hitCount : 1,
		defenceType : 'Magical',
		invalid :'invalid',
		addEffect : {target : { MinusDealy : {value : 20}}},
	},
	KA210000 : {
		code : 'KA210000',
		name : 'Earth',
		target : ['enemy','all'],
		cost : {mp : 50},
		delay : {first : 100,last : 250},
		delayType : 'Casting',
		skillType : 'Combat', 
		power : { base : { type : 'Magical', value : 150 }},
		hitCount : 3,
		defenceType : 'Magical',
		invalid : 'None',
		
	},
	KA240000 : {
		code : 'KA240000',
		name : 'MindCrush',
		target : ['enemy','multi'],
		cost : {mp : 30},
		delay : {first : 50,last : 250},
		delayType : 'Casting',
		skillType : 'Combat', 
		power : { base : { type : 'Magical', value : 110 }},
		hitCount : 5,
		defenceType : 'Magical',
		invalid :'invalid',
		disorder : { spilled : {name : 'spilled',value : 90, turn : 3}}
	},
	KA300000 : {
		code : 'KA300000',
		name : 'Heal',
		target : ['friend','individual'],
		priorityTarget : {name : 'LowestHp'},
		cost : {mp : 3},
		delay : {},
		skillType : 'Support', 
		power : { base : { type : 'Magical', value : 110 }},
		hitCount : 1,
	},
	KA300001 : {
		code : 'KA300001',
		name : 'Pray',
		target : ['friend','all'],
		cost : {mp : 10},
		delay : {first : 50,last : 50},
		skillType : 'Support', 
		healthType : ['mp'] ,
		power : { base : { type : 'Magical', value : 0 }, 1 : {target : 'target', address : ['health','mSp'], value : 30, suffix : 'Plus'}},
		hitCount : 1,
	},
	KA300002 : {
		code : 'KA300002',
		name : 'QuickHeal',
		target : ['friend','multi'],
		priorityTarget : {name : 'LowestHp'},
		cost : {mp : 5},
		delayType : 'Casting',
		delay : {first : 10,last : -30},
		skillType : 'Support', 
		power : { base : { type : 'Magical', value : 40 }},
		hitCount : 3,
		exp : 'BaseSkill',
	},
	KA300099 : {
		code : 'KA300099',
		name : 'Revival',
		target : ['friend','individual'],
		specialTarget : { name : 'Death'},
		cost : {mp : 30},
		delay : {first : 100,last : 50},
		delayType : 'Casting',
		skillType : 'Support', 
		power : { base : { type : 'Magical', value : 250 }},
		hitCount : 1,
		exp : 'BaseSkill',
		addEffect : {target : { ChangeStatus : {value : 'Live'}}},
	},
	KA330000 : {
		code : 'KA330000',
		name : 'HpRegenaration',
		target : ['friend','all'],
		cost : {mp : 10},
		delay : {first : 50,last : 150},
		delayType : 'Casting',
		skillType : 'Support', 
		hitCount : 1,
		exp : 'BaseSkill',
		addEffect : {target : { PlusregenHp : {value : 0.5}}},
	},
	KA330001 : {
		code : 'KA330001',
		name : 'ManaRegenaration',
		target : ['friend','all'],
		cost : {mp : 10},
		delay : {first : 50,last : 150},
		delayType : 'Casting',
		skillType : 'Support', 
		hitCount : 1,
		exp : 'BaseSkill',
		addEffect : {target : { PlusregenMp : {value : 0.5}}},
	},
	KA330002 : {
		code : 'KA330002',
		name : 'StaminaRegenaration',
		target : ['friend','all'],
		cost : {mp : 10},
		delay : {first : 50,last : 150},
		delayType : 'Casting',
		skillType : 'Support', 
		hitCount : 1,
		exp : 'BaseSkill',
		addEffect : {target : { PlusregenSp : {value : 0.5}}},
	},
	KA400000 : {
		code : 'KA400000',
		name : 'Shot',
		target : ['enemy','individual'],
		cost : {count : 1},
		delay : {},
		delayType : 'Charge',
		skillType : 'Combat', 
		baseType : [['dex',100]],
		power : { base : { type : 'Physical', value : 100 } },
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'BaseSkill',
		limit : ['Bow']
	},
	KA400001 : {
		code : 'KA400001',
		name : 'Triple Shot',
		target : ['enemy','multi'],
		cost : {sp : 2, pSp : 1,count : 3},
		delay : {first : 10},
		delayType : 'Charge',
		skillType : 'Combat', 
		baseType : [['dex',100]],
		power : { base : { type : 'Physical', value : 80 } },
		hitCount : 3,
		defenceType : 'Physical',
		exp : 'BaseSkill',
		limit : ['Bow']
	},
	KA400002 : {
		code : 'KA400002',
		name : 'ArrowReload',
		target : ['self','individual'],
		cost : {},
		delay : {first : 30},
		delayType : 'Charge',
		skillType : 'Support', 
		hitCount : 1,
		exp : 'ArrowReload',
		addEffect : {target : { PlusCount : {value : 100}}},
		limit : ['ArrowCase']
	},
	KA400003 : {
		code : 'KA400003',
		name : 'ArrowQuickReload',
		target : ['self','individual'],
		cost : {},
		delay : {first : 10,last : -15},
		delayType : 'Charge',
		skillType : 'Support', 
		hitCount : 1,
		exp : 'ArrowReload',
		addEffect : {target : { PlusCount : {value : 1}}},
		limit : ['ArrowCase']
	},
	KA401000 : {
		code : 'KA401000',
		name : 'Step',
		target : ['enemy','individual'],
		cost : {},
		delay : {last : -20},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : { base : { type : 'Physical', value : 110 } },
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'BaseSkill',
		limit : ['Dagger']
	},
	KA404000 : {
		code : 'KA404000',
		name : 'Poision',
		target : ['enemy','individual'],
		cost : {sp : 2, mp : 2},
		delay : {first : 60,last : 10},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : { base : { type : 'Physical', value : 30 } },
		hitCount : 3,
		defenceType : 'Physical',
		exp : 'BaseSkill',
		disorder : { poision : {name : 'poision',value : 10, turn : 10}}
	},
	KA404001 : {
		code : 'KA404001',
		name : 'ThrowPoision',
		target : ['enemy','all'],
		cost : {sp : 5, mp : 15},
		delay : {first : 100,last : 10},
		delayType : 'Charge',
		skillType : 'Combat', 
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'BaseSkill',
		invalid :'invalid',
		disorder : { poision : {name : 'poision',value : 30, turn : 5}}
	},
	KA404002 : {
		code : 'KA404002',
		name : 'ParalyzedGas',
		target : ['enemy','all'],
		cost : {sp : 5, mp : 15},
		delay : {first : 100,last : 10},
		delayType : 'Charge',
		skillType : 'Combat', 
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'BaseSkill',
		invalid :'invalid',
		disorder : { paralyzed : {name : 'paralyzed',value : 0, turn : 2}}
	},
	KA404003 : {
		code : 'KA404003',
		name : 'Debilitation',
		target : ['enemy','all'],
		cost : { mp : 25},
		delay : {first : 100,last : 10},
		delayType : 'Charge',
		skillType : 'Combat', 
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'BaseSkill',
		invalid :'invalid',
		disorder : { weakness : {name : 'weakness',value : 20, turn : 3}}
	},
	KA210001 : {

	    code : 'KA210001',

	    name : 'Surf',

	    target : ['enemy','all'],

	    cost : {mp : 90},

	    delay : {first : 80,last : 250},

	    delayType : 'Casting',

	    skillType : 'Combat', 

	    power : { base : { type : 'Magical', value : 180 }},

	    hitCount : 3,

	    defenceType : 'Magical',

	    invalid : 'None',

		

	},
	KA210002 : {

	    code : 'KA210002',

	    name : 'Blizzard',

	    target : ['enemy','all'],

	    cost : {mp : 110},

	    delay : {first : 100,last : 300},

	    delayType : 'Casting',

	    skillType : 'Combat', 

	    power : { base : { type : 'Magical', value : 150 }},

	    hitCount : 5,

	    defenceType : 'Magical',

	    invalid : 'None',



	},
	KA210003 : {

	    code : 'KA210003',

	    name : 'Bubble',

	    target : ['enemy','individual'],

	    cost : {mp : 30},

	    delay : {first : 20,last : 70},

	    delayType : 'Casting',

	    skillType : 'Combat', 

	    power : { base : { type : 'Magical', value : 60 }},

	    hitCount : 1,

	    defenceType : 'Magical',

	    invalid : 'None',



	},
	KA280000 : {

	    code : 'KA280000',

	    name : 'FocusBlast',

	    target : ['enemy','individual'],

	    cost : {mp : 80},

	    delay : {first : 20,last : 270},

	    delayType : 'Casting',

	    skillType : 'Combat', 

	    power : { base : { type : 'Physical', value : 180 }},

	    hitCount : 1,

	    defenceType : 'Physical',

	    invalid : 'None',



	},
	KA280001 : {

	    code : 'KA280001',

	    name : 'Waterfall',

	    target : ['enemy','individual'],

	    cost : {sp: 20, mp : 50},

	    delay : {first : 20,last : 270},

	    delayType : 'Charge',

	    skillType : 'Combat', 

	    power : { base : { type : 'Physical', value : 130 }},

	    hitCount : 1,

	    defenceType : 'Physical',

	    invalid : 'None',



	},
	KA100006 : {

	    code : 'KA100006',

	    name : 'BrickBreak',

	    target : ['enemy','individual'],

	    cost : {sp : 12},

	    delay : {first : 30,last : 20},

	    delayType : 'Charge',

	    skillType : 'Combat', 

	    power : { base : { type : 'Physical', value : 160 } },

	    hitCount : 1,

	    defenceType : 'Physical',

	},
	KA100007 : {

	    code : 'KA100007',

	    name : 'Facade',

	    target : ['enemy','individual'],

	    cost : {sp : 5},

	    delay : {first : 10,last : 12},

	    delayType : 'Charge',

	    skillType : 'Combat', 

	    power : { base : { type : 'Physical', value : 60 } },

	    hitCount : 3,

	    defenceType : 'Physical',

	},
	KA100008 : {

	    code : 'KA100008',

	    name : 'X-Scissor',

	    target : ['enemy','individual'],

	    cost : {sp : 15},

	    delay : {first : 20,last : 50},

	    delayType : 'Charge',

	    skillType : 'Combat', 

	    power : { base : { type : 'Physical', value : 220 } },

	    hitCount : 1,

	    defenceType : 'Physical',

	},
	KA100009 : {

	    code : 'KA100009',

	    name : 'BrutalSwing',

	    target : ['enemy','all'],

	    cost : {sp : 14},

	    delay : {first : 50,last : 70},

	    delayType : 'Charge',

	    skillType : 'Combat', 

	    power : { base : { type : 'Physical', value : 140 } },

	    hitCount : 1,

	    defenceType : 'Physical',

	},
	KA300003 : {

	    code : 'KA300003',

	    name : 'Shield',

	    target : ['friend','individual'],

	    priorityTarget : {name : 'LowestHp'},

	    cost : {mp : 7},

	    delayType : 'Casting',

	    delay : {first : 10,last : 30},

	    skillType : 'Support', 

	    power : { base : { type : 'Magical', value : 110 }},

	    hitCount : 1,

	},
	KA999900 : {
		code : 'KA999900',
		name : 'paralyzed',
		target : ['self','individual'],
		cost : {},
		delayType : 'Charge',
		delay : {fisrt : 0, last : 200},
		point : -10,
		exp : 'paralyzed',
	}
}
