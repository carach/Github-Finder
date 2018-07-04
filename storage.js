// Storage Controller
const StorageCtrl = (()=>{
    return {
        storeItem: (item)=>{
            let items = [];
            // Check if any items in local storage
            if (localStorage.getItem('items') === null) {
                // Push new items
                items.push(item);
                console.log('if');
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                // Get what is already in local storage
                items = JSON.parse(localStorage.getItem('items'));
                items.push(item);
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        updateItem: (updatedItem)=>{
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach((item, index)=>{
                if (item.id === updatedItem.id) {
                    items.splice(index, 1, updatedItem);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItem: (deletedItem)=>{
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach((item, index)=>{
                if (item.id === deletedItem.id) {
                    items.splice(index, 1);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearItems: ()=>{
            // Check if any items in local storage
            localStorage.removeItem('items');
        },
        getItems: ()=>{
            let items;
            if (localStorage.getItem('items') === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        }    
    }
})();