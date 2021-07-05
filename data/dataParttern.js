
const dataPartternType = {
	'OT00000' : { text : "반드시"},
	'OTRAND0' : { text : "○○%의 확률로"},
	'OTCOUNT' : { text : "○회 까지 반드시"},
	'MH00000' : { text : "자신의 최대 HP가 ○○ 일때"},
	'MH00100' : { text : "자신의 최대 HP가 ○○ 보다 클 때"},
	'MH00200' : { text : "자신의 최대 HP가 ○○ 보다 작을 때"},
	'NH00000' : { text : "자신의 현재 HP가 ○○ 일때"},
	'NH00100' : { text : "자신의 현재 HP가 ○○ 보다 클 때"},
	'NH00200' : { text : "자신의 현재 HP가 ○○ 보다 작을 때"},
	'NH00010' : { text : "자신의 현재 HP가 ○○% 일때"},
	'NH00110' : { text : "자신의 현재 HP가 ○○% 보다 클 때"},
	'NH00210' : { text : "자신의 현재 HP가 ○○% 보다 작을 때"},
	'MM00000' : { text : "자신의 최대 MP가 ○○ 일때"},
	'MM00100' : { text : "자신의 최대 MP가 ○○ 보다 클 때"},
	'MM00200' : { text : "자신의 최대 MP가 ○○ 보다 작을 때"},
	'NM00000' : { text : "자신의 현재 MP가 ○○ 일때"},
	'NM00100' : { text : "자신의 현재 MP가 ○○ 보다 클 때"},
	'NM00200' : { text : "자신의 현재 MP가 ○○ 보다 작을 때"},
	'NM00010' : { text : "자신의 현재 MP가 ○○% 일때"},
	'NM00110' : { text : "자신의 현재 MP가 ○○% 보다 클 때"},
	'NM00210' : { text : "자신의 현재 MP가 ○○% 보다 작을 때"},
	'MS00000' : { text : "자신의 최대 SP가 ○○ 일때"},
	'MS00100' : { text : "자신의 최대 SP가 ○○ 보다 클 때"},
	'MS00200' : { text : "자신의 최대 SP가 ○○ 보다 작을 때"},
	'NS00000' : { text : "자신의 현재 SP가 ○○ 일때"},
	'NS00100' : { text : "자신의 현재 SP가 ○○ 보다 클 때"},
	'NS00200' : { text : "자신의 현재 SP가 ○○ 보다 작을 때"},
	'NS00010' : { text : "자신의 현재 SP가 ○○% 일때"},
	'NS00110' : { text : "자신의 현재 SP가 ○○% 보다 클 때"},
	'NS00210' : { text : "자신의 현재 SP가 ○○% 보다 작을 때"},
	'DE10000' : { text : "아군의 사망자가 ○○ 일때"},
	'DE10100' : { text : "아군의 사망자가 ○○ 보다 클 때"},
	'DE10200' : { text : "아군의 사망자가 ○○ 보다 작을 때"},
	'DE20000' : { text : "적군의 사망자가 ○○ 일때"},
	'DE20100' : { text : "적군의 사망자가 ○○ 보다 클 때"},
	'DE20200' : { text : "적군의 사망자가 ○○ 보다 작을 때"},
	'DE30000' : { text : "전체 사망자가 ○○ 일때"},
	'DE30100' : { text : "전체 사망자가 ○○ 보다 클 때"},
	'DE30200' : { text : "전체 사망자가 ○○ 보다 작을 때"}
}
