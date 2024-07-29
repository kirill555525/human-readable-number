module.exports = function toReadable (number) {
    if (number >= 0 && number < 20) {
        return case1(number);
    }

    if (number < 100) {
        let first = Math.floor(number / 10) * 10;
        let second = number % 10;
        if (second === 0) return `${case1(first)}`;
        return `${case1(first)} ${case1(second)}`;
    }

    if (number < 1000) {
        let string;
        let first = Math.floor(number / 100);
        string = `${case1(first)} hundred`;
        let second = Math.floor(number / 10) % 10 * 10;
        let third = number % 10;
        console.log(second, third);
        if (case1(second + third) === 'zero') return string;
        if (case1(second + third) !== null) return `${string} ${case1(second + third)}`;

        return `${string} ${case1(second)} ${case1(third)}`

    }
}

function case1(number) {
    switch (number) {
        case 0:
            return 'zero';
            
        case 1:
            return 'one';
            
        case 2:
            return 'two';
            
        case 3:
            return 'three';
            
        case 4:
            return 'four';
            
        case 5:
            return 'five';
            
        case 6:
            return 'six';
            
        case 7:
            return 'seven';
            
        case 8:
            return 'eight';
            
        case 9:
            return 'nine';
            
        case 10:
            return 'ten';
            
        case 11:
            return 'eleven';
            
        case 12:
            return 'twelve';
            
        case 13:
            return 'thirteen';
            
        case 14:
            return 'fourteen';
            
        case 15:
            return 'fifteen';
            
        case 16:
            return 'sixteen';
            
        case 17:
            return 'seventeen';
            
        case 18:
            return 'eighteen';
            
        case 19:
            return 'nineteen';            
            
        case 20:
            return 'twenty';
                
        case 30:
            return 'thirty';
                
        case 40:
            return 'forty';
                
        case 50:
            return 'fifty';
                
        case 60:
            return 'sixty';
                
        case 70:
            return 'seventy';
                
        case 80:
            return 'eighty';
                
        case 90:
            return 'ninety';
    
        default:
            return null;        

    }
}
