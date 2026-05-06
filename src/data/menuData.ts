import jwejemImg from "@/assets/menu/jwejem.png";
import fondantImg from "@/assets/menu/fondant.png";
import cocktailFruitsImg from "@/assets/menu/cocktail-fruits.png";
import cocktailBlueMoonImg from "@/assets/menu/cocktail-blue-moon.png";
import milkshakeClassiqueImg from "@/assets/menu/milkshake-classique.png";
import milkshakeOreoImg from "@/assets/menu/milkshake-oreo.png";
import milkshakeKinderImg from "@/assets/menu/milkshake-kinder.png";
import milkshakeNutellaImg from "@/assets/menu/milkshake-nutella.png";
import milkshakeFramboiseImg from "@/assets/menu/milkshake-framboise.png";
import milkshakeMyselfImg from "@/assets/menu/milkshake-myself.png";
import milkshakeChocolatDubaiImg from "@/assets/menu/milkshake-chocolat-dubai.png";
import gateauRussePistacheImg from "@/assets/menu/gateau-russe-pistache.png";
import gateauRusseNoisetteImg from "@/assets/menu/gateau-russe-noisette.png";
import saladeGrecqueImg from "@/assets/menu/salade-grecque.png";
import saladeQuinoaImg from "@/assets/menu/salade-quinoa.png";
import saladeCesarImg from "@/assets/menu/salade-cesar.png";
import puttanescaImg from "@/assets/menu/puttanesca.png";
import risottoFruitDeMerImg from "@/assets/menu/risotto-fruit-de-mer.png";
import patesCrevettesSaumonImg from "@/assets/menu/pates-crevettes-saumon.png";
import poissonGrilleImg from "@/assets/menu/poisson-grille.png";
import crevettesGrilleesImg from "@/assets/menu/crevettes-grillees.png";

export interface MenuItem {
  name: string;
  nameAr?: string;
  price: string;
  description?: string;
  descriptionAr?: string;
  image?: string;
  badge?: string;
}

export interface SubSection {
  title: string;
  titleAr?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  title: string;
  titleAr?: string;
  accent: string;
  bannerImage: string;
  icon: string;
  featured?: MenuItem[];
  items?: MenuItem[];
  subSections?: SubSection[];
  note?: string;
  noteAr?: string;
  darkBg?: boolean;
}

