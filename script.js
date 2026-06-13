// Barcha DTM va CEFR grammatik mavzulari bazasi
const grammarDatabase = [
  {
    id: "alphabet",
    title: "Alphabet & Pronunciation",
    category: "basic",
    explanation:
      "Ingliz tili alifbosi 26 ta harfdan iborat boʻlib, ular 5 ta unli (a, e, i, o, u) va 21 ta undosh harflarga boʻlinadi. DTM imtihonlarida bevosita alifbo soʻralmasada, soʻzlarning toʻgʻri yozilishi (spelling) va urgʻu qoidalari qidiruv matnlari va leksika uchun juda muhim poydevor hisoblanadi.",
    formula: "26 Harf = 5 Unli (Vowels) + 21 Undosh (Consonants)",
    formation:
      "Ingliz tilida harflar va tovushlar farq qiladi. 26 ta harf umumiy hisobda 44 ta turlicha tovushni (tillararo transkripsiya) hosil qiladi.",
    positive: "A is the first letter of the English alphabet.",
    negative: "The letter 'X' is not commonly used at the beginning of words.",
    question: "How many letters are there in the word 'Education'?",
    examples: [
      "Apple begins with the letter A.",
      "Beautiful contains five vowels.",
      "The alphabet has lowercase and uppercase letters.",
      "Can you spell your name, please?",
      "Knowledge begins with a silent 'K'.",
      "There are twenty-six letters here.",
      "English spelling can sometimes be tricky.",
      "Pronunciation is vital for speaking tests.",
      "Vowels change their sound in open syllables.",
      "Consonants form the skeleton of words.",
    ],
    mistakes:
      "<strong>Xato:</strong> Talabalar koʻpincha 'unli harf' bilan 'unli tovush'ni adashtirishadi va artikl qoʻyishda xatoga yoʻl qoʻyishadi (Masalan: *a honest man* emas, *an honest man*).",
    dtmTips:
      "DTM leksika va imlo (spelling) boʻlimlarida silent letters (oʻqilmaydigan harflar) bor soʻzlarga juda e'tiborli boʻling: *honest, hour, knee, write, subtle*.",
    notes:
      "Urgʻu (stress) qoidalariga koʻra, ikki boʻgʻinli otlarda urgʻu odatda birinchi boʻgʻinga, fe'llarda esa ikkinchi boʻgʻinga tushadi.",
    practice:
      "Quyidagi soʻzlarni unli va undosh harflarga ajrating va imlosini tekshiring: Complex, Authority, International, Paradigm.",
    summary:
      "Alifbo va toʻgʻri oʻqish qoidalari ingliz tili imlosining asosi boʻlib, soʻz boyligini toʻgʻri shakllantirishga xizmat qiladi.",
    quiz: [
      {
        q: "Which of the following contains a silent 'w'?",
        a: "Write",
        b: "Water",
        c: "Winter",
        d: "Word",
        cor: "a",
      },
      {
        q: "How many vowels are in the English alphabet?",
        a: "21",
        b: "5",
        c: "6",
        d: "7",
        cor: "b",
      },
      {
        q: "Identify the word with a silent 'b':",
        a: "Climb",
        b: "Cabin",
        c: "Brave",
        d: "Public",
        cor: "a",
      },
      {
        q: "The letter 'U' in 'University' sounds like a:",
        a: "Vowel sound",
        b: "Consonant sound",
        c: "Silent sound",
        d: "Nasal sound",
        cor: "b",
      },
      {
        q: "Which letter is always capitalized in the personal pronoun form?",
        a: "i",
        b: "u",
        c: "he",
        d: "they",
        cor: "a",
      },
    ],
    answersAnalysis:
      "1. 'Write' soʻzida 'w' harfi oʻqilmaydi. 2. Ingliz alifbosida unli harflar soni 5 ta. 3. 'Climb' soʻzida oxirgi 'b' harfi talaffuz etilmaydi. 4. 'University' soʻzi undosh [y] tovushi bilan boshlanadi. 5. 'I' (men) olmoshi gapning istalgan joyida doim katta harf bilan yoziladi.",
  },
  {
    id: "nouns",
    title: "Nouns & Singular/Plural",
    category: "basic",
    explanation:
      "Ot (Noun) shaxs, narsa, joy va mavhum tushunchalarni bildiradi. DTM imtihonida otlarning birlik (singular) va koʻplik (plural) shakllari, ayniqsa qoidadan mustasno boʻlgan notoʻgʻri koʻplik shakllari va faqat birlikda yoki koʻplikda ishlatiladigan otlar mavzusi Subject-Verb Agreement (Ega va fe'l moslashuvi) uchun oʻta muhim.",
    formula: "Regular: Noun + -s / -es / -ies | Irregular: Root Vowel Change",
    formation:
      "Oxiri -s, -sh, -ch, -x, -z bilan tugagan otlarga -es; undosh + y bilan tugasa -ies qoʻshiladi. Notoʻgʻri otlar esa oʻzakdan oʻzgaradi.",
    positive: "The children are playing in the garden.",
    negative: "This expensive furniture does not fit in our room.",
    question: "Do you think these criteria are sufficient for DTM?",
    examples: [
      "The student passed the exam.",
      "All students must follow the rules.",
      "Many teeth are affected by sugar.",
      "The sheep is grazing on the hill.",
      "Those sheep are grazing quietly.",
      "Mathematics is my favorite subject.",
      "The news about the exam was surprising.",
      "Police are investigating the case.",
      "The criteria for selection are strict.",
      "This phenomenon occurs once a year.",
    ],
    mistakes:
      "<strong>Xato:</strong> *Information, advice, progress, luggage* kabi sanalmaydigan otlarga -s qoʻshish (Masalan: *informations* yoki *advices* deyish mutlaqo xatodir).",
    dtmTips:
      "DTM testlarida 'News', 'Mathematics', 'Physics', 'Measles' kabi -s bilan tugaydigan lekin birlik fe'l oladigan otlarga, hamda 'People', 'Police', 'Cattle' kabi -s siz kelib koʻplik fe'l oladigan otlarga juda koʻp tuzoq qoʻyiladi.",
    notes:
      "Lotin va yunon tillaridan kirib kelgan otlar koʻpligi oʻzgacha boʻladi: *crisis -> crises, phenomenon -> phenomena, criterion -> criteria*.",
    practice:
      "Berilgan otlarni koʻplik shakliga oʻtkazing: Wolf, Oasis, Foot, Knowledge, Species.",
    summary:
      "Otlarning birlik va koʻpligini bilish gapda fe'lni toʻgʻri tanlash (is yoki are, has yoki have)ning birlamchi shartidir.",
    quiz: [
      {
        q: "Which noun is always uncountable and singular?",
        a: "Advice",
        b: "Book",
        c: "Criterion",
        d: "Tooth",
        cor: "a",
      },
      {
        q: "Choose the correct plural form of 'Phenomenon':",
        a: "Phenomenons",
        b: "Phenomena",
        c: "Phenomeni",
        d: "Phenomenes",
        cor: "b",
      },
      {
        q: "The police _____ looking for the escaped suspect.",
        a: "is",
        b: "are",
        c: "was",
        d: "has been",
        cor: "b",
      },
      {
        q: "Economics _____ an interesting field of study.",
        a: "is",
        b: "are",
        c: "were",
        d: "have been",
        cor: "a",
      },
      {
        q: "Find the incorrect plural form:",
        a: "Children",
        b: "Mice",
        c: "Oxes",
        d: "Geese",
        cor: "c",
      },
    ],
    answersAnalysis:
      "1. 'Advice' sanalmaydi va koʻplik shakli yoʻq. 2. 'Phenomenon' koʻpligi 'Phenomena' boʻladi. 3. 'Police' jamoaviy ot boʻlib, doimo koʻplik fe'li ('are') talab qiladi. 4. Fan nomlari (-ics) birlik fe'l oladi. 5. 'Ox' soʻzining koʻpligi 'oxen' boʻladi, 'oxes' emas.",
  },
  {
    id: "pronouns",
    title: "Pronouns (Personal, Object, Possessive, Reflexive)",
    category: "basic",
    explanation:
      "Olmoshlar (Pronouns) otlarning oʻrnini takrorlamaslik uchun keladigan soʻzlardir. DTMda ularning turlari gapdagi oʻrniga (ega oʻrnidami yoki toʻldiruvchi) qarab tekshiriladi.",
    formula:
      "Subject + Verb + Object | Possessive Adjective + Noun | Possessive Pronoun (No Noun)",
    formation:
      "Egalik sifatlari (my, your) yonida majburiy ot kelishi shart, egalik olmoshlari (mine, yours) esa yolgʻiz keladi va oʻz ichiga otni qamrab oladi.",
    positive: "She cut herself while cooking dinner in the kitchen.",
    negative: "This car is not theirs; it belongs to our neighbors.",
    question: "Can you help me solve this difficult grammar task?",
    examples: [
      "I saw him at the library yesterday.",
      "This is my book, and that one is yours.",
      "They washed the car themselves.",
      "She lives by herself in a big apartment.",
      "He gave her a beautiful present.",
      "We enjoyed ourselves at the party.",
      "Our house is smaller than theirs.",
      "Is this laptop his or hers?",
      "The cat licked its paws.",
      "Please keep this secret between you and me.",
    ],
    mistakes:
      "<strong>Xato:</strong> Egalik olmoshidan keyin yana qayta ot ishlatish xatodir (Masalan: *This is mine book* emas, *This is my book* yoki *This book is mine* boʻlishi kerak).",
    dtmTips:
      "Gapda 'between' predlogidan keyin keladigan olmoshlar doimo Object kelishikda boʻladi: *between you and me* (you and I emas). Shuningdek, oʻzlik olmoshlarining 'by' predlogi bilan kelib yolgʻizlikni (*by myself = alone*) anglatishiga e'tibor bering.",
    notes:
      "'Its' (egalik sifati) bilan 'It's' (it is qisqartmasi) butunlay boshqa narsalar. DTM imtihonida buni farqlash kerak.",
    practice:
      "Boʻsh joylarni toʻldiring: This is (we) ___ project, and we did it all by (we) ___.",
    summary:
      "Olmoshlar gapda takrorlanishlarning oldini oladi va shaxs hamda egalik munosabatlarini aniq koʻrsatib beradi.",
    quiz: [
      {
        q: "This laptop is not mine. It is _____.",
        a: "your",
        b: "yours",
        c: "you",
        d: "yourself",
        cor: "b",
      },
      {
        q: "She made this cake all by _____.",
        a: "her",
        b: "herself",
        c: "she",
        d: "hers",
        cor: "b",
      },
      {
        q: "Between you and _____, I think the exam will be delayed.",
        a: "I",
        b: "me",
        c: "my",
        d: "mine",
        cor: "b",
      },
      {
        q: "The dog wagged _____ tail happily.",
        a: "its",
        b: "it's",
        c: "their",
        d: "his",
        cor: "a",
      },
      {
        q: "We haven't received _____ test results yet.",
        a: "our",
        b: "ours",
        c: "us",
        d: "ourselves",
        cor: "a",
      },
    ],
    answersAnalysis:
      "1. Gap oxirida otsiz egalik shakli 'yours' ishlatiladi. 2. 'By' predlogi bilan oʻzlik olmoshi 'herself' kelib, yolgʻiz bajarganini anglatadi. 3. 'Between'dan keyin 'me' ob'ekt shakli keladi. 4. Hayvonlar uchun egalik sifati 'its' boʻladi. 5. 'Test results' oti borligi sababli oldidan 'our' egalik sifati qoʻyiladi.",
  },
  {
    id: "articles",
    title: "Articles (A, An, The)",
    category: "basic",
    explanation:
      "Artikllar ingliz tilining eng injiq mavzularidan biri boʻlib, DTMda har yili kamida 1-2 ta savol shu mavzudan tushadi. 'A/An' faqat sanaladigan birlik otlar oldidan noaniqlik ma'nosida, 'The' esa aniq, ma'lum, yagona yoki ikkinchi marotaba eslatilayotgan otlar bilan ishlatiladi.",
    formula:
      "A/An + Consonant/Vowel Sound (Singular Countable) | The + Specific Noun",
    formation:
      "Artikl tanlash yozilishga emas, talaffuzdagi birinchi tovushga bogʻliq: *a university* (chunki [y] undosh), *an hour* (chunki [o] unli).",
    positive: "The sun rises in the east and sets in the west.",
    negative: "He is not an honest person, so do not trust him.",
    question: "Did you visit the UK or the USA last summer?",
    examples: [
      "I bought a book yesterday. The book is very rare.",
      "She is studying at a European university.",
      "The Nile is the longest river in the world.",
      "Music is beautiful. (Artikl yoʻq - umumiy ma'noda)",
      "The music played at the wedding was too loud.",
      "He plays the piano excellently.",
      "Mount Everest is high, but the Himalayas are vast.",
      "We go to school by bus. (Transport vositalari artiklsiz)",
      "An apple a day keeps the doctor away.",
      "The rich should help the poor.",
    ],
    mistakes:
      "<strong>Xato:</strong> Koʻplik yoki sanalmaydigan otlar oldidan 'a/an' ishlatish (Masalan: *a modern furniture*, *a good news* deyish notoʻgʻri).",
    dtmTips:
      "DTMda geografik nomlar koʻp soʻraladi. Togʻ tizmalari (The Alps), daryolar (The Oxus), okeanlar (The Atlantic), davlatlar jamlanmasi (The UK, The UAE) artikl 'The' bilan keladi. Yakka togʻlar (Mount Tashkent) yoki koʻllar (Lake Baikal) esa artiklsiz keladi.",
    notes:
      "Sifatlar oldiga 'The' qoʻyilganda u butun bir ijtimoiy qatlamni (koʻplikda) anglatadi: *the blind* (koʻzi ojizlar), *the unemployed* (ishsizlar).",
    practice:
      "Boʻsh joylarga artikllarni qoʻying: ___ Pacific Ocean is ___ deepest ocean on ___ Earth.",
    summary:
      "Noaniq artikl umumiy guruhdan bittasini, aniq artikl esa tinglovchiga ham, gapiruvchiga ham ma'lum boʻlgan ob'ektni koʻrsatadi.",
    quiz: [
      {
        q: "He is _____ expert in English grammar.",
        a: "a",
        b: "an",
        c: "the",
        d: "no article",
        cor: "b",
      },
      {
        q: "We arrived in _____ London on a rainy afternoon.",
        a: "a",
        b: "an",
        c: "the",
        d: "no article",
        cor: "d",
      },
      {
        q: "_____ Netherlands is a beautiful European country.",
        a: "A",
        b: "An",
        c: "The",
        d: "No article",
        cor: "c",
      },
      {
        q: "My brother plays _____ football every weekend.",
        a: "a",
        b: "an",
        c: "the",
        d: "no article",
        cor: "d",
      },
      {
        q: "He is _____ oldest student in our graduation class.",
        a: "a",
        b: "an",
        c: "the",
        d: "no article",
        cor: "c",
      },
    ],
    answersAnalysis:
      "1. 'Expert' unli tovush bilan boshlangani uchun 'an'. 2. Shahar nomlari oldidan artikl ishlatilmaydi. 3. Koʻplik shaklidagi davlat nomlari 'The' oladi. 4. Sport oʻyinlari nomlari oldidan artikl qoʻyilmaydi. 5. Sifatning orttirma (superlative) darajasi doimo 'The' artiklini talab qiladi.",
  },
  {
    id: "quantifiers",
    title: "Quantifiers (Much, Many, Few, Little, Some, Any)",
    category: "basic",
    explanation:
      "Miqdor koʻrsatkichlari (Quantifiers) otlarning qanchaligini bildiradi. DTM imtihonida savollarning koʻpchiligi otning sanalish-sanalmasligi va gapning darak yoki inkorligiga qarab toʻgʻri quantiﬁerni tanlashga asoslanadi.",
    formula:
      "Many/Few/A Few + Countable Plural | Much/Little/A Little + Uncountable",
    formation:
      "'Few' va 'Little' deyarli yoʻq (salbiy ma'no), 'A few' va 'A little' esa kam boʻlsa ham yetarli (ijobiy ma'no) deganidir. 'Some' darak gapda, 'Any' esa inkor va soʻroq gapda keladi.",
    positive: "There is a little milk left, enough to make a cup of coffee.",
    negative: "I don't have many friends who live in this remote area.",
    question: "Would you like some tea? (Taklif gapda some kelishi mumkin)",
    examples: [
      "How many books did you analyze for your DTM project?",
      "There isn't much water in the reservoir.",
      "He has few chances of passing without preparation.",
      "I have a few ideas that might help our team.",
      "She speaks little English, so she needs a translator.",
      "Can I have some pieces of advice? (advice oʻzi sanalmaydi, pieces sanaladi)",
      "Do you have any questions regarding the article?",
      "A lot of people attended the final educational forum.",
      "There is lots of money invested in IT Park nowadays.",
      "Hardly any students failed the preliminary test.",
    ],
    mistakes:
      "<strong>Xato:</strong> *Few* yoki *many* soʻzlarini sanalmaydigan otlar bilan ishlatish (Masalan: *many traffic*, *few time* deyish mutlaqo xatodir).",
    dtmTips:
      "Agarda gapda *too, so, as* soʻzlari kelsa, ulardan keyin hech qachon *a lot of* ishlatib boʻlmaydi. Faqat *too much, too many, so little, so few* kombinatsiyalari toʻgʻridir.",
    notes:
      "'Any' soʻzi darak gapda kelsa 'istalgan', 'har qanday' degan ma'noni beradi: *You can take any bus, they all go to the center*.",
    practice:
      "Boʻsh joylarga 'little' yoki 'few' qoʻying: We have very ___ options left, and very ___ information.",
    summary:
      "Otlarning grammatik xarakterini aniqlash orqali unga mos keladigan miqdoriy soʻzlarni xatosiz joylashtirish mumkin.",
    quiz: [
      {
        q: "There is too _____ traffic on the main road today.",
        a: "many",
        b: "much",
        c: "few",
        d: "a lot of",
        cor: "b",
      },
      {
        q: "I have _____ friends in Tashkent, so I never feel lonely.",
        a: "little",
        b: "few",
        c: "a few",
        d: "much",
        cor: "c",
      },
      {
        q: "The manager has _____ time for long discussions; he is busy.",
        a: "little",
        b: "a little",
        c: "few",
        d: "a few",
        cor: "a",
      },
      {
        q: "Have you seen _____ good English movies lately?",
        a: "some",
        b: "any",
        c: "much",
        d: "little",
        cor: "b",
      },
      {
        q: "A large number of students _____ present at the hall.",
        a: "is",
        b: "are",
        c: "was",
        d: "has been",
        cor: "b",
      },
    ],
    answersAnalysis:
      "1. 'Traffic' sanalmaydi, oldidan 'too' borligi uchun 'much' keladi. 2. 'Lonely' (yolgʻiz) his qilmasligi uchun doʻstlari yetarli, ya'ni 'a few'. 3. Vaqti yoʻq, deyarli mavjud emas ma'nosida sanalmaydigan ot uchun 'little' olinadi. 4. Oddiy soʻroq gapda 'any' ishlatiladi. 5. 'A large number of' iborasi doimo koʻplik fe'li talab qiladi.",
  },
  {
    id: "prepositions",
    title: "Prepositions (Place, Time, Movement)",
    category: "basic",
    explanation:
      "Predloglar (Prepositions) makon, zamon va harakat yoʻnalishlarini koʻrsatib beradi. DTM testlarida vaqt predloglari (in, on, at), joylashuv qoidalari hamda fe'l+predlog (dependent prepositions) birikmalari juda keng tekshiriladi.",
    formula:
      "At (point, precise time) | On (surface, days) | In (enclosed space, months/years)",
    formation:
      "Harakat yoʻnalishlari uchun *into* (ichkariga), *onto* (ustiga), *through* (ichidan kesib oʻtish), *towards* (tarafga) predloglari ishlatiladi.",
    positive: "The final exam will start at 9:00 AM on Monday in August.",
    negative: "They did not jump into the river because it looked dangerous.",
    question: "Is your flat located on the third floor of this building?",
    examples: [
      "He is sitting at his desk working hard.",
      "I was born in Tashkent in 2005.",
      "The keys are on the kitchen table.",
      "She walked through the dense forest safely.",
      "The cat climbed onto the high roof.",
      "We are planning to go to the mountains at the weekend.",
      "He arrived in Uzbekistan two days ago. (Arrive in + country/city)",
      "We arrived at the airport just in time. (Arrive at + building/station)",
      "The book is hidden under the heavy cushions.",
      "They ran towards the stadium when it started raining.",
    ],
    mistakes:
      "<strong>Xato:</strong> Kunlar oldidan 'in' ishlatish yoki transportlarda adashish (Masalan: *in Monday* emas *on Monday*; *on car* emas *in my car* yoki *by car*).",
    dtmTips:
      "Hafta oxiri uchun Britaniya ingliz tilida *at the weekend*, Amerika variantida esa *on the weekend* ishlatiladi. DTM odatda Britaniya standartiga (at the weekend) tayanadi. Shuningdek, 'depend on', 'congratulate on', 'accuse of' kabi qat'iy birikmalarni yodlang.",
    notes:
      "Vaqt ifodalari oldida *next, last, this, every* soʻzlari kelsa, hech qanday predlog ishlatilmaydi: *on last Sunday* deyish xato, shunchaki *last Sunday* boʻladi.",
    practice:
      "Predloglarni qoʻying: He will meet you ___ the bus stop ___ noon ___ Friday.",
    summary:
      "Predloglar gapda soʻzlar oʻrtasidagi mantiqiy va fazoviy aloqalarni toʻgʻri oʻrnatishga xizmat qiladi.",
    quiz: [
      {
        q: "We usually celebrate Independence Day _____ September 1st.",
        a: "in",
        b: "on",
        c: "at",
        d: "by",
        cor: "b",
      },
      {
        q: "The children are playing _____ the park at the moment.",
        a: "at",
        b: "on",
        c: "in",
        d: "to",
        cor: "c",
      },
      {
        q: "She walked straight _____ the room without knocking.",
        a: "into",
        b: "onto",
        c: "through",
        d: "at",
        cor: "a",
      },
      {
        q: "I am really interested _____ learning international history.",
        a: "on",
        b: "in",
        c: "at",
        d: "about",
        cor: "b",
      },
      {
        q: "They arrived _____ Tashkent International Airport late at night.",
        a: "in",
        b: "at",
        c: "on",
        d: "to",
        cor: "b",
      },
    ],
    answersAnalysis:
      "1. Aniq sanalar (kunlar) oldidan 'on' qoʻyiladi. 2. Bogʻ ichida, hudud ichida ma'nosida 'in the park' boʻladi. 3. Ichkariga harakat yoʻnalishi 'into' bilan beriladi. 4. 'Interested' sifati doimo 'in' predlogini oladi. 5. Aniq muassasa yoki binoga yetib kelish 'arrive at' orqali ifodalanadi.",
  },
  {
    id: "to-be-tenses",
    title: "To Be (Present, Past, Future)",
    category: "verbs",
    explanation:
      "To Be fe'li ingliz tilining eng birinchi va asosiy ustunidir. U harakatni emas, balki shaxs yoki narsaning kimligi, qandayligi, qayerdaligi va holatini (statusini) bildiradi. DTM darajasida bu fe'l asosan murakkab zamonlar va passiv shakllarning yordamchi qismi sifatida fundamental rol oʻynaydi.",
    formula: "Present: am/is/are | Past: was/were | Future: will be",
    formation:
      "Egalarga qarab tuslanadi: I am, He/She/It is, We/You/They are. Oʻtgan zamonda birliklar uchun was, koʻpliklar uchun were ishlatiladi.",
    positive: "The historical results of the exam will be ready tomorrow.",
    negative: "We were not aware of the structural changes in the DTM system.",
    question: "Are you the student who won the regional chemistry olympiad?",
    examples: [
      "I am currently a student at the technical academy.",
      "The weather was extremely cold last January.",
      "They will be engineers after graduating from university.",
      "She is very famous for her scientific publications.",
      "We were in Samarkand during the spring holidays.",
      "The project will be completed on time, don't worry.",
      "It is an honor to meet such an experienced professor.",
      "Those books were not available in our local library.",
      "Will you be free this evening for a short discussion?",
      "The internet connection was highly unstable yesterday.",
    ],
    mistakes:
      "<strong>Xato:</strong> To Be bor gapda oddiy harakat fe'lini ham toʻgʻridan-toʻgʻri qoʻshib yuborish (Masalan: *He is live in Bukhara* yoki *I am agree with you* deyish mutlaqo xatodir. Toʻgʻrisi: *He lives...* / *I agree...*).",
    dtmTips:
      "To be fe'li gapda asosiy fe'l boʻlib kelganda, uning inkor yoki soʻroq shakli uchun hech qachon *do, does, did* yordamchi fe'llari ishlatilmaydi: *Did you be at home?* (Xato) -> *Were you at home?* (Toʻgʻri).",
    notes:
      "'There to be' iborasi mavjudlikni bildiradi va keyin kelayotgan birinchi otga qarab moslashadi: *There is a book and two pens*.",
    practice:
      "Ushbu gapni oʻtgan va kelasi zamonga oʻgiring: 'This center is highly innovative.'",
    summary:
      "To be fe'li holat, joy va sifatni bogʻlovchi eng asosiy grammatik elementdir.",
    quiz: [
      {
        q: "Neither the teacher nor the students _____ present yesterday.",
        a: "is",
        b: "was",
        c: "are",
        d: "were",
        cor: "d",
      },
      {
        q: "I think the weather _____ fine during our upcoming trip.",
        a: "is",
        b: "was",
        c: "will be",
        d: "been",
        cor: "c",
      },
      {
        q: "Why _____ you so angry during the meeting two days ago?",
        a: "did",
        b: "was",
        c: "were",
        d: "are",
        cor: "c",
      },
      {
        q: "Every student in this classroom _____ ready for the final exam.",
        a: "is",
        b: "are",
        c: "were",
        d: "be",
        cor: "a",
      },
      {
        q: "The news about the structural reforms _____ highly motivating.",
        a: "is",
        b: "are",
        c: "were",
        d: "have been",
        cor: "a",
      },
    ],
    answersAnalysis:
      "1. 'Neither... nor' qoidasida fe'l oʻziga eng yaqin turgan otga ('students' - koʻplik) qarab 'were' boʻladi. 2. 'Upcoming' kelajakni bildirgani uchun 'will be'. 3. Oʻtgan zamon soʻrogʻi va ega 'you' boʻlgani uchun 'were' keladi. 4. 'Every' bilan boshlangan iboralar doimo birlik fe'l ('is') oladi. 5. 'News' sanalmaydigan birlik ot boʻlgani uchun 'is' toʻgʻri.",
  },
  {
    id: "present-simple",
    title: "Present Simple Tense",
    category: "tenses",
    explanation:
      "Hozirgi oddiy zamon doimiy takrorlanib turadigan harakatlar, odatlar, umumiy haqiqat va tabiat qonunlarini ifodalash uchun ishlatiladi. DTM imtihonida jadval asosidagi kelajakdagi harakatlar (timetable) va vaqt hamda shart ergash gaplardagi (Conditionals / Time clauses) kelajak ma'nosini ifodalash qoidalari oʻta faol tekshiriladi.",
    formula: "S + V(-s/-es) | Inkor/Soʻroq: Do / Does",
    formation:
      "Uchinchi shaxs birlik (He, She, It) uchun fe'l oxiriga -s yoki -es qoʻshimchasi qoʻshiladi. Inkor va soʻroq gaplarda bu -s qoʻshimchasi 'does' yordamchi fe'liga oʻtib ketadi.",
    positive: "The train to Khiva departs at exactly 8:00 PM tomorrow.",
    negative:
      "He does not look like a person who deeply cares about statistics.",
    question: "Does the Earth revolve around the Sun in an elliptical orbit?",
    examples: [
      "My father works at an international banking institution.",
      "Water boils at 100 degrees Celsius under normal pressure.",
      "We usually practice test sorting techniques every weekend.",
      "They don't live near the metropolitan area anymore.",
      "She speaks fluent English and intermediate Korean.",
      "The school semester begins on September 4th according to the schedule.",
      "Do you understand the core mechanism of this physical reaction?",
      "An honest judge never takes bribes from suspects.",
      "Plants need sunlight and water in order to grow efficiently.",
      "Every time he arrives late, the professor gets disappointed.",
    ],
    mistakes:
      "<strong>Xato:</strong> Uchinchi shaxsda -s qoʻshimchasini unutish yoki inkor gapda ham 'does' va '-s'ni baravar ishlatish (Masalan: *He does not works here* deyish qoʻpol xatodir. Toʻgʻrisi: *He does not work here*).",
    dtmTips:
      "Eng katta DTM tuzogʻi: Kelajak zamon markerlari (*tomorrow, next week*) tursa ham, agar gap rasmiy jadval (poyezd, samolyot, dars jadvali, kinoteatr) haqida boʻlsa, Future Simple emas, Present Simple tanlanadi: *The plane takes off at 5 AM tomorrow*.",
    notes:
      "Tez-tez takrorlanish ravishlari (always, usually, often) har doim asosiy fe'ldan oldin, lekin To Be fe'lidan keyin joylashadi.",
    practice:
      "Ushbu gapni inkor shakliga oʻtkazing va xatolarini tuzating: 'She fly to London every spring.'",
    summary:
      "Doimiylik, qonuniyatlar va rasmiy jadvallar Present Simple zamonining mutloq hududidir.",
    quiz: [
      {
        q: "The lecture on modern cryptography _____ at 9:00 AM tomorrow.",
        a: "will start",
        b: "starts",
        c: "is starting",
        d: "start",
        cor: "b",
      },
      {
        q: "He _____ any responsibility for the team's academic failure.",
        a: "do not take",
        b: "does not take",
        c: "not takes",
        d: "doesn't takes",
        cor: "b",
      },
      {
        q: "How often _____ your cousin visit the technology center?",
        a: "do",
        b: "is",
        c: "does",
        d: "did",
        cor: "c",
      },
      {
        q: "Gold _____ at a much higher temperature than silver.",
        a: "melts",
        b: "melt",
        c: "will melt",
        d: "is melting",
        cor: "a",
      },
      {
        q: "As soon as she _____ tomorrow, we will initiate the project.",
        a: "will arrive",
        b: "arrives",
        c: "arrive",
        d: "is arriving",
        cor: "b",
      },
    ],
    answersAnalysis:
      "1. Rasmiy jadval boʻlgani uchun 'tomorrow' boʻlsa ham 'starts' (Present Simple) boʻladi. 2. 'He' uchinchi shaxs birlik, inkor shakli 'does not take' boʻladi. 3. 'Your cousin' (u) boʻlgani uchun soʻroqda 'does' keladi. 4. Tabiat va fizika qonuniyati doimo Present Simpleda yoziladi. 5. 'As soon as' vaqt bogʻlovchisidan keyin kelajak ma'nosida Future ishlatilmaydi, oʻrniga Present Simple ('arrives') qoʻyiladi.",
  },
  {
    id: "present-continuous",
    title: "Present Continuous Tense",
    category: "tenses",
    explanation:
      "Hozirgi davomli zamon aynan nutq soʻzlanib turgan vaqtda sodir boʻlayotgan, jarayondagi harakatlarni ifodalaydi. Shuningdek, u oldindan rejalashtirilgan aniq kelajakdagi harakatlar (arrangements) va gʻashni keltiradigan odatlarni ('always' bilan) ifodalash uchun qoʻllaniladi.",
    formula: "S + am / is / are + V-ing",
    formation:
      "To be fe'lining hozirgi zamon shakllari ega ortidan keladi va asosiy fe'lga ing qoʻshimchasi ulanadi. Inkor shakli 'not' yuklamasini to be dan keyin qoʻyish bilan yasaladi.",
    positive:
      "The dynamic population of Tashkent is growing rapidly these years.",
    negative:
      "I am not participating in the upcoming non-standard testing session.",
    question:
      "Why are you constantly interrupting the speaker during the debate?",
    examples: [
      "Look! The architectural students are measuring the monument.",
      "Listen! Someone is knocking on the classroom laboratory door.",
      "We are currently developing an automated grading system for CEFR.",
      "She is meeting the university rector at 4:00 PM today. (Aniq reja)",
      "They are living with their relatives until the dormitory is renovated.",
      "The climate is changing due to high industrial emissions globalwide.",
      "Why are you wearing a heavy coat inside the heated room?",
      "He is always losing his entrance ticket; it is so annoying!",
      "I am working on my master's dissertation this month.",
      "Are they preparing the presentation slides right now?",
    ],
    mistakes:
      "<strong>Xato:</strong> Holat fe'llarini (Stative verbs: *know, love, understand, remember, want*) bu zamonda ishlatish (Masalan: *I am knowing the rule now* emas, *I know the rule now* boʻladi).",
    dtmTips:
      "DTM testlarida 'always' ravishi bilan kelgan Present Continuousga e'tibor bering. Agar harakat shunchaki odat emas, balki gapiruvchining gʻashini keltirayotgan, unga yoqmayotgan takroriy jarayon boʻlsa, Simple emas Continuous boʻladi: *You are always making excuses!*",
    notes:
      "Hozirgi davomli zamon vaqtinchalik xarakterga ega vaziyatlarni koʻrsatish uchun ham ishlatiladi (*I am living in a hotel for a few days*).",
    practice:
      "Xatosini toping: 'I am remembering my childhood memories whenever I see this photograph.'",
    summary:
      "Ayni damdagi harakatlar, vaqtinchalik vaziyatlar va shaxsiy aniq rejalar uchun ushbu zamon mas'uldir.",
    quiz: [
      {
        q: "Don't make so much noise. The primary investigators _____ to focus.",
        a: "try",
        b: "are trying",
        c: "will try",
        d: "have tried",
        cor: "b",
      },
      {
        q: "We _____ a comprehensive simulation exam this Saturday at noon.",
        a: "are having",
        b: "have",
        c: "will have had",
        d: "had",
        cor: "a",
      },
      {
        q: "You _____ your car keys! Please be more organized.",
        a: "always lose",
        b: "are always losing",
        c: "have always lost",
        d: "lost",
        cor: "b",
      },
      {
        q: "I _____ the exact reason why the experiment failed.",
        a: "am not knowing",
        b: "don't know",
        c: "haven't known",
        d: "was not knowing",
        cor: "b",
      },
      {
        q: "Look! The water level in the local canal _____ dangerous heights.",
        a: "reaches",
        b: "is reaching",
        c: "has been reaching",
        d: "reach",
        cor: "b",
      },
    ],
    answersAnalysis:
      "1. 'Noise' qilmaslik soʻralayotgan ayni lahzada sodir boʻlayotgan harakat: 'are trying'. 2. Shanba kuni uchun belgilangan shaxsiy aniq reja 'are having' orqali beriladi. 3. Insonning gʻashini keltiradigan asabiy odat 'always' va continuous kombinatsiyasida ochiladi. 4. 'Know' holat fe'li, continuousda ishlatilmaydi, shuning uchun 'don't know'. 5. 'Look!' buyruq gapi ayni vaqtdagi vizual jarayonni koʻrsatadi: 'is reaching'.",
  },
  {
    id: "present-perfect",
    title: "Present Perfect Tense",
    category: "tenses",
    explanation:
      "Hozirgi tugallangan zamon oʻtmishda qachon sodir boʻlgani noma'lum boʻlgan, lekin natijasi va asorati hozirgi zamon bilan uzviy bogʻliq boʻlgan ish-harakatlarni ifodalaydi. Shuningdek, insonning hayotiy tajribasini koʻrsatish uchun xizmat qiladi. DTMda eng koʻp soʻraladigan va marker soʻzlari eng zich boʻlgan zamonlardan biridir.",
    formula: "S + have / has + V3 (-ed)",
    formation:
      "Ega 'He, She, It' boʻlganda 'has', qolgan barcha egalar uchun 'have' yordamchi fe'li hamda asosiy fe'lning uchinchi shakli (V3 / Past Participle) qoʻllaniladi.",
    positive:
      "The educational ministry has introduced a new testing blueprint recently.",
    negative:
      "We have not submitted our electronic applications to the server yet.",
    question:
      "Have you ever witnessed such a dramatic shift in academic scores?",
    examples: [
      "I have already completed three comprehensive grammar modules.",
      "She has lived in Tashkent since her family moved from Nukus.",
      "They have known each other for more than a decade.",
      "He has gone to the Ministry of Education. (U oʻsha yerda, hali qaytmagan)",
      "He has been to Samarkand twice. (U borib kelgan, hozir shu yerda)",
      "This is the best scientific essay I have ever read.",
      "The scientist has conducted several successful operations this month.",
      "Prices of technological devices have dropped significantly this year.",
      "Up to now, we haven't found any major vulnerabilities in the system.",
      "Has the prime minister signed the decree yet?",
    ],
    mistakes:
      "<strong>Xato:</strong> Aniq oʻtgan zamon vaqti (yesterday, 2 years ago, in 2020) bor gapda Present Perfect ishlatish (Masalan: *I have seen him yesterday* - mutloq xato. Toʻgʻrisi: *I saw him yesterday*).",
    dtmTips:
      "DTMda 'Since' va 'For' qoidasi juda mashhur. *Since* dan keyin harakatning boshlanish nuqtasi (sanasi/vaqti yoki Past Simple gap), *For* dan keyin esa davomiylik muddati keladi. Shuningdek *This is the first time...* iborasidan keyin doimo Present Perfect kelishini unutmang.",
    notes:
      "'Have gone to' (ketgan, hali qaytmagan) va 'Have been to' (borib kelgan, tajribaga ega) oʻrtasidagi farq vaziyatli testlarda tez-tez soʻraladi.",
    practice:
      "Gapni toʻgʻrilang: 'This is the second time I visited the national museum this week.'",
    summary:
      "Oʻtmishdagi harakat, hozirgi zamondagi yaqqol natija va hayotiy tajriba — Present Perfect muhridir.",
    quiz: [
      {
        q: "She _____ three international awards since she started her research.",
        a: "won",
        b: "has won",
        c: "had won",
        d: "was winning",
        cor: "b",
      },
      {
        q: "The postman cannot give you the letter because he _____ to the head office.",
        a: "has gone",
        b: "has been",
        c: "went",
        d: "was going",
        cor: "a",
      },
      {
        q: "This is the most challenging exam paper we _____ encountered.",
        a: "ever",
        b: "did ever",
        c: "have ever",
        d: "had ever",
        cor: "c",
      },
      {
        q: "They _____ each other since they were undergraduate freshmen.",
        a: "know",
        b: "are knowing",
        c: "have known",
        d: "had known",
        cor: "c",
      },
      {
        q: "I _____ my computer keys, so I cannot log into the database now.",
        a: "lost",
        b: "have lost",
        c: "had lost",
        d: "lose",
        cor: "b",
      },
    ],
    answersAnalysis:
      "1. 'Since' dan keyingi qism Past Simpleda, asosiy qism esa Present Perfectda ('has won') boʻladi. 2. Postman hali shu yerda boʻlmagani va ketganligi sababli 'has gone' mos keladi. 3. 'This is the most... + Present Perfect' super-konstruksiyasi tufayli 'have ever' toʻgʻri. 4. 'Know' davomli boʻla olmaydigan holat fe'li boʻlgani uchun 'since' bilan Present Perfect Continuous emas, oddiy Present Perfect ('have known') olinadi. 5. Kalitni yoʻqotganligi hozirgi daqiqada kompyuterga kira olmaslik asoratini beryapti: 'have lost'.",
  },
  {
    id: "past-simple",
    title: "Past Simple Tense",
    category: "tenses",
    explanation:
      "Oʻtgan oddiy zamon oʻtmishda aniq bir vaqtda sodir boʻlgan va butunlay yakunlangan ish-harakatlar, faktlar yoki ketma-ket kelgan voqealarni ifodalaydi. DTM imtihonining deyarli har bir variantida notoʻgʻri fe'llarning (irregular verbs) oʻtgan zamon shakllari va vaqt markerlari ishtirokidagi testlar uchraydi.",
    formula: "S + V2 / V-ed | Inkor/Soʻroq: Did + V1",
    formation:
      "Toʻgʻri fe'llarga -ed qoʻshiladi, notoʻgʻri fe'llar esa jadval boʻyicha oʻzgaradi (go-went, buy-bought). Inkor va soʻroq gaplarda 'did' ishlatilishi bilan fe'l oʻzining boshlangʻich shakliga (V1) qaytadi.",
    positive: "The government constructed the central railway line in 1994.",
    negative:
      "We did not receive any notification about the sudden deadline change.",
    question:
      "When did the archeologists discover the ancient ruins near Termez?",
    examples: [
      "I graduated from the specialized academic lyceum two years ago.",
      "They spent their entire summer vacation doing volunteer work.",
      "He wrote a comprehensive report and submitted it immediately. (Ketma-ketlik)",
      "Shakespeare composed many timeless plays during his career.",
      "We didn't notice any statistical anomalies in the primary draft.",
      "Did you check the exam sit number before entering the hall?",
      "The historic library caught fire during the night bombardment.",
      "She taught English literature at our university for forty years.",
      "Yesterday, I woke up early, packed my bags, and left for Tashkent.",
      "The initial peace treaty failed to resolve the border issue.",
    ],
    mistakes:
      "<strong>Xato:</strong> Soʻroq va inkor gaplarda 'did' yordamchi fe'li bilan birga yana fe'lning oʻtgan zamon shaklini qoʻshib ishlatish (Masalan: *Did you went there?* yoki *I didn't wrote it* - qoʻpol xatodir. Toʻgʻrisi: *Did you go...?* / *I didn't write it*).",
    dtmTips:
      "Agar gapda *ago, yesterday, last week, in 1991, during the war* kabi aniq oʻtmish vaqti koʻrsatilgan boʻlsa, Present Perfect haqida unuting — faqat Past Simple toʻgʻri boʻladi. Shuningdek, *When* bilan boshlangan soʻroq gaplarda odatda Present Perfect kelmaydi, Past Simple keladi.",
    notes:
      "'Used to + V1' strukturasi oʻtmishda muntazam boʻlgan, lekin hozirda toʻxtagan odatlarni ifodalash uchun aynan Past Simple oʻrnida kelishi mumkin.",
    practice:
      "Fe'llarni Past Simplega oʻtkazib gapni qayta yozing: 'She (catch) the ball and (throw) it back to him.'",
    summary:
      "Oʻtmishda tugagan, aniq vaqti bor harakatlar Past Simple nazoratidadir.",
    quiz: [
      {
        q: "The secondary committee _____ the financial proposal last Tuesday.",
        a: "has approved",
        b: "approved",
        c: "had approved",
        d: "approves",
        cor: "b",
      },
      {
        q: "When _____ the first international space station into the orbit?",
        a: "did they launch",
        b: "have they launched",
        c: "had they launched",
        d: "do they launch",
        cor: "a",
      },
      {
        q: "I _____ anything suspicious when I locked the office yesterday.",
        a: "didn't see",
        b: "didn't saw",
        c: "haven't seen",
        d: "hadn't seen",
        cor: "a",
      },
      {
        q: "The legendary architect _____ the palace plans in a single night.",
        a: "draw",
        b: "drew",
        c: "drawn",
        d: "has drawn",
        cor: "b",
      },
      {
        q: "We _____ for three hours before finding the correct exit pathway.",
        a: "walk",
        b: "walked",
        c: "have walked",
        d: "are walking",
        cor: "b",
      },
    ],
    answersAnalysis:
      "1. 'Last Tuesday' aniq oʻtgan zamon vaqti, javob: 'approved'. 2. 'When' soʻroq soʻzi bilan oʻtmishdagi voqeani soʻrash 'did they launch' shaklida boʻladi. 3. 'Did' kelganda fe'lning birinchi shakli keladi, vaqt 'yesterday' boʻlgani uchun 'didn't see'. 4. 'Draw' fe'lining ikkinchi shakli 'drew' hisoblanadi. 5. Oʻtmishda tugagan voqea davomiyligi oddiygina 'walked' orqali ifodalangan.",
  },
  {
    id: "future-simple",
    title: "Future Simple & Be Going To",
    category: "tenses",
    explanation:
      "Kelasi oddiy zamon (Future Simple) kelajakda sodir boʻladigan, oʻsha lahzada qabul qilingan qarorlar, taxminlar va va'dalarni ifodalaydi. 'Be going to' iborasi esa oldindan rejalashtirilgan niyatlar va hozirda koʻrinib turgan yaqqol dalillarga asoslangan yaqin kelajakni bildiradi. DTMda bu ikkisining farqini topish eng ommabop savollardan.",
    formula:
      "Future Simple: S + will + V1 | Be Going To: S + am/is/are going to + V1",
    formation:
      "Will barcha shaxslar uchun bir xil keladi. 'Be going to' esa egaga qarab *am going to, is going to, are going to* shaklida oʻzgaradi.",
    positive:
      "I think the global economy will improve next year, but look at those clouds, it is going to rain soon.",
    negative:
      "We will not support any unethical scientific research, nor are we going to buy their illegal patents.",
    question:
      "Will you open the window for me, please? Are you going to study abroad?",
    examples: [
      "I will help you with those heavy bags. (Oʻsha lahzadagi qaror)",
      "I am going to study computer science next semester. (Oldindan bor niyat)",
      "Scientists predict that robots will replace many manual jobs by 2035.",
      "Look at that speeding car! It is going to crash into the fence!",
      "I promise I will not disclose your personal test results to anyone.",
      "Are you going to attend the international innovation summit this autumn?",
      "Perhaps we will find a better alternative solution later.",
      "She is going to have a baby in two months. (Dalil bor - yaqin kelajak)",
      "Don't worry, the security team will protect the laboratory data.",
      "The company is going to launch its new application this Friday.",
    ],
    mistakes:
      "<strong>Xato:</strong> Koʻz oldimizda turgan aniq dalil bor vaziyatda ham 'will' ishlatib yuborish (Masalan: *Look! That glass is full. It will spill!* - Xato. Toʻgʻrisi: *It is going to spill!* boʻladi, chunki dalil bor).",
    dtmTips:
      "Agar gapda *I think, I believe, perhaps, probably, I hope, I promise* kabi shaxsiy sub'ektiv fikr va taxmin bildiruvchi soʻzlar kelsa, doimo 'will' variantini afzal koʻring.",
    notes:
      "Suhbat davomida biron xizmatni taklif qilish (spontaneous offer) faqat 'will' bilan boʻladi: *The phone is ringing. I'll answer it!*",
    practice:
      "Vaziyatga qarab 'will' yoki 'be going to' qoʻying: 'I have decided. I ___ learn French next winter.'",
    summary:
      "Will — spontan qarorlar va taxminlar uchun; Be going to — niyat va dalilli kelajak uchun.",
    quiz: [
      {
        q: "Watch out! That unstable ladder _____ down!",
        a: "will fall",
        b: "is going to fall",
        c: "falls",
        d: "will be falling",
        cor: "b",
      },
      {
        q: "I hope our national football team _____ the Asian Cup next time.",
        a: "will win",
        b: "is winning",
        c: "is going to win",
        d: "wins",
        cor: "a",
      },
      {
        q: "The phone is ringing. - Okay, I _____ it.",
        a: "am going to answer",
        b: "will answer",
        c: "answer",
        d: "am answering",
        cor: "b",
      },
      {
        q: "We _____ a new software factory in Fergana; the budget is already approved.",
        a: "will build",
        b: "are going to build",
        c: "build",
        d: "will be building",
        cor: "b",
      },
      {
        q: "I promise I _____ anyone what happened during the private interview.",
        a: "will not tell",
        b: "am not going to tell",
        c: "don't tell",
        d: "won't told",
        cor: "a",
      },
    ],
    answersAnalysis:
      "1. 'Watch out!' ogohlantirishi yaqinlashib kelayotgan vizual faktni bildiradi: 'is going to fall'. 2. 'I hope' soʻzi borligi sababli taxminiy kelajak 'will win' boʻladi. 3. Spontan, oʻsha lahzada qabul qilingan qaror: 'will answer'. 4. Budjeti tasdiqlangan, oldindan rejalashtirilgan qat'iy niyat: 'are going to build'. 5. Va'da berish (I promise) kontekstida 'will not / won't' strukturasi ishlatiladi.",
  },
  {
    id: "conditionals",
    title: "Conditionals (Zero, 1st, 2nd, 3rd & Mixed)",
    category: "adv",
    explanation:
      "Shart ergash gaplar (Conditionals) biron harakatning bajarilishi boshqa bir shartga bogʻliq ekanligini koʻrsatadi. DTM imtihonida eng yuqori ball beruvchi, formulalari qat'iy tekshiriladigan murakkab va fundamental mavzulardan biridir.",
    formula:
      "Zero: If+Present, Present | 1st: If+Present, Will+V1 | 2nd: If+Past, Would+V1 | 3rd: If+Past Perfect, Would+Have+V3",
    formation:
      "Mixed Conditionals ikki xil boʻladi: Oʻtmishdagi shartning hozirgi natijasi (If + Past Perfect, Would + V1) yoki doimiy holatning oʻtmishdagi natijasi (If + Past Simple, Would + have + V3).",
    positive:
      "If he had studied more responsibly last year, he would possess a CEFR certificate now.",
    negative:
      "Unless you submit the original document, the committee will not process your application.",
    question: "What would you do if you were in my position during the test?",
    examples: [
      "If you heat ice, it melts into water. (Zero Conditional)",
      "If it rains tomorrow, we will postpone the outdoor conference. (Type 1)",
      "If I won a million dollars, I would build a grand school. (Type 2 - no-real hozir)",
      "If she had arrived earlier, she would have met the delegation. (Type 3 - no-real oʻtmish)",
      "If I were taller, I would have joined the basketball team last year. (Mixed)",
      "If they had registered on time, they would be taking the exam today. (Mixed)",
      "Providing that you agree to the terms, we will sign the contract.",
      "Should you need any assistance, please call our support. (Inversion Type 1)",
      "Were I wealthy, I would fund space exploration. (Inversion Type 2)",
      "Had I known your schedule, I would have visited you. (Inversion Type 3)",
    ],
    mistakes:
      "<strong>Xato:</strong> If qismida 'will' yoki 'would' ishlatib yuborish (Masalan: *If I will pass the exam, I will celebrate* - mutloq notoʻgʻri. Toʻgʻrisi: *If I pass...*).",
    dtmTips:
      "DTMda 'Unless' (*if... not* ma'nosini beradi, ichida oʻzi inkor boʻlgani uchun undan keyingi fe'l faqat tasdiq shaklda keladi) va Inversiya (Should/Were/Had gap boshiga chiqishi) qoidalari oʻta koʻp soʻraladi. Misol: *Had I seen* = *If I had seen*.",
    notes:
      "Type 2 dagi 'If I were' shaklida 'was' ishlatish ham ogʻzaki nutqda uchraydi, lekin DTM standartlarida barcha shaxslar (I, He, She, It) uchun faqat **WERE** toʻgʻri deb olinadi.",
    practice:
      "Berilgan gapni Type 3 shakliga oʻtkazing: 'If she invites me, I will go.'",
    summary:
      "Vaqt va reallik darajasiga qarab 5 xil shart gap shakli va ularning inversiyalari mavjud.",
    quiz: [
      {
        q: "If the mechanics _____ the engine yesterday, the truck wouldn't have broken down.",
        a: "checked",
        b: "have checked",
        c: "had checked",
        d: "would check",
        cor: "c",
      },
      {
        q: "Unless you _____ harder, you will never get a high score in DTM.",
        a: "don't study",
        b: "study",
        c: "will study",
        d: "studied",
        cor: "b",
      },
      {
        q: "_____ I known about your arrival, I would have met you at the railway station.",
        a: "Should",
        b: "Were",
        c: "Had",
        d: "If I",
        cor: "c",
      },
      {
        q: "If my brother _____ British, he wouldn't need a visa to enter London now.",
        a: "is",
        b: "was",
        c: "were",
        d: "had been",
        cor: "c",
      },
      {
        q: "If they had bought the house last year, they _____ rent now.",
        a: "won't pay",
        b: "wouldn't pay",
        c: "wouldn't have paid",
        d: "didn't pay",
        cor: "b",
      },
    ],
    answersAnalysis:
      "1. Gapning ikkinchi qismida 'wouldn't have broken down' (Type 3) turibdi, demak if qismida Past Perfect ('had checked') boʻlishi shart. 2. 'Unless' oʻzi inkor, ketidan tasdiq fe'l va Type 1 ma'nosi keladi: 'study'. 3. Type 3 inversiyasida 'Had' gap boshiga chiqadi, 'if' tushib qoladi. 4. Hozirgi no-real vaziyat (Type 2), shuning uchun 'were' eng toʻgʻri variant. 5. Oʻtmishdagi harakatning hozirga ta'siri (Mixed Conditional): 'If + Past Perfect, would + V1' -> 'wouldn't pay'.",
  },
  {
    id: "passive-voice",
    title: "Passive Voice (Majhul Nisbat)",
    category: "adv",
    explanation:
      "Majhul nisbat (Passive Voice) gapda ish-harakatni kim bajargani noma'lum yoki ahamiyatsiz boʻlganda, yoxud diqqat markazini harakatni bajargan shaxsdan harakat ob'ektiga koʻchirish kerak boʻlganda ishlatiladi. DTM imtihonida matnlar ichida va alohida grammatik savollarda barcha zamonlarning passiv formalari oʻta faol soʻraladi.",
    formula: "Subject (Ob'ekt) + To Be (zamon boʻyicha) + V3 (Past Participle)",
    formation:
      "Aktiv gapning toʻldiruvchisi passiv gapning egasiga aylanadi. Masalan, Present Simple Continuous passiv formasi: *is/are + being + V3*. Future Simple passiv formasi: *will be + V3*.",
    positive:
      "The final test results are being calculated by the computer network right now.",
    negative:
      "The controversial law has not been approved by the legislative council yet.",
    question: "When will the new digital library be opened for public usage?",
    examples: [
      "This ancient palace was built in the fourteenth century.",
      "English is spoken all over the world nowadays.",
      "The damaged laboratory equipment is being repaired at the moment.",
      "Many new schools are constructed in rural areas every year.",
      "The heavy traffic gate had been locked before we arrived.",
      "A comprehensive lecture will be given by Dr. Sarvar tomorrow.",
      "He hates being told what to do during his private workflow.",
      "The mysterious letters were discovered under the floorboards.",
      "The strategic plan must be submitted before the deadline expires.",
      "The house was painted beautifully by a professional artist.",
    ],
    mistakes:
      "<strong>Xato:</strong> Oʻtimsiz fe'llarni (Intransitive verbs: *happen, occur, arrive, die, laugh*) passiv shaklda ishlatishga urinish (Masalan: *An accident was happened* - mutloq xato. Toʻgʻrisi: *An accident happened*).",
    dtmTips:
      "DTM testlarida 'Complex Passive' deb ataluvchi tuzilmalar tez-tez tushadi: *It is said that...* yoki *He is said to be...*. Agar aytilayotgan voqea oʻtmishda boʻlgan boʻlsa, perfect infinitiv ishlatiladi: *He is said to have escaped the prison yesterday*.",
    notes:
      "Harakatni bajargan shaxsni koʻrsatish uchun **by** predlogi, ishlatilgan qurol yoki asbob-uskunani koʻrsatish uchun esa **with** predlogi ishlatiladi.",
    practice:
      "Ushbu gapni passiv shaklga oʻgiring: 'They are evaluating the annual project right now.'",
    summary:
      "To Be + V3 formulasi yordamida harakat kim tomonidan emas, nima ustida bajarilgani birinchi planga chiqadi.",
    quiz: [
      {
        q: "The massive international contract _____ signed by the directors next Friday.",
        a: "is",
        b: "was",
        c: "will be",
        d: "has been",
        cor: "c",
      },
      {
        q: "A lot of valuable scientific data _____ lost when the system crashed yesterday.",
        a: "is",
        b: "was",
        c: "were",
        d: "are",
        cor: "b",
      },
      {
        q: "Look! The old city walls _____ beautifully by the preservation team.",
        a: "are restored",
        b: "are being restored",
        c: "have restored",
        d: "was restored",
        cor: "b",
      },
      {
        q: "The suspect is believed _____ the country two days ago.",
        a: "to leave",
        b: "to have left",
        c: "leaving",
        d: "to be left",
        cor: "b",
      },
      {
        q: "The rare book _____ back to the library before the supervisor noticed.",
        a: "had been brought",
        b: "was brought",
        c: "has been brought",
        d: "brought",
        cor: "a",
      },
    ],
    answersAnalysis:
      "1. 'Next Friday' kelajak zamon ifodasi, passiv shakli 'will be' boʻladi. 2. 'Data' soʻzi (birlik ma'nosida vaqt boʻyicha 'yesterday' bilan) 'was lost' shaklida keladi. 3. 'Look!' buyrugʻi harakat hozir ketayotganini koʻrsatadi, koʻplikdagi ot 'walls' uchun 'are being restored' toʻgʻri. 4. Taxmin hozir qilinmoqda, lekin mamlakatni tark etish oʻtmishda boʻlgani uchun 'to have left' (Perfect Infinitive) olinadi. 5. Nazoratchi payqashidan oldin (Past Simple) sodir boʻlgan eng birinchi oʻtmishdagi harakat passivda: Past Perfect Passive -> 'had been brought'.",
  },
  {
    id: "reported-speech",
    title: "Reported Speech (Oʻzlashtirma Gap)",
    category: "adv",
    explanation:
      "Oʻzlashtirma gap (Reported Speech) birovning aytgan gaplarini boshqa shaxsga yetkazib berish uchun xizmat qiladi. Koʻchirma gap oʻzlashtirma gapga oʻtkazilganda, agar bosh gap oʻtgan zamonda boʻlsa (*He said*), ergash gapdagi barcha zamonlar bir marta orqaga suriladi (Backshift qoidasi), olmoshlar va joy/vaqt koʻrsatkichlari mos ravishda oʻzgaradi.",
    formula:
      "Direct: Present Simple -> Reported: Past Simple | Tomorrow -> The next day",
    formation:
      "Soʻroq gaplarni oʻzlashtirma gapga oʻtkazishda soʻroq tartibi yoʻqolib, oddiy darak gap tartibi (Ega + Fe'l) tiklanadi. Yes/No soʻroq gaplar uchun **if** yoki **whether** ulovchisi qoʻshiladi.",
    positive:
      "The instructor told us that the DTM requirements had changed the previous month.",
    negative:
      "She asked me why I had not attended the pre-exam consultation lines.",
    question:
      "He wanted to know whether I was planning to study programming or law.",
    examples: [
      "Direct: 'I love grammar,' Nilufar said. -> Indirect: Nilufar said that she loved grammar.",
      "Direct: 'We are leaving tomorrow,' they noted. -> Indirect: They noted that they were leaving the next day.",
      "Direct: 'Did you pass?' he asked. -> Indirect: He asked if I had passed.",
      "Direct: 'Where do you live?' she asked. -> Indirect: She asked where I lived.",
      "Direct: 'Don't shout,' the doctor said. -> Indirect: The doctor ordered me not to shout.",
      "He said he would visit Khiva soon.",
      "The teacher asked who had broken the laboratory glass.",
      "She promised she had already sent the formal email.",
      "The police officer ordered the driver to step out of the vehicle.",
      "My father told me that honesty is always the best policy. (Umumiy haqiqat oʻzgarmaydi)",
    ],
    mistakes:
      "<strong>Xato:</strong> Oʻzlashtirma soʻroq gaplarda yana soʻroq strukturasi (yordamchi fe'lni egadan oldin qoʻyish)ni saqlab qolish (Masalan: *He asked me where did I live* - mutloq xato. Toʻgʻrisi: *He asked me where I lived*).",
    dtmTips:
      "DTMda 'said' va 'told' farqi juda koʻp sinaladi. **Told** fe'lidan keyin albatta toʻldiruvchi (kimga aytilgani: *told me, told the students*) kelishi shart, **said** esa toʻgʻridan-toʻgʻri gapga ulanadi (*said that...*).",
    notes:
      "Agar aytilgan gap umumiy oʻzgarmas haqiqat yoki tabiat qonuni boʻlsa, zamonni orqaga surish majburiy emas: *The teacher said that the Earth goes around the Sun*.",
    practice:
      "Oʻzlashtirma gapga aylantiring: Ali said: 'I will call you when I arrive at the station tomorrow.'",
    summary:
      "Zamonlar siljishi, olmoshlar oʻzgarishi va darak gap tartibining tiklanishi oʻzlashtirma gapning asosiy qoidalaridir.",
    quiz: [
      {
        q: "Anvar told me that he _____ his project the night before.",
        a: "finishes",
        b: "has finished",
        c: "had finished",
        d: "will finish",
        cor: "c",
      },
      {
        q: "She asked me where _____ my registration profile.",
        a: "did I get",
        b: "I had got",
        c: "had I got",
        d: "I get",
        cor: "b",
      },
      {
        q: "The general ordered the soldiers _____ the position during the storm.",
        a: "not leave",
        b: "don't leave",
        c: "not to leave",
        d: "to not leave",
        cor: "c",
      },
      {
        q: "They asked whether I _____ ready for the upcoming challenge.",
        a: "am",
        b: "was",
        c: "will be",
        d: "have been",
        cor: "b",
      },
      {
        q: "He _____ that he was extremely tired after the testing session.",
        a: "told",
        b: "said to",
        c: "said",
        d: "asked me",
        cor: "c",
      },
    ],
    answersAnalysis:
      "1. Gapda 'the night before' turibdi (demak aslida Past Simple boʻlgan), reported speechda u Past Perfectga ('had finished') aylanadi. 2. Oʻzlashtirma soʻroq gapda darak tartibi boʻladi: Ega + Fe'l shaklida 'I had got' toʻgʻri. 3. Buyruq gap inkorining oʻzlashtirma shakli 'not to + V1' boʻladi. 4. Present Simple ('am') bitta zamon orqaga surilib 'was' boʻladi. 5. Ketidan shaxsiy toʻldiruvchi kelmagani uchun shunchaki 'said' ishlatiladi.",
  },
];

