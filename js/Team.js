class Team{
	constructor(){
		var name = "TEST"//new DOMSearch( 'id','InputTeamName').value
		if(!name || name === 'Input Name'){
			new DOMSearch( 'id','InputTeamName').value = 'Input Name'
			return
		}
		this.name = name
		this.funds = Math.round(Math.random() * 1000) + 5000
		this.character = {}
		new DOMSearch( 'id','InterPlayer').remove()
		new DOMSearch( 'id','PlayerView').style.display = 'block'
	}
	refreshTeamData(type){
		var team = playerTeam
		switch(type){
			case 'name' :
				new DOMSearch( 'id','TeamName').innerText = team.name
				break;
			case 'funds' :				
				new DOMSearch( 'id','TeamFunds').innerText = 'Funds : ' + team.funds
				break;
			default : 
				new DOMSearch( 'id','TeamName').innerText = team.name
				new DOMSearch( 'id','TeamFunds').innerText = 'Funds : '  + team.funds
				break;
							 }
	}
}