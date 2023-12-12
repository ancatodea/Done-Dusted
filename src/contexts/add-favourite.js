import { createContext } from "react";
import AddFavourite from "../components/AddTask/AddFavourite";

export const AddFavouriteContext = createContext("");

export default function AddFavouriteContextProvider({children}) {
    function addFavourite(id) {
        // const data =
    }

// addToFavorite = (id) => {
//     const data = this.state.books.find((item) => item.id === id);
//     this.setState({
//         booksfav: [...this.state.booksfav, data],
//     });
// };

// deleteToFavorite = (id) => {
//     const hapus = this.state.booksfav.filter((item) => item.id !== id);
//     this.setState({ booksfav: hapus });
// };

    <AddFavourite onClick={addFavourite()} />;


    return(
        <AddFavouriteContext.Provider value={addFavourite}>
            {children}
        </AddFavouriteContext.Provider>
    )
}
