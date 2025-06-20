# Participation Playbook testbed
This repo offers commands to simplify the instancing and testing of the Participation Playbook updates.

## Dependencies

* DDEV 1.21 or later
* Docker
* ZSH

## Commands

### spawn-test-site

* Runs `destroy-instance`
* Runs `create-new-instance`

### destroy-instance

* Destroys the DDEV containers
* Deletes the files in ./playbook

### create-new-instance

* Clones the playbook repository
* Starts the DDEV instance
* Installs composer dependencies
* Gives the DDEV instance a random, 8-character name (and registers the name in the prussianblue/instance-id file)
* Installs the site via Drush
* Launches the site
* Copies the login URL to the clipboard

### create-test-content

Creates all the content needed to test the basic behaviors of the Playbook.

The behaviors covered are:
- Producing a results page when a wizard is answered
- Including variables from the webform in the results pages
- Determining the need to include conditional paragraphs based on their twig code
- Determining the correct process code from the answers to a keystone wizard, using computed twig in the webform
- Creating a process index for the correct process based on keystone answers
- Including the correct components in the index, based on the selected process

The contents generated to that effect are:

- A stand-alone wizard, with variables and conditionals; can lead to a default process (default_process_code) or to an alternative (alternative_process_code) depending on a question, to test conditional process selection
- A keystone wizard, with variables and conditionals
- Component wizards, bare bones
- Two process templates, one for each of the possible keystone selections
