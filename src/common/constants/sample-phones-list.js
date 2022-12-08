
import motog52img1 from "../assets/images/motoG52img1.jpeg";
import motog52img2 from "../assets/images/motoG52img2.jpeg";
import motog52img3 from "../assets/images/motoG52img3.jpeg";
import motog52img4 from "../assets/images/motoG52img4.jpeg";
import motog52img5 from "../assets/images/motoG52img5.jpeg";
import s22Phone1 from "../assets/images/samsung s22-1.jpeg";
import s22Phone2 from "../assets/images/samsung s22-2.jpeg";
import s22Phone3 from "../assets/images/samsung s22-3.jpeg";
import s22Phone4 from "../assets/images/samsung s22-4.jpeg";
import pocoM4pro1 from "../assets/images/pocoM4pro1.jpeg";
import pocoM4pro2 from "../assets/images/pocoM4pro2.jpeg";
import pocoM4pro3 from "../assets/images/pocoM4pro3.jpeg";
import iphone14pro1 from "../assets/images/iphone14pro1.webp";
import iphone14pro2 from "../assets/images/iphone14pro2.webp";
import iphone14pro3 from "../assets/images/iphone14pro3.webp";
import iphone14pro4 from "../assets/images/iphone14pro4.webp";
import iphone14pro5 from "../assets/images/iphone14pro5.webp";
const SamplePhonesList = [
    {
        imageFile: [s22Phone1,s22Phone2,s22Phone3,s22Phone4],
        brand:"Samsung",
        name: "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)  (8 GB RAM)",
        currentPrice: "₹69,999",
        originalPrice: "₹1,01,999",
        discount: "31% off",
        offer: "12% cashback",
        emi: "EMI starts @ ₹2,393",
        id: "100",
        availableColor:[{colorValue:"#2D2D2D",colorName:"Phantom Black"},{colorValue:"#00674C",colorName:"Green"} ,{colorValue:"Phantom White",colorName:"White"}],
        features:["8 GB RAM | 128 GB ROM",
            "16.76 cm (6.6 inch) Full HD+ Display",
            "50MP + 12MP + 10MP | 10MP Front Camera",
            "4500 mAh Lithium-ion Battery",
            "Qualcomm Snapdragon 8 Gen 1 Processor"],
    },
    {
        imageFile: [motog52img1,motog52img2,motog52img3,motog52img4,motog52img5],
        brand:"MOTOROLA",
        name: "MOTOROLA g52 (Metallic White, 128 GB)  (6 GB RAM)",
        currentPrice: "₹13,999",
        originalPrice: "₹19,999",
        discount: "30% off",
        offer: "10% cashback",
        emi: "EMI starts @ ₹1,648",
        id: "200",
        availableColor:[{colorValue:"white",colorName:"Metallic White"},{colorValue:"#7E899F",colorName:"Charcoal Grey"}],
        features:["6 GB RAM | 128 GB ROM",
            "16.76 cm (6.6 inch) Full HD+ Display",
            "50MP + 8MP + 2MP | 16MP Front Camera",
            "5000 mAh Lithium-ion Battery",
            "Qualcomm Snapdragon 680 Processor"],
    },
    {
        imageFile: [iphone14pro1,iphone14pro2,iphone14pro3,iphone14pro4,iphone14pro5],
        brand:"Apple",
        name: "APPLE iPhone 14 Pro Max (Space Black, 256 GB)",
        currentPrice: "₹1,49,900",
        originalPrice: "₹1,59,900",
        discount: "6% off",
        offer: "10% cashback",
        emi: "EMI starts @ ₹24,983",
        id: "300",
        availableColor:[{colorValue:"black",colorName:"Space Black"},{colorValue:"purple",colorName:"Deep Purple"} ,{colorValue:"silver",colorName:"Silver"},{colorValue:"gold",colorName:"Gold"}],
        features:["256 GB ROM",
            "17.02 cm (6.7 inch) Super Retina XDR Display",
            "48MP + 12MP + 12MP + 12MP | 12MP Front Camera",
            "4500 mAh Lithium-ion Battery",
            "A16 Bionic Chip, 6 Core Processor Processor"],
    },
    
    {
        imageFile: [pocoM4pro1,pocoM4pro2,pocoM4pro3],
        brand:"Poco",
        name: "POCO M4 Pro 5G (Power Black, 128 GB)  (6 GB RAM)",
        currentPrice: "₹13,999",
        originalPrice: "₹19,999",
        discount: "30% off",
        offer: "12% cashback",
        emi: "EMI starts @ ₹2,348",
        id: "400",
        availableColor:[{colorValue:"black",colorName:"Power Black"},{colorValue:"#1DC5E3",colorName:"Cool Blue"},{colorValue:"yellow",colorName:"Yellow"}],
        features:["6 GB RAM | 128 GB ROM",
            "16.76 cm (6.6 inch) Full HD+ Display",
            "50MP + 8MP | 16MP Front Camera",
            "5000 mAh Lithium-ion Battery",
            "Mediatek Dimensity 810 Processor"],
    },
];

export default SamplePhonesList;