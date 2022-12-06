
import Phone1 from "../assets/images/phone1.svg";
import Phone2 from "../assets/images/phone2.svg";
import Phone3 from "../assets/images/phone3.svg";
import motog52img1 from "../assets/images/motoG52img1.jpeg";
import motog52img2 from "../assets/images/motoG52img2.jpeg";
import motog52img3 from "../assets/images/motoG52img3.jpeg";
import motog52img4 from "../assets/images/motoG52img4.jpeg";
import motog52img5 from "../assets/images/motoG52img5.jpeg";
import Phone4 from "../assets/images/phone4.svg";
import s22Phone1 from "../assets/images/samsung s22-1.jpeg";
import s22Phone2 from "../assets/images/samsung s22-2.jpeg";
import s22Phone3 from "../assets/images/samsung s22-3.jpeg";
import s22Phone4 from "../assets/images/samsung s22-4.jpeg";


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
];

export default SamplePhonesList;