import React, { useEffect, useState } from "react";
import '../App.css';


const SearchList = () => {
    const [userList, setUserList] = useState([]);
    const [searchWord, setSearchWord] = useState();
    const getApiData = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        ).then((response) => response.json());

        // update the state
        const list = (response.map(e => {
            return e.name;
        }));
        setUserList(list);
        console.log('User list *** ', userList);
    };

    const filterBySearch = (event) => {
        console.log('search word ** ', searchWord);
        setSearchWord(event.target.value);
        let updatedList = userList;
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1;
        });

        setUserList(updatedList);




    }
    useEffect(() => {
        getApiData();
    }, []);
    return (
        <div>
            <div className="search-header">
                <div className="search-text">Search:</div>
                <input id="search-box" onChange={filterBySearch} />
            </div>
            <div id="item-list">
                <ol>
                    {userList?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
export default SearchList;