interface IClient {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    serviceDue : boolean,
    visits: string[],
    phone: string,
    notes: string
}

interface IProduct {
    id?: string
    image?: string,
    manualLink?: string,
    modelNum: string,
    name: string,
    warrantyLink?: string,
}