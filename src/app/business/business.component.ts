import { Component, OnInit } from '@angular/core'

export interface IBusiness {
  country?: string
  name?: string
  code?: string
  ou1?: string
  ou2?: string
  address?: string
  city?: string
}

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styles: [],
})
export class BusinessComponent implements OnInit {
  constructor() {}

  public list(property: keyof IBusiness): string[] {
    let items: string[] = []
    this.filtered().forEach((business: IBusiness) => {
      let value = business[property] ?? ''
      if (value.length && items.indexOf(value) < 0) items.push(value)
    })
    return items.sort()
  }

  public search: IBusiness = {
    country: '',
    ou1: '',
    ou2: '',
  }

  public filtered(): IBusiness[] {
    let items: IBusiness[] = []
    this.data.forEach((item: IBusiness) => {
      let match: boolean = true
      Object.getOwnPropertyNames(this.search).forEach((prop: string) => {
        let value = this.search[prop as keyof IBusiness] ?? ''
        if (value.length && item[prop as keyof IBusiness] !== value)
          match = false
      })
      if (match) items.push(item)
    })
    return items
  }

  public data: IBusiness[] = [
    {
      country: 'Australia',
      name: 'Waterworld, 1 Perth Road, Perthville, Perth',
      code: '1000',
      ou1: 'Theme Park',
      ou2: 'Waterworld',
      address: '1 Perth Road, Perthville',
      city: 'Perth',
    },
    {
      country: 'Australia',
      name: 'World of Wax, 4 Sydney Street, Sydneytown, Sydney',
      code: '1001',
      ou1: 'Museum',
      ou2: 'World of Wax',
      address: '4 Sydney Street, Sydneytown',
      city: 'Sydney',
    },
    {
      country: 'Australia',
      name:
        'The Christopher Columbus Adventure, 18 Lower Esplanade, St Kilda, Melbourne',
      code: '1002',
      ou1: 'Interactive Attraction',
      ou2: 'The Christopher Columbus Adventure',
      address: '18 Lower Esplanade, St Kilda',
      city: 'Melbourne',
    },
    {
      country: 'Austria',
      name: 'World of Wax, 8 Vienna View, 1020 Vienna, Vienna',
      code: '1003',
      ou1: 'Museum',
      ou2: 'World of Wax',
      address: '8 Vienna View, 1020 Vienna',
      city: 'Vienna',
    },
    {
      country: 'Belgium',
      name: 'Borrower Land, Avenue du Football 1, 1020 Bruxelles, Brussels',
      code: '1004',
      ou1: 'Theme Park',
      ou2: 'Borrower Land',
      address: 'Avenue du Football 1, 1020 Bruxelles',
      city: 'Brussels',
    },
    {
      country: 'Belgium',
      name: 'Waterworld, Alfons de Baeckestraat 12, 8200 Brugge, Bruges',
      code: '1005',
      ou1: 'Interactive Attraction',
      ou2: 'Waterworld',
      address: 'Alfons de Baeckestraat 12, 8200 Brugge',
      city: 'Bruges',
    },
    {
      country: 'Canada',
      name: 'Waterworld, Banff Village, Banff',
      code: '1006',
      ou1: 'Theme Park',
      ou2: 'Waterworld',
      address: 'Banff Village',
      city: 'Banff',
    },
    {
      country: 'Canada',
      name: 'World of Wax, 65 Toronto Close, Town Centre, Toronto',
      code: '1007',
      ou1: 'Museum',
      ou2: 'World of Wax',
      address: '65 Toronto Close, Town Centre',
      city: 'Toronto',
    },
    {
      country: 'Denmark',
      name: 'Borrower Land, 94 Copen Strasse, Hagen, Copenhagen',
      code: '1008',
      ou1: 'Theme Park',
      ou2: 'Borrower Land',
      address: '94 Copen Strasse, Hagen',
      city: 'Copenhagen',
    },
    {
      country: 'France',
      name: 'Borrower Land, 77 Celebrity Street, Nice Place, Nice',
      code: '1009',
      ou1: 'Theme Park',
      ou2: 'Borrower Land',
      address: '77 Celebrity Street, Nice Place',
      city: 'Nice',
    },
    {
      country: 'France',
      name: 'Eiffel Adventure, 1 Eiffel Avenue, Centre, Paris',
      code: '1010',
      ou1: 'Theme Park',
      ou2: 'Eiffel Adventure',
      address: '1 Eiffel Avenue, Centre',
      city: 'Paris',
    },
    {
      country: 'Germany',
      name: 'World of Wax, 6 Bratwurst Strasse, The Square, Berlin',
      code: '1011',
      ou1: 'Museum',
      ou2: 'World of Wax',
      address: '6 Bratwurst Strasse, The Square',
      city: 'Berlin',
    },
    {
      country: 'Italy',
      name: 'Borrower Land, Collosseum Round, Anthony Road, Rome',
      code: '1012',
      ou1: 'Theme Park',
      ou2: 'Borrower Land',
      address: 'Collosseum Round, Anthony Road',
      city: 'Rome',
    },
    {
      country: 'Japan',
      name: 'Waterworld, 1 Maihama, Urayasu, Tokyo',
      code: '1013',
      ou1: 'Theme Park',
      ou2: 'Waterworld',
      address: '1 Maihama, Urayasu',
      city: 'Tokyo',
    },
    {
      country: 'Netherlands',
      name: 'Borrower Land, Boutenslaan 161B, 5644 TV, Eindhoven',
      code: '1014',
      ou1: 'Theme Park',
      ou2: 'Borrower Land',
      address: 'Boutenslaan 161B, 5644 TV',
      city: 'Eindhoven',
    },
    {
      country: 'Netherlands',
      name: 'World of Wax, Europalaan 1, 5171 KW Kaatsheuvel, Amsterdam',
      code: '1015',
      ou1: 'Museum',
      ou2: 'World of Wax',
      address: 'Europalaan 1, 5171 KW Kaatsheuvel',
      city: 'Amsterdam',
    },
    {
      country: 'Poland',
      name: 'Borrower Land, plac Atrakcji 1, 41-501 Chorzów, Chorzow',
      code: '1016',
      ou1: 'Theme Park',
      ou2: 'Borrower Land',
      address: 'plac Atrakcji 1, 41-501 Chorzów',
      city: 'Chorzow',
    },
    {
      country: 'Russia',
      name: 'Waterworld, Kemskaya Ulitsa, 1А, St Petersburg',
      code: '1017',
      ou1: 'Theme Park',
      ou2: 'Waterworld',
      address: 'Kemskaya Ulitsa, 1А',
      city: 'St Petersburg',
    },
    {
      country: 'Switzerland',
      name: 'Borrower Land, Route de la Plage, 1897 Le Bouveret, Basel',
      code: '1018',
      ou1: 'Theme Park',
      ou2: 'Borrower Land',
      address: 'Route de la Plage, 1897 Le Bouveret',
      city: 'Basel',
    },
    {
      country: 'Turkey',
      name: 'Borrower Land, Gazi, 06560 Yenimahalle, Ankara',
      code: '1019',
      ou1: 'Theme Park',
      ou2: 'Borrower Land',
      address: 'Gazi, 06560 Yenimahalle',
      city: 'Ankara',
    },
    {
      country: 'Turkey',
      name: 'World of Wax, Yeşilpınar, Şht. Metin Kaya Sk. No: 11/1, Istanbul',
      code: '1020',
      ou1: 'Museum',
      ou2: 'World of Wax',
      address: 'Yeşilpınar, Şht. Metin Kaya Sk. No: 11/1',
      city: 'Istanbul',
    },
    {
      country: 'United Kingdom',
      name: 'Waterworld, Farley Ln, Alton, Stoke-On-Trent',
      code: '1021',
      ou1: 'Theme Park',
      ou2: 'Waterworld',
      address: 'Farley Ln, Alton',
      city: 'Stoke-On-Trent',
    },
    {
      country: 'United Kingdom',
      name: 'Borrower Land, St Albans Church, Athol St, Liverpool',
      code: '1022',
      ou1: 'Theme Park',
      ou2: 'Borrower Land',
      address: 'St Albans Church, Athol St',
      city: 'Liverpool',
    },
    {
      country: 'United Kingdom',
      name: 'The London Tower, Tower Place, Tower Hill, London',
      code: '1023',
      ou1: 'Interactive Attraction',
      ou2: 'The London Tower',
      address: 'Tower Place, Tower Hill',
      city: 'London',
    },
    {
      country: 'United Kingdom',
      name: 'World of Wax, 525 Ocean Blvd, South Shore, Blackpool',
      code: '1024',
      ou1: 'Museum',
      ou2: 'World of Wax',
      address: '525 Ocean Blvd, South Shore',
      city: 'Blackpool',
    },
    {
      country: 'United Kingdom',
      name: 'World of Wax, Marylebone Rd, Marylebone, London',
      code: '1025',
      ou1: 'Museum',
      ou2: 'World of Wax',
      address: 'Marylebone Rd, Marylebone',
      city: 'London',
    },
    {
      country: 'United States',
      name: 'Waterworld, Central Park, NY 10019, New York',
      code: '1026',
      ou1: 'Theme Park',
      ou2: 'Waterworld',
      address: 'Central Park, NY 10019',
      city: 'New York',
    },
    {
      country: 'United States',
      name: 'World of Wax, 100 Universal City Plaza, Universal City, Hollywood',
      code: '1027',
      ou1: 'Museum',
      ou2: 'World of Wax',
      address: '100 Universal City Plaza, Universal City',
      city: 'Hollywood',
    },
    {
      country: 'United States',
      name: 'World of Wax, Hermitage, TN, Nashville',
      code: '1028',
      ou1: 'Museum',
      ou2: 'World of Wax',
      address: 'Hermitage, TN',
      city: 'Nashville',
    },
    {
      country: 'United States',
      name: 'World of Wax, 3100 14th St NW 3rd level, Washington D.C.',
      code: '1029',
      ou1: 'Museum',
      ou2: 'World of Wax',
      address: '3100 14th St NW 3rd level',
      city: 'Washington D.C.',
    },
  ]

  ngOnInit(): void {}
}
