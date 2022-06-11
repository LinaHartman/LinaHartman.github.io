//#######################################################################################################################################
//                                                              Todoo in Africa
//#######################################################################################################################################

//magic 

//intergrate items 

//xp

//adventure

//open Inventory with Icon in top left corner

//crit

//add combat attack, dodge, flee outside -> rest -> get quest -> discover Item -> discover store

//Add Twohanded support

//Ranged Weapon

//combat debugging

//clearing up code

//getting extended js files

//#######################################################################################################################################
//                                                          Testting
//#######################################################################################################################################
var ccount = 0;

function test1(){
    document.getElementById("devfeedback").innerHTML = "Hit = "+main_hit()
        
}
    
function test2(){
    document.getElementById("devfeedback").innerHTML = "DMG = "+main_atk()

}
    
function test3(){

 add_enemy(goblin, 1),add_enemy(orc, 2), add_enemy(ogre), add_enemy(giant)

}
    
function test4(){
       document.getElementById("devfeedback").innerHTML = "Int Check = " + player_check("int")
        console.log(int_mod)
}

function hide(bool){

    switch(bool, id){
    case true:
    document.getElementById(id).style.visibility = "hidden";
    bool=false;
    break;  

    case false: 
    document.getElementById(id).style.visibility = "visible";
    bool=true;
    break;
    }
}

//#######################################################################################################################################
//                                                          Tools && Setup
//#######################################################################################################################################

window.onload = setup;

function setup() {   
}

//ensures randomness >0
function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  
  //Sort Array
  function listsGetSortCompare(type, direction) {
    var compareFuncs = {
      'NUMERIC': function(a, b) {
          return Number(a) - Number(b); },
      'TEXT': function(a, b) {
          return a.toString() > b.toString() ? 1 : -1; },
      'IGNORE_CASE': function(a, b) {
          return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
    };
    var compare = compareFuncs[type];
    return function(a, b) { return compare(a, b) * direction; };
  }

function opacitybyid(id,opa){document.getElementById(id).style.opacity = opa}

function setopacitybyid(id, opa){
    document.getElementById(id).style.opacity = opa;
}

function uncheckbyid(id){
    document.getElementById(id).checked = false;
}

function checkbyid(id){
    document.getElementById(id).checked = true;
}

function getcheckboxbyid(id){
    return document.getElementById(id).checked;
}

function readbyid(id){
    return document.getElementById(id).innerHTML;
}

function innerhtmlbyid(id,content){
    document.getElementById(id).innerHTML =(content); 
}

function cap(number, cap){
if (number>=cap) {return cap;}else{return number}
}

//open link in new tab
function openinnewtab(url) {
    window.open(url, '_blank').focus();
}   

//write inner html from id
function innerhtmlbyid(id,content){document.getElementById(id).innerHTML =(content);}  

//Get the Itemnames inside of eqquipped inventroy from innnerhtml string 
function getchildidbyid(id){
    if (readbyid(id) != ""){return(returnname(readbyid(id)))}else{return false}
}

function returnname(text){
    let pstart = text.search("vent,")+5;
    let pstop = text.search('">')-1;
    result = text.substr(pstart, (pstop - pstart))
    return result;
}


//###################################a####################################################################################################
//                                                          Stat Bar
//#######################################################################################################################################

var PT = 0, GP=200, PP=0, HP=0, AC=0, MP =0;

var STAT_ARRAY=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0], str_mod, dex_mod, con_mod, int_mod, psy_mod, cha_mod;

var equipped_0 = false, equipped_1 = false, equipped_2 = false, equipped_3 = false, equipped_4 = false;

var PT, ACH, ACM, ACL, ACD, ARMORH = 0, ARMORM = 0, ARMORL = 0, Shield = 0, HPB = 0, PPB = 0, ACB = 0, MPB = 0, INV_SPACE = 0; STR_modifier = 0, DEX_modifier = 0;

setInterval(function updatev(){

    get_item_equipped();    
    calc_ac();


    
    //calc HP
    HP = 5+Math.ceil((STAT_ARRAY[2] / 2))+HPB;
  
    //calc PP
    PP = 5+Math.ceil((STAT_ARRAY[4] / 2))+PPB;

    //calc MP
    MP = 5+Math.ceil((STAT_ARRAY[3] / 2))+MPB;

    //Set Inventory Space by str

    //Set Skill
    
    str_mod = Math.floor(((STAT_ARRAY[0]-10)/2+train_mod[0]))
    dex_mod = Math.floor(((STAT_ARRAY[1]-10)/2+train_mod[1]))
    con_mod = Math.floor(((STAT_ARRAY[2]-10)/2+train_mod[2]))
    int_mod = Math.floor(((STAT_ARRAY[3]-10)/2+train_mod[3]))
    psy_mod = Math.floor(((STAT_ARRAY[4]-10)/2+train_mod[4]))
    cha_mod = Math.floor(((STAT_ARRAY[5]-10)/2+train_mod[5])) 


    //set Body properties
    SET_BODY =[gender, size, weight, fitness, face, hair_color, eye_color];

    //Set Stats
    for(i=0;i<12;i++){
        if(i<=5)
            {document.getElementById('stat_'+i).innerHTML = STAT_ARRAY[i];}
        else if(i==6)
            {document.getElementById('stat_'+i).innerHTML = AC;}
        else if(i==7)
            {document.getElementById('stat_'+i).innerHTML = HP;}
        else if(i==8)
            {document.getElementById('stat_'+i).innerHTML = PP;}
        else if(i==9)
            {document.getElementById('stat_'+i).innerHTML = GP;}
        else if(i==10)
            {document.getElementById('stat_'+i).innerHTML = MP;}
        else if(i==11)
            {document.getElementById('stat_'+i).innerHTML = PT;}
    }
}, 50);

//#######################################################################################################################################
//                                                            age & name
//#######################################################################################################################################

var playername, playerage=18;


function name_and_age(){
    if(inputage.value == ""||inputage.value < 18){playerage==18}else if(inputage.value>99){playerage=99;}else{playerage=inputage.value}

    if(inputname.value != ""||playername != inputname.value){playername=inputname.value;}   

    innerhtmlbyid("accept_age_name","Your name shall be "+playername+" and we will model your shell to be "+playerage+".")
    innerhtmlbyid("playername_2",playername)
    innerhtmlbyid("playerage_2",playerage)
}

//#######################################################################################################################################
//                                                              Sidebar
//#######################################################################################################################################
function openSide(id,width){
    document.getElementById(id).style.width = width;
}
function closeSide(id){
    document.getElementById(id).style.width = "0";
}

//#######################################################################################################################################
//                                                              Checks
//#######################################################################################################################################

var train_mod=[]; for(var i = 0; i<80; i++){train_mod[i]=0;}

//                  str,dex5
function player_safe(mod){

switch (mod){
    case "str":return str_mod+train_mod[6]   + mathRandomInt(1,20);
    case "dex":return dex_mod+train_mod[7]   + mathRandomInt(1,20); 
    case "con":return con_mod+train_mod[8]   + mathRandomInt(1,20);
    case "int":return int_mod+train_mod[9]   + mathRandomInt(1,20);
    case "psy":return psy_mod+train_mod[10]  + mathRandomInt(1,20);
    case "cha":return cha_mod+train_mod[11]  + mathRandomInt(1,20);
}
}

