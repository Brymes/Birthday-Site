export function ADD_WISH(payload) {
  return JSON.stringify({
    query: `mutation {
    addWish(name:"${payload.name}", message:"${payload.message}"){
        addWishResp
    }
}`,
  });
}
