// ===================================== Misol - 1
// let num =+prompt("santimetrda uzunlik kiriting!");
// console.log("Metrda: " + Math.floor(num/100));


// ===================================== Misol - 2 
// let weight =+ prompt("Kilogramda og'irlik kiriting!");
// console.log("Tonnada: " +(weight/1000) + " tonna");


// ===================================== Misol - 3
// let A =+prompt("A kesmaga qiymat bering, B dan katta bo`lishi kerak!");
// let B =+prompt("B kesmaga qiymat bering, A dan kichik bo`lsin!");
// console.log("A kesmani ichiga " + (A/B) +" martta B kesmani joylashtirsa bo'ladi")


// ===================================== Msiol-4
// let a =+prompt("Ikki xonali son kiriting!");
// console.log("O'nliklar xonasidagi raqam: " +(Math.floor(a/10)));
// console.log("Birliklar xonasidagi raqam: " +Math.round(((a/10)-Math.floor(a/10))*10));


// ===================================== Msiol-5
// let a=+prompt("Ikki xonali son kiriting, men ularning yig'indisini topib berman!");
// console.log("Xona raqamlari yi`ginidisi: " +(Math.round(((a/10)-Math.floor(a/10))*10)+(Math.floor(a/10))));


// ===================================== Msiol-6
// let num = +prompt("To`rt xonali istalgan son kiriting!");
// num=num%1000;
// console.log("Yuzliklar soni: "+(Math.floor(num/100)));


// ===================================== Msiol-7
// let second =+prompt("Kun bo'yicha sekund kiriting");
// let minute = second/60;
// let hour = second/3600;
// let day = second/3600/24;
// console.log("Minut: " + (minute));
// console.log("Soat: " +(hour));
// console.log("Kun: "+(day));


// ===================================== Msiol-8
// let a =+prompt("Son kiriting!");
// if(a>0){
//     console.log("Son musbat!");
// }else if(a<0){
//     console.log("Kiritilgan son manfiy!");
// }
// else if(a==0){
//     console.log("Musbat ham emas, manfiy ham emas!");
// };


// ===================================== Msiol-9
// let a =+prompt("Sonni toqligini tekshiramiz!");
// if(a%2==1){
//     console.log("Kiritilgan " +(a) +" soni - toq");
// }else if(a%2==0){
//     console.log("Kiritilgan " +(a) +" soni - juft");
// }


// ===================================== Msiol-10
// let a =+prompt("Sonni juftligini tekshiramiz!");
// if(a%2==1){
//     console.log("Kiritilgan " +(a) +" soni - toq");
// }else if(a%2==0){
//     console.log("Kiritilgan " +(a) +" soni - juft");
// }

// ===================================== Msiol-11
// let a =+prompt("Birinchi sonni kiriting!");
// let b =+prompt("Ikkinchi sonni kiriting!");
// if(a>0 && b>0){
//     console.log("Kiritilgan " +a +" va " +b +" sonlar musbat");
// }else if(a>0 && b<0){
//     console.log("Kiritilgan " +a +" va " +b +" sonlardan biri manfiy");
// }else if(a<0 && b>0){
//     console.log("Kiritilgan " +a +" va " +b +" sonlardan biri manfiy");
// }else if(a<0 && b<0){
//     console.log("Kiritilgan " +a +" va " +b +" sonlar manfiy");
// }else if(a==0 || b==0){
//     console.log("Sonlardan biri 0 ga teng!");
// }



// ===================================== Msiol-12
// let a =+prompt("a songa qiymat bering!");
// let b =+prompt("b songa qiymat bering!");
// let c =+prompt("c songa qiymat bering!");

// if(a>b && b>c){
//     console.log("rost");
// }else{
//     console.log("yolg'on");
// }


// ===================================== Msiol-13
// let a =+prompt("a songa qiymat bering!");
// let b =+prompt("b songa qiymat bering!");
// let c =+prompt("c songa qiymat bering!");

// if(a>b && b>c){
//     console.log("Rost, B o'ratda");
// }else if(b>a && b>c){
//     console.log("yolg'on, B o'rtada emas")
// }else{
//     console.log("yolg'on, B o'rtada emas");
// }


// ===================================== Msiol-14
// let a = +prompt("A ga qiymat bering");
// let b = +prompt("B ga qiymat bering");

