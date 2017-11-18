export class Food{
    name: string;
    co2ForKg: number;

    userPresentable(): string {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }

    co2ForGrams(grams: number){
        return (this.co2ForKg * grams) / 1000;
    }

    gramsUserPresentable(qtd: number){
        if( qtd == 0 ) return "0 g"
        if( qtd < 1000 ) return qtd + 'g';
        if( qtd > 1000 ) {
           return `${qtd / 1000} kg`;
        }
    }    
    clone(): Food {
        const f = new Food();
        f.name = this.name;
        f.co2ForKg = this.co2ForKg;
        return f;
    }


}