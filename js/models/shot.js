Stats.Shot = DS.Model.extend({
  points: DS.attr('string'),
  attempt: DS.attr('string'),
  player: DS.belongsTo('player', {async: true}),
});
