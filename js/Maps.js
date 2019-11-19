class Area{
	constructor(){
        this.areaCode = document.getElementById("AreaSelect").value
        this.areaLevel = document.getElementById("AreaLevel").value
	}
	addLevel() {
    areaData[this.areaCode] += 1;
    this.changeLevel();
	}
	addArea(areaType) {
    areaType = parseInt(areaType);
    var areaSort = (Math.floor(areaType / 1000)) * 1000;
    if (areaSort.length === 1) {
        areaSort = '0000';
    }
    var area = document.getElementById('AreaSelect');
    var length = area.length
    var newAreaData = dataArea[areaType]
    for (var j = 0; j < length; j++) {
        if (area[j].value === areaType) {
            console.log('openArea')
            return;
        }
    }
    var areaName = newAreaData.name;
    var newArea = document.createElement('option');
    newArea.value = areaType;
    newArea.innerText = areaName;
    //newArea.className = newAreaData.type;
    var i = 0;
    for (; i < length; i++) {
        if (areaSort <= area[i].value) {
            if (areaSort < area[i].value) {
                var newAreaCase = document.createElement('option');
                newAreaCase.value = areaSort;
                newAreaCase.innerText = dataArea[areaSort].name;
                //newAreaCase.className = newAreaData.type;
                area.insertBefore(newAreaCase, area[i])
                i++;
            }
            break;
        }
    }
    area.insertBefore(newArea, area[i]);
}
	changeLevel() {
    if (!areaData[this.areaCode]) {
        areaData[this.areaCode] = 0;
    }
    var levelOption = document.getElementById('AreaLevel')
    levelOption.innerHTML = ''
    if (this.areaCode % 1000 != 0) {
        var level = areaData[this.areaCode]
        for (var i = 0; i <= level; i++) {
            var newLevel = document.createElement('option');
            newLevel.innerText = 'Lv' + i
            newLevel.value = i
            levelOption.appendChild(newLevel)
        }
        levelOption.selectedIndex = levelOption.length - 1
			levelOption.disabled = ''
    } else {
        var newLevel = document.createElement('option');
        newLevel.innerText = 'Not Area'
        levelOption.appendChild(newLevel)
			levelOption.disabled = 'true'
    }
}
}
class CreateMap extends Area{
	// 0 = road , 1 = wall , 5 = enemy , 7 = exit ,10 = start , 15 = fog
	constructor(){
		super()
		//this.map.party.sigth = party.sigth;
		var random = Math.floor(Math.random()*17)+5
		this.start = {
				x: 0,    y: 0
			}
		this.exit = {
				x: 0,    y: 0
			}
		this.party = {
		x: 0,    y: 0,
				sigth : 12
			}
        this.treasureData = {};
        this.positionEnemyData ={};
        this.positionEnemyCount = 0;
		this.count = 0;
		this.solve = []
		this.map = []
		this.createMap();
		var y = this.map.length
		var x = this.map[0].length
		this.lengthX = x;
		this.lengthY = y;
		this.changeMap(random);
		this.createPositionEnemy(5);
		this.createTreasure(5);
		this.createFinishMap(x,y);
		this.creatFog();
		this.turn = 0;
		this.changeOnPress(1)
		//document.getElementById('Area').style.visibility = 'hidden';
	}
	calculrateLength(level){
		var length = Math.round(Math.random() * Math.pow(2, 1 + level / 20) * 10 + 12 * (1 + level / 10) )+2
		return length
	}
	checkArea(){
		var area = document.getElementById("AreaSelect").value
        if (area % 1000 === 0) {
            return 0;
        } else {
            return 1;
        }
	}
	createRoom(x, y, type, lengthX, lengthY) {
		var map = this.map
        if (!lengthX) {
            lengthX = Math.floor(Math.random() * map[0].length / (16-Math.random()*8)) + 1
        }
        if (!lengthY) {
            lengthY = Math.floor(Math.random() * map.length / (16-Math.random()*8)) + 1
        }
        switch (type) {
        default:
        case 0:
            var xMax = Math.floor(x + lengthX / 2) + 1
            var yMax = Math.floor(y + lengthY / 2) + 1
            var xMin = Math.floor(x - lengthX / 2) - 1
            var yMin = Math.floor(y - lengthY / 2) - 1
            for (var j = yMin; j < yMax; j++) {
                if (map[j]) {
                    for (var i = xMin; i < xMax; i++) {
                        if (map[j][i] && (map[j][i] != 5 && map[j][i] != 7 && map[j][i] != 10 && map[j][i] != 11)) {
                            map[j][i] = 0;
                        }
                    }
                }
            }
            break;
        case 1:
            var a = Math.floor(lengthX / 2) + 1
            var b = Math.floor(lengthY / 2) + 1
            for (var j = -b; j < b; j++) {
                if (map[y + j]) {
                    for (var i = -a; i < a; i++) {
                        if (Math.pow(j, 2) / Math.pow(b, 2) + Math.pow(i, 2) / Math.pow(a, 2) <= 1) {
                            if (map[y + j][x + i] && (map[y + j][x + i] != 5 && map[y + j][x + i] != 7 && map[y + j][x + i] != 10 && map[y + j][x + i] != 11)) {
                                map[y + j][x + i] = 0;
                            }
                        }
                    }
                }
            }
            break;
        }
		 return { x : x , y : y , lengthX : lengthX , lengthY : lengthY, type : type}
    }
	createRoomPash(start, end){
		
		var startDirection = Math.floor(Math.random()*4) // top left bottom rigth
		var endDirection = Math.floor(Math.random()*4) // top left bottom rigth
	if(start.type === 0){

		switch(startDirection){
			case 0 :
			var startX = Math.floor(Math.random()*start.lengthX-start.lengthX/2)+start.x
			var startY = Math.floor(start.y - start.lengthY/2)
			break;
			case 1 :
			var startX = Math.floor(start.x + start.lengthX/2)
			var startY = Math.floor(Math.random()*start.lengthY-start.lengthY/2)+start.y
			break;
			case 2 :
			var startX = Math.floor(Math.random()*start.lengthX-start.lengthX/2)+start.x
			var startY = Math.floor(start.y + start.lengthY/2)
			break;
			case 3 :
			var startX = Math.floor(start.x - start.lengthX/2)
			var startY = Math.floor(Math.random()*start.lengthY-start.lengthY/2)+start.y
			break;
		}
	}
	else if( start.type === 1){
		switch(startDirection){
			case 0 :
			var startX = start.x 
			var startY = Math.floor(start.y - start.lengthY/2)
			break;
			case 1 :
			var startX = Math.floor(start.x + start.lengthX/2)
			var startY = start.y 
			break;
			case 2 :
			var startX = start.x 
			var startY = Math.floor(start.y + start.lengthY/2)
			break;
			case 3 :
			var startX = Math.floor(start.x - start.lengthX/2)
			var startY = start.y
			break;
		}
	}
	if(end.type === 0){
		switch(endDirection){
			case 0 :
			var endX = Math.floor(Math.random()*end.lengthX-end.lengthX/2)+end.x
			var endY = Math.floor(end.y - end.lengthY/2)
			break;
			case 1 :
			var endX = Math.floor(end.x + end.lengthX/2)
			var endY = Math.floor(Math.random()*end.lengthY-end.lengthY/2)+end.y
			break;
			case 2 :
			var endX = Math.floor(Math.random()*end.lengthX-end.lengthX/2)+end.x
			var endY = Math.floor(end.y + end.lengthY/2)
			break;
			case 3 :
			var endX = Math.floor(end.x - end.lengthX/2)
			var endY = Math.floor(Math.random()*end.lengthY-end.lengthY/2)+end.y
			break;
		}
	}
	else if( end.type === 1){
		switch(endDirection){
			case 0 :
			var endX = end.x 
			var endY = Math.floor(end.y - end.lengthY/2)
			break;
			case 1 :
			var endX = Math.floor(end.x + end.lengthX/2)
			var endY = end.y 
			break;
			case 2 :
			var endX = end.x 
			var endY = Math.floor(end.y + end.lengthY/2)
			break;
			case 3 :
			var endX = Math.floor(end.x - end.lengthX/2)
			var endY = end.y
			break;
		}
	}
	var passWidth = 1
	var map = this.map
	if(startX > endX ){
		for( var i = endX ; i<=startX ;i++){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[startY - j] &&  map[startY - j][i] != 10 &&  map[startY - j][i] != 7 && random){
					 map[startY - j][i] = 0
				}
			}
			
		}

	}
	else{
		for( var i = startX ; i<=endX ;i++){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[startY - j] &&  map[startY - j][i] != 10 &&  map[startY - j][i] != 7 && random){
					 map[startY - j][i] = 0
				}
			}
			
		}
	}
	if(startY > endY){
		for( var i = endY; i< startY; i++){
			if( map[i]){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[i][startX - j] != 10 &&  map[i][startX - j] != 7 && random){
					 map[i][startX-j] = 0
				}
		}
			}
	}
	}
	else{
		for( var i = startY; i< endY; i++){
			if( map[i]){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[i][endX - j] != 10 &&  map[i][endX - j] != 7 && random){
					 map[i][endX-j] = 0
				}
		}
	}
		}

}
	}
	createMap() {

    var check = this.checkArea();
    if (check === 0) {
        return;
    }
    inCheck = 1;
		var map = this.map
    var level = parseInt(document.getElementById('AreaLevel').value);
    var x = this.calculrateLength(level)
    var y = this.calculrateLength(level)
		if(x > 400){
			x = 600
		}
		if(y > 400){
			y = 600
		}
    for (var i = 0; i < y; i++) {
        map[i] = []
        for (var j = 0; j < x; j++) {
            map[i][j] = Math.round(Math.random() * 0.90);
        }
    }
//42 8
	var startX = Math.floor(Math.random() * (x-2)+1)
    var startY = Math.floor(Math.random() * (y-2)+1)
    var exitX = Math.floor(Math.random() * (x-2)+1)
    var exitY = Math.floor(Math.random() * (y-2)+1)
    while ((startX + Math.floor(x / 10) + 1 > exitX && startX - (Math.floor(x / 10) + 1) < exitX) || (startY + Math.floor(y / 10) + 1 > exitY && startY - (Math.floor(y / 10) + 1) < exitY)) {
        exitX = Math.floor(Math.random() * (x - 2) + 1)
        exitY = Math.floor(Math.random() * (y - 2) + 1)
    }
	 var roomStack = []
    var type = Math.round(Math.random());
    map[exitY][exitX] = 7;
    map[startY][startX] = 10;
    var startData = this.createRoom(startX, startY, type, Math.floor(Math.random()*3+3), Math.floor(Math.random()*3+3))
		type = Math.round(Math.random());
    var exitData = this.createRoom(exitX, exitY, type, Math.floor(Math.random()*3+3), Math.floor(Math.random()*3+3))
	 roomStack.push(startData)
	 roomStack.push(exitData)
    if (level > 2) {
		
        var roomCount = Math.floor(Math.random() * (level) / 5 + level / 10) + 1
        for (var i = 0; i < roomCount; i++) {
            type = Math.round(Math.random());
			  do{
				  var roomlength = roomStack.length 
				  var sameCount = 0;
            var roomX = Math.floor(Math.random() * (x));
            var roomY = Math.floor(Math.random() * (y));
				  for(var j = 0; j < roomlength ; j++){// testing
					  if(roomStack[j].x === roomX && roomStack[j].y === roomY){
						  sameCount+=1;
					  }
				  }
			  }while(sameCount != 0)
            var roomData = this.createRoom(roomX, roomY, type)
				roomStack.push(roomData);
			  	var roomStackLength = roomStack.length
        }
    }

	if(roomStackLength > 1){
		var countPash = 0;
		for(var i = 0 ; i < roomStackLength; i++){
			var countRoomPash = 0;
			for(var j = i + 1 ; j < roomStackLength; j++){
				var checkPash = Math.random()*(0.45+countRoomPash *0.01)+countPash/100 ;
				if(checkPash < 1){
				this.createRoomPash(roomStack[i],roomStack[j]);
					countPash += 1
					countRoomPash +=1
				}
				if(i === 0 && j === 1){
					if(roomStack[0].x > roomStack[1].x){
						
					}
					else if(roomStack[0].x < roomStack[1].x){
						
					}
					if(roomStack[0].y > roomStack[1].y){
						
					}
					else if(roomStack[0].y < roomStack[1].y){
						
					}
				}
			}
		}
	}	
    this.start.x = startX;
    this.start.y = startY;
    this.party.x = startX;
    this.party.y = startY;
    this.exit.x = exitX;
    this.exit.y = exitY;
		return map
}
	createTreasure(count){
		let x;
		let y;
		let createCount = 0;
		do{
			x = Math.floor(Math.random() * (this.map[0].length - 2) + 1)
			y= Math.floor(Math.random() * (this.map.length - 2) + 1)
			let wallC = 0;
			if((this.exit.y == y && this.exit.x == x) || (this.start.y == y && this.start.x == x) ){
				wallC = -Infinity;
			}
			for(let i = -1; i < 2; i++){
				for(let j = -1; j <2 ; j++){
					if(this.map[y + i][x + j] == 1){
						wallC++;
					}
				}
			}
			if(wallC > 6){
				count--;
				this.map[y][x] = 11;
				this.treasureData[createCount] = {
					x : x, y: y,
					item : []
				}

				const itemCode = Object.getOwnPropertyNames(dataItem)
				const codeLength = itemCode.length;
				this.treasureData[createCount].item.push(itemCode[Math.floor(Math.random() * codeLength)])
				console.log(x + "," + y);
				createCount++;
			}
			
		}while(count > 0)

    }
    createPositionEnemy(count){
		let x;
		let y;
		let createCount = 0;
		do{
			x = Math.floor(Math.random() * (this.map[0].length - 2) + 1)
			y= Math.floor(Math.random() * (this.map.length - 2) + 1)
			if((this.exit.y == y && this.exit.x == x) || (this.start.y == y && this.start.x == x) ){
				continue;
			}
			if(this.map[y][x] == 0){
				const poe = dataArea[this.areaCode].positionMonster;
				let index = Math.floor(Math.random() *  poe.length); 
				this.map[y][x] = 5;
				this.positionEnemyData[createCount] = {
					x : x, y: y,
					dataIndex : index,
					powerValue : Math.floor(Math.random() * 5 + 2),
					sigth : Math.floor(Math.random() * 4 + 1)
				}
				createCount++;
				count--;
			}
		}while(count > 0)
        this.positionEnemyCount = null;

    }
	creatFog() {
    var x = this.lengthX;
    var y = this.lengthY;
    for (var i = 0; i < y; i++) {
        this.solve[i] = []
        for (var j = 0; j < x; j++) {
            if ((this.start.x != j || this.start.y != i) && (this.exit.x != j || this.exit.y != i)) {
                this.solve[i][j] = 15
            } else {
                if ( this.start.x === j &&  this.start.y === i) {
                    this.solve[i][j] = 10;
                }
            }
        }
    }
}
	changeMap(repeatCount) {
    function calculrateCount(length) {
        var count = Math.ceil(length / 3);
        var returnValue = [];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < count; j++) {
                returnValue[j + i * count] = j * 3 + i;
            }
        }
        return returnValue
    }
    if (!repeatCount) {
        repeatCount = 1;
    }
    var update = [];
    var x = this.lengthX;
    var y = this.lengthY;
    for (var i = 0; i < y; i++) {
        update[i] = [];
        for (var j = 0; j < x; j++) {
            update[i][j] = this.map[i][j]
        }
    }
    var countX = calculrateCount(x)
    var countXLength = countX.length;
    var countY = calculrateCount(y)
    var countYLength = countY.length;
    for (var h = 0; h < repeatCount; h++) {
        for (var i = 0; i < countYLength; i++) {
			  if(this.map[countY[i]] ){
            for (var j = 0; j < countXLength; j++) {
					if((this.map[countY[i]][countX[j]]+1)%3){
                if ((countY[i] != this.start.y || countX[j] != this.start.x) && (countY[i] != this.exit.y || countX[j] != this.exit.x)) {
                    var wallCheck = 7 - Math.floor(Math.random() * 3);
                    var wallCount = 0;
                    if (this.map[countY[i] - 1]) {
                        if (!((this.map[countY[i] - 1][countX[j] - 1]+1)%2) || this.map[countY[i] - 1][countX[j] - 1] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i] - 1][countX[j]]+1)%2) || this.map[countY[i] - 1][countX[j]] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i] - 1][countX[j] + 1]+1)%2) || this.map[countY[i] - 1][countX[j] + 1] === 1) {
                            wallCount += 1;
                        }
                    }
                    if (this.map[countY[i]]) {
                        if (!((this.map[countY[i]][countX[j] - 1]+1)%2) || this.map[countY[i]][countX[j] - 1] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i]][countX[j]]+1)%2) || this.map[countY[i]][countX[j]] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i]][countX[j] + 1]+1)%2) || this.map[countY[i]][countX[j] + 1] === 1) {
                            wallCount += 1;
                        }
                    }
                    if (this.map[countY[i] + 1]) {
                        if (!((this.map[countY[i] + 1][countX[j] - 1]+1)%2) || this.map[countY[i] + 1][countX[j] - 1] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i] + 1][countX[j]]+1)%2) || this.map[countY[i] + 1][countX[j]] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i] + 1][countX[j] + 1]+1)%2) || this.map[countY[i] + 1][countX[j] + 1] === 1) {
                            wallCount += 1;
                        }
                    }
                    if (wallCount >= wallCheck) {
                        update[countY[i]][countX[j]] = 1;
                    } else if (wallCount <= wallCheck/(2+Math.random()*2)) {
                        update[countY[i]][countX[j]] = 0;
                    }
                }
				}
            }
			  }
        }
        this.map = update;
    }
}
	createFinishMap(x,y,lengthX,lengthY,type,diraction){
	if(!lengthX && !lengthY){
		for(var i = 0; i<y; i++){
			if(i === 0  || i === y-1){
				for(var j = 0 ; j < x; j++){
					this.map[i][j] = 1
				}
			}
			else{
				this.map[i][0] = 1;
				this.map[i][x-1] = 1;
			}
		}
	}
	else{
		switch (type) {
        default:
        case 0:
            var xMax = Math.floor(x + lengthX / 2) + 1
            var yMax = Math.floor(y + lengthY / 2) + 1
            var xMin = Math.floor(x - lengthX / 2) - 1
            var yMin = Math.floor(y - lengthY / 2) - 1
            for (var j = yMin; j < yMax; j++) {
                if (this.map[j]) {
                    for (var i = xMin; i < xMax; i++) {
                        if (this.map[j][i] && (this.map[j][i] != 5 && this.map[j][i] != 7 && this.map[j][i] != 10&& this.map[j][i] != 11)) {
                            this.map[j][i] = 0;
                        }
                    }
                }
            }
            break;
        case 1:
            var a = Math.floor(lengthX / 2) + 1
            var b = Math.floor(lengthY / 2) + 1
            for (var j = -b; j < b; j++) {
                if (this.map[y + j]) {
                    for (var i = -a; i < a; i++) {
                        if (Math.pow(j, 2) / Math.pow(b, 2) + Math.pow(i, 2) / Math.pow(a, 2) <= 1) {
                            if (this.map[y + j][x + i] && (this.map[y + j][x + i] != 5 && this.map[y + j][x + i] != 7 && this.map[y + j][x + i] != 10 && this.map[y + j][x + i] != 11)) {
                                this.map[y + j][x + i] = 0;
                            }
                        }
                    }
                }
            }
				break;
								}
	}
	}
	end(){
		if (this.party.x === this.exit.x && this.party.y === this.exit.y) {
			console.log('exitArea');
			var answer = confirm('End?');
			if (answer) {
				console.log('clear   ' + this.turn);
				this.turn = 0;
				inCheck = 0;
				this.changeOnPress(1);
				document.getElementById('AreaSelect').disabled = false;
				document.getElementById('AreaLevel').disabled = false;
				document.getElementById('Area').style.visibility = 'visible';
				if (document.getElementById('AreaLevel').value === areaData[document.getElementById('AreaSelect').value]) {
					super.addLevel();
				}
				document.getElementsByClassName('MenuTabs')[0].children[2].click()
			}
		}
	}
	restart(){
		if (this.party.x === this.start.x && this.party.y === this.start.y && this.turn != 0) {
			console.log('startArea');
			this.turn = 0;
			var answer = confirm('reStart?');
			if (answer) {
				inCheck = 0;
				this.changeOnPress(1);
				console.log('reStart');
				document.getElementById('AreaSelect').disabled = false;
				document.getElementById('AreaLevel').disabled = false;
				document.getElementById('Area').style.visibility = 'visible';
				document.getElementsByClassName('MenuTabs')[0].children[2].click()
        }
    }
		
	}
	changeOnPress(type) {
    if (type === 1) {
        if (inCheck === 0 || Object.getOwnPropertyNames(dataActiveCharacter).length != 0) {
            document.onkeypress = '';
        } else {
            document.onkeypress = moveMap //new MoveInMap(event,event.keyCode,'player')//
        }
			
    } else {
        document.onkeypress = '';
    }
	}
	checkTreasure(x,y){
		const treData = Object.getOwnPropertyNames(this.treasureData);
		const length = treData.length
		for(let i = 0; i < length ; i++){
			if(this.treasureData[treData[i]].x == x && this.treasureData[treData[i]].y == y){
				const item = this.treasureData[treData[i]].item
				for(let j = 0 ; j < item.length; j++){
					new Item(item[j]);
					new AddLog([{text : 'Get Treasure'},{text : dataItem[item[j]].name}], 'Map')
				}
				this.map[this.treasureData[treData[i]].y][this.treasureData[treData[i]].x] = 0;
				
				delete this.treasureData[treData[i]]
			}
		}
    }
    checkPostionEnemy(x,y){
        const pOEData = Object.getOwnPropertyNames(this.positionEnemyData);
        const length = pOEData.length
        for(let i =0 ; i < length; i++){
            if(this.positionEnemyData[pOEData[i]].x == x && this.positionEnemyData[pOEData[i]].y == y){
				new AddLog([{text : 'Position of Enemy Join'},], 'Map')
				battleCheck =  0;
				this.positionEnemyCount = i;
				const power = this.positionEnemyData[pOEData[i]].powerValue
                enemyGroup = new EnemyGroup(this.areaCode,this.areaLevel * power ,'position',this.positionEnemyData[pOEData[i]].dataIndex).returnGroup
                new BattleData
                CreateMap.prototype.changeOnPress(1)
                new BattleData
                document.getElementsByClassName('MenuTabs')[0].children[0].click()
                return true;
            }
		}
		return false;
	}
	checkRandomIncount(count) {
		var addCount = Math.round(Math.floor(Math.random() * 32550648 + 1017207) / 8137662);
		count += addCount;
		if (count >= 126) {
			new AddLog([{text : 'Enemy Join'},], 'Map')
			battleCheck =  0;
			search()
			console.log('Enemy')
			count = 0;
			document.getElementsByClassName('MenuTabs')[0].children[0].click()//.className = 'eventTab'//.click()
		} else {
		}
		return count
	}
	checkBattle(){
		let check = this.checkPostionEnemy(this.party.x,this.party.y);
		if(!check){
			this.count = this.checkRandomIncount(this.count);
		}
	}
	checkPositionOfEnemyMove(){
		const pOEData = Object.getOwnPropertyNames(this.positionEnemyData);
		const length = pOEData.length
		for(let i = 0 ; i < length ; i++){
			new MoveInMap(null,null,'enemy',pOEData[i]);
		}
	}
	checkRandomEvent(){
		const dataN = Object.getOwnPropertyNames(playerGroup);
		if(Math.random() * 100 < 10){
			new AddLog([{text : 'Join Trap. hp Dwon'}], 'Map')
			for(let i =0 ; i<dataN.length; i++){
				playerGroup[dataN[i]].battle.health.hp *= 0.9;
				StatusView.prototype.changeStatusView(playerGroup[dataN[i]],'Party')		
			}
		}
		if(Math.random() * 100 < 10){
			new AddLog([{text : 'Join Heal Field. hp Up'}], 'Map')
			for(let i =0 ; i<dataN.length; i++){
				playerGroup[dataN[i]].battle.health.hp *= 1.1;
				StatusView.prototype.changeStatusView(playerGroup[dataN[i]],'Party')		
			}
		}
		
	}
	checkTurn(keyCode) {
	 
 	this.checkPositionOfEnemyMove();
   
    this.checkBattle()
    this.turn += 1;
    this.checkRandomEvent();
	this.checkTreasure(this.party.x,this.party.y)
		if (this.party.x === this.exit.x && this.party.y === this.exit.y) {
			this.end()
		}
		if (this.party.x === this.start.x && this.party.y === this.start.y  && keyCode != 53) {
			this.restart()
		}
}
}
class CanClearTest{
	constructor(){
		var startX = mapData.start.x
		var startY = mapData.start.y
		var endX = mapData.exit.x
		var endY = mapData.exit.y
		var lengthX = this.lengthX = mapData.lengthX
		var lengthY = this.lengthY = mapData.lengthY
		var map = mapData.map
		var marker = this.marker = []
		this.map = map
		//this.check = this.selectCheck()
		this.x = startX
		this.y = startY
		for(var i = 0 ; i < lengthY ; i++){
			marker[i] = []
			for(var j = 0 ; j < lengthX; j++){
				marker[i][j] = 0
			}
		}	
		var x = this.x
		var y = this.y
		this.stack = this.movefill(x,y)		
		do{
			var stack = []
			var length = this.stack.length
			for(var i = 0; i < length ; i++){
				var pushStack = this.movefill(this.stack[i].x , this.stack[i].y)
				var pushLength = pushStack.length
				for(var j = 0 ; j < pushLength; j++){
					stack.push(pushStack[j])
				}
			}
			this.stack = stack
		}while(this.stack.length != 0);
		this.clear = 0
		if(marker[endY][endX] === 1){
			console.log('can')
			this.clear = 1
		}
		else{
			console.log('fail')
		}
	}
	movefill(x,y){
		var map = this.map
		var marker = this.marker
		var stack = []
		if(map[y - 1][x - 1] != 1 && marker[y - 1][x - 1] == 0){
			marker[y - 1][x - 1] = 1
			stack.push({x : x - 1, y : y - 1})
		}
		if(map[y - 1][x] != 1 && marker[y - 1][x] == 0){
			marker[y - 1][x] = 1
			stack.push({x : x, y : y - 1})
		}
		if(map[y - 1][x + 1] != 1 && marker[y - 1][x + 1] == 0){
			marker[y -1 ][x + 1] = 1
			stack.push({x : x + 1, y : y - 1})
		}
		if(map[y][x - 1] != 1 && marker[y][x] == 0){
			marker[y][x -1] = 1
			stack.push({x : x - 1, y : y })
		}
		if(map[y][x + 1] != 1 && marker[y][x + 1] == 0){
			marker[y][x + 1] = 1
			stack.push({x : x + 1, y : y })
		}
		if(map[y + 1][x - 1] != 1 && marker[y + 1][x - 1] == 0){
			marker[y + 1][x - 1] = 1
			stack.push({x : x - 1, y : y + 1})
		}
		if(map[y + 1][x] != 1 && marker[y + 1][x] == 0){
			marker[y + 1][x] = 1
			stack.push({x : x, y : y + 1})
		}
		if(map[y + 1][x + 1] != 1 && marker[y + 1][x + 1] == 0){
			marker[y + 1][x + 1] = 1
			stack.push({x : x + 1, y : y + 1})
		}
		return stack
	}
}
class InMapParty{
	constructor(){
		let inPartyDesk = document.getElementById('inPlayedCharacter')
		this.charcter = {}
		StatusView.prototype.clearPartyStatusView()
		this.createPlayerGroup();
		this.createPartyDesk()
		playerGroup = this.character
		
	}
	createPlayerGroup(){
		let player = {}
		const character = playerTeam.character;
		const characterName = Object.getOwnPropertyNames(character)
		const length  = characterName.length
		for(let i = 0 ; i < length;  i++){
			if(character[characterName[i]].selected === 1){
				player[characterName[i]]  = character[characterName[i]]
			}

	}
		const checkLength =  Object.getOwnPropertyNames(player).length
		if(checkLength <= 5 && checkLength >= 1){
			this.character = player
		}
		else{
			console.log('Error')
		}
	}
	createPartyDesk(){
		const character = this.character;
		const characterName = Object.getOwnPropertyNames(character)
		const length = characterName.length
		for(let i = 0 ; i < length ; i++){
			new StatusView(character[characterName[i]],'Party')
		}
	}
}
class SearchEnemy{
	constructor(){
		battleCheck = 0;
		this.createPlayerGroup()
	}

}
class EnemyGroup{
	constructor(areaCode,areaLevel,groupType,groupIndex){
		this.area = dataArea[areaCode]
		this.level = areaLevel
        this.type = groupType
        if(groupIndex || groupIndex == 0){
            this.groupIndex = groupIndex;
        }
		this.checkGroupType()
		this.returnGroup = {}
		this.createGroup()
		this.summaryBattleOption()
	}
	checkGroupType(){
		switch(this.type){
			case 'random' :
				this.checkEncount()
				this.selectRandomEnemyCode()
				break;
            case 'position' :
                this.selectPositionEnemyCode(this.groupIndex)
				break;
							 }
	}
	checkEncount(){
		const value = Object.getOwnPropertyNames(playerGroup).length / 5
		let maxEncount = Math.round(this.area.maxRandomEncount * value)
		let minEncount = Math.ceil(this.area.minRandomEncount * value) 
		this.encount = Math.round(Math.random() * (maxEncount - minEncount) + minEncount)
	}
	createGroup(){
		const data = this.dataCode
		const length = data.length
		for( let i = 0 ; i < length ; i++){
			let enemy = this.createEnemy(data[i])
			this.returnGroup[enemy.code] = enemy
		}
	}
	createEnemy(enemyCode){
		const level = Math.ceil(Math.random() * 3 + this.level * 3)
		const overLap = this.checkNameOverLap(enemyCode)
		return new Enemy(enemyCode,level,overLap)
	}
	checkNameOverLap(code){
		const group = Object.getOwnPropertyNames(this.returnGroup)
		let number = 0
		if(group){
			const length = group.length
			for(let i = 0 ; i < length ; i++){
				const checkCode = this.returnGroup[group[i]].enemyCode
				if(code === checkCode){
					number += 1
				}
			}
		}
		return number
	}
	selectRandomEnemyCode(){
		let dataCode = []
		const encountArray = this.area[this.type + 'Monster'].slice(0)
		const encountLength = encountArray.length
		for( let length = 0/*dataCode.length*/ ; length < this.encount; ){
			let selectArray = encountArray[Math.floor(Math.random() * encountLength)]
			let encountDice = Math.random() * 1000000;
			if( encountDice < selectArray[1]){
				 dataCode.push(selectArray[0])
				length += 1
				 }			
		}
		this.dataCode = dataCode
	}
	selectPositionEnemyCode(groupIndex){
        let dataCode = []
        const encountArray = this.area[this.type + 'Monster'].slice(0)
        const encountLength = encountArray.length
        if((groupIndex == 0 ||groupIndex) && groupIndex <encountLength ){
            const stock = encountArray[groupIndex]
            const length = stock.length
            for(let i = 0 ; i < length ; i++){
                for(let j = 0 ; j < stock[i][1]; j++){
                    dataCode.push(stock[i][0]);
                }
            }
        }
        this.dataCode = dataCode
    }
	summaryBattleOption(){
		const group = Object.getOwnPropertyNames(this.returnGroup)
		if(group){
			const length = group.length
			for(let i = 0 ; i < length ; i++){
				const checkCode = this.returnGroup[group[i]].enemyCode
				new Option(this.returnGroup[group[i]],'battle')
			}
		}
	}
}
class Sight{
	constructor(){	
		this.solve = mapData.solve
		this.map = mapData.map
		var party = mapData.party
		var sigth = party.sigth / 2
		this.sigth = sigth ;
		this.sigthMin = Math.floor(sigth);
		this.sigthMax = Math.ceil(sigth + Math.abs(sigth % 2 - 1));
		this.x = party.x;
		this.y = party.y;
		this.lengthX = mapData.lengthX;
		this.lengthY = mapData.lengthY;
		this.checkXY()
		this.createDrawArray()
		this.blockCheck();
		this.drawPlayMap();
		this.drawMiniMap();
	}
	check(){
		var sigth = this.sigth

	}
	block(x,y,alpha,sigth){
		var minX = this.minX 
		var minY = this.minY
		var settingX = this.x
		var settingY = this.y
  if(alpha === 0){
    var inputType = 0;
    var setX = 0;
    var setY = 0;
    for(var j = 0; j <= sigth; j++){
      if( x === settingX &&  y < settingY){
      var inputX = settingX
      var inputY = settingY - j
      }
      else if( x === settingX && y >= settingY){
      var inputX = settingX
      var inputY = settingY + j
      }
      else if( y === settingY && x < settingX){
      var inputX = settingX - j
      var inputY = settingY
      }
      else if( y === settingY && x >= settingX){
      var inputX = settingX + j
      var inputY = settingY			
      } 
			if(inputX < 0 ){
				break;
			}
			else if(inputX > this.lengthX - 1 ){
				break;
			}
			if(inputY < 0 ){
				break;
      }
			else if(inputY > this.lengthY - 1 ){
        break;
      }
      if(inputType === 15){
				this.drawArray[inputY - minY][inputX - minX] = 15
      }
			else{
				this.drawArray[inputY - minY][inputX - minX] = this.map[inputY][inputX]
				this.solve[inputY][inputX] = this.map[inputY][inputX]
				if(this.map[inputY][inputX] === 1){
					inputType = 15
				}
			}
    }
  }
  else{
		var setBX = 0;
		var setBY = 0;
		var setGX = 0;
		var setGY = 0;
    for(var j = 0; j < sigth ; j+= 0.1){
      if(x > settingX && y <= settingY){
        if(Math.abs(alpha) <= 1){
          var betaX = Math.ceil(j)
          var betaY = -Math.floor(Math.abs(j * alpha))
					var gammaX = Math.ceil(j)
					var gammaY = -Math.ceil(Math.abs(j * alpha))
          }
        else{
          var betaY = -Math.floor(j)
          var betaX = Math.floor(Math.abs(j / alpha))					
					var gammaY = -Math.floor(j)
					var gammaX = Math.ceil(Math.abs(j / alpha))
          }
      }
      else if(x <= settingX && y <= settingY){
        if(Math.abs(alpha) <= 1){
          var betaX = -Math.floor(j)
          var betaY = -Math.floor(Math.abs(j * alpha))
					var gammaX = -Math.floor(j)
					var gammaY = -Math.ceil(Math.abs(j * alpha))
          }
        else{
          var betaY = -Math.floor(j)
          var betaX = -Math.floor(Math.abs(j / alpha))
					var gammaY = -Math.floor(j)
					var gammaX = -Math.ceil(Math.abs(j / alpha))
          }
      }
      else if(x > settingX && y > settingY){
        if(Math.abs(alpha) <= 1){
          var betaX = Math.ceil(j)
          var betaY = Math.floor(Math.abs(j * alpha))
					var gammaX = Math.ceil(j)
					var gammaY = Math.ceil(Math.abs(j * alpha))
          }
        else{
          var betaY = Math.ceil(j)
          var betaX = Math.floor(Math.abs(j / alpha))					
					var gammaY = Math.ceil(j)
					var gammaX = Math.ceil(Math.abs(j / alpha))
          }
      }
      else if(x <= settingX && y > settingY){
        if(Math.abs(alpha) <= 1){
          var betaX = -Math.floor(j)
          var betaY = Math.floor(Math.abs(j * alpha))
					var gammaX = -Math.floor(j)
					var gammaY = Math.ceil(Math.abs(j * alpha))
          }
        else{
          var betaY = Math.ceil(j)
          var betaX = -Math.floor(Math.abs(j / alpha))
					var gammaY = Math.ceil(j)
					var gammaX = -Math.ceil(Math.abs(j / alpha))
          }
      }
      if((betaX === 0 || betaY === 0) || setBX === betaX && setBY === betaY ){}
      else{
        var inputY = settingY + betaY
        var inputX = settingX + betaX
				if(inputY > -1 && inputY < this.lengthY && inputX > -1 && inputX < this.lengthX){
					var length = Math.sqrt(Math.pow(betaX, 2) + Math.pow(betaY, 2));
					if(inputType === 15 || length > sigth){
						this.drawArray[inputY - minY][inputX - minX]  = 15//this.map[inputY][inputX] + length / 100			//this.drawArray[inputY - minY][inputX - minX] = 15
					}
					else{
						this.solve[inputY][inputX] = this.map[inputY][inputX]
						this.drawArray[inputY - minY][inputX - minX] =  this.map[inputY][inputX] + length / 100

						if(this.solve[inputY][inputX] === 1){
							inputType = 15
						}
					}
				}
				setBX = betaX;
				setBY = betaY;
			}
      if((gammaX === 0 || gammaY === 0) || setGX === gammaX && setGY === gammaY ){}
      else{
        var inputY = settingY + gammaY
        var inputX = settingX + gammaX
				if(inputY > -1 && inputY < this.lengthY && inputX > -1 && inputX < this.lengthX){
					var length = Math.sqrt(Math.pow(betaX, 2) + Math.pow(betaY, 2));
					if(inputType === 15 || length > sigth){
						this.drawArray[inputY - minY][inputX - minX]  = 15//this.map[inputY][inputX] + length / 100			//this.drawArray[inputY - minY][inputX - minX] = 15
					}
					else{
						this.solve[inputY][inputX] = this.map[inputY][inputX]		
						this.drawArray[inputY - minY][inputX - minX]  = this.map[inputY][inputX] + length / 100							
						if(this.solve[inputY][inputX] === 1){
							inputType = 15
						}
					}
				}
				setGX = gammaX;
				setGY = gammaY;
			}
    }
  }
}
	checkXY(){
		var x = this.x
		var y = this.y
		var sigthMin = this.sigthMin;
		var sigthMax = this.sigthMax;
		var minX = x - sigthMin
		if(minX < 0){
			minX = 0;
		}
		var maxX = x + sigthMax
		if(maxX > this.lengthX){
			maxX = this.lengthX
		}
		var minY = y - sigthMin
		if(minY < 0){
			minY = 0;
		}
		var maxY = y + sigthMax
		if(maxY > this.lengthY){
			maxY = this.lengthY
		}
		this.minX = minX
		this.maxX = maxX
		this.minY = minY
		this.maxY = maxY
	}
	createDrawArray(){
		this.drawArray = []
		var length = Math.abs(this.sigthMax + this.sigthMin)
		for(var i = 0; i < length ; i++){
			this.drawArray[i] = []
			for(var j = 0 ; j < length ; j ++){
				this.drawArray[i][j] = 15
			}
		}
	}
	blockCheck(){
		var settingX = this.x
		var settingY = this.y		
		var sigth = this.sigth;
		var minX = this.minX 
		var maxX = this.maxX
		var minY = this.minY
		var maxY = this.maxY 
		var stack = {};
		for(var i = minY; i<maxY; i++){
			if(i === minY || i === maxY - 1){
				for( var j = minX; j < maxX; j++){
					var x = j - settingX;
					var y = i - settingY;
					if( x === 0 || y === 0){
						var alpha = 0;
					}
					else{
						var alpha = x / y
					}
					if( alpha != 0 && Math.abs(alpha) < 1 ){
						var inputAlpha = 1/Math.abs(alpha);
					}
					else{
						var inputAlpha = Math.abs(alpha)
					}
					if(!stack[inputAlpha]){
					stack[inputAlpha] = []
					}
					stack[inputAlpha].push( { x : j, y : i, alpha : alpha , sigth : sigth} )
				}
			}
			else{
				var y = i - settingY
				if(y === 0){
					var alphaMin = 0;
					var alphaMax = 0;
				}
				else{
					var alphaMin = (minX - settingX) / y
					var alphaMax = (maxX - 1 - settingX) / y
				}
				var inputMin = Math.abs(alphaMin)
				var inputMax = Math.abs(alphaMax)
				if( y != 0 ){
					if(inputMin < 1){
						inputMin = 1 / inputMin
					}
					if(inputMax < 1){
						inputMax = 1 / inputMax
					}
				}
				if(!stack[inputMax]){
					stack[inputMax] = []
				}
				if(!stack[inputMin]){
					stack[inputMin] = []
				}
				stack[inputMax].push( { x : (maxX - 1) , y : i , alpha : alphaMax, sigth : sigth} )				
				stack[inputMin].push( { x : minX , y : i , alpha : alphaMin, sigth : sigth} )
				
			}
		}
		var stackCheck = Object.getOwnPropertyNames(stack).sort();
		var stackLength = stackCheck.length
		for(var i = 0 ; i < stackLength; i++){
			var stackAlpha = stack[stackCheck[i]]
			var alphaLength = stackAlpha.length
			for( var j = 0 ; j < alphaLength; j++){
				this.block(stackAlpha[j].x, stackAlpha[j].y, stackAlpha[j].alpha, stackAlpha[j].sigth)
			}
		}
	}
	returnColor(value){
		let fillColor = Math.floor(value);
		var fillStyle  = ''
		let sightTrans = 0;
		if(value >= 1){
			sightTrans = Math.floor((value % fillColor) * 100);
		}
		else{
			sightTrans = Math.floor( value * 100)
		}
		let red = 0;
		let green = 0;
		let blue = 0;
		switch(fillColor){
			case 0:
				red = 240;
				green = 248;
				blue = 255;
				sightTrans *= 2.5
				break;
			case 1:
				red = 169;
				green = 169;
				blue = 169;
				sightTrans *= 10
				break;
            case 5:
                red = 64;
                green = 0;
                blue = 128;
                sightTrans *= 8
                    break;
			case 7:
				red = 250;
				green = 128;
				blue = 114;
				sightTrans *= 8
				break;
			case 10:
				red = 107;
				green = 142;
				blue = 35;
				sightTrans *= 8
				break;
			default : 
			case 15:
                
				red = 0;
				green = 0;
				blue = 0;
                break;
            case 11:
                red = 255;
                green = 251;
                blue = 0;
                sightTrans *= 8
                    break;
			case 300:
			red = 0;
			green = 0;
			blue =255;
				break;
								}
		if(sightTrans){
			red = ((red -= sightTrans) > 0)? Math.floor(red - sightTrans) : 0 ;
			green = ((green -= sightTrans) > 0)? Math.floor(green - sightTrans) : 0;
			blue = ((blue -= sightTrans) > 0)? Math.floor(blue - sightTrans) : 0;
		}
		fillStyle = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
		return fillStyle

	}
	drawPlayMap(){
		var canvas = document.getElementById('MapDraw');
		var Map = document.getElementById('Map');
		var inner = canvas.getContext('2d');
		var length = this.sigthMax + this.sigthMin
		var draw  = this.drawArray
		var baseX = this.x - this.minX
		var baseY = this.y - this.minY
		canvas.width = (length)*20
		canvas.height = (length)*20 
		Map.style.width = canvas.width + 'px'
		Map.style.height = canvas.height + 'px'
		for (var i = 0; i < length; i++) {
				for (var j = 0; j < length; j++) {
							inner.fillStyle = this.returnColor(draw[i][j])									
						if(baseX ===  j && baseY === i){
							inner.fillStyle = "aqua"
						}

					inner.fillRect((j)*20,(i)*20,20,20)
					if(Math.floor(draw[i][j]) == 5){
						inner.font = "15px consolas";
						inner.fillStyle = "white";
						inner.fillText("E", (j)*20 + 10,(i)*20 + 10);
					}

				}
			
		}
	}
	drawMiniMap(){
		var canvas = document.getElementById('MiniMapDraw');
		var Map = document.getElementById('MiniMap');
		var inner = canvas.getContext('2d');
		var solve = this.solve
		var lengthX = this.lengthX
		var lengthY = this.lengthY
		canvas.width = (this.lengthX)*4
		canvas.height = (this.lengthY)*4
		Map.style.width = canvas.width + 'px'
		Map.style.height = canvas.height + 'px'
		for (var i = 0; i < lengthY; i++) {
				for (var j = 0; j < lengthX; j++) {

							inner.fillStyle = this.returnColor(solve[i][j])									
						if(this.x ===  j && this.y === i){
							inner.fillStyle = "aqua"
						}
					inner.fillRect((j)*4,(i)*4,4,4)
				}
			
		}
	}
}
class MoveInMap{
	constructor(evt,keyCode,moveTargetType,targetNumber){
		this.selectPerformer(moveTargetType,targetNumber)
		this.map = mapData.map
		if(!keyCode && !moveTargetType){
			keyCode = evt.which ? evt.which : event.keyCode;
		}
		this.direction = this.checkDirection(keyCode)
		if(!this.direction){
			return
		}
		this.x = this.performer.x
		this.y = this.performer.y
		this.lengthX = mapData.lengthX;
		this.lengthY = mapData.lengthY;
		this.checkMove()
		this.changeMapData()

	}
	selectPerformer(moveTargetType,targetNumber){
		switch(moveTargetType){
			default :
			case 'player' :
				this.performer = mapData.party
				this.type = 0;
				break;
			case 'enemy' :
				this.performer = mapData.positionEnemyData[targetNumber]
				this.type = 5;
				break;
												 }
	}
	checkDirection(keyCode){
		var directionName = ['NE','N','NW','E','Stay','W','SE','S','SW']
		var check = 0
		if(!keyCode){
			//this.moveParttern
			check = directionName[Math.floor(Math.random() * 9)]
		}
		else{
			check = directionName[keyCode - 49]
		}
		return check;
	}
	checkMove(){
		var map = this.map
		var x = this.x
		var y = this.y
		var lengthX = this.lengthX;
		var lengthY = this.lengthY;
		var performer = this.performer
		switch (this.direction) {
		case 'NE':
        if (y + 1 < lengthY && x - 1 > -1) {
            if (map[y + 1][x - 1] != 1) {
                performer.x -= 1;
                performer.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'N':
        if (y + 1 < lengthY) {
            if (map[y + 1][x] != 1) {
                performer.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'NW':
        if (y + 1 < lengthY && x + 1 < lengthX) {
            if (map[y + 1][x + 1] != 1) {
                performer.x += 1;
                performer.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'E':
        if (x - 1 > -1) {
            if (map[y][x - 1] != 1) {
                performer.x -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'Stay':
        console.log('stay')
        break;
    case 'W' :
        if (x + 1 < lengthX) {
            if (map[y][x + 1] != 1) {
                performer.x += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'SE': 
        if (y - 1 > -1 && x - 1 > -1) {
            if (map[y - 1][x - 1] != 1) {
                performer.x -= 1;
                performer.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'S':
        if (y - 1 > -1) {
            if (map[y - 1][x] != 1) {
                performer.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'SW':
        if (y - 1 > -1 && x + 1 < lengthX) {
            if (map[y - 1][x + 1] != 1) {
                performer.x += 1;
                performer.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    default:
        return;
    }
	}
	changeMapData(){
		const exit =mapData.exit
		const start = mapData.start
		if(this.y == exit.y && this.x == exit.x){
			this.map[this.y][this.x] =7
		}
		else if(this.y == start.y && this.x == start.x){
			this.map[this.y][this.x] =10
		}
		else{
			this.map[this.y][this.x] = 0
		}
		this.map[this.performer.y][this.performer.x] = this.type;
		
		
		
	}
}
function moveMap(evt,keyCode) {
	var map = mapData.map
	var party = mapData.party
	var x = party.x
	var y = party.y
	var lengthX = mapData.lengthX;
	var lengthY = mapData.lengthY;
	if(!keyCode){
		var keyCode = evt.which ? evt.which : event.keyCode;
	}
	switch (keyCode) {
		case 49:
        if (y + 1 < lengthY && x - 1 > -1) {
            if (map[y + 1][x - 1] != 1) {
                party.x -= 1;
                party.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 50:
        if (y + 1 < lengthY) {
            if (map[y + 1][x] != 1) {
                party.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 51:
        if (y + 1 < lengthY && x + 1 < lengthX) {
            if (map[y + 1][x + 1] != 1) {
                party.x += 1;
                party.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 52:
        if (x - 1 > -1) {
            if (map[y][x - 1] != 1) {
                party.x -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 53:
        console.log('stay')
        break;
    case 54:
        if (x + 1 < lengthX) {
            if (map[y][x + 1] != 1) {
                party.x += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 55 : 
        if (y - 1 > -1 && x - 1 > -1) {
            if (map[y - 1][x - 1] != 1) {
                party.x -= 1;
                party.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 56:
        if (y - 1 > -1) {
            if (map[y - 1][x] != 1) {
                party.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 57:
        if (y - 1 > -1 && x + 1 < lengthX) {
            if (map[y - 1][x + 1] != 1) {
                party.x += 1;
                party.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    default:
        return;
    }
    new Sight;
    //document.getElementById('nowTurn').value = turn;
	mapData.checkTurn(keyCode);
}

class CreateMapData{
	constructor(){
		do{
			mapData = new CreateMap();
			var check = new CanClearTest().clear;
		}while(check === 0);
		playerGroup = new InMapParty().character;
		new Sight;
		this.naviCheck();
		this.mapDrawCheck();
	}
	naviCheck(){
		const check = document.getElementById('NaviUse').checked;
		if(check){
			this.miniMap = new UseItem('IT9940000').check
		}
	}
	mapDrawCheck(){
		document.getElementById('Map').style.visibility = 'visible';
		if(this.miniMap){
			document.getElementById('MiniMap').style.visibility = 'visible';
	
		}
		else{
			document.getElementById('MiniMap').style.visibility = 'invisible';
		

		}

	}
}