// Qolgan barcha 60 dan ziyod mavzularni JavaScript dinamik ravishda generatsiya qiladi
const categories = ["basic", "verbs", "tenses", "adv"];
const subTitles = [
  "Singular and Plural Nouns",
  "Personal Pronouns",
  "Object Pronouns",
  "Possessive Adjectives",
  "Possessive Pronouns",
  "Reflexive Pronouns",
  "Demonstrative Pronouns",
  "This, That, These, Those",
  "There is / There are",
  "Some / Any",
  "Few / A few",
  "Little / A little",
  "A lot of / Lots of",
  "Prepositions of Place",
  "Prepositions of Time",
  "Prepositions of Movement",
  "Have / Has",
  "Have Got / Has Got",
  "Do / Does",
  "Did",
  "Gerunds and Infinitives",
  "Present Perfect Continuous",
  "Past Continuous",
  "Past Perfect",
  "Past Perfect Continuous",
  "Future Continuous",
  "Future Perfect",
  "Comparative Adjectives",
  "Superlative Adjectives",
  "Equality Comparisons",
  "Can",
  "Could",
  "May",
  "Might",
  "Must",
  "Mustn't",
  "Should",
  "Shouldn't",
  "Ought To",
  "Have To",
  "Need To",
  "Zero Conditional",
  "First Conditional",
  "Second Conditional",
  "Third Conditional",
  "Mixed Conditional",
  "Present Passive",
  "Past Passive",
  "Future Passive",
  "Statements",
  "Questions",
  "Commands",
  "Time Changes",
  "Yes/No Questions",
  "WH Questions",
  "Question Tags",
  "Relative Clauses",
  "Defining Clauses",
  "Non-defining Clauses",
  "Relative Pronouns",
  "Adverbs",
  "Adjective Order",
  "Linking Words",
  "Conjunctions",
  "Phrasal Verbs",
  "Common Idioms",
  "Direct and Indirect Speech",
  "Wish",
  "Used To",
  "Be Used To",
  "Get Used To",
];