function player_check(mod){

switch (mod){
    case "str": return str_mod+train_mod[12] + mathRandomInt(1,20);
    case "dex": return dex_mod+train_mod[13] + mathRandomInt(1,20); 
    case "con": return con_mod+train_mod[14] + mathRandomInt(1,20);
    case "int": return int_mod+train_mod[15] + mathRandomInt(1,20);
    case "psy": return psy_mod+train_mod[16] + mathRandomInt(1,20);
    case "cha": return cha_mod+train_mod[17] + mathRandomInt(1,20);


    case "athletic":        return str_mod+train_mod[30] + mathRandomInt(1,20);
    case "stealth":         return dex_mod+train_mod[31] + mathRandomInt(1,20);
    case "sleightofhand":   return dex_mod+train_mod[32] + mathRandomInt(1,20);
    case "acrobatics":      return dex_mod+train_mod[33] + mathRandomInt(1,20);
    case "drinking":        return con_mod+train_mod[34] + mathRandomInt(1,20);
    case "history":         return int_mod+train_mod[35] + mathRandomInt(1,20);
    case "arcane":          return int_mod+train_mod[36] + mathRandomInt(1,20);
    case "religion":        return psy_mod+train_mod[37] + mathRandomInt(1,20);
    case "insight":         return psy_mod+train_mod[39] + mathRandomInt(1,20);
    case "nature":          return psy_mod+train_mod[40] + mathRandomInt(1,20);
    case "perception":      return psy_mod+train_mod[41] + mathRandomInt(1,20);
    case "seduce":          return cha_mod+train_mod[42] + mathRandomInt(1,20);
    case "threaten":        return cha_mod+train_mod[43] + mathRandomInt(1,20);
    case "performance":     return cha_mod+train_mod[44] + mathRandomInt(1,20);
    case "deception":       return cha_mod+train_mod[45] + mathRandomInt(1,20);
}
}

//#######################################################################################################################################
//                                                              Items
//#######################################################################################################################################

var            //dmg dice mod    hand      name/id     weight price, pic            ,   train
dagger         = [4,  1,"either","either", "dagger"      ,1 , 4, "pica/dagger_0.png", "none"],
shortsword     = [6,  1, "str", "either", "shortsword" ,12, 10, "pica/sword_01.png", "light"],
lightaxe       = [6,  1, "str", "either", "lightaxe"   ,12, 10, "pica/axe_01.png", "light"],
heavyaxe       = [8,  1, "str", "either", "heavyaxe"   ,18, 18, "pica/axe_01.png", "heavy"],
lighthammer    = [6,  1, "str", "either", "lighthammer"   ,17, 8, "pica/hammer_01.png", "light"],
heavyhammer    = [50, 8, "str", "either", "heavyhammer"   ,17, 8, "pica/hammer_01.png", "heavy"],

sword_1        = [6, 1, "str", "either", "heavyhammer"   ,17, 8, "pica/sword_1.png", "heavy"],
sword_2        = [6, 1, "str", "either", "heavyhammer"   ,17, 8, "pica/sword_2.png", "heavy"],
rapier_1       = [6, 1, "str", "either", "heavyhammer"   ,17, 8, "pica/degen.png", "heavy"],
lance_1        = [6, 1, "str", "either", "heavyhammer"   ,17, 8, "pica/lance_1.png", "heavy"],
morningstar_1  = [8, 1, "str", "either", "heavyhammer"   ,17, 8, "pica/morningstar_1.png", "heavy"],
flail_1        = [4, 3, "str", "both" ,  "heavyhammer"   ,17, 8, "pica/flail.png", "heavy"],
hammer_1       = [6, 1, "str", "either", "heavyhammer"   ,17, 8, "pica/hammer_3.png", "heavy"],
hammer_2       = [8, 1, "str", "either", "heavyhammer"   ,17, 8, "pica/hammer_2.png", "heavy"],
hammer_3       = [12,1, "str", "both",   "heavyhammer"   ,17, 8, "pica/hammer_1.png", "heavy"],
axe_1          = [6 ,1, "str", "either", "heavyhammer"   ,17, 8, "pica/axe_1.png", "heavy"],
axe_2          = [8, 1, "str", "either", "heavyhammer"   ,17, 8, "pica/axe_2.png", "heavy"],
axe_3          = [6, 2, "str", "both",   "heavyhammer"   ,17, 8, "pica/axe_3.png", "heavy"],

shield         = [0,  2,"false", "shield","shield_1"    ,8 , 10, "pica/shield_1.png", "shield"],
shield_1       = [0,  2,"false", "shield","shield_1"    ,8 , 10, "pica/shield_1.png", "shield"],
shield_2       = [0,  2,"false", "shield","shield_2"    ,8 , 10, "pica/shield_2.png", "shield"],
shield_3       = [0,  2,"false", "shield","shield_3"    ,8 , 10, "pica/shield_3.png", "shield"],
shield_4       = [0,  2,"false", "shield","shield_4"    ,8 , 10, "pica/shield_4.png", "shield"],
shield_5       = [0,  2,"false", "shield","shield_5"    ,8 , 10, "pica/shield_5.png", "shield"],
shield_6       = [0,  2,"false", "shield","shield_6"    ,8 , 10, "pica/shield_6.png", "shield"],
shield_7       = [0,  2,"false", "shield","shield_7"    ,8 , 10, "pica/shield_7.png", "shield"],
shield_8       = [0,  2,"false", "shield","shield_8"    ,8 , 10, "pica/shield_8.png", "shield"],

light_armor    = [0, 11,  "dex", "armor", "armorlight" , 5,  8, "pica/light_armor_1.png"],
light_armor_1  = [0, 11,  "dex", "armor", "armorlight" , 5,  8, "pica/light_armor_1.png"],
light_armor_2  = [0, 11,  "dex", "armor", "armorlight" , 5,  8, "pica/light_armor_2.png"],
light_armor_3  = [0, 11,  "dex", "armor", "armorlight" , 5,  8, "pica/light_armor_3.png"],
light_armor_4  = [0, 11,  "dex", "armor", "armorlight" , 5,  8, "pica/light_armor_4.png"],
light_armor_5  = [0, 11,  "dex", "armor", "armorlight" , 5,  8, "pica/light_armor_5.png"],
light_armor_6  = [0, 12,  "dex", "armor", "armorlight" , 5,  8, "pica/light_armor_6.png"],
light_armor_7  = [0, 13,  "dex", "armor", "armorlight" , 5,  8, "pica/light_armor_7.png"],
light_armor_8  = [0, 14,  "dex", "armor", "armorlight" , 5,  8, "pica/light_armor_8.png"],