export const categories: MenuCategory[] = [
  {
    id: "breakfast",
    title: "GOOD MORNING — BREAKFAST",
    titleAr: "فطور الصباح",
    accent: "#C49A3C",
    bannerImage: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&h=400&fit=crop",
    icon: "☀",
    featured: [
      {
        name: "Formula 13 DT",
        price: "13 DT",
        description: "Café au choix / croissant et cake / eau 0.5L / jus au choix",
        descriptionAr: "قهوة حسب الاختيار / كرواسان وكيك / ماء 0,5لتر / عصير حسب الاختبار",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      },
      {
        name: "Formula 27 DT",
        price: "27 DT",
        description: "Café au choix / croissant et cake / jus au choix / eau 0,5L / toast / beurre / goutta / yaourt granola / beurre de cacahuètes / miel / chocolat / salades de fruits / omlette / charcuterie fromage / olive / huile d'olive / hrissa",
        descriptionAr: "قهوة / كرواسان و كيك / عصير حسب الاختيار / 0.5 ماء لتر / توست / زبدة / عسل / شكلاطة / قوتة / زبادي مع الجرانولا / زبدة الفول السوداني / سلطة الفواكه / أوملات / جبن و شاركوتري / زيتون / ملاوي / زيت زيتون / هريسة",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
      },
    ],
    subSections: [
      {
        title: "SUPPLÉMENT",
        titleAr: "إضافات",
        items: [
          { name: "Œuf (1 pièce)", nameAr: "بيضة (قطعة واحدة)", price: "2 DT" },
          { name: "Croissant", nameAr: "كرواسون", price: "5 DT" },
          { name: "Cake", nameAr: "كيك", price: "5 DT" },
          { name: "Charcuterie fromage", nameAr: "جبن و شاركوتري", price: "25 DT" },
        ],
      },
    ],
  },
  {
    id: "healthy",
    title: "HEALTHY",
    titleAr: "صحي",
    accent: "#3D5A3E",
    bannerImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=400&fit=crop",
    icon: "🌿",
    featured: [
      {
        name: "Formula Healthy",
        price: "28 DT",
        description: "Café au choix / jus frais / eau 0,5L / yaourt nature granola / beurre de cacahuètes / dattes farcies / salade de quinoa / charcuterie fromage / omelette / blanc d'œuf / huile d'olive / pain complet",
        descriptionAr: "قهوة / عصير طبيعي / ماء 0.5 لتر / ياغورت طبيعي مع الغرانولا / زبدة الفول السوداني / تمر محشو / سلطة الكينوا / جبن و شاركوتري / أوملات / بياض بيض / زيت الزيتون / خبز كامل",
        image: "https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=400&h=300&fit=crop",
        badge: "HEALTHY",
      },
    ],
  },
  {
    id: "myself",
    title: "MYSELF",
    titleAr: "ماي سيلف",
    accent: "#C49A3C",
    bannerImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=400&fit=crop",
    icon: "★",
    featured: [
      {
        name: "Formula Myself",
        price: "54 DT",
        description: "2 cafés au choix / 2 jus au choix / 2 eau 0,5L / 2 croissants et cake / mini pancake / beurre / beurre de cacahuètes / miel / chocolat à tartiner / 2 salades de fruits / yaourt granola / bssisa / goutta / 2 œufs / 2 omlette / charcuterie fromage / mini sandwiches / olive / toast / ojja / mlewi / chiken crispy / chich taouk / potatoes / harissa",
        descriptionAr: "قهوة / 2 عصير حسب الاختيار / 2 لتر ماء / 2 كرواسان و كيك / ميني بانكيك / زبدة / زبدة الفول السوداني / عسل / شكولاطة / قوتة / 2 سلطة فواكه / ياغورت مع الغرانولا / بسيسة / بيضتان / 2 أوملات / جبن و شاركوتري / زيتون / توست / عجة / ملاوي / تشيكن كرسبي / شيش طاووق / بطاطا / هريسة / ميني سندويتش",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
        badge: "SIGNATURE",
      },
    ],
  },
  {
    id: "box-sucree",
    title: "BOX SUCRÉE",
    titleAr: "بوكس حلوة",
    accent: "#C4847A",
    bannerImage: "https://images.unsplash.com/photo-1558024920-b41e1887dc32?w=1200&h=400&fit=crop",
    icon: "🎁",
    featured: [
      {
        name: "Box Sucrée",
        price: "34 DT",
        description: "Croissants farcis / boulettes au chocolat / brownies / pâtisseries tunisiennes / pâte pistache spéculoos et nutella / mini pancakes / mini gaufres",
        descriptionAr: "كرواسون محشي / كرات الشوكولاتة / براونيز / حلويات تونسية / صوص فستق، سبيكولوس أو نوتيلا / ميني بانكيك / ميني وافل",
        image: "https://images.unsplash.com/photo-1486427944544-d2c246c4df14?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    id: "cafe-classique",
    title: "CAFÉ CLASSIQUE",
    titleAr: "قهوة كلاسيكية",
    accent: "#8B5E3C",
    bannerImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=400&fit=crop",
    icon: "☕",
    items: [
      { name: "Express", nameAr: "إكسبرس", price: "5 DT" },
      { name: "Américain", nameAr: "قهوة أمريكية", price: "5 DT" },
      { name: "Capucin", nameAr: "كابوسان", price: "5.5 DT" },
      { name: "Direct", nameAr: "قهوة حليب", price: "6 DT" },
      { name: "Nescafé", nameAr: "نسكافيه", price: "6.5 DT" },
      { name: "Café turc", nameAr: "قهوة تركية", price: "10 DT" },
      { name: "Café liégeois", nameAr: "قهوة لييج", price: "10.5 DT" },
    ],
  },
  {
    id: "cafe-nespresso",
    title: "CAFÉ NESPRESSO — CAPSULE",
    titleAr: "قهوة نسبريسو",
    accent: "#8B5E3C",
    bannerImage: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=1200&h=400&fit=crop",
    icon: "☕",
    items: [
      { name: "Express", nameAr: "إسبريسو", price: "6.5 DT" },
      { name: "Américain", nameAr: "قهوة أمريكية", price: "6.5 DT" },
      { name: "Capucin", nameAr: "كابوسان", price: "7 DT" },
      { name: "Direct", nameAr: "قهوة حليب", price: "8 DT" },
    ],
    subSections: [
      {
        title: "SUPPLÉMENTS AU CHOIX",
        titleAr: "إضافات حسب الاختيار",
        items: [
          { name: "Nestlé", nameAr: "نستله", price: "2.5 DT" },
          { name: "Caramel", nameAr: "كراميل", price: "2.5 DT" },
          { name: "Vanille", nameAr: "فانيليا", price: "2.5 DT" },
          { name: "Noisette", nameAr: "بوفريوة", price: "2.5 DT" },
        ],
      },
    ],
  },
  {
    id: "boissons-froides",
    title: "BOISSONS FROIDES",
    titleAr: "مشروبات باردة",
    accent: "#8B5E3C",
    bannerImage: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&h=400&fit=crop",
    icon: "🧊",
    items: [
      { name: "Eau 0.5L", nameAr: "لتر ماء", price: "2.5 DT" },
      { name: "Eau 1L", nameAr: "لتر ماء", price: "4.5 DT" },
      { name: "Eau gazifiée", nameAr: "ماء غازي", price: "5 DT" },
      { name: "Soda", nameAr: "مشروب غازي", price: "5 DT" },
      { name: "Boisson énergétique", nameAr: "مشروب طاقة", price: "12 DT" },
    ],
  },
  {
    id: "mojitos",
    title: "MOJITOS",
    titleAr: "موخيتو",
    accent: "#3D5A3E",
    bannerImage: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1200&h=400&fit=crop",
    icon: "🍃",
    items: [
      { name: "Virgin mojito", nameAr: "موخيتو كلاسيكي", price: "13 DT" },
      { name: "Mojito pêche", nameAr: "موخيتو بالخوخ", price: "15 DT" },
      { name: "Mojito framboise", nameAr: "موخيتو بالتوت الأحمر", price: "15 DT" },
      { name: "Mojito énergétique", nameAr: "موخيتو طاقي", price: "18 DT" },
    ],
  },
  {
    id: "jus",
    title: "JUS",
    titleAr: "عصائر",
    accent: "#3D5A3E",
    bannerImage: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=1200&h=400&fit=crop",
    icon: "🍊",
    items: [
      { name: "Citronnade", nameAr: "ليمون", price: "10 DT" },
      { name: "Jus d'orange", nameAr: "عصير برتقال", price: "11 DT" },
      { name: "Citronnade à la menthe", nameAr: "ليمون بالنعناع", price: "11 DT" },
      { name: "Citronnade aux amandes", nameAr: "ليمون باللوز", price: "12 DT" },
      { name: "Jus de fraise", nameAr: "عصير فراولة", price: "13 DT" },
      { name: "Jus de kiwi", nameAr: "عصير كيوي", price: "15 DT" },
      { name: "Jus de banane", nameAr: "عصير موز", price: "16 DT" },
      { name: "Jus d'ananas", nameAr: "عصير أناناس", price: "18 DT" },
      { name: "Jus de mangue", nameAr: "عصير مانجو", price: "25 DT" },
    ],
  },
  {
    id: "cocktails",
    title: "COCKTAILS",
    titleAr: "كوكتيلات",
    accent: "#C4847A",
    bannerImage: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=1200&h=400&fit=crop",
    icon: "🍹",
    featured: [
      { name: "Cocktail fruits", nameAr: "كوكتيل فواكه", price: "16 DT", image: cocktailFruitsImg },
      { name: "Cocktail Blue Moon", nameAr: "كوكتيل القمر الأزرق", price: "18 DT", image: cocktailBlueMoonImg },
      { name: "Cocktail the story", nameAr: "كوكتيل ذا ستوري", price: "25 DT", description: "avocat / pistache / pignons / miel", image: "https://images.unsplash.com/photo-1587223962217-f4fd78abb8e1?w=400&h=300&fit=crop" },
      { name: "Jwejem", nameAr: "جواجم", price: "18 DT", description: "fruits secs, Miel, Dattes", image: jwejemImg },
      { name: "Jwejem Myself", nameAr: "جواجم ماي سيلف", price: "25 DT", description: "Fruits secs, miel, fruits frais, chocolat au choix, pignons, pistache, noix, cajou", descriptionAr: "فواكه جافة، عسل، فواكه طازجة، شوكولاتة حسب الاختيار، صنوبر، فستق، جوز، كاجو", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop", badge: "SIGNATURE" },
    ],
  },
  {
    id: "milkshakes",
    title: "MILKSHAKES",
    titleAr: "ميلك شيك",
    accent: "#C4847A",
    bannerImage: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=1200&h=400&fit=crop",
    icon: "🥤",
    featured: [
      { name: "Milkshake Classique", nameAr: "ميلك شيك كلاسيك", price: "13 DT", description: "Vanille / chocolat / fraise / pistache", image: milkshakeClassiqueImg },
      { name: "Milkshake Oreo", nameAr: "ميلك شيك أوريو", price: "14 DT", image: milkshakeOreoImg },
      { name: "Milkshake Kinder", nameAr: "ميلك شيك كندر", price: "14 DT", image: milkshakeKinderImg },
      { name: "Milkshake Nutella", nameAr: "ميلك شيك نوتيلا", price: "15 DT", image: milkshakeNutellaImg },
      { name: "Milkshake framboise", nameAr: "ميلك شيك بالتوت الأحمر", price: "15 DT", image: milkshakeFramboiseImg },
      { name: "Milkshake Myself", nameAr: "ميلك شيك ماي سلف", price: "17 DT", image: milkshakeMyselfImg, badge: "SIGNATURE" },
      { name: "Milkshake Chocolat Dubai", nameAr: "ميلك شيك شوكولاتة دبي", price: "20 DT", image: milkshakeChocolatDubaiImg, badge: "PREMIUM" },
    ],
  },
  {
    id: "glaces",
    title: "GLACES",
    titleAr: "مثلجات",
    accent: "#C4847A",
    bannerImage: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=1200&h=400&fit=crop",
    icon: "🍨",
    items: [
      { name: "Coupe de glace 2 boules", nameAr: "كوب مثلجات (2 كرات)", price: "9.5 DT" },
      { name: "Coupe de glace 3 boules", nameAr: "كوب مثلجات (3 كرات)", price: "14 DT" },
      { name: "Banana Split", nameAr: "موز مع آيس كريم", price: "21 DT" },
    ],
  },
  {
    id: "smoothies",
    title: "SMOOTHIES",
    titleAr: "سموثي",
    accent: "#3D5A3E",
    bannerImage: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=1200&h=400&fit=crop",
    icon: "🥝",
    featured: [
      { name: "Islander", nameAr: "آيسلاندر", price: "16 DT", description: "granola, framboise, banane, mandarine", image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=300&fit=crop" },
      { name: "Smoothie Lavalo", nameAr: "سموثي لافالو", price: "20 DT", description: "mangue, banane, cerise, yaourt nature", descriptionAr: "مانجو، موز، كرز، زبادي طبيعي", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop" },
      { name: "The Red Kiss", nameAr: "ذا ريد كيس", price: "22 DT", description: "kiwi, framboise, mangue, yaourt nature", descriptionAr: "كيوي، بالتوت الأحمر، مانجو، زبادي طبيعي", image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=400&h=300&fit=crop", badge: "BESTSELLER" },
    ],
  },
  {
    id: "the",
    title: "THÉ",
    titleAr: "شاي",
    accent: "#3D5A3E",
    bannerImage: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1200&h=400&fit=crop",
    icon: "🍵",
    items: [
      { name: "Thé marocain", nameAr: "شاي مغربي", price: "5.5 DT" },
      { name: "Thé infusion", nameAr: "شاي أعشاب", price: "7 DT" },
      { name: "Thé aux amandes", nameAr: "شاي باللوز", price: "10 DT" },
      { name: "Thé gingembre", nameAr: "شاي بالزنجبيل", price: "11 DT" },
      { name: "Thé au pignons", nameAr: "شاي بالبندق", price: "14.5 DT" },
      { name: "Thé Baklawa", nameAr: "شاي بقلاوة", price: "16.5 DT" },
    ],
    subSections: [
      {
        title: "SUPPLÉMENTS",
        titleAr: "إضافات",
        items: [
          { name: "Supplément amandes", nameAr: "لوز", price: "5 DT" },
          { name: "Supplément pignons", nameAr: "بندق", price: "8 DT" },
        ],
      },
    ],
  },
  {
    id: "hot-chocolat",
    title: "HOT CHOCOLAT",
    titleAr: "شوكولا ساخنة",
    accent: "#8B5E3C",
    bannerImage: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=1200&h=400&fit=crop",
    icon: "🍫",
    items: [
      { name: "Chocolat Chaud", nameAr: "شوكولا ساخنة", price: "10 DT" },
      { name: "Chocolat liégeois", nameAr: "شوكولا لييج", price: "11 DT" },
      { name: "Nutella & Spécilos", nameAr: "نوتيلا / سبيكيلوس", price: "15 DT" },
    ],
  },
  {
    id: "frappuccino",
    title: "FRAPPUCCINO",
    titleAr: "فرابتشينو",
    accent: "#8B5E3C",
    bannerImage: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1200&h=400&fit=crop",
    icon: "🧋",
    items: [
      { name: "Frappuccino Classique", nameAr: "فرابتشينو كلاسيكي", price: "15 DT" },
      { name: "Frappuccino Oreo", nameAr: "فرابوتشينو أوريو", price: "16 DT" },
      { name: "Frappuccino Nutella", nameAr: "فرابتشينو نوتيلا", price: "17 DT" },
      { name: "Frappuccino Nutella Framboise", nameAr: "فرابتشينو نوتيلا و بالتوت الأحمر", price: "17 DT" },
    ],
  },
  {
    id: "crepes-gaufres",
    title: "CRÊPES ET GAUFRES SUCRÉES",
    titleAr: "كريب و وافل",
    accent: "#C4847A",
    bannerImage: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=1200&h=400&fit=crop",
    icon: "🧇",
    items: [
      { name: "Nutella", nameAr: "نوتيلا", price: "16 DT" },
      { name: "Nutella banane", nameAr: "نوتيلا و موز", price: "18 DT" },
      { name: "Nutella amande", nameAr: "نوتيلا باللوز", price: "18 DT" },
      { name: "Exotique", nameAr: "إكزوتيك", price: "18 DT" },
      { name: "Spéculoos", nameAr: "سبيكلوس", price: "18 DT" },
      { name: "Nutella pistache", nameAr: "نوتيلا بالفستق", price: "18 DT" },
      { name: "Crêpe Myself", nameAr: "كريب ماي سالف", price: "19.8 DT", badge: "SIGNATURE" },
    ],
  },
  {
    id: "pancakes",
    title: "PANCAKES",
    titleAr: "بانكيك",
    accent: "#C4847A",
    bannerImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&h=400&fit=crop",
    icon: "🥞",
    items: [
      { name: "Nutella", nameAr: "نوتيلا", price: "18 DT" },
      { name: "Nutella banane", nameAr: "نوتيلا و موز", price: "20 DT" },
      { name: "Nutella fruits secs", nameAr: "نوتيلا و فواكه جافة", price: "20 DT" },
      { name: "Exotique", nameAr: "إكزوتيك", price: "20 DT" },
    ],
  },
  {
    id: "douceurs",
    title: "DOUCEURS PRESTIGES",
    titleAr: "حلويات فاخرة",
    accent: "#C4847A",
    bannerImage: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200&h=400&fit=crop",
    icon: "🍰",
    featured: [
      { name: "Fondant", nameAr: "فوندان", price: "12 DT", image: fondantImg },
      { name: "Tiramisù", nameAr: "تيراميسو", price: "14 DT", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop" },
      { name: "Cheesecake", nameAr: "تشيز كيك", price: "15 DT", image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=300&fit=crop" },
      { name: "Gâteau russe noisette", nameAr: "كيك روسي بالبندق", price: "15 DT", image: gateauRusseNoisetteImg },
      { name: "Gâteau russe pistache", nameAr: "كيك روسي بالفستق", price: "16 DT", image: gateauRussePistacheImg },
      { name: "Morjene", nameAr: "مورجان", price: "16 DT" },
    ],
  },
  {
    id: "crepes-salees",
    title: "CRÊPES SALÉES",
    titleAr: "كريب مالح",
    accent: "#8B5E3C",
    bannerImage: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=1200&h=400&fit=crop",
    icon: "🫓",
    items: [
      { name: "Thon-fromage", nameAr: "تن و جبنة", price: "18 DT" },
      { name: "Jambon-fromage", nameAr: "جمبون و جبنة", price: "17 DT" },
      { name: "Crêpe tunisienne", nameAr: "كريب تونسي", price: "19 DT" },
      { name: "Crêpe poulet-fromage", nameAr: "كريب بالدجاج و جبنة مكسيكية", price: "20 DT" },
      { name: "Mexicaine (viande hachée)", nameAr: "مكسيكية (لحم مفروم)", price: "21 DT" },
    ],
  },
  {
    id: "omlettes",
    title: "OMLETTES",
    titleAr: "أوملات",
    accent: "#C49A3C",
    bannerImage: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&h=400&fit=crop",
    icon: "🍳",
    items: [
      { name: "Omelette nature", nameAr: "أوملات طبيعي", price: "10 DT" },
      { name: "Omelette végétarienne", nameAr: "أوملات بالخضار", price: "11 DT" },
      { name: "Omelette jambon fromage", nameAr: "أوملات بالجامبون و الجبن", price: "13 DT" },
      { name: "Omelette thon fromage", nameAr: "أوملات بالتونة و الجبن", price: "14 DT" },
      { name: "Bruschetta au saumon et avocat", nameAr: "بروشيتا بالسلمون و الأفوكادو", price: "28 DT", badge: "CHEF'S SPECIAL" },
    ],
  },
  {
    id: "fast-food",
    title: "NOS FAST FOOD",
    titleAr: "مأكولات سريعة",
    accent: "#1A120B",
    bannerImage: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1200&h=400&fit=crop",
    icon: "🥖",
    subSections: [
      {
        title: "FARCIE BAGUETTE",
        titleAr: "باكيت محشوة",
        items: [
          { name: "Poulet grillé", nameAr: "دجاج مشوي", price: "16 DT" },
          { name: "Poulet panné", nameAr: "دجاج كرسبي", price: "17 DT" },
          { name: "Viande hachée", nameAr: "لحم مفروم", price: "18 DT" },
        ],
      },
      {
        title: "TACOS",
        titleAr: "تاكوس",
        items: [
          { name: "Poulet grillé", nameAr: "دجاج مشوي", price: "17 DT" },
          { name: "Poulet panné", nameAr: "دجاج كرسبي", price: "17 DT" },
          { name: "Viande hachée", nameAr: "لحم مفروم", price: "18 DT" },
        ],
      },
      {
        title: "MAKLOUB",
        titleAr: "مقلوب",
        items: [
          { name: "Thon / Jambon", nameAr: "تن / جمبون", price: "16 DT" },
          { name: "Poulet panné ou grillé", nameAr: "دجاج كرسبي، مشوي", price: "17 DT" },
          { name: "Viande hachée", nameAr: "لحم مفروم", price: "18 DT" },
        ],
      },
    ],
  },
  {
    id: "pizza",
    title: "PIZZA",
    titleAr: "بيتزا",
    accent: "#8B5E3C",
    bannerImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=400&fit=crop",
    icon: "🍕",
    items: [
      { name: "Margherita", nameAr: "مارجريتا", price: "19 DT" },
      { name: "Végétarienne", nameAr: "خضروات", price: "21 DT" },
      { name: "Neptune", nameAr: "بيتزا بالتونة", price: "23 DT" },
      { name: "Viande hachée", nameAr: "لحم مفروم", price: "25 DT" },
      { name: "Quatre saisons", nameAr: "أربع فصول", price: "25 DT" },
      { name: "Poulet champignon goutta", nameAr: "دجاج و فطر و قوتة", price: "26 DT" },
      { name: "Quatre fromages", nameAr: "أربعة أجبان", price: "27 DT" },
      { name: "Norvégienne", nameAr: "نرويجية بالسلمون", price: "35 DT", badge: "PREMIUM" },
      { name: "Pizza Fruits de mer", nameAr: "بيتزا غلال البحر", price: "35 DT", badge: "PREMIUM" },
    ],
  },
  {
    id: "burger",
    title: "BURGER",
    titleAr: "برغر",
    accent: "#1A120B",
    bannerImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=400&fit=crop",
    icon: "🍔",
    featured: [
      { name: "Burger", nameAr: "برغر", price: "16 DT", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop" },
      { name: "Chicken burger", nameAr: "برغر بالدجاج", price: "17 DT", image: "https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?w=400&h=300&fit=crop" },
      { name: "Big burger", nameAr: "برغر كبير", price: "18 DT", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop" },
    ],
  },
  {
    id: "salades",
    title: "SALADES",
    titleAr: "سلطات",
    accent: "#3D5A3E",
    bannerImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=400&fit=crop",
    icon: "🥗",
    featured: [
      { name: "Salade grecque", nameAr: "سلطة يونانية", price: "17 DT", image: saladeGrecqueImg },
      { name: "Salade quinoa", nameAr: "سلطة الكينوا", price: "19 DT", image: saladeQuinoaImg },
      { name: "Salade César", nameAr: "سلطة سيزار", price: "20 DT", image: saladeCesarImg },
      { name: "Salade gourmande", nameAr: "سلطة شهية", price: "20 DT", image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=300&fit=crop" },
      { name: "Salade recipe", nameAr: "سلطة ريسيب", price: "24 DT", image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&h=300&fit=crop" },
      { name: "Salade pomme Honeycrisp et brocoli", nameAr: "سلطة التفاح والعسل مع البروكلي", price: "25 DT", image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop" },
    ],
  },
  {
    id: "cote-tunisien",
    title: "CÔTÉ TUNISIEN",
    titleAr: "الجانب التونسي",
    accent: "#D4B896",
    bannerImage: "https://images.unsplash.com/photo-1541518763-037d5070b34e?w=1200&h=400&fit=crop",
    icon: "🇹🇳",
    subSections: [
      {
        title: "OJJA",
        titleAr: "عجة",
        items: [
          { name: "Ojja escalope", nameAr: "عجة بالسكالوب", price: "19 DT" },
          { name: "Ojja merguez", nameAr: "عجة بالمرقاز", price: "20 DT" },
          { name: "Ojja mixte escalope merguez", nameAr: "عجة ميكست (إسكالوب + مرقاز)", price: "22 DT" },
          { name: "Ojja fruits de mer", nameAr: "عجة بفواكه البحر", price: "33 DT", badge: "SPÉCIALITÉ" },
        ],
      },
      {
        title: "AUTRES",
        titleAr: "أطباق أخرى",
        items: [
          { name: "Brik au thon", nameAr: "بريك بالتونة", price: "8 DT" },
          { name: "Bisque de crevettes", nameAr: "شوربة بالجمبري", price: "12 DT" },
          { name: "Couscous de poisson", nameAr: "كسكسي بالسمك", price: "37 DT" },
          { name: "Kamounia d'agneau", nameAr: "كمونية بالعلوش", price: "40 DT" },
          { name: "Couscous d'agneau", nameAr: "كسكسي باللحم", price: "42 DT" },
          { name: "Fell d'agneau", nameAr: "فل بلحم العلوش أو السمك", price: "42 DT" },
        ],
      },
    ],
  },
  {
    id: "pates",
    title: "PÂTES",
    titleAr: "الباستا",
    accent: "#8B5E3C",
    bannerImage: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1200&h=400&fit=crop",
    icon: "🍝",
    featured: [
      { name: "Puttanesca", nameAr: "بوتانيسكا", price: "23 DT", description: "sauce tomate, olives, ail, thon", descriptionAr: "صلصة طماطم، زيتون، ثوم، تن", image: puttanescaImg },
      { name: "Bolognaise", nameAr: "بولونيز", price: "28 DT", description: "sauce tomate au boeuf hachée", descriptionAr: "صلصة طماطم بلحم مفروم", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop" },
      { name: "Pasta al gorgonzola e noci", nameAr: "باستا بالجبن غورغونزولا والجوز", price: "28 DT", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop" },
      { name: "Lasagne", nameAr: "لازانيا", price: "28 DT", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop" },
      { name: "Alfredo", nameAr: "ألفريدو", price: "29 DT", description: "champignons, fromage, poulet", descriptionAr: "فطر، جبن، دجاج", image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop" },
      { name: "Ravioli 4 fromages", nameAr: "رافيولي بأربعة أنواع من الجبن", price: "29 DT", image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=400&h=300&fit=crop" },
      { name: "Spaghetti fruits de mer", nameAr: "سباغيتي بفواكه البحر", price: "36 DT", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop", badge: "PREMIUM" },
      { name: "Risotto fruit de mer", nameAr: "ريزوتو بفواكه البحر", price: "42 DT", image: risottoFruitDeMerImg, badge: "PREMIUM" },
      { name: "Pâtes crevettes & saumon", nameAr: "باستا بالروبيان والسلمون", price: "49 DT", image: patesCrevettesSaumonImg, badge: "PREMIUM" },
    ],
  },
  {
    id: "nos-plats",
    title: "NOS PLATS",
    titleAr: "الأطباق",
    accent: "#1A120B",
    bannerImage: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=400&fit=crop",
    icon: "🍖",
    subSections: [
      {
        title: "LES VOLAILLES",
        titleAr: "الدواجن",
        items: [
          { name: "Escalope grillée", nameAr: "إسكالوب مشوي", price: "27 DT" },
          { name: "Escalope panée", nameAr: "إسكالوب بانيه", price: "28 DT" },
          { name: "Émincé de poulet sauce champignons", nameAr: "شرائح دجاج بصلصة الفطر", price: "29 DT" },
          { name: "Cordon bleu", nameAr: "كوردون بلو", price: "29 DT" },
          { name: "Pilons de poulet panés", nameAr: "أفخاذ دجاج بانيه", price: "29 DT" },
          { name: "Box de pilons panés", nameAr: "بوكس أفخاذ بانيه", price: "47 DT", description: "6 أفخاذ + أرز + خضار مشوية + 2 مشروب كوكا", badge: "BOX" },
        ],
      },
      {
        title: "LES VIANDES",
        titleAr: "اللحوم",
        items: [
          { name: "Cotalos", nameAr: "كوتالوس", price: "52 DT" },
          { name: "Filet de boeuf", nameAr: "فيليه لحم بقري", price: "56 DT" },
          { name: "Côtelettes", nameAr: "كوتلات", price: "56 DT" },
          { name: "Souris d'agneau", nameAr: "موزة خروف", price: "62 DT" },
          { name: "Grillade mixte", nameAr: "مشاوي متنوعة لشخص", price: "85 DT", badge: "PREMIUM" },
          { name: "Grillade mixte (2 personnes)", nameAr: "مشاوي متنوعة لشخصان", price: "149 DT", badge: "PREMIUM · 2 PERS" },
        ],
      },
    ],
  },
  {
    id: "fruits-de-mer",
    title: "LES FRUITS DE MER",
    titleAr: "المأكولات البحرية",
    accent: "#D4B896",
    bannerImage: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=1200&h=400&fit=crop",
    icon: "🦐",
    featured: [
      { name: "Poisson grillé", nameAr: "سمك مشوي", price: "35 DT", image: poissonGrilleImg },
      { name: "Saumon aux herbes avec sauce citron", nameAr: "سلمون بصلصة الليمون", price: "47 DT", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop" },
      { name: "Crevettes grillées", nameAr: "جمبري مشوية", price: "55 DT", image: crevettesGrilleesImg },
      { name: "Crevettes panées", nameAr: "جمبري مقلي", price: "58 DT", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=300&fit=crop" },
      { name: "Saumon cajou et crevettes à l'ail", nameAr: "سلمون بالكاجو و الجمبري", price: "60 DT", image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&h=300&fit=crop" },
      { name: "Box Fruits de Mer (1 pers.)", nameAr: "بوكس مأكولت بحرية (شخص واحد)", price: "74 DT", description: "Poisson, crevettes, chevrette sautées, seiche, calamar, moules", descriptionAr: "سمك، جمبري، جمبري صغير مقلي، صوبيا، كالمار، محار", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop", badge: "BOX · 1 PERS" },
      { name: "Box Fruits de Mer (2 pers.)", nameAr: "بوكس مأكولت بحرية (شخصان)", price: "140 DT", description: "Poisson, crevettes, chevrette sautées, seiche, calamar, moules", descriptionAr: "سمك، جمبري، جمبري صغير مقلي، صوبيا، كالمار، محار", image: "https://images.unsplash.com/photo-1559742811-822bab893b80?w=400&h=300&fit=crop", badge: "BOX · 2 PERS · PREMIUM" },
    ],
  },
  {
    id: "chichas",
    title: "LES CHICHAS",
    titleAr: "شيشة",
    accent: "#1A120B",
    bannerImage: "https://images.unsplash.com/photo-1527661284828-56ac40127f68?w=1200&h=400&fit=crop",
    icon: "💨",
    darkBg: true,
    subSections: [
      {
        title: "FAKHER",
        titleAr: "فاخر",
        items: [
          { name: "Alluminium", price: "16 DT", description: "Pomme, menthe, raisin, cerise, melon, chewing-gum..." },
          { name: "Kaloud", price: "18 DT" },
          { name: "Kassar", price: "22 DT" },
        ],
      },
      {
        title: "ADALYA",
        items: [
          { name: "Alluminium", price: "17 DT", description: "Love, Me Amor, Hawai, Cheikh Money, Blueberry, Blue Melon" },
          { name: "Kaloud", price: "19 DT" },
          { name: "Kassar", price: "22 DT" },
        ],
      },
      {
        title: "AUTRES",
        titleAr: "أخرى",
        items: [
          { name: "Saloum", price: "22 DT" },
          { name: "Chicha My Self", price: "28 DT", badge: "SIGNATURE" },
          { name: "Box Chicha", price: "45 DT", description: "2 chichas + Assiette de fruits + 1 eau", badge: "BOX" },
          { name: "Chicha menthe sucrée", price: "49 DT", badge: "PREMIUM" },
          { name: "Jabed chicha", price: "3 DT" },
        ],
      },
    ],
  },
  {
    id: "fruits",
    title: "FRUITS",
    titleAr: "فواكه",
    accent: "#3D5A3E",
    bannerImage: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=1200&h=400&fit=crop",
    icon: "🍉",
    featured: [
      { name: "Assiette de fruits 1 personne", price: "18 DT", image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&h=300&fit=crop" },
      { name: "Assiette de fruits 2 personnes", price: "29 DT", image: "https://images.unsplash.com/photo-1564093497595-593b96d80571?w=400&h=300&fit=crop" },
      { name: "Corbeille de fruits", price: "39 DT", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop", badge: "PREMIUM" },
    ],
  },
];
