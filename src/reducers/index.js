import pic1 from 'assets/images/castle/krobielowiec/pic1.jpg';
import pic2 from 'assets/images/castle/krobielowiec/pic2.jpg';
import pic3 from 'assets/images/castle/krobielowiec/pic3.jpg';
import pic4 from 'assets/images/castle/krobielowiec/pic4.jpg';

import pic5 from 'assets/images/castle/bobolice/pic1.jpg';
import pic6 from 'assets/images/castle/bobolice/pic2.jpg';
import pic7 from 'assets/images/castle/bobolice/pic3.jpg';
import pic8 from 'assets/images/castle/bobolice/pic4.jpg';

import pic9 from 'assets/images/castle/pieskowaskala/pic1.jpg';
import pic10 from 'assets/images/castle/pieskowaskala/pic2.jpg';
import pic11 from 'assets/images/castle/pieskowaskala/pic3.jpg';
import pic12 from 'assets/images/castle/pieskowaskala/pic4.jpg';

import pic13 from 'assets/images/forgoten/krowiarki/pic1.jpg';
import pic14 from 'assets/images/forgoten/krowiarki/pic2.jpeg';
import pic15 from 'assets/images/forgoten/krowiarki/pic3.jpg';
import pic16 from 'assets/images/forgoten/krowiarki/pic4.jpg';

import pic17 from 'assets/images/forgoten/nakielnica/pic1.jpg';
import pic18 from 'assets/images/forgoten/nakielnica/pic2.jpg';
import pic19 from 'assets/images/forgoten/nakielnica/pic3.JPG';
import pic20 from 'assets/images/forgoten/nakielnica/pic4.jpg';

import pic21 from 'assets/images/forgoten/pszeniczna/pic1.jpg';
import pic22 from 'assets/images/forgoten/pszeniczna/pic2.jpg';
import pic23 from 'assets/images/forgoten/pszeniczna/pic3.jpg';
import pic24 from 'assets/images/forgoten/pszeniczna/pic4.jpg';

