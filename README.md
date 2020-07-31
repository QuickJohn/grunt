# INSTALL GRUNT.JS from Net Ninja example

# Install grunt globally
npm install -g grunt.cli

# inititialize node - create package.json file
npm init

# Install grunt locally
npm install grunt -save-dev

# Create Gruntfile.js 
    # Configure tasks
	# Create task "run", and "sleep" to display in console "I am running/sleeping"
    # Load plugins
    # Resgister tasks

# Test
#
# PS C:\Users\John Quick\Desktop\Development\Test\template-01> grunt run
# Running "run" task
# I am running
#
# Done.
# PS C:\Users\John Quick\Desktop\Development\Test\template-01> grunt sleep
# Running "sleep" task
# I am sleeping
#

# Adding plugin - conatenating files plugin

	npm install grunt-contrib-concat --save-dev
	# grunt.loadNpmTasks('grunt-contrib-concat');

 	npm install grunt-contrib-uglify --save-dev
	# grunt.loadNpmTasks('grunt-contrib-uglify');

	npm install --save-dev node-sass grunt-sass
	
	npm install grunt-contrib-watch --save-dev
	# grunt.loadNpmTasks('grunt-contrib-watch');
		
	npm install grunt-contrib-cssmin --save-dev
	# grunt.loadNpmTasks('grunt-contrib-cssmin');

	npm install grunt-uncss --save-dev
	# grunt.loadNpmTasks('grunt-uncss');

# CHALLENGE 
# In template-01 folder, create grunt tasks for website

git remote add origin "https://github.com/QuickJohn/grunt.git"