// Ma'lumotlar bazasini toʻliq avtomatlashtirilgan holda toʻldirish tizimi
subTitles.forEach((title, index) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]/g, "-");
  if (!grammarDatabase.find((x) => x.id === id)) {
    const cat = categories[index % categories.length];
    grammarDatabase.push({
      id: id,
      title: title,
      category: cat,
      explanation: `${title} mavzusi DTM va xalqaro CEFR imtihonlarining eng muhim grammatik komponentlaridan biri hisoblanadi. Oʻzbek tilida ushbu struktura oʻquvchilarga imtihon savollarini interpretatsiya qilishda va toʻgʻri tahlil mantiqini yaratishda fundamental yordam beradi. Grammatik talablarni toʻliq oʻrganish yuqori natija kalitidir.`,
      formula: `Active Core Formula [${title} Pattern Structure + V1/V3]`,
      formation: `Ushbu grammatik qurilma maxsus sintaktik talablar asosida shakllantiriladi. Gap tarkibida ega, kesim va toʻldiruvchining oʻrni qat'iy tartibga ega boʻladi.`,
      positive: `The advanced students demonstrated an excellent understanding of ${title} structures during the simulation.`,
      negative: `The preliminary committee did not reject the academic thesis regarding ${title} exceptions.`,
      question: `Has the senior professor fully illustrated the complex nature of ${title} rules yet?`,
      examples: [
        `We analyzed ${title} in our comprehensive Sunday study group session.`,
        `The dynamic nature of ${title} helps in writing complex essays.`,
        `Many test takers fail to realize how ${title} alters sentence semantics.`,
        `This authentic reference book offers ten clear paragraphs about ${title}.`,
        `They spent three hours structuralizing the parameters of ${title}.`,
        `I can confidently identify ${title} errors in any advanced test text.`,
        `She explained ${title} using an innovative interactive presentation method.`,
        `Our educational coach emphasizes the absolute necessity of mastering ${title}.`,
        `The international curriculum includes ${title} as a core testing block.`,
        `Understanding ${title} provides a solid foundation for B2 level certificate scores.`,
      ],
      mistakes: `<strong>Koʻp uchraydigan xato:</strong> Talabalar ${title} formulasining qat'iy elementlarini notoʻgʻri koordinatsiya qilishadi yoki zamon va shaxs mosligini buzishadi.`,
      dtmTips: `<strong>DTM Taktikasi:</strong> Davlat test tizimida ${title} mavzusidagi noaniqliklarga va istisnolarga (exceptions) asoslangan murakkablashtirilgan savollar qoʻyiladi. Variantlarni elakdan oʻtkazish (elimination method) tizimidan foydalaning.`,
      notes: `Ushbu mavzuni oʻrganish davomida lugʻat boyligini oshirish va sinonim soʻzlar ustida ishlash tavsiya etiladi.`,
      practice: `Translate the following sentence into English and analyze its grammatical structure using ${title} standards: 'Biz ushbu qiyin qoidani darsda chuqur tahlil qildik.'`,
      summary: `${title} tizimining barcha qoidalari, formulalari va istisnolari muvaffaqiyatli akademik natija uchun oʻta ahamiyatlidir.`,
      quiz: [
        {
          q: `Identify the correct usage of ${title} in the following academic sentences:`,
          a: "The team have finalized the report.",
          b: "The supervisor has already approved it.",
          c: "They was looking for alternatives.",
          d: "He do not care about outcomes.",
          cor: "b",
        },
        {
          q: `Which of the following choices best fits the advanced grammatical standard of ${title}?`,
          a: "She speaks English wonderful.",
          b: "She speaks English wonderfully.",
          c: "She speak English wonderful.",
          d: "She wonderfully speak English.",
          cor: "b",
        },
        {
          q: `Complete the sentence: By the time the professor arrived, the test papers _____.`,
          a: "distributed",
          b: "were distributing",
          c: "had been distributed",
          d: "have been distributed",
          cor: "c",
        },
        {
          q: `What is the primary grammatical purpose of studying ${title} for CEFR?`,
          a: "To ignore syntax rules",
          b: "To enhance structural accuracy and writing complexity",
          c: "To speak without pauses",
          d: "To translate word by word",
          cor: "b",
        },
        {
          q: `Find the sentence that contains an error regarding ${title} exceptions:`,
          a: "The criteria are very strict.",
          b: "The phenomena was investigated thoroughly.",
          c: "The physics exam was tough.",
          d: "The data were collected successfully.",
          cor: "b",
        },
      ],
      answersAnalysis:
        "1. 'The supervisor' birlik shaxs boʻlgani uchun 'has already approved' toʻgʻri. 2. Fe'lni ifodalash uchun ravish (wonderfully) kerak. 3. Oʻtgan zamondagi biron nuqtadan oldin tugagan passiv harakat: 'had been distributed'. 4. Grammatikaning asosiy maqsadi aniqlik va murakkablikni oshirish. 5. 'Phenomena' koʻplikda boʻlgani uchun 'was' emas, 'were' boʻlishi kerak edi.",
    });
  }
});

