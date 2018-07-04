// Item Controller
const ItemCtrl = (() => {
    // Item constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data structure / State
    const data = {
        // items: [
        //     // {id: 0,
        //     // name: 'Steak Dinner',
        //     // calories: 1200},
        //     // {id: 0,
        //     // name: 'Cookie',
        //     // calories: 400},
        //     // {id: 0,
        //     // name: 'Eggs',
        //     // calories: 300}
        // ],
        items: StorageCtrl.getItems(),
        currentItem: null,
        totalCalories: 0
    }
    console.log('Data:', data);
    return {
        getItems: ()=>{
            return data.items;
        },
        addItem: (name, calories)=>{
            // Create ID
            let id;
            if (data.items.length > 0) {
                id = data.items[data.items.length - 1].id + 1;
            } else {
                id = 0;
            }

            // Calories to number
            calories = parseInt(calories);
            const newItem = new Item(id, name, calories);
            data.items.push(newItem);
            return newItem;
        },
        getItemById: (id)=>{
            let found = null;
            // Loop through items
            data.items.forEach((item)=>{
                if (item.id === id) {
                    found = item;
                }
            });
            return found;
        },
        updateItem: (name, calories)=>{
            // Calories to number
            calories = parseInt(calories);

            let found = null;
            // Loop through items
            data.items.forEach((item)=>{
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem: (id)=>{
            // Get IDs
            const ids = data.items.map((item)=>{
                return item.id;
            });

            // Get index
            const index = ids.indexOf(id);
            console.log(index);
            // Remove item
            data.items.splice(index, 1);
        },
        clearAllItems: ()=>{
            data.items = [];
        },
        setCurrentItem: (item)=>{
            data.currentItem = item;
        },
        getCurrentItem: ()=>{
            return data.currentItem;
        },
        getTotalCalories: ()=>{
            let total= 0;
            data.items.forEach((item)=>{
                total += item.calories;
            });

            data.totalCalories = total;
            return data.totalCalories;
        },
        logData: ()=>{
            return data;
        }
    }
})();