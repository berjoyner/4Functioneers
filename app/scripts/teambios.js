$( document ).ready(function() {

var teamTmpl = $("#teamList").html();
var ourTeam = _.template(teamTmpl, teamBios);
$(".teammembers").append(ourTeam);

});//END DOCUMENT READY






