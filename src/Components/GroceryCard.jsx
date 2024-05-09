import React, { useState,useEffect} from "react";
import './GroceryCard.css';
import ItemList from "./ItemList";

const GroceryCard = () =>{

    const[storeInputData,setStoreInputData] = useState([]);

    const[inputValue,setInputValue] = useState('');

    const btnClickHandler = () =>{
        if(inputValue !== ""){
            setStoreInputData((prevData) => {
                return[...prevData, inputValue]
            });
            alert("This Item to cart");
            setInputValue("");
        }
        else{
            alert("Please Provide a Value");
        }
    }

    const AllData = () =>{
        setStoreInputData([]);
        alert("Your all Items are Deleted");
    }

    return(
        <div className="main">
            <div className="h2_plus_some_data">
                <h2 className="h2">Grocery Bud</h2>

                <div className="input_with_btn">
                    <input type="text" value={inputValue} onChange={(e)=> {setInputValue(e.target.value)}} />
                    <button className="colorSKY" onClick={btnClickHandler}>Add Item</button>
                </div>
            </div>
            <div>
                {storeInputData.map((curElm,index)=> 
                    <ItemList key={index} index={index} itemName={curElm} setStoreInputData={setStoreInputData}/>
                )}
            </div>
            <div className="all_data_div">
                    <button className="All_data_fush_btn" onClick={AllData} >All Clear</button>
            </div>
        </div>
    );
}

export default GroceryCard;