medium_armor   = [0, 11,  "dex", "armor", "armormedium", 35, 14, "pica//medium_armor_1.png"],
medium_armor_1 = [0, 12,  "dex", "armor", "armormedium", 35, 14, "pica//medium_armor_1.png"],
medium_armor_2 = [0, 12,  "dex", "armor", "armormedium", 35, 14, "pica//medium_armor_2.png"],
medium_armor_3 = [0, 13,  "dex", "armor", "armormedium", 35, 14, "pica//medium_armor_3.png"],
medium_armor_4 = [0, 13,  "dex", "armor", "armormedium", 35, 14, "pica//medium_armor_4.png"],
medium_armor_5 = [0, 14,  "dex", "armor", "armormedium", 35, 14, "pica//medium_armor_5.png"],
medium_armor_6 = [0, 14,  "dex", "armor", "armormedium", 35, 14, "pica//medium_armor_6.png"],
medium_armor_7 = [0, 15,  "dex", "armor", "armormedium", 35, 14, "pica//medium_armor_7.png"],
medium_armor_8 = [0, 16,  "dex", "armor", "armormedium", 35, 14, "pica//medium_armor_8.png"],

heavy_armor    = [0, 13,  "false", "armor", "platearmor", 80, 35, "pica/heavy_armor_1.png"],
heavy_armor_1  = [0, 13,  "false", "armor", "platearmor", 80, 35, "pica/heavy_armor_1.png"],
heavy_armor_2  = [0, 14,  "false", "armor", "platearmor", 80, 35, "pica/heavy_armor_2.png"],
heavy_armor_3  = [0, 14,  "false", "armor", "platearmor", 80, 35, "pica/heavy_armor_3.png"],
heavy_armor_4  = [0, 15,  "false", "armor", "platearmor", 80, 35, "pica/heavy_armor_4.png"],
heavy_armor_5  = [0, 15,  "false", "armor", "platearmor", 80, 35, "pica/heavy_armor_5.png"],
heavy_armor_6  = [0, 16,  "false", "armor", "platearmor", 80, 35, "pica/heavy_armor_6.png"],
heavy_armor_7  = [0, 17,  "false", "armor", "platearmor", 80, 35, "pica/heavy_armor_7.png"],
heavy_armor_8  = [0, 18,  "false", "armor", "platearmor", 80, 35, "pica/heavy_armor_8.png"],

tattoo_1   =    [0, 12,  "dex",   "armor", "armorlight", 0, 35, "pica/tatto_armor_1.png"],

cape_1         = [0, 0,  "false",   "head", "cape", 2,  4, "pica/cape_1.png"],
cape_2         = [0, 0,  "false",   "head", "cape", 2,  4, "pica/cape_2.png"],
cape_3         = [0, 0,  "false",   "head", "cape", 2,  4, "pica/cape_3.png"],
cape_4         = [0, 0,  "false",   "head", "cape", 2,  4, "pica/cape_4.png"],

hem       = [0, 0,  "false",   "head", "helmet", 2,  4, "pica/medium_helmet_1.png"],
hat_2       = [0, 0,  "false",   "head", "helmet", 2,  4, "pica/hat_1.png" ],
hat_3       = [0, 0,  "false",   "head", "helmet", 2,  4, "pica/hat_2.png" ],
hat_4       = [0, 0,  "false",   "head", "helmet", 2,  4, "pica/light_helmet_2.png" ],

boots_1        = [0, 0,  "false",   "feet", "boots", 2,  5, "pica/medium_boots_1.png"],
boots_2        = [0, 0,  "false",   "feet", "boots", 2,  5, "pica/light_boots_1.png"],
boots_3        = [0, 0,  "false",   "feet", "boots", 2,  5, "pica/boots_medium_2.png"],
boots_4        = [0, 0,  "false",   "feet", "boots", 2,  5, "pica/heavy_boots_1.png"],


armorlight     = [0, 12,  "dex", "armor", "armorlight" , 5,  8, "pica/armor_light_03.png"],
armormedium    = [0, 15,  "dex", "armor", "armormedium", 35, 14, "pica//medium_armor_01.png"],
platearmor     = [0, 18,  "false", "armor", "platearmor", 80, 35, "pica/heavy_armor_02.png"],

helmet          = [0, 0,  "false",   "head", "helmet", 2,  4],
helmet_1       = [0, 0,  "false",   "head", "helmet", 2,  4, "pica/heavy_helmet_1.png"],
helmet_2       = [0, 0,  "false",   "head", "helmet", 2,  4, "pica/heavy_helmet_2.png" ],
helmet_3       = [0, 0,  "false",   "head", "helmet", 2,  4, "pica/heavy_helmet_3.png" ],
helmet_4       = [0, 0,  "false",   "head", "helmet", 2,  4, "pica/heavy_helmet_4.png" ],

boots          = [0, 0,  "false",   "feet", "boots", 2,  5];

//#######################################################################################################################################
//                                                              monster
//#######################################################################################################################################

    //   0        1 2 3 4 5 6      7   8    9      10  11  12
var //  name    ,stat             ,hit,atk, amt,   hp, ac, mod     
goblin=["goblin",8 ,14,10,10,8 ,8 , 4 ,  6, 1  ,    7, 12,  2  , "pica/goblin_01.png"  ],
orc   =["orc"   ,16,12,16,7 ,11,10, 5 , 12, 1  ,   15, 13,  3  , "pica/orc_06.png"     ],
ogre  =["ogre"  ,19, 8,16,5 , 7, 7, 6 ,  8, 2  ,   59, 11,  4  , "pica/ogre.png"       ],
giant =["giant" ,21, 8,19,5 , 9, 6, 8 ,  8, 6  ,  105, 13,  5  , "pica/Hill_Giant.png" ],
dragon=["dragon",23,12,21,18,15,17, 11,  10,6  ,  207, 19,  6  , "pica/dragon.png"     ],

bandit  =["bandit"  ,19, 8,16,5 , 7, 7, 6 ,  8, 2  ,  59, 11,  4  , "pica/ogre.png"       ],
thief   =["thief"   ,21, 8,19,5 , 9, 6, 8 ,  8, 6  , 105, 13,  5  , "pica/Hill_Giant.png" ],
assasin =["assasin" ,23,12,21,18,15,17, 11, 10,6  ,  207, 19,  6  , "pica/dragon.png"     ],
skeleton=["skeleton",19, 8,16,5 , 7, 7, 6 ,  8, 2  ,  59, 11,  4  , "pica/ogre.png"       ],
zombie  =["zombies" ,21, 8,19,5 , 9, 6, 8 ,  8, 6  , 105, 13,  5  , "pica/Hill_Giant.png" ],
wolf    =["wolf"    ,23,12,21,18,15,17, 11,  10,6  , 207, 19,  6  , "pica/dragon.png"     ];

//'<img id="'enemy[0]'" onclick="fight1(enemy[0])" src="enem.y[13]" class="goblin_idle" alt="">
//#######################################################################################################################################
//                                                              Calc AC 
//#######################################################################################################################################

function calc_ac(){
    //Calculate AC
    switch (equipped_3[4]){
        case false:           AC = 10 +dex_mod + ACB;                   break;
        case "armorlight":    AC = equipped_3[1] + dex_mod + ACB;           if(train_mod[51]!= true){AC=10+dex_mod}; break;
        case "armormedium":   AC = equipped_3[1] + cap(dex_mod,2) + ACB;    if(train_mod[52]!= true){AC=10}; break;        
        case "heavyarmor":    AC = equipped_3[1] + ACB;                     if(train_mod[53]!= true){AC=10}; break;
        case "magicarmor":    AC = equipped_3[1] + psy_mod;             return;
        default:              AC = 10 +dex_mod + ACB;                   break;
    }

    //helmet AC
    switch (equipped_0[3]){
        case "helmet": AC+=equipped_0[1]; break;
        default: break;
    }
    //boot AC
    
    switch (equipped_4[3]){
        case "boots": AC+=equipped_4[1];break;
        default: break;
    }

    
    //shield AC
    switch (equipped_2[3]){
        case "shield":if(train_mod[50]){AC+=equipped_2[1]}else{AC+=Math.floor(equipped_2[1]/2)}; break; 
        default: break;
    }
}

