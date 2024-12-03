
var x = [{ qoute: "                     “We accept the love we think we deserve.”   ", per: " Stephen Chbosky, The Perks of Being a Wallflower             " },
{ qoute: " 1                        “Without music, life would be a mistake.”       ", per: "   Friedrich Nietzsche, Twilight of the Idols            " },
{ qoute: " 2                     “I am so clever that sometimes I don't understand a single word of what I am saying.”         ", per: "       Oscar Wilde, The Happy Prince and Other Stories        " },
{ qoute: " 3                    “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”       ", per: "      ― Ralph Waldo Emerson        " },
{ qoute: " 4                     “Insanity is doing the same thing, over and over again, but expecting different results.”", per: "  ― Narcotics Anonymous            " },
{ qoute: " 5                    “It is better to be hated for what you are than to be loved for what you are not.”             ", per: "    ― Andre Gide, Autumn Leaves          " },
{ qoute: " 6                     “Be yourself; everyone else is already taken.”         ", per: "     Oscar Wilde          " },
{ qoute: " 7                       “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", per: "   Marilyn Monroe  " },
{ qoute: " 8                      “So many books, so little time.”        ", per: "   Frank Zappa           " },
{ qoute: " 9                      “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”         ", per: " ― Albert Einstein             " },
{ qoute: " 10                      “A room without books is like a body without a soul.”          ", per: "      Marcus Tullius Cicero         " },
{ qoute: " 11                     “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”           ", per: "     ― Bernard M. Baruch         " },
{ qoute: " 12                       “You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.”           ", per: "    William W. Purkey" },
{ qoute: " 13                        “You know you're in love when you can't fall asleep because reality is finally better than your dreams.”         ", per: "  Dr. Seuss             " },
{ qoute: " 14                     Mae West “You only live once, but if you do it right, once is enough.”          ", per: "  ― Mae West            " },
{ qoute: " 15                    “Be the change that you wish to see in the world.”           ", per: "   Mahatma Gandhi            " },
{ qoute: " 16                    “In three words I can sum up everything I've learned about life: it goes on.”          ", per: " ― Robert Frost             " },
{ qoute: "  17                     “If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”        ", per: "    J.K. Rowling, Harry Potter and the Goblet of Fire          " },
{ qoute: "  18                      “ Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend”           ", per: "       Albert Camus        " },
{ qoute: "  19                       “If you tell the truth, you don't have to remember anything.”        ", per: "  Mark Twain            " },
{ qoute: "  20                      “Friendship ... is born at the moment when one man says to another ''What! You too? I thought that no one but myself . . .”       ", per: "  C.S. Lewis, The Four Loves     " },

];

var check = 0
function qoute() {

    var number = x[Math.ceil(Math.random() * (x.length - 1))];

    if (check == number) {
        if (number == 20) { number -= 1 }

        number += 1
        check == number
    }
    else
        check == number

    document.getElementById('qouts').innerHTML = number['qoute'];
    document.getElementById('person').innerHTML = number.per

};

// window.alert( " if  في   check  =  number  مش    check  ==  number المشكله طلعت" )















// قائمة الاقتباسات
// const quotes = [
//   "أعظم مجد ليس في عدم السقوط، بل في النهوض كلما سقطنا            1.",
//   "2               لا شيء مستحيل إذا كان لديك الشجاعة لمحاولة.",
//   "3             السعادة ليست وجهة، بل رحلة.",
//   "4              لا تفقد الأمل، فحتى أصغر شمعة يمكنها إنارة أكبر غرفة.",
//   "5                  كل ما تريده في هذه الحياة يتطلب الشجاعة للمخاطرة.",
//   "6              لا تتوقف عن البحث عن ما أنت متحمس له.",
//   "7                    الحياة قصيرة جدًا لكي تعيشها مستاءً.",
//   "8                     لا تخف من الفشل، خف من عدم المحاولة.",
//   "9                   أفضل طريقة للتنبؤ بالمستقبل هي خلقه.",
//   "10                    لا حدود لما يمكننا تحقيقه إذا عملنا معًا.",
// ];

// function generateRandomQuote() {
//   const randomIndex = Math.trunc(Math.random() * quotes.length);
//   const quote = quotes[randomIndex];
//   quotes.splice(randomIndex, 1);
//   return quote;
// }

// while (quotes.length > 0) {
//   const quote = generateRandomQuote();
//   document.getElementById('p').innerHTML= quote

// }
