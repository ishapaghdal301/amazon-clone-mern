export const getproducts = () => async(dispatch)=>{
    try {
        const data = await fetch("http://localhost:8005/getproducts",{
            method : "GET",
            headers:{
                "content-Type" : "application/json"
            }
        });

        const res = await data.json();
        console.log(res);
        dispatch({type:"SUCCSESS_GET_PRODUCTS",payload:res})
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
    }
}