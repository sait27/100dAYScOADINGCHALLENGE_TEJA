let days=[]
for(let i=0;i<7;i++)
{
    if(i==0)
    {
        days.push("Start js course")
    }
    else if(i%2==1){
        days.push("Javascript course");
        
    }
    else 
    {
        days.push("Revise Last Weeks concepts")
    }
}

console.log("Weekly Tasks:")
let i=0
while(i<7)
{
    let day;
    switch(i)
    {
        case 0:
            day = 'Monday';
            break;
        case 1:
            day = 'Tuesday';
            break;
        case 2:
            day = 'Wednesday';
            break;
        case 3:
            day = 'Thursday';
            break;
        case 4:
            day = 'Friday';
            break;
        case 5:
            day = 'Saturday';
            break;
        case 6:
            day = 'Sunday';
            break;
    }
    console.log(`${day} : ${days[i]}`)
    i++;
}
