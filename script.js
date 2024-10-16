
// Current Date for Title
const dateElement = document.getElementById('date');

console.log(dateElement.textContent);

let currentDate = new Date();

console.log(currentDate)

let dateOptions = {year: 'numeric', month: 'long', day: "numeric"}

dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);


// Rapid API
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': {YOUR API KEY},
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
}
/*
// Dummy Data to comment out

let testData = {
	trends: {
		'0': {
		  name: '#2NE1_WELCOMEBACKinManila',
		  query: '%232NE1_WELCOMEBACKinManila',
		  url: 'search?q=%232NE1_WELCOMEBACKinManila',
		  volume: 16600,
		  volumeShort: '16.3K',
		  domainContext: 'K-pop',
		  groupedTrends: []
		},
		'1': {
		  name: '#ปิ่นภักดิ์EP11',
		  query: '%23%E0%B8%9B%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B8%A0%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%B4%E0%B9%8CEP11',
		  url: 'search?q=%23%E0%B8%9B%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B8%A0%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%B4%E0%B9%8CEP11',
		  volume: 481000,
		  volumeShort: '481K',
		  domainContext: 'Only on X',
		  groupedTrends: []
		},
		'2': {
		  name: '#SB19onTeaMFair2024',
		  query: '%23SB19onTeaMFair2024',
		  url: 'search?q=%23SB19onTeaMFair2024',
		  volume: 105000,
		  volumeShort: '105K',
		  domainContext: 'Pop',
		  groupedTrends: []
		},
		'3': {
		  name: 'THE LOYAL PIN LANTERN NIGHT',
		  query: 'THE+LOYAL+PIN+LANTERN+NIGHT',
		  url: 'search?q=%22THE+LOYAL+PIN+LANTERN+NIGHT%22',
		  volume: 504000,
		  volumeShort: '504K',
		  domainContext: 'Only on X',
		  groupedTrends: []
		},
		'4': {
		  name: 'SB19 INVADES BULACAN',
		  query: 'SB19+INVADES+BULACAN',
		  url: 'search?q=%22SB19+INVADES+BULACAN%22',
		  volume: 97400,
		  volumeShort: '97.2K',
		  domainContext: 'Pop',
		  groupedTrends: []
		},
		'5': {
		  name: '#ASAPspectacular',
		  query: '%23ASAPspectacular',
		  url: 'search?q=%23ASAPspectacular',
		  volume: 28400,
		  volumeShort: '28.2K',
		  domainContext: '',
		  groupedTrends: []
		},
		'6': {
		  name: 'SVT RIGHT HERE IN GOYANG D2',
		  query: 'SVT+RIGHT+HERE+IN+GOYANG+D2',
		  url: 'search?q=%22SVT+RIGHT+HERE+IN+GOYANG+D2%22',
		  volume: 16000,
		  volumeShort: '16K',
		  domainContext: 'K-pop',
		  groupedTrends: []
		},
		'7': {
		  name: '#모두가원해_세븐틴_라잇히얼',
		  query: '%23%EB%AA%A8%EB%91%90%EA%B0%80%EC%9B%90%ED%95%B4_%EC%84%B8%EB%B8%90%ED%8B%B4_%EB%9D%BC%EC%9E%87%ED%9E%88%EC%96%BC',
		  url: 'search?q=%23%EB%AA%A8%EB%91%90%EA%B0%80%EC%9B%90%ED%95%B4_%EC%84%B8%EB%B8%90%ED%8B%B4_%EB%9D%BC%EC%9E%87%ED%9E%88%EC%96%BC',
		  volume: 16000,
		  volumeShort: '15.5K',
		  domainContext: 'K-pop',
		  groupedTrends: []
		},
		'8': {
		  name: 'THIRTEEN IS JARLETTE DAY',
		  query: 'THIRTEEN+IS+JARLETTE+DAY',
		  url: 'search?q=%22THIRTEEN+IS+JARLETTE+DAY%22',
		  volume: 89600,
		  volumeShort: '89.3K',
		  domainContext: '',
		  groupedTrends: []
		},
		'9': {
		  name: 'HAPPY BIRTHDAY JIMIN',
		  query: 'HAPPY+BIRTHDAY+JIMIN',
		  url: 'search?q=%22HAPPY+BIRTHDAY+JIMIN%22',
		  volume: 798000,
		  volumeShort: '798K',
		  domainContext: 'K-pop',
		  groupedTrends: []
		},
		'10': {
		  name: 'THE JASDY MAGIC',
		  query: 'THE+JASDY+MAGIC',
		  url: 'search?q=%22THE+JASDY+MAGIC%22',
		  volume: 2018,
		  volumeShort: '2,018',
		  domainContext: '',
		  groupedTrends: []
		},
		'11': {
		  name: 'JARFYANG 4LEAF CLOVER',
		  query: 'JARFYANG+4LEAF+CLOVER',
		  url: 'search?q=%22JARFYANG+4LEAF+CLOVER%22',
		  volume: 12200,
		  volumeShort: '12.1K',
		  domainContext: '',
		  groupedTrends: []
		},
		'12': {
		  name: 'DONBELLE ASAPartyMode',
		  query: 'DONBELLE+ASAPartyMode',
		  url: 'search?q=%22DONBELLE+ASAPartyMode%22',
		  volume: 45599,
		  volumeShort: '45.3K',
		  domainContext: 'Pop',
		  groupedTrends: []
		},
		'13': {
		  name: 'NASA CAVITE SI JOY',
		  query: 'NASA+CAVITE+SI+JOY',
		  url: 'search?q=%22NASA+CAVITE+SI+JOY%22',
		  volume: 1711,
		  volumeShort: '1,711',
		  domainContext: 'Space',
		  groupedTrends: []
		},
		'14': {
		  name: 'Jiminie',
		  query: 'Jiminie',
		  url: 'search?q=Jiminie',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: 'Korean music',
		  groupedTrends: []
		},
		'15': {
		  name: 'CONGRATULATIONS OUR BINI',
		  query: 'CONGRATULATIONS+OUR+BINI',
		  url: 'search?q=%22CONGRATULATIONS+OUR+BINI%22',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'16': {
		  name: 'JMFYANG OUR SOLACE',
		  query: 'JMFYANG+OUR+SOLACE',
		  url: 'search?q=%22JMFYANG+OUR+SOLACE%22',
		  volume: 42000,
		  volumeShort: '41.5K',
		  domainContext: '',
		  groupedTrends: []
		},
		'17': {
		  name: 'Cepada',
		  query: 'Cepada',
		  url: 'search?q=Cepada',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'18': {
		  name: 'saveturday fyang',
		  query: 'saveturday+fyang',
		  url: 'search?q=%22saveturday+fyang%22',
		  volume: 27400,
		  volumeShort: '26.7K',
		  domainContext: '',
		  groupedTrends: []
		},
		'19': {
		  name: 'joy goes to north',
		  query: 'joy+goes+to+north',
		  url: 'search?q=%22joy+goes+to+north%22',
		  volume: 4728,
		  volumeShort: '4,728',
		  domainContext: '',
		  groupedTrends: []
		},
		'20': {
		  name: 'slay pbbestie alexa',
		  query: 'slay+pbbestie+alexa',
		  url: 'search?q=%22slay+pbbestie+alexa%22',
		  volume: 14200,
		  volumeShort: '14.1K',
		  domainContext: '',
		  groupedTrends: []
		},
		'21': {
		  name: 'ASAPaFall WithJMielle',
		  query: 'ASAPaFall+WithJMielle',
		  url: 'search?q=%22ASAPaFall+WithJMielle%22',
		  volume: 17600,
		  volumeShort: '16.8K',
		  domainContext: '',
		  groupedTrends: []
		},
		'22': {
		  name: 'JMIELLE ASAP SAYA',
		  query: 'JMIELLE+ASAP+SAYA',
		  url: 'search?q=%22JMIELLE+ASAP+SAYA%22',
		  volume: 17600,
		  volumeShort: '16.8K',
		  domainContext: '',
		  groupedTrends: []
		},
		'23': {
		  name: 'KOLETTE ONE STEP CLOSER',
		  query: 'KOLETTE+ONE+STEP+CLOSER',
		  url: 'search?q=%22KOLETTE+ONE+STEP+CLOSER%22',
		  volume: 83199,
		  volumeShort: '83.1K',
		  domainContext: '',
		  groupedTrends: []
		},
		'24': {
		  name: 'ALEXA VIBING ASAP PARTY',
		  query: 'ALEXA+VIBING+ASAP+PARTY',
		  url: 'search?q=%22ALEXA+VIBING+ASAP+PARTY%22',
		  volume: 11200,
		  volumeShort: '10.6K',
		  domainContext: 'Only on X',
		  groupedTrends: []
		},
		'25': {
		  name: 'KathDen Sa Cavite',
		  query: 'KathDen+Sa+Cavite',
		  url: 'search?q=%22KathDen+Sa+Cavite%22',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'26': {
		  name: 'JARFYANG 1BILLION VIEWS',
		  query: 'JARFYANG+1BILLION+VIEWS',
		  url: 'search?q=%22JARFYANG+1BILLION+VIEWS%22',
		  volume: 81199,
		  volumeShort: '80.6K',
		  domainContext: '',
		  groupedTrends: []
		},
		'27': {
		  name: 'LEE HEESEUNG',
		  query: 'LEE+HEESEUNG',
		  url: 'search?q=%22LEE+HEESEUNG%22',
		  volume: 41400,
		  volumeShort: '40.7K',
		  domainContext: 'K-pop',
		  groupedTrends: []
		},
		'28': {
		  name: 'BGYO ASAPPARTY MODE',
		  query: 'BGYO+ASAPPARTY+MODE',
		  url: 'search?q=%22BGYO+ASAPPARTY+MODE%22',
		  volume: 4403,
		  volumeShort: '4,403',
		  domainContext: 'Pop',
		  groupedTrends: []
		},
		'29': {
		  name: 'JARLETTE GOING GLOBE-AL',
		  query: 'JARLETTE+GOING+GLOBE-AL',
		  url: 'search?q=%22JARLETTE+GOING+GLOBE-AL%22',
		  volume: 138000,
		  volumeShort: '138K',
		  domainContext: '',
		  groupedTrends: []
		},
		'30': {
		  name: 'Queen REGINE Di Sinasadya',
		  query: 'Queen+REGINE+Di+Sinasadya',
		  url: 'search?q=%22Queen+REGINE+Di+Sinasadya%22',
		  volume: 5115,
		  volumeShort: '5,115',
		  domainContext: '',
		  groupedTrends: []
		},
		'31': {
		  name: 'LANY',
		  query: 'LANY',
		  url: 'search?q=LANY',
		  volume: 6091,
		  volumeShort: '6,091',
		  domainContext: 'Music',
		  groupedTrends: []
		},
		'32': {
		  name: 'MESMERIZING KRISSHA DAY',
		  query: 'MESMERIZING+KRISSHA+DAY',
		  url: 'search?q=%22MESMERIZING+KRISSHA+DAY%22',
		  volume: 17600,
		  volumeShort: '17.3K',
		  domainContext: '',
		  groupedTrends: []
		},
		'33': {
		  name: 'UNBREAKABLE KAIRAIN',
		  query: 'UNBREAKABLE+KAIRAIN',
		  url: 'search?q=%22UNBREAKABLE+KAIRAIN%22',
		  volume: 48800,
		  volumeShort: '47.9K',
		  domainContext: '',
		  groupedTrends: []
		},
		'34': {
		  name: 'wonwoo',
		  query: 'wonwoo',
		  url: 'search?q=wonwoo',
		  volume: 364000,
		  volumeShort: '364K',
		  domainContext: 'Korean music',
		  groupedTrends: []
		},
		'35': {
		  name: 'Mizuki',
		  query: 'Mizuki',
		  url: 'search?q=Mizuki',
		  volume: 175000,
		  volumeShort: '175K',
		  domainContext: '',
		  groupedTrends: []
		},
		'36': {
		  name: 'rainagainst all odds',
		  query: 'rainagainst+all+odds',
		  url: 'search?q=%22rainagainst+all+odds%22',
		  volume: 41400,
		  volumeShort: '41.2K',
		  domainContext: '',
		  groupedTrends: []
		},
		'37': {
		  name: 'Park Jimin',
		  query: 'Park+Jimin',
		  url: 'search?q=%22Park+Jimin%22',
		  volume: 151000,
		  volumeShort: '151K',
		  domainContext: 'Korean music',
		  groupedTrends: []
		},
		'38': {
		  name: 'Cheers to Youth',
		  query: 'Cheers+to+Youth',
		  url: 'search?q=%22Cheers+to+Youth%22',
		  volume: 17600,
		  volumeShort: '16.8K',
		  domainContext: '',
		  groupedTrends: []
		},
		'39': {
		  name: 'shining kairen',
		  query: 'shining+kairen',
		  url: 'search?q=%22shining+kairen%22',
		  volume: 33599,
		  volumeShort: '32.8K',
		  domainContext: '',
		  groupedTrends: []
		},
		'40': {
		  name: 'Mimi',
		  query: 'Mimi',
		  url: 'search?q=Mimi',
		  volume: 97199,
		  volumeShort: '97.1K',
		  domainContext: 'K-pop',
		  groupedTrends: []
		},
		'41': {
		  name: 'BOYFRIEND APPLICATION',
		  query: 'BOYFRIEND+APPLICATION',
		  url: 'search?q=%22BOYFRIEND+APPLICATION%22',
		  volume: 3867,
		  volumeShort: '3,867',
		  domainContext: 'Arts & culture',
		  groupedTrends: []
		},
		'42': {
		  name: 'Garma',
		  query: 'Garma',
		  url: 'search?q=Garma',
		  volume: 5061,
		  volumeShort: '5,061',
		  domainContext: '',
		  groupedTrends: []
		},
		'43': {
		  name: 'Insung',
		  query: 'Insung',
		  url: 'search?q=Insung',
		  volume: 6291,
		  volumeShort: '6,291',
		  domainContext: '',
		  groupedTrends: []
		},
		'44': {
		  name: 'WELCOME BACK MC YUNA',
		  query: 'WELCOME+BACK+MC+YUNA',
		  url: 'search?q=%22WELCOME+BACK+MC+YUNA%22',
		  volume: 1819,
		  volumeShort: '1,819',
		  domainContext: '',
		  groupedTrends: []
		},
		'45': {
		  name: 'PartyModeOn With BELLE',
		  query: 'PartyModeOn+With+BELLE',
		  url: 'search?q=%22PartyModeOn+With+BELLE%22',
		  volume: 4794,
		  volumeShort: '4,794',
		  domainContext: '',
		  groupedTrends: []
		},
		'46': {
		  name: 'Vernon',
		  query: 'Vernon',
		  url: 'search?q=Vernon',
		  volume: 102000,
		  volumeShort: '102K',
		  domainContext: 'K-pop',
		  groupedTrends: []
		},
		'47': {
		  name: 'WTB LFS',
		  query: 'WTB+LFS',
		  url: 'search?q=%22WTB+LFS%22',
		  volume: 2543,
		  volumeShort: '2,543',
		  domainContext: 'K-pop',
		  groupedTrends: []
		},
		'48': {
		  name: 'cheol',
		  query: 'cheol',
		  url: 'search?q=cheol',
		  volume: 32600,
		  volumeShort: '31.8K',
		  domainContext: 'Korean music',
		  groupedTrends: []
		},
		'49': {
		  name: 'kaisha says',
		  query: 'kaisha+says',
		  url: 'search?q=%22kaisha+says%22',
		  volume: 4577,
		  volumeShort: '4,577',
		  domainContext: '',
		  groupedTrends: []
		},
		'50': {
		  name: 'Woobin',
		  query: 'Woobin',
		  url: 'search?q=Woobin',
		  volume: 8210,
		  volumeShort: '8,210',
		  domainContext: '',
		  groupedTrends: []
		},
		'51': {
		  name: 'OCTOBERY HAPPY WithANJI',
		  query: 'OCTOBERY+HAPPY+WithANJI',
		  url: 'search?q=%22OCTOBERY+HAPPY+WithANJI%22',
		  volume: 3498,
		  volumeShort: '3,498',
		  domainContext: '',
		  groupedTrends: []
		},
		'52': {
		  name: 'Demain',
		  query: 'Demain',
		  url: 'search?q=Demain',
		  volume: 15200,
		  volumeShort: '14.6K',
		  domainContext: '',
		  groupedTrends: []
		},
		'53': {
		  name: 'HORI7ON SHINES ON MAMF',
		  query: 'HORI7ON+SHINES+ON+MAMF',
		  url: 'search?q=%22HORI7ON+SHINES+ON+MAMF%22',
		  volume: 1432,
		  volumeShort: '1,432',
		  domainContext: '',
		  groupedTrends: []
		},
		'54': {
		  name: 'CMFT',
		  query: 'CMFT',
		  url: 'search?q=CMFT',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'55': {
		  name: 'Madrid',
		  query: 'Madrid',
		  url: 'search?q=Madrid',
		  volume: 11399,
		  volumeShort: '10.7K',
		  domainContext: 'Football',
		  groupedTrends: []
		},
		'56': {
		  name: 'hoshi',
		  query: 'hoshi',
		  url: 'search?q=hoshi',
		  volume: 162000,
		  volumeShort: '162K',
		  domainContext: 'K-pop',
		  groupedTrends: []
		},
		'57': {
		  name: 'Salang',
		  query: 'Salang',
		  url: 'search?q=Salang',
		  volume: 1064,
		  volumeShort: '1,064',
		  domainContext: '',
		  groupedTrends: []
		},
		'58': {
		  name: 'The Corrs',
		  query: 'The+Corrs',
		  url: 'search?q=%22The+Corrs%22',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'59': {
		  name: 'GRAB GUIDE LINGORM',
		  query: 'GRAB+GUIDE+LINGORM',
		  url: 'search?q=%22GRAB+GUIDE+LINGORM%22',
		  volume: 1299999,
		  volumeShort: '1.15M',
		  domainContext: 'Only on X',
		  groupedTrends: []
		},
		'60': {
		  name: 'CONGRATS PAULO ON GAWAD PASADO',
		  query: 'CONGRATS+PAULO+ON+GAWAD+PASADO',
		  url: 'search?q=%22CONGRATS+PAULO+ON+GAWAD+PASADO%22',
		  volume: 23400,
		  volumeShort: '23.2K',
		  domainContext: '',
		  groupedTrends: []
		},
		'61': {
		  name: 'jasdy perfect pair',
		  query: 'jasdy+perfect+pair',
		  url: 'search?q=%22jasdy+perfect+pair%22',
		  volume: 16000,
		  volumeShort: '15.5K',
		  domainContext: '',
		  groupedTrends: []
		},
		'62': {
		  name: 'Nitura',
		  query: 'Nitura',
		  url: 'search?q=Nitura',
		  volume: 1722,
		  volumeShort: '1,722',
		  domainContext: '',
		  groupedTrends: []
		},
		'63': {
		  name: 'KIMPAU MOVIE ONLingGOING',
		  query: 'KIMPAU+MOVIE+ONLingGOING',
		  url: 'search?q=%22KIMPAU+MOVIE+ONLingGOING%22',
		  volume: 9510,
		  volumeShort: '9,510',
		  domainContext: '',
		  groupedTrends: []
		},
		'64': {
		  name: 'TICKET SECURED',
		  query: 'TICKET+SECURED',
		  url: 'search?q=%22TICKET+SECURED%22',
		  volume: 1740,
		  volumeShort: '1,740',
		  domainContext: '',
		  groupedTrends: []
		},
		'65': {
		  name: 'Blessed Sunday',
		  query: 'Blessed+Sunday',
		  url: 'search?q=%22Blessed+Sunday%22',
		  volume: 13600,
		  volumeShort: '12.8K',
		  domainContext: '',
		  groupedTrends: []
		},
		'66': {
		  name: 'OCTOBER AND FOREVER WITH JULIE',
		  query: 'OCTOBER+AND+FOREVER+WITH+JULIE',
		  url: 'search?q=%22OCTOBER+AND+FOREVER+WITH+JULIE%22',
		  volume: 2637,
		  volumeShort: '2,637',
		  domainContext: '',
		  groupedTrends: []
		},
		'67': {
		  name: 'JIMMYSEA ANG TANGLAW',
		  query: 'JIMMYSEA+ANG+TANGLAW',
		  url: 'search?q=%22JIMMYSEA+ANG+TANGLAW%22',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'68': {
		  name: 'Dilaw',
		  query: 'Dilaw',
		  url: 'search?q=Dilaw',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'69': {
		  name: 'woozi',
		  query: 'woozi',
		  url: 'search?q=woozi',
		  volume: 164000,
		  volumeShort: '164K',
		  domainContext: 'K-pop',
		  groupedTrends: []
		},
		'70': {
		  name: 'jeonghan',
		  query: 'jeonghan',
		  url: 'search?q=jeonghan',
		  volume: 389000,
		  volumeShort: '389K',
		  domainContext: 'Korean music',
		  groupedTrends: []
		},
		'71': {
		  name: 'Aju Nice',
		  query: 'Aju+Nice',
		  url: 'search?q=%22Aju+Nice%22',
		  volume: 50200,
		  volumeShort: '50.1K',
		  domainContext: '',
		  groupedTrends: []
		},
		'72': {
		  name: 'PH Arena',
		  query: 'PH+Arena',
		  url: 'search?q=%22PH+Arena%22',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: 'K-pop',
		  groupedTrends: []
		},
		'73': {
		  name: 'JIMIN JIMIN',
		  query: 'JIMIN+JIMIN',
		  url: 'search?q=%22JIMIN+JIMIN%22',
		  volume: 2280000,
		  volumeShort: '1.64M',
		  domainContext: 'Korean music',
		  groupedTrends: []
		},
		'74': {
		  name: 'LOISA ASAP FIERY',
		  query: 'LOISA+ASAP+FIERY',
		  url: 'search?q=%22LOISA+ASAP+FIERY%22',
		  volume: 3271,
		  volumeShort: '3,271',
		  domainContext: '',
		  groupedTrends: []
		},
		'75': {
		  name: 'Detdet',
		  query: 'Detdet',
		  url: 'search?q=Detdet',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'76': {
		  name: 'Cassie',
		  query: 'Cassie',
		  url: 'search?q=Cassie',
		  volume: 5705,
		  volumeShort: '5,705',
		  domainContext: '',
		  groupedTrends: []
		},
		'77': {
		  name: 'seungkwan',
		  query: 'seungkwan',
		  url: 'search?q=seungkwan',
		  volume: 118000,
		  volumeShort: '118K',
		  domainContext: 'Korean music',
		  groupedTrends: []
		},
		'78': {
		  name: 'Maja',
		  query: 'Maja',
		  url: 'search?q=Maja',
		  volume: 23400,
		  volumeShort: '23.2K',
		  domainContext: '',
		  groupedTrends: []
		},
		'79': {
		  name: 'SEASON OF MEW',
		  query: 'SEASON+OF+MEW',
		  url: 'search?q=%22SEASON+OF+MEW%22',
		  volume: 36200,
		  volumeShort: '35.6K',
		  domainContext: 'Celebrities',
		  groupedTrends: []
		},
		'80': {
		  name: '2 UB',
		  query: '2+UB',
		  url: 'search?q=%222+UB%22',
		  volume: 1205,
		  volumeShort: '1,205',
		  domainContext: '',
		  groupedTrends: []
		},
		'81': {
		  name: 'LBA Reg',
		  query: 'LBA+Reg',
		  url: 'search?q=%22LBA+Reg%22',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'82': {
		  name: 'LFS WTB',
		  query: 'LFS+WTB',
		  url: 'search?q=%22LFS+WTB%22',
		  volume: 2544,
		  volumeShort: '2,544',
		  domainContext: '',
		  groupedTrends: []
		},
		'83': {
		  name: 'Gen Ad',
		  query: 'Gen+Ad',
		  url: 'search?q=%22Gen+Ad%22',
		  volume: 1879,
		  volumeShort: '1,879',
		  domainContext: '',
		  groupedTrends: []
		},
		'84': {
		  name: 'UB Regular',
		  query: 'UB+Regular',
		  url: 'search?q=%22UB+Regular%22',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'85': {
		  name: 'CJ Opiaza',
		  query: 'CJ+Opiaza',
		  url: 'search?q=%22CJ+Opiaza%22',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'86': {
		  name: 'Kyungsoo',
		  query: 'Kyungsoo',
		  url: 'search?q=Kyungsoo',
		  volume: 86000,
		  volumeShort: '86K',
		  domainContext: 'Korean music',
		  groupedTrends: []
		},
		'87': {
		  name: 'Lilay',
		  query: 'Lilay',
		  url: 'search?q=Lilay',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'88': {
		  name: 'MEET UP',
		  query: 'MEET+UP',
		  url: 'search?q=%22MEET+UP%22',
		  volume: 43200,
		  volumeShort: '43.1K',
		  domainContext: '',
		  groupedTrends: []
		},
		'89': {
		  name: 'Araneta Coliseum',
		  query: 'Araneta+Coliseum',
		  url: 'search?q=%22Araneta+Coliseum%22',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'90': {
		  name: 'Kami',
		  query: 'Kami',
		  url: 'search?q=Kami',
		  volume: 95400,
		  volumeShort: '94.7K',
		  domainContext: '',
		  groupedTrends: []
		},
		'91': {
		  name: 'Inch',
		  query: 'Inch',
		  url: 'search?q=Inch',
		  volume: 40200,
		  volumeShort: '39.6K',
		  domainContext: '',
		  groupedTrends: []
		},
		'92': {
		  name: 'ariana',
		  query: 'ariana',
		  url: 'search?q=ariana',
		  volume: 102000,
		  volumeShort: '102K',
		  domainContext: 'Pop',
		  groupedTrends: []
		},
		'93': {
		  name: 'Chanyeol',
		  query: 'Chanyeol',
		  url: 'search?q=Chanyeol',
		  volume: 52800,
		  volumeShort: '52.4K',
		  domainContext: 'Korean music',
		  groupedTrends: []
		},
		'94': {
		  name: 'Pasabay',
		  query: 'Pasabay',
		  url: 'search?q=Pasabay',
		  volume: 1000,
		  volumeShort: '1k',
		  domainContext: '',
		  groupedTrends: []
		},
		'95': {
		  name: 'Happy Birthday Furina',
		  query: 'Happy+Birthday+Furina',
		  url: 'search?q=%22Happy+Birthday+Furina%22',
		  volume: 42599,
		  volumeShort: '42.3K',
		  domainContext: '',
		  groupedTrends: []
		},
		'96': {
		  name: 'Darren',
		  query: 'Darren',
		  url: 'search?q=Darren',
		  volume: 11200,
		  volumeShort: '10.6K',
		  domainContext: '',
		  groupedTrends: []
		},
		'97': {
		  name: 'FYANG DESERVES APOLOGY',
		  query: 'FYANG+DESERVES+APOLOGY',
		  url: 'search?q=%22FYANG+DESERVES+APOLOGY%22',
		  volume: 2116,
		  volumeShort: '2,116',
		  domainContext: '',
		  groupedTrends: []
		},
		'98': {
		  name: 'Encore',
		  query: 'Encore',
		  url: 'search?q=Encore',
		  volume: 141000,
		  volumeShort: '141K',
		  domainContext: '',
		  groupedTrends: []
		},
		'99': {
		  name: 'Mumei',
		  query: 'Mumei',
		  url: 'search?q=Mumei',
		  volume: 5826,
		  volumeShort: '5,826',
		  domainContext: '',
		  groupedTrends: []
		}
	  },
	  location: { name: 'Philippines', woeid: 23424934 },
	  created: { created_at: 1728810066, created_at_v1: '2024-10-13T09:01:06Z' }
	}

let graphData = []
for (let i = 0; i < 10; i++) {
	graphData.push(
		{
			"name": testData.trends[i].name,
			"volume": testData.trends[i].volume
		}
	)
} 

let topics = graphData.map(object =>{
	return object.name;
})

let volumes = graphData.map(object =>{
	return object.volume;
})


// Chart JS
const myChart = document.getElementById('myChart');

let barChart = new Chart(myChart, {
type: 'bar',
data: {
	labels: topics,
	datasets: [{
	label: '# of tweets/xeets',
	data: volumes,
	borderWidth: 2,
	backgroundColor: [
		'rgba(255,99,132,0.2)',
		'rgba(255,159,64,0.2)',
		'rgba(255,205,86,0.2)',
		'rgba(75,192,192,0.2)',
		'rgba(54,162,235,0.2)',
		'rgba(153,102,255,0.2)',
		'rgba(201,203,207,0.2)'
	],
	hoverBackgroundColor: [
		'rgb(255,99,132)' ,
		'rgb(255,159,64)' ,
		'rgb(255,205,86)',
		'rgb(75,192,192)' ,
		'rgb(54,162,235)' ,
		'rgb(153,102,255)' ,
		'rgb(201,203,207)'
		
	],
	borderColor: [
		'rgb(255,99,132)',
		'rgb(255,159,64)',
		'rgb(255,205,86)',
		'rgb(75,192,192)',
		'rgb(54,162,235)',
		'rgb(153,102,255)',
		'rgb(201,203,207)'
	]
}]
},
options: {
	indexAxis: 'y',
	scales: {
	y: {
		beginAtZero: true
	}
	}
}
});
// End of Dummy Data to comment out
*/

