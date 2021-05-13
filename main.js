name_array=[];

function submit(){
    names=document.getElementById("name1").value;
    names2=document.getElementById("name2").value;
    names3=document.getElementById("name3").value;
    names4=document.getElementById("name4").value;

    name_array.push(names);
    name_array.push(names2);
    name_array.push(names3);
    name_array.push(names4);

    console.log(name_array);
    document.getElementById("emptydiv").innerHTML=name_array;

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";



    
}
function sort(){
    name_array.sort();
    console.log(name_array);
    document.getElementById("emptydiv").innerHTML=name_array;
}