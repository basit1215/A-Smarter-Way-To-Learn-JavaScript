var userInp2 = prompt("Enter your Intermediate total Number:", "1100");
if(userInp2 > 1050){
   alert("Congratulations!! \n You got A1 Grade");
}
else if(userInp2 > 1000 && userInp2< 1050){
   alert("Excellent!! \n You got A Grade");
}
else if(userInp2 > 950 && userInp2 < 1000){
   alert("Good!! \n You got B Grade");
}
else if(userInp2 > 900 && userInp2 < 950){
   alert("Nice!! \n You got C Grade");
}
else if(userInp2 > 850 && userInp2 < 900){
   alert("Fair!! \n You got D Grade");
}
else{
   alert("Fail!!");
}