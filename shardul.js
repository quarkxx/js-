let string="";
for (let i=1;i<=5;++i)
{
    for (let k=i;k<=4;++k)
    {
        string +=" " ;                       
    }
    for (let j=i;j>=1;--j)
    {
        string +="*";
    }
    for (let l=2;l<i;++l)
    {
        string +="*";
    }
    string +="\n";
}
s=console.log(string);