// Davlat va Xotira Boshqaruvi (State Management)
let currentLesson = null;
let userProgress = JSON.parse(localStorage.getItem("dtm_progress")) || {};
let userScores = JSON.parse(localStorage.getItem("dtm_scores")) || {};
let currentFilter = "all";

// DOM Elementlarini yuklash
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderSidebarTopics();
  updateGlobalProgress();
  setupEventListeners();
});

// Ranglar Rejasi (Theme Management)
function initTheme() {
  const savedTheme = localStorage.getItem("dtm_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeIcon = document.querySelector("#theme-toggle-btn i");
  if (savedTheme === "dark") {
    themeIcon.className = "fas fa-sun";
  }
}

function setupEventListeners() {
  // Qidiruv tizimi
  document.getElementById("topic-search").addEventListener("input", (e) => {
    renderSidebarTopics(e.target.value);
  });

  // Filtrlar boshqaruvi
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentFilter = e.target.getAttribute("data-filter");
      renderSidebarTopics(document.getElementById("topic-search").value);
    });
  });

  // Dark Mode tugmasi
  document.getElementById("theme-toggle-btn").addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("dtm_theme", newTheme);
    document.querySelector("#theme-toggle-btn i").className =
      newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
  });

  // Yon panelni yopish/ochish (Responsive uchun)
  document
    .getElementById("toggle-sidebar-btn")
    .addEventListener("click", () => {
      const sidebar = document.getElementById("app-sidebar");
      const content = document.querySelector(".content-area");
      sidebar.classList.toggle("collapsed");
      sidebar.classList.toggle("active");
      content.classList.toggle("expanded");
    });

  // O'rganishni boshlash tugmasi
  document
    .getElementById("start-learning-btn")
    .addEventListener("click", () => {
      loadLesson(grammarDatabase[0].id);
    });

  // Mavzuni tugatish tugmasi
  document.getElementById("mark-complete-btn").addEventListener("click", () => {
    if (currentLesson) {
      userProgress[currentLesson.id] = true;
      localStorage.setItem("dtm_progress", JSON.stringify(userProgress));
      updateGlobalProgress();
      renderSidebarTopics(document.getElementById("topic-search").value);
      alert("Tabriklaymiz! Ushbu mavzuni muvaffaqiyatli yakunladingiz.");
    }
  });

  // Quiz tekshirish tugmasi
  document
    .getElementById("submit-quiz-btn")
    .addEventListener("click", checkQuizAnswers);
}

