export class Customer {

    constructor(private id: number) {}

    fooBar(): number {
        setTimeout(() => {
            console.log('ID', this.id);
        }, 2000);
        
        return 5;
    }
}

