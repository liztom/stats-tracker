Stats.NewShotController = Ember.ObjectController.extend({
  needs: 'player',
  player: Ember.computed.alias("controllers.player"),
  point: [{points: "1", id: 1}, {points: "2", id: 2},{points: "3", id: 3}],
  attempts: [{attempt: "Yes", id: 1}, {attempt: "No", id: 0}],

  actions: {
    addShot: function() {
      var player = this.get('player').get('model');
      var attempt = this.get('attempt');
      var points = this.get('points');
      var shot = this.get('model');
      var controller = this;

      shot.save();
        player.get('shots').pushObject(shot);
      player.save().then(function() {
        controller.transitionToRoute('player', player);
      });
    }
  }
});
