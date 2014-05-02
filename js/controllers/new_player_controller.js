Stats.NewPlayerController = Ember.ObjectController.extend({
  needs: 'team',
  team: Ember.computed.alias("controllers.team"),

  actions: {
    addPlayer: function() {
      var team = this.get('team').get('model');
      var player = this.get('model');
      var controller = this;

      player.save();
        team.get('players').pushObject(player);
      team.save().then(function() {
        controller.transitionToRoute('team', team);
      });
    }
  }
});
