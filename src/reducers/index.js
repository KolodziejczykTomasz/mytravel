const initialState = {
  castles: [
    {
      id: 1,
      url:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/92691634_628732687974011_8889532724382007296_o.jpg?_nc_cat=108&_nc_sid=07e735&_nc_ohc=5hyDML-W5HMAX8edcSs&_nc_ht=scontent-waw1-1.xx&oh=735002eb94997c1e975408bf4fcba440&oe=5EB6651F",

      url1:
        "https://static.polskieszlaki.pl/zdjecia/wycieczki/2014-08/palac-krobielowice-237432.jpg",
      url2:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/92753530_628732417974038_2802137986483879936_o.jpg?_nc_cat=100&_nc_sid=07e735&_nc_ohc=C8445u5GgUMAX-05wpE&_nc_ht=scontent-waw1-1.xx&oh=c222baf693f6f38476b79ffee583f43a&oe=5EB9393F",
      url3:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/92617306_628732317974048_8057904756682653696_o.jpg?_nc_cat=106&_nc_sid=07e735&_nc_ohc=g_eHGQuQWaYAX98BJeD&_nc_ht=scontent-waw1-1.xx&oh=b05a75e11ad2929c5f50946ce299a709&oe=5EB994C4",
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
      url: "http://www.zamkipolskie.com/bobol/010.jpg",

      url1:
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/Zamek_Bobolice_%28Castle_of_Bobolice%29.JPG",
      url2:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93013210_2712370285651014_8362013334869901312_o.jpg?_nc_cat=103&_nc_sid=07e735&_nc_ohc=AaYnp2UMZ7cAX-jrayI&_nc_ht=scontent-waw1-1.xx&oh=6189fd2ff809b3e5749dcc52e8a9d16b&oe=5EB6BE75",
      url3:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/92573225_2712370818984294_6822380370864898048_o.jpg?_nc_cat=100&_nc_sid=07e735&_nc_ohc=q-Y5pRs5AbAAX_Ewlpe&_nc_ht=scontent-waw1-1.xx&oh=556ab184ca7597706631ee18a5c1bfd1&oe=5EB9335D",

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
      url:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93166699_223924088695720_3404404074827743232_n.jpg?_nc_cat=107&_nc_sid=07e735&_nc_ohc=J__-XcwCeZ8AX8nITd1&_nc_ht=scontent-waw1-1.xx&oh=c42e1dea65fbf38885450d9f20b7c2cc&oe=5EB95D4E",

      url1:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/92923922_223924265362369_2231350692704944128_n.jpg?_nc_cat=110&_nc_sid=07e735&_nc_ohc=fepGLfQZ-jEAX9PZ0xn&_nc_ht=scontent-waw1-1.xx&oh=a9858445f6434055c044b617c0c8dfee&oe=5EB79073",
      url2:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/92577962_223924352029027_14972556641566720_n.jpg?_nc_cat=102&_nc_sid=07e735&_nc_ohc=qWfPZV1TbvMAX98AVhA&_nc_ht=scontent-waw1-1.xx&oh=a83cef8a73072f818a13a940ba64b6e3&oe=5EB88DB6",
      url3:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/92569921_223924442029018_6362145337716506624_n.jpg?_nc_cat=100&_nc_sid=07e735&_nc_ohc=RNaScjeTdiQAX_GNTsf&_nc_ht=scontent-waw1-1.xx&oh=81f778c87de084a781b036e6b39fe983&oe=5EB79FD2",

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
      url:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93352765_2641282732761717_2768915396542070784_o.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_ohc=l7IApEwxKyoAX_w099G&_nc_ht=scontent-waw1-1.xx&oh=ed1832f87a0ed3bf8be379f708d5ae11&oe=5EB83C16",

      url1:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/92523789_2641282866095037_4100197229275381760_o.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=kTB5Z_DBy2MAX8N3-j-&_nc_ht=scontent-waw1-1.xx&oh=1cde7c5f4d9daf20f0ece10d7a6398dc&oe=5EB9DEF1",
      url2:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/92955088_2641282269428430_6606492873363816448_o.jpg?_nc_cat=108&_nc_sid=e007fa&_nc_ohc=bihCF3TywNcAX_iz14c&_nc_ht=scontent-waw1-1.xx&oh=a177a935790e4a4d1e6cb7cfb364eb07&oe=5EB8ACC0",
      url3:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/92735220_2641282299428427_2467586508303892480_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=qavRqSFAHBUAX8Y4CM8&_nc_ht=scontent-waw1-1.xx&oh=4e94478c9831a30cc24d078dcf954c29&oe=5EB845A9",

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
      url:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/91888369_1264575020600549_180077825418592256_o.jpg?_nc_cat=102&_nc_sid=07e735&_nc_ohc=g7e84J_kRrcAX-kR65D&_nc_ht=scontent-waw1-1.xx&oh=10acc21107dcf364de048cee73c1cf91&oe=5EB88449",

      url1:
        "https://scontent-waw1-1.xx.fbcdn.net/v/l/t1.0-9/91767737_1264575463933838_3292083022110654464_o.jpg?_nc_cat=108&_nc_sid=07e735&_nc_ohc=5D5j7tPTx9cAX_HLv0_&_nc_ht=scontent-waw1-1.xx&oh=657eb3f3bfcbe577e5655fa2f2ec9fca&oe=5EB8FD01",
      url2:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/91302243_1264576063933778_9179028616942452736_o.jpg?_nc_cat=105&_nc_sid=07e735&_nc_ohc=P8guZbU-MmwAX_YnDII&_nc_ht=scontent-waw1-1.xx&oh=607edbbd5ba74a87692aef35ae77c112&oe=5EBA172C",
      url3:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/91689391_1264576260600425_5167522135911956480_o.jpg?_nc_cat=100&_nc_sid=07e735&_nc_ohc=37amS2xlGEIAX95Q1jX&_nc_ht=scontent-waw1-1.xx&oh=bcdfb86f997205dfff91927402f0ff76&oe=5EB9F2C0",

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
      url:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/91622339_628744884344278_7392591378816958464_o.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=uXPDrgUJRDMAX9LJipu&_nc_ht=scontent-waw1-1.xx&oh=15fb570d5a4bb975352ab0f056a02bce&oe=5EB69BA7",

      url1:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/91454053_628744867677613_6530264797361995776_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=DdmFW2cjN88AX9K-yjP&_nc_ht=scontent-waw1-1.xx&oh=90fa0a7660a633fc9acc06999633381c&oe=5EB8610E",
      url2:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/91477191_628745004344266_8081165096966946816_o.jpg?_nc_cat=106&_nc_sid=8024bb&_nc_ohc=LIEoAoVat1AAX8ZgZzp&_nc_ht=scontent-waw1-1.xx&oh=5e0eb85e9c97d39cf7aa0a6fb621277e&oe=5EB7F1AE",
      url3:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/91498680_628745084344258_1394721738100572160_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=nU_cjIlfBEMAX8pBK1R&_nc_ht=scontent-waw1-1.xx&oh=95ed634c32f2879574a09c5d8d502183&oe=5EB82A5F",

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
