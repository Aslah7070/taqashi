export const dishes = [
  {
    id: 1,
    name: "Truffle Mushroom Bruschetta",
    description: "Hand-sliced sourdough from our in-house bakery, generously layered with a slow-cooked wild mushroom duxelles of shiitake, porcini, and chanterelle. Finished with a drizzle of imported black truffle oil from Périgord and a scattering of fresh micro greens and edible flowers.",
    price: 450,
    image: "/images/dishes/Mandhi.jpg",
    category: "starters",
    isVeg: true,
    isChefPick: true,
    spiceLevel: 1,
    allergens: ["gluten", "dairy"],
    isNew: true
  },
  {
    id: 2,
    name: "Tandoori Prawns",
    description: "Tiger prawns sourced fresh from the Konkan coast, marinated overnight in hung yogurt, Kashmiri saffron, and a proprietary blend of 14 aromatic spices. Char-grilled at intense heat in our traditional clay tandoor, served alongside a mint-coriander chutney and pickled pearl onions.",
    price: 650,
    image: "/images/dishes/mandhiii.jpg",
    category: "starters",
    isVeg: false,
    isChefPick: true,
    spiceLevel: 2,
    allergens: ["shellfish", "dairy"],
    isNew: false
  },
  {
    id: 3,
    name: "Lamb Shank Rogan Josh",
    description: "A whole lamb shank slow-braised for eight hours in a rich gravy of sun-dried Kashmiri chilies, whole cardamom, cinnamon bark, and fennel seeds. The meat falls off the bone into a velvety sauce enriched with caramelised onions and a whisper of rosewater. Served with saffron-infused basmati rice.",
    price: 890,
    image: "/images/dishes/download (3).jpg",
    category: "mains",
    isVeg: false,
    isChefPick: true,
    spiceLevel: 3,
    allergens: ["dairy"],
    isNew: false
  },
  {
    id: 4,
    name: "Grilled Atlantic Salmon",
    description: "A thick-cut Norwegian Atlantic salmon fillet, encrusted with a blend of fresh dill, parsley, and panko, pan-seared to a golden crust while keeping the center blush-pink and silky. Presented on a bed of chargrilled asparagus spears with a classic French beurre blanc enriched with shallots and white wine.",
    price: 1200,
    image: "/images/dishes/download (4).jpg",
    category: "mains",
    isVeg: false,
    isChefPick: true,
    spiceLevel: 1,
    allergens: ["fish", "dairy"],
    isNew: false
  },
  {
    id: 5,
    name: "Chicken Biryani",
    description: "Aged basmati rice layered with free-range chicken marinated in a complex yogurt-spice paste, slow-cooked in a sealed copper handi using the traditional dum method. Each grain is infused with saffron, star anise, and mace. Crowned with crispy barista onions and accompanied by a cool cucumber raita.",
    price: 550,
    image: "/images/dishes/download (5).jpg",
    category: "mains",
    isVeg: false,
    isChefPick: true,
    spiceLevel: 2,
    allergens: ["dairy"],
    isNew: true
  },
  {
    id: 6,
    name: "Dark Chocolate Fondant",
    description: "A decadent single-origin Valrhona dark chocolate cake baked to order — its crisp exterior shatters to reveal a gloriously molten, liquid-chocolate centre. Served tableside with a quenelle of Madagascar vanilla bean ice cream and a delicate tuile of caramelised hazelnuts.",
    price: 380,
    image: "/images/dishes/download (6).jpg",
    category: "desserts",
    isVeg: true,
    isChefPick: true,
    spiceLevel: 0,
    allergens: ["gluten", "dairy", "eggs"],
    isNew: false
  },
];

export const testimonials = [
  { id: 1, name: "Arjun Verma", rating: 5, text: "An absolute masterpiece of a dining experience. The ambience is as luxurious as the food.", avatar: "A" },
  { id: 2, name: "Sneha Kapoor", rating: 5, text: "The truffle mushroom bruschetta was out of this world. Highly recommend for special occasions.", avatar: "S" },
  { id: 3, name: "Rohan Mehta", rating: 4, text: "Excellent service and elegant decor. The lamb shank was cooked to perfection.", avatar: "R" },
];

export const promotions = [
  "🎉 Birthday celebrations — Book now!",
  "🛵 Free delivery on orders above ₹999 via Swiggy & Zomato",
  "🌟 Early Bird Special: 15% off for reservations before 7 PM",
  "🔥 20% OFF on all orders above ₹2000 — Use code GRIN20",
];

export const stats = [
  { label: "Years of Excellence", value: 4, suffix: "+" },
  { label: "Happy Customers", value: 50, suffix: "K+" },
  { label: "Events Catered", value: 800, suffix: "+" },
  { label: "Dishes Served", value: 200, suffix: "K+" },
];

export const services = [
  { title: "Dine-In", description: "Exquisite fine dining experience", icon: "UtensilsCrossed", href: "/dine-in" },
  { title: "Banquet", description: "Grand halls for memorable events", icon: "Building2", href: "/banquet" },
  { title: "Delivery", description: "Gourmet food at your doorstep", icon: "Truck", href: "/delivery" },
  { title: "Catering", description: "Premium outdoor catering services", icon: "ChefHat", href: "/catering" },
];

export const dailySpecials = [
  { day: "Monday", dishes: [dishes[0], dishes[1]] },
  { day: "Tuesday", dishes: [dishes[2], dishes[3]] },
  { day: "Wednesday", dishes: [dishes[4], dishes[5]] },
  { day: "Thursday", dishes: [dishes[0], dishes[2]] },
  { day: "Friday", dishes: [dishes[1], dishes[4]] },
  { day: "Saturday", dishes: [dishes[3], dishes[5]] },
  { day: "Sunday", dishes: [dishes[2], dishes[4]] },
];