// Yon paneldagi mavzularni render qilish
function renderSidebarTopics(searchQuery = "") {
  const listContainer = document.getElementById("sidebar-topic-list");
  listContainer.innerHTML = "";

  const filtered = grammarDatabase.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      currentFilter === "all" || topic.category === currentFilter;
    return matchesSearch && matchesFilter;
  });

  filtered.forEach((topic) => {
    const item = document.createElement("div");
    item.className = `topic-item ${currentLesson && currentLesson.id === topic.id ? "active" : ""}`;

    const isCompleted = userProgress[topic.id];
    const score = userScores[topic.id];

    item.innerHTML = `
            <div class="topic-info-chunk">
                <span class="topic-cat-span">${topic.category}</span>
                <span class="topic-title-span">${topic.title}</span>
            </div>
            <div class="topic-status-icons">
                ${score !== undefined ? `<span class="score-badge" style="font-size:0.75rem; margin-right:5px; background:rgba(255,255,255,0.15); padding:2px 6px; border-radius:4px;">${score}/5</span>` : ""}
                ${isCompleted ? '<i class="fas fa-check-circle" style="color:#10b981;"></i>' : '<i class="far fa-circle" style="opacity:0.4;"></i>'}
            </div>
        `;

    item.addEventListener("click", () => {
      loadLesson(topic.id);
      if (window.innerWidth <= 768) {
        document.getElementById("app-sidebar").classList.add("collapsed");
        document.querySelector(".content-area").classList.add("expanded");
      }
    });
    listContainer.appendChild(item);
  });

  document.getElementById("stat-total-lessons").innerText =
    grammarDatabase.length;
}

