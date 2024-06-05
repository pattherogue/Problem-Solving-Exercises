// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const letterCount = {};
    for (const letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
    
    for (const char of message) {
        if (!letterCount[char]) {
            return false;
        } else {
            letterCount[char]--;
        }
    }
    
    return true;
}
