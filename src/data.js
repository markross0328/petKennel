// Inline SVG data URIs for happy & sad pet faces
const sadCat = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="110" r="70" fill="#F4A460"/><polygon points="55,55 40,20 80,50" fill="#F4A460"/><polygon points="145,55 160,20 120,50" fill="#F4A460"/><circle cx="78" cy="100" r="8" fill="#333"/><circle cx="122" cy="100" r="8" fill="#333"/><ellipse cx="100" cy="125" rx="6" ry="4" fill="#FF6B81"/><path d="M78 145 Q100 135 122 145" stroke="#333" stroke-width="3" fill="none"/><circle cx="82" cy="108" r="4" fill="#5BC0DE" opacity="0.7"/></svg>`)}`;

const happyCat = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="110" r="70" fill="#F4A460"/><polygon points="55,55 40,20 80,50" fill="#F4A460"/><polygon points="145,55 160,20 120,50" fill="#F4A460"/><path d="M72 98 Q78 90 84 98" stroke="#333" stroke-width="3" fill="none"/><path d="M116 98 Q122 90 128 98" stroke="#333" stroke-width="3" fill="none"/><ellipse cx="100" cy="125" rx="6" ry="4" fill="#FF6B81"/><path d="M78 140 Q100 160 122 140" stroke="#333" stroke-width="3" fill="none"/><text x="150" y="70" font-size="24">✨</text></svg>`)}`;

const sadDog = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="110" r="70" fill="#D2965A"/><ellipse cx="60" cy="65" rx="22" ry="30" fill="#B87333" transform="rotate(-15 60 65)"/><ellipse cx="140" cy="65" rx="22" ry="30" fill="#B87333" transform="rotate(15 140 65)"/><circle cx="80" cy="105" r="7" fill="#333"/><circle cx="120" cy="105" r="7" fill="#333"/><ellipse cx="100" cy="130" rx="10" ry="7" fill="#333"/><path d="M82 150 Q100 140 118 150" stroke="#333" stroke-width="3" fill="none"/><circle cx="84" cy="113" r="4" fill="#5BC0DE" opacity="0.7"/></svg>`)}`;

const happyDog = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="110" r="70" fill="#D2965A"/><ellipse cx="60" cy="65" rx="22" ry="30" fill="#B87333" transform="rotate(-15 60 65)"/><ellipse cx="140" cy="65" rx="22" ry="30" fill="#B87333" transform="rotate(15 140 65)"/><path d="M74 103 Q80 95 86 103" stroke="#333" stroke-width="3" fill="none"/><path d="M114 103 Q120 95 126 103" stroke="#333" stroke-width="3" fill="none"/><ellipse cx="100" cy="130" rx="10" ry="7" fill="#333"/><path d="M78 145 Q100 170 122 145" stroke="#333" stroke-width="3" fill="none"/><ellipse cx="100" cy="158" rx="12" ry="5" fill="#FF6B81"/><text x="148" y="65" font-size="22">💕</text></svg>`)}`;

const sadBunny = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220"><ellipse cx="80" cy="40" rx="14" ry="40" fill="#F5F5F5" stroke="#DDD" stroke-width="1"/><ellipse cx="120" cy="40" rx="14" ry="40" fill="#F5F5F5" stroke="#DDD" stroke-width="1"/><ellipse cx="80" cy="40" rx="8" ry="30" fill="#FFB6C1"/><ellipse cx="120" cy="40" rx="8" ry="30" fill="#FFB6C1"/><circle cx="100" cy="120" r="60" fill="#F5F5F5" stroke="#DDD" stroke-width="1"/><circle cx="82" cy="110" r="6" fill="#333"/><circle cx="118" cy="110" r="6" fill="#333"/><ellipse cx="100" cy="132" rx="5" ry="3" fill="#FFB6C1"/><path d="M85 148 Q100 140 115 148" stroke="#333" stroke-width="2.5" fill="none"/><circle cx="86" cy="118" r="3" fill="#5BC0DE" opacity="0.7"/></svg>`)}`;

