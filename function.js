//#######################################################################################################################################
//                                                              Var Setup
//#######################################################################################################################################
var PT = 0, GP=0, PP=0, HP=0, AC=0, MP =0;

//#######################################################################################################################################
//                                                          Tools && Setup
//#######################################################################################################################################

var timeout =1000;
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

  setTimeout(function(){}, timeout);


//#######################################################################################################################################
//                                                          Stat Bar
//#######################################################################################################################################

var PT, ACH, ACM, ACL, ACD, ARMORH = 0, ARMORM = 0, ARMORL = 0, Shield = 0, HPB = 0, PPB = 0, ACB = 0, MPB = 0;

setInterval(function updatev(){


    //Set PT POINTS even
    

    //choose higest AC
    ACH = 10 + ARMORH + Shield;
    ACM = 10 + ARMORM + Shield;
    ACL = 10 + ARMORL + Shield + ((STAT_ARRAY[1]-10)/2);
    ACD = 10 + ((STAT_ARRAY[1]-10)/2);
  
    AC = Math.ceil(Math.max(ACH, ACM, ACL, ACD))+ACB;
    
    //calc HP
    HP = 5+Math.ceil((STAT_ARRAY[2] / 2))+HPB;
  
    //calc PP
    PP = 5+Math.ceil((STAT_ARRAY[4] / 2))+PPB;

    //calc MP
    MP = 5+Math.ceil((STAT_ARRAY[3] / 2))+MPB;

    //set Body properties
    SET_BODY =[gender, size, weight, fitness, face, hair_color, eye_color];

    for(i=0;i<12;i++){
        if(i<6)
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
            {document.getElementById('stat_10').innerHTML = MP;}
        else if(i==11)
            {document.getElementById('stat_11').innerHTML = PT;}
    }
}, 50);

  
//#######################################################################################################################################
//                                                              Sidebar
//#######################################################################################################################################

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
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
    document.getElementById("intro_0"+b).src="/pica/tressure_0"+b+".jpg";
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

var choose_0010 = 0; lock_02 = false;

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

