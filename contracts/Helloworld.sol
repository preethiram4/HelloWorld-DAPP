pragma solidity ^0.4.18;
contract Helloworld {
    string greetings;
    
    function Helloworld() public
    {
        greetings="Hello";
    }
    
    
    function getgreetings() public constant returns (string greetingvalue)
    {
        return greetings;
    }
    
    function setgreetings(string newgreetings) public {
        greetings = newgreetings;
    }
}