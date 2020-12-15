// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM"
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

getItem = (id) =>{
    const product = this.state.products.find(item =>item.id === id);
    return product;
};

handleDetails = (id) =>{
    const product = this.getItem(id);
    this.setState(()=>{
        return {detailedProduct: product}
    });
};

addToCart = (id) =>{
    let tempProducts = [...this.state.products]
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count +=1;
    let price = product.price;
    product.total = price;
    this.setState(()=>{
        return {products: tempProducts, cart:[...this.state.cart, product]}
    },()=>{console.log(this.state)});
};

  export default {
    createItem,
    deleteItem,
    Types
  };