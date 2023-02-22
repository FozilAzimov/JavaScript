// Advenced Array

// Array.from() - bu stringdagi qiymatni array ko'rinishiga o'tkazib beradi.

// filter() - bu method ishlatilishidan maqsan array elementlarini bizning shartga to'g'ri kelganini qoldiradi, qolganini chiqarib tashlaydi.

// find() - buni ishlatishdan maqsan agar biz filterda shartga aniq bitta qiymat bersak shu qiymatni ko'rgandan keyn ham qolgan array elementlarini tekshirib chiqadi ya'n o'rtiqcha ish bajaradi.
// find() ishlatsak shart true natija qaytarsa loop o'z ishini to'xtatadi. Qolgan array elementlarini tekshirib o'tirmaydi. find() asosan id lar uchun qo'llaniladi. Chunki ularning qiymati hech qachon takrorlanmaydi.

// findIndex() va findLastIndex() -  methodlari huddi find() ga o'xshab ishlaydi faqat findIndex() shu qiymatni array boshidan qidira boshlaydi va topgandan so'ng indexini chiqarib beradi,
// findLastIndex() esa shu elementni arrayning oxiridan qidira boshlaydi va indexini chiqarib beradi.

// sort() - bu array elementlarini joylashuvi bo'yicha tartiblab beradi. filter() dan qanday farq qiladi deb so'ralsa - filter() shartga to'g'ri kelmaganini chiqaarib yuborish xususiyatiga ega, sort esa faqat array elementlarini joylashuvi bo'yicha shart asosida tartiblab beradi.

// every() - bu true va false qiymat qaytaradi. array ichidagi qiymatlarning hammasi true bo'lsa every() true natija qaytaradi, agar array ichidagi qiymatlarning biitasi false qiymat bo'lsa natijaviy qiymat false bo'ladi.

// some() - bu ham true va false natija qaytaradi. every() da arrayning hamma qiymati true bo'kishi kerak edi, some() da esa arrayning faqat bittasi true qiymat bo'lsa ham natijaga true qaytaradi. false qaytarishi uchun hamma qiymatlar false qiymatlar bo'lishi shart.

// forEach() - bu returnga qaytmaydi. Ya'ni return ishlamaydi. Faqat forEach() scope ichida qandaydir amal bajarsak boladi holos. Agar biz buni bitta veriablega tenglab uni consolega chiqarmoqchi bo'lsak undefined qaytaradi.

// map() - bu returnga qaytadi. Ya'ni return bunda ishlaydi. map() va forEach() ning bir-biridan farqi map() dan qiymat qaytadi chunki unda return ishaydi, forEach() dan esa qiymat qaytmaydi chunki unda return ishlamaydi.
// filter() va map() ning bir-biridan farqi shundaki filter() da shatr bersak faqat shartga to'g'ri kelganini chiqaradi, map() esa shartga to'g'ri kelganida qiymatni chiqaradi to'g'ri kelmaganda esa qiymat o'rniga undefined qaytaradi, ya'ni map() har doim return true bo'lsa ham false bo'lsa ham natija chiqaradi.

// fill() - bu 3 ta parametr qaul qiladi. 1-parametr o'rnatilishi kerak bo'lgan qiymat, 2-3 parametrlar esa index bo'yicha oraliq beramiz. Shu berilgan oraliqdagi qiymatlar o'rniga 1-parametrda berilgan qiymat joylashadi.

// copyWithin() - bu ham 3 ta parametr oladi. 1-parametr vazifasi nechanchi indexdan boshlab qiymat qo'yilishi, 2 va 3 - parametrlar esa index bo'yicha oraliq hisoblanadi. Manashu oraliqdagi qiymat 1-parametrdan boshlab joylashadi.

// flat() - bu nestd arrayni bitta arrayga aylantirib beradi.

// flatMap() - bu flat() va map() methodlari ishini bitta o'zi bajarib beradi.

// reduce() - bu array bilan ishlashning jiddiyroq usuli hisoblanadi. Ya'ni reducening 1-qiymati colback function, 2-qiymati esa (0) nol hisoblanadi.
// Array ichidaqi raqamlar yig'indisini hisoblashda qolgan methodlarga nisbatan yaxshi method hisoblanadi.