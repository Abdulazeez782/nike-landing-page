import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, bigShoe4, bigShoe5, bigShoe6, bigShoe7, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        imgBig: bigShoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        details: "A legend’s impact can be felt immediately and never fades. But that doesn’t mean it comes around often. For the first time in a decade, the famed original blue AJ11 colorway is back in all its glory. MJ debuted this edition in that star-studded 1996 midseason exhibition, his first after making a riveting return to the league. The 11 stays dressed to impress, with its patent leather detailing remaining a shining symbol of iconic design"
    },
    {
        imgURL: shoe5,
        imgBig: bigShoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        details: "The Nike x Nigo journey continues. This time, Nigo puts another artistic spin on the legendary Air Force 3, drawing inspiration from Nike DNA, his own personal collections and pop culture nostalgia. Originally known for pounding the basketball courts in the late '80s, this low-top edition of the AF3 takes on a balanced mix of earthy hues—blending Baroque Brown, Pecan, Fir and Hemp. The textural delight mixes real and synthetic leather with textiles and hair-on cowhide leather to add depth and tactility."
    },
    {
        imgURL: shoe6,
        imgBig: bigShoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        details: "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point."
    },
    {
        imgURL: shoe7,
        imgBig: bigShoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        details: "The Spizike takes elements of five classic Jordans, combines them and gives you one iconic sneaker. It's an homage to Spike Lee formally introducing Hollywood and hoops in a culture moment. You get a great-looking pair of kicks with some history. What more can you ask for? Ya dig?"
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];