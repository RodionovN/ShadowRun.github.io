             var atributy = Array(12, 14, 16, 20, 24);
             var mAndRes = Array('str1', 'str2', 'str3', 'str4', 'str5');
             var race1 = Array('Человек', 1);
             var race2 = Array('Человек', 3, 'Эльф', 0);
             var race3 = Array('Человек', 5, 'Эльф', 3, 'Гном', 1, 'Орк', 0);
             var race4 = Array('Человек', 7, 'Эльф', 6, 'Гном', 4, 'Орк', 4, 'Троль', 0);
             var race5 = Array('Человек', 9, 'Эльф', 8, 'Гном', 7, 'Орк', 7, 'Троль', 5);
             var raceA = Array(race1, race2, race3, race4, race5);
             var string1 = Array('--- 0', '-', '-', '-', '-', '-');
             var string2 = Array('Адепт 1', 2, '-', '-', '-', '-', 'Аспектный маг 1', 2, '-', '-', '-', '-');
             var string3 = Array('Адепт 2', 4, 1, 2, '-', '-', 'Аспектный маг 2', 3, '-', 2, 1, '-', 'Маг или Мистический адепт 2', 3, '-', '-', '-', 5, 'Техномант 2', 3, '-', '-', '-', 1);
             var string4 = Array('Адепт 3', 6, 1, 4, '-', '-', 'Аспектный маг 3', 5, '-', 4, 1, '-', 'Маг или Мистический адепт 3', 4, 2, 4, '-', 7, 'Техномант 3', 4, 2, 4, '-', 2);
             var string5 = Array('Маг или Мистический адепт 4', 6, 2, 5, '-', 10, 'Техномант 4', 6, 2, 5, '-', 5);
             var mag = Array(string1, string2, string3, string4, string5);
             var um = Array('18/0', '22/0', '28/2', '36/5', '46/10');
             var newYen = Array(6000, 50000, 140000, 275000, 450000);
             var all = Array(raceA, atributy, mag, um, newYen);
             var tempRace = Array();
             var tempAtr1 = Array();
             var tempAtr2 = Array();
             var tempAtr3 = Array();
             var tempAtr4 = Array();
             var tempAtr5 = Array();
             var tempAtr = Array(tempAtr1, tempAtr2, tempAtr3, tempAtr4, tempAtr5);
             var tempAtributy = Array();
             var tempM1 = Array();
             var tempM2 = Array();
             var tempM3 = Array();
             var tempM4 = Array();
             var tempM5 = Array();
             var tempMagic = Array(tempM1, tempM2, tempM3, tempM4, tempM5);
             var tempMa1 = Array();
             var tempMa2 = Array();
             var tempMa3 = Array();
             var tempMa4 = Array();
             var tempMa5 = Array();
             var tempMagicAtr = Array(tempMa1, tempMa2, tempMa3, tempMa4, tempMa5);
             var tempSkils = Array();
             var tempNewYen = Array();
             var countUmn;
             var countSpec;
             var predel = new Array();
             var plusArr = new Array();
             var plRang = new Array();
             var minusArr = new Array();
             var minRang = new Array();
             var plusKachestvaArr = new Array(plusArr, plRang);
             var minusKachestvaArr = new Array(minusArr, minRang);
			      var Skils = new Array();
             var SkilsRang = new Array();
			      var groupSkils = new Array();
             var groupSkilsRang = new Array();
             var SkilsArr = new Array(Skils, SkilsRang);
             var groupSkilsArr = new Array(groupSkils, groupSkilsRang);
              var language = Array();
              var languageRang = Array();
              var knowledge = Array();
              var knowledgeRang = Array();
              var languageArr=Array(language, languageRang);
              var knowledgeArr = Array(knowledge, knowledgeRang);


             function racePred() {
                 var tRace = document.getElementById('race').value;

                 switch (tRace) {
                     case 'Человек':
                         predel = Array("1/6", "1/6", "1/6", "1/6", "1/6", "1/6", "1/6", "1/6", "2/7")

                         break
                     case 'Эльф':
                         predel = Array("1/6", "2/7", "1/6", "1/6", "1/6", "1/6", "1/6", "3/8", "1/6")

                         break
                     case 'Гном':
                         predel = Array("3/8", "1/6", "1/5", "3/8", "2/7", "1/6", "1/6", "1/6", "1/6")

                         break
                     case 'Орк':
                         predel = Array("4/9", "1/6", "1/6", "3/8", "1/6", "1/5", "1/6", "1/5", "1/6")

                         break
                     case 'Троль':
                         predel = Array("5/10", "1/5", "1/6", "5/10", "1/6", "1/5", "1/5", "1/4", "1/6")

                         break
                 }
                 if (document.getElementById('mag').value != "--- 0") {

                     if (~document.getElementById('mag').value.toLowerCase().indexOf("маг ")) {
                         predel.push(document.getElementById('text1').innerHTML + "/6");
                         predel.push("0/0");
                     } else {
                         if ((~document.getElementById('mag').value.toLowerCase().indexOf("адепт")) || (~document.getElementById('mag').value.toLowerCase().indexOf("техномант"))) {
                             predel.push("0/0");
                             predel.push(document.getElementById('text1').innerHTML + "/6");
                         } else {
                             predel.push("0/0");
                             predel.push("0/0");
                         }
                     }
                 }
                 for (var i = 0; i < predel.length; i++) {
                     var a = i + 1;
                     document.getElementById('qty' + a).value = predel[i];
                 }
             }

             function zapolnenie() {
                 zapolnenieAtr();
                 zapolnenieAtributy()
                 zapolnenieMagic();
                 zapolnenieMagicAtr();
                 zapolnenieNewYen();
                 zapolnenieRace();
                 zapolnenieSkils();
                 var el = document.getElementById('atr');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 tempRace = raceA;
                 for (var i = 0; i < tempRace[4].length; i += 2) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempRace[4][i];
                     document.getElementById('race').appendChild(opt);
                 }

                 for (var i = 0; i < tempRace.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempRace[i][1];
                     document.getElementById('atr').appendChild(opt);
                 }
                 tempAtributy.splice(0, 1);
                 for (var i = 0; i < tempAtributy.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempAtributy[i];
                     document.getElementById('atribut').appendChild(opt);
                 }
                 tempMagic.splice(0, 2);
                 for (var i = 0; i < tempMagic.length; i++) {
                     for (var j = 0; j < tempMagic[i].length; j++) {
                         var opt = document.createElement("option");
                         opt.innerHTML = tempMagic[i][j];
                         document.getElementById('mag').appendChild(opt);
                     }
                 }
                 document.getElementById('text1').innerHTML = tempMagicAtr[2][0];
                 document.getElementById('text2').innerHTML = tempMagicAtr[2][1];
                 document.getElementById('text3').innerHTML = tempMagicAtr[2][2];
                 document.getElementById('text4').innerHTML = tempMagicAtr[2][3];
                 document.getElementById('text5').innerHTML = tempMagicAtr[2][4] + '<br>';
                 tempSkils.splice(0, 3);
                 for (var i = 0; i < tempSkils.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempSkils[i];
                     document.getElementById('skils').appendChild(opt);
                 }
                 tempNewYen.splice(0, 4);
                 for (var i = 0; i < tempNewYen.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempNewYen[i];
                     document.getElementById('newyen').appendChild(opt);
                 }

                 racePred();
                 countUmen();
               knowledgeCount();
             }

             function countUmen() {
                 countUmn = document.getElementById('atribut')[document.getElementById('atribut').selectedIndex].value;
                 document.getElementById('countUm').innerHTML = countUmn;
                 countSpec = document.getElementById('atr')[document.getElementById('atr').selectedIndex].value;
                 document.getElementById('countSpec').innerHTML = countSpec;

             }

             function zapolnenieAtr() {

                 var tempAtr12 = Array();
                 var tempAtr22 = Array();
                 var tempAtr32 = Array();
                 var tempAtr42 = Array();
                 var tempAtr52 = Array();
                 tempAtr = Array(tempAtr12, tempAtr22, tempAtr32, tempAtr42, tempAtr52);
                 var el = document.getElementById('atr');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }

             }

             function zapolnenieAtributy() {
                 tempAtributy = Array();

                 for (var j = 0; j < atributy.length; j++) {
                     tempAtributy.push(atributy[j]);
                 }
             }

             function isIn(el, arr) {
                 for (var i = 0; i < arr.length; i++) {
                     if (arr[i] == el) {
                         return true;
                     } else return false;
                 }
             }

             function zapolnenieSkils() {
                 tempSkils = Array();

                 for (var j = 0; j < all[3].length; j++) {
                     tempSkils.push(all[3][j]);
                 }
             }

             function zapolnenieNewYen() {
                 var el = document.getElementById('newyen');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                     tempNewYen = Array();
                     for (var j = 0; j < all[4].length; j++) {
                         tempNewYen.push(all[4][j]);
                     }
                 }
             }

             function zapolnenieMagic() {
                 var tempM12 = Array();
                 var tempM22 = Array();
                 var tempM32 = Array();
                 var tempM42 = Array();
                 var tempM52 = Array();
                 tempMagic = Array(tempM12, tempM22, tempM32, tempM42, tempM52);
                 for (var i = 0; i < all[2].length; i++) {
                     for (var j = 0; j < all[2][i].length; j += 6) {
                         tempMagic[i].push(all[2][i][j]);
                     }
                 }

             }

             function zapolnenieMagicAtr() {
                 var tempMa1 = Array();
                 var tempMa2 = Array();
                 var tempMa3 = Array();
                 var tempMa4 = Array();
                 var tempMa5 = Array();
                 tempMagicAtr = Array(tempMa1, tempMa2, tempMa3, tempMa4, tempMa5);
                 for (var i = 0; i < all[2].length; i++) {
                     for (var j = 1; j < all[2][i].length; j++) {
                         if ((j != 6) && (j != 12) && (j != 18) && (j != 24)) {
                             tempMagicAtr[i].push(all[2][i][j]);
                         }
                     }
                 }
             }

             function getIdRace() {
                 for (var i = 0; i < tempRace.length; i++) {
                     for (var j = 0; j < tempRace[i].length; j += 2) {
                         if (document.getElementById('race')[document.getElementById('race').selectedIndex].value == tempRace[i][j]) {
                             return [i];
                         }
                     }
                 }
             }

             function getIdAtr() {
                 for (var i = 0; i < tempRace.length; i++) {
                     for (var j = 0; j < tempRace[i].length; j += 2) {
                         if ((document.getElementById('race')[document.getElementById('race').selectedIndex].value == tempRace[i][j]) && (document.getElementById('atr')[document.getElementById('atr').selectedIndex].value == tempRace[i][j + 1])) {
                             return [i];
                         }
                     }
                 }
             }

            

             function getIdSpec() {
                 var i = getIdMagic();
                 for (var j = 0; j < tempMagic[i].length; j++) {
                     if (document.getElementById('mag')[document.getElementById('mag').selectedIndex].value == tempMagic[i][j]) {

                         return [j];

                     }
                 }
             }


             function getIdSkils() {
                 for (var i = 0; i < tempSkils.length; i++) {

                     if (document.getElementById('skils')[document.getElementById('skils').selectedIndex].value == tempSkils[i]) {
                         return [i];
                     }

                 }


             }

             function zapolnenieRace() {
                 tempRace = raceA;
             }

             function changeRace() {
                 zapolnenieRace();
                 zapolnenieAtr();
                 zapolnenieAtributy();
                 zapolnenieMagic();
                 zapolnenieMagicAtr();
                 zapolnenieSkils();
                 zapolnenieNewYen();
                 var i = getIdRace();
                 tempAtributy.splice(i, 1);
                 tempMagic.splice(i, 1);
                 tempMagicAtr.splice(i, 1);
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);
                 var el = document.getElementById('atr');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempRace.length; i++) {
                     for (var j = 0; j < tempRace[i].length; j += 2) {
                         if (document.getElementById('race')[document.getElementById('race').selectedIndex].value == tempRace[i][j]) {
                             var opt = document.createElement("option");
                             opt.innerHTML = tempRace[i][j + 1];
                             document.getElementById('atr').appendChild(opt);
                         }
                     }
                 }



                 var el = document.getElementById('atribut');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempAtributy.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempAtributy[i];
                     document.getElementById('atribut').appendChild(opt);
                 }
                 var i = getIdAtributy();
                 tempMagic.splice(i, 1);
                 tempMagicAtr.splice(i, 1);
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);


                 var el = document.getElementById('mag');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempMagic.length; i++) {
                     for (var j = 0; j < tempMagic[i].length; j++) {
                         var opt = document.createElement("option");
                         opt.innerHTML = tempMagic[i][j];
                         document.getElementById('mag').appendChild(opt);

                     }

                 }
                 var i = getIdMagic();
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);
                 for (var j = 0; j < tempMagic[i].length; j++) {
                     document.getElementById('text1').innerHTML = tempMagicAtr[i][i * j];
                     document.getElementById('text2').innerHTML = tempMagicAtr[i][i * j + 1];
                     document.getElementById('text3').innerHTML = tempMagicAtr[i][i * j + 2];
                     document.getElementById('text4').innerHTML = tempMagicAtr[i][i * j + 3];
                     document.getElementById('text5').innerHTML = tempMagicAtr[i][i * j + 4] + '<br>';
                 }


                 var el = document.getElementById('skils');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempSkils.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempSkils[i];
                     document.getElementById('skils').appendChild(opt);
                 }
                 var i = getIdSkils();
                 tempNewYen.splice(i, 1);



                 var el = document.getElementById('newyen');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempNewYen.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempNewYen[i];
                     document.getElementById('newyen').appendChild(opt);


                 }

                 racePred();
                 countUmen();
                 skilsCount();
             }

             function changeAtr() {
                 zapolnenieAtributy();
                 zapolnenieMagic();
                 zapolnenieMagicAtr();
                 zapolnenieSkils();
                 zapolnenieNewYen();
                 var i = getIdAtr();
                 tempAtributy.splice(i, 1);
                 tempMagic.splice(i, 1);
                 tempMagicAtr.splice(i, 1);
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);
                 var el = document.getElementById('atribut');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempAtributy.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempAtributy[i];
                     document.getElementById('atribut').appendChild(opt);
                 }
                 var i = getIdAtributy();
                 tempMagic.splice(i, 1);
                 tempMagicAtr.splice(i, 1);
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);


                 var el = document.getElementById('mag');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempMagic.length; i++) {
                     for (var j = 0; j < tempMagic[i].length; j++) {
                         var opt = document.createElement("option");
                         opt.innerHTML = tempMagic[i][j];
                         document.getElementById('mag').appendChild(opt);

                     }

                 }
                 var i = getIdMagic();
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);
                 for (var j = 0; j < tempMagic[i].length; j++) {
                     document.getElementById('text1').innerHTML = tempMagicAtr[i][i * j];
                     document.getElementById('text2').innerHTML = tempMagicAtr[i][i * j + 1];
                     document.getElementById('text3').innerHTML = tempMagicAtr[i][i * j + 2];
                     document.getElementById('text4').innerHTML = tempMagicAtr[i][i * j + 3];
                     document.getElementById('text5').innerHTML = tempMagicAtr[i][i * j + 4] + '<br>';
                 }


                 var el = document.getElementById('skils');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempSkils.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempSkils[i];
                     document.getElementById('skils').appendChild(opt);
                 }
                 var i = getIdSkils();
                 tempNewYen.splice(i, 1);



                 var el = document.getElementById('newyen');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempNewYen.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempNewYen[i];
                     document.getElementById('newyen').appendChild(opt);


                 }

                 racePred();
                 countUmen();
                 skilsCount();
             }

             function getIdAtributy() {
                 for (var i = 0; i < tempAtributy.length; i++) {
                     if (document.getElementById('atribut')[document.getElementById('atribut').selectedIndex].value == tempAtributy[i]) {
                         return [i];
                     }

                 }
             }

             function changeAtribut() {
                 zapolnenieMagic();
                 zapolnenieMagicAtr();
                 zapolnenieSkils();
                 zapolnenieNewYen();
                 var i = getIdAtr();
                 tempMagic.splice(i, 1);
                 tempMagicAtr.splice(i, 1);
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);
                 var i = getIdAtributy();
                 tempMagic.splice(i, 1);
                 tempMagicAtr.splice(i, 1);
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);
                 var el = document.getElementById('mag');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempMagic.length; i++) {
                     for (var j = 0; j < tempMagic[i].length; j++) {
                         var opt = document.createElement("option");
                         opt.innerHTML = tempMagic[i][j];
                         document.getElementById('mag').appendChild(opt);

                     }

                 }
                 var i = getIdMagic();
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);
                 for (var j = 0; j < tempMagic[i].length; j++) {
                     document.getElementById('text1').innerHTML = tempMagicAtr[i][i * j];
                     document.getElementById('text2').innerHTML = tempMagicAtr[i][i * j + 1];
                     document.getElementById('text3').innerHTML = tempMagicAtr[i][i * j + 2];
                     document.getElementById('text4').innerHTML = tempMagicAtr[i][i * j + 3];
                     document.getElementById('text5').innerHTML = tempMagicAtr[i][i * j + 4] + '<br>';
                 }


                 var el = document.getElementById('skils');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempSkils.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempSkils[i];
                     document.getElementById('skils').appendChild(opt);
                 }
                 var i = getIdSkils();
                 tempNewYen.splice(i, 1);



                 var el = document.getElementById('newyen');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempNewYen.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempNewYen[i];
                     document.getElementById('newyen').appendChild(opt);


                 }

                 racePred();
                 countUmen();
                 skilsCount();
             }


 function getIdMagic() {
                 for (var i = 0; i < tempMagic.length; i++) {
                     for (var j = 0; j < tempMagic[i].length; j++) {
                         if (document.getElementById('mag')[document.getElementById('mag').selectedIndex].value == tempMagic[i][j]) {
                             return [i];
                           break;
                         }
                     }
                 }
             }


             function changeMag() {
                 zapolnenieSkils();
                 zapolnenieNewYen();
                 var i = getIdAtr();
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);
                 var i = getIdAtributy();
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);

                 var i = getIdMagic();
                 var j = getIdSpec();
                 tempSkils.splice(i, 1);
                 tempNewYen.splice(i, 1);
               
                     document.getElementById('text1').innerHTML = tempMagicAtr[i][j * 5];
                     document.getElementById('text2').innerHTML = tempMagicAtr[i][j * 5 + 1];
                     document.getElementById('text3').innerHTML = tempMagicAtr[i][j * 5 + 2];
                     document.getElementById('text4').innerHTML = tempMagicAtr[i][j * 5 + 3];
                     document.getElementById('text5').innerHTML = tempMagicAtr[i][j * 5 + 4] + '<br>';
                   


                 var el = document.getElementById('skils');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempSkils.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempSkils[i];
                     document.getElementById('skils').appendChild(opt);
                 }
                 var i = getIdSkils();
                 tempNewYen.splice(i, 1);



                 var el = document.getElementById('newyen');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempNewYen.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempNewYen[i];
                     document.getElementById('newyen').appendChild(opt);


                 }
                 racePred();
                 countUmen();
                 skilsCount();
             }

             function changeSkils() {
                 zapolnenieNewYen();
                 var i = getIdAtr();
                 tempNewYen.splice(i, 1);
                 var i = getIdAtributy();
                 tempNewYen.splice(i, 1);
                 var i = getIdMagic();
                 tempNewYen.splice(i, 1);
                 var i = getIdSkils();
                 tempNewYen.splice(i, 1);



                 var el = document.getElementById('newyen');
                 while (el.childNodes.length > 0) {
                     el.removeChild(el.childNodes[el.childNodes.length - 1]);
                 }
                 for (var i = 0; i < tempNewYen.length; i++) {
                     var opt = document.createElement("option");
                     opt.innerHTML = tempNewYen[i];
                     document.getElementById('newyen').appendChild(opt);


                 }
               skilsCount();
             }

             function modify_qty(val, id) {
                 if (((countSpec > 0) || ((val < 0) && (countSpec == 0))) && ((id == 'qty9') || (id == 'qty10') || (id == 'qty11'))) {
                     var pred = document.getElementById(id).value.split('/')[1];
                     var qty = document.getElementById(id).value;

                     var new_qty = parseInt(qty, 10) + val;
                     var ind = id.split('y')[1] - 1;
                     var min = predel[ind].split('/')[0];
                     var name = "up" + (ind + 1);
                     var name2 = "down" + (ind + 1);

                     if (new_qty < min) {
                         new_qty = min;

                         document.getElementById(name2).disabled = true;
                         document.getElementById(name).disabled = false;
                     } else {
                         if (new_qty > pred) {
                             new_qty = pred;
                             //document.getElementById(id).style.color='red';
                             document.getElementById(name).disabled = true;
                             document.getElementById(name2).disabled = false;
                         } else {
                             document.getElementById(id).style.color = '#fff';
                             document.getElementById(name).disabled = false;
                             document.getElementById(name2).disabled = false;
                             countSpec -= val;
                         }
                     }
                     document.getElementById(name).disabled = false;
                     document.getElementById(name2).disabled = false;
                     document.getElementById('countSpec').innerHTML = countSpec;
                     document.getElementById(id).value = new_qty + "/" + pred;
                     knowledgeCount();
                     return new_qty;
                 }
                 if (((countUmn > 0) || ((val < 0) && (countUmn == 0))) && ((id != 'qty9') && (id != 'qty10') && (id != 'qty11'))) {
                     var pred = document.getElementById(id).value.split('/')[1];
                     var qty = document.getElementById(id).value;

                     var new_qty = parseInt(qty, 10) + val;
                     var ind = id.split('y')[1] - 1;
                     var min = predel[ind].split('/')[0];
                     var name = "up" + (ind + 1);
                     var name2 = "down" + (ind + 1);

                     if (new_qty < min) {
                         new_qty = min;

                         document.getElementById(name2).disabled = true;
                         document.getElementById(name).disabled = false;
                     } else {
                         if (new_qty > pred) {
                             new_qty = pred;
                             //document.getElementById(id).style.color='red';
                             document.getElementById(name).disabled = true;
                             document.getElementById(name2).disabled = false;
                         } else {
                             document.getElementById(id).style.color = '#fff';
                             document.getElementById(name).disabled = false;
                             document.getElementById(name2).disabled = false;
                             countUmn -= val;
                         }
                     }

                     document.getElementById('countUm').innerHTML = countUmn;
                     document.getElementById(id).value = new_qty + "/" + pred;
                     document.getElementById('qtyIni').value = parseInt(document.getElementById('qty3').value, 10) + parseInt(document.getElementById('qty7').value, 10);
                      
               knowledgeCount();
                     return new_qty;
                 }
knowledgeCount();
             }


             function openKachBut(id) {
                 document.getElementById(id).removeAttribute('style');
             }

			function onoffBut(idKach, id, element, rang, arr, summ, idCarma){
				var blabel, bstyle, bcolor, carmacount;
        var a = document.getElementById(idKach).innerHTML
        var idx = arr[0].indexOf(a);
        if (element.firstChild.innerHTML == "off") {        
          document.getElementById(summ).value = Number(document.getElementById(summ).value) - Number(document.getElementById(id).value);
          
            blabel = "on";
            bstyle = "green";
            bcolor = "lightgreen";
            arr[0].push(a);
            arr[1].push(rang);
            if(idCarma!="0")
            {                       
              
            if((idCarma=="plusCarma")||(idCarma=="minusCarma")){  document.getElementById(idCarma).value=Number(document.getElementById(idCarma).value)+Number(document.getElementById(id).value);
                                                               }
            }
          colorChange(idCarma);
         }
        else 
        {
          blabel = "off";
          bstyle = "lightgray";
          bcolor = "gray";
          arr[0].splice(idx, 1);
          arr[1].splice(idx, 1);
          document.getElementById(summ).value = Number(document.getElementById(summ).value) + Number(document.getElementById(id).value);
          if(idCarma!="0")
          {
            
           if((idCarma=="plusCarma")||(idCarma=="minusCarma")){  document.getElementById(idCarma).value=Number(document.getElementById(idCarma).value)-Number(document.getElementById(id).value);}
            colorChange(idCarma);
                                                              }
          }
				  var child = element.firstChild;
          child.style.background = bstyle;
          child.style.color = bcolor;
          child.innerHTML = blabel;
          colorChange(idCarma);
			}
             function onoff(idKach, id, element, rang) {
				 switch (id[0]) {
                    case 'p':
                         onoffBut(idKach, id, element, rang, plusKachestvaArr, "countKach", "plusCarma")
                         break
					case 'm':
                        onoffBut(idKach, id, element, rang, minusKachestvaArr, "countKach", "minusCarma")
                         break
					case "s":
                        onoffBut(idKach, id, element, rang, SkilsArr, "countSkils", "countSkils")
                         break	
					case 'g':
                        onoffBut(idKach, id, element, rang, groupSkilsArr, "countGroupSkils", "countGroupSkils")
                         break
          case 'n':
                        onoffBut(idKach, id, element, rang, knowledgeArr, "countKnoledgeLanguage","countKnoledgeLanguage")
                         break
          case 'l':
                        onoffBut(idKach, id, element, rang, languageArr, "countKnoledgeLanguage","countKnoledgeLanguage")
                         break
				}                
             }

			function closeButton(id, arr, win){
				var el = document.getElementById(id);
                     if (el != null) {
                         while (el.childNodes.length > 0) {
                             el.removeChild(el.childNodes[el.childNodes.length - 1]);
                         }
                     }
                   var table = document.createElement("table");
                   table.style.width = '100%';
                     for (var i = 0; i < arr[0].length; i++) {
                       var tr = document.createElement('tr');
                         var td = document.createElement('td');
                         td.innerHTML = arr[0][i];
                       var td2 = document.createElement('td');
                         td2.innerHTML = arr[1][i];
                       tr.appendChild(td);
                       tr.appendChild(td2);
                       table.appendChild(tr);

                     }
                   document.getElementById(id).appendChild(table);
				   document.getElementById(win).style.display = 'none';
			}
            function closeKachBut(id, win) {
				switch (id) {
                    case 'plusKachestva':
                         closeButton(id, plusKachestvaArr, win)
                         break
					case 'minusKachestva':
                        closeButton(id, minusKachestvaArr, win)
                         break
					case 'SkilsArr':
                        closeButton(id, SkilsArr, win)
                         break	
					case 'groupSkilsArr':
                        closeButton(id, groupSkilsArr, win)
                         break
          case 'knoledgeArr':
                        closeButton(id, knowledgeArr, win)
                         break
          case 'languageArr':
                        closeButton(id, languageArr, win)
                         break
				}
			}


