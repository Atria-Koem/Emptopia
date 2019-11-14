 const dataMonster = {
    M10000000: {
        name: 'Goblin',
      health:{
        hp : 4, sp: 6, mp : 1
      },
			state: {
				str: 5,				int: 5,				dex: 5,				dis : 5,				spd: 5,
        vit: 5,				wis: 5,				agi: 5,				res : 5,				luk: 5
        },
			colorType : 'hsv',
			color : {
          hue  : 50, saturation : 80 , value  : 50
        },
			coordinates : 0,
			protectType : ['None',0],
		exp: {
			str: 5,				int: 5,				dex: 5,				dis : 5,				spd: 5,
			vit: 5,				wis: 5,				agi: 5,				res : 5,				luk: 5
		},
		funds : 10,
        job: 'J00000000',
        tribe: 'T04',
        dropTable: [[3000000 , 'IT0000007' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],
        parttern: [['OTRAND0',50,'ADDJUDGE'],['NS00100',10,'KA100001'],['OT00000',0,'KA100000']]
    },
	M10000001: {
        name: 'GoblinAxe',
      health:{
        hp : 5, sp: 10, mp : 10
      },
			state: {
				str: 15,				int: 5,				dex: 5,				dis : 5,				spd: 8,
        vit: 10,				wis: 5,				agi: 5,				res : 5,				luk: 5
        },
			colorType : 'hsv',
			color : {
          hue  : 50, saturation : 80 , value  : 50
        },
			coordinates : 'Front',
			protectType : ['None',0],
		exp: {str : 30, dex : 10},
		funds : 10,
        job: 'J00000000',
        tribe: 'T04',
        dropTable: [[3000000 , 'IT0000007' ],[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],
        parttern: [['OTCOUNT',3,'KA110000'],['OTRAND0',80,'ADDJUDGE'],['NS00100',10,'KA100002'],['OT00000',0,'KA100000']]
    },
	M10000002: {
		name: 'GoblinMonk',
		health:{
			hp : 13, sp: 11, mp : 5
		},
		state: {
			str: 8,				int: 5,				dex: 8,				dis : 5,				spd: 20,
			vit: 18,				wis: 6,				agi: 18,				res : 5,				luk: 5
		},
		colorType : 'hsv',
		color : {
			hue  : 50, saturation : 80 , value  : 50
		},
		coordinates : 'Front',
		protectType : ['Always',0],
		option : { regenHp : 1},
		exp: {vit : 30, agi : 10},
		funds : 10,
        job: 'J00000000',
        tribe: 'T04',
        dropTable: [[3000000 , 'IT0000007' ],[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],
        parttern: [['MH00200',100,'ADDJUDGE'],['NS00100',10,'KA130000'],['OTRAND0',50,'ADDJUDGE'],['NM00100',10,'KA330002'],['NS00100',10,'KA100001'],['OT00000',0,'KA100000']]
    },
	M10000003: {
		name: 'GoblinCardinal',
		health:{
			hp : 6, sp: 10, mp : 20
		},
		state: {
			str: 8,				int: 25,				dex: 4,				dis : 5,				spd: 15,
			vit: 5,				wis: 12,				agi: 4,				res : 5,				luk: 10
		},
		colorType : 'hsv',
		color : {
			hue  : 50, saturation : 80 , value  : 50
		},
		coordinates : 'Back',
		protectType : ['None',0],
		exp: {wis : 30 , res : 10},
		funds : 10,
		job: 'J00000000',
		tribe: 'T04',
		dropTable: [[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],
		parttern: [['DE10100',2,'ADDJUDGE'],['NM00100',30,'KA300099'],['OTRAND0',10,'ADDJUDGE'],['NM00100',10,'KA330001'],['OTRAND0',10,'ADDJUDGE'],['NM00100',10,'KA330002'],['OTRAND0',10,'ADDJUDGE'],['NM00100',10,'KA330000'],['OT00000',0,'KA300000']]
    },
	M10000004: {
		name: 'GoblinMagician',
		health:{
			hp : 4, sp: 2, mp : 23
		},
		state: {
			str: 8,				int: 50,				dex: 4,				dis : 5,				spd: 15,
			vit: 5,				wis: 40,				agi: 4,				res : 5,				luk: 10
		},
		colorType : 'hsv',
		color : {
			hue  : 50, saturation : 80 , value  : 50
		},
		coordinates : 'Back',
		protectType : ['None',0],
		exp: {int : 30, wis : 10},
		funds : 10,
		job: 'J00000000',
		tribe: 'T04',
		dropTable: [[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],
		parttern: [['NM00200',15,'KA200001'],['NM00100',50,'KA210000'],['OT00000',0,'KA200000']]
    },
	M10000005: {
		name: 'GoblinRouge',
		health:{
			hp : 6, sp: 10, mp : 10
		},
		state: {
			str: 8,				int: 10,				dex: 20,				dis : 100,				spd: 35,
			vit: 5,				wis: 10,				agi: 20,				res : 5,				luk: 10
		},
		colorType : 'hsv',
		color : {
			hue  : 50, saturation : 80 , value  : 50
		},
		coordinates : 'Back',
		protectType : ['None',0],
		exp: {agi : 30, res : 10},
		funds : 10,
		job: 'J00000000',
		tribe: 'T04',
		dropTable: [[3000000 , 'IT0000007' ],[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],
		parttern: [['NM00100',50,'KA404000'],['OT00000',0,'KA401000']]
    },
	M10000006: {
		name: 'Exp',
		health:{
			hp : 1, sp: 1, mp : 1
		},
		state: {
			str: 1,				int: 1,				dex: 1,				dis : 1,				spd: 1,
			vit: 1,				wis: 1,				agi: 1,				res : 1,				luk: 1
		},
		colorType : 'hsv',
		color : {
			hue  : 50, saturation : 80 , value  : 50
		},
		option : { resPhyPer : 1000, resMagPer : 1000,resPhyNum : 10000, resMagNum : 10000, defPhyPer : 1000, defMagPer : 1000,defPhyNum : 10000, defMagNum : 10000,},
		coordinates : 0,
		protectType : ['None',0],
		exp: {
			str: 100,				int: 100,				dex: 100,				dis : 100,				spd: 100,
			vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 100
		},
		funds : 10,
		job: 'J00000000',
		tribe: 'T04',
		dropTable: [[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],
		parttern: [['OT00000',0,'KA000000']]
    },
	 M10000007: {
		name: 'GoblinArcher',
	      health:{
		hp : 3, sp: 12, mp : 10
	      },
				state: {
					str: 7,				int: 5,				dex: 13,				dis : 5,				spd: 8,
		vit: 10,				wis: 5,				agi: 5,				res : 5,				luk: 5
		},
				colorType : 'hsv',
				color : {
		  hue  : 50, saturation : 80 , value  : 50
		},
				coordinates : 'Back',
				protectType : ['None',0],
			exp: {str : 30, dex : 10},
			funds : 10,
		job: 'J43000000',
		tribe: 'T04',
		dropTable: [[3000000 , 'IT0000007' ],[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],
		parttern: [['OTRAND0',40,'KA400001'],['NH00010',60,'KA200002'],['NS00010',30,'KA400001'],['OT00000',0,'KA100000']]
	    },
	M10000008: {
		name: 'GoblinDancer',
	      health:{
		hp : 3, sp: 10, mp : 12
	      },
				state: {
					str: 5,				int: 7,				dex: 13,				dis : 5,				spd: 8,
		vit: 10,				wis: 5,				agi: 5,				res : 5,				luk: 5
		},
				colorType : 'hsv',
				color : {
		  hue  : 50, saturation : 80 , value  : 50
		},
				coordinates : 'Back',
				protectType : ['None',0],
			exp: {str : 30, dex : 10},
			funds : 10,
		job: 'J60000000',
		tribe: 'T04',
		dropTable: [[3000000 , 'IT0000007' ],[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],
		parttern: [['NM00010',100,'KA404002'],['NH00010',60,'KA404001'],['DE10100',2,'KA300000'],['NS00010',20,'KA330002'],['OT00000',0,'KA100000']]
	    },
	 M10000009: {

		name: 'GoblinConjurer',

	      health:{

		hp : 12, sp: 8, mp : 5

	      },

				state: {

					str: 5,				int: 8,				dex: 7,				dis : 5,				spd: 8,

		vit: 15,				wis: 5,				agi: 5,				res : 5,				luk: 5

		},

				colorType : 'hsv',

				color : {

		  hue  : 50, saturation : 80 , value  : 50

		},

				coordinates : 'Front',

				protectType : ['None',0],

			exp: {str : 30, dex : 10},

			funds : 10,

		job: 'J27000000',

		tribe: 'T04',

		dropTable: [[3000000 , 'IT0000007' ],[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],

		parttern: [['NH00210',40,'KA300000'],['NH00110',80,'KA100001'],['NS00200',4,'KA330002'],['NH00210',20,'KA200002'],['OT00000',0,'KA100000']]

	    },
	M10000010: {

			name: 'GoblinBerserker',

		      health:{

			hp : 12, sp: 13, mp : 0

		      },

					state: {

						str: 13,				int: 0,				dex: 7,				dis : 5,				spd: 8,

			vit: 15,				wis: 5,				agi: 5,				res : 5,				luk: 5

			},

					colorType : 'hsv',

					color : {

			  hue  : 50, saturation : 80 , value  : 50

			},

					coordinates : 'Front',

					protectType : ['None',0],

				exp: {str : 30, dex : 10},

				funds : 10,

			job: 'J11000000',

			tribe: 'T04',

			dropTable: [[3000000 , 'IT0000007' ],[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],

			parttern: [['NH00210',40,'KA100002'],['NH00110',80,'KA100001'],['NS00200',4,'KA330002'],['OT00000',0,'KA110000']]

		    },
	M10000011: {

			name: 'GoblinKnight',

		      health:{

			hp : 75, sp: 53, mp : 40

		      },

					state: {

						str: 28,				int: 16,				dex: 19,				dis : 5,				spd: 18,

			vit: 25,				wis: 5,				agi: 5,				res : 5,				luk: 5

			},

					colorType : 'hsv',

					color : {

			  hue  : 50, saturation : 80 , value  : 50

			},

					coordinates : 'Front',

					protectType : ['None',0],

				exp: {str : 30, dex : 10},

				funds : 10,

			job: 'J12110000',

			tribe: 'T04',

			dropTable: [[3000000 , 'IT0000007' ],[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],

			parttern: [['NH00210',40,'KA100002'],['NH00110',80,'KA100001'],['NS00200',24,'KA330002'],['OTCOUNT',3,'KA100003'],['NH00010',60,'KA100006'],['OT00000',0,'KA100000']]

		    },
	M10000012: {

			name: 'GoblinHolyKnight',

		      health:{

			hp : 45, sp: 40, mp : 70

		      },

					state: {

						str: 24,				int: 22,				dex: 19,				dis : 5,				spd: 18,

			vit: 25,				wis: 5,				agi: 5,				res : 5,				luk: 5

			},

					colorType : 'hsv',

					color : {

			  hue  : 50, saturation : 80 , value  : 50

			},

					coordinates : 'Front',

					protectType : ['None',0],

				exp: {str : 30, dex : 10},

				funds : 10,

			job: 'J12110000',

			tribe: 'T04',

			dropTable: [[3000000 , 'IT0000007' ],[1000000 , 'IT0000000' ],[1000000 , 'IT0000001' ],[1000000 , 'IT0000002' ],[1000000 , 'IT0000003' ],[1000000 , 'IT0000004' ],[1000000 , 'IT0000005' ]],

			parttern: [['NH00210',40,'KA300000'],['NH00110',80,'KA100001'],['NS00200',16,'KA330002'],['NM00210',60,'KA200001'],['DE10000',2,'KA300099'],['NH00010',60,'KA100006'],['OT00000',0,'KA100000']]]

		    },
}
