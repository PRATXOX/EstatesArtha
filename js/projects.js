/*
  ghar.o.logy - Real Estate Project Data

  Logos:
  assets/logos/prestige-group.png
  assets/logos/godrej-properties.png
  assets/logos/gaurs.png
  assets/logos/hero-homes.png

  Unsplash images are representative stock photos, not verified project photos.
  Godrej DMIC prices are indicative. Verify the latest cost sheet before publishing.
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
    logo: 'assets/logos/prestige-group.png',
    logoAlt: 'Prestige Group logo',

    caps: [
      'Premium Residential Architecture',
      'Contemporary Apartment Living',
      'Landscaped Open Spaces',
      'Lifestyle Amenities'
    ],

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
    logo: 'assets/logos/godrej-properties.png',
    logoAlt: 'Godrej Properties logo',

    caps: [
      'Premium Apartment Towers',
      'Contemporary Living Spaces',
      'Green Township Setting',
      'Lifestyle Amenities'
    ],

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

    caps: [
      'Contemporary Residential Towers',
      'Spacious Apartment Layouts',
      'Landscaped Community',
      'Lifestyle Facilities'
    ],

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

    units: [
      '3 BHK',
      '3 BHK + 2T',
      '3 BHK + 3T',
      '3 BHK + Servant Room'
    ],

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

    caps: [
      'Studio Apartment Concept',
      'Modern Tower Architecture',
      'Apartment Interiors',
      'Integrated Township Setting'
    ],

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

    caps: [
      'Premium Apartment Architecture',
      'Spacious Residential Layouts',
      'Green Surroundings',
      'Golf-Facing View Enquiry'
    ],

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

  // 6. GODREJ GLOBAL BUSINESS CITY - DMIC
  {
    id: 6,
    logo: 'assets/logos/godrej-properties.png',
    logoAlt: 'Godrej Properties logo',

    caps: [
      'Godrej Global Business City',
      'DMIC Corridor, Greater Noida',
      'Residential Configurations',
      'Integrated Township Setting'
    ],

    imgs: [
      '1545324418-cc1a3fa10c00',
      '1576013551627-0cc20b96c2a7',
      '1600607687939-ce8a6c25118c',
      '1600585154340-be6161a56a0c',
      '1486325212027-8081e485255e'
    ].map(U),

    name: 'Godrej Global Business City (DMIC)',
    title: 'Godrej Global Business City - DMIC, Greater Noida',
    dev: 'Godrej Properties',
    loc: 'DMIC Corridor, Greater Noida',
    area: 'Greater Noida',

    units: [
      '1 BHK',
      '2 BHK',
      '2 BHK + Study',
      '3 BHK',
      '3 BHK + Study',
      '3 BHK + Utility'
    ],

    size: '985-2,500 sq.ft. (indicative 1-3 BHK sizes)',

    cr: 1.35,
    price: '₹1.35 Cr - ₹3.50 Cr*',
    pre: 'Indicative starting price ₹1.35 Cr*',
    eoi: 'Indicative EOI from ₹2 Lacs*; confirm by configuration',

    badges: ['DMIC Corridor', 'Greater Noida', 'Indicative Pricing'],
    h: 230,

    poss: 'Confirm current launch, approvals and possession details',

    hl: [
      '1 BHK Grande - 985 sq.ft. - indicative ₹1.35 Cr*',
      '1 BHK Luxe - 1,050 sq.ft. - indicative ₹1.45 Cr*',
      '2 BHK Grande - 1,320 sq.ft. - indicative ₹1.85 Cr*',
      '2 BHK + Study Luxe - 1,540 sq.ft. - indicative ₹2.15 Cr*',
      '3 BHK + 2T Grande - 1,690 sq.ft. - indicative ₹2.35 Cr*',
      '3 BHK + 3T Luxe - 1,890 sq.ft. - indicative ₹2.60 Cr*',
      '3 BHK + Study - 2,300 sq.ft. - indicative ₹3.20 Cr*',
      '3 BHK + Utility - 2,500 sq.ft. - indicative ₹3.50 Cr*'
    ],

    pricing: [
      { unit: '1 BHK Grande', size: '985 sq.ft.', price: '₹1.35 Cr*' },
      { unit: '1 BHK Luxe', size: '1,050 sq.ft.', price: '₹1.45 Cr*' },
      { unit: '2 BHK Grande', size: '1,320 sq.ft.', price: '₹1.85 Cr*' },
      { unit: '2 BHK + Study Luxe', size: '1,540 sq.ft.', price: '₹2.15 Cr*' },
      { unit: '3 BHK + 2T Grande', size: '1,690 sq.ft.', price: '₹2.35 Cr*' },
      { unit: '3 BHK + 3T Luxe', size: '1,890 sq.ft.', price: '₹2.60 Cr*' },
      { unit: '3 BHK + Study', size: '2,300 sq.ft.', price: '₹3.20 Cr*' },
      { unit: '3 BHK + Utility', size: '2,500 sq.ft.', price: '₹3.50 Cr*' }
    ],

    priceNote:
      'Indicative marketing prices only. Final pricing may vary by floor, unit, PLC, taxes, parking, maintenance, statutory charges and availability. Verify the latest cost sheet before publication or booking.',

    am: [
      'Clubhouse (verify approved specifications)',
      'Swimming Pool (verify approved specifications)',
      'Gymnasium (verify approved specifications)',
      'Jogging and Cycling Tracks (verify approved specifications)',
      'Landscaped Greens (verify approved specifications)',
      'Community and Recreation Spaces (verify approved specifications)'
    ],

    adv: [
      'DMIC Corridor, Greater Noida',
      '1, 2 and 3 BHK configurations are advertised in project marketing materials',
      'Confirm launch status, registration, floor plans, cost sheet and EOI terms before booking'
    ],

    source: 'https://www.godrejproperties.com/',
    sourceNote:
      'Price figures are indicative and should be checked against the latest project cost sheet and official documents.'
  }
];

// Apply default fields when a project has not defined them.
P.forEach(p => {
  p.hl = p.hl || [
    p.units.join(', ') + (p.size ? ' (' + p.size + ')' : ''),
    p.dev,
    p.loc
  ];

  p.am = p.am || DEF.am;
  p.adv = p.adv || DEF.adv;
});