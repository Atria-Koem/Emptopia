class Team{
	constructor(){
		var name = 'a'//document.getElementById('InputTeamName').value
		if(!name || name === 'Input Name'){
			document.getElementById('InputTeamName').value = 'Input Name'
			return
		}
		this.name = name
		this.funds = Math.round(Math.random() * 1000) + 500
		this.character = {}
		document.getElementById('InterPlayer').remove()
		document.getElementById('PlayerView').style.display = 'block'
	}
	refreshTeamData(type){
		var team = playerTeam
		switch(type){
			case 'name' :
				document.getElementById('TeamName').innerText = team.name
				break;
			case 'funds' :				
				document.getElementById('TeamFunds').innerText = 'Funds : ' + team.funds
				break;
			default : 
				document.getElementById('TeamName').innerText = team.name
				document.getElementById('TeamFunds').innerText = 'Funds : '  + team.funds
				break;
							 }
	}
}