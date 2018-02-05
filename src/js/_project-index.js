/*––––––––––––––––––––––––––––––
_PROJECT_INDEX.JS

Master metadata and page hashes for
each project

––––––––––––––––––––––––––––––*/

var PI = {

	projects: [],
	projectsById: {},
	thisPageId: null,
	thisProject: null,

	InitProjects: function() {

		// Initialize all projects and store them
		// in a master associative array
		// that can be accessed by pageId

		var pulseband = new PI.project();
			pulseband.name = 'Pulseband';
			pulseband.type = 'UX';
			pulseband.pageId = 'p003';
			pulseband.url = 'pulseband';			
			pulseband.pwd = false;
			pulseband.next = 'garden';
		PI.AddProject(pulseband);

		var jibo = new PI.project();
			jibo.name = 'Jibo';
			jibo.type = 'UX';
			jibo.pageId = 'p016';
			jibo.url = 'jibo';			
			jibo.pwd = true;
			jibo.next = 'pulseband';
		PI.AddProject(jibo);


		console.log(PI.projects);
		console.log(PI.projectsById);

	},


	AssignThisPage: function() {

		PI.thisPageId = $('body').attr('id');
		PI.thisProject = PI.projectsById[PI.thisPageId];

		// console.log("thispageid = " + PI.thisPageId);

	},

	AddProject: function(project) {

		PI.projectsById[project.pageId] = project;
		PI.projects.push(project);

	},

	project: function(name, type, pageId, url, pwd, next){

		this.name = name;
		this.type = type;
		this.pageId = pageId;
		this.url = url;
		this.thumbnail = url + '/thumbnail.png';
		this.pwd = pwd;
		this.next = next;
	},

	projectById: function(pageId, project) {
		this.pageId = pageId;
		this.project = project;
	}

};
