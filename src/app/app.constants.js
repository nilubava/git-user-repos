(function () {
  'use strict';

  angular
  .module('repo-app')
  .constant('ERROR_STRINGS', {
      'NO_REPOS': 'There are no repos for this git user.',
      'NO_USER': 'This git user does not exist.',
      'SERVER_DOWN': 'Sorry, the server is not responding right now. Please try again after some time.'
  })
})();
