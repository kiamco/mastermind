import wrong from '../assets/favourite.png';
import half from '../assets/half-star.png';
import correct from '../assets/star.png';


export const findCommonEl = (array1, array2) => {
    let feedback = []
    let f = 0 // index marker for feedback []
    
    // process feed back
    for (let i = 0; i < array1.length; i++) {
        let found = false;
        let k = 0; //index marker for the combination
        while (found === false && k <= 3) {
            if (array2[k].color === 'w') {
                if (array2[k].value === array1[i]) {
                    array2[k].color = 'g' ; 
                    feedback[f] = half;
                    f++
                    found = true;
                } 
            } 
            k++

        }
    }

    //add full stars
    f=0
    for (let i = 0; i < array1.length; i++){

        if(array1[i] === array2[i].value){
            feedback[f] = correct;
            f++
        }
    }   

    //add blank stars
    if(feedback.length < 4){
        let dif = 4 - feedback.length
        for (let i = 0; i < dif; i++){
            feedback.push(wrong);
        }
    }

    return feedback;
}