

console.log("Inverted Pyramid");
console.log("");
var q=0;
for(var i=4;i>=1;i--)
{
    var pattern2='';
    for(var j=1;j<=q;j++) 
    pattern2+=' ';
    for(var k=1;k<2*i;k++) pattern2+='*';
    console.log(pattern2);
    q++;
}