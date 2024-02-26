/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
            //---------------------------------------------------------------
            // function generateRandomEur(min, max) {
            //     return Math.floor(Math.random() * (max - min + 1)) + min;
            //   }
            

            //   function convertEurosToDollars(eur) {
            //     let exchangeRate = 1.08; 
            //     return eur * exchangeRate;
            //   }

            //   let randomEuros = generateRandomEur(1, 1000);
            //   let dollars = convertEurosToDollars(randomEuros);
            //   console.log(`${randomEuros}Eur konvertuojasi i ${dollars.toFixed(2)}USD.`);
            //---------------------------------------------------------------
/*

2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
            //---------------------------------------------------------------
            // function generateRandomUsd(min, max) {
            //     return Math.floor(Math.random() * (max - min + 1)) + min;
            //   }
            

            //   function convertDollarsToEuros(usd) {
            //     let exchangeRate = 0.92; 
            //     return usd * exchangeRate;
            //   }

            //   let randomUsd = generateRandomUsd(1, 1000);
            //   let euros = convertDollarsToEuros(randomUsd);
            //   console.log(`${randomUsd}USD konvertuojasi i ${euros.toFixed(2)}Eur.`);
            //---------------------------------------------------------------
/*

3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
            //---------------------------------------------------------------
            // let svorisKg = 80;
            // let ugisM = 1.78;

            // function BMIapskaiciavimas(svorisKg, ugisM){

            //     let BMI = svorisKg / (ugisM**2);
            //     return BMI;
            // }

            // let BMI = BMIapskaiciavimas(svorisKg, ugisM);

            // if (BMI > 25){
            //     console.log(`${BMI.toFixed(2)} BMI indikuoja virssvori`);
            // }
            // else if (18.5 < BMI){   
            //     console.log(`${BMI.toFixed(2)} BMI indikuoja normalu svori`);
            // }
            // else if (BMI < 18.5){     
            //     console.log(`${BMI.toFixed(2)} BMI indikuoja per maza svori`);
            // }
            //---------------------------------------------------------------
/*

4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
            //---------------------------------------------------------------
            // let amzius = 30;

            // function amziusISekundes(amzius){
            //     let sekundemis = amzius * 365 * 24 * 60 * 60;
            //     return sekundemis;
            // }

            // function amziusIMinutes(amzius){
            //     let minutemis = amzius * 365 * 24 * 60;
            //     return minutemis;
            // }

            // function amziusIValandas(amzius){
            //     let valandomis = amzius * 365 * 24;
            //     return valandomis;
            // }

            // let sekundemis = amziusISekundes(amzius);
            // let minutemis = amziusIMinutes(amzius);
            // let valandomis = amziusIValandas(amzius);

            // console.log(`Jei zmogui butu ${amzius} metu, tai prilygtu ${sekundemis} sekundem, ${minutemis} minutem bei ${valandomis} valandom!`)
            //---------------------------------------------------------------
/*

5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
            //---------------------------------------------------------------
            // let celsius = 37;
            // let farenheit = 323;

            // function konvertuotiIsFarICel (farenheit){
            //     let FarhToCels = (farenheit - 32) * (5/9);
            //     return FarhToCels;
            // }

            // function konvertuotiIsCelIFar (celsius){
            //     let CelsToFarh = (celsius * 9/5) + 32;
            //     return CelsToFarh;
            // }

            // let FarhToCels = konvertuotiIsFarICel (farenheit);
            // let CelsToFarh = konvertuotiIsCelIFar (celsius);

            // console.log(`${celsius.toFixed(2)}\u00B0C konvertavus i Farenheit butu ${CelsToFarh.toFixed(2)}\u00B0F, o ${farenheit.toFixed(2)}\u00B0F konvertavus i celsius gautusi ${FarhToCels.toFixed(2)}\u00B0C`);
            //---------------------------------------------------------------
/*

6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
            // //---------------------------------------------------------------
            // console.log(`1-2-3-4-5-6-7-8-9-10`);
            // //---------------------------------------------------------------
/*

7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
            //---------------------------------------------------------------
            // for (let i = 0; i < 5; i++){
            //     let zvaigzdutes = '';
            //     for (let j=0; j < i; j++){
            //         zvaigzdutes += '*';
            //     }
            //     console.log(zvaigzdutes);
            // }
            //---------------------------------------------------------------

/*

8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

            //---------------------------------------------------------------
            // let data = 5; //metu diena, ne menesyje
            // function dienosIkiKaledu (data){

            //     let ikiKaledu = (359 + (359-data)) - 365+data;
            //     return ikiKaledu;
            // }

            // let ikiKaledu = dienosIkiKaledu(data);
            // console.log(`iki kaledu liko ${ikiKaledu} dienu`)

            //---------------------------------------------------------------


/*

9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
            // //---------------------------------------------------------------
            // let vardai = ["Tomas", "Dainius", "Paulius", "Jonas"];

            // let varduSarasas1 = vardai.join(',');
            // console.log(varduSarasas1);

            // let varduSarasas2 = vardai.join('+');
            // console.log(varduSarasas2);
            // //---------------------------------------------------------------
/*

10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

// sitam galvojau bus panasiai kaip su sifravimu SHA funckija kai sugeneruojam random skaitmenis, tai teko googlint, pasirodo visiskai netaip, del idomumo paziurejau ka chatGPT pagamino tai nusprendziau sita palikt kaip neisspresta. :)