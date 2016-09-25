angular.module('angularSPA').controller('mainController', MainController);

MainController.$inject = ['authService', '$cookies'];
function MainController(authService, $cookies){
    var vm = this;

    vm.currentUserName = '';

    init();

    ////////////

    function init(){
       

        authService.getUserInfo().then(function(success){
            vm.currentUserName = success.data.userName;
        });
    }
}