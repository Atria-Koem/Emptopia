
const dataSkillTree = {
	KA100001 : {
		success : {
			0 : {
				Job : ['J1','J0'],
			}
		}
	},
	KA100002 : {
		success : {
			0 : {
				Job : ['J1','J0'],
			}
		}
	},
	KA100003 : { 
		success : {
			0 : {
				Job :  [],
				Skill : ['KA100002']
			}
		},
		fail : {
			0 : { Tribe : ["T*4*"]}
		}
	},
	KA100004 : { 
		success : {
			0 : {
				Job :  [],
				Skill : ['KA100002']
			}
		},
		fail : {
			0 : { Tribe : ["T*2*"]}
		}
	},
	KA400000 : {
		success : {
			0 : {
				Job : ['J4','J0'],
			}
		}
	},
	KA400002 : {
		success : {
			0 : {
				Job : ['J4','J0'],
			}
		}
	},
	KA400001 : {
		success : {
			0 : {
				Skill : ['KA400000']
			}
		}
	},
	KA400003 : {
		success : {
			0 : {
				Skill : ['KA400002']
			}
		}
	}
}