// Fetch Request
fetch(url, options)
.then(res => res.json())
.then(data =>{  
    console.log(data)
	let graphData = []
for (let i = 0; i < 10; i++) {
    graphData.push(
		{
			"name": data.trends[i].name,
			"volume": data.trends[i].volume
		}
	)
} 

let topics = graphData.map(object =>{
	return object.name;
})

let volumes = graphData.map(object =>{
	return object.volume;
})


// Chart JS
const myChart = document.getElementById('myChart');

  let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: topics,
      datasets: [{
        label: '# of tweets/xeets',
        data: volumes,
        borderWidth: 2,
		backgroundColor: [
			'rgba(255,99,132,0.2)',
			'rgba(255,159,64,0.2)',
			'rgba(255,205,86,0.2)',
			'rgba(75,192,192,0.2)',
			'rgba(54,162,235,0.2)',
			'rgba(153,102,255,0.2)',
			'rgba(201,203,207,0.2)'
        ],
		hoverBackgroundColor: [
			'rgb(255,99,132)' ,
			'rgb(255,159,64)' ,
			'rgb(255,205,86)',
			'rgb(75,192,192)' ,
			'rgb(54,162,235)' ,
			'rgb(153,102,255)' ,
			'rgb(201,203,207)'
			
		],
		borderColor: [
			'rgb(255,99,132)',
			'rgb(255,159,64)',
			'rgb(255,205,86)',
			'rgb(75,192,192)',
			'rgb(54,162,235)',
			'rgb(153,102,255)',
			'rgb(201,203,207)'
		]
	}]
    },
    options: {
	  indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
})
