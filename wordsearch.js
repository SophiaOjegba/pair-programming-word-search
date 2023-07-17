const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)){ 
            return true
        }
                
    }  

    const verticalJoin = letters[0].map((_, index) => letters.map(row => row[index]).join(''));
    for (s of verticalJoin) {
        if (s.includes(word)){ 
            return true
        }
                
    }  return false;

}

module.exports = wordSearch

//Paired Alone this week as my partner has dropped from the program. Completed the word search for 1 hour and alot of google search. 