//#######################################################################################################################################
//                                                              Calc Attack
//#######################################################################################################################################

function main_hit(){
var roll=(mathRandomInt(1,20)+weapon_mod(equipped_1[2])+weapon_train(equipped_1[8]));
console.log("Treffer total "+roll+": 1d20 + Weapon Modifier"+weapon_mod(equipped_1[2])+" + Weapon Training "+weapon_train(equipped_1[8]));
return(roll);
}

function main_atk(){
var dmg = 0
if (equipped_1 == false){dmg = (1+str_mod)}else{for(i =0; i < equipped_1[1]; i++){dmg += mathRandomInt(1, equipped_1[0]);} dmg += weapon_mod(equipped_1[2])}
if (dmg<0){dmg=0;};
console.log("Damage total "+dmg+": Weapondice "+equipped_1[1]+"d"+equipped_1[0]+" + Weaponmodifier "+equipped_1[2])
return dmg}


function off_hit(){
var roll = (mathRandomInt(1,20)+weapon_mod(equipped_2[2])+weapon_train(equipped_2[8]))
//console.log("Hit OFF total "+roll+": 1d20 + Weapon Modifier like str/dex "+weapon_mod(equipped_2[2])+" + Weapon Training "+weapon_train(equipped_2[8]))
return (roll)
}

function off_atk(){
var dmg = 0
if (equipped_2 == false){dmg = (1+str_mod)}else{ for(i =0; i < equipped_2[1]; i++){dmg += mathRandomInt(1, equipped_1[0]);}}
if (dmg<0){dmg=0;};
//console.log("Damage OFF total "+dmg+": Weapondice "+equipped_2[1]+"d"+equipped_2[0]+"No weaponmodifier on Offhand")
return (dmg);
}

function weapon_train(train){
    switch(train){
        case "shield": return 0;
        case "light": if(train_mod[54]){return 2}else{return 0};
        case "heavy": if(train_mod[55]){return 2}else{return 0};
        case "none" : return 2;
        default: return 0;
    }
}

function weapon_mod(mod){
switch(mod){
    case    "str":return str_mod;
    case    "dex":return dex_mod;
    case    "con":return con_mod;
    case    "int":return int_mod;
    case    "psy":return psy_mod;
    case    "cha":return cha_mod;
    case"warlock":return psy_mod;
    case "wizard":return int_mod;
    case "magica":return Math.max(int_mod, psy_mod);
    case "either":return Math.max(str_mod, dex_mod);
    case  "fasle":return 0;
    default: return 0;
}
    
}

//#######################################################################################################################################
//                                                              Equipment 
//#######################################################################################################################################


function get_item_equipped(){
    //helmet
    switch (getchildidbyid('head')){
        case    false: equipped_0 = false;break;
        case "helmet": equipped_0 = helmet;break;
        default      : equipped_0 = false;break;
    }
     

    //Main Hand
    switch (getchildidbyid('main')){
        case false:         equipped_1 = false;         break;
        case "dagger":      equipped_1 = dagger;        break;
        case "shortsword":  equipped_1 = shortsword;    break;
        case "lightaxe":    equipped_1 = lightaxe;      break;
        case "heavyaxe":    equipped_1 = heavyaxe;      break;
        case "lighthammer": equipped_1 = lighthammer;   break;
        case "heavyhammer": equipped_1 = heavyhammer;   break;
        case "rapier":      equipped_1 = rapier;        break;
        case "longsword":   equipped_1 = longsword;     break;
        default:            equipped_1 = false;         break;
    }

    //Off Hand
    switch (getchildidbyid('off')){
        case false:         equipped_2 = false;         break;
        case "dagger":      equipped_2 = dagger;        break;
        case "shortsword":  equipped_2 = shortsword;    break;
        case "lightaxe":    equipped_2 = lightaxe;      break;
        case "heavyaxe":    equipped_2 = heavyaxe;      break;
        case "lighthammer": equipped_2 = lighthammer;   break;
        case "heavyhammer": equipped_2 = heavyhammer;   break;
        case "rapier":      equipped_2 = rapier;        break;
        case "longsword":   equipped_2 = longsword;     break;

        case "shield_1":    equipped_2 = shield;        break;
        case "shield_2":    equipped_2 = shield;        break;
        case "shield_3":    equipped_2 = shield;        break;
        case "shield_4":    equipped_2 = shield;        break;
        case "shield_5":    equipped_2 = shield;        break;
        case "shield_6":    equipped_2 = shield;        break;
        case "shield_7":    equipped_2 = shield;        break;
        case "shield_8":    equipped_2 = shield;        break;
        default:            equipped_2 = false;         break;    
        }


    //Armor
    switch (getchildidbyid('armor')){
        case "armorlight":  equipped_3 = armorlight;    break;
        case "armormedium": equipped_3 = armormedium;   break;
        case "platearmor":  equipped_3 = platearmor;    break;
        default:            equipped_3 = false;         break; 
        }


    //Boots
    switch (getchildidbyid('feet')){
        case false:  equipped_4 = false; break; 
        case "boots":equipped_4 = boots; break; 
        default:     equipped_3 = false; break; 
        }
}
 

//#######################################################################################################################################
//                                                   Fight a goblin
//#######################################################################################################################################
var enemy_0, enemy_1, enemy_2, enemy_3, enemy_4, enemy_5, enemy_6, enemy_7, player_hp = 0, dcount, lock_04 = true;
//setTimeout(player_rest('longrest'),900);
//setTimeout(player_hp_bar,1000);

//         0        1 2 3 4 5 6      7   8    9      10  11  12 , 13
//         name   ,stat             ,hit,atk, amt,   hp, ac, mod, PICADRESSE    
//goblin=["goblin",8 ,14,10,10,8 ,8 , 4 ,  6, 1  ,    7, 12,  2 , "pic.png"],
    //setTimeout(, 3000, enemy);


//cheat healthgain
function add_hp(number){player_hp+=number; player_hp_bar()}

//let people change their avatar
function changepicture(event){alert(event)}

//Full Attack cycle -------------------------------------------------
function attack(enemy){

    if (lock_04==true){
    lock_04 = false;

    var timer = 0; 

    //starts combat animations
    call_animations(enemy);

    timer+=800;

    //Main_hand attack
    setTimeout(main_hand_attack, timer, enemy);

        timer+=800

        //check if dead
        setTimeout(remove_enemy_if_dead, timer, enemy);

        timer+=500

        //enemy attack
        setTimeout(enemy_attack,timer , enemy);

    timer+=1500

    //off hand attacks
    if (equipped_2 != shield){setTimeout(off_hand_attack, timer, enemy);}
    
        //check if dead
        timer+=800
        setTimeout(remove_enemy_if_dead, timer, enemy);

    //make sure player can't stack attacks
    setTimeout(setlock_04,timer);
    }
}
// -----------------------------------------------------------


