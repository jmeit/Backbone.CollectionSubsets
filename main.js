// Simple Backbone Collection subsets
Backbone.Collection.Subset = Backbone.Collection.extend({
    
    // superset_coll should be overriden for Subset to be useful
    superset_coll: new Backbone.Collection([]),
    
    // filter_cb should be overriden for Subset to be useful
    filter_cb: function(m){ return true; },
    
    initialize: function( models, superset_coll, filter_cb )
    {
        this.superset_coll = superset_coll;

        this.filter_cb = filter_cb;
        this.setWithFilter();

        this.listenTo(superset_coll, `update`, this.setWithFilter);
    },

    setWithFilter: function()
    {
        return this.set( this.superset_coll.filter( this.filter_cb ) );
    },

    fetch: function(options){
        this.superset_coll.fetch(options);
    }
});
