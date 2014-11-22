'use strict';

angular.module('makeYourOffer.version', [
  'makeYourOffer.version.interpolate-filter',
  'makeYourOffer.version.version-directive'
])

.value('version', '0.1');