// Animation Cycle

    //coordinate attack animations
    function call_animations(enemy){

    var timer = 0;

    //main atk player
    setTimeout(changeclassbyidplayer, timer, "player_char", "enemy_atk_2");
    setTimeout(changeclassbyidplayer, timer, "player_bar", "bar_atk");

    timer+=1600;

    setTimeout(changeclassbyidplayer, timer, "player_char", "player_idle");
    setTimeout(changeclassbyidplayer, timer, "player_bar", "");

        

        //animate atk of enemy
        setTimeout(changeclassbyidenemy, timer, enemy[30], "enemy_atk_1", enemy);
        setTimeout(changeclassbyidenemy, timer, "hp"+enemy[30], "enemy_atk_1", enemy);
    
        timer+=1000
    
        //animate atk of enemy
        setTimeout(changeclassbyidenemy, timer, enemy[30], "enemy_idle", enemy);
        setTimeout(changeclassbyidenemy, timer, "hp"+enemy[30], "", enemy);
    


    //if offhandattack animate offhandattack
    if (equipped_2 != shield){
    timer+=200;
    setTimeout(changeclassbyidplayeroff, timer, "player_char", "enemy_atk_2", enemy);
    setTimeout(changeclassbyidplayeroff, timer, "player_bar", "bar_atk", enemy);

    timer+=1600;

    setTimeout(changeclassbyidplayeroff, timer, "player_char", "player_idle", enemy);
    setTimeout(changeclassbyidplayeroff, timer, "player_bar", "", enemy);
    } 
    }

    //only offatk if both alive
    function changeclassbyidplayeroff(id, name, enemy){if(player_hp>0 && enemy[10]>0)document.getElementById(id).className = name;}
    
    //animation for enemy
    function changeclassbyidenemy(id, name, enemy){if(enemy[10]>0)document.getElementById(id).className = name;}    

    //animation for player
    function changeclassbyidplayer(id, name){if(player_hp>0)document.getElementById(id).className = name;}

    //prevents multiple overlaying attacks
    function setlock_04(){lock_04=true;}

    //main hand attack
    function main_hand_attack(enemy){if(main_hit()>=enemy[11] && player_hp>0){dmg = main_atk();enemy[10]-=dmg,updated_hp_enemy(enemy), console.log("Hit Main!  Damage: "+dmg+" HP: " +enemy[10])}else if(player_hp>0){console.log("Miss Main!")}}

    //offhand attack
    function off_hand_attack(enemy){if(equipped_2 != shield && player_hp>0){if(off_hit()>=enemy[11]){dmg = off_atk();enemy[10]-=dmg,updated_hp_enemy(enemy),console.log("Hit Off! Damage:"+dmg+"  HP: "+enemy[10])}else if(player_hp>0){console.log("Miss Off!")}}}

    //adjust HP and remove enemy on death
    function remove_enemy_if_dead(enemy){if(enemy[10]<1)remove_enemy(enemy), console.log("Enemy Dead!");}

    //enemy attack
    function enemy_attack(enemy){
        dmg = 0, msg ="";
        //check if enemy alive
        if (enemy[10]>0){
        //actual attack
        if((mathRandomInt(1,20)+enemy[7])>=AC){for (i = 0; i<enemy[9];i++){dmg+=mathRandomInt(1,enemy[8])}; dmg+=enemy[12]; msg+="Enemy Hit! Damage: "+dmg}else{msg+="Enemy Miss! "}
        //player benefits
        player_hp-=dmg; msg+=" HP: "+player_hp; if(player_hp<1){player_hp=0; msg = "The Enemy killed you!"}; player_hp_bar(); console.log(msg);}
    }


//innerhtmlbyid(id,content)


//take breaks for hp, set seperate var for hp combat
function player_rest(option){
    sleepmod=con_mod; if(sleepmod<0)sleepmod=0;
    switch(option){
        case "shortrest":   player_hp += mathRandomInt(1,6)+   sleepmod ; if(HP<player_hp)player_hp=HP;break;
        case "longrest":    player_hp += mathRandomInt(3,6)+(3*sleepmod); if(HP<player_hp)player_hp=HP;break;
    }
}


//remove all enemies
function remove_enemy_all(){
    var parent = document.getElementById('monster_bar');
    var children = Array.from(parent.children);
    var ids = children.map(element => {return element.id;});

    for (i=0; i<children.length; i++){
    childtoremove = document.getElementById(ids[i]);
    childtoremove.parentNode.removeChild(childtoremove);

    monstertoremove = document.getElementById("hp"+ids[i]);
    monstertoremove.parentNode.removeChild(monstertoremove);}
}

//remove enemy(hpbar, bar)
function remove_enemy(enemy){
    childtoremove = document.getElementById(enemy[30]);
    childtoremove.parentNode.removeChild(childtoremove);

    monstertoremove = document.getElementById("hp"+enemy[30]);
    monstertoremove.parentNode.removeChild(monstertoremove);

    enemy[0] = false, enemy[10]= 0;
}

function player_hp_bar(){

    var php = "";//create HP Bar
    for (i = 1; i<=(Math.floor(player_hp/100));i++)      {php+="🟧"};   
    for (i = 1; i<=(Math.floor(player_hp%100/10));i++)   {php+="🟪"};
    for (i = 1; i<=(Math.floor(player_hp%10));i++)       {php+="🟥"};
    
    //Check if player dead
    if (player_hp == 0){php="💀"};

    //Write HP Bar for player
    innerhtmlbyid("player_bar",php);

}


//update hp bar of single enemy
function updated_hp_enemy(enemy){

    hp="💀";
    for (i = 1; i<=(Math.floor(enemy[10]/100));i++)      {hp+="🟧"};
    for (i = 1; i<=(Math.floor(enemy[10]%100/10));i++)   {hp+="🟪"};
    for (i = 1; i<=(Math.floor(enemy[10]%10));i++)       {hp+="🟥"};
    hp+="💀";

    document.getElementById("hp"+enemy[30]).innerHTML = '    '+ hp;
}


function add_enemy(type){
    
    //check free spot to be apointed
    var parent = document.getElementById('monster_bar');
    var children = Array.from(parent.children);
    var ids = children.map(element => {return element.id;});


  //Makes sure connects to end of array!
    ids[ids.length]="end"
    for (dcount=0;dcount == ids[dcount];dcount++){nr = dcount};
    nr=dcount;    

    //calc added hp bar    
        hp="💀";
        for (i = 1; i<=(Math.floor(type[10]/100));i++)      {hp+="🟧"};
        for (i = 1; i<=(Math.floor(type[10]%100/10));i++)   {hp+="🟪"};
        for (i = 1; i<=(Math.floor(type[10]%10));i++)       {hp+="🟥"};
        hp+="💀";
    //write hpbar
        document.getElementById("monster_hp_bar").innerHTML +=("<label id='hp"+nr+"'>"+"         "+hp+"</label>");
    //write monster bar 
        document.getElementById("monster_bar").innerHTML += '<img id="'+nr+'" onclick="attack(enemy_'+nr+')" src="'+type[13]+'" class="enemy_idle" alt="">'
    
    //make copy of monster for manipulation
    switch(nr){
        case 0: enemy_0 = type, enemy_0[30] = "0"; break;
        case 1: enemy_1 = type; enemy_1[30] = "1"; break;
        case 2: enemy_2 = type; enemy_2[30] = "2"; break;
        case 3: enemy_3 = type; enemy_3[30] = "3"; break;
        case 4: enemy_4 = type; enemy_4[30] = "4"; break;
        case 5: enemy_5 = type; enemy_5[30] = "5"; break;
        case 6: enemy_6 = type; enemy_6[30] = "6"; break;
        case 7: enemy_7 = type; enemy_7[30] = "7"; break;
    }
}