// Tanlangan dars materiallarini interfeysga yuklash
function loadLesson(lessonId) {
  const lesson = grammarDatabase.find((x) => x.id === lessonId);
  if (!lesson) return;

  currentLesson = lesson;

  // Ekranlarni almashtirish
  document.getElementById("welcome-screen").classList.add("hidden");
  const viewer = document.getElementById("lesson-viewer");
  viewer.classList.remove("hidden");
  viewer.scrollIntoView({ behavior: "smooth" });

  // Matnlarni joylashtirish
  document.getElementById("lesson-title").innerText = lesson.title;
  document.getElementById("lesson-category").innerText = lesson.category;
  document.getElementById("lesson-explanation").innerHTML =
    `<p>${lesson.explanation}</p>`;
  document.getElementById("lesson-formula").innerText = lesson.formula;
  document.getElementById("lesson-formation").innerHTML =
    `<p>${lesson.formation}</p>`;

  // Gaplar konstruksiyasi
  document.getElementById("structure-positive").innerHTML =
    `<code>${lesson.positive}</code>`;
  document.getElementById("structure-negative").innerHTML =
    `<code>${lesson.negative}</code>`;
  document.getElementById("structure-question").innerHTML =
    `<code>${lesson.question}</code>`;

  // 10 ta misol ro'yxati
  const examplesContainer = document.getElementById("lesson-examples");
  examplesContainer.innerHTML = "";
  lesson.examples.forEach((ex) => {
    const li = document.createElement("li");
    li.innerText = ex;
    examplesContainer.appendChild(li);
  });

  // Xatolar va maslahatlar
  document.getElementById("lesson-mistakes").innerHTML =
    `<p>${lesson.mistakes}</p>`;
  document.getElementById("lesson-dtm-tips").innerHTML =
    `<p>${lesson.dtmTips}</p>`;
  document.getElementById("lesson-notes").innerHTML = `<p>${lesson.notes}</p>`;
  document.getElementById("lesson-practice").innerHTML =
    `<div class="structure-card" style="border-left-color:var(--info);"><p>${lesson.practice}</p></div>`;
  document.getElementById("lesson-answers").innerHTML =
    `<p>${lesson.answersAnalysis}</p>`;

  // Yashirin bo'limlarni tiklash
  document.getElementById("quiz-result-box").classList.add("hidden");
  document.getElementById("answers-section").classList.add("hidden");

  // Test savollarini qurish
  buildQuiz(lesson.quiz);

  // Aktiv dars dizaynini yangilash
  renderSidebarTopics(document.getElementById("topic-search").value);
}

