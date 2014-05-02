Stats.PlayerController = Ember.ObjectController.extend({
  totalPoints: Ember.computed.sum(Ember.computed.mapBy("shots", "points"))
});