function radiobutCheck(idKach, id, element, group){
  
  var gr1 = document.getElementsByName(group);
  var zn=document.getElementById(id).value;
  var rang = '1';
document.getElementById(id).value=gr1[0].value;
  if(element.firstChild.innerHTML == "off"){
    for(var i = 0; i < gr1.length; i++) {
      if(gr1[i].checked == true) {
        zn = gr1[i].value;
        rang=gr1[i].id[gr1[i].id.length-1];
      }    
    }
  }
  document.getElementById(id).value=zn;
    onoff(idKach, id, element, rang);
 }


function checkBoxCheck(idKach, id, element, group){
  
  var gr1 = document.getElementsByName(group);
  var summ = 0;
  document.getElementById(id).value=0;
for(var i = 0; i < gr1.length; i++) {
   if((gr1[i].checked == true)) {
     summ+= Number(gr1[i].value);
   }
  }
    
    document.getElementById(id).value+=Number(summ);  
    onoff(idKach, id, element); 
}

function radioCheck2(idKach, id, element, group1, group2){  //'mk1','mkv1',this,'allergiya1','allergiya2'
	 
  var gr1 = document.getElementsByName(group1);
  var gr2 = document.getElementsByName(group2);
  var zn = Number(document.getElementById(id).value);
  var z;
  var z2;
  var rang1;
  var rang2;
  var rang;
document.getElementById(id).value=gr1[0].value+gr2[0].value;
  if(element.firstChild.innerHTML == "off"){
		for(var i = 0; i < gr1.length; i++) {
		  if(gr1[i].checked == true) {
			z = Number(gr1[i].value);
       rang1=document.getElementsByName(gr1[i].id)[0].innerHTML;
		  }    
		}
		for(var y = 0; y < gr2.length; y++) {
			if(gr2[y].checked == true) {
				z2 = Number(gr2[y].value);
        rang2=document.getElementsByName(gr2[y].id)[0].innerHTML;
			}
		}
	zn=Number(z)+Number(z2);	
    rang=rang1+rang2;
	}
		
  document.getElementById(id).value=zn;
    onoff(idKach, id, element, rang);
}

