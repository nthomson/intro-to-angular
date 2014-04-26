angular.module('IntroApp', [])
.directive('cspSlideReplace', [function(){
  return {
    restrict: 'E',
    templateUrl: '/templates/cspSlideReplace.html',
    scope: {
      'name': '@', // Name of service, i.e. 'Facebook', 'Twitter'
      'logo': '@', // Path to large image
      'icon': '@', // Path to small image
      'service': '='
    },
  };
}])
