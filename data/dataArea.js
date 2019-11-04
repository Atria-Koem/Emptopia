const dataArea = {
	10000: {
			name: '-Goblin Field',
			type: 'sort'
		},
    10001: {
			name: '--Goblin to Asobi',
			maxRandomEncount : 7,
			minRandomEncount : 1,
			randomMonster: [['M10000005', 550000],['M10000004', 550000],['M10000003', 550000],['M10000002', 550000],['M10000001', 450000],['M10000000', 650000]],
			// [['EnemyType','Random(100% = 1000000)']] last
			positionMonster: [[['M10000000', 3]],[['M10000000', 2],['M10000005', 2]]],
			// [[['EnemyType','EnemyNumber'],[]],]
			bossMonster: [[[['M10000000',3],['M10000000',3]],950000]]//[[[['EnemyType',count]....]'Random(100% = 1000000)']]
		},
    10002: {
			name: '--Stronger Goblin',
			maxRandomEncount : 7,
			minRandomEncount : 1,
			randomMonster: [['M10000006', 150000],['M10000000', 650000]],
			// [['EnemyType','Random(100% = 1000000)']] last
			positionMonster: [[['M10000000', 3]]],
			// [[['EnemyType','EnemyNumber'],[]],]
			bossMonster: [[[['M10000000',3],['M10000000',3]],950000]]//[[[['EnemyType',count]....]'Random(100% = 1000000)']]
		}
};
