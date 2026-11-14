export type Product = {id:string;name:string;vehicle:'Revo'|'Fortuner';quality:'Genuine'|'OEM'|'Aftermarket';category:string;partNumber:string;description:string;priceMode:'public'|'quote';price?:number;inStock:boolean};
// Demonstration catalogue only. Replace with verified KB Brothers stock and prices before launch.
export const products:Product[]=[
{id:'kb-001',name:'Front Brake Pad Set',vehicle:'Revo',quality:'OEM',category:'Braking',partNumber:'KB-RV-001',description:'Confirm model year and variant before ordering.',priceMode:'public',price:8500,inStock:true},
{id:'kb-002',name:'Engine Oil Filter',vehicle:'Fortuner',quality:'Genuine',category:'Engine',partNumber:'KB-FT-002',description:'Confirm exact engine fitment before ordering.',priceMode:'public',price:1800,inStock:true},
{id:'kb-003',name:'Air Filter',vehicle:'Revo',quality:'Aftermarket',category:'Engine',partNumber:'KB-RV-003',description:'Confirm engine and model year.',priceMode:'public',price:3200,inStock:true},
{id:'kb-004',name:'Front Shock Absorber',vehicle:'Fortuner',quality:'OEM',category:'Suspension',partNumber:'KB-FT-004',description:'Share vehicle year and variant for a quotation.',priceMode:'quote',inStock:true},
{id:'kb-005',name:'Headlamp Assembly',vehicle:'Revo',quality:'Genuine',category:'Electrical',partNumber:'KB-RV-005',description:'Share model year and side required.',priceMode:'quote',inStock:false},
{id:'kb-006',name:'Brake Disc Rotor',vehicle:'Fortuner',quality:'Aftermarket',category:'Braking',partNumber:'KB-FT-006',description:'Confirm front/rear fitment.',priceMode:'quote',inStock:true}
];