export const banquetHalls = [
  { id: 1, name: "Grand Teal Hall", description: "A luxurious space for large gatherings.", capacity: 500, dimensions: "100x80 ft", hasAC: true, hasProjector: true, hasStage: true, parking: "Valet included", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80", decorOptions: ["Floral", "Modern", "Classic"] },
  { id: 2, name: "Golden Terrace", description: "Open-air elegance for evening parties.", capacity: 200, dimensions: "80x60 ft", hasAC: false, hasProjector: false, hasStage: false, parking: "Available", image: "https://images.unsplash.com/photo-1530103862676-de8892ebe6c4?w=800&q=80", decorOptions: ["Fairy Lights", "Boho", "Rustic"] },
  { id: 3, name: "Ivory Room", description: "Intimate and sophisticated for corporate meets.", capacity: 50, dimensions: "40x30 ft", hasAC: true, hasProjector: true, hasStage: false, parking: "Available", image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80", decorOptions: ["Minimal", "Corporate"] },
];

export const cateringPackages = [
  { name: "Essential", price: "₹800/plate", isRecommended: false, features: ["4 Starters", "2 Mains", "1 Dessert"] },
  { name: "Grand Feast", price: "₹1500/plate", isRecommended: true, features: ["6 Starters", "4 Mains", "3 Desserts", "Live Counters"] },
  { name: "Royal Experience", price: "₹2500/plate", isRecommended: false, features: ["Unlimited Starters", "Premium Mains", "Gourmet Desserts", "Signature Bar"] },
];

export const eventTypes = [
  { title: "Weddings", description: "Make your special day perfect.", icon: "Heart" },
  { title: "Corporate Events", description: "Professional catering for business meets.", icon: "Briefcase" },
  { title: "Private Parties", description: "Intimate gatherings at your home.", icon: "Home" },
  { title: "Birthdays", description: "Celebrate another year with joy.", icon: "Cake" },
  { title: "Social Gatherings", description: "Get-togethers made easy.", icon: "Users" },
  { title: "Festivals", description: "Special menus for festive occasions.", icon: "Sparkles" },
];

export const teamMembers = [
  { id: 1, name: "Arjun Kapoor", role: "Executive Chef", specialty: "Modern Indian fusion", bio: "With 20 years of experience, Chef Arjun brings a modern twist to traditional Indian flavors.", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80" },
  { id: 2, name: "Priya Sharma", role: "Pastry Chef", specialty: "French desserts", bio: "Trained in Paris, Priya creates masterpieces that are both beautiful and delicious.", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" },
  { id: 3, name: "Rajiv Singh", role: "Sommelier", specialty: "Wine pairings", bio: "Rajiv has curated an award-winning wine list to perfectly complement our menu.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" },
  { id: 4, name: "Aisha Patel", role: "Restaurant Manager", specialty: "Guest experience", bio: "Aisha ensures that every guest receives VIP treatment from the moment they walk in.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" },
];

export const awards = [
  { title: "Best Fine Dining 2023", org: "Culinary Excellence Awards" },
  { title: "Michelin Star", org: "Michelin Guide" },
  { title: "Top 50 Restaurants", org: "Gourmet Magazine" },
  { title: "Best Ambience", org: "Design & Dine" },
  { title: "Excellence in Service", org: "Hospitality Times" },
];

export const galleryImages = [
  { id: 1, category: "food", src: "/images/dishes/Mandhi.jpg", alt: "Signature Mandi" },
  { id: 2, category: "ambience", src: "/images/about_interior.png", alt: "Dining Room" },
  { id: 3, category: "events", src: "/images/exp_terrace.png", alt: "Wedding Setup" },
  { id: 4, category: "catering", src: "/images/exp_chef.png", alt: "Catering Spread" },
];

export const timeline = [
  { year: "2010", title: "Inception", description: "Taqashi Mandi opened its doors with a small 20-seater setup." },
  { year: "2015", title: "Expansion", description: "Moved to a larger venue and added the banquet halls." },
  { year: "2018", title: "First Award", description: "Won 'Best Fine Dining' from Culinary Excellence Awards." },
  { year: "2023", title: "Michelin Star", description: "Awarded our first Michelin star for exceptional culinary artistry." },
];

export const openingHours = [
  { day: "Monday", hours: "12:00 PM - 11:00 PM" },
  { day: "Tuesday", hours: "12:00 PM - 11:00 PM" },
  { day: "Wednesday", hours: "12:00 PM - 11:00 PM" },
  { day: "Thursday", hours: "12:00 PM - 11:00 PM" },
  { day: "Friday", hours: "12:00 PM - 12:00 AM" },
  { day: "Saturday", hours: "11:00 AM - 12:00 AM" },
  { day: "Sunday", hours: "11:00 AM - 11:00 PM" },
];

export const RESTAURANT_PHONE = "+91 98765 43210";
export const RESTAURANT_EMAIL = "hello@grintable.com";
export const RESTAURANT_ADDRESS = "42, Emerald Lane, Connaught Place, New Delhi — 110001";
export const WHATSAPP_URL = "https://wa.me/919876543210";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Dine-In", href: "/dine-in" },
  // { label: "Banquet", href: "/banquet" },
  { label: "Delivery", href: "/delivery" },
  // { label: "Catering", href: "/catering" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