//#######################################################################################################################################
//                                                              Dragg & Dropp
//#######################################################################################################################################

var dragitem, inventoryslots=[], sold =[0, 0, 0, 0, 0, 0, 0, 0];

for (i =  0; i < 24; i++){inventoryslots[i]="inventory_"+i };

function allowDrop(ev) {
    ev.preventDefault();
    
}
  
function drag(ev, item) {

    ev.dataTransfer.setData("text", ev.target.id);
    dragitem = item;
    //console.log(item);
    //console.log(dragitem);

}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //console.log(ev.target.id);

    //sell Item
   if (ev.target.id == "inventory_23"){GP+=dragitem[6];dragitem = sold; ev.target.appendChild(document.getElementById(data));document.getElementById("inventory_23").innerHTML = 'sell'}

   //Move Item
   if (getpalce(ev.target.id)){ev.target.appendChild(document.getElementById(data));}

}

function getpalce(targetid){


    if   (document.getElementById(targetid).innerHTML == 0){

        for(i=0; i<22;i++){
            if (targetid == "inventory_"+i) return true
        }
        console.log(targetid);
        console.log(dragitem);


    switch (targetid){
        case "head":  if(dragitem[3]=="head")                       {return true}else{return false;}
        case "off":   if(dragitem[3]=="off"   || 
                         dragitem[3]=="either"||
                         dragitem[3]=="shield")                     {return true}else{return false;}
        case "main":  if(dragitem[3]=="either"|| 
                         dragitem[3]=="main")                       {return true}else{return false;}
        case "armor": if(dragitem[3]=="armor")                      {return true}else{return false;}
        case "feet":  if(dragitem[3]=="feet")                       {return true}else{return false;}

    }    

}  else {return false;}

}


//#######################################################################################################################################
//                                                              Buy/Sell
//#######################################################################################################################################
var itemcount = 0;

function buy_item(item){

//Look if enough money
if(item [6]>GP){console.log("Not enough Money dear Friend"); return}  
if(free_inv_slot == false){console.log("No free space"); return}

    //dagger= [4,  1, "dex", "either", "Dagger"  ,1 , 10, "pica/ dagger_01.png"],
    var itemtext = '<img src="'+item[7]+'" class="pic_inventory" draggable="true" id="'+item[4]+itemcount+'"ondragstart="drag(event,'+item[4]+')">';
    //iterate items
    itemcount++;
    //Add Item, 
    console.log(free_inv_slot())
    console.log(itemtext)
    document.getElementById(free_inv_slot()).innerHTML = itemtext;
    GP -= item[6]
   // if (getcheckboxbyid('openinvonbuy')==false) 
   openSide('myInventory', '500px');
}

function free_inv_slot(){
    //check if enough slots are free, if there arent return false
    for (i =  0; i < 24; i++){if(i<23&&document.getElementById(inventoryslots[i]).innerHTML == 0){return inventoryslots[i];}else if(i==23){return false}}

} 

//#######################################################################################################################################
//                                                              Lootbox
//#######################################################################################################################################
var lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lb10,lb11, lb12, loot_box_array =[lb1,lb2,lb3,lb4,lb5,lb6,lb7,lb8,lb9,lb10,lb11,lb12], lock_01="0", active="";


function lootbox(b){

        //deactibvate old benefits
        if (active ==1 ||active ==2||active ==3){
            document.getElementById("intro_0"+active).style.opacity = "1";
            PT -= loot_box_array[active];
            GP -=  loot_box_array[(active+3)];
            
            if ((loot_box_array[(active+6)])<7)
            STAT_ARRAY[(loot_box_array[(active+6)])-1] -= loot_box_array[active+9];
            else{
                switch (loot_box_array[(active+6)]){
                    case 7:  ACB -=  loot_box_array[(active+9)];      break;
                    case 8:  HPB -=  loot_box_array[(active+9)]*2;    break;
                    
                    
                    case 10: GP -=  loot_box_array[(active+9)]*18;    break;
                    case 11: PT -=  loot_box_array[(active+9)]*18;    break;
                    case 12:                                          break; 
                }
            }
        }
    
  
    for (let i = 1; i < 14; i++) {

        //Firsttimesetup
        if (lock_01=="0"){
            if (i<4)
            {loot_box_array[i] = (mathRandomInt(120,240)+mathRandomInt(60,120)+mathRandomInt(30,60));}
            else if (i<7)
            {loot_box_array[i] = ( 10*(mathRandomInt(1,4)+mathRandomInt(1,4)+mathRandomInt(1,4)+mathRandomInt(1,4)+mathRandomInt(1,4)));}
            else if (i<10)
            {loot_box_array[i] = (mathRandomInt(1,12));} 
            else if (i<13)
            {loot_box_array[i] = (mathRandomInt(1,2));} 
            else if (i=13)
            {lock_01="1";}
            else{1==1}
        }
    }


    //activate new benefits
    PT += loot_box_array[b];
    GP +=  loot_box_array[(b+3)];

    if  ((loot_box_array[(b+6)])<7) 
    {STAT_ARRAY[(loot_box_array[(b+6)]-1)]+=loot_box_array[b+9]}
    else{
        switch (loot_box_array[(b+6)]){
            case 7:  ACB +=  loot_box_array[(b+9)];      break;
            case 8:  HPB +=  loot_box_array[(b+9)]*2;    break;
            case 9:  PPB +=  loot_box_array[(b+9)]*2;    break;
            case 10: GP  +=  (loot_box_array[(b+9)])*18; break;
            case 11: PT  +=  loot_box_array[(b+9)]*18;   break;
            case 12:                                     break;
        }
    }
  

    //reveal and opacitiy pic
    document.getElementById("intro_0"+b).src="pica/tressure_0"+b+".jpg";
    document.getElementById("intro_0"+b).style.opacity = "0.5";
    document.getElementById("intro_0"+b).className = 'pic_0013';
        
    //Show benefit on Div
    document.getElementById("lootbox"+b).innerHTML = "Points: "+(loot_box_array[b])+"<br> Gold Coins:"+loot_box_array[(b+3)]+"<br>"; 

   //check ran benefit
    var text = ""
    var i=2
    switch (loot_box_array[(b+6)]){
        case 1: text = "STR: +"             +loot_box_array[(b+9)];     break;
        case 2: text = "DEX: +"             +loot_box_array[(b+9)];     break;
        case 3: text = "CON: +"             +loot_box_array[(b+9)];     break;
        case 4: text = "INT: +"             +loot_box_array[(b+9)];     break;
        case 5: text = "PSY: +"             +loot_box_array[(b+9)];     break;
        case 6: text = "CHA: +"             +loot_box_array[(b+9)];     break;
        case 7: text = "AC: +"              +loot_box_array[(b+9)];     break;
        case 8: text = "HP: +"              +loot_box_array[(b+9)]*2;   break;
        case 9: text = "PP: +"              +loot_box_array[(b+9)]*2;   break;
        case 10:text = "Extra Gold "        +loot_box_array[(b+9)]*18;  break;
        case 11:text = "Extr Points "       +loot_box_array[(b+9)]*18;  break;
        case 12:text = "";                                              break;
    }

    //Show benefit on Div
    document.getElementById("lootbox"+b).innerHTML = "Points: "+(loot_box_array[b])+"<br> Gold Coins:"+loot_box_array[(b+3)]+"<br>"+text; 
   
    //set flagg for next iteration
    active=b;
}


