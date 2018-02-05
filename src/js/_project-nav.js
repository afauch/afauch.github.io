


// // call getProjects
// var projectIndex = getProjects();
// //console.log('Project index: ' + projectIndex);
// createNextProjectLink();

// function getProjects() {

// 	//console.log('getProjects called');

// 	var pulseband = {
// 		name:'Pulseband',
// 		type: 'UX Design',
// 		pageId: 'p003',
// 		url:'pulseband',
// 		pwd: true,
// //		next: garden
// 	};

// 	var garden = {
// 		name:'Garden',
// 		type: 'AR/VR',
// 		pageId: 'p004',
// 		url: 'garden',
// 		pwd: true,
// //		next: arvr
// 	};

// 	var arvr = {
// 		name:'UX/UI for AR/VR',
// 		type: 'AR/VR',
// 		pageId: 'p005',
// 		url: 'arvr',
// 		pwd: true,		
// //		next: prdnjy
// 	};

// 	var prdnjy = {
// 		name:'Pride & Joy',
// 		type: 'Music Production',
// 		pageId: 'p006',
// 		url: 'prdnjy',
// 		pwd: true,		
// //		next: bindo
// 	};

// 	var bindo = {
// 		name:'Bindo',
// 		type: 'Design Research',
// 		pageId: 'p007',
// 		url: 'bindo',
// 		pwd: true,		
// //		next: ifarm
// 	};

// 	var ifarm = {
// 		name:'IFARM',
// 		type: 'Community Development',
// 		pageId: 'p008',
// 		url: 'ifarm',
// 		pwd: true,		
// //		next: echoes
// 	};

// 	var echoes = {
// 		name:'Echoes',
// 		type: 'Performance Art',
// 		pageId: 'p009',
// 		url: 'echoes',
// 		pwd: true,		
// //		next: goodmorning
// 	};

// 	var goodmorning = {
// 		name:'Good Morning',
// 		type: 'AR/VR',
// 		pageId: 'p010',
// 		url: 'goodmorning',
// 		pwd: true,		
// //		next: spoter
// 	};

// 	var spoter = {
// 		name:'Spoter',
// 		type: 'UI Design',
// 		pageId: 'p011',
// 		url:'spoter',
// 		pwd: false,		
// //		next: urbanprep
// 	};

// 	var urbanprep = {
// 		name:'Urban Prep',
// 		type: 'Education Design',
// 		pageId: 'p012',
// 		url:'urbanprep',
// 		pwd: true,		
// //		next: wit3d
// 	};

// 	var wit3d = {
// 		name:'Wit3D',
// 		type: 'AR/VR',
// 		pageId: 'p013',
// 		url: 'wit3d',
// 		pwd: true,		
// //		next: zeropercent
// 	};

// 	var zeropercent = {
// 		name:'Zero Percent',
// 		type: 'UX Design',
// 		pageId: 'p014',
// 		url: 'zeropercent',
// 		pwd: true,		
// //		next: pulseband
// 	};

// //	pulseband.next = garden;
// //	garden.next = 

// 	var projectIndex=[
// 		pulseband,
// 		garden,
// 		arvr,
// 		zeropercent,
// 		bindo,
// 		goodmorning,
// 		spoter,
// 		wit3d,
// 		zeropercent
// 	];

// 	return projectIndex;
// }

// function createNextProjectLink(){
// 	//console.log('createNewButton called');

// 	// Get the id of this page
// 	var thisId = $('body').attr('id');
// 	//console.log(thisId);

// 	// Get project should look through the index of objects
// 	for(i=0; i<projectIndex.length; i++) {
// 		//console.log('loop working');
// 		//console.log(i);
// 		// Find the project whose Id matches the current page
// 		if(projectIndex[i].pageId == thisId){

// 			// Check if this project is protected
// 			if(projectIndex[i].pwd){

// 				// If yes, call the 'requirePwd' function to
// 				// determine if this page is password protected
// 				requirePwd();

// 			}

// 			// create an int to store the index of the NEXT project
// 			var nextIndex;

// 			// If this is the last project in the mix
// 			if(i == (projectIndex.length-1)) {

// 				// The next project is the 'first' project
// 				nextIndex = 0;			

// 			} else {

// 				// Otherwise, the next project is the next project in the array
// 				nextIndex = i+1;			

// 			}

// 			// Append the name of the NEXT project
// 			$('#next-name').append(projectIndex[nextIndex].name);
// 			$('#next-type').append(projectIndex[nextIndex].type);			

// 			var url = baseUrl + '/projects/' + projectIndex[nextIndex].url + '/';
// 			// Set the link to the correct location
// 			$('a#next').attr('href',url);

// 			var nextName = projectIndex[nextIndex].name;
// 			//console.log('Next project name: ' + nextName);
// 			var nextType = projectIndex[nextIndex].type;
// 			//console.log('Next project type: ' + nextType);
// 			var nextURL = projectIndex[nextIndex].url;
// 			//console.log('Next project URL: ' + nextURL);

// 		}
// 	}
// }
