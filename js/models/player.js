Stats.Player = DS.Model.extend({
  name: DS.attr('string'),
  team: DS.belongsTo('team', {async: true}),
  shots: DS.hasMany('shot', {async: true}),

  madeShots: function(){
    var shots = this.get('shots');
    return shots.filterBy('attempt', 1).get('length');
  }.property('shots.@each.attempt')


});