//#######################################################################################################################################
//                                                   Either Choose PB or Roll
//#######################################################################################################################################

var choose_0010 = 0, lock_02 = false;

function choose_pb_roll(i){

    if (i==2)
    {       
         //if onerun needed
        if (lock_02 == false&&choose_0010 == 0)
            {
                lock_02=true

                for(i=0; i<6; i++)  
                {       
                    STAT_ARRAY[i]+=8;
                }
            }
                

        //buy
        document.getElementById("choose_0002").style.opacity = "0.5";
        document.getElementById("choose_0001").style.opacity = "1";
        
        //Readd the bought points
        if(choose_0010==2)
        {
            PT -= 50;
            for(i=0; i<6; i++)
            {
                STAT_ARRAY[i]+=stat_pb[i];
            }
            for(i=0; i<6; i++)  
            {       
                STAT_ARRAY[i]-=OLD_STAT_ARRAY[i] 
            }
        }
        //choose Buy
        choose_0010 = 1;
    }                                                               //buy
    else if (i==1)//===================================================================================================================================
    {                                                               //roll
        //roll
        document.getElementById("choose_0001").style.opacity = "0.5";
        document.getElementById("choose_0002").style.opacity = "15";
        PT += 50;
        



        
        //Remove buypoints
        if(choose_0010== 1)
        {
            for(i=0; i<6; i++)
            {
            STAT_ARRAY[i]-=stat_pb[i];
            }

            for(i=0; i<6; i++)  
            {       
                STAT_ARRAY[i]+=OLD_STAT_ARRAY[i];
            }
        }
        //choose roll
        choose_0010 = 2;
    }
}





//#######################################################################################################################################
//                                                          Roll Stat
//#######################################################################################################################################

var STAT_ROLL, STAT_ROLL_ARRAY=[], OLD_STAT_ARRAY=[0, 0, 0, 0, 0, 0];

var roll_nr = "1";

//Rollstat
function rollstat() 
{   
    if (choose_0010==2){

        //Roll
        if (roll_nr>1)
            {PT-=10*roll_nr;}

        var i = 0;
        for (var count = 0; count < 6; count++) {
            STAT_ARRAY[i]-=OLD_STAT_ARRAY[i];
            STAT_ROLL_ARRAY = [mathRandomInt(1, 6), mathRandomInt(1, 6), mathRandomInt(1, 6), mathRandomInt(1, 6)].slice().sort(listsGetSortCompare("NUMERIC", -1));
            STAT_ROLL = STAT_ROLL_ARRAY[0]+STAT_ROLL_ARRAY[1]+STAT_ROLL_ARRAY[2] +(STAT_ROLL_ARRAY[3] = 0);
            STAT_ARRAY[i] += STAT_ROLL;
            OLD_STAT_ARRAY[i] = STAT_ROLL;

            //Display Stat
            document.getElementById("stat_0"+i).innerHTML = STAT_ROLL;
            i++;
        }
        roll_nr++;
        document.getElementById("button_1001").innerHTML = "Cost: "+(10*roll_nr); 
    }
}   

//#######################################################################################################################################
//                                                          POINT BUY
//#######################################################################################################################################

var str_pb =8, dex_pb=8, con_pb=8, int_pb=8, psy_pb=8, cha_pb=8, points_pb = 27, stat_pb=[str_pb, dex_pb, con_pb, int_pb, psy_pb, cha_pb];

function point_buy(pb_i, pb_gain){
if (choose_0010==1){ 


//add
    if(pb_gain==true){
        if(stat_pb[pb_i] == 15)
            {bought=0;}
        else if(stat_pb[pb_i] < 13 && points_pb>0){
            points_pb -= 1;
            stat_pb[pb_i] +=1;
            bought=1}
        else if(stat_pb[pb_i] >= 13 && points_pb>1){
            points_pb -= 2; 
            stat_pb[pb_i] +=1;
            bought=1;}
    };

    //subtract
    if (pb_gain==false){
        if(stat_pb[pb_i] == 8)
            {bought=0;}
        else if(stat_pb[pb_i] <= 13){
            points_pb += 1
            stat_pb[pb_i] -=1;
            bought = -1} 
        else if(stat_pb[pb_i] >= 14 && stat_pb[pb_i] >8){
            points_pb += 2; 
            stat_pb[pb_i] -=1;
            bought = -1;}

    };

    STAT_ARRAY[pb_i] += bought;

    if((stat_pb[pb_i])<13)
        {var lkj = "Cost: "+1;}
    else if((stat_pb[pb_i])<15)
        {lkj = "Cost: "+2;}
    else if((stat_pb[pb_i])==15)
        {lkj = "Maxed out";}
    else
        {alert("error in calculating passive cost, nonimportant");}

    document.getElementById("stat_pt_buy_"+pb_i).innerHTML = stat_pb[pb_i];
    document.getElementById("pb_cost_"+pb_i).innerHTML =lkj;
    document.getElementById("pb_stat").innerHTML = "Points Pool:"+points_pb;
    }
}



//#######################################################################################################################################
//                                                          Race
//#######################################################################################################################################

var RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0], remember_0001=0;

function setrace(a){
//var a = document.querySelector('input[name=race]:checked').id;

    for(i=0;i<7;i++){
        if(i<6)
        {STAT_ARRAY[i] -= RAC_ARRAY[i];}
        else if(i==6)
        {PT -= RAC_ARRAY[6];};
    }

switch(a){
case 0:RAC_ARRAY =  [1, 1, 1, 0, 0, 0, 0]; break;
case 1:RAC_ARRAY =  [0, 1, 0, 1, 1, 0, 0]; break;
case 2:RAC_ARRAY =  [0, 1, 0, 0, 1, 1, 0]; break;
case 3:RAC_ARRAY =  [0, 0, 0, 2, 0, 1, 0]; break;
case 4:RAC_ARRAY =  [0, 2, 0, 0, 0, 0, 0]; break;
case 5:RAC_ARRAY =  [3, 0, 0, 0, 0, -1, 0]; break;
case 6:RAC_ARRAY =  [0, 1, 0, 2, 0, 0, 0]; break;
case 7:RAC_ARRAY =  [1, 0, 2, 0, 0, 0, 0]; break;
case 8:RAC_ARRAY =  [0, 0, 0, 0, 0, 0, 0]; break;
case 9:RAC_ARRAY =  [1, 1, 0, 1, 2, 2,-60]; break;
case 10:RAC_ARRAY = [1, 0, 1, 2, 1, 2,-60]; break;
case 11:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 12:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 13:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 14:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 15:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 16:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 17:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 18:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 19:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 20:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 21:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 22:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 23:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
}

document.getElementById("rac_"+remember_0001).style.opacity = "1";
if(a!=23){document.getElementById("rac_"+a).style.opacity = "0.5";}

//remember rac_x to reset the opacity
remember_0001 = a;


    for(i=0;i<7;i++){
        if(i<6) {STAT_ARRAY[i] += RAC_ARRAY[i];}
        else if(i==6){PT += RAC_ARRAY[6];}
    }

}


