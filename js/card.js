class Card{
    constructor(id, name, servings, ingredients, time, description, appliance, ustensils){
        this.id = id;
        this.name = name;
        this.servings = servings;
        this.ingredients = ingredients;
        this.time = time;
        this.description = description;
        this.appliance = appliance;
        this.ustensils = ustensils;
    }

    getID(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getServings(){
        return this.servings;
    }
    getIngredients(){
        return this.ingredients;
    }
    getTime(){
        return this.time;
    }
    getDescription(){
        return this.description;
    }
    getAppliance(){
        return this.appliance;
    }
    getUstensils(){
        return this.ustensils;
    }
}

const CardFactory = {
    createCard: (id, name, servings, ingredients, time, description, appliance, ustensils) => new Card(id, name, servings, ingredients, time, description, appliance, ustensils)
}