function skillsMember() {
    return {
        restrict: 'E', 
        templateUrl: 'modules/skills/views/member.html', 
        controller: 'SkillsMemberController', 
        contrellerAs: 'vm', 
        bindToController: true, 
        scope: {
            memeber: '='
        }
    };
}