//#######################################################################################################################################
//                                                          Set body
//#######################################################################################################################################

var typenew, typeold, b=0, c=3, d=7, e=11, f=15, g=19, h=27, i=35;

var gender=false, size=false, weight=false, fitness=false, face=false, hair_color=false, eye_color=false, SET_BODY =[gender, size, weight, fitness, face, hair_color, eye_color];

function setbody(a){
    
    switch(a){
        case 0: gender="female";        break;
        case 1: gender="male";          break;
        case 2: gender="genderless";    break;

        case 3: size="small";           break;
        case 4: size="avarage";         break;
        case 5: size="tall";            break;

        case 6: weight="skinny";        break;
        case 7: weight="avarage";       break;
        case 8: weight="chubby";        break;

        case 9:  fitness="untrained";   break;
        case 10: fitness="avarage";     break;
        case 11: fitness="fit";         break;

        case 12: face="manly";          break;
        case 13: face="masculin";       break;
        case 14: face="neutral";        break;
        case 15: face="feminine";       break;
        case 16: face="girly";          break;

        case 17: hair_color="blond";    break;
        case 18: hair_color="brown";    break;
        case 19: hair_color="black";    break;
        case 20: hair_color="red";      break;
        case 21: hair_color="violet";   break;
        case 22: hair_color="pink";     break;
        case 23: hair_color="green";    break;
        case 24: hair_color="white";    break;

        case 25: eye_color="blue";      break;
        case 26: eye_color="brown";     break;
        case 27: eye_color="green";     break;
        case 28: eye_color="grey";      break;
        case 29: eye_color="white";     break;
        case 30: eye_color="red";       break;
        case 31: eye_color="yellow";    break;
        case 32: eye_color="asynch";    break;

        default: alert("there was non selected"); break;
    }

    //oppacity buttons for each radio, change to check radio for selected in furture?

    switch (a){
        case 0:
        case 1:
        case 2:
            typeold  = "bod_"+b;
            typenew  = "bod_"+a;
            b=a;
            break;

        case 3: 
        case 4: 
        case 5:
            typeold  = "bod_"+c;
            typenew  = "bod_"+a;
            c=a;
            break;

        case 6: 
        case 7: 
        case 8: 
            typeold  = "bod_"+d;
            typenew  = "bod_"+a;
            d=a;
            break;
        
        case 9: 
        case 10: 
        case 11:  
            typeold  = "bod_"+e;
            typenew  = "bod_"+a;
            e=a;
            break;
        case 12: 
        case 13: 
        case 14: 
        case 15: 
        case 16: 
            typeold  = "bod_"+f;
            typenew  = "bod_"+a;
            f=a;
            break;

        case 17: 
        case 18: 
        case 19:
        case 20:    
        case 21: 
        case 22: 
        case 23: 
        case 24: 
            typeold  = "bod_"+g;
            typenew  = "bod_"+a;
            g=a;
            break;
        
        case 25: 
        case 26: 
        case 27: 
        case 28: 
        case 29: 
        case 30: 
        case 31: 
        case 32: 
            typeold  = "bod_"+h;
            typenew  = "bod_"+a;
            h=a;
            break;   
        
        default: alert("there was non selected"); break;
    }
    document.getElementById(typeold).style.opacity = "1";
    document.getElementById(typenew).style.opacity = "0.5";
}

//#######################################################################################################################################
//                                                          Set mind
//#######################################################################################################################################

var SET_MIND =[], lock_03="0";

function setmind(c){
      

    if (lock_03=="0"){
        for (var i = 0; i <= 60; ++i) {
            SET_MIND[i] = "m"+i;
            SET_MIND[i]="0";
        }
        lock_03 = 1;
    }

    if(SET_MIND[c] == "false" || SET_MIND[c]=="0")
    {
        SET_MIND[c]="true";
        document.getElementById(("m_"+c)).style.opacity = "0.5";
        PT-=20;
    }

    else if (SET_MIND[c] == "true")
    {
        SET_MIND[c]="false";
        document.getElementById("m_"+c).style.opacity = "1";
        PT+=20;
    }   
    
    
    return SET_MIND;
}

//#######################################################################################################################################
//                                                            Training
//#######################################################################################################################################

function settrain(a){

    price = 0;

    switch(a){
        case 0: var price = 35; break;  
        case 1: if(getcheckboxbyid("tr_2")==true){checkbyid("tr_1")}else{ price = 30;} break;  
        case 2: if(getcheckboxbyid("tr_1")==false){uncheckbyid("tr_2")}else if(getcheckboxbyid("tr_3")==true){checkbyid("tr_2")}else{price = 50;} break; 
        case 3: if(getcheckboxbyid("tr_2")==false){uncheckbyid("tr_3")}else{price = 50; } break;
        case 4: if(getcheckboxbyid("tr_5")==true){checkbyid("tr_4")}else{price = 50; } break;             
        case 5: if(getcheckboxbyid("tr_4")==false){uncheckbyid("tr_5")}else{price = 50; } break;         
        case 6: price = 50;  break;
        case 7: price = 50;  break;
        case 8: price = 50;  break;
        case 9: price = 50;  break;
        case 10: price = 50; break;
        case 11: price = 50; break;
        default: break;
    }

    for(i=0;i<12;i++){
       train_mod[(i+50)] = getcheckboxbyid("tr_"+i)
    // console.log("Number "+(i+50)+" "+train_mod[50+i])
   }

    if (getcheckboxbyid("tr_"+a)){setopacitybyid(("tra_"+a),0.5); PT-=price;} else if (getcheckboxbyid("tr_"+a) == false){setopacitybyid(("tra_"+a),1); PT+=price;}

}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ppic_class="profilepicture_0", input="https://image.posterlounge.ch/img/products/570000/561856/561856_poster_l.jpg";

function ppictureclass(nr){
    
    for(i=0;i<3;i++){opacitybyid("shape_"+i,1)}
    console.log("shape_nr_"+nr);
    opacitybyid("shape_"+nr,0.5);
    
    ppic_class = "profilepicture_"+nr;  
    charimg();
}   

function charimg(){
    if ((imgurl.value)!="")input = imgurl.value;
    for(i=0;i<2;i++){innerhtmlbyid("ppicture_"+i,'<img src="'+input+'" class="'+ppic_class+'" ></img>');}
}



//SET_BODY =[gender, size, weight, fitness, face, hair_color, eye_color];

//setInterval(function intervalcheck(){console.log(SET_BODY)},1000)