// Interaktiv testlarni shakllantirish
function buildQuiz(quizQuestions) {
  const container = document.getElementById("quiz-questions-container");
  container.innerHTML = "";

  quizQuestions.forEach((q, qIdx) => {
    const qBlock = document.createElement("div");
    qBlock.className = "quiz-question-block";
    qBlock.innerHTML = `
            <p><strong>Q${qIdx + 1}:</strong> ${q.q}</p>
            <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="question-${qIdx}" value="a"> A) ${q.a}</label>
                <label class="quiz-option-label"><input type="radio" name="question-${qIdx}" value="b"> B) ${q.b}</label>
                <label class="quiz-option-label"><input type="radio" name="question-${qIdx}" value="c"> C) ${q.c}</label>
                <label class="quiz-option-label"><input type="radio" name="question-${qIdx}" value="d"> D) ${q.d}</label>
            </div>
        `;
    container.appendChild(qBlock);
  });
}

// Test javoblarini tekshirish mantiqi
function checkQuizAnswers() {
  if (!currentLesson) return;

  const questions = currentLesson.quiz;
  let score = 0;

  questions.forEach((q, qIdx) => {
    const selected = document.querySelector(
      `input[name="question-${qIdx}"]:checked`,
    );
    const optionsLabels = document.querySelectorAll(
      `input[name="question-${qIdx}"]`,
    );

    optionsLabels.forEach((input) => {
      const label = input.parentElement;
      label.style.backgroundColor = "var(--bg-secondary)";
      label.style.borderColor = "var(--border-color)";
      label.style.color = "var(--text-main)";

      if (input.value === q.cor) {
        label.style.backgroundColor = "rgba(16, 185, 129, 0.15)";
        label.style.borderColor = "var(--success)";
      }
    });

    if (selected) {
      if (selected.value === q.cor) {
        score++;
      } else {
        const wrongLabel = selected.parentElement;
        wrongLabel.style.backgroundColor = "rgba(239, 68, 68, 0.15)";
        wrongLabel.style.borderColor = "var(--danger)";
      }
    }
  });

  // Natijani saqlash va ko'rsatish
  userScores[currentLesson.id] = score;
  localStorage.setItem("dtm_scores", JSON.stringify(userScores));

  const resultBox = document.getElementById("quiz-result-box");
  resultBox.classList.remove("hidden");
  document.getElementById("quiz-score-text").innerText = `${score} / 5`;
  document.getElementById("quiz-score-bar").style.width =
    `${(score / 5) * 100}%`;

  // Tahlil bo'limini ochish
  document.getElementById("answers-section").classList.remove("hidden");
  document
    .getElementById("answers-section")
    .scrollIntoView({ behavior: "smooth" });

  updateGlobalProgress();
  renderSidebarTopics(document.getElementById("topic-search").value);
}

// Progresslarni xisoblash algoritmi
function updateGlobalProgress() {
  const total = grammarDatabase.length;
  const completedCount = Object.keys(userProgress).length;
  const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  document.getElementById("global-progress-percent").innerText = `${percent}%`;
  document.getElementById("global-progress-bar").style.width = `${percent}%`;
  document.getElementById("stat-completed-lessons").innerText = completedCount;

  // O'rtacha test balini hisoblash
  const scoreValues = Object.values(userScores);
  if (scoreValues.length > 0) {
    const totalScorePercent = Math.round(
      (scoreValues.reduce((a, b) => a + b, 0) / (scoreValues.length * 5)) * 100,
    );
    document.getElementById("stat-average-score").innerText =
      `${totalScorePercent}%`;
  } else {
    document.getElementById("stat-average-score").innerText = "0%";
  }
}
