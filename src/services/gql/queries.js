export const GET_ALL_WISHES = JSON.stringify({
  query: `
query {
    allWishes{
        id
        name
        message
    }
}    
    `,
});