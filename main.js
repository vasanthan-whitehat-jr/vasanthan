var name = [
    "DAD",
    "MOM",
    "CHILD",
    "BABY",
    ];
    
    var images = [
    "https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170515455/79063313-father-dad-male-member-of-family-vector-illustration.jpg",
    "https://c8.alamy.com/comp/H6671D/beautiful-mother-family-member-H6671D.jpg" ,
    "https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Brother-512.png" ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjg2Ree5iinLQci-QeU7ikcbZoTOefHhicRtNnxEBuZkcaf_Gt70IfeYaASRpVQm-RXs&usqp=CAU"
    ];
    
    var i = 0;
    function nextslide() {
    document.getElenmentById("Family Member").innerHTML = name[i];
    document.getElenmentById("members.img").src = images[i];
    i++;
    }