// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import helloworld_artifacts from '../../build/contracts/Helloworld.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var Helloworld = contract(helloworld_artifacts);

window.setGreeting = function(greetings)
{
	
	var newGreeting = $('#setGreetings').val().toString();
	$('#setGreetings').val('');
	Helloworld.deployed().then(function(wish) {
		wish.setgreetings(newGreeting,{from:web3.eth.accounts[0]});
	});
		
	
	
	
}

window.onload = function()
{
	
	window.web3= new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
	Helloworld.setProvider(web3.currentProvider);
	
	Helloworld.deployed().then(function(wish) {
		wish.getgreetings.call().then(function(res){
			window.alert(res);
			
			
		});
		
		
	});
	
	
}


window.getGreetings = function(greetings)
{
	var User = $('#UName').val().toString();
	
	Helloworld.deployed().then(function(wish) {
		wish.getgreetings.call().then(function(res){
			window.alert(res +'  ' + User);
		});
	});
	
	
}



