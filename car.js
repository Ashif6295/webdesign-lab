m=0;
var y;
function start()
{
y=setInterval(run,10);

function run()
{
    m+=2;
    var x=document.getElementById("car");
    x.style.marginLeft=m+ 'px';
}

}
function stop()
{
 clearInterval(y)
}