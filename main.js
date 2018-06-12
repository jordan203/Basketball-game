var player_name;
var team;

function Player(name)
{
	this.name = name;
	this.points = 0;
	this.rebounds = 0;
	this.assists = 0;
	this.blocks = 0;
	this.steals = 0;
	this.player_field_gold_p = 0;
	this.player_3_point_p = 0;

}
function Team(name)
{
	this.name = name;
	this.player_count = 15;
	this.players = [];
}

var player_html = "" + 
"<div class='player-info'>" +
"	<h3>Player Name</h3>" +
"	<span class='player-points'>0</span>" +
"	<span class='player-rebounds'>0</span>" +
"	<span class='player-assists'>0</span>" +
"	<span class='player-turnovers'>0</span> " +
"	<span class='player-steals'>0</span>" +
"	<span class='player-field-goal-p'>0</span>"+
"	<span class='player-3-point-p'>0</span>" +
"</div>"

var get_player_name = function()
{
	player_name = document.getElementById("name-input").value;

	var name_container = document.getElementById("name-enter");
	name_container.style.visibility = "hidden";

	setup_team();
}

//: New Function
var setup_team = function()
{
	team = new Team(player_name);
	for (var ii = 0; ii < team.player_count; ii += 1)
	{
		var name="Player-" + ii;
		team.players[ii] = new Player(name);  
	} 
}

var hide_element = function(id)
{
	var ele = document.getElementById(id);
	ele.style.visibility="hiden";

}

var show_element = function(id)
{
	var ele = document.getElementById(id);
	ele.style.visibility = "visible";
}