# Emptopia

item = 악세

특수템 99 

카테고리만 기타 사용품 9/other 





모든 방어/내성은 원래 수치의 10%까지만 감소가능.

방어 10% 감소후 내성 계산시 그 10%의 10%까지 감소가능.

방어 - 내성 최대로 되면 1%까지 감소



완전방어 적용치 = 자신의 완전방어 - 적의 절대명중



크리 확률의 우선순위는

Math.abs[크리배율 - 100] * 확률 값이높은 것으로 적용됨.

운 크리/회피 에 대한 항목은 행운이 오르는 기물과 같은 요소들에만 적용시키는 방안으로

행운이 감소되는 불운의 사ㅇ징성을 가진 것이면 감소시키는 방안



강화가 적용시

물공-마공-방어 퍼감 절대값만 상승함.

강화횟수 ^ 2 수치만큼 물공 마공상승

강화횟수 * 3% 만큼 방어 상승



공속 높은게 빠름 - 공속옵션은 상대적으로 희귀/높은 등급의 옵션으로 취급.

공속이 상승하면 기대 피해량이 상승하기에 아이템 자체의 옵션을 감소 적용을 감안하여야함.



따로 무기 옵션 줄거면 exp에 작성
ex 차례 당 체력회복 3%
ex 스테미나 리젠
ex 속성피해 속성내성


이미지 

 이미지 이름.확장자

하위폴더\\이름.확장자

이미지 데이터 폴더에 넣어라

이미지 안뜨면 주소 잘못



종족

코드 두번째 자리는 환생횟수 10 당 1 최댓값 9

0 = 휴먼

1= 기계

2=잔해

3=정령

4 = 짐승

5=씨앗/식물

6=죽음 언데드류

7=형태없음 

8= 무기물

9=추방자 - 이고깽 



ex 09 - 이고깽 적인느낌

ex 18 = 골렘

ex 76 = 고스트



over 기계친구들

mineral 잔해친구들

world 이고

그외 무수한 타입 내가 주곳싶은 패시브



스킬 0번 공통

스킬계수 확인 Battle( addeffect, skillvalue switch 확인)

special target 특정 조건만족해야 타겟팅
priority target 조건에 따라 우선적으로 ex LowestHp
Efficient 음수 일수록 소모 계수 상승
baseType  누락시 defenceType을 기준으로 피지컬 힘, 매지컬 인트, 하이브리드 반반(힘50 인트50) // ignore 방무 할거면 베이스타입 누락하믄 안댐
[[적용스텟,배율(100 = 1)]]

invalid 타겟팅을 전열이 못막아줌 후열 강제 공격

스킬 사용 코스트 

point 설정


1 전사류

ex 10 전사 공통

-2 전법

-4 피깍 딜전

2 법

20 법사 공통

-1 원소

3 사제

30 사제공통

4 가죽

-04 상태이상



9 몹 전용



9999 상태이상 시 행동



+- 더하고 빼는

up/down 곱연산

(100% = 1)


패턴 판정 위에서 아래
반드시 맨 아래 고정
