var player_name;
var player_team, cpu_team;



// Template for our team
function Team(name)
{
	this.name = name;
	this.player_count = 15;
	this.players = [];
}

// Template for our players
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
	// Get the name of the player
	player_name = document.getElementById("name-input").value;

	// Hide the name setting of teh player
	var name_container = document.getElementById("name-enter");
	name_container.style.visibility = "hidden";

	// Create player team and display it on the layout
	player_team = setup_team(player_name);
	display_team(player_team, true);

	// Create the CPU team and display it on the layout
	cpu_team = setup_team("Computer");
	display_team(cpu_team, false);
}

var setup_team = function(team_name)
{
	// Create a new team using the template
	var team = new Team(team_name);

	// Create a new player list and add it to the teams
	for (var ii = 0; ii < team.player_count; ii += 1)
	{
		var name = "Player-" + ii; // For testing
		team.players[ii] = new Player(name);  
	} 

	// Return the new team to the variable outside the function
	return team;
}

var hide_element = function(id)
{
	// Hide the element
	var ele = document.getElementById(id);
	ele.style.visibility="hiden";

}

var show_element = function(id)
{
	// Display the element
	var ele = document.getElementById(id);
	ele.style.visibility = "visible";
}

var display_team = function(team, is_player)
{
	// Get the container for the team
	var ele;

	// Do we need the player container of cpu container?
	if (is_player)
	{
		// Get the player container
		ele = document.getElementById("player-container");
	} else {
		// Get the cpu container
		ele = document.getElementById("cpu-container");		
	}

	// Get the team list from the html
	ele = ele.getElementsByClassName('team')[0];

	// Reset the list so we don't keep adding by mistake
	ele.innerHTML = "";

	// Display the players in the box
	for (var i = 0; i < team.player_count; i ++)
	{
		// Get the player
		var player = team.players[i];

		// Create a new HTML list
		var player_html = "<li>" + player.name + "</li>";

		// Add the new player to the layout 
		ele.innerHTML += (player_html);
	}
}