function skilsCount(){
  var sc = document.getElementById('skils').value.split('/');
  document.getElementById('countSkils').value=sc[0];
  document.getElementById('countGroupSkils').value=sc[1];
  document.getElementById('SkilsArr').innerHTML="Тут будут умения.";
  document.getElementById('groupSkilsArr').innerHTML="Тут будут группы умений.";
  clearArrDiv("s", SkilsArr);
  clearArrDiv("gs", groupSkilsArr);
}

function knowledgeCount(){
  var sc1 = document.getElementById('qty6').value.split('/');
  var sc2 = document.getElementById('qty7').value.split('/');
  document.getElementById('countKnoledgeLanguage').value=(Number(sc1[0])+Number(sc2[0]))*2;
  document.getElementById('knoledgeArr').innerHTML="Тут будут знания.";
  document.getElementById('languageArr').innerHTML="Тут будут языки.";
  clearArrDiv("n", knowledgeArr);
  clearArrDiv("l", languageArr);
}

function clearArrDiv(el, arr){
  arr[0]=[];
  arr[1]=[];
  for(var i =1; i<31; i++){
    var ell=el+'kb'+i;
    if(document.getElementById(ell)!=null){
    var child = document.getElementById(ell).firstChild.firstChild;
    child.style.background = "lightgray";
    child.style.color = "gray";
    child.innerHTML = "off";
    }
  }  
}

function colorChange(id){
  var child = document.getElementById(id);
  var temp;
  var val;
  switch (id) 
      {
        case "plusCarma":
      temp=true;
      val=25;
  
          break;
        case "minusCarma":
      temp=false;
      val=-25;
  
          break;
        case "countSkils":
      temp=false;
      val=0;
  
          break;
        case "countGroupSkils":
      temp=false;
      val =0;   
          break;
      case "countKnoledgeLanguage":
      temp=false;
      val =0;   
          break;
       }
  if(temp){
    if(Number(child.value)>val)
    {    
      child.style.color = 'red';
    }
    else
    {
      child.style.color='gold';
    }
  }
  else
    {
      if(Number(child.value)<val)
    {    
      child.style.color = 'red';
    }
    else
    {
      child.style.color='gold';
    }
    }
  
}