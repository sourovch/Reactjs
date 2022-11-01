const countries = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    population: 40218234,
    currencies: [
      { code: 'AFN', name: 'Afghan afghani', symbol: '؋' },
    ],
    languages: [
      {
        iso639_1: 'ps',
        iso639_2: 'pus',
        name: 'Pashto',
        nativeName: 'پښتو',
      },
      {
        iso639_1: 'uz',
        iso639_2: 'uzb',
        name: 'Uzbek',
        nativeName: 'Oʻzbek',
      },
      {
        iso639_1: 'tk',
        iso639_2: 'tuk',
        name: 'Turkmen',
        nativeName: 'Türkmen',
      },
    ],
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    independent: false,
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    population: 28875,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'sv',
        iso639_2: 'swe',
        name: 'Swedish',
        nativeName: 'svenska',
      },
    ],
    flag: 'https://flagcdn.com/ax.svg',
    independent: false,
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    population: 2837743,
    currencies: [{ code: 'ALL', name: 'Albanian lek', symbol: 'L' }],
    languages: [
      {
        iso639_1: 'sq',
        iso639_2: 'sqi',
        name: 'Albanian',
        nativeName: 'Shqip',
      },
    ],
    flag: 'https://flagcdn.com/al.svg',
    independent: false,
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    population: 44700000,
    currencies: [
      { code: 'DZD', name: 'Algerian dinar', symbol: 'د.ج' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/dz.svg',
    independent: false,
  },
  {
    name: 'American Samoa',
    capital: 'Pago Pago',
    population: 55197,
    currencies: [
      { code: 'USD', name: 'United States Dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'sm',
        iso639_2: 'smo',
        name: 'Samoan',
        nativeName: "gagana fa'a Samoa",
      },
    ],
    flag: 'https://flagcdn.com/as.svg',
    independent: false,
  },
  {
    name: 'Andorra',
    capital: 'Andorra la Vella',
    population: 77265,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'ca',
        iso639_2: 'cat',
        name: 'Catalan',
        nativeName: 'català',
      },
    ],
    flag: 'https://flagcdn.com/ad.svg',
    independent: false,
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: 32866268,
    currencies: [
      { code: 'AOA', name: 'Angolan kwanza', symbol: 'Kz' },
    ],
    languages: [
      {
        iso639_1: 'pt',
        iso639_2: 'por',
        name: 'Portuguese',
        nativeName: 'Português',
      },
    ],
    flag: 'https://flagcdn.com/ao.svg',
    independent: false,
  },
  {
    name: 'Anguilla',
    capital: 'The Valley',
    population: 13452,
    currencies: [
      { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/ai.svg',
    independent: false,
  },
  {
    name: 'Antarctica',
    population: 1000,
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'ru',
        iso639_2: 'rus',
        name: 'Russian',
        nativeName: 'Русский',
      },
    ],
    flag: 'https://flagcdn.com/aq.svg',
    independent: false,
  },
  {
    name: 'Antigua and Barbuda',
    capital: "Saint John's",
    population: 97928,
    currencies: [
      { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/ag.svg',
    independent: false,
  },
  {
    name: 'Argentina',
    capital: 'Buenos Aires',
    population: 45376763,
    currencies: [
      { code: 'ARS', name: 'Argentine peso', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
      {
        iso639_1: 'gn',
        iso639_2: 'grn',
        name: 'Guaraní',
        nativeName: "Avañe'ẽ",
      },
    ],
    flag: 'https://flagcdn.com/ar.svg',
    independent: false,
  },
  {
    name: 'Armenia',
    capital: 'Yerevan',
    population: 2963234,
    currencies: [{ code: 'AMD', name: 'Armenian dram', symbol: '֏' }],
    languages: [
      {
        iso639_1: 'hy',
        iso639_2: 'hye',
        name: 'Armenian',
        nativeName: 'Հայերեն',
      },
    ],
    flag: 'https://flagcdn.com/am.svg',
    independent: false,
  },
  {
    name: 'Aruba',
    capital: 'Oranjestad',
    population: 106766,
    currencies: [{ code: 'AWG', name: 'Aruban florin', symbol: 'ƒ' }],
    languages: [
      {
        iso639_1: 'nl',
        iso639_2: 'nld',
        name: 'Dutch',
        nativeName: 'Nederlands',
      },
      {
        iso639_1: 'pa',
        iso639_2: 'pan',
        name: '(Eastern) Punjabi',
        nativeName: 'ਪੰਜਾਬੀ',
      },
    ],
    flag: 'https://flagcdn.com/aw.svg',
    independent: false,
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    population: 25687041,
    currencies: [
      { code: 'AUD', name: 'Australian dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/au.svg',
    independent: false,
  },
  {
    name: 'Austria',
    capital: 'Vienna',
    population: 8917205,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'de',
        iso639_2: 'deu',
        name: 'German',
        nativeName: 'Deutsch',
      },
    ],
    flag: 'https://flagcdn.com/at.svg',
    independent: false,
  },
  {
    name: 'Azerbaijan',
    capital: 'Baku',
    population: 10110116,
    currencies: [
      { code: 'AZN', name: 'Azerbaijani manat', symbol: '₼' },
    ],
    languages: [
      {
        iso639_1: 'az',
        iso639_2: 'aze',
        name: 'Azerbaijani',
        nativeName: 'azərbaycan dili',
      },
    ],
    flag: 'https://flagcdn.com/az.svg',
    independent: false,
  },
  {
    name: 'Bahamas',
    capital: 'Nassau',
    population: 393248,
    currencies: [
      { code: 'BSD', name: 'Bahamian dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/bs.svg',
    independent: false,
  },
  {
    name: 'Bahrain',
    capital: 'Manama',
    population: 1701583,
    currencies: [
      { code: 'BHD', name: 'Bahraini dinar', symbol: '.د.ب' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/bh.svg',
    independent: false,
  },
  {
    name: 'Bangladesh',
    capital: 'Dhaka',
    population: 164689383,
    currencies: [
      { code: 'BDT', name: 'Bangladeshi taka', symbol: '৳' },
    ],
    languages: [
      {
        iso639_1: 'bn',
        iso639_2: 'ben',
        name: 'Bengali',
        nativeName: 'বাংলা',
      },
    ],
    flag: 'https://flagcdn.com/bd.svg',
    independent: false,
  },
  {
    name: 'Barbados',
    capital: 'Bridgetown',
    population: 287371,
    currencies: [
      { code: 'BBD', name: 'Barbadian dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/bb.svg',
    independent: false,
  },
  {
    name: 'Belarus',
    capital: 'Minsk',
    population: 9398861,
    currencies: [
      { code: 'BYN', name: 'New Belarusian ruble', symbol: 'Br' },
      { code: 'BYR', name: 'Old Belarusian ruble', symbol: 'Br' },
    ],
    languages: [
      {
        iso639_1: 'be',
        iso639_2: 'bel',
        name: 'Belarusian',
        nativeName: 'беларуская мова',
      },
      {
        iso639_1: 'ru',
        iso639_2: 'rus',
        name: 'Russian',
        nativeName: 'Русский',
      },
    ],
    flag: 'https://flagcdn.com/by.svg',
    independent: false,
  },
  {
    name: 'Belgium',
    capital: 'Brussels',
    population: 11555997,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'nl',
        iso639_2: 'nld',
        name: 'Dutch',
        nativeName: 'Nederlands',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'de',
        iso639_2: 'deu',
        name: 'German',
        nativeName: 'Deutsch',
      },
    ],
    flag: 'https://flagcdn.com/be.svg',
    independent: false,
  },
  {
    name: 'Belize',
    capital: 'Belmopan',
    population: 397621,
    currencies: [{ code: 'BZD', name: 'Belize dollar', symbol: '$' }],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/bz.svg',
    independent: false,
  },
  {
    name: 'Benin',
    capital: 'Porto-Novo',
    population: 12123198,
    currencies: [
      { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/bj.svg',
    independent: false,
  },
  {
    name: 'Bermuda',
    capital: 'Hamilton',
    population: 63903,
    currencies: [
      { code: 'BMD', name: 'Bermudian dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/bm.svg',
    independent: false,
  },
  {
    name: 'Bhutan',
    capital: 'Thimphu',
    population: 771612,
    currencies: [
      { code: 'BTN', name: 'Bhutanese ngultrum', symbol: 'Nu.' },
      { code: 'INR', name: 'Indian rupee', symbol: '₹' },
    ],
    languages: [
      {
        iso639_1: 'dz',
        iso639_2: 'dzo',
        name: 'Dzongkha',
        nativeName: 'རྫོང་ཁ',
      },
    ],
    flag: 'https://flagcdn.com/bt.svg',
    independent: false,
  },
  {
    name: 'Bolivia (Plurinational State of)',
    capital: 'Sucre',
    population: 11673029,
    currencies: [
      { code: 'BOB', name: 'Bolivian boliviano', symbol: 'Bs.' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
      {
        iso639_1: 'ay',
        iso639_2: 'aym',
        name: 'Aymara',
        nativeName: 'aymar aru',
      },
      {
        iso639_1: 'qu',
        iso639_2: 'que',
        name: 'Quechua',
        nativeName: 'Runa Simi',
      },
    ],
    flag: 'https://flagcdn.com/bo.svg',
    independent: false,
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    capital: 'Kralendijk',
    population: 17408,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'nl',
        iso639_2: 'nld',
        name: 'Dutch',
        nativeName: 'Nederlands',
      },
    ],
    flag: 'https://flagcdn.com/bq.svg',
    independent: false,
  },
  {
    name: 'Bosnia and Herzegovina',
    capital: 'Sarajevo',
    population: 3280815,
    currencies: [
      {
        code: 'BAM',
        name: 'Bosnia and Herzegovina convertible mark',
        symbol: 'KM',
      },
    ],
    languages: [
      {
        iso639_1: 'bs',
        iso639_2: 'bos',
        name: 'Bosnian',
        nativeName: 'bosanski jezik',
      },
      {
        iso639_1: 'hr',
        iso639_2: 'hrv',
        name: 'Croatian',
        nativeName: 'hrvatski jezik',
      },
      {
        iso639_1: 'sr',
        iso639_2: 'srp',
        name: 'Serbian',
        nativeName: 'српски језик',
      },
    ],
    flag: 'https://flagcdn.com/ba.svg',
    independent: false,
  },
  {
    name: 'Botswana',
    capital: 'Gaborone',
    population: 2351625,
    currencies: [{ code: 'BWP', name: 'Botswana pula', symbol: 'P' }],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'tn',
        iso639_2: 'tsn',
        name: 'Tswana',
        nativeName: 'Setswana',
      },
    ],
    flag: 'https://flagcdn.com/bw.svg',
    independent: false,
  },
  {
    name: 'Bouvet Island',
    population: 0,
    currencies: [
      { code: 'NOK', name: 'Norwegian krone', symbol: 'kr' },
    ],
    languages: [
      {
        iso639_1: 'no',
        iso639_2: 'nor',
        name: 'Norwegian',
        nativeName: 'Norsk',
      },
      {
        iso639_1: 'nb',
        iso639_2: 'nob',
        name: 'Norwegian Bokmål',
        nativeName: 'Norsk bokmål',
      },
      {
        iso639_1: 'nn',
        iso639_2: 'nno',
        name: 'Norwegian Nynorsk',
        nativeName: 'Norsk nynorsk',
      },
    ],
    flag: 'https://flagcdn.com/bv.svg',
    independent: false,
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    population: 212559409,
    currencies: [
      { code: 'BRL', name: 'Brazilian real', symbol: 'R$' },
    ],
    languages: [
      {
        iso639_1: 'pt',
        iso639_2: 'por',
        name: 'Portuguese',
        nativeName: 'Português',
      },
    ],
    flag: 'https://flagcdn.com/br.svg',
    independent: false,
  },
  {
    name: 'British Indian Ocean Territory',
    capital: 'Diego Garcia',
    population: 3000,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/io.svg',
    independent: false,
  },
  {
    name: 'United States Minor Outlying Islands',
    population: 300,
    currencies: [{ code: 'GBP', name: 'British pound', symbol: '£' }],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/um.svg',
    independent: false,
  },
  {
    name: 'Virgin Islands (British)',
    capital: 'Road Town',
    population: 30237,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/vg.svg',
    independent: false,
  },
  {
    name: 'Virgin Islands (U.S.)',
    capital: 'Charlotte Amalie',
    population: 106290,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/vi.svg',
    independent: false,
  },
  {
    name: 'Brunei Darussalam',
    capital: 'Bandar Seri Begawan',
    population: 437483,
    currencies: [
      { code: 'BND', name: 'Brunei dollar', symbol: '$' },
      { code: 'SGD', name: 'Singapore dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'ms',
        iso639_2: 'msa',
        name: 'Malay',
        nativeName: 'bahasa Melayu',
      },
    ],
    flag: 'https://flagcdn.com/bn.svg',
    independent: false,
  },
  {
    name: 'Bulgaria',
    capital: 'Sofia',
    population: 6927288,
    currencies: [
      { code: 'BGN', name: 'Bulgarian lev', symbol: 'лв' },
    ],
    languages: [
      {
        iso639_1: 'bg',
        iso639_2: 'bul',
        name: 'Bulgarian',
        nativeName: 'български език',
      },
    ],
    flag: 'https://flagcdn.com/bg.svg',
    independent: false,
  },
  {
    name: 'Burkina Faso',
    capital: 'Ouagadougou',
    population: 20903278,
    currencies: [
      { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'ff',
        iso639_2: 'ful',
        name: 'Fula',
        nativeName: 'Fulfulde',
      },
    ],
    flag: 'https://flagcdn.com/bf.svg',
    independent: false,
  },
  {
    name: 'Burundi',
    capital: 'Gitega',
    population: 11890781,
    currencies: [
      { code: 'BIF', name: 'Burundian franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'rn',
        iso639_2: 'run',
        name: 'Kirundi',
        nativeName: 'Ikirundi',
      },
    ],
    flag: 'https://flagcdn.com/bi.svg',
    independent: false,
  },
  {
    name: 'Cambodia',
    capital: 'Phnom Penh',
    population: 16718971,
    currencies: [
      { code: 'KHR', name: 'Cambodian riel', symbol: '៛' },
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'km',
        iso639_2: 'khm',
        name: 'Khmer',
        nativeName: 'ខ្មែរ',
      },
    ],
    flag: 'https://flagcdn.com/kh.svg',
    independent: false,
  },
  {
    name: 'Cameroon',
    capital: 'Yaoundé',
    population: 26545864,
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/cm.svg',
    independent: false,
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    population: 38005238,
    currencies: [
      { code: 'CAD', name: 'Canadian dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/ca.svg',
    independent: false,
  },
  {
    name: 'Cabo Verde',
    capital: 'Praia',
    population: 555988,
    currencies: [
      { code: 'CVE', name: 'Cape Verdean escudo', symbol: 'Esc' },
    ],
    languages: [
      {
        iso639_1: 'pt',
        iso639_2: 'por',
        name: 'Portuguese',
        nativeName: 'Português',
      },
    ],
    flag: 'https://flagcdn.com/cv.svg',
    independent: false,
  },
  {
    name: 'Cayman Islands',
    capital: 'George Town',
    population: 65720,
    currencies: [
      { code: 'KYD', name: 'Cayman Islands dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/ky.svg',
    independent: false,
  },
  {
    name: 'Central African Republic',
    capital: 'Bangui',
    population: 4829764,
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'sg',
        iso639_2: 'sag',
        name: 'Sango',
        nativeName: 'yângâ tî sängö',
      },
    ],
    flag: 'https://flagcdn.com/cf.svg',
    independent: false,
  },
  {
    name: 'Chad',
    capital: "N'Djamena",
    population: 16425859,
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/td.svg',
    independent: false,
  },
  {
    name: 'Chile',
    capital: 'Santiago',
    population: 19116209,
    currencies: [{ code: 'CLP', name: 'Chilean peso', symbol: '$' }],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/cl.svg',
    independent: false,
  },
  {
    name: 'China',
    capital: 'Beijing',
    population: 1402112000,
    currencies: [{ code: 'CNY', name: 'Chinese yuan', symbol: '¥' }],
    languages: [
      {
        iso639_1: 'zh',
        iso639_2: 'zho',
        name: 'Chinese',
        nativeName: '中文 (Zhōngwén)',
      },
    ],
    flag: 'https://flagcdn.com/cn.svg',
    independent: false,
  },
  {
    name: 'Christmas Island',
    capital: 'Flying Fish Cove',
    population: 2072,
    currencies: [
      { code: 'AUD', name: 'Australian dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/cx.svg',
    independent: false,
  },
  {
    name: 'Cocos (Keeling) Islands',
    capital: 'West Island',
    population: 550,
    currencies: [
      { code: 'AUD', name: 'Australian dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/cc.svg',
    independent: false,
  },
  {
    name: 'Colombia',
    capital: 'Bogotá',
    population: 50882884,
    currencies: [
      { code: 'COP', name: 'Colombian peso', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/co.svg',
    independent: false,
  },
  {
    name: 'Comoros',
    capital: 'Moroni',
    population: 869595,
    currencies: [
      { code: 'KMF', name: 'Comorian franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/km.svg',
    independent: false,
  },
  {
    name: 'Congo',
    capital: 'Brazzaville',
    population: 5518092,
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'ln',
        iso639_2: 'lin',
        name: 'Lingala',
        nativeName: 'Lingála',
      },
    ],
    flag: 'https://flagcdn.com/cg.svg',
    independent: false,
  },
  {
    name: 'Congo (Democratic Republic of the)',
    capital: 'Kinshasa',
    population: 89561404,
    currencies: [
      { code: 'CDF', name: 'Congolese franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'ln',
        iso639_2: 'lin',
        name: 'Lingala',
        nativeName: 'Lingála',
      },
      {
        iso639_1: 'kg',
        iso639_2: 'kon',
        name: 'Kongo',
        nativeName: 'Kikongo',
      },
      {
        iso639_1: 'sw',
        iso639_2: 'swa',
        name: 'Swahili',
        nativeName: 'Kiswahili',
      },
      {
        iso639_1: 'lu',
        iso639_2: 'lub',
        name: 'Luba-Katanga',
        nativeName: 'Tshiluba',
      },
    ],
    flag: 'https://flagcdn.com/cd.svg',
    independent: false,
  },
  {
    name: 'Cook Islands',
    capital: 'Avarua',
    population: 18100,
    currencies: [
      { code: 'NZD', name: 'New Zealand dollar', symbol: '$' },
      { code: 'CKD', name: 'Cook Islands dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_2: 'rar',
        name: 'Cook Islands Māori',
        nativeName: 'Māori',
      },
    ],
    flag: 'https://flagcdn.com/ck.svg',
    independent: false,
  },
  {
    name: 'Costa Rica',
    capital: 'San José',
    population: 5094114,
    currencies: [
      { code: 'CRC', name: 'Costa Rican colón', symbol: '₡' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/cr.svg',
    independent: false,
  },
  {
    name: 'Croatia',
    capital: 'Zagreb',
    population: 4047200,
    currencies: [
      { code: 'HRK', name: 'Croatian kuna', symbol: 'kn' },
    ],
    languages: [
      {
        iso639_1: 'hr',
        iso639_2: 'hrv',
        name: 'Croatian',
        nativeName: 'hrvatski jezik',
      },
    ],
    flag: 'https://flagcdn.com/hr.svg',
    independent: false,
  },
  {
    name: 'Cuba',
    capital: 'Havana',
    population: 11326616,
    currencies: [
      { code: 'CUC', name: 'Cuban convertible peso', symbol: '$' },
      { code: 'CUP', name: 'Cuban peso', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/cu.svg',
    independent: false,
  },
  {
    name: 'Curaçao',
    capital: 'Willemstad',
    population: 155014,
    currencies: [
      {
        code: 'ANG',
        name: 'Netherlands Antillean guilder',
        symbol: 'ƒ',
      },
    ],
    languages: [
      {
        iso639_1: 'nl',
        iso639_2: 'nld',
        name: 'Dutch',
        nativeName: 'Nederlands',
      },
      {
        iso639_1: 'pa',
        iso639_2: 'pan',
        name: '(Eastern) Punjabi',
        nativeName: 'ਪੰਜਾਬੀ',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/cw.svg',
    independent: false,
  },
  {
    name: 'Cyprus',
    capital: 'Nicosia',
    population: 1207361,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'el',
        iso639_2: 'ell',
        name: 'Greek (modern)',
        nativeName: 'ελληνικά',
      },
      {
        iso639_1: 'tr',
        iso639_2: 'tur',
        name: 'Turkish',
        nativeName: 'Türkçe',
      },
      {
        iso639_1: 'hy',
        iso639_2: 'hye',
        name: 'Armenian',
        nativeName: 'Հայերեն',
      },
    ],
    flag: 'https://flagcdn.com/cy.svg',
    independent: false,
  },
  {
    name: 'Czech Republic',
    capital: 'Prague',
    population: 10698896,
    currencies: [{ code: 'CZK', name: 'Czech koruna', symbol: 'Kč' }],
    languages: [
      {
        iso639_1: 'cs',
        iso639_2: 'ces',
        name: 'Czech',
        nativeName: 'čeština',
      },
      {
        iso639_1: 'sk',
        iso639_2: 'slk',
        name: 'Slovak',
        nativeName: 'slovenčina',
      },
    ],
    flag: 'https://flagcdn.com/cz.svg',
    independent: false,
  },
  {
    name: 'Denmark',
    capital: 'Copenhagen',
    population: 5831404,
    currencies: [{ code: 'DKK', name: 'Danish krone', symbol: 'kr' }],
    languages: [
      {
        iso639_1: 'da',
        iso639_2: 'dan',
        name: 'Danish',
        nativeName: 'dansk',
      },
    ],
    flag: 'https://flagcdn.com/dk.svg',
    independent: false,
  },
  {
    name: 'Djibouti',
    capital: 'Djibouti',
    population: 988002,
    currencies: [
      { code: 'DJF', name: 'Djiboutian franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/dj.svg',
    independent: false,
  },
  {
    name: 'Dominica',
    capital: 'Roseau',
    population: 71991,
    currencies: [
      { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/dm.svg',
    independent: false,
  },
  {
    name: 'Dominican Republic',
    capital: 'Santo Domingo',
    population: 10847904,
    currencies: [
      { code: 'DOP', name: 'Dominican peso', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/do.svg',
    independent: false,
  },
  {
    name: 'Ecuador',
    capital: 'Quito',
    population: 17643060,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/ec.svg',
    independent: false,
  },
  {
    name: 'Egypt',
    capital: 'Cairo',
    population: 102334403,
    currencies: [
      { code: 'EGP', name: 'Egyptian pound', symbol: '£' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/eg.svg',
    independent: false,
  },
  {
    name: 'El Salvador',
    capital: 'San Salvador',
    population: 6486201,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/sv.svg',
    independent: false,
  },
  {
    name: 'Equatorial Guinea',
    capital: 'Malabo',
    population: 1402985,
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'pt',
        iso639_2: 'por',
        name: 'Portuguese',
        nativeName: 'Português',
      },
      { iso639_2: 'fan', name: 'Fang', nativeName: 'Fang' },
    ],
    flag: 'https://flagcdn.com/gq.svg',
    independent: false,
  },
  {
    name: 'Eritrea',
    capital: 'Asmara',
    population: 5352000,
    currencies: [
      { code: 'ERN', name: 'Eritrean nakfa', symbol: 'Nfk' },
    ],
    languages: [
      {
        iso639_1: 'ti',
        iso639_2: 'tir',
        name: 'Tigrinya',
        nativeName: 'ትግርኛ',
      },
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      { iso639_2: 'tig', name: 'Tigre', nativeName: 'ትግረ' },
      { iso639_2: 'kun', name: 'Kunama', nativeName: 'Kunama' },
      { iso639_2: 'ssy', name: 'Saho', nativeName: 'Saho' },
      { iso639_2: 'byn', name: 'Bilen', nativeName: 'ብሊና' },
      { iso639_2: 'nrb', name: 'Nara', nativeName: 'Nara' },
      {
        iso639_1: 'aa',
        iso639_2: 'aar',
        name: 'Afar',
        nativeName: 'Afar',
      },
    ],
    flag: 'https://flagcdn.com/er.svg',
    independent: false,
  },
  {
    name: 'Estonia',
    capital: 'Tallinn',
    population: 1331057,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'et',
        iso639_2: 'est',
        name: 'Estonian',
        nativeName: 'eesti',
      },
    ],
    flag: 'https://flagcdn.com/ee.svg',
    independent: false,
  },
  {
    name: 'Ethiopia',
    capital: 'Addis Ababa',
    population: 114963583,
    currencies: [
      { code: 'ETB', name: 'Ethiopian birr', symbol: 'Br' },
    ],
    languages: [
      {
        iso639_1: 'am',
        iso639_2: 'amh',
        name: 'Amharic',
        nativeName: 'አማርኛ',
      },
    ],
    flag: 'https://flagcdn.com/et.svg',
    independent: false,
  },
  {
    name: 'Falkland Islands (Malvinas)',
    capital: 'Stanley',
    population: 2563,
    currencies: [
      { code: 'FKP', name: 'Falkland Islands pound', symbol: '£' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/fk.svg',
    independent: false,
  },
  {
    name: 'Faroe Islands',
    capital: 'Tórshavn',
    population: 48865,
    currencies: [
      { code: 'DKK', name: 'Danish krone', symbol: 'kr' },
      { code: 'FOK', name: 'Faroese króna', symbol: 'kr' },
    ],
    languages: [
      {
        iso639_1: 'fo',
        iso639_2: 'fao',
        name: 'Faroese',
        nativeName: 'føroyskt',
      },
    ],
    flag: 'https://flagcdn.com/fo.svg',
    independent: false,
  },
  {
    name: 'Fiji',
    capital: 'Suva',
    population: 896444,
    currencies: [{ code: 'FJD', name: 'Fijian dollar', symbol: '$' }],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'fj',
        iso639_2: 'fij',
        name: 'Fijian',
        nativeName: 'vosa Vakaviti',
      },
      {
        iso639_2: 'hif',
        name: 'Fiji Hindi',
        nativeName: 'फ़िजी बात',
      },
      {
        iso639_2: 'rtm',
        name: 'Rotuman',
        nativeName: 'Fäeag Rotuma',
      },
    ],
    flag: 'https://flagcdn.com/fj.svg',
    independent: false,
  },
  {
    name: 'Finland',
    capital: 'Helsinki',
    population: 5530719,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fi',
        iso639_2: 'fin',
        name: 'Finnish',
        nativeName: 'suomi',
      },
      {
        iso639_1: 'sv',
        iso639_2: 'swe',
        name: 'Swedish',
        nativeName: 'svenska',
      },
    ],
    flag: 'https://flagcdn.com/fi.svg',
    independent: false,
  },
  {
    name: 'France',
    capital: 'Paris',
    population: 67391582,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/fr.svg',
    independent: false,
  },
  {
    name: 'French Guiana',
    capital: 'Cayenne',
    population: 254541,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/gf.svg',
    independent: false,
  },
  {
    name: 'French Polynesia',
    capital: 'Papeetē',
    population: 280904,
    currencies: [{ code: 'XPF', name: 'CFP franc', symbol: 'Fr' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/pf.svg',
    independent: false,
  },
  {
    name: 'French Southern Territories',
    capital: 'Port-aux-Français',
    population: 140,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/tf.svg',
    independent: false,
  },
  {
    name: 'Gabon',
    capital: 'Libreville',
    population: 2225728,
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/ga.svg',
    independent: false,
  },
  {
    name: 'Gambia',
    capital: 'Banjul',
    population: 2416664,
    currencies: [
      { code: 'GMD', name: 'Gambian dalasi', symbol: 'D' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/gm.svg',
    independent: false,
  },
  {
    name: 'Georgia',
    capital: 'Tbilisi',
    population: 3714000,
    currencies: [{ code: 'GEL', name: 'Georgian Lari', symbol: 'ლ' }],
    languages: [
      {
        iso639_1: 'ka',
        iso639_2: 'kat',
        name: 'Georgian',
        nativeName: 'ქართული',
      },
    ],
    flag: 'https://flagcdn.com/ge.svg',
    independent: false,
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    population: 83240525,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'de',
        iso639_2: 'deu',
        name: 'German',
        nativeName: 'Deutsch',
      },
    ],
    flag: 'https://flagcdn.com/de.svg',
    independent: false,
  },
  {
    name: 'Ghana',
    capital: 'Accra',
    population: 31072945,
    currencies: [{ code: 'GHS', name: 'Ghanaian cedi', symbol: '₵' }],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/gh.svg',
    independent: false,
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: 33691,
    currencies: [
      { code: 'GIP', name: 'Gibraltar pound', symbol: '£' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/gi.svg',
    independent: false,
  },
  {
    name: 'Greece',
    capital: 'Athens',
    population: 10715549,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'el',
        iso639_2: 'ell',
        name: 'Greek (modern)',
        nativeName: 'ελληνικά',
      },
    ],
    flag: 'https://flagcdn.com/gr.svg',
    independent: false,
  },
  {
    name: 'Greenland',
    capital: 'Nuuk',
    population: 56367,
    currencies: [{ code: 'DKK', name: 'Danish krone', symbol: 'kr' }],
    languages: [
      {
        iso639_1: 'kl',
        iso639_2: 'kal',
        name: 'Kalaallisut',
        nativeName: 'kalaallisut',
      },
    ],
    flag: 'https://flagcdn.com/gl.svg',
    independent: false,
  },
  {
    name: 'Grenada',
    capital: "St. George's",
    population: 112519,
    currencies: [
      { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/gd.svg',
    independent: false,
  },
  {
    name: 'Guadeloupe',
    capital: 'Basse-Terre',
    population: 400132,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/gp.svg',
    independent: false,
  },
  {
    name: 'Guam',
    capital: 'Hagåtña',
    population: 168783,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'ch',
        iso639_2: 'cha',
        name: 'Chamorro',
        nativeName: 'Chamoru',
      },
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/gu.svg',
    independent: false,
  },
  {
    name: 'Guatemala',
    capital: 'Guatemala City',
    population: 16858333,
    currencies: [
      { code: 'GTQ', name: 'Guatemalan quetzal', symbol: 'Q' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/gt.svg',
    independent: false,
  },
  {
    name: 'Guernsey',
    capital: 'St. Peter Port',
    population: 62999,
    currencies: [
      { code: 'GBP', name: 'British pound', symbol: '£' },
      { code: 'GGP', name: 'Guernsey pound', symbol: '£' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/gg.svg',
    independent: false,
  },
  {
    name: 'Guinea',
    capital: 'Conakry',
    population: 13132792,
    currencies: [
      { code: 'GNF', name: 'Guinean franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'ff',
        iso639_2: 'ful',
        name: 'Fula',
        nativeName: 'Fulfulde',
      },
    ],
    flag: 'https://flagcdn.com/gn.svg',
    independent: false,
  },
  {
    name: 'Guinea-Bissau',
    capital: 'Bissau',
    population: 1967998,
    currencies: [
      { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'pt',
        iso639_2: 'por',
        name: 'Portuguese',
        nativeName: 'Português',
      },
    ],
    flag: 'https://flagcdn.com/gw.svg',
    independent: false,
  },
  {
    name: 'Guyana',
    capital: 'Georgetown',
    population: 786559,
    currencies: [
      { code: 'GYD', name: 'Guyanese dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/gy.svg',
    independent: false,
  },
  {
    name: 'Haiti',
    capital: 'Port-au-Prince',
    population: 11402533,
    currencies: [
      { code: 'HTG', name: 'Haitian gourde', symbol: 'G' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'ht',
        iso639_2: 'hat',
        name: 'Haitian',
        nativeName: 'Kreyòl ayisyen',
      },
    ],
    flag: 'https://flagcdn.com/ht.svg',
    independent: false,
  },
  {
    name: 'Heard Island and McDonald Islands',
    population: 0,
    currencies: [
      { code: 'AUD', name: 'Australian dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/hm.svg',
    independent: false,
  },
  {
    name: 'Vatican City',
    capital: 'Vatican City',
    population: 451,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'la',
        iso639_2: 'lat',
        name: 'Latin',
        nativeName: 'latine',
      },
      {
        iso639_1: 'it',
        iso639_2: 'ita',
        name: 'Italian',
        nativeName: 'Italiano',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'Français',
      },
      {
        iso639_1: 'de',
        iso639_2: 'deu',
        name: 'German',
        nativeName: 'Deutsch',
      },
    ],
    flag: 'https://flagcdn.com/va.svg',
    independent: false,
  },
  {
    name: 'Honduras',
    capital: 'Tegucigalpa',
    population: 9904608,
    currencies: [
      { code: 'HNL', name: 'Honduran lempira', symbol: 'L' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/hn.svg',
    independent: false,
  },
  {
    name: 'Hungary',
    capital: 'Budapest',
    population: 9749763,
    currencies: [
      { code: 'HUF', name: 'Hungarian forint', symbol: 'Ft' },
    ],
    languages: [
      {
        iso639_1: 'hu',
        iso639_2: 'hun',
        name: 'Hungarian',
        nativeName: 'magyar',
      },
    ],
    flag: 'https://flagcdn.com/hu.svg',
    independent: false,
  },
  {
    name: 'Hong Kong',
    capital: 'City of Victoria',
    population: 7481800,
    currencies: [
      { code: 'HKD', name: 'Hong Kong dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'zh',
        iso639_2: 'zho',
        name: 'Chinese',
        nativeName: '中文 (Zhōngwén)',
      },
    ],
    flag: 'https://flagcdn.com/hk.svg',
    independent: false,
  },
  {
    name: 'Iceland',
    capital: 'Reykjavík',
    population: 366425,
    currencies: [
      { code: 'ISK', name: 'Icelandic króna', symbol: 'kr' },
    ],
    languages: [
      {
        iso639_1: 'is',
        iso639_2: 'isl',
        name: 'Icelandic',
        nativeName: 'Íslenska',
      },
    ],
    flag: 'https://flagcdn.com/is.svg',
    independent: false,
  },
  {
    name: 'India',
    capital: 'New Delhi',
    population: 1380004385,
    currencies: [{ code: 'INR', name: 'Indian rupee', symbol: '₹' }],
    languages: [
      {
        iso639_1: 'hi',
        iso639_2: 'hin',
        name: 'Hindi',
        nativeName: 'हिन्दी',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/in.svg',
    independent: false,
  },
  {
    name: 'Indonesia',
    capital: 'Jakarta',
    population: 273523621,
    currencies: [
      { code: 'IDR', name: 'Indonesian rupiah', symbol: 'Rp' },
    ],
    languages: [
      {
        iso639_1: 'id',
        iso639_2: 'ind',
        name: 'Indonesian',
        nativeName: 'Bahasa Indonesia',
      },
    ],
    flag: 'https://flagcdn.com/id.svg',
    independent: false,
  },
  {
    name: 'Ivory Coast',
    capital: 'Yamoussoukro',
    population: 26378275,
    currencies: [
      { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/ci.svg',
    independent: false,
  },
  {
    name: 'Iran (Islamic Republic of)',
    capital: 'Tehran',
    population: 83992953,
    currencies: [{ code: 'IRR', name: 'Iranian rial', symbol: '﷼' }],
    languages: [
      {
        iso639_1: 'fa',
        iso639_2: 'fas',
        name: 'Persian (Farsi)',
        nativeName: 'فارسی',
      },
    ],
    flag: 'https://flagcdn.com/ir.svg',
    independent: false,
  },
  {
    name: 'Iraq',
    capital: 'Baghdad',
    population: 40222503,
    currencies: [{ code: 'IQD', name: 'Iraqi dinar', symbol: 'ع.د' }],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
      {
        iso639_1: 'ku',
        iso639_2: 'kur',
        name: 'Kurdish',
        nativeName: 'Kurdî',
      },
    ],
    flag: 'https://flagcdn.com/iq.svg',
    independent: false,
  },
  {
    name: 'Ireland',
    capital: 'Dublin',
    population: 4994724,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'ga',
        iso639_2: 'gle',
        name: 'Irish',
        nativeName: 'Gaeilge',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/ie.svg',
    independent: false,
  },
  {
    name: 'Isle of Man',
    capital: 'Douglas',
    population: 85032,
    currencies: [
      { code: 'GBP', name: 'British pound', symbol: '£' },
      { code: 'IMP[G]', name: 'Manx pound', symbol: '£' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'gv',
        iso639_2: 'glv',
        name: 'Manx',
        nativeName: 'Gaelg',
      },
    ],
    flag: 'https://flagcdn.com/im.svg',
    independent: false,
  },
  {
    name: 'Israel',
    capital: 'Jerusalem',
    population: 9216900,
    currencies: [
      { code: 'ILS', name: 'Israeli new shekel', symbol: '₪' },
    ],
    languages: [
      {
        iso639_1: 'he',
        iso639_2: 'heb',
        name: 'Hebrew (modern)',
        nativeName: 'עברית',
      },
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/il.svg',
    independent: false,
  },
  {
    name: 'Italy',
    capital: 'Rome',
    population: 59554023,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'it',
        iso639_2: 'ita',
        name: 'Italian',
        nativeName: 'Italiano',
      },
    ],
    flag: 'https://flagcdn.com/it.svg',
    independent: false,
  },
  {
    name: 'Jamaica',
    capital: 'Kingston',
    population: 2961161,
    currencies: [
      { code: 'JMD', name: 'Jamaican dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/jm.svg',
    independent: false,
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    population: 125836021,
    currencies: [{ code: 'JPY', name: 'Japanese yen', symbol: '¥' }],
    languages: [
      {
        iso639_1: 'ja',
        iso639_2: 'jpn',
        name: 'Japanese',
        nativeName: '日本語 (にほんご)',
      },
    ],
    flag: 'https://flagcdn.com/jp.svg',
    independent: false,
  },
  {
    name: 'Jersey',
    capital: 'Saint Helier',
    population: 100800,
    currencies: [
      { code: 'GBP', name: 'British pound', symbol: '£' },
      { code: 'JEP[G]', name: 'Jersey pound', symbol: '£' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/je.svg',
    independent: false,
  },
  {
    name: 'Jordan',
    capital: 'Amman',
    population: 10203140,
    currencies: [
      { code: 'JOD', name: 'Jordanian dinar', symbol: 'د.ا' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/jo.svg',
    independent: false,
  },
  {
    name: 'Kazakhstan',
    capital: 'Nur-Sultan',
    population: 18754440,
    currencies: [
      { code: 'KZT', name: 'Kazakhstani tenge', symbol: '₸' },
    ],
    languages: [
      {
        iso639_1: 'kk',
        iso639_2: 'kaz',
        name: 'Kazakh',
        nativeName: 'қазақ тілі',
      },
      {
        iso639_1: 'ru',
        iso639_2: 'rus',
        name: 'Russian',
        nativeName: 'Русский',
      },
    ],
    flag: 'https://flagcdn.com/kz.svg',
    independent: false,
  },
  {
    name: 'Kenya',
    capital: 'Nairobi',
    population: 53771300,
    currencies: [
      { code: 'KES', name: 'Kenyan shilling', symbol: 'Sh' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'sw',
        iso639_2: 'swa',
        name: 'Swahili',
        nativeName: 'Kiswahili',
      },
    ],
    flag: 'https://flagcdn.com/ke.svg',
    independent: false,
  },
  {
    name: 'Kiribati',
    capital: 'South Tarawa',
    population: 119446,
    currencies: [
      { code: 'AUD', name: 'Australian dollar', symbol: '$' },
      { code: 'KID', name: 'Kiribati dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/ki.svg',
    independent: false,
  },
  {
    name: 'Kuwait',
    capital: 'Kuwait City',
    population: 4270563,
    currencies: [
      { code: 'KWD', name: 'Kuwaiti dinar', symbol: 'د.ك' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/kw.svg',
    independent: false,
  },
  {
    name: 'Kyrgyzstan',
    capital: 'Bishkek',
    population: 6591600,
    currencies: [
      { code: 'KGS', name: 'Kyrgyzstani som', symbol: 'с' },
    ],
    languages: [
      {
        iso639_1: 'ky',
        iso639_2: 'kir',
        name: 'Kyrgyz',
        nativeName: 'Кыргызча',
      },
      {
        iso639_1: 'ru',
        iso639_2: 'rus',
        name: 'Russian',
        nativeName: 'Русский',
      },
    ],
    flag: 'https://flagcdn.com/kg.svg',
    independent: false,
  },
  {
    name: "Lao People's Democratic Republic",
    capital: 'Vientiane',
    population: 7275556,
    currencies: [{ code: 'LAK', name: 'Lao kip', symbol: '₭' }],
    languages: [
      {
        iso639_1: 'lo',
        iso639_2: 'lao',
        name: 'Lao',
        nativeName: 'ພາສາລາວ',
      },
    ],
    flag: 'https://flagcdn.com/la.svg',
    independent: false,
  },
  {
    name: 'Latvia',
    capital: 'Riga',
    population: 1901548,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'lv',
        iso639_2: 'lav',
        name: 'Latvian',
        nativeName: 'latviešu valoda',
      },
    ],
    flag: 'https://flagcdn.com/lv.svg',
    independent: false,
  },
  {
    name: 'Lebanon',
    capital: 'Beirut',
    population: 6825442,
    currencies: [
      { code: 'LBP', name: 'Lebanese pound', symbol: 'ل.ل' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/lb.svg',
    independent: false,
  },
  {
    name: 'Lesotho',
    capital: 'Maseru',
    population: 2142252,
    currencies: [
      { code: 'LSL', name: 'Lesotho loti', symbol: 'L' },
      { code: 'ZAR', name: 'South African rand', symbol: 'R' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'st',
        iso639_2: 'sot',
        name: 'Southern Sotho',
        nativeName: 'Sesotho',
      },
    ],
    flag: 'https://flagcdn.com/ls.svg',
    independent: false,
  },
  {
    name: 'Liberia',
    capital: 'Monrovia',
    population: 5057677,
    currencies: [
      { code: 'LRD', name: 'Liberian dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/lr.svg',
    independent: false,
  },
  {
    name: 'Libya',
    capital: 'Tripoli',
    population: 6871287,
    currencies: [
      { code: 'LYD', name: 'Libyan dinar', symbol: 'ل.د' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/ly.svg',
    independent: false,
  },
  {
    name: 'Liechtenstein',
    capital: 'Vaduz',
    population: 38137,
    currencies: [{ code: 'CHF', name: 'Swiss franc', symbol: 'Fr' }],
    languages: [
      {
        iso639_1: 'de',
        iso639_2: 'deu',
        name: 'German',
        nativeName: 'Deutsch',
      },
    ],
    flag: 'https://flagcdn.com/li.svg',
    independent: false,
  },
  {
    name: 'Lithuania',
    capital: 'Vilnius',
    population: 2794700,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'lt',
        iso639_2: 'lit',
        name: 'Lithuanian',
        nativeName: 'lietuvių kalba',
      },
    ],
    flag: 'https://flagcdn.com/lt.svg',
    independent: false,
  },
  {
    name: 'Luxembourg',
    capital: 'Luxembourg',
    population: 632275,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'de',
        iso639_2: 'deu',
        name: 'German',
        nativeName: 'Deutsch',
      },
      {
        iso639_1: 'lb',
        iso639_2: 'ltz',
        name: 'Luxembourgish',
        nativeName: 'Lëtzebuergesch',
      },
    ],
    flag: 'https://flagcdn.com/lu.svg',
    independent: false,
  },
  {
    name: 'Macao',
    population: 649342,
    currencies: [
      { code: 'MOP', name: 'Macanese pataca', symbol: 'P' },
    ],
    languages: [
      {
        iso639_1: 'zh',
        iso639_2: 'zho',
        name: 'Chinese',
        nativeName: '中文 (Zhōngwén)',
      },
      {
        iso639_1: 'pt',
        iso639_2: 'por',
        name: 'Portuguese',
        nativeName: 'Português',
      },
    ],
    flag: 'https://flagcdn.com/mo.svg',
    independent: false,
  },
  {
    name: 'North Macedonia',
    capital: 'Skopje',
    population: 2083380,
    currencies: [
      { code: 'MKD', name: 'Macedonian denar', symbol: 'ден' },
    ],
    languages: [
      {
        iso639_1: 'mk',
        iso639_2: 'mkd',
        name: 'Macedonian',
        nativeName: 'македонски јазик',
      },
    ],
    flag: 'https://flagcdn.com/mk.svg',
    independent: false,
  },
  {
    name: 'Madagascar',
    capital: 'Antananarivo',
    population: 27691019,
    currencies: [
      { code: 'MGA', name: 'Malagasy ariary', symbol: 'Ar' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'mg',
        iso639_2: 'mlg',
        name: 'Malagasy',
        nativeName: 'fiteny malagasy',
      },
    ],
    flag: 'https://flagcdn.com/mg.svg',
    independent: false,
  },
  {
    name: 'Malawi',
    capital: 'Lilongwe',
    population: 19129955,
    currencies: [
      { code: 'MWK', name: 'Malawian kwacha', symbol: 'MK' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'ny',
        iso639_2: 'nya',
        name: 'Chichewa',
        nativeName: 'chiCheŵa',
      },
    ],
    flag: 'https://flagcdn.com/mw.svg',
    independent: false,
  },
  {
    name: 'Malaysia',
    capital: 'Kuala Lumpur',
    population: 32365998,
    currencies: [
      { code: 'MYR', name: 'Malaysian ringgit', symbol: 'RM' },
    ],
    languages: [
      {
        iso639_1: 'ms',
        iso639_2: 'zsm',
        name: 'Malaysian',
        nativeName: 'بهاس مليسيا',
      },
    ],
    flag: 'https://flagcdn.com/my.svg',
    independent: false,
  },
  {
    name: 'Maldives',
    capital: 'Malé',
    population: 540542,
    currencies: [
      { code: 'MVR', name: 'Maldivian rufiyaa', symbol: '.ރ' },
    ],
    languages: [
      {
        iso639_1: 'dv',
        iso639_2: 'div',
        name: 'Divehi',
        nativeName: 'ދިވެހި',
      },
    ],
    flag: 'https://flagcdn.com/mv.svg',
    independent: false,
  },
  {
    name: 'Mali',
    capital: 'Bamako',
    population: 20250834,
    currencies: [
      { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/ml.svg',
    independent: false,
  },
  {
    name: 'Malta',
    capital: 'Valletta',
    population: 525285,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'mt',
        iso639_2: 'mlt',
        name: 'Maltese',
        nativeName: 'Malti',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/mt.svg',
    independent: false,
  },
  {
    name: 'Marshall Islands',
    capital: 'Majuro',
    population: 59194,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'mh',
        iso639_2: 'mah',
        name: 'Marshallese',
        nativeName: 'Kajin M̧ajeļ',
      },
    ],
    flag: 'https://flagcdn.com/mh.svg',
    independent: false,
  },
  {
    name: 'Martinique',
    capital: 'Fort-de-France',
    population: 378243,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/mq.svg',
    independent: false,
  },
  {
    name: 'Mauritania',
    capital: 'Nouakchott',
    population: 4649660,
    currencies: [
      { code: 'MRO', name: 'Mauritanian ouguiya', symbol: 'UM' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/mr.svg',
    independent: false,
  },
  {
    name: 'Mauritius',
    capital: 'Port Louis',
    population: 1265740,
    currencies: [
      { code: 'MUR', name: 'Mauritian rupee', symbol: '₨' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/mu.svg',
    independent: false,
  },
  {
    name: 'Mayotte',
    capital: 'Mamoudzou',
    population: 226915,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/yt.svg',
    independent: false,
  },
  {
    name: 'Mexico',
    capital: 'Mexico City',
    population: 128932753,
    currencies: [{ code: 'MXN', name: 'Mexican peso', symbol: '$' }],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/mx.svg',
    independent: false,
  },
  {
    name: 'Micronesia (Federated States of)',
    capital: 'Palikir',
    population: 115021,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/fm.svg',
    independent: false,
  },
  {
    name: 'Moldova (Republic of)',
    capital: 'Chișinău',
    population: 2617820,
    currencies: [{ code: 'MDL', name: 'Moldovan leu', symbol: 'L' }],
    languages: [
      {
        iso639_1: 'ro',
        iso639_2: 'ron',
        name: 'Romanian',
        nativeName: 'Română',
      },
    ],
    flag: 'https://flagcdn.com/md.svg',
    independent: false,
  },
  {
    name: 'Monaco',
    capital: 'Monaco',
    population: 39244,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/mc.svg',
    independent: false,
  },
  {
    name: 'Mongolia',
    capital: 'Ulan Bator',
    population: 3278292,
    currencies: [
      { code: 'MNT', name: 'Mongolian tögrög', symbol: '₮' },
    ],
    languages: [
      {
        iso639_1: 'mn',
        iso639_2: 'mon',
        name: 'Mongolian',
        nativeName: 'Монгол хэл',
      },
    ],
    flag: 'https://flagcdn.com/mn.svg',
    independent: false,
  },
  {
    name: 'Montenegro',
    capital: 'Podgorica',
    population: 621718,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'sr',
        iso639_2: 'srp',
        name: 'Serbian',
        nativeName: 'српски језик',
      },
      {
        iso639_1: 'bs',
        iso639_2: 'bos',
        name: 'Bosnian',
        nativeName: 'bosanski jezik',
      },
      {
        iso639_1: 'sq',
        iso639_2: 'sqi',
        name: 'Albanian',
        nativeName: 'Shqip',
      },
      {
        iso639_1: 'hr',
        iso639_2: 'hrv',
        name: 'Croatian',
        nativeName: 'hrvatski jezik',
      },
    ],
    flag: 'https://flagcdn.com/me.svg',
    independent: false,
  },
  {
    name: 'Montserrat',
    capital: 'Plymouth',
    population: 4922,
    currencies: [
      { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/ms.svg',
    independent: false,
  },
  {
    name: 'Morocco',
    capital: 'Rabat',
    population: 36910558,
    currencies: [
      { code: 'MAD', name: 'Moroccan dirham', symbol: 'د.م.' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/ma.svg',
    independent: false,
  },
  {
    name: 'Mozambique',
    capital: 'Maputo',
    population: 31255435,
    currencies: [
      { code: 'MZN', name: 'Mozambican metical', symbol: 'MT' },
    ],
    languages: [
      {
        iso639_1: 'pt',
        iso639_2: 'por',
        name: 'Portuguese',
        nativeName: 'Português',
      },
    ],
    flag: 'https://flagcdn.com/mz.svg',
    independent: false,
  },
  {
    name: 'Myanmar',
    capital: 'Naypyidaw',
    population: 54409794,
    currencies: [{ code: 'MMK', name: 'Burmese kyat', symbol: 'Ks' }],
    languages: [
      {
        iso639_1: 'my',
        iso639_2: 'mya',
        name: 'Burmese',
        nativeName: 'ဗမာစာ',
      },
    ],
    flag: 'https://flagcdn.com/mm.svg',
    independent: false,
  },
  {
    name: 'Namibia',
    capital: 'Windhoek',
    population: 2540916,
    currencies: [
      { code: 'NAD', name: 'Namibian dollar', symbol: '$' },
      { code: 'ZAR', name: 'South African rand', symbol: 'R' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'af',
        iso639_2: 'afr',
        name: 'Afrikaans',
        nativeName: 'Afrikaans',
      },
    ],
    flag: 'https://flagcdn.com/na.svg',
    independent: false,
  },
  {
    name: 'Nauru',
    capital: 'Yaren',
    population: 10834,
    currencies: [
      { code: 'AUD', name: 'Australian dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'na',
        iso639_2: 'nau',
        name: 'Nauruan',
        nativeName: 'Dorerin Naoero',
      },
    ],
    flag: 'https://flagcdn.com/nr.svg',
    independent: false,
  },
  {
    name: 'Nepal',
    capital: 'Kathmandu',
    population: 29136808,
    currencies: [
      { code: 'NPR', name: 'Nepalese rupee', symbol: '₨' },
    ],
    languages: [
      {
        iso639_1: 'ne',
        iso639_2: 'nep',
        name: 'Nepali',
        nativeName: 'नेपाली',
      },
    ],
    flag: 'https://flagcdn.com/np.svg',
    independent: false,
  },
  {
    name: 'Netherlands',
    capital: 'Amsterdam',
    population: 17441139,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'nl',
        iso639_2: 'nld',
        name: 'Dutch',
        nativeName: 'Nederlands',
      },
    ],
    flag: 'https://flagcdn.com/nl.svg',
    independent: false,
  },
  {
    name: 'New Caledonia',
    capital: 'Nouméa',
    population: 271960,
    currencies: [{ code: 'XPF', name: 'CFP franc', symbol: 'Fr' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/nc.svg',
    independent: false,
  },
  {
    name: 'New Zealand',
    capital: 'Wellington',
    population: 5084300,
    currencies: [
      { code: 'NZD', name: 'New Zealand dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'mi',
        iso639_2: 'mri',
        name: 'Māori',
        nativeName: 'te reo Māori',
      },
    ],
    flag: 'https://flagcdn.com/nz.svg',
    independent: false,
  },
  {
    name: 'Nicaragua',
    capital: 'Managua',
    population: 6624554,
    currencies: [
      { code: 'NIO', name: 'Nicaraguan córdoba', symbol: 'C$' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/ni.svg',
    independent: false,
  },
  {
    name: 'Niger',
    capital: 'Niamey',
    population: 24206636,
    currencies: [
      { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/ne.svg',
    independent: false,
  },
  {
    name: 'Nigeria',
    capital: 'Abuja',
    population: 206139587,
    currencies: [
      { code: 'NGN', name: 'Nigerian naira', symbol: '₦' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/ng.svg',
    independent: false,
  },
  {
    name: 'Niue',
    capital: 'Alofi',
    population: 1470,
    currencies: [
      { code: 'NZD', name: 'New Zealand dollar', symbol: '$' },
      { code: 'NZD', name: 'Niue dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/nu.svg',
    independent: false,
  },
  {
    name: 'Norfolk Island',
    capital: 'Kingston',
    population: 2302,
    currencies: [
      { code: 'AUD', name: 'Australian dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/nf.svg',
    independent: false,
  },
  {
    name: "Korea (Democratic People's Republic of)",
    capital: 'Pyongyang',
    population: 25778815,
    currencies: [
      { code: 'KPW', name: 'North Korean won', symbol: '₩' },
    ],
    languages: [
      {
        iso639_1: 'ko',
        iso639_2: 'kor',
        name: 'Korean',
        nativeName: '한국어',
      },
    ],
    flag: 'https://flagcdn.com/kp.svg',
    independent: false,
  },
  {
    name: 'Northern Mariana Islands',
    capital: 'Saipan',
    population: 57557,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'ch',
        iso639_2: 'cha',
        name: 'Chamorro',
        nativeName: 'Chamoru',
      },
    ],
    flag: 'https://flagcdn.com/mp.svg',
    independent: false,
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    population: 5379475,
    currencies: [
      { code: 'NOK', name: 'Norwegian krone', symbol: 'kr' },
    ],
    languages: [
      {
        iso639_1: 'no',
        iso639_2: 'nor',
        name: 'Norwegian',
        nativeName: 'Norsk',
      },
      {
        iso639_1: 'nb',
        iso639_2: 'nob',
        name: 'Norwegian Bokmål',
        nativeName: 'Norsk bokmål',
      },
      {
        iso639_1: 'nn',
        iso639_2: 'nno',
        name: 'Norwegian Nynorsk',
        nativeName: 'Norsk nynorsk',
      },
    ],
    flag: 'https://flagcdn.com/no.svg',
    independent: false,
  },
  {
    name: 'Oman',
    capital: 'Muscat',
    population: 5106622,
    currencies: [{ code: 'OMR', name: 'Omani rial', symbol: 'ر.ع.' }],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/om.svg',
    independent: false,
  },
  {
    name: 'Pakistan',
    capital: 'Islamabad',
    population: 220892331,
    currencies: [
      { code: 'PKR', name: 'Pakistani rupee', symbol: '₨' },
    ],
    languages: [
      {
        iso639_1: 'ur',
        iso639_2: 'urd',
        name: 'Urdu',
        nativeName: 'اردو',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/pk.svg',
    independent: false,
  },
  {
    name: 'Palau',
    capital: 'Ngerulmud',
    population: 18092,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/pw.svg',
    independent: false,
  },
  {
    name: 'Palestine, State of',
    capital: 'Ramallah',
    population: 4803269,
    currencies: [
      { code: 'EGP', name: 'Egyptian pound', symbol: 'E£' },
      { code: 'ILS', name: 'Israeli new shekel', symbol: '₪' },
      { code: 'JOD', name: 'Jordanian dinar', symbol: 'د.أ' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/ps.svg',
    independent: false,
  },
  {
    name: 'Panama',
    capital: 'Panama City',
    population: 4314768,
    currencies: [
      { code: 'PAB', name: 'Panamanian balboa', symbol: 'B/.' },
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/pa.svg',
    independent: false,
  },
  {
    name: 'Papua New Guinea',
    capital: 'Port Moresby',
    population: 8947027,
    currencies: [
      { code: 'PGK', name: 'Papua New Guinean kina', symbol: 'K' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/pg.svg',
    independent: false,
  },
  {
    name: 'Paraguay',
    capital: 'Asunción',
    population: 7132530,
    currencies: [
      { code: 'PYG', name: 'Paraguayan guaraní', symbol: '₲' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
      {
        iso639_1: 'gn',
        iso639_2: 'grn',
        name: 'Guaraní',
        nativeName: "Avañe'ẽ",
      },
    ],
    flag: 'https://flagcdn.com/py.svg',
    independent: false,
  },
  {
    name: 'Peru',
    capital: 'Lima',
    population: 32971846,
    currencies: [
      { code: 'PEN', name: 'Peruvian sol', symbol: 'S/.' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/pe.svg',
    independent: false,
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: 109581085,
    currencies: [
      { code: 'PHP', name: 'Philippine peso', symbol: '₱' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/ph.svg',
    independent: false,
  },
  {
    name: 'Pitcairn',
    capital: 'Adamstown',
    population: 56,
    currencies: [
      { code: 'NZD', name: 'New Zealand dollar', symbol: '$' },
      { code: 'PND', name: 'Pitcairn Islands dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/pn.svg',
    independent: false,
  },
  {
    name: 'Poland',
    capital: 'Warsaw',
    population: 37950802,
    currencies: [{ code: 'PLN', name: 'Polish złoty', symbol: 'zł' }],
    languages: [
      {
        iso639_1: 'pl',
        iso639_2: 'pol',
        name: 'Polish',
        nativeName: 'język polski',
      },
    ],
    flag: 'https://flagcdn.com/pl.svg',
    independent: false,
  },
  {
    name: 'Portugal',
    capital: 'Lisbon',
    population: 10305564,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'pt',
        iso639_2: 'por',
        name: 'Portuguese',
        nativeName: 'Português',
      },
    ],
    flag: 'https://flagcdn.com/pt.svg',
    independent: false,
  },
  {
    name: 'Puerto Rico',
    capital: 'San Juan',
    population: 3194034,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/pr.svg',
    independent: false,
  },
  {
    name: 'Qatar',
    capital: 'Doha',
    population: 2881060,
    currencies: [
      { code: 'QAR', name: 'Qatari riyal', symbol: 'ر.ق' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/qa.svg',
    independent: false,
  },
  {
    name: 'Republic of Kosovo',
    capital: 'Pristina',
    population: 1775378,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'sq',
        iso639_2: 'sqi',
        name: 'Albanian',
        nativeName: 'Shqip',
      },
      {
        iso639_1: 'sr',
        iso639_2: 'srp',
        name: 'Serbian',
        nativeName: 'српски језик',
      },
    ],
    flag: 'https://flagcdn.com/xk.svg',
    independent: false,
  },
  {
    name: 'Réunion',
    capital: 'Saint-Denis',
    population: 840974,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/re.svg',
    independent: false,
  },
  {
    name: 'Romania',
    capital: 'Bucharest',
    population: 19286123,
    currencies: [
      { code: 'RON', name: 'Romanian leu', symbol: 'lei' },
    ],
    languages: [
      {
        iso639_1: 'ro',
        iso639_2: 'ron',
        name: 'Romanian',
        nativeName: 'Română',
      },
    ],
    flag: 'https://flagcdn.com/ro.svg',
    independent: false,
  },
  {
    name: 'Russian Federation',
    capital: 'Moscow',
    population: 144104080,
    currencies: [{ code: 'RUB', name: 'Russian ruble', symbol: '₽' }],
    languages: [
      {
        iso639_1: 'ru',
        iso639_2: 'rus',
        name: 'Russian',
        nativeName: 'Русский',
      },
    ],
    flag: 'https://flagcdn.com/ru.svg',
    independent: false,
  },
  {
    name: 'Rwanda',
    capital: 'Kigali',
    population: 12952209,
    currencies: [
      { code: 'RWF', name: 'Rwandan franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'rw',
        iso639_2: 'kin',
        name: 'Kinyarwanda',
        nativeName: 'Ikinyarwanda',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/rw.svg',
    independent: false,
  },
  {
    name: 'Saint Barthélemy',
    capital: 'Gustavia',
    population: 9417,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/bl.svg',
    independent: false,
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    capital: 'Jamestown',
    population: 4255,
    currencies: [
      { code: 'SHP', name: 'Saint Helena pound', symbol: '£' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/sh.svg',
    independent: false,
  },
  {
    name: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    population: 53192,
    currencies: [
      { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/kn.svg',
    independent: false,
  },
  {
    name: 'Saint Lucia',
    capital: 'Castries',
    population: 183629,
    currencies: [
      { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/lc.svg',
    independent: false,
  },
  {
    name: 'Saint Martin (French part)',
    capital: 'Marigot',
    population: 38659,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'nl',
        iso639_2: 'nld',
        name: 'Dutch',
        nativeName: 'Nederlands',
      },
    ],
    flag: 'https://flagcdn.com/mf.svg',
    independent: false,
  },
  {
    name: 'Saint Pierre and Miquelon',
    capital: 'Saint-Pierre',
    population: 6069,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/pm.svg',
    independent: false,
  },
  {
    name: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    population: 110947,
    currencies: [
      { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/vc.svg',
    independent: false,
  },
  {
    name: 'Samoa',
    capital: 'Apia',
    population: 198410,
    currencies: [{ code: 'WST', name: 'Samoan tālā', symbol: 'T' }],
    languages: [
      {
        iso639_1: 'sm',
        iso639_2: 'smo',
        name: 'Samoan',
        nativeName: "gagana fa'a Samoa",
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/ws.svg',
    independent: false,
  },
  {
    name: 'San Marino',
    capital: 'City of San Marino',
    population: 33938,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'it',
        iso639_2: 'ita',
        name: 'Italian',
        nativeName: 'Italiano',
      },
    ],
    flag: 'https://flagcdn.com/sm.svg',
    independent: false,
  },
  {
    name: 'Sao Tome and Principe',
    capital: 'São Tomé',
    population: 219161,
    currencies: [
      {
        code: 'STD',
        name: 'São Tomé and Príncipe dobra',
        symbol: 'Db',
      },
    ],
    languages: [
      {
        iso639_1: 'pt',
        iso639_2: 'por',
        name: 'Portuguese',
        nativeName: 'Português',
      },
    ],
    flag: 'https://flagcdn.com/st.svg',
    independent: false,
  },
  {
    name: 'Saudi Arabia',
    capital: 'Riyadh',
    population: 34813867,
    currencies: [{ code: 'SAR', name: 'Saudi riyal', symbol: 'ر.س' }],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/sa.svg',
    independent: false,
  },
  {
    name: 'Senegal',
    capital: 'Dakar',
    population: 16743930,
    currencies: [
      { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/sn.svg',
    independent: false,
  },
  {
    name: 'Serbia',
    capital: 'Belgrade',
    population: 6908224,
    currencies: [
      { code: 'RSD', name: 'Serbian dinar', symbol: 'дин.' },
    ],
    languages: [
      {
        iso639_1: 'sr',
        iso639_2: 'srp',
        name: 'Serbian',
        nativeName: 'српски језик',
      },
    ],
    flag: 'https://flagcdn.com/rs.svg',
    independent: false,
  },
  {
    name: 'Seychelles',
    capital: 'Victoria',
    population: 98462,
    currencies: [
      { code: 'SCR', name: 'Seychellois rupee', symbol: '₨' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/sc.svg',
    independent: false,
  },
  {
    name: 'Sierra Leone',
    capital: 'Freetown',
    population: 7976985,
    currencies: [
      { code: 'SLL', name: 'Sierra Leonean leone', symbol: 'Le' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/sl.svg',
    independent: false,
  },
  {
    name: 'Singapore',
    capital: 'Singapore',
    population: 5685807,
    currencies: [
      { code: 'SGD', name: 'Singapore dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'ms',
        iso639_2: 'msa',
        name: 'Malay',
        nativeName: 'bahasa Melayu',
      },
      {
        iso639_1: 'ta',
        iso639_2: 'tam',
        name: 'Tamil',
        nativeName: 'தமிழ்',
      },
      {
        iso639_1: 'zh',
        iso639_2: 'zho',
        name: 'Chinese',
        nativeName: '中文 (Zhōngwén)',
      },
    ],
    flag: 'https://flagcdn.com/sg.svg',
    independent: false,
  },
  {
    name: 'Sint Maarten (Dutch part)',
    capital: 'Philipsburg',
    population: 40812,
    currencies: [
      {
        code: 'ANG',
        name: 'Netherlands Antillean guilder',
        symbol: 'ƒ',
      },
    ],
    languages: [
      {
        iso639_1: 'nl',
        iso639_2: 'nld',
        name: 'Dutch',
        nativeName: 'Nederlands',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/sx.svg',
    independent: false,
  },
  {
    name: 'Slovakia',
    capital: 'Bratislava',
    population: 5458827,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'sk',
        iso639_2: 'slk',
        name: 'Slovak',
        nativeName: 'slovenčina',
      },
    ],
    flag: 'https://flagcdn.com/sk.svg',
    independent: false,
  },
  {
    name: 'Slovenia',
    capital: 'Ljubljana',
    population: 2100126,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'sl',
        iso639_2: 'slv',
        name: 'Slovene',
        nativeName: 'slovenski jezik',
      },
    ],
    flag: 'https://flagcdn.com/si.svg',
    independent: false,
  },
  {
    name: 'Solomon Islands',
    capital: 'Honiara',
    population: 686878,
    currencies: [
      { code: 'SBD', name: 'Solomon Islands dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/sb.svg',
    independent: false,
  },
  {
    name: 'Somalia',
    capital: 'Mogadishu',
    population: 15893219,
    currencies: [
      { code: 'SOS', name: 'Somali shilling', symbol: 'Sh' },
    ],
    languages: [
      {
        iso639_1: 'so',
        iso639_2: 'som',
        name: 'Somali',
        nativeName: 'Soomaaliga',
      },
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/so.svg',
    independent: false,
  },
  {
    name: 'South Africa',
    capital: 'Pretoria',
    population: 59308690,
    currencies: [
      { code: 'ZAR', name: 'South African rand', symbol: 'R' },
    ],
    languages: [
      {
        iso639_1: 'af',
        iso639_2: 'afr',
        name: 'Afrikaans',
        nativeName: 'Afrikaans',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'nr',
        iso639_2: 'nbl',
        name: 'Southern Ndebele',
        nativeName: 'isiNdebele',
      },
      {
        iso639_1: 'st',
        iso639_2: 'sot',
        name: 'Southern Sotho',
        nativeName: 'Sesotho',
      },
      {
        iso639_1: 'ss',
        iso639_2: 'ssw',
        name: 'Swati',
        nativeName: 'SiSwati',
      },
      {
        iso639_1: 'tn',
        iso639_2: 'tsn',
        name: 'Tswana',
        nativeName: 'Setswana',
      },
      {
        iso639_1: 'ts',
        iso639_2: 'tso',
        name: 'Tsonga',
        nativeName: 'Xitsonga',
      },
      {
        iso639_1: 've',
        iso639_2: 'ven',
        name: 'Venda',
        nativeName: 'Tshivenḓa',
      },
      {
        iso639_1: 'xh',
        iso639_2: 'xho',
        name: 'Xhosa',
        nativeName: 'isiXhosa',
      },
      {
        iso639_1: 'zu',
        iso639_2: 'zul',
        name: 'Zulu',
        nativeName: 'isiZulu',
      },
    ],
    flag: 'https://flagcdn.com/za.svg',
    independent: false,
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    capital: 'King Edward Point',
    population: 30,
    currencies: [
      { code: 'FKP', name: 'Falkland Islands Pound', symbol: '£' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/gs.svg',
    independent: false,
  },
  {
    name: 'Korea (Republic of)',
    capital: 'Seoul',
    population: 51780579,
    currencies: [
      { code: 'KRW', name: 'South Korean won', symbol: '₩' },
    ],
    languages: [
      {
        iso639_1: 'ko',
        iso639_2: 'kor',
        name: 'Korean',
        nativeName: '한국어',
      },
    ],
    flag: 'https://flagcdn.com/kr.svg',
    independent: false,
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: 47351567,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/es.svg',
    independent: false,
  },
  {
    name: 'Sri Lanka',
    capital: 'Sri Jayawardenepura Kotte',
    population: 21919000,
    currencies: [
      { code: 'LKR', name: 'Sri Lankan rupee', symbol: 'Rs' },
    ],
    languages: [
      {
        iso639_1: 'si',
        iso639_2: 'sin',
        name: 'Sinhalese',
        nativeName: 'සිංහල',
      },
      {
        iso639_1: 'ta',
        iso639_2: 'tam',
        name: 'Tamil',
        nativeName: 'தமிழ்',
      },
    ],
    flag: 'https://flagcdn.com/lk.svg',
    independent: false,
  },
  {
    name: 'Sudan',
    capital: 'Khartoum',
    population: 43849269,
    currencies: [
      { code: 'SDG', name: 'Sudanese pound', symbol: 'ج.س.' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/sd.svg',
    independent: false,
  },
  {
    name: 'South Sudan',
    capital: 'Juba',
    population: 11193729,
    currencies: [
      { code: 'SSP', name: 'South Sudanese pound', symbol: '£' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/ss.svg',
    independent: false,
  },
  {
    name: 'Suriname',
    capital: 'Paramaribo',
    population: 586634,
    currencies: [
      { code: 'SRD', name: 'Surinamese dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'nl',
        iso639_2: 'nld',
        name: 'Dutch',
        nativeName: 'Nederlands',
      },
    ],
    flag: 'https://flagcdn.com/sr.svg',
    independent: false,
  },
  {
    name: 'Svalbard and Jan Mayen',
    capital: 'Longyearbyen',
    population: 2562,
    currencies: [
      { code: 'NOK', name: 'Norwegian krone', symbol: 'kr' },
    ],
    languages: [
      {
        iso639_1: 'no',
        iso639_2: 'nor',
        name: 'Norwegian',
        nativeName: 'Norsk',
      },
    ],
    flag: 'https://flagcdn.com/sj.svg',
    independent: false,
  },
  {
    name: 'Swaziland',
    capital: 'Mbabane',
    population: 1160164,
    currencies: [
      { code: 'SZL', name: 'Swazi lilangeni', symbol: 'L' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'ss',
        iso639_2: 'ssw',
        name: 'Swati',
        nativeName: 'SiSwati',
      },
    ],
    flag: 'https://flagcdn.com/sz.svg',
    independent: false,
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    population: 10353442,
    currencies: [
      { code: 'SEK', name: 'Swedish krona', symbol: 'kr' },
    ],
    languages: [
      {
        iso639_1: 'sv',
        iso639_2: 'swe',
        name: 'Swedish',
        nativeName: 'svenska',
      },
    ],
    flag: 'https://flagcdn.com/se.svg',
    independent: false,
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    population: 8636896,
    currencies: [{ code: 'CHF', name: 'Swiss franc', symbol: 'Fr' }],
    languages: [
      {
        iso639_1: 'de',
        iso639_2: 'deu',
        name: 'German',
        nativeName: 'Deutsch',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
      {
        iso639_1: 'it',
        iso639_2: 'ita',
        name: 'Italian',
        nativeName: 'Italiano',
      },
      { iso639_2: 'roh', name: 'Romansh' },
    ],
    flag: 'https://flagcdn.com/ch.svg',
    independent: false,
  },
  {
    name: 'Syrian Arab Republic',
    capital: 'Damascus',
    population: 17500657,
    currencies: [{ code: 'SYP', name: 'Syrian pound', symbol: '£' }],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/sy.svg',
    independent: false,
  },
  {
    name: 'Taiwan',
    capital: 'Taipei',
    population: 23503349,
    currencies: [
      { code: 'TWD', name: 'New Taiwan dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'zh',
        iso639_2: 'zho',
        name: 'Chinese',
        nativeName: '中文 (Zhōngwén)',
      },
    ],
    flag: 'https://flagcdn.com/tw.svg',
    independent: false,
  },
  {
    name: 'Tajikistan',
    capital: 'Dushanbe',
    population: 9537642,
    currencies: [
      { code: 'TJS', name: 'Tajikistani somoni', symbol: 'ЅМ' },
    ],
    languages: [
      {
        iso639_1: 'tg',
        iso639_2: 'tgk',
        name: 'Tajik',
        nativeName: 'тоҷикӣ',
      },
      {
        iso639_1: 'ru',
        iso639_2: 'rus',
        name: 'Russian',
        nativeName: 'Русский',
      },
    ],
    flag: 'https://flagcdn.com/tj.svg',
    independent: false,
  },
  {
    name: 'Tanzania, United Republic of',
    capital: 'Dodoma',
    population: 59734213,
    currencies: [
      { code: 'TZS', name: 'Tanzanian shilling', symbol: 'Sh' },
    ],
    languages: [
      {
        iso639_1: 'sw',
        iso639_2: 'swa',
        name: 'Swahili',
        nativeName: 'Kiswahili',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/tz.svg',
    independent: false,
  },
  {
    name: 'Thailand',
    capital: 'Bangkok',
    population: 69799978,
    currencies: [{ code: 'THB', name: 'Thai baht', symbol: '฿' }],
    languages: [
      {
        iso639_1: 'th',
        iso639_2: 'tha',
        name: 'Thai',
        nativeName: 'ไทย',
      },
    ],
    flag: 'https://flagcdn.com/th.svg',
    independent: false,
  },
  {
    name: 'Timor-Leste',
    capital: 'Dili',
    population: 1318442,
    currencies: [
      { code: 'USD', name: 'United States Dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'pt',
        iso639_2: 'por',
        name: 'Portuguese',
        nativeName: 'Português',
      },
    ],
    flag: 'https://flagcdn.com/tl.svg',
    independent: false,
  },
  {
    name: 'Togo',
    capital: 'Lomé',
    population: 8278737,
    currencies: [
      { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    ],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/tg.svg',
    independent: false,
  },
  {
    name: 'Tokelau',
    capital: 'Fakaofo',
    population: 1411,
    currencies: [
      { code: 'NZD', name: 'New Zealand dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/tk.svg',
    independent: false,
  },
  {
    name: 'Tonga',
    capital: "Nuku'alofa",
    population: 105697,
    currencies: [
      { code: 'TOP', name: 'Tongan paʻanga', symbol: 'T$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'to',
        iso639_2: 'ton',
        name: 'Tonga (Tonga Islands)',
        nativeName: 'faka Tonga',
      },
    ],
    flag: 'https://flagcdn.com/to.svg',
    independent: false,
  },
  {
    name: 'Trinidad and Tobago',
    capital: 'Port of Spain',
    population: 1399491,
    currencies: [
      {
        code: 'TTD',
        name: 'Trinidad and Tobago dollar',
        symbol: '$',
      },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/tt.svg',
    independent: false,
  },
  {
    name: 'Tunisia',
    capital: 'Tunis',
    population: 11818618,
    currencies: [
      { code: 'TND', name: 'Tunisian dinar', symbol: 'د.ت' },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/tn.svg',
    independent: false,
  },
  {
    name: 'Turkey',
    capital: 'Ankara',
    population: 84339067,
    currencies: [{ code: 'TRY', name: 'Turkish lira', symbol: '₺' }],
    languages: [
      {
        iso639_1: 'tr',
        iso639_2: 'tur',
        name: 'Turkish',
        nativeName: 'Türkçe',
      },
    ],
    flag: 'https://flagcdn.com/tr.svg',
    independent: false,
  },
  {
    name: 'Turkmenistan',
    capital: 'Ashgabat',
    population: 6031187,
    currencies: [
      { code: 'TMT', name: 'Turkmenistan manat', symbol: 'm' },
    ],
    languages: [
      {
        iso639_1: 'tk',
        iso639_2: 'tuk',
        name: 'Turkmen',
        nativeName: 'Türkmen',
      },
      {
        iso639_1: 'ru',
        iso639_2: 'rus',
        name: 'Russian',
        nativeName: 'Русский',
      },
    ],
    flag: 'https://flagcdn.com/tm.svg',
    independent: false,
  },
  {
    name: 'Turks and Caicos Islands',
    capital: 'Cockburn Town',
    population: 38718,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/tc.svg',
    independent: false,
  },
  {
    name: 'Tuvalu',
    capital: 'Funafuti',
    population: 11792,
    currencies: [
      { code: 'AUD', name: 'Australian dollar', symbol: '$' },
      { code: 'TVD[G]', name: 'Tuvaluan dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/tv.svg',
    independent: false,
  },
  {
    name: 'Uganda',
    capital: 'Kampala',
    population: 45741000,
    currencies: [
      { code: 'UGX', name: 'Ugandan shilling', symbol: 'Sh' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'sw',
        iso639_2: 'swa',
        name: 'Swahili',
        nativeName: 'Kiswahili',
      },
    ],
    flag: 'https://flagcdn.com/ug.svg',
    independent: false,
  },
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: 44134693,
    currencies: [
      { code: 'UAH', name: 'Ukrainian hryvnia', symbol: '₴' },
    ],
    languages: [
      {
        iso639_1: 'uk',
        iso639_2: 'ukr',
        name: 'Ukrainian',
        nativeName: 'Українська',
      },
    ],
    flag: 'https://flagcdn.com/ua.svg',
    independent: false,
  },
  {
    name: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    population: 9890400,
    currencies: [
      {
        code: 'AED',
        name: 'United Arab Emirates dirham',
        symbol: 'د.إ',
      },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/ae.svg',
    independent: false,
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    capital: 'London',
    population: 67215293,
    currencies: [{ code: 'GBP', name: 'British pound', symbol: '£' }],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/gb.svg',
    independent: false,
  },
  {
    name: 'United States of America',
    capital: 'Washington, D.C.',
    population: 329484123,
    currencies: [
      { code: 'USD', name: 'United States dollar', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/us.svg',
    independent: false,
  },
  {
    name: 'Uruguay',
    capital: 'Montevideo',
    population: 3473727,
    currencies: [
      { code: 'UYU', name: 'Uruguayan peso', symbol: '$' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/uy.svg',
    independent: false,
  },
  {
    name: 'Uzbekistan',
    capital: 'Tashkent',
    population: 34232050,
    currencies: [
      { code: 'UZS', name: "Uzbekistani so'm", symbol: "so'm" },
    ],
    languages: [
      {
        iso639_1: 'uz',
        iso639_2: 'uzb',
        name: 'Uzbek',
        nativeName: 'Oʻzbek',
      },
      {
        iso639_1: 'ru',
        iso639_2: 'rus',
        name: 'Russian',
        nativeName: 'Русский',
      },
    ],
    flag: 'https://flagcdn.com/uz.svg',
    independent: false,
  },
  {
    name: 'Vanuatu',
    capital: 'Port Vila',
    population: 307150,
    currencies: [{ code: 'VUV', name: 'Vanuatu vatu', symbol: 'Vt' }],
    languages: [
      {
        iso639_1: 'bi',
        iso639_2: 'bis',
        name: 'Bislama',
        nativeName: 'Bislama',
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/vu.svg',
    independent: false,
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    capital: 'Caracas',
    population: 28435943,
    currencies: [
      { code: 'VEF', name: 'Venezuelan bolívar', symbol: 'Bs S' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/ve.svg',
    independent: false,
  },
  {
    name: 'Vietnam',
    capital: 'Hanoi',
    population: 97338583,
    currencies: [
      { code: 'VND', name: 'Vietnamese đồng', symbol: '₫' },
    ],
    languages: [
      {
        iso639_1: 'vi',
        iso639_2: 'vie',
        name: 'Vietnamese',
        nativeName: 'Tiếng Việt',
      },
    ],
    flag: 'https://flagcdn.com/vn.svg',
    independent: false,
  },
  {
    name: 'Wallis and Futuna',
    capital: 'Mata-Utu',
    population: 11750,
    currencies: [{ code: 'XPF', name: 'CFP franc', symbol: 'Fr' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://flagcdn.com/wf.svg',
    independent: false,
  },
  {
    name: 'Western Sahara',
    capital: 'El Aaiún',
    population: 510713,
    currencies: [
      { code: 'MAD', name: 'Moroccan dirham', symbol: 'د.م.' },
      { code: 'DZD', name: 'Algerian dinar', symbol: 'د.ج' },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    flag: 'https://flagcdn.com/eh.svg',
    independent: false,
  },
  {
    name: 'Yemen',
    capital: "Sana'a",
    population: 29825968,
    currencies: [{ code: 'YER', name: 'Yemeni rial', symbol: '﷼' }],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    flag: 'https://flagcdn.com/ye.svg',
    independent: false,
  },
  {
    name: 'Zambia',
    capital: 'Lusaka',
    population: 18383956,
    currencies: [
      { code: 'ZMW', name: 'Zambian kwacha', symbol: 'ZK' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    flag: 'https://flagcdn.com/zm.svg',
    independent: false,
  },
  {
    name: 'Zimbabwe',
    capital: 'Harare',
    population: 14862927,
    currencies: [
      { code: 'ZMW', name: 'Zambian kwacha', symbol: 'K' },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'sn',
        iso639_2: 'sna',
        name: 'Shona',
        nativeName: 'chiShona',
      },
      {
        iso639_1: 'nd',
        iso639_2: 'nde',
        name: 'Northern Ndebele',
        nativeName: 'isiNdebele',
      },
    ],
    flag: 'https://flagcdn.com/zw.svg',
    independent: false,
  },
];

export default countries;