// if(a%2==0){
//     console.log("A son juft");
// } else if(a%2==1){
//     console.log("A son toq");
// }

// if(b%2==0){
//     console.log("B son juft");
// }else if(b%2==1){
//     console.log("B son toq");
// }


// ===================================== Misol-14
// let a = +prompt("A ga qiymat bering");
// let b = +prompt("B ga qiymat bering");
// let c = +prompt("C ga qiymat bering");
// let d = +prompt("D ga qiymat bering");

// if(a>0){
//     console.log("A son musbat");
// } else if(a<=0){
//     console.log("A son musbat emas");
// }

// if(b>0){
//     console.log("B son musbat");
// }else if(b<=0){
//     console.log("B son musbat emas");
// }

// if(c>0){
//     console.log("C son musbat");
// }else if(c<=0){
//     console.log("C son musbat emas");
// }

// if(d>0){
//     console.log("D son musbat");
// }else if(d<=0){
//     console.log("D son musbat emas");
// }


// ===================================== Misol-15
// let a =+ prompt("a ga qiymat bering")
// let b =+ prompt("b ga qiymat bering")
// let c =+ prompt("c ga qiymat bering")

// if(a>0 && b>0 && c>0){
//     console.log("Hammasi musbat");
// }else if(a>0 && b>0 && c<0){
//     console.log("Kiritilgan sonlardan " +(a) +" va " + (b) + " musbat" );
// }else if(a>0 && b<0 && c>0){
//     console.log("Kiritilgan sonlardan " +(a) +" va " + (c) + " musbat" );
// }else if(a<0 && b>0 && c>0){
//     console.log("Kiritilgan sonlardan " + (b) +" va " + (c) + " musbat" );
// }else{
//     console.log("Kiritilgan 3 ta sonlardan kamida ikkitasi musbat bo`lishi kerak");
// }


// ===================================== Misol-16
// let a =+prompt("Hafta kunlaridan bittasini tanlash uchun 1 dan 7 gacha son kiriting");

// if(a==1){
//     console.log("Siz Dushanba hafta kunini tanladingiz");
// }else if(a==2){
//     console.log("Siz Seshanba hafta kunini tanladingiz");
// }else if(a==3){
//     console.log("Siz Chorshanba hafta kunini tanladingiz");
// }else if(a==4){
//     console.log("Siz Payshanba hafta kunini tanladingiz");
// }else if(a==5){
//     console.log("Siz Juma hafta kunini tanladingiz");
// }else if(a==6){
//     console.log("Siz Shanba hafta kunini tanladingiz");
// }else if(a==7){
//     console.log("Siz Yakshanba hafta kunini tanladingiz");
// }else{
//     console.log("Siz hafta kunini tanlamadingiz");
// }


// ===================================== Misol-17
// let a=+prompt("Aloqa operatoringizni kodini kiritng! (M-n: 33, 88, 90, 91, 93, 94, 99,)")
// if(a==33){
//     console.log("Siznig aloqa operatoringiz - Human UZ");
// }else if(a==88){
//     console.log("Siznig aloqa operatoringiz - MobiUZ");
// }else if(a==90 || a==91){
//     console.log("Siznig aloqa operatoringiz - Beeline");
// }else if(a==93 || a==94){
//     console.log("Siznig aloqa operatoringiz - Ucell (COSCOM)");
// }else if(a==99){
//     console.log("Siznig aloqa operatoringiz - UZMOBILE");
// }else{
//     console.log("Siz notog'ri ma'lumot kiritdingiz! Iltimos qaytadan urinib ko`ring!");
// }


// ===================================== Misol-18
// let a=+prompt("BUTUN SON KIRITING, agar musbat bo`lsa +1, manfiy bo`lsa -1 qiymatlarini "+" qo`shib qo`yamiz!");
// if(a>0){
//     console.log((a+1)+ ", Uraa, siz kiritgan " +(a)+ " soniga yana bitta birlik qo`shildi!");
// }else if(a<0){
//     console.log((a-1)+ ", Uraa, siz kiritgan " +(a)+ " sonidan yana bitta birlik ayirildi!");
// }else if(a==0){
//     console.log("Siz nol qiymat kiritdingiz, nol - nolligicha qoladi :)");
// }