const happyBunny = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220"><ellipse cx="80" cy="40" rx="14" ry="40" fill="#F5F5F5" stroke="#DDD" stroke-width="1"/><ellipse cx="120" cy="40" rx="14" ry="40" fill="#F5F5F5" stroke="#DDD" stroke-width="1"/><ellipse cx="80" cy="40" rx="8" ry="30" fill="#FFB6C1"/><ellipse cx="120" cy="40" rx="8" ry="30" fill="#FFB6C1"/><circle cx="100" cy="120" r="60" fill="#F5F5F5" stroke="#DDD" stroke-width="1"/><path d="M76 108 Q82 100 88 108" stroke="#333" stroke-width="2.5" fill="none"/><path d="M112 108 Q118 100 124 108" stroke="#333" stroke-width="2.5" fill="none"/><ellipse cx="100" cy="132" rx="5" ry="3" fill="#FFB6C1"/><path d="M85 143 Q100 162 115 143" stroke="#333" stroke-width="2.5" fill="none"/><text x="145" y="80" font-size="20">🥕</text></svg>`)}`;

const sadHamster = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="55" cy="80" r="20" fill="#E8C07A"/><circle cx="145" cy="80" r="20" fill="#E8C07A"/><circle cx="100" cy="115" r="60" fill="#F5D89A"/><circle cx="100" cy="115" r="60" fill="#F5D89A"/><circle cx="70" cy="130" r="18" fill="#FFE4C4" opacity="0.6"/><circle cx="130" cy="130" r="18" fill="#FFE4C4" opacity="0.6"/><circle cx="82" cy="105" r="5" fill="#333"/><circle cx="118" cy="105" r="5" fill="#333"/><ellipse cx="100" cy="125" rx="4" ry="3" fill="#FF6B81"/><path d="M85 142 Q100 135 115 142" stroke="#333" stroke-width="2.5" fill="none"/><circle cx="86" cy="112" r="3" fill="#5BC0DE" opacity="0.7"/></svg>`)}`;

const happyHamster = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="55" cy="80" r="20" fill="#E8C07A"/><circle cx="145" cy="80" r="20" fill="#E8C07A"/><circle cx="100" cy="115" r="60" fill="#F5D89A"/><circle cx="70" cy="130" r="18" fill="#FFE4C4" opacity="0.6"/><circle cx="130" cy="130" r="18" fill="#FFE4C4" opacity="0.6"/><path d="M76 103 Q82 96 88 103" stroke="#333" stroke-width="2.5" fill="none"/><path d="M112 103 Q118 96 124 103" stroke="#333" stroke-width="2.5" fill="none"/><ellipse cx="100" cy="125" rx="4" ry="3" fill="#FF6B81"/><path d="M85 138 Q100 155 115 138" stroke="#333" stroke-width="2.5" fill="none"/><text x="145" y="70" font-size="20">🌻</text></svg>`)}`;

export const initialData = [
  {
    id: 1,
    name: "Felyin",
    type: "Cat",
    status: "Hungry",
    happiness: 30,
    image: sadCat,
    happyImage: happyCat,
    sadImage: sadCat,
  },
  {
    id: 2,
    name: "Viking",
    type: "Dog",
    status: "Lonely",
    happiness: 20,
    image: sadDog,
    happyImage: happyDog,
    sadImage: sadDog,
  },
  {
    id: 3,
    name: "HoneyBunny",
    type: "Bunny",
    status: "Bored",
    happiness: 40,
    image: sadBunny,
    happyImage: happyBunny,
    sadImage: sadBunny,
  },
  {
    id: 4,
    name: "Rocket",
    type: "Hamster",
    status: "Sleepy",
    happiness: 25,
    image: sadHamster,
    happyImage: happyHamster,
    sadImage: sadHamster,
  },
];
