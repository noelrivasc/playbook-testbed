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
