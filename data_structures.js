/**
 * @author Clayton Alexander
 * @version 1.0
 * 
 * Third Project for CS253. This data_structures project builds data
 * structures when given a sequence of words.
 *
 */

var exports = module.exports = {};
var functions = {};
functions = {e1: function() {                                                   
    return sameExports();}}      

fs = require('fs');
    var fileName = process.argv[2];
    var file = fs.readFileSync(fileName, 'utf8');                           
    var words = file.split('');
    list = [];
    currentString = [];
        for(i in file){
            if(file[i] != ' ' && file[i] != '\n' && file[i] != ''){
                currentString += file[i];
            }
            else{
                list.push(currentString);
                currentString = [];
            }
        }
        seperatedList = list.join(' ');

/**
 * For each word in the input word sequence has the number of occurences.
 * @param seperatedList
 * @returns keyValueFreq An object representing number of occurences of words.
 */    

function wordCount(seperatedList){
    newSeperatedList = seperatedList.split(" ");
    var keyValuePairs = {};
    for(var i = 0; i < newSeperatedList.length; i++){
        var num = newSeperatedList[i];
        keyValuePairs[num] = keyValuePairs[num] ? keyValuePairs[num] + 1 : 1;
    }
    return keyValuePairs;
}
exports.wordCount = wordCount(seperatedList);

/**                                                                             
 * For each word in the input, has the probability of all the word occurenes.                                                                          
 * @param seperatedList                                                         
 * @returns keyValueFreq An object that holds the frequencies.                                                                    
 */   

function wordFreq(seperatedList){
    var sumOfValues = 0;
    var keyValuePairs = wordCount(seperatedList);
    var keyValuePairLength = Object.keys(keyValuePairs).length;
    var keyValueFreq = {};
    i = 0;
    while(i < keyValuePairLength){
        sumOfValues += Object.values(keyValuePairs)[i];
        i ++;
    }
    var j = 0;
    while(j < keyValuePairLength){
        var keyToBeAdded = Object.keys(keyValuePairs)[j];
        var valueToBeAdded = Object.values(keyValuePairs)[j];
        keyValueFreq[keyToBeAdded] = valueToBeAdded/sumOfValues;
        j++;
    }
    return keyValueFreq;
}
exports.wordFreq = wordFreq(seperatedList);

/**
 * For each word, has an object where the key is a word that occurs at least
 * once as the word immediately follows the word.
 * @param seperatedList
 * @returns subsetKVP An object representing a subset of the keyValuePair.
 */

function condWordCount(seperatedList){
    newSeperatedList = seperatedList.split(" ");
    var keyValueFreq = wordFreq(seperatedList);
    var keyValuePairs = wordCount(seperatedList);
    var subsetKVP = {};
    var length = Object.keys(keyValuePairs).length;
    var j = 0;
    while(j < length){
        var newKey = Object.keys(keyValuePairs)[j];
        subsetKVP[newKey] = {};
        j++;
    }
    newArray = {}
    var newSeperatedListClone = newSeperatedList.slice();
    for(var n = 0; n < newSeperatedList.length; n++){
        var cursor = n;
        var practiceTest = newSeperatedListClone[n];
        var valueForRed = Object.values(subsetKVP)[0][practiceTest] = 1; 
        delete newSeperatedListClone[n];
    }
    return subsetKVP;
}
exports.condWordCount = condWordCount(seperatedList);

/**
 * For each word, has an object in which key is B that occurs at least once as
 * the word immediately following the word A and the value is the probability.
 * @param seperatedList
 * @returns condWordFrequency An object representing the key and value 
 * probability.
 */

function condWordFreq(seperatedList){    
    var newSeperatedList = seperatedList.split(" ");
    var subsetKVP = condWordCount(seperatedList);
    var condWordFrequency = {};
    var keyInSubset = Object.values(subsetKVP)[0];
    var valuesToBeAdded = Object.values(Object.values(subsetKVP)[0]);
    var newLength = Object.values(Object.values(subsetKVP)[0]).length;
    var m = 0;
    var sumOfValuesTwo = 0;
    while(m < newLength ){                                        
        sumOfValuesTwo += valuesToBeAdded[m];
        m ++;                                                                   
    }       
    var p = 0;
    var percent =  valuesToBeAdded[p]/valuesToBeAdded.length;
    var x = 0;
    var firstNewYeah = Object.keys(condWordCount)[0];
    while(x < Object.keys(subsetKVP).length){
        newKeys = Object.keys(subsetKVP)[x];
        condWordFrequency[newKeys] = percent;
        x ++;    
    }
    return condWordFrequency;

}
exports.condWordFreq = condWordFreq(seperatedList);

function sameExports(){
    return exports;
}

/**
 * The main function for this program.
 * 
 */
function main(){
    var argSize = process.argv.length;
}

if (require.main === module){
    main();  
    main('rbbrrg_input_text.txt');
    main('rbrbb_input_text.txt');
    main('empty_input_text.txt');
}
module.exports = functions;
