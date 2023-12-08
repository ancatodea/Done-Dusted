import AddTask from "../components/AddTask/AddTask";
import Title from "../components/Header/Title";

export default function Favourites() {
    return (
        <>
            <Title title="Favourites things to do" />
            <AddTask />
            <p>There are no favourites tasks right now</p>
        </>
    );
}