const initialState = {
  castles: [
    {url: pic1,
      url1: pic2,
      url2: pic3,
      url3: pic4,
      name: "Pałac Krobielowice",
      cordinatesN: "b/d",
      cordinatesE: "b/d",
      description:
        "W odległości 3 km od Kątów Wrocławskich i około 20 km od Wrocławia, w XIV wieku wzniesiona została wieża obronna. To był początek historii tego wyjątkowego miejsca, położonego na terenie Parku Krajobrazowego Doliny Bystrzycy, które do dziś zaskakuje swoim pięknem. Pierwotna budowla była ufortyfikowanym dworem i postawała w XIV, stanowiąc własność rodu von Sitten. Następnie wieś przeszła w ręce klasztoru minorytów, a od 1529 roku majątki zostały przejęte przez klasztor premonstratensów. Za ich panowania dwór zyskał 3 skrzydła w stylu renesansowym i został przekształcony w pałac. Z czasem dobudowano fasadę i 3 wieże, zachowując je w stylu barokowym. W słynnej bitwie pod Waterloo, Napoleon Bonaparte został pokonany przez feldmarszałka pruskiego Gebharda Leberechta von Blüchera.",
      woj: "dolnośląskie",
      powiat: "wrocławski",
      gmina: "Kąty Wrocławskie",
      miejscowosc: "Krobielowice",
    },
    {
      id: 2,
      url: pic5,
      url1: pic6,
      url2: pic7,
      url3:pic8,
      name: "Zamek w Bobolicach",
      cordinatesN: "50°36′47,984",
      cordinatesE: "19°29′34,755",
      description:
        "Zamek w Bobolicach – zamek królewski zbudowany pierwotnie w połowie XIV wieku i następnie przebudowywany. Położony jest na Jurze Krakowsko-Częstochowskiej, w systemie tzw. Orlich Gniazd, we wsi Bobolice w województwie śląskim, w powiecie myszkowskim.",
      woj: "śląskie",
      powiat: "myszkowski",
      gmina: "Niegowa",
      miejscowosc: "Bobolice",
    },
    {
      id: 3,
      url: pic9,
      url1:pic10,
      url2: pic11,
      url3: pic12,

      name: "Pieskowa Skała",
      cordinatesN: "b/d",
      cordinatesE: "b/d",
      description:
        "Zamek po raz pierwszy wzmiankowany jest jako Peskenstein w dokumencie wydanym w 1315 r. przez Władysława Łokietka. W pierwszej połowie XIV w. Kazimierz III Wielki wybudował w tym miejscu zamek, element łańcucha obronnych Orlich Gniazd, składający się z dwóch części: górnej i dolnej. Górna, niezachowana, wzniesiona była na niedostępnej skale zwanej „Dorotką”. W latach 1377–1608 zamek był siedzibą rodu Szafrańców, którego znanym przedstawicielem był wojewoda krakowski Piotr Szafraniec. Niektórzy późniejsi przedstawiciele rodu trudnili się zbójectwem i wykorzystywali zamek jako punkt wypadowy do napadów na kupców przejeżdżających biegnącym przez Dolinę Prądnika traktem łączącym Kraków ze Śląskiem. W 1484 r. Krzysztof Szafraniec, prawnuk pierwszego właściciela, został za to ścięty na Wawelu.",
      woj: "małopolskie",
      powiat: "krakowski",
      gmina: "Sułoszowa",
      miejscowosc: "Sułoszowa",
    },
  ],

  forgotens: [
    {
      id: 1,
      url: pic13,
      url1: pic14,
      url2: pic15,
      url3: pic16,
      name: "Zespół pałacowo-parkowy w Krowiarkach",
      cordinatesN: "b/d",
      cordinatesE: "b/d",
      description:
        "Zespół pałacowo-parkowy w Krowiarkach – pałac otoczony parkiem znajdujący się w Polsce, w województwie śląskim, w powiecie raciborskim, w gminie Pietrowice Wielkie, we wsi Krowiarki. Był dawną siedzibą rodów Strachwitz, Gaschin i Donnersmarck. Zbudowany staraniem Ernesta Joachima Strachwitza w 1826 r. na miejscu poprzedniego drewnianego dworu, który pochodził z XVII wieku. W latach 1852-1877 nastąpiła przebudowa pałacu oraz powstał park. Pałac ma m.in. skrzydło o charakterze secesyjnym, w którym można doszukać się stylów: neorenesansowego i neobarokowego, trójosiową część frontową pałacu, która zwieńczona jest czteroboczną wieżą z bogato dekorowanym ośmiobocznym hełmem. Obecnie pałac jest niezamieszkany i popada w ruinę.",
      woj: "śląskie",
      powiat: "raciborski",
      gmina: "Pietrowice Wielkie",
      miejscowosc: "Krowiarki",
    },
    {
      id: 2,
      url: pic17,
      url1: pic18,
      url2: pic19,
      url3:pic20,

      name: "Dwór w Nakielnicy",
      cordinatesN: "b/d",
      cordinatesE: "b/d",
      description:
        "Dwór w Nakielnicy, zbudowany przez rodzinę Zachertów w 1 poł. XIX w. Za  pięknym, monumentalnym dworem znajduje się park z wyspą, a w nim okazałe  drzewa.Dwór w Nakielnicy, zbudowany przez rodzinę Zachertów w 1 poł. XIX w. Za  pięknym, monumentalnym dworem znajduje się park z wyspą, a w nim okazałe  drzewa.",
      woj: "wielkopolskie",
      powiat: "",
      gmina: "",
      miejscowosc: "Nakielnica",
    },
    {
      id: 3,
      url:pic21,
      url1:pic22,
      url2:pic23,
      url3:pic24,

      name: "Pałac Pszeniczna",
      cordinatesN: "b/d",
      cordinatesE: "b/d",
      description:
        "Pszeniczna to niewielka wioska w powiecie namysłowskim, mała, senna, jakich wiele na terenie Opolszczyzny. Powstała prawdopodobnie w drugiej połowie XVIII wieku podczas zasiedleń tych ziem przez króla Fryderyka Wielkiego. Najprawdopodobniej na początku XIX wieku wybudowano w niej klasycystyczny pałac, do którego przylegają zabudowania folwarczne oraz obiekt przemysłowy, jakim jest gorzelnia i płatkarnia. Dwukondygnacyjną gorzelnię wybudowano nieco później niż pałac, bo w drugiej połowie XIX w., a w latach dwudziestych XX w. dostawiono do niej trzykondygnacyjną płatkarnię. Inwestycja zapewne miała przyczynić się do większego rozwoju wsi, niestety tak się jednak nie stało, do dziś Pszeniczna jest niewielką wsią gminy Wilków.",
      woj: "opolskie",
      powiat: "namysłowski",
      gmina: "Wilków",
      miejscowosc: "Pszeniczna",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.item,
        ],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(
            (item) => item.id !== action.payload.id
          ),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
