const Item = ({items ,title}) => {

    console.log(items);
    return (
   
   <div className="item-list">
   <h1 style={{fontSize:"25px",float:"left",fontFamily: "Quicksand"}}>Order ID: 0111 {}</h1><br />
   
   <br /><h1 style={{fontSize:"25px",float:"left",fontFamily: "Quicksand"}}>Address : 14/7,Samagi uyana,Nagoda.{}</h1><br />
   
   <br /><h1 style={{fontSize:"25px",float:"left",fontFamily: "Quicksand"}}>Date : </h1>
   {items.map((item)=>(

       <div className="item" key={item.id}>   
           <div className="text-content">
                <h1 style={{fontSize:"20px"}}>{item.name}</h1>
                <p style={{}}>{item.description}</p>
                <p> </p>                   
                <p >Price : {item.price}</p>
                <p >quantity : {item.quantity}</p> 
           </div>
            <img src={item.img} alt="picture"/>
        </div> ))}
        <div className="status" ><h4 >Status : Pending....</h4></div>
   </div>  );
   }
    
   export default Item;