var STR = 0, DEX = 0, CON = 0, INT = 0, PSY = 0, CHA = 0, STAT_ROLL, STAT_ROLL_ARRAY=[], STAT_ARRAY=[STR, DEX, CON, INT, PSY, CHA], OLD_STAT_ARRAY=[0, 0, 0, 0, 0, 0];

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
case 3:RAC_ARRAY =  [0, 0, 0, 2, 0, 1, 0]; break;//
case 4:RAC_ARRAY =  [0, 2, 0, 0, 0, 0, 0]; break;
case 5:RAC_ARRAY =  [3, 0, 0, 0, 0, -1, 0]; break;
case 6:RAC_ARRAY =  [0, 1, 0, 2, 0, 0, 0]; break;
case 7:RAC_ARRAY =  [1, 0, 2, 0, 0, 0, 0]; break;//
case 8:RAC_ARRAY =  [0, 0, 0, 0, 0, 0, 0]; break;
case 9:RAC_ARRAY =  [1, 1, 0, 1, 2, 2,-60]; break;//
case 10:RAC_ARRAY = [1, 0, 1, 2, 1, 2,-60]; break;//
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
        case 6: size="large";           break;

        case 7: weight="skinny";        break;
        case 8: weight="avarage";       break;
        case 9: weight="chubby";        break;
        case 10: weight="fat";          break;

        case 11: fitness="untrained";   break;
        case 12: fitness="avarage";     break;
        case 13: fitness="fit";         break;
        case 14: fitness="trained";     break;

        case 15: face="masculin";       break;
        case 16: face="neutral";        break;
        case 17: face="feminine";       break;
        case 18: face="girly";          break;

        case 19: hair_color="blond";    break;
        case 20: hair_color="brown";    break;
        case 21: hair_color="black";    break;
        case 22: hair_color="red";      break;
        case 23: hair_color="violet";   break;
        case 24: hair_color="blue";     break;
        case 25: hair_color="pink";     break;
        case 26: hair_color="white";    break;

        case 27: eye_color="blue";      break;
        case 28: eye_color="brown";     break;
        case 29: eye_color="green";     break;
        case 30: eye_color="grey";      break;
        case 31: eye_color="violet";    break;
        case 32: eye_color="white";     break;
        case 33: eye_color="pink";      break;
        case 34: eye_color="red";       break;

        default: alert("there was non selected"); break;
    }

    //oppacity buttons for each radio, change to check radio for selected in furture?

    switch (a){
        case 0:
        case 1:
        case 2:
            typeold  = "gen_"+b;
            typenew  = "gen_"+a;
            b=a;
            break;

        case 3: 
        case 4: 
        case 5: 
        case 6: 
            typeold  = "siz_"+c;
            typenew  = "siz_"+a;
            c=a;
            break;

        case 7: 
        case 8: 
        case 9: 
        case 10: 
            typeold  = "wei_"+d;
            typenew  = "wei_"+a;
            d=a;
            break;

        case 11: 
        case 12: 
        case 13: 
        case 14: 
            typeold  = "fit_"+e;
            typenew  = "fit_"+a;
            e=a;
            break;

        case 15: 
        case 16: 
        case 17: 
        case 18: 
            typeold  = "fac_"+f;
            typenew  = "fac_"+a;
            f=a;
            break;

        case 19: 
        case 20: 
        case 21:
        case 22:    
        case 23: 
        case 24: 
        case 25: 
        case 26: 
            typeold  = "hai_"+g;
            typenew  = "hai_"+a;
            g=a;
            break;
        
        case 27: 
        case 28: 
        case 29: 
        case 30: 
        case 31: 
        case 32: 
        case 33: 
        case 34: 
            typeold  = "eye_"+h;
            typenew  = "eye_"+a;
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
//                                                          Patreon Content
//#######################################################################################################################################
var i_am_bool=false;

function patreon(){

    switch(i_am_bool){
    case true:
    document.getElementById(1089).style.visibility = "hidden";
    i_am_bool=false;
    break;  

    case false: 
    document.getElementById(1089).style.visibility = "visible";
    i_am_bool=true;
    break;
}
    
 

}



//#######################################################################################################################################
//                                                   Fight a goblin
//#######################################################################################################################################

var ccount =0;

function fight1(){

    switch(ccount){
    case 0: document.getElementById("goblintalk").innerHTML =('Soon you will be able to fight uzzzss...'); break;
    case 1: document.getElementById("goblintalk").innerHTML =('Aaggh, stop this foolish clickiin grrrr'); break;
    case 2: document.getElementById("goblintalk").innerHTML =('You cannot fightzzz me yet!'); break;
    case 3: document.getElementById("goblintalk").innerHTML =('Can.. not.. click me'), document.getElementById("goblin").classList.add('goblin_atk1');break;
    case 4: document.getElementById("goblintalk").innerHTML =('YOU CANNOT BZZEAT MEE'), document.getElementById("goblin").classList.add('goblin_atk2');break;
    case 5: document.getElementById("goblintalk").innerHTML =('AARGGHH'), document.getElementById("goblin").classList.add('goblin_atk3');break;
    case 6: document.getElementById("goblintalk").innerHTML =('You have too much time lina 😡'), 
    document.getElementById("goblin").classList.remove('goblin_atk3'), 
    document.getElementById("goblin").classList.remove('goblin_atk2'), 
    document.getElementById("goblin").classList.remove('goblin_atk1'), 
    document.getElementById("goblin").classList.add('goblin_idle');break;
    default: break;
    }
    ccount++;
}


//#######################################################################################################################################
//                                                          Interpretation
//#######################################################################################################################################

//function readout_array(){}





//#######################################################################################################################################
//                                                          Enemy
//#######################################################################################################################################
