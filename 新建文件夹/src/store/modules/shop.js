
const getDefaultState = () => {
    return {
        shopItem: {}
    }
}
const state = getDefaultState()
const mutations = {
    UPDATE_SHOP_ITEM(state,data){
        state.shopItem = data
    }
}
const actions = {
    updateShopItem({commit},data){
        return new Promise((resolve,reject)=>{
            commit('UPDATE_SHOP_ITEM',data)
            resolve({
                message:"更新shopItem"
            })
        }).catch((err)=>{
            reject(err)
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}