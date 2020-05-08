import React from "react";
import { createStore } from "redux";
import duelReducer from "./reducers/duelReducer";
import { Provider } from "react-redux";
import DuelContainer from "./components/DuelContainer";

export const championsList = {
  abomination: ["sorry, not have", "free"],
  "agent venom": ["Hardtrance9", "free"],
  angela: ["sorry, not have", "free"],
  annihilus: ["Benoptic1", "DirkMcMurk", "Mclz1nkz"],
  "ant-man": ["sorry, not have", "free"],
  archangel: ["D0mico17", "Saske Uchiha", "VladisPuls", "TRey"],
  beast: ["sorry, not have", "free"],
  bishop: ["sorry, not have", "free"],
  "black bolt": ["sorry, not have", "free"],
  "black panther": ["sorry, not have", "free"],
  "black panther (civil war)": ["Saddiq Moonbeam", "Ири Мэтр", "free"],
  "black widow": ["sorry, not have", "free"],
  "black widow (claire voyant)": [
    "Cris7677",
    "Cheko506",
    "TheKey3",
    "Renz522",
    "Dr.L"
  ],
  blade: [
    "Fuandu111",
    "Tristan lee hun",
    "VestigialSinger",
    "Luffy831",
    "Code-Play"
  ],
  cable: ["BxLxAxDxE", "free"],
  "captain america": ["Aterraone", "free"],
  "captain america (infinity war)": [
    "Keb Ra",
    "Magus",
    "Rekliner",
    "CapNRogers4hire",
    "CEO LUCK MAX",
    "HiBlack"
  ],
  "captain america (wwii)": ["L1C", "воитель тьмы"],
  "captain marvel": [
    "Lagacy",
    "Cristhiantz8",
    "RON1N",
    "Varrock",
    "U.uralll",
    "Fwedo"
  ],
  "captain marvel (classic)": ["sorry, not have", "free"],
  carnage: ["Surfer562xx", "free"],
  "civil warrior": ["sorry, not have", "free"],
  colossus: ["Thresher", "free"],
  "corvus glaive": [
    "WE4PON",
    "Tiger Woof",
    "ccp10149",
    "Grundleman",
    "Р У С С К И Й"
  ],
  crossbones: ["sorry, not have", "free"],
  "cull obsidian": [
    "AbdullahX87",
    "RabiKait",
    "Саша 10",
    "Traff1987",
    "CJ.Logan"
  ],
  "cyclops (blue team)": ["Vandal_03", "free"],
  "cyclops (new xavier school)": ["D0utor.0gro", "Nushura"],
  "daredevil (classic)": ["sorry, not have", "free"],
  "daredevil (netflix)": ["sorry, not have", "free"],
  darkhawk: ["PHXAG1990", "immortaL tak", "Dr_ARCHer"],
  deadpool: ["sorry, not have", "free"],
  "deadpool (x-force)": ["sorry, not have", "free"],
  diablo: ["sorry, not have", "free"],
  "doctor doom": [
    "BrutalDLX",
    "Eastside 97",
    "Jackshen Prime",
    "Dinggus719",
    "WE^PON X",
    "sato_mato",
    "Pep1000"
  ],
  "doctor octopus": ["Thunder63", "free"],
  "doctor strange": ["Lusst", "free"],
  "doctor voodoo": [
    "Crater16",
    "I ARE THE GOAT",
    "BreezyP",
    "SuperAfran",
    "0megaRed",
    "Cbengs"
  ],
  domino: [
    "SOULWAX",
    "Rslema",
    "&&ABRAXASS&&",
    "King Dragonite",
    "Ultimatheory",
    "Nameless7"
  ],
  dormammu: ["Drive 90", "free"],
  drax: ["опапа", "free"],
  "ebony maw": ["ЛюсиFEAR", "free"],
  electro: ["REDиска", "free"],
  elektra: ["sorry, not have", "free"],
  "elsa bloodstone": ["18 топ", "free"],
  "emma frost": ["Ms.Evol", "THUNDER FROST", "NoOneAlive", "U K N O U W N"],
  falcon: ["sorry, not have", "free"],
  gambit: ["babylyka", "free"],
  gamora: ["sorry, not have", "free"],
  ghost: ["Hardy978", "Gabriel", "Kencho15", "BigTrusss", "Caenur"],
  "ghost rider": [
    "Clustercluck",
    "Kratos [GoW]",
    "Beej777",
    "Ayedar",
    "Sith_Lord"
  ],
  goldpool: ["dreaminsucks", "My Superior", "ASSASSIN", "N U M B E R S"],
  "green goblin": ["THE ^LL-F^THER", "free"],
  groot: ["Gagxs", "free"],
  guillotine: ["Sosweet", "free"],
  "guillotine 2099": [
    "B2Glory",
    "LATRUTH",
    "Kas/s/Is",
    "Salamonster",
    "Oriver.",
    "BIGGIE",
    "linuxotaku"
  ],
  gwenpool: ["ToonamiTOM", "chronopc", "FP MiNdLeSS", "Thermo16", "L O X"],
  havok: [
    "Kijia_03",
    "Rock666R_",
    "Leonphan037",
    "Devault_usmc",
    "ouchiewally",
    "BeenFr3sh",
    "FrenchNinjaBear"
  ],
  hawkeye: [".skif.", "free"],
  heimdall: ["EN.DI", "free"],
  hela: ["anyatrof", "free"],
  "howard the duck": ["alegator228", "free"],
  hulk: ["MorgenSHTO", "free"],
  "hulk (ragnarok)": ["ChessMaster69", "free"],
  hulkbuster: ["визгор", "free"],
  "human torch": [
    "Midnighthequeen",
    "Rider of Iceberg",
    "JDogLoves46",
    "FluffyPigMonstr"
  ],
  hyperion: ["Gabe1248", "XYLI_GAN", "Surrffer", "Sania-Odessa"],
  iceman: ["MySTIQuE", "d0tmatrix", "Nico", "LegendRsD", "OngisNade69"],
  "invisible woman": ["Sam squad", "Incognito Mode"],
  "iron fist": ["AmmarDaStar", "BrAiNGoD"],
  "iron fist (immortal)": ["sorry, not have", "free"],
  "iron man": ["THE D0CTOR", "free"],
  "iron man (infinity war)": ["Sokol_161", "free"],
  "iron patriot": ["CoB555Rus", "free"],
  "joe fixit": ["sorry, not have", "free"],
  juggernaut: ["sorry, not have", "free"],
  "kang the conqueror": ["sorry, not have", "free"],
  karnak: ["THEGUARDIAN", "free"],
  killmonger: [
    "Prime Betrayal",
    "The Purry Meow!",
    "Hardcastle98",
    "Demonic Wolf~2",
    "ZVERgs",
    "MercVenger"
  ],
  "king groot": ["sorry, not have", "free"],
  kingpin: ["sorry, not have", "free"],
  korg: ["BAW", "Kinggyy", "iMdCaptnNow", "Cactusgrass", "WAR MAIDEN"],
  loki: ["nekre_71rus", "free"],
  longshot: ["kasakasapat", "KING", "D-MAN", "Moshne"],
  "luke cage": ["TailoredBAPE", "Moonlight Shadow", "Sakhalinka"],
  "m.o.d.o.k.": ["Sensei", "Nerazzurri", "Вендиго"],
  magik: [
    "RoninNupe",
    "Super Duper DLX",
    "Thumper83",
    "Matahari88",
    "Elliot1234",
    "JesuzzZ"
  ],
  magneto: ["V.AD", "free"],
  "magneto (marvel now!)": ["sorry, not have", "free"],
  "man-thing": ["Rbintherock", "free"],
  masacre: ["sorry, not have", "free"],
  medusa: [
    "Revenge..!!!",
    "Oliver.Gao",
    "Pang A Cheo",
    "Rasputin Black",
    "•spec•",
    '"KAWAY"'
  ],
  mephisto: ["Jay51", "Mr 6pack", "Crazy Panda™", "Flo Yd"],
  "mister fantastic": ["M0t0rb£ath", "rwhack", "Sheepstealer"],
  "mister sinister": ["sorry, not have", "free"],
  mojo: ["MadKiller", "ShatStevens", "free"],
  "mole man": ["sorry, not have", "free"],
  "moon knight": ["sorry, not have", "free"],
  mordo: [
    "Frosty Q",
    "Jade Joe",
    "Kojishe",
    "JUST ARGO",
    "Yk4evor",
    "Justlysane",
    "VIP_NICOLAI"
  ],
  morningstar: ["Evil-Jenndi", "Holy Dread", "✝ZeRo✝One✝"],
  "ms. marvel": ["sorry, not have", "free"],
  "ms. marvel (kamala khan)": ["T1ik", "free"],
  mysterio: ["Batsii", "Nikebot", "BoredChairman", "Vindekader"],
  namor: [
    "GencerM",
    "Augie 2200",
    "Ask4elaye",
    "DEMON DNA",
    "Allmend",
    "USAFA 99"
  ],
  nebula: ["Trickygunner", "free"],
  "nick fury": [
    "TheKiryu",
    "Anes888",
    "Satsui No Hadou",
    "Cityofenoch",
    "papa Olv"
  ],
  "night thrasher": ["sorry, not have", "free"],
  nightcrawler: ["Асинхрон", "free"],
  nova: ["sorry, not have", "free"],
  "old man logan": ["Sosweet", "free"],
  "omega red": ["Holz.78", "OMNIPOTENT.", "-Sniperwolf-", "G.Asura"],
  phoenix: [
    "WHITEMUMMY",
    "-Kitty Pryde-",
    "XxKyxX",
    "BDH81",
    "LegacyLion1418",
    "TabascoSauce504"
  ],
  "proxima midnight": ["Fred63122", "Richie V", "Keef Waffles", "Weddly"],
  psylocke: ["El_Azar", "free"],
  punisher: ["sorry, not have", "free"],
  "punisher 2099": ["sorry, not have", "free"],
  quake: ["Big Beckett 6", "Deletadaembreve", "ReyDeLosMuertos"],
  "red hulk": ["Cacophony", "Texas Hitman", "LexXx13", "Check-in"],
  "red skull": ["Никита22772", "free"],
  rhino: ["Busty Pamela", "free"],
  "rocket raccoon": ["sorry, not have", "free"],
  rogue: ["CHOCO MILK", "NoOneAlive", "X_Incredible"],
  ronan: ["Per4ik", "free"],
  ronin: ["sorry, not have", "free"],
  sabretooth: ["ARION", "God_Angel", "TeminioKop", "IgalY", "BitSet"],
  "scarlet witch": ["Артурик Барсик", "KvazarSmesh"],
  sentinel: ["Detrimxntal", "Flazinator", "Luzi", "Константи", "Samer22252"],
  sentry: ["Mad Titan Beezy", "free"],
  "she-hulk": ["Xenocyde666", "eqwille", "daniil66"],
  "silver surfer": [
    "Batteryhorse",
    "WoW!eMoNs",
    "@JUB",
    "Will54",
    "1KiddRock",
    "Seatin"
  ],
  "sorcerer supreme": ["sorry, not have", "free"],
  "spider-gwen": ["sorry, not have", "free"],
  "spider-man (classic)": ["H_A_L_K", "free"],
  "spider-man (miles morales)": ["Glinch", "free"],
  "spider-man (stark enhanced)": ["Mysterious Juggler", "Sokalmac", "Eloes49"],
  "spider-man (stealth suit)": [
    "Jedi Master",
    "CpcBoyboy-",
    "Badygone",
    "Winning Crunkly",
    "Dhops"
  ],
  "spider-man (symbiote)": ["sorry, not have", "free"],
  "squirrel girl": ["H.A.D.E.S", "free"],
  "star-lord": ["vrto", "NoOneAlive", "Showtime Jones", "ERKAN__"],
  storm: ["sensismile", "free"],
  "storm (pyramid x)": ["sorry, not have", "free"],
  sunspot: [
    "EQTERROR",
    "LeBr0n",
    "Krimson5",
    "Ami89no",
    "BigPmpn",
    "Corona Violence"
  ],
  "superior iron man": ["_K A N R Y Q_", "free"],
  "symbiote supreme": [
    "Rekt0r",
    "Hawaiianluv94",
    "KillSwitch007",
    "xNig",
    "Nanchex",
    "Dehawk",
    "Prater",
    "Nite-"
  ],
  taskmaster: ["Neso69", "free"],
  terrax: ["sorry, not have", "free"],
  thanos: ["Than0sWasRight", "Super Sephiroth"],
  "the champion": ["Krop1988", "Unshakeable", "Ef3200", "Jex9"],
  "the hood": ["Lucky Lucc", "free"],
  thing: ["HQ SEAN", "HW16", "The DJPROJECT", "DeaTHstrоке", "k0lbasa"],
  thor: ["sahca5000", "free"],
  "thor (jane foster)": ["BaRTSimpson2004", "free"],
  "thor (ragnarok)": [
    "Jumbo Q",
    "L0ordRafaell",
    "StpNo",
    "BaronMunchausen",
    "Doc JC 2.0",
    "Angry Kanka"
  ],
  ultron: ["Erfinity88", "daninjanige", "CRHSs", "norm3838"],
  "ultron (classic)": ["FancyThat", "Dashboy08"],
  "unstoppable colossus": ["sorry, not have", "free"],
  venom: ["JK99!", "Hihitmen", "Ludaflow"],
  "venom the duck": ["TRIBUNAL", "free"],
  venompool: ["nenoeuil", "free"],
  vision: ["Jedi Pizzle", "free"],
  "vision (aarkus)": ["sorry, not have", "free"],
  "vision (age of ultron)": ["PAHOBOBA", "free"],
  void: [
    "chessergg",
    "ArtOfKhaos",
    "Jable Prime",
    "cyfermode",
    "Lord Amon-Ra",
    "Ля какой",
    "RAWB",
    "GremTM"
  ],
  vulture: ["Salash81", "free"],
  "war machine": ["sorry, not have", "free"],
  warlock: [
    "Lethal Tomato",
    "BeefLips Dom",
    "BenReilly75",
    "Andrewkole",
    "TimmyTwoTone",
    "shogarty"
  ],
  wasp: ["GOONIE GOO GOO", "Dwcb!", "Virt3x", "Vikk0nt"],
  "winter soldier": ["-Frankenstein-", "free"],
  wolverine: ["трололошкин", "free"],
  "wolverine (weapon x)": ["sorry, not have", "free"],
  "wolverine (x-23)": ["Strongman", "Братан01"],
  yellowjacket: ["аленка44", "free"],
  yondu: ["sorry, not have", "free"],
  ægon: ["mvinceable", "DUCT MAN", "Roachboy", "Joe The Healer", "Matchless"]
};

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DuelContainer />
      </div>
    </Provider>
  );
}

export const store = createStore(duelReducer);
export default App;
