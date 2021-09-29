import ListaProductos from "../components/lista-productos";

const Home = () => {
    return (
        <div>    
            <h1 className="text-center mt-5 mb-5"> Top products</h1>
            <ListaProductos/>
        </div>
    );
    
};

export default Home;