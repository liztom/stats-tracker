Stats.Router.map(function() {
  this.resource('teams', { path: '/' }, function(){
    this.resource('new_team', { path: 'teams/new'});
    this.resource('team', { path: 'teams/:id'}, function(){
      this.resource('new_player', { path: 'players/new'});
      this.resource('player', { path: ':player_id'}, function(){
        this.resource('new_shot', { path: 'shots/new'});
      });
    });
    this.resource('players', { path: '/players'});
  });
});

Stats.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});

Stats.TeamRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('team', params.id);
  }
});

Stats.PlayerRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('player', params.player_id);
  }
});

Stats.NewTeamRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('team');
  },

  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  },

  actions: {
    willTransition: function(transition) {
      var model = this.get('controller.model');
      if (model.get('isDirty') && !confirm('You have unsaved changes. They will be lost if you continue!')) {
        transition.abort();
      }
    }
  }
});

Stats.PlayersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('player');
  }
});

Stats.NewPlayerRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('player');
  },

  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  },

  actions: {
    willTransition: function(transition) {
      var model = this.get('controller.model');
      if (model.get('isDirty') && !confirm('You have unsaved changes. They will be lost if you continue!')) {
        transition.abort();
      }
    }
  }
});

Stats.NewShotRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('shot');
  }
});

