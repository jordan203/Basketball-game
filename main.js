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

var get_player_name = function()
{
	player_name = document.getElementById("name-input").value;

	var name_container = document.getElementById("name-enter");
	name_container.style.visibility = "hidden";
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