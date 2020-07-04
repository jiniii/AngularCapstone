export class User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    location:string;
    mobileNum:number;
    token: string;
}

export class LoggedUser{
    id:string;
    email:string;
    password:string;
}

export class Products {
    id:number;
    productName: string;
    productDes:string;
    manufacturer:string;
    quantity:string;
    price:number;
    src:string;

    constructor(id, name, description = '', price = 0, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
        this.id = id
        this.productName = name
        this.productDes = description
        this.price = price
        this.src = imageUrl
      }
}




  