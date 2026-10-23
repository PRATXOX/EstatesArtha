/*
  estates artha - Real Estate Project Data
*/

const U = id =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=75`;

const DEF = {
  am: [
    'Clubhouse',
    'Swimming Pool',
    'Gymnasium',
    '24/7 Security',
    'Kids Play Area',
    'Landscaped Greens'
  ],
  adv: [
    'Request the latest project brochure',
    'Confirm pricing and availability directly',
    'Verify project documents before booking'
  ]
};

const P = [
  // 1. PRESTIGE BOUGAINVILLEA
  {
    id: 1,
    logo: 'assets/logos/prestige.png',
    logoAlt: 'Prestige Group logo',
    caps: ['Prestige Group Official Partner', 'Premium Residential Architecture', 'Contemporary Apartment Living', 'Landscaped Open Spaces', 'Lifestyle Amenities'],
    imgs: [
      '1545324418-cc1a3fa10c00',
      '1600607687939-ce8a6c25118c',
      '1600585154340-be6161a56a0c',
      '1576013551627-0cc20b96c2a7'
    ].map(U),
    name: 'Prestige Bougainvillea',
    title: 'Prestige Bougainvillea - Sector 150, Noida',
    dev: 'Prestige Group',
    loc: 'Sector 150, Noida',
    area: 'Noida Expressway',
    units: ['2 BHK', '3 BHK', '4 BHK'],
    size: 'Request confirmed unit sizes',
    cr: null,
    price: 'Price on Request',
    badges: ['Premium Residences', 'Sector 150'],
    h: 150,
    poss: 'Confirm current project stage and possession details',
    hl: [
      'Residential offering in Sector 150, Noida',
      'Request the latest official price list and floor plans',
      'Confirm available configurations and inventory'
    ],
    am: [
      'Clubhouse (verify current plan)',
      'Swimming Pool (verify current plan)',
      'Fitness Facilities (verify current plan)',
      'Sports Facilities (verify current plan)',
      'Landscaped Open Spaces'
    ],
    adv: [
      'Sector 150, Noida, along the Noida-Greater Noida Expressway corridor',
      'Ask for current approved project documents and registration details',
      'Confirm exact sizes, amenities and project status before booking'
    ],
    source: 'https://www.prestigeconstructions.com/'
  },

  // 2. GODREJ CROWN RESIDENCES
  {
    id: 2,
    logo: 'assets/logos/godrej-crown.png',
    logoAlt: 'Godrej Properties logo',
    caps: ['Godrej Properties Official Partner', 'Premium Apartment Towers', 'Contemporary Living Spaces', 'Green Township Setting', 'Lifestyle Amenities'],
    imgs: [
      '1486325212027-8081e485255e',
      '1600607687939-ce8a6c25118c',
      '1600585154340-be6161a56a0c',
      '1545324418-cc1a3fa10c00'
    ].map(U),
    name: 'Godrej Crown Greater Noida',
    title: 'Godrej Crown Residences - Godrej Golf Links',
    dev: 'Godrej Properties',
    loc: 'Sector 27, Godrej Golf Links, Greater Noida',
    area: 'Greater Noida',
    units: ['3 BHK', '3 BHK + Utility', '4 BHK + Utility'],
    size: 'Confirm exact unit plans',
    cr: null,
    price: 'Price on Request',
    badges: ['Premium Homes', 'Golf-Themed Township'],
    h: 160,
    poss: 'Confirm current availability and possession details',
    hl: [
      'Premium residences listed within the Godrej Golf Links township',
      'Request tower-wise layouts and the latest price list',
      'Confirm available units and official project details'
    ],
    am: [
      'Clubhouse (verify applicable access)',
      'Swimming Pool (verify current plan)',
      'Fitness Facilities (verify current plan)',
      'Landscaped Greens',
      'Recreation Areas (verify current plan)'
    ],
    adv: [
      'Sector 27, Greater Noida',
      'Ask for current approved project documents and registration details',
      'Verify any golf-facing view for the exact tower, stack and apartment'
    ],
    source: 'https://www.godrejproperties.com/'
  },

  // 3. HERO HOMES - SECTOR MU
  {
    id: 3,
    logo: 'assets/logos/hero-homes.png',
    logoAlt: 'Hero Homes logo',
    caps: ['Hero Realty Official Partner', 'Contemporary Residential Towers', 'Spacious Apartment Layouts', 'Landscaped Community', 'Lifestyle Facilities'],
    imgs: [
      '1600566753190-17f0baa2a6c3',
      '1600585154340-be6161a56a0c',
      '1600607687939-ce8a6c25118c',
      '1613490493576-7fde63acd811'
    ].map(U),
    name: 'Hero Homes Sector MU',
    title: 'Hero Homes - Sector MU, Greater Noida',
    dev: 'Hero Realty',
    loc: 'Sector MU, Greater Noida',
    area: 'Greater Noida',
    units: ['3 BHK', '3 BHK + 2T', '3 BHK + 3T', '3 BHK + Servant Room'],
    size: 'Verify current approved floor plans',
    cr: null,
    price: 'Price on Request',
    badges: ['3 BHK Residences', 'Sector MU'],
    h: 180,
    poss: 'Confirm latest project stage and possession details',
    hl: [
      'Residential options advertised for Sector MU, Greater Noida',
      'Request current floor plans and configuration details',
      'Confirm latest pricing and available inventory'
    ],
    am: [
      'Clubhouse (verify current plan)',
      'Swimming Pool (verify current plan)',
      'Gymnasium (verify current plan)',
      'Landscaped Gardens',
      'Sports and Recreation Facilities (verify current plan)'
    ],
    adv: [
      'Sector MU, Greater Noida',
      'Confirm current project status and registration details',
      'Request approved specifications and current inventory before booking'
    ],
    source: 'https://www.herohomess.com/projects/hero-homes-sector-mu/'
  },

  // 4. GAUR BENTO - YAMUNA EXPRESSWAY
  {
    id: 4,
    logo: 'assets/logos/gaurs.png',
    logoAlt: 'Gaurs Group logo',
    caps: ['Gaurs Group Official Partner', 'Studio Apartment Concept', 'Modern Tower Architecture', 'Apartment Interiors', 'Integrated Township Setting'],
    imgs: [
      '1502672260266-1c1ef2d93688',
      '1600566753190-17f0baa2a6c3',
      '1600607687939-ce8a6c25118c',
      '1545324418-cc1a3fa10c00'
    ].map(U),
    name: 'Gaur Bento',
    title: 'Gaur Bento - Studio Apartments, Yamuna Expressway',
    dev: 'Gaurs Group',
    loc: 'Sector 19, Gaur Yamuna City, Yamuna Expressway',
    area: 'Yamuna Expressway',
    units: ['Studio Apartment'],
    size: 'Confirm sanctioned unit sizes',
    cr: null,
    price: 'Price on Request',
    badges: ['Studio Apartments', 'Yamuna Expressway'],
    h: 215,
    poss: 'Verify current registration, project stage and availability',
    hl: [
      'Studio apartment offering advertised for Gaur Yamuna City',
      'Sector 19, Yamuna Expressway corridor',
      'Request the latest official brochure, pricing and project documents'
    ],
    am: [
      'Clubhouse (verify current plan)',
      'Swimming Pool (verify current plan)',
      'Gymnasium (verify current plan)',
      'Sports Facilities (verify current plan)'
    ],
    adv: [
      'Sector 19, Gaur Yamuna City, Yamuna Expressway',
      'Verify current UP-RERA status and sanctioned project plans',
      'Confirm furnishing, parking, maintenance and payment terms before booking'
    ],
    source: 'https://www.gaursgroup.com/'
  },

  // 5. GAURS GOLF-FACING APARTMENT - SECTOR 150
  {
    id: 5,
    logo: 'assets/logos/gaurs.png',
    logoAlt: 'Gaurs Group logo',
    caps: ['Gaurs Group Official Partner', 'Premium Apartment Architecture', 'Spacious Residential Layouts', 'Green Surroundings', 'Golf-Facing View Enquiry'],
    imgs: [
      '1486406146926-c627a92ad1ab',
      '1600607687939-ce8a6c25118c',
      '1600585154340-be6161a56a0c',
      '1545324418-cc1a3fa10c00'
    ].map(U),
    name: 'Gaur Golf Facing Apartment',
    title: 'Golf-Facing Apartment Enquiries - Sector 150, Noida',
    dev: 'Gaurs Group',
    loc: 'Sector 150, Noida',
    area: 'Noida Expressway',
    units: ['Golf-Facing Apartment'],
    size: 'Confirm unit-wise sizes and configurations',
    cr: null,
    price: 'Price on Request',
    badges: ['Sector 150', 'Golf-Facing Enquiry'],
    h: 190,
    poss: 'Confirm exact project name, launch and available units',
    hl: [
      'Enquire about golf-facing apartment availability in Sector 150',
      'Request the exact project name, tower, stack and floor details',
      'Confirm current pricing, floor plans and inventory before booking'
    ],
    am: [
      'Request amenities in the latest project brochure',
      'Request tower-wise and unit-wise plans',
      'Verify golf-facing orientation for the specific apartment'
    ],
    adv: [
      'Sector 150, Noida, near the Noida Expressway corridor',
      'A golf-facing view is not guaranteed for every unit',
      'Confirm the exact project identity and official documents before booking'
    ],
    source: 'https://www.gaurindia.com/'
  },

  // 6. GODREJ GLOBAL BUSINESS CITY - DMIC (Hero Project)
  {
    id: 6,
    logo: 'assets/logos/godrej-dmic.png',
    logoAlt: 'Godrej Properties logo',
    caps: ['Godrej Properties Official Logo', 'Smart Township Facade', 'Luxury Clubhouse & Pool', 'Smart Home Living Room', 'Green Landscaped Podium', 'Aerial Township View'],
    imgs: [
      '1545324418-cc1a3fa10c00',
      '1576013551627-0cc20b96c2a7',
      '1600607687939-ce8a6c25118c',
      '1600585154340-be6161a56a0c',
      '1486325212027-8081e485255e'
    ].map(U),
    name: 'Godrej DMIC',
    title: 'Godrej DMIC – Smart Township, Greater Noida',
    dev: 'Godrej Properties',
    loc: 'DMIC Belt, Greater Noida',
    area: 'Greater Noida',
    units: ['1 BHK', '2 BHK', '3 BHK'],
    size: '985 – 2,500 sq.ft',
    cr: 1.08,
    price: '₹1.35 Cr*',
    pre: '₹1.08 Cr*',
    eoi: '₹2 Lacs',
    badges: ['Pre-Launch', 'Airport Corridor'],
    h: 215,
    poss: 'Pre-Launch',
    hl: [
      '1, 2 & 3 BHK Luxury Smart Homes in DMIC Corridor',
      'Pre-launch offer starting @ ₹1.08 Cr*',
      'Priority EOI Allocation Starting @ ₹2 Lacs'
    ],
    am: ['Smart Home Automation', 'Grand Clubhouse', 'Infinity Swimming Pool', 'Fully Equipped Gym', '24/7 5-Tier Security', 'EV Charging Stations', 'Kids Play Zone', 'Landscaped Central Greens'],
    adv: ['Located in DMIC Smart Industrial Belt, Greater Noida', 'Quick connectivity to Noida International Airport (Jewar)', 'Seamless access to Yamuna & Eastern Peripheral Expressway'],
    source: 'https://www.godrejproperties.com/'
  }
];

P.forEach(p => {
  p.hl = p.hl || [
    p.units.join(', ') + (p.size ? ' (' + p.size + ')' : ''),
    p.dev,
    p.loc
  ];
  p.am = p.am || DEF.am;
  p.adv = p.adv || DEF.adv;
});