// ===================================== Misol-19
// let a=+prompt("BUTUN SON KIRITING, agar musbat bo`lsa +3, manfiy bo`lsa -2 qiymatlarini "+" qo`shib qo`yamiz!");
// if(a>0){
//     console.log((a+3)+ ", Uraa, siz kiritgan " +(a)+ " soniga yana bitta birlik qo`shildi!");
// }else if(a<0){
//     console.log((a-2)+ ", Uraa, siz kiritgan " +(a)+ " sonidan yana bitta birlik ayirildi!");
// }else if(a==0){
//     console.log("Siz nol qiymat kiritdingiz, nol - nolligicha qoladi :)");
// }


// ===================================== Misol-20
// let a=+prompt("Ikkita son kiriting, kattasini aniqlab beraman. Birinchi sonni kiriting!");
// let b=+prompt("Ikkita son kiriting, kattasini aniqlab beraman. Ikkinchi sonni kiriting!");

// if(a>b){
//     console.log("Birinchi kiritgan soningiz, yani " + a + " soni ikkinchisidan katta");
// }else if(b>a){
//     console.log("Ikkinchi kiritgan soningiz, yani " + b + " soni birinchisidan katta");
// }else{
//     console.log("Ikkalasi teng");
// }


// ===================================== Misol-21
// let a=+prompt("Uchta son kiriting, kattasini aniqlab beraman. Birinchi sonni kiriting!");
// let b=+prompt("Uchta son kiriting, kattasini aniqlab beraman. Ikkinchi sonni kiriting!");
// let c=+prompt("Uchta son kiriting, kattasini aniqlab beraman. Uchinchi sonni kiriting!")

// if(a>b && a>c){
//     console.log("Birinchi son eng katta");
// }else if(a>b && a>=c){
//     console.log("Birinchi va uchinchi son katta");
// }else if(a>=b && a>c){
//     console.log("Birinchi va ikkinchi son katta");
// }else if(a>=b && a>=c){
//     console.log("Hammasi teng");
// }

// else if(b>a && b>c){
//     console.log("Ikkinchi son katta");
// }else if(b>a && b>=c){
//     console.log("Ikkinchi va uchinchi son katta");
// }else if(b>=a && b>c){
//     console.log("Ikkinchi va birinchi son katta");
// }else if (b>=a && b>=c){
//     console.log("Hammasi teng");
// }

// else if(c>a && c>b){
//     console.log("Uchinchi son eng katta");
// }else if(c>a && c>=b){
//     console.log("Ikkinchi va Uchinchi son eng katta");
// }else if(c>=a && c>b){
//     console.log("Birinchi va Uchinchi son eng katta");
// }else if(c>=a && c>=b){
//     console.log("Hammasi teng");
// }else{
//     console.log("Siz bir hil son kiritdingiz!");
// }


// ===================================== Misol-22
let a=+prompt("Uchta son kiriting, kichigini aniqlab beraman. Birinchi sonni kiriting!");
let b=+prompt("Uchta son kiriting, kichigini aniqlab beraman. Ikkinchi sonni kiriting!");
let c=+prompt("Uchta son kiriting, kichigini aniqlab beraman. Uchinchi sonni kiriting!")

if(a<b && a<c){
    console.log("Birinchi son eng kichigi");
}else if(a<b && a<=c){
    console.log("Birinchi va uchinchi son kichik");
}else if(a<=b && a<c){
    console.log("Birinchi va ikkinchi son kichik");
}else if(a<=b && a<=c){
    console.log("Hammasi teng");
}

else if(b<a && b<c){
    console.log("Ikkinchi son kichik");
}else if(b<a && b<=c){
    console.log("Ikkinchi va uchinchi son kichik");
}else if(b<=a && b<c){
    console.log("Ikkinchi va birinchi son kichik");
}else if (b<=a && b<=c){
    console.log("Hammasi teng");
}

else if(c<a && c<b){
    console.log("Uchinchi son eng kichik");
}else if(c<a && c<=b){
    console.log("Ikkinchi va Uchinchi son eng kichik");
}else if(c<=a && c<b){
    console.log("Birinchi va Uchinchi son eng kichik");
}else if(c<=a && c<=b){
    console.log("Hammasi teng");
}else{
    console.log("Siz bir hil son kiritdingiz!");
}


// Tugadi
