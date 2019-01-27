
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
		{
	        first_name: 'John',
			last_name: 'Murphy',
	        username: 'johnmurphy123',
	        email: 'johnmurphy123@gmail.com',
	        password: 'apple123',
	        phone_number: 720-123-4567,
			user_photo: 'https://theaggie.org/wp-content/uploads/2017/09/headshot_NI.png'
    	},
		{
			first_name: 'Tim',
			last_name: 'Connors',
			username: 'timconnors258',
			email: 'timconnors258@gmail.com',
			password: 'respect123',
			phone_number: 720-555-4567,
			user_photo: 'https://pbs.twimg.com/profile_images/884980031297961984/PNNTLOhK_400x400.jpg'
		},
		{
			first_name: 'Mark',
			last_name: 'Anderson',
			username: 'markanderson321',
			email: 'markanderson321@gmail.com',
			password: 'world123',
			phone_number: 720-432-4567,
			user_photo: 'http://houston.ohsohandy.com/images/uploads/37845/m/010112010306010410200708210af8ce69f3aa11ae4a00539c-jpg.jpg'
		},
		{
			first_name: 'Eric',
			last_name: 'Wilson',
			username: 'ericwilson578',
			email: 'ericwilson578@gmail.com',
			password: 'apple123',
			phone_number: 720-967-4567,
			user_photo: 'https://image.jimcdn.com/app/cms/image/transf/dimension=314x10000:format=jpg/path/s5576b5a5c14d1243/image/i30bd90d2cb4f40bd/version/1520049681/white-guy-in-the-philippines-nathan-w-allen-via-idreamedofthis-photo-by-tiffphoto-com.jpg'
		},
		{
			first_name: 'Bonnie',
			last_name: 'Fisk',
			username: 'bonniefisk123',
			email: 'bonniefisk123@gmail.com',
			password: 'life123',
			phone_number: 720-723-4537,
			user_photo: 'http://extras.mnginteractive.com/live/media/site21/2012/0524/20120524__25dcaintw3_200.jpg'
		},
		{
			first_name: 'Andrea',
			last_name: 'Steele',
			username: 'andreasteele123',
			email: 'andreasteele123@gmail.com',
			password: 'book123',
			phone_number: 720-928-9359,
			user_photo: 'http://www.joshbrewsterphotography.com/wp-content/uploads/2015/01/29-2701-post/austin-headshots-business-16.jpg'
		},
		{
			first_name: 'Shawn',
			last_name: 'Branch',
			username: 'shawnbranch123',
			email: 'shawnbranch123@gmail.com',
			password: 'gaming123',
			phone_number: 720-493-9345,
			user_photo: 'http://www.joshbrewsterphotography.com/wp-content/uploads/2015/01/29-2701-post/austin-headshots-business-6.jpg'
		},
		{
			first_name: 'Jonny',
			last_name: 'Rand',
			username: 'jonnyrand123',
			email: 'jonnyrand123@gmail.com',
			password: 'heart123',
			phone_number: 720-938-9284,
			user_photo: ''
		},
		{
			first_name: 'Bruce',
			last_name: 'Wayne',
			username: 'brucewayne123',
			email: 'brucewayne123@gmail.com',
			password: 'outcome123',
			phone_number: 720-637-8294,
			user_photo: ''
		},
		{
			first_name: 'Clark',
			last_name: 'Kent',
			username: 'clarkkent123',
			email: 'clarkkent123@gmail.com',
			password: 'houses123',
			phone_number: 720-267-2945,
			user_photo: ''
		},
		{
			first_name: 'Brad',
			last_name: 'Pitt',
			username: 'bradpitt123',
			email: 'bradpitt123@yahoo.com',
			password: 'kids123',
			phone_number: 720-229-4883,
			user_photo: ''
		},
		{
			first_name: 'Thomas',
			last_name: 'Brady',
			username: 'thomasbrady123',
			email: 'thomasbrady123@yahoo.com',
			password: 'happy123',
			phone_number: 720-345-9345,
			user_photo: ''
		},
		{
			first_name: 'Martin',
			last_name: 'Gordon',
			username: 'martingordon123',
			email: 'martingordon123@yahoo.com',
			password: 'biggest123',
			phone_number: 720-597-2874,
			user_photo: ''
		},
		{
			first_name: 'Richie',
			last_name: 'Valens',
			username: 'richievalens123',
			email: 'richievalens@yahoo.com',
			password: 'case123',
			phone_number: 720-895-9680,
			user_photo: ''
		},
		{
			first_name: 'Kai',
			last_name: 'Rankin',
			username: 'kairankin123',
			email: 'kairankin123@yahoo.com',
			password: 'natural123',
			phone_number: 720-039-9324,
			user_photo: ''
		},
		{
			first_name: 'Jordan',
			last_name: 'Michaels',
			username: 'jordanmichaels123',
			email: 'jordanmichaels123@yahoo.com',
			password: 'thanks123',
			phone_number: 720-129-9344,
			user_photo: ''
		},
		{
			first_name: 'Joan',
			last_name: 'Rivers',
			username: 'joanrivers123',
			email: 'joanrivers123@yahoo.com',
			password: 'question123',
			phone_number: 720-230-9345,
			user_photo: ''
		},
		{
			first_name: 'Sam',
			last_name: 'Glassman',
			username: 'samglassman123',
			email: 'samglassman123@yahoo.com',
			password: 'rubber123',
			phone_number: 720-959-3956,
			user_photo: ''
		},
		{
			first_name: 'Jenny',
			last_name: 'Cooper',
			username: 'jennycooper123',
			email: 'jennycooper123@yahoo.com',
			password: 'find123',
			phone_number: 720-596-4967,
			user_photo: ''
		},
		{
			first_name: 'Ben',
			last_name: 'Ramsey',
			username: 'benramsey123',
			email: 'benramsey123@yahoo.com',
			password: 'mother123',
			phone_number: 720-607-3956,
			user_photo: ''
		},
		{
			first_name: 'Lebronis',
			last_name: 'James',
			username: 'lebronisjames123',
			email: 'lebronisjames123@yahoo.com',
			password: 'truth123',
			phone_number: 720-666-4345,
			user_photo: ''
		},
		{
			first_name: 'Evan',
			last_name: 'Ross',
			username: 'evanross123',
			email: 'evanross123@yahoo.com',
			password: 'there123',
			phone_number: 720-056-2049,
			user_photo: ''
		},
		{
			first_name: 'James',
			last_name: 'Long',
			username: 'jameslong123',
			email: 'jameslong123@yahoo.com',
			password: 'left123',
			phone_number: 720-395-3958,
			user_photo: ''
		},
		{
			first_name: 'Bert',
			last_name: 'Lawson',
			username: 'bertlawson123',
			email: 'bertlawson123@yahoo.com',
			password: 'high123',
			phone_number: 720-935-2940,
			user_photo: ''
		},
		{
			first_name: 'Jared',
			last_name: 'Moss',
			username: 'jaredmoss123',
			email: 'jaredmoss123@yahoo.com',
			password: 'ballon123',
			phone_number: 720-139-3559,
			user_photo: ''
		},
		{
			first_name: 'Aaron',
			last_name: 'Andrews',
			username: 'aaronandrews123',
			email: 'aaronandrews123@yahoo.com',
			password: 'open123',
			phone_number: 720-393-4569,
			user_photo: ''
		},
		{
			first_name: 'Alfred',
			last_name: 'Wilkins',
			username: 'alfredwilkins123',
			email: 'alfredwilkins123@yahoo.com',
			password: 'good123',
			phone_number: 720-824-3956,
			user_photo: ''
		},
		{
			first_name: 'Josh',
			last_name: 'Scales',
			username: 'joshscales123',
			email: 'joshscales123@yahoo.com',
			password: 'trip123',
			phone_number: 720-934-9456,
			user_photo: ''
		},
		{
			first_name: 'Reid',
			last_name: 'Watkins',
			username: 'reidwatkins123',
			email: 'reidwatkins123@yahoo.com',
			password: 'notice123',
			phone_number: 720-395-9357,
			user_photo: ''
		},
		{
			first_name: 'Paul',
			last_name: 'Walker',
			username: 'paulwalker123',
			email: 'paulwalker123@yahoo.com',
			password: 'fast123',
			phone_number: 720-394-1038,
			user_photo: ''
		},
		{
			first_name: 'Robert',
			last_name: 'Norwick',
			username: 'robertnorwick123',
			email: 'robertnorwick123@yahoo.com',
			password: 'means123',
			phone_number: 720-045-9395,
			user_photo: ''
		},
		{
			first_name: 'Derek',
			last_name: 'Hamilton',
			username: 'derekhamilton123',
			email: 'derekhamilton123@yahoo.com',
			password: 'please123',
			phone_number: 720-194-4957,
			user_photo: ''
		},
		{
			first_name: 'Tommy',
			last_name: 'Hilfiger',
			username: 'tommyhilfiger123',
			email: 'tommyhilfiger123@yahoo.com',
			password: 'supply123',
			phone_number: 720-395-4957,
			user_photo: ''
		},
		{
			first_name: 'Martell',
			last_name: 'Owens',
			username: 'martellowens123',
			email: 'martellowens123@yahoo.com',
			password: 'fix123',
			phone_number: 720-193-9245,
			user_photo: ''
		},
		{
			first_name: 'Jayden',
			last_name: 'Ortega',
			username: 'jaydenortega123',
			email: 'jaydenortega123@yahoo.com',
			password: 'awake123',
			phone_number: 720-944-4398,
			user_photo: ''
		},
		{
			first_name: 'Justin',
			last_name: 'Johnson',
			username: 'justinjohnson123',
			email: 'justinjohnson123@yahoo.com',
			password: 'pass123',
			phone_number: 720-293-4692,
			user_photo: ''
		},
		{
			first_name: 'Wilson',
			last_name: 'Collins',
			username: 'wilsoncollins123',
			email: 'wilsoncollins123@yahoo.com',
			password: 'beyond123',
			phone_number: 720-396-7934,
			user_photo: ''
		},
		{
			first_name: 'Richard',
			last_name: 'Pascal',
			username: 'richardpascal123',
			email: 'richardpascal123@yahoo.com',
			password: 'fired123',
			phone_number: 720-793-9246,
			user_photo: ''
		},
		{
			first_name: 'Steven',
			last_name: 'Shessler',
			username: 'stevenshessler123',
			email: 'stevenshessler123@yahoo.com',
			password: 'settle123',
			phone_number: 720-035-0847,
			user_photo: ''
		},
		{
			first_name: 'Felix',
			last_name: 'Munoz',
			username: 'felixmunoz123',
			email: 'felixmunoz123@yahoo.com',
			password: 'believe123',
			phone_number: 720-028-3950,
			user_photo: ''
		},
		{
			first_name: 'Nathan',
			last_name: 'Sanderson',
			username: 'nsanderson123',
			email: 'nsanderson123@yahoo.com',
			password: 'bye123',
			phone_number: 720-930-0385,
			user_photo: ''
		},
		{
			first_name: 'Connor',
			last_name: 'Smook',
			username: 'connorsmook123',
			email: 'connorsmook123@yahoo.com',
			password: 'vessel123',
			phone_number: 720-018-3497,
			user_photo: ''
		},
		{
			first_name: 'Jerod',
			last_name: 'Sullivan',
			username: 'jerodsullivan123',
			email: 'jerodsullivan123@yahoo.com',
			password: 'activity123',
			phone_number: 720-394-0284,
			user_photo: ''
		},
		{
			first_name: 'JR',
			last_name: 'Smith',
			username: 'jrsmith123',
			email: 'jrsmith123@yahoo.com',
			password: 'machine123',
			phone_number: 720-304-0485,
			user_photo: ''
		},
		{
			first_name: 'Sean',
			last_name: 'Meehan',
			username: 'seanmeehan123',
			email: 'seanmeehan123@yahoo.com',
			password: 'baseball123',
			phone_number: 720-588-2048,
			user_photo: ''
		},
		{
			first_name: 'Andre',
			last_name: 'Danials',
			username: 'andredanials123',
			email: 'andredanials123@yahoo.com',
			password: 'easy123',
			phone_number: 720-948-4023,
			user_photo: ''
		},
		{
			first_name: 'Thadeaus',
			last_name: 'Horton',
			username: 'thadeaushorton123',
			email: 'thadeaushorton123@yahoo.com',
			password: 'sleep123',
			phone_number: 720-039-0387,
			user_photo: ''
		},
		{
			first_name: 'Chad',
			last_name: 'Terpstra',
			username: 'chadterpstra123',
			email: 'chadterpstra123@yahoo.com',
			password: 'magic123',
			phone_number: 720-300-1941,
			user_photo: ''
		},
		{
			first_name: 'Zachary',
			last_name: 'Gilbert',
			username: 'zacharygilbert123',
			email: 'zacharygilbert123@yahoo.com',
			password: 'love123',
			phone_number: 720-318-4567,
			user_photo: ''
		},
		{
			first_name: 'Mike',
			last_name: 'Sokol',
			username: 'mikesokol123',
			email: 'mikesokol123@yahoo.com',
			password: 'back123',
			phone_number: 720-304-4454,
			user_photo: ''
		},
		{
			first_name: 'Trey',
			last_name: 'Smith',
			username: 'treysmith123',
			email: 'treysmith123@yahoo.com',
			password: 'expected123',
			phone_number: 720-204-5000,
			user_photo: ''
		},
		{
			first_name: 'Desmond',
			last_name: 'Davis',
			username: 'desmonddavis123',
			email: 'desmonddavis123@yahoo.com',
			password: 'both123',
			phone_number: 720-004-4334,
			user_photo: ''
		},
		{
			first_name: 'Tommy',
			last_name: 'Watson',
			username: 'tommywatson123',
			email: 'tommywatson123@yahoo.com',
			password: 'nothing123',
			phone_number: 720-495-0598,
			user_photo: ''
		},
		{
			first_name: 'Luis',
			last_name: 'Urraca',
			username: 'luisurraca123',
			email: 'luisurraca123@yahoo.com',
			password: 'killing123',
			phone_number: 720-394-5999,
			user_photo: ''
		},
		{
			first_name: 'Brandon',
			last_name: 'Leal',
			username: 'brandonleal123',
			email: 'brandonleal123@yahoo.com',
			password: 'dead123',
			phone_number: 720-488-0498,
			user_photo: ''
		},
		{
			first_name: 'John',
			last_name: 'Duran',
			username: 'johnduran123',
			email: 'johnduran123@yahoo.com',
			password: 'clear123',
			phone_number: 720-303-7203,
			user_photo: ''
		},
		{
			first_name: 'Ramon',
			last_name: 'Acosta',
			username: 'ramonacosta123',
			email: 'ramonacosta123@yahoo.com',
			password: 'look123',
			phone_number: 720-591-6567,
			user_photo: ''
		},
		{
			first_name: 'Paul',
			last_name: 'Wall',
			username: 'paulwall123',
			email: 'paulwall123@yahoo.com',
			password: 'dealt123',
			phone_number: 720-200-4333,
			user_photo: ''
		},
		{
			first_name: 'Vinny',
			last_name: 'Donaghue',
			username: 'vinnydonaghue123',
			email: 'vinnydonaghue123@yahoo.com',
			password: 'alone123',
			phone_number: 720-555-5555,
			user_photo: ''
		},
		{
			first_name: 'Barack',
			last_name: 'Obama',
			username: 'barackobama123',
			email: 'barackobama123@yahoo.com',
			password: 'pres123',
			phone_number: 720-444-4444,
			user_photo: ''
		},
		{
			first_name: 'Jeff',
			last_name: 'Davis',
			username: 'jeffdavis123',
			email: 'jeffdavis123@yahoo.com',
			password: 'referee123',
			phone_number: 720-222-2227,
			user_photo: ''
		},
		{
			first_name: 'Liam',
			last_name: 'Gallagher',
			username: 'liamgallagher123',
			email: 'liamgallagher123@yahoo.com',
			password: 'shame123',
			phone_number: 720-444-4467,
			user_photo: ''
		},
		{
			first_name: 'Jarell',
			last_name: 'Wyatt',
			username: 'jarellwyatt123',
			email: 'jarellwyatt123@yahoo.com',
			password: 'football123',
			phone_number: 720-131-3131,
			user_photo: ''
		},
		{
			first_name: 'Dale',
			last_name: 'Trujillo',
			username: 'daletrujillo123',
			email: 'daletrujillo123@yahoo.com',
			password: 'face123',
			phone_number: 720-111-1117,
			user_photo: ''
		},
		{
			first_name: 'Micah',
			last_name: 'Prien',
			username: 'micahprien123',
			email: 'micahprien123@yahoo.com',
			password: 'mountian123',
			phone_number: 720-030-3030,
			user_photo: ''
		},
		{
			first_name: 'Tucker',
			last_name: 'Dunn',
			username: 'tuckerdunn123',
			email: 'tuckerdunn123@yahoo.com',
			password: 'castle123',
			phone_number: 720-000-0000,
			user_photo: ''
		},
		{
			first_name: 'Kendall',
			last_name: 'Gregory',
			username: 'kendallgregory123',
			email: 'kendallgregory123@yahoo.com',
			password: 'colorado123',
			phone_number: 720-090-9090,
			user_photo: ''
		},
		{
			first_name: 'Payton',
			last_name: 'Johnson',
			username: 'paytonjohnson123',
			email: 'paytonjohnson123@yahoo.com',
			password: 'father123',
			phone_number: 720-929-2929,
			user_photo: ''
		},
		{
			first_name: 'Nick',
			last_name: 'LaRocca',
			username: 'nicklarocca123',
			email: 'nicklarocca123@yahoo.com',
			password: 'next123',
			phone_number: 720-415-4156,
			user_photo: ''
		},
		{
			first_name: 'Clayton',
			last_name: 'Bowen',
			username: 'claytonbowen123',
			email: 'claytonbowen123@yahoo.com',
			password: 'step123',
			phone_number: 720-901-9017,
			user_photo: ''
		},
		{
			first_name: 'Matt',
			last_name: 'Talley',
			username: 'matttalley123',
			email: 'matttalley123@yahoo.com',
			password: 'view123',
			phone_number: 720-111-1137,
			user_photo: ''
		},
		{
			first_name: 'Justin',
			last_name: 'Hour',
			username: 'justinhour123',
			email: 'justinhour123@yahoo.com',
			password: 'harmony123',
			phone_number: 720-232-3232,
			user_photo: ''
		},
		{
			first_name: 'Anthony',
			last_name: 'Choy',
			username: 'anthonychoy123',
			email: 'anthonychoy123@yahoo.com',
			password: 'estes123',
			phone_number: 720-676-7676,
			user_photo: ''
		},
		{
			first_name: 'Morgan',
			last_name: 'Burnett',
			username: 'morganburnett123',
			email: 'morganburnett123@yahoo.com',
			password: 'parker123',
			phone_number: 720-585-8585,
			user_photo: ''
		},
		{
			first_name: 'Kevin',
			last_name: 'Leman',
			username: 'kevinleman123',
			email: 'kevinleman123@yahoo.com',
			password: 'florida123',
			phone_number: 720-407-7777,
			user_photo: ''
		},
		{
			first_name: 'Eric',
			last_name: 'Williams',
			username: 'ericwilliams123',
			email: 'ericwilliams123@yahoo.com',
			password: 'cheese123',
			phone_number: 720-133-4467,
			user_photo: ''
		},
		{
			first_name: 'Ramsey',
			last_name: 'Stone',
			username: 'ramseystone123',
			email: 'ramseystone123@yahoo.com',
			password: 'rats123',
			phone_number: 720-333-4263,
			user_photo: ''
		},
		{
			first_name: 'Cameron',
			last_name: 'Smith'
			username: 'cameronsmith123',
			email: 'cameronsmith123@yahoo.com',
			password: 'timeout123',
			phone_number: 720-223-5557,
			user_photo: ''
		},
      ]);
    });
};
