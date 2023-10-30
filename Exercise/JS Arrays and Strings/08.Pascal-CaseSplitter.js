function split (pascalCaseText){
    const words = pascalCaseText.split(/(?=[A-Z])/);
    console.log(words.join(', '));
}
split('SplitMeIfYouCanHaHaYouCantOrYouCan');