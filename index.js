const quotes = {
    "- Siuzy": '"Be kind to yourself, always."',
    "- sIuzy": '"Don’t forget to drink water bb!!"',
    "- siUzy": '"Always choose yourself."',
    "- siuZy": '"I’m always here no matter what happen."',
    "- siuzY": '"I will never be mad at you, I will only be mad with what you did, but you itself? never, how could i do that??."',
    "- sIUzy": '"Believe that it’ll get better."',
    "- SiUZY": '"Don’t say mean words to yourself."',
    "- SiUZy": '"RESET."',
    "- justin": '"When life gives you so much pressure, just cry until you feel okay, and after that reset, fighting always!!."',
    "- Tin": '"know your limit especially when eating sweet foods, don’t forget to drink water after."',
    "- tin": '"I can’t afford to lose you, so take care always."',
    "- Justin": '"I’m always proud of you, you’re so strong bb, fighting always!!"',
    "- imissher": '"let’s play valorant on our new accounts!!."',
    "- JUSTIN": '"I love you, I meant it."',
    "- aaliyah": '"You’re so pretty ate yana."',
    "- mara": '"I want cat food."',
    "- tinnn": '"How’s your day, bb? I miss you so much!!"',
    "- Justtiiinnnn": '"It’s okay to cry baby, It’s totally okay, take care always!!"',
    "- Justtiiinnn": '"Don’t force someone to have time for you. You don’t need to beg for attention, assurance, consistency, and love. Always remember if they want, they will."',
 